/**
 * Grade 11 Physical Science & Chemistry Question Bank Module
 * Preserves original short-answer / identification format for the Difficult round.
 * 
 * Timers:
 * - EASY: 10 Seconds
 * - MODERATE: 15 Seconds
 * - CLINCHER: 15 Seconds
 * - DIFFICULT: 30 Seconds
 */

export const DIFFICULTY_TIMERS = {
  EASY: 10,
  MODERATE: 15,
  CLINCHER: 15,
  DIFFICULT: 30
};

export const rawQuestionBank = {
  1: [
    // --- EASY ROUND ---
    { id: "s1_easy_1", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which quantity describes rotational motion rather than translational motion?", options: ["Linear velocity", "Angular velocity", "Displacement", "Acceleration"], answerIndex: 1 },
    { id: "s1_easy_2", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which condition poses an electrical hazard caused by connecting too many appliances to one outlet?", options: ["Damaged insulation", "Faulty wiring", "Overloading", "Electrocution"], answerIndex: 2 },
    { id: "s1_easy_3", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which scientist merged chemistry and biology to discover heat treatment prevents microbial growth?", options: ["Antoine Lavoisier", "Louis Pasteur", "Dmitri Mendeleev", "Robert Boyle"], answerIndex: 1 },
    { id: "s1_easy_4", category: "EASY", type: "MULTIPLE_CHOICE", question: "What is the primary physical principle behind hydraulic lifts?", options: ["Archimedes' Principle", "Pascal's Principle", "Bernoulli's Principle", "Newton's First Law"], answerIndex: 1 },
    { id: "s1_easy_5", category: "EASY", type: "MULTIPLE_CHOICE", question: "What active ingredient is commonly found in household liquid bleach?", options: ["Sodium chloride", "Sodium hypochlorite", "Acetic acid", "Calcium carbonate"], answerIndex: 1 },
    { id: "s1_easy_6", category: "EASY", type: "MULTIPLE_CHOICE", question: "What modern lighting technology is known for minimal energy wastage?", options: ["Incandescent bulb", "Fluorescent tube", "LED bulb", "Halogen lamp"], answerIndex: 2 },
    { id: "s1_easy_7", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which simple machine consists of a rigid bar pivoting on a fulcrum?", options: ["Pulley", "Lever", "Wedge", "Screw"], answerIndex: 1 },
    { id: "s1_easy_8", category: "EASY", type: "MULTIPLE_CHOICE", question: "An object floats in a fluid if its overall average density is what compared to the fluid?", options: ["Greater than the fluid", "Equal to the fluid", "Less than the fluid", "Double the fluid"], answerIndex: 2 },
    { id: "s1_easy_9", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which wave property of sound is primarily utilized in medical ultrasound imaging?", options: ["Refraction", "Reflection", "Diffraction", "Absorption"], answerIndex: 1 },
    { id: "s1_easy_10", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which Philippine government agency regulates personal care cosmetics and drugs?", options: ["DTI", "DENR", "FDA", "DOST"], answerIndex: 2 },

    // --- MODERATE ROUND ---
    { id: "s1_mod_1", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "When a dancer executes a pirouette, pulling their arms closer to the body increases spin speed due to what?", options: ["Linear momentum increase", "Conservation of angular momentum", "Decrease in total torque", "Increase in rotational inertia"], answerIndex: 1 },
    { id: "s1_mod_2", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Why is dampness near electrical appliances considered extremely dangerous?", options: ["Water reduces voltage", "Water decreases electrical resistance of human skin", "Water increases wire resistance", "Water drains battery charge"], answerIndex: 1 },
    { id: "s1_mod_3", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "What chemical component in laundry detergent reduces water surface tension to lift grease?", options: ["Surfactant", "Builder", "Bleaching agent", "Enzyme"], answerIndex: 0 },
    { id: "s1_mod_4", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "How does a compound machine differ from a simple machine?", options: ["It generates its own energy", "It combines two or more simple machines", "It operates without friction", "It requires electrical power"], answerIndex: 1 },
    { id: "s1_mod_5", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Soundproof studio walls utilize porous, soft materials primarily to accomplish what?", options: ["Reflect sound waves", "Amplify sound waves", "Absorb sound wave energy", "Diffract sound waves"], answerIndex: 2 },
    { id: "s1_mod_6", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "According to Pascal's Principle, pushing a small piston produces a larger force on a larger piston because what stays constant?", options: ["Fluid volume", "Fluid pressure", "Fluid speed", "Mechanical work"], answerIndex: 1 },
    { id: "s1_mod_7", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Louis Pasteur's research disputed spontaneous generation and established which biological theory?", options: ["Cell theory", "Germ theory of disease", "Gene theory", "Atomic theory"], answerIndex: 1 },
    { id: "s1_mod_8", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "An ergonomic office chair adjustment mechanism primarily applies physics concepts to reduce what?", options: ["Body mass", "Joint stress and improper torque", "Gravitational force", "Body temperature"], answerIndex: 1 },
    { id: "s1_mod_9", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Which regulatory agency sets environmental disposal standards for chemical waste in the Philippines?", options: ["DTI", "FDA", "DENR", "DOST"], answerIndex: 2 },
    { id: "s1_mod_10", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Laser light differs from ordinary light bulb radiation because laser light is what?", options: ["Polychromatic", "Coherent and monochromatic", "Diffuse", "Incoherent"], answerIndex: 1 },

    // --- DIFFICULT ROUND (Original Identification / Short Answer Format) ---
    { id: "s1_diff_1", category: "DIFFICULT", type: "IDENTIFICATION", question: "What optical phenomenon allows light signals to travel inside fiber optic cables without escaping?", acceptableAnswers: ["total internal reflection", "internal reflection"] },
    { id: "s1_diff_2", category: "DIFFICULT", type: "IDENTIFICATION", question: "What detergent chemical additive causes algal blooms and oxygen depletion in rivers?", acceptableAnswers: ["phosphate", "phosphates"] },
    { id: "s1_diff_3", category: "DIFFICULT", type: "IDENTIFICATION", question: "What rotational force causes an object to turn or rotate around a pivot or fulcrum?", acceptableAnswers: ["torque"] },
    { id: "s1_diff_4", category: "DIFFICULT", type: "IDENTIFICATION", question: "What upward force is exerted by a fluid on an object placed in it according to Archimedes' principle?", acceptableAnswers: ["buoyant force", "buoyancy"] },
    { id: "s1_diff_5", category: "DIFFICULT", type: "IDENTIFICATION", question: "What hollow hull design allows massive metal ships to float by increasing displaced water volume?", acceptableAnswers: ["density", "buoyancy", "volume"] },

    // --- CLINCHER ROUND ---
    { id: "s1_clin_1", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "Which simple machine wrapped around a cylinder converts rotational motion to linear force?", options: ["Wedge", "Screw", "Lever", "Pulley"], answerIndex: 1 },
    { id: "s1_clin_2", category: "CLINCHER", type: "IDENTIFICATION", question: "What heating process eliminates pathogens in dairy products without boiling the liquid?", acceptableAnswers: ["pasteurization"] },
    { id: "s1_clin_3", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "What circuit protection mechanism melts to interrupt excessive current flow?", options: ["Transformer", "Fuse", "Capacitor", "Resistor"], answerIndex: 1 },
    { id: "s1_clin_4", category: "CLINCHER", type: "IDENTIFICATION", question: "What primary surfactant compound ingredient in soap molecules lifts nonpolar oil?", acceptableAnswers: ["fatty acid", "fatty acids", "surfactant"] },
    { id: "s1_clin_5", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "Which wave interaction in noise-canceling headphones neutralizes incoming sound waves?", options: ["Constructive interference", "Destructive interference", "Refraction", "Diffraction"], answerIndex: 1 }
  ],

  2: [
    // --- EASY ROUND ---
    { id: "s2_easy_1", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which motion occurs when an object moves along a straight path without rotation?", options: ["Translational motion", "Rotational motion", "Circular motion", "Vibrational motion"], answerIndex: 0 },
    { id: "s2_easy_2", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which device converts electrical energy into mechanical movement in household fans?", options: ["Electric generator", "Electric motor", "Transformer", "Capacitor"], answerIndex: 1 },
    { id: "s2_easy_3", category: "EASY", type: "MULTIPLE_CHOICE", question: "Pasteurization involves heating liquids to specific temperatures to destroy what?", options: ["Chemical toxins", "Harmful pathogens", "Proteins", "Mineral compounds"], answerIndex: 1 },
    { id: "s2_easy_4", category: "EASY", type: "MULTIPLE_CHOICE", question: "What buoyant force acts on an object submerged in a fluid according to Archimedes' principle?", options: ["Equal to object weight", "Equal to weight of displaced fluid", "Equal to fluid surface area", "Equal to atmospheric pressure"], answerIndex: 1 },
    { id: "s2_easy_5", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which household product ingredient is primarily responsible for raising dough in baking?", options: ["Sodium hypochlorite", "Sodium bicarbonate", "Sodium hydroxide", "Sodium chloride"], answerIndex: 1 },
    { id: "s2_easy_6", category: "EASY", type: "MULTIPLE_CHOICE", question: "Replacing old incandescent lights with LEDs in schools primarily reduces what?", options: ["Voltage", "Electrical energy wastage", "Light intensity", "Current frequency"], answerIndex: 1 },
    { id: "s2_easy_7", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which simple machine is used in vehicle steering wheels to multiply input turning force?", options: ["Inclined plane", "Wheel and axle", "Wedge", "Pulley"], answerIndex: 1 },
    { id: "s2_easy_8", category: "EASY", type: "MULTIPLE_CHOICE", question: "What property of light allows optical lenses to focus light rays?", options: ["Reflection", "Refraction", "Absorption", "Diffraction"], answerIndex: 1 },
    { id: "s2_easy_9", category: "EASY", type: "MULTIPLE_CHOICE", question: "Damaged wire insulation in home appliances creates a significant risk of what?", options: ["Short circuits and electrocution", "Lower electric bills", "Overcharging", "Voltage reduction"], answerIndex: 0 },
    { id: "s2_easy_10", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which government agency handles consumer product safety and fair trade in product labeling?", options: ["DENR", "DTI", "FDA", "DOST"], answerIndex: 1 },

    // --- MODERATE ROUND ---
    { id: "s2_mod_1", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "How does an ergonomic computer mouse design reduce repetitive strain injuries in the wrist?", options: ["By eliminating friction", "By promoting natural joint alignment and lower muscle torque", "By increasing translational acceleration", "By doubling grip force"], answerIndex: 1 },
    { id: "s2_mod_2", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Why is mixing household ammonia with chlorine bleach extremely dangerous?", options: ["It produces explosive nitroglycerin", "It generates toxic chloramine gas", "It neutralizes cleaning action uselessly", "It forms highly corrosive acid rain"], answerIndex: 1 },
    { id: "s2_mod_3", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "A hydraulic brake system in modern automobiles amplifies pedal force using which medium?", options: ["Compressed air", "Incompressible hydraulic fluid", "Mechanical gears", "Magnetic fields"], answerIndex: 1 },
    { id: "s2_mod_4", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "How did Louis Pasteur's work with wine fermentation contribute to industrial microbiology?", options: ["He discovered synthetic dyes", "He identified microbes responsible for fermentation and spoilage", "He invented antibiotics", "He created chemical fertilizers"], answerIndex: 1 },
    { id: "s2_mod_5", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Why does an electric kettle consume significant energy if scale deposits accumulate inside?", options: ["Scale lowers electrical resistance", "Scale acts as a thermal insulator requiring longer operation", "Scale causes short circuits", "Scale increases voltage requirements"], answerIndex: 1 },
    { id: "s2_mod_6", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "What is the primary function of fluoride compounds added to personal care toothpaste?", options: ["Whiten teeth enamel", "Remineralize and prevent tooth decay", "Provide sweet flavor", "Act as a surfactant"], answerIndex: 1 },
    { id: "s2_mod_7", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "In sonar navigation, how do submarine systems calculate distance to the ocean floor?", options: ["By measuring sound refraction angle", "By measuring echo time delay of reflected sound", "By absorbing light signals", "By measuring water density shifts"], answerIndex: 1 },
    { id: "s2_mod_8", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "In gymnastics, executing a tight tuck flip allows faster rotation than an layout body position because what is reduced?", options: ["Rotational inertia (moment of inertia)", "Gravitational pull", "Total angular momentum", "Translational displacement"], answerIndex: 0 },
    { id: "s2_mod_9", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "An object submerged in water experiences an upward buoyant force of 50 N. What mass of water was displaced in kg? (g = 9.8 m/s²)", options: ["2.5 kg", "5.1 kg", "10.0 kg", "50.0 kg"], answerIndex: 1 },
    { id: "s2_mod_10", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Holograms differ from standard 3D photographs because holographic recording captures what wave characteristic?", options: ["Amplitude only", "Phase information and interference patterns", "Speed variations", "Wavelength reduction"], answerIndex: 1 },

    // --- DIFFICULT ROUND (Original Identification / Short Answer Format) ---
    { id: "s2_diff_1", category: "DIFFICULT", type: "IDENTIFICATION", question: "What simple machine component acts as a fixed pivot point about which a lever rotates?", acceptableAnswers: ["fulcrum"] },
    { id: "s2_diff_2", category: "DIFFICULT", type: "IDENTIFICATION", question: "What class of hazardous metals like lead and cadmium leach into groundwater from improper battery disposal?", acceptableAnswers: ["heavy metals", "heavy metal"] },
    { id: "s2_diff_3", category: "DIFFICULT", type: "IDENTIFICATION", question: "What safety device automatically breaks an electric circuit when current amperage exceeds safe limits?", acceptableAnswers: ["circuit breaker"] },
    { id: "s2_diff_4", category: "DIFFICULT", type: "IDENTIFICATION", question: "Which medical innovation uses focused, coherent light waves for precise tissue incisions?", acceptableAnswers: ["laser", "lasers"] },
    { id: "s2_diff_5", category: "DIFFICULT", type: "IDENTIFICATION", question: "What fluid property describes a liquid's resistance to flow and internal friction?", acceptableAnswers: ["viscosity"] },

    // --- CLINCHER ROUND ---
    { id: "s2_clin_1", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "Which unit measures electric current flow through home wiring?", options: ["Volts", "Amperes", "Ohms", "Watts"], answerIndex: 1 },
    { id: "s2_clin_2", category: "CLINCHER", type: "IDENTIFICATION", question: "What fundamental property of matter resists changes in its state of linear motion?", acceptableAnswers: ["inertia"] },
    { id: "s2_clin_3", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "Which regulatory body certifies drug efficacy and food hygiene safety in the Philippines?", options: ["DENR", "FDA", "DTI", "DOST"], answerIndex: 1 },
    { id: "s2_clin_4", category: "CLINCHER", type: "IDENTIFICATION", question: "What light wave frequency band is used by remote controls and thermal sensors?", acceptableAnswers: ["infrared", "infrared wave", "ir"] },
    { id: "s2_clin_5", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "Which law explains how pressure changes applied to an enclosed fluid transmit equally in all directions?", options: ["Archimedes' Principle", "Pascal's Principle", "Boyle's Law", "Hooke's Law"], answerIndex: 1 }
  ],

  3: [
    // --- EASY ROUND ---
    { id: "s3_easy_1", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which unit measures angular displacement in rotational kinematics?", options: ["Meters", "Radians", "Newton-meters", "Watts"], answerIndex: 1 },
    { id: "s3_easy_2", category: "EASY", type: "MULTIPLE_CHOICE", question: "Unplugging phantom energy chargers when not in use helps homes do what?", options: ["Increase voltage", "Minimize standby energy loss", "Prevent power outages", "Boost wire speed"], answerIndex: 1 },
    { id: "s3_easy_3", category: "EASY", type: "MULTIPLE_CHOICE", question: "Louis Pasteur developed early vaccines for which fatal viral disease affecting mammals?", options: ["Tuberculosis", "Rabies", "Malaria", "Cholera"], answerIndex: 1 },
    { id: "s3_easy_4", category: "EASY", type: "MULTIPLE_CHOICE", question: "What is the primary function of a fixed pulley attached to a flagpole?", options: ["Multiply input force", "Change force direction", "Increase mechanical work", "Reduce load mass"], answerIndex: 1 },
    { id: "s3_easy_5", category: "EASY", type: "MULTIPLE_CHOICE", question: "What primary chemical compound acts as the abrasive cleaner in many toothpastes?", options: ["Calcium carbonate", "Sodium hypochlorite", "Ammonia", "Ethanol"], answerIndex: 0 },
    { id: "s3_easy_6", category: "EASY", type: "MULTIPLE_CHOICE", question: "An object will sink in water if its mass-to-volume ratio is what?", options: ["Equal to 1.0 g/cm³", "Less than 1.0 g/cm³", "Greater than 1.0 g/cm³", "Zero"], answerIndex: 2 },
    { id: "s3_easy_7", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which sound innovation involves placing acoustic foam panels inside radio broadcasting rooms?", options: ["Sound amplification", "Soundproofing", "Echo generation", "Sonar imaging"], answerIndex: 1 },
    { id: "s3_easy_8", category: "EASY", type: "MULTIPLE_CHOICE", question: "Faulty household electrical wiring with stripped insulation creates a high risk of what?", options: ["Electrocution and structure fires", "Excessive energy savings", "Voltage drops", "Lower current flow"], answerIndex: 0 },
    { id: "s3_easy_9", category: "EASY", type: "MULTIPLE_CHOICE", question: "What type of light wave technology is widely used in supermarket barcode scanners?", options: ["Infrared LEDs", "Lasers", "Ultraviolet lamps", "Incandescent bulbs"], answerIndex: 1 },
    { id: "s3_easy_10", category: "EASY", type: "MULTIPLE_CHOICE", question: "Which simple machine consists of an inclined plane wrapped around a cylinder?", options: ["Wedge", "Screw", "Lever", "Wheel and axle"], answerIndex: 1 },

    // --- MODERATE ROUND ---
    { id: "s3_mod_1", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "In vehicle ergonomics, how do bucket seats reduce driver fatigue during sharp turns?", options: ["By maximizing translational velocity", "By providing lateral support against rotational centripetal forces", "By reducing total vehicle weight", "By absorbing tire friction"], answerIndex: 1 },
    { id: "s3_mod_2", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Louis Pasteur's swan-neck flask experiments proved what critical biological fact?", options: ["Microbes arise spontaneously from air", "Microbes enter from airborne particles, not spontaneous generation", "Heat creates new bacteria", "Viruses require chemical media"], answerIndex: 1 },
    { id: "s3_mod_3", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "A compound machine like a bicycle combines which two simple machines in its drive system?", options: ["Lever and wedge", "Wheel/axle and pulley (chain/sprocket)", "Screw and inclined plane", "Hydraulic press and lever"], answerIndex: 1 },
    { id: "s3_mod_4", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "What environmental health issue arises when excessive phosphate detergents enter aquatic ecosystems?", options: ["Ocean acidification", "Algal blooms leading to oxygen depletion (eutrophication)", "Thermal pollution", "Heavy metal buildup"], answerIndex: 1 },
    { id: "s3_mod_5", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Why does a heavy concrete block feel lighter when held under water than in air?", options: ["Gravity is lower underwater", "Water exerts an upward buoyant force equal to displaced water weight", "Water density decreases block mass", "Water pressure acts only downward"], answerIndex: 1 },
    { id: "s3_mod_6", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "How does circuit breaker tripping protect home electrical systems from fire hazards?", options: ["It increases line voltage", "It cuts off current flow when amperage exceeds safe limits", "It redirects current to earth ground", "It cools overheated copper wires"], answerIndex: 1 },
    { id: "s3_mod_7", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Noise-canceling headphones eliminate unwanted ambient sound using which wave interaction?", options: ["Constructive interference", "Destructive interference", "Total internal reflection", "Diffraction grating"], answerIndex: 1 },
    { id: "s3_mod_8", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Why are hazardous household chemicals required by DTI/FDA to display GHS warning pictograms?", options: ["To make labels decorative", "To communicate immediate health, flammability, and toxicity risks clearly", "To indicate price levels", "To list active ingredient ratios"], answerIndex: 1 },
    { id: "s3_mod_9", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Converting linear motion into angular rotation depends on applying force at what distance from an axis?", options: ["At zero distance", "At a perpendicular distance (radius) to create torque", "Parallel to the bar", "At the exact center of mass"], answerIndex: 1 },
    { id: "s3_mod_10", category: "MODERATE", type: "MULTIPLE_CHOICE", question: "Why do modern energy-efficient air conditioners with inverter technology consume less electricity?", options: ["They run at maximum speed constantly", "They adjust compressor motor speed dynamically instead of cycling fully ON/OFF", "They bypass home circuit breakers", "They utilize hydraulic pumps"], answerIndex: 1 },

    // --- DIFFICULT ROUND (Original Identification / Short Answer Format) ---
    { id: "s3_diff_1", category: "DIFFICULT", type: "IDENTIFICATION", question: "What additive in personal care soaps acts as a chelating agent to soften hard water?", acceptableAnswers: ["edta"] },
    { id: "s3_diff_2", category: "DIFFICULT", type: "IDENTIFICATION", question: "What wave interaction causes noise-canceling headphones to reduce background sound?", acceptableAnswers: ["destructive interference"] },
    { id: "s3_diff_3", category: "DIFFICULT", type: "IDENTIFICATION", question: "What physical property of a body resists changes in its rotational state of motion?", acceptableAnswers: ["rotational inertia", "moment of inertia"] },
    { id: "s3_diff_4", category: "DIFFICULT", type: "IDENTIFICATION", question: "What heating process eliminates disease-causing pathogens in milk and fruit juices?", acceptableAnswers: ["pasteurization"] },
    { id: "s3_diff_5", category: "DIFFICULT", type: "IDENTIFICATION", question: "What simple machine consists of a wheel with a groove holding a rope or cable?", acceptableAnswers: ["pulley"] },

    // --- CLINCHER ROUND ---
    { id: "s3_clin_1", category: "CLINCHER", type: "IDENTIFICATION", question: "What standard warning pictograms on cleaning products communicate toxicity and flammability?", acceptableAnswers: ["ghs", "globally harmonized system"] },
    { id: "s3_clin_2", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "An electric fan blade moving around a center spindle represents which motion?", options: ["Translational motion", "Rotational motion", "Linear motion", "Vibrational motion"], answerIndex: 1 },
    { id: "s3_clin_3", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "What chemical element active compound in liquid bleach disinfects surfaces?", options: ["Chlorine", "Fluoride", "Iodine", "Ammonia"], answerIndex: 0 },
    { id: "s3_clin_4", category: "CLINCHER", type: "IDENTIFICATION", question: "What optical wave property causes light bending when entering water from air?", acceptableAnswers: ["refraction"] },
    { id: "s3_clin_5", category: "CLINCHER", type: "MULTIPLE_CHOICE", question: "What happens when two simple machines operate together in a single system?", options: ["Forms a compound machine", "Generates free energy", "Eliminates friction", "Reduces mechanical power"], answerIndex: 0 }
  ]
};

// Default flat question array (Set 1) for simple index-based loading
export const questions = rawQuestionBank[1];

/**
 * Returns a question payload safe for WebRTC transmission (strips answer keys).
 * 
 * @param {number|Object} item - Question index or object
 * @param {Array} [setRef] - Optional question set reference array
 * @returns {Object|null}
 */
export function getSanitizedQuestionForClient(item, setRef = questions) {
  const q = (typeof item === 'number') ? setRef[item] : item;
  if (!q) return null;

  const payload = {
    id: q.id,
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
 * @param {number|Object} item - Question index or object
 * @param {number|string} playerSubmission - Selected index or typed input
 * @param {Array} [setRef] - Optional question set reference array
 * @returns {boolean}
 */
export function verifyAnswer(item, playerSubmission, setRef = questions) {
  const q = (typeof item === 'number') ? setRef[item] : item;
  if (!q) return false;

  if (q.type === "MULTIPLE_CHOICE") {
    return q.answerIndex === Number(playerSubmission);
  }

  if (q.type === "IDENTIFICATION") {
    if (typeof playerSubmission !== "string") return false;
    const cleanPlayerInput = playerSubmission.trim().toLowerCase();

    if (q.acceptableAnswers && Array.isArray(q.acceptableAnswers)) {
      return q.acceptableAnswers.some(ans => ans.trim().toLowerCase() === cleanPlayerInput);
    }
  }

  return false;
}
