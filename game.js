import { products as baseProducts, questions } from './products.js';

let products = [...baseProducts];
let currentQuestionIndex = 0;
let askedQuestionIds = new Set();
let candidateScores = [];

const screens = {
    start: document.getElementById('start-screen'),
    question: document.getElementById('question-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    questionCount: document.getElementById('question-count'),
    questionText: document.getElementById('question-text'),
    optionBtns: document.querySelectorAll('.option-btn'),
    progressBar: document.getElementById('progress-bar'),
    productImg: document.getElementById('product-img'),
    productName: document.getElementById('product-name'),
    restartBtn: document.getElementById('restart-btn'),
    statusText: document.createElement('p')
};

// Setup status text for dynamic loading
elements.statusText.style.fontSize = '0.8rem';
elements.statusText.style.marginTop = '1rem';
elements.statusText.style.color = 'var(--accent-color)';
screens.start.querySelector('.content-box').appendChild(elements.statusText);

async function loadDynamicTrends() {
    elements.statusText.innerText = "Checking internet for latest trends...";
    try {
        // Fetch from the local trends.json (which will be in the GitHub repo)
        const response = await fetch('./trends.json');
        if (response.ok) {
            const extraProducts = await response.json();
            products = [...baseProducts, ...extraProducts];
            elements.statusText.innerText = `Successfully loaded ${extraProducts.length} new viral trends!`;
        } else {
            elements.statusText.innerText = "Using offline trends database.";
        }
    } catch (e) {
        console.warn("Could not fetch dynamic trends:", e);
        elements.statusText.innerText = "Offline mode active.";
    }
    initGameDetails();
}

function initGameDetails() {
    candidateScores = products.map(p => ({ ...p, score: 0 }));
    askedQuestionIds.clear();
    currentQuestionIndex = 1;
}

function showScreen(screenId) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenId].classList.add('active');
}

function startGame() {
    showScreen('question');
    nextQuestion();
}

function nextQuestion() {
    let bestQuestion = null;
    let minDiff = Infinity;

    const availableQuestions = questions.filter(q => !askedQuestionIds.has(q.id));

    if (availableQuestions.length === 0 || currentQuestionIndex > 20) {
        showGuess();
        return;
    }

    const sorted = [...candidateScores].sort((a, b) => b.score - a.score);
    
    // Win condition: if one candidate is significantly ahead
    if (sorted.length > 1 && sorted[0].score - sorted[1].score > 4 && currentQuestionIndex > 8) {
        showGuess();
        return;
    }

    // High entropy question selection
    const topCandidates = sorted.slice(0, 8);
    
    availableQuestions.forEach(q => {
        let yesCount = 0;
        let noCount = 0;
        topCandidates.forEach(c => {
            if (c.traits[q.id] === 1) yesCount++;
            else if (c.traits[q.id] === -1) noCount++;
        });
        
        const diff = Math.abs(yesCount - noCount);
        if (diff < minDiff) {
            minDiff = diff;
            bestQuestion = q;
        }
    });

    if (!bestQuestion) bestQuestion = availableQuestions[0];

    askedQuestionIds.add(bestQuestion.id);
    elements.questionCount.innerText = `Question #${currentQuestionIndex}`;
    elements.questionText.innerText = bestQuestion.text;
    elements.questionText.dataset.traitId = bestQuestion.id;
    
    const progress = Math.min((currentQuestionIndex / 15) * 100, 100);
    elements.progressBar.style.width = `${progress}%`;
}

function handleAnswer(weight) {
    const traitId = elements.questionText.dataset.traitId;
    
    candidateScores.forEach(c => {
        const productTrait = c.traits[traitId];
        if (productTrait !== undefined && productTrait !== 0) {
            c.score += weight * productTrait;
        }
    });

    currentQuestionIndex++;
    nextQuestion();
}

function showGuess() {
    const winner = [...candidateScores].sort((a, b) => b.score - a.score)[0];
    elements.productImg.src = winner.image;
    elements.productName.innerText = winner.name;
    showScreen('result');
}

// Event Listeners
elements.startBtn.addEventListener('click', startGame);

elements.optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const weight = parseFloat(btn.dataset.answer);
        handleAnswer(weight);
    });
});

elements.restartBtn.addEventListener('click', () => {
    initGameDetails();
    showScreen('start');
});

// Load trends then init
loadDynamicTrends();
initGameDetails();
showScreen('start');
