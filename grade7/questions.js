/**
 * Science 7 Quiz Bee Question Bank Module
 * Round Timers:
 * - EASY: 10 Seconds
 * - AVERAGE: 15 Seconds
 * - DIFFICULT: 20 Seconds
 * - CLINCHER: 20 Seconds
 */

export const DIFFICULTY_TIMERS = {
  EASY: 10,
  AVERAGE: 15,
  MODERATE: 15,
  DIFFICULT: 20,
  CLINCHER: 20
};

export const questions = [
  // --- EASY ROUND ---
  {
    id: "easy_1",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "Which part of the compound microscope controls the amount of light that reaches the specimen?",
    options: ["Eyepiece", "Stage clips", "Iris diaphragm", "Coarse adjustment knob"],
    answerIndex: 2
  },
  {
    id: "easy_2",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "Which state of matter has a definite volume but takes the shape of its container?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answerIndex: 1
  },
  {
    id: "easy_3",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "In a saltwater solution, which component acts as the solute?",
    options: ["Water", "Salt", "Both water and salt", "Neither"],
    answerIndex: 1
  },
  {
    id: "easy_4",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "What is the basic structural and functional unit of all living organisms?",
    options: ["Tissue", "Organ", "Cell", "Organelle"],
    answerIndex: 2
  },
  {
    id: "easy_5",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "Which organelle is known as the powerhouse of the cell because it generates ATP?",
    options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"],
    answerIndex: 2
  },
  {
    id: "easy_6",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "What type of reproduction involves only one parent and produces offspring that are genetically identical to the parent?",
    options: ["Sexual reproduction", "Asexual reproduction", "Fertilization", "Pollination"],
    answerIndex: 1
  },
  {
    id: "easy_7",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "Which unit of measurement is the SI base unit for temperature?",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
    answerIndex: 2
  },
  {
    id: "easy_8",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "Which method of heat transfer occurs through direct physical contact between solids?",
    options: ["Conduction", "Convection", "Radiation", "Insulation"],
    answerIndex: 0
  },
  {
    id: "easy_9",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "What type of wave requires a medium to travel through?",
    options: ["Electromagnetic wave", "Mechanical wave", "Radio wave", "Light wave"],
    answerIndex: 1
  },
  {
    id: "easy_10",
    category: "EASY",
    type: "MULTIPLE_CHOICE",
    question: "What subatomic particles inside the nucleus were named and confirmed by Ernest Rutherford in 1917?",
    options: ["Neutrons", "Protons", "Electrons", "Orbit"],
    answerIndex: 1
  },

  // --- AVERAGE ROUND ---
  {
    id: "avg_1",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "What type of solution contains the maximum amount of dissolved solute at a given temperature?",
    options: ["Unsaturated Solution", "Saturated Solution", "Supersaturated Solution", "Dilute Solution"],
    answerIndex: 1
  },
  {
    id: "avg_2",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "If an objective lens has a magnifying power of 40x and the eyepiece lens has a magnification of 10x, what is the total magnification of the microscope?",
    options: ["50x", "300x", "400x", "4000x"],
    answerIndex: 2
  },
  {
    id: "avg_3",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "In the biological hierarchy of organization, what level is formed by a group of similar tissues working together to perform a specific function?",
    options: ["Organelle", "Organ System", "Organ", "Organism"],
    answerIndex: 2
  },
  {
    id: "avg_4",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "Name the cell structure present in plant cells that provides structural support and rigidity, but is absent in animal cells.",
    options: ["Cell membrane", "Cell wall", "Cytoplasm", "Vacuole"],
    answerIndex: 1
  },
  {
    id: "avg_5",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "What scientific instrument is used to measure force, typically calibrated in Newtons?",
    options: ["Spring balance", "Triple beam balance", "Graduated cylinder", "Barometer"],
    answerIndex: 0
  },
  {
    id: "avg_6",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "What form of energy is stored in the chemical bonds of substances like food, fuel, and batteries?",
    options: ["Thermal energy", "Radiant energy", "Chemical potential energy", "Mechanical energy"],
    answerIndex: 2
  },
  {
    id: "avg_7",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "In a food chain, what ecological role is played by organisms like fungi and bacteria that break down dead organic matter?",
    options: ["Producers", "Primary Consumers", "Decomposers", "Scavengers"],
    answerIndex: 2
  },
  {
    id: "avg_8",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "What phase change occurs when a substance transitions directly from a solid to a gas without turning into a liquid first?",
    options: ["Evaporation", "Sublimation", "Deposition", "Condensation"],
    answerIndex: 1
  },
  {
    id: "avg_9",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "What property of light causes an object placed underwater to appear bent or displaced?",
    options: ["Reflection", "Refraction", "Diffraction", "Absorption"],
    answerIndex: 1
  },
  {
    id: "avg_10",
    category: "AVERAGE",
    type: "MULTIPLE_CHOICE",
    question: "What type of wave motion occurs when the particles of the medium vibrate perpendicular to the direction of wave travel?",
    options: ["Longitudinal wave", "Transverse wave", "Surface wave", "Electromagnetic wave"],
    answerIndex: 1
  },

  // --- DIFFICULT ROUND (Original Short-Answer / Identification Format) ---
  {
    id: "diff_1",
    category: "DIFFICULT",
    type: "IDENTIFICATION",
    question: "A sugar solution is prepared by dissolving 25 grams of sugar in 75 grams of water. What is the concentration of the solution expressed as mass percent (% m/m)?",
    acceptableAnswers: ["25%", "25 %", "25"]
  },
  {
    id: "diff_2",
    category: "DIFFICULT",
    type: "IDENTIFICATION",
    question: "A car travels a total distance of 180 kilometers in 3 hours. Calculate its average speed in meters per second (m/s).",
    acceptableAnswers: ["16.67m/s", "16.67 m/s", "16.67", "16.67m/s."]
  },
  {
    id: "diff_3",
    category: "DIFFICULT",
    type: "IDENTIFICATION",
    question: "What refers to the strength of an earthquake measured at a specific location based on its observable effects on people, structures, and land surfaces?",
    acceptableAnswers: ["Intensity"]
  },
  {
    id: "diff_4",
    category: "DIFFICULT",
    type: "IDENTIFICATION",
    question: "During which specific stage of mitosis do sister chromatids separate at the centromere and move toward opposite poles of the cell?",
    acceptableAnswers: ["Anaphase"]
  },
  {
    id: "diff_5",
    category: "DIFFICULT",
    type: "IDENTIFICATION",
    question: "What type of geological fault occurs when two blocks of crust slide past each other horizontally with little vertical movement?",
    acceptableAnswers: ["Strike-slip fault", "Strike slip fault", "Strike-slip"]
  },

  // --- CLINCHER ROUND (Original Short-Answer / Identification Format) ---
  {
    id: "clincher_1",
    category: "CLINCHER",
    type: "IDENTIFICATION",
    question: "What is the term for the variable in an experiment that is intentionally changed or manipulated by the researcher?",
    acceptableAnswers: ["Independent variable", "Independent"]
  },
  {
    id: "clincher_2",
    category: "CLINCHER",
    type: "IDENTIFICATION",
    question: "What unstable solution holds more dissolved solute than its normal saturation capacity at a given temperature?",
    acceptableAnswers: ["Supersaturated solution", "Supersaturated"]
  },
  {
    id: "clincher_3",
    category: "CLINCHER",
    type: "IDENTIFICATION",
    question: "A human body cell containing 46 chromosomes undergoes 3 consecutive rounds of mitotic division. How many total daughter cells are produced, and how many chromosomes does each contain?",
    acceptableAnswers: [
      "8 daughter cells, each with 46 chromosomes",
      "8 cells, 46 chromosomes",
      "8 cells, 23 pairs",
      "8 daughter cells, 46 chromosomes",
      "8 cells, 46"
    ]
  }
];

