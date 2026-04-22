export const questions = [
    { id: "isDrink", text: "Is it something you can drink?" },
    { id: "holdsWater", text: "Is it designed to hold or carry liquids?" },
    { id: "isToy", text: "Is it primarily a toy or for play?" },
    { id: "isKitchen", text: "Is it usually used in the kitchen?" },
    { id: "expensive", text: "Is it considered expensive (e.g., over $50)?" },
    { id: "pre2020", text: "Did this go viral before the year 2020?" },
    { id: "madeOfSilicone", text: "Is it made primarily of silicone or rubber?" },
    { id: "wornOnFeet", text: "Is it something you wear on your feet?" },
    { id: "isSoft", text: "Is it soft or squishy to the touch?" },
    { id: "forCleaning", text: "Is it used for cleaning?" },
    { id: "isElectronic", text: "Does it require electricity or batteries?" },
    { id: "isBeauty", text: "Is it a beauty or hair care product?" },
    { id: "wornOnHead", text: "Do you wear it on your head?" },
    { id: "forSleep", text: "Is it related to sleep or relaxation?" },
    { id: "forExercise", text: "Is it for health, fitness, or exercise?" }
];

export const products = [
    {
        name: "Stanley Quencher Cup",
        image: "https://images.unsplash.com/photo-1701382400305-67503934375b?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: 1, isDrink: -1, isToy: -1, isKitchen: 1, expensive: 0, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Prime Hydration",
        image: "https://images.unsplash.com/photo-1678125464875-149b0797746f?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: 1, isDrink: 1, isToy: -1, isKitchen: 1, expensive: -1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Fidget Spinner",
        image: "https://images.unsplash.com/photo-1494498902093-87f291949d17?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: 1, isKitchen: -1, expensive: -1, pre2020: 1, madeOfSilicone: 0, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Air Fryer",
        image: "https://images.unsplash.com/photo-1626075152136-1e6ed18820c4?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: 1, expensive: 1, pre2020: 0, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Squishmallows",
        image: "https://images.unsplash.com/photo-1620800045507-628f80459960?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: 1, isKitchen: -1, expensive: -1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: 1, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Dyson Airwrap",
        image: "https://images.unsplash.com/photo-1654483785121-689e472659e5?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: 1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: 1, wornOnHead: 1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Owala FreeSip",
        image: "https://images.unsplash.com/photo-1621213560738-9588647a7f45?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: 1, isDrink: -1, isToy: -1, isKitchen: 1, expensive: -1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Ninja CREAMi",
        image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: 1, expensive: 1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "AirPods Max",
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: 1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: -1, wornOnHead: 1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Walking Pad",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: 1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: 1 }
    },
    {
        name: "Laneige Lip Mask",
        image: "https://images.unsplash.com/photo-1596462502278-27bfaf410911?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: -1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: 1, forCleaning: -1, isElectronic: -1, isBeauty: 1, wornOnHead: -1, forSleep: 1, forExercise: -1 }
    },
    {
        name: "Sunset Lamp",
        image: "https://images.unsplash.com/photo-1616489953149-a21226027a05?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: -1, pre2020: -1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: -1, wornOnHead: -1, forSleep: 1, forExercise: -1 }
    },
    {
        name: "Scrub Daddy",
        image: "https://images.unsplash.com/photo-1632733711679-5292d60399d2?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: 1, expensive: -1, pre2020: 1, madeOfSilicone: -1, wornOnFeet: -1, isSoft: 0, forCleaning: 1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Shark Slides",
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: -1, pre2020: -1, madeOfSilicone: 1, wornOnFeet: 1, isSoft: 1, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Pop It",
        image: "https://images.unsplash.com/photo-1622359487376-78c772cb3f10?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: 1, isKitchen: -1, expensive: -1, pre2020: -1, madeOfSilicone: 1, wornOnFeet: -1, isSoft: 0, forCleaning: -1, isElectronic: -1, isBeauty: -1, wornOnHead: -1, forSleep: -1, forExercise: -1 }
    },
    {
        name: "Kindle Paperwhite",
        image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d7?auto=format&fit=crop&q=80&w=400",
        traits: { holdsWater: -1, isDrink: -1, isToy: -1, isKitchen: -1, expensive: 1, pre2020: 0, madeOfSilicone: -1, wornOnFeet: -1, isSoft: -1, forCleaning: -1, isElectronic: 1, isBeauty: -1, wornOnHead: -1, forSleep: 1, forExercise: -1 }
    }
];
