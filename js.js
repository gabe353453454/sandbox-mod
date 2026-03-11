elements.cornstarch = {
    color: "#ebe9e1",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 1500,
    tempHigh: 200,
    stateHigh: "ash",
    reactions: {
        "water": { elem1: "oobleck", elem2: null }
    }
};

elements.oobleck = {
    color: "#fcfaf2",
    behavior: [
        "XX|XX|XX",
        "M2|XX|M2",
        "M1|M1|M1",
    ],
    category: "liquids",
    state: "liquid",
    viscosity: 5000, // Very high viscosity to simulate thickness
    density: 1200,
    reactions: {
        "fire": { elem1: "ash" }
    }
};