/**
 * Strips correct answers before transmitting question payloads to student devices over WebRTC.
 * 
 * @param {number} index - Index of question in questions array
 * @returns {Object|null}
 */
export function getSanitizedQuestionForClient(index) {
  const q = questions[index];
  if (!q) return null;

  const payload = {
    id: q.id,
    index: index,
    total: questions.length,
    category: q.category,
    type: q.type, // "MULTIPLE_CHOICE" or "IDENTIFICATION"
    question: q.question,
    timeLimit: DIFFICULTY_TIMERS[q.category] || 15
  };

  if (q.type === "MULTIPLE_CHOICE") {
    payload.options = q.options;
  }

  return payload;
}

/**
 * Validates player submission on host.
 * 
 * @param {number} questionIndex 
 * @param {number|string} playerSubmission 
 * @returns {boolean}
 */
export function verifyAnswer(questionIndex, playerSubmission) {
  const q = questions[questionIndex];
  if (!q) return false;

  if (q.type === "MULTIPLE_CHOICE") {
    return q.answerIndex === Number(playerSubmission);
  }

  if (q.type === "IDENTIFICATION") {
    if (typeof playerSubmission !== "string") return false;
    const cleanPlayer = playerSubmission.trim().toLowerCase();
    return q.acceptableAnswers.some(ans => ans.trim().toLowerCase() === cleanPlayer);
  }

  return false;
}
