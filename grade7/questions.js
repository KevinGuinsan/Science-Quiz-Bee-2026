/**
 * Science 7 Quiz Bee Question Bank Module
 * Matches timing rules:
 * - EASY: 10 Seconds
 * - AVERAGE / MODERATE: 15 Seconds
 * - DIFFICULT / CLINCHER: 20 Seconds
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
    question: "Which part of the compound microscope controls the amount of light that reaches the specimen?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Eyepiece",
      "Stage clips",
      "Iris diaphragm",
      "Coarse adjustment knob"
    ],
    answerIndex: 2 // C) Iris diaphragm
  },
  {
    id: "easy_2",
    category: "EASY",
    question: "Which state of matter has a definite volume but takes the shape of its container?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Solid",
      "Liquid",
      "Gas",
      "Plasma"
    ],
    answerIndex: 1 // B) Liquid
  },
  {
    id: "easy_3",
    category: "EASY",
    question: "In a saltwater solution, which component acts as the solute?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Water",
      "Salt",
      "Both water and salt",
      "Neither"
    ],
    answerIndex: 1 // B) Salt
  },
  {
    id: "easy_4",
    category: "EASY",
    question: "What is the basic structural and functional unit of all living organisms?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Tissue",
      "Organ",
      "Cell",
      "Organelle"
    ],
    answerIndex: 2 // C) Cell
  },
  {
    id: "easy_5",
    category: "EASY",
    question: "Which organelle is known as the powerhouse of the cell because it generates ATP?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondrion",
      "Golgi body"
    ],
    answerIndex: 2 // C) Mitochondrion
  },
  {
    id: "easy_6",
    category: "EASY",
    question: "What type of reproduction involves only one parent and produces offspring that are genetically identical to the parent?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Sexual reproduction",
      "Asexual reproduction",
      "Fertilization",
      "Pollination"
    ],
    answerIndex: 1 // B) Asexual reproduction
  },
  {
    id: "easy_7",
    category: "EASY",
    question: "Which unit of measurement is the SI base unit for temperature?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Celsius",
      "Fahrenheit",
      "Kelvin",
      "Joule"
    ],
    answerIndex: 2 // C) Kelvin
  },
  {
    id: "easy_8",
    category: "EASY",
    question: "Which method of heat transfer occurs through direct physical contact between solids?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Conduction",
      "Convection",
      "Radiation",
      "Insulation"
    ],
    answerIndex: 0 // A) Conduction
  },
  {
    id: "easy_9",
    category: "EASY",
    question: "What type of wave requires a medium to travel through?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Electromagnetic wave",
      "Mechanical wave",
      "Radio wave",
      "Light wave"
    ],
    answerIndex: 1 // B) Mechanical wave
  },
  {
    id: "easy_10",
    category: "EASY",
    question: "What subatomic particles inside the nucleus were named and confirmed by Ernest Rutherford in 1917?",
    type: "MULTIPLE_CHOICE",
    options: [
      "Neutrons",
      "Protons",
      "Electrons",
      "Orbit"
    ],
    answerIndex: 1 // B) Protons
  },

  // --- AVERAGE ROUND ---
  {
    id: "avg_1",
    category: "AVERAGE",
    question: "What type of solution contains the maximum amount of dissolved solute at a given temperature?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Saturated Solution", "Saturated"]
  },
  {
    id: "avg_2",
    category: "AVERAGE",
    question: "If an objective lens has a magnifying power of 40x and the eyepiece lens has a magnification of 10x, what is the total magnification of the microscope?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["400x", "400 times", "400"]
  },
  {
    id: "avg_3",
    category: "AVERAGE",
    question: "In the biological hierarchy of organization, what level is formed by a group of similar tissues working together to perform a specific function?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Organ"]
  },
  {
    id: "avg_4",
    category: "AVERAGE",
    question: "Name the cell structure present in plant cells that provides structural support and rigidity, but is absent in animal cells.",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Cell wall"]
  },
  {
    id: "avg_5",
    category: "AVERAGE",
    question: "What scientific instrument is used to measure force, typically calibrated in Newtons?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Spring balance", "Dynamometer"]
  },
  {
    id: "avg_6",
    category: "AVERAGE",
    question: "What form of energy is stored in the chemical bonds of substances like food, fuel, and batteries?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Chemical potential energy", "Chemical energy"]
  },
  {
    id: "avg_7",
    category: "AVERAGE",
    question: "In a food chain, what ecological role is played by organisms like fungi and bacteria that break down dead organic matter?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Decomposers", "Decomposer"]
  },
  {
    id: "avg_8",
    category: "AVERAGE",
    question: "What phase change occurs when a substance transitions directly from a solid to a gas without turning into a liquid first?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Sublimation"]
  },
  {
    id: "avg_9",
    category: "AVERAGE",
    question: "What property of light causes an object placed underwater to appear bent or displaced?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Refraction"]
  },
  {
    id: "avg_10",
    category: "AVERAGE",
    question: "What type of wave motion occurs when the particles of the medium vibrate perpendicular to the direction of wave travel?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Transverse wave", "Transverse"]
  },

  // --- DIFFICULT ROUND ---
  {
    id: "diff_1",
    category: "DIFFICULT",
    question: "A sugar solution is prepared by dissolving 25 grams of sugar in 75 grams of water. What is the concentration of the solution expressed as mass percent (% m/m)?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["25%", "25 %", "25"]
  },
  {
    id: "diff_2",
    category: "DIFFICULT",
    question: "A car travels a total distance of 180 kilometers in 3 hours. Calculate its average speed in meters per second (m/s).",
    type: "IDENTIFICATION",
    acceptableAnswers: ["16.67m/s", "16.67 m/s", "16.67", "16.6"]
  },
  {
    id: "diff_3",
    category: "DIFFICULT",
    question: "What refers to the strength of an earthquake measured at a specific location based on its observable effects on people, structures, and land surfaces?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Intensity"]
  },
  {
    id: "diff_4",
    category: "DIFFICULT",
    question: "During which specific stage of mitosis do sister chromatids separate at the centromere and move toward opposite poles of the cell?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Anaphase"]
  },
  {
    id: "diff_5",
    category: "DIFFICULT",
    question: "What type of geological fault occurs when two blocks of crust slide past each other horizontally with little vertical movement?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Strike-slip fault", "Strike slip fault", "Strike-slip"]
  },

  // --- CLINCHER ROUND ---
  {
    id: "clincher_1",
    category: "CLINCHER",
    question: "What is the term for the variable in an experiment that is intentionally changed or manipulated by the researcher?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Independent variable", "Independent"]
  },
  {
    id: "clincher_2",
    category: "CLINCHER",
    question: "What unstable solution holds more dissolved solute than its normal saturation capacity at a given temperature?",
    type: "IDENTIFICATION",
    acceptableAnswers: ["Supersaturated solution", "Supersaturated"]
  },
  {
    id: "clincher_3",
    category: "CLINCHER",
    question: "A human body cell containing 46 chromosomes undergoes 3 consecutive rounds of mitotic division. How many total daughter cells are produced, and how many chromosomes does each contain?",
    type: "IDENTIFICATION",
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
 * Strips correct answers before sending question payload to student client devices over WebRTC.
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
    question: q.question,
    type: q.type,
    timeLimit: DIFFICULTY_TIMERS[q.category] || 15
  };

  if (q.type === "MULTIPLE_CHOICE") {
    payload.options = q.options;
  }

  return payload;
}

/**
 * Validates player submission against the host-side correct answer.
 * Case-insensitive string matching for identification questions.
 * 
 * @param {number} questionIndex 
 * @param {number|string} playerAnswer - Selected index (MCQ) or input string (Identification)
 * @returns {boolean}
 */
export function verifyAnswer(questionIndex, playerAnswer) {
  const q = questions[questionIndex];
  if (!q) return false;

  if (q.type === "MULTIPLE_CHOICE") {
    return q.answerIndex === Number(playerAnswer);
  }

  if (q.type === "IDENTIFICATION") {
    if (typeof playerAnswer !== "string") return false;
    const cleanPlayer = playerAnswer.trim().toLowerCase();
    return q.acceptableAnswers.some(ans => ans.trim().toLowerCase() === cleanPlayer);
  }

  return false;
}
