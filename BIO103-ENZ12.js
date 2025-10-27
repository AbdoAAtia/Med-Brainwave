/**
 * هذا المقطع يتأكد من وجود الكائن العام window.QUIZ_APP_DATA.
 * إذا لم يكن موجودًا، يقوم بإنشائه مع خاصية questions فارغة.
 */



/**
 * إضافة بيانات أسئلة اختبار الإنزيمات (BIO103-ENZYMES) إلى الكائن.
 * كل عنصر في المصفوفة يمثل سؤالاً واحدًا.
 */
window.QUIZ_APP_DATA.questions["BIO103-NZ12"] = [{
    question: "1. All the following statements are true with regard to enzymes EXCEPT:",
    answers: {
      a: "Enzymes lower activation energy.",
      b: "They alter the equilibrium of the reaction.",
      c: "They accelerate the chemical reaction.",
      d: "Most of the enzymes are proteins in nature."
    },
    correctAnswer: "b",
    explanation: "Enzymes speed up reactions by lowering activation energy but do not alter the equilibrium of the reaction."
  },
  {
    question: "2. In competitive inhibition:",
    answers: {
      a: "Inhibitor has structural similarity to the substrate.",
      b: "Km is decreased.",
      c: "Vmax is decreased.",
      d: "Reaction rate is independent of substrate concentration."
    },
    correctAnswer: "a",
    explanation: "In competitive inhibition, the inhibitor resembles the substrate and competes for the enzyme’s active site."
  },
  {
    question: "3. What type of enzyme inhibitor would have the following effects: Vmax unchanged, Km increased?",
    answers: {
      a: "Competitive reversible inhibition",
      b: "Allosteric inhibition",
      c: "Irreversible inhibition",
      d: "Non-competitive inhibition"
    },
    correctAnswer: "a",
    explanation: "A competitive reversible inhibitor increases Km but leaves Vmax unchanged because increasing substrate concentration can overcome inhibition."
  },
  {
    question: "4. Enzymes which are produced in inactive form in the living cells are called:",
    answers: {
      a: "Papain",
      b: "Lysozymes",
      c: "Apoenzymes",
      d: "Proenzymes"
    },
    correctAnswer: "d",
    explanation: "Proenzymes (zymogens) are inactive precursors that are activated when needed, often by cleavage of peptide bonds."
  },
  {
    question: "5. The non-protein part of an enzyme is called:",
    answers: {
      a: "Apoenzyme",
      b: "Holoenzyme",
      c: "Allosteric enzyme",
      d: "Isoenzyme",
      e: "Coenzyme"
    },
    correctAnswer: "e",
    explanation: "Coenzymes are organic, non-protein molecules (often derived from vitamins) that assist enzymes during catalysis."
  },
  {
    question: "6. These enzymes have different structures but the same catalytic function. They are called:",
    answers: {
      a: "Allosteric enzymes",
      b: "Isozymes",
      c: "Proenzymes",
      d: "Zymogens"
    },
    correctAnswer: "b",
    explanation: "Isoenzymes (isozymes) are different structural forms of the same enzyme that catalyze the same reaction but may differ in properties."
  },
  {
    question: "7. Allosteric inhibition of an enzyme involves which of the following?",
    answers: {
      a: "Binding of an inhibitor to a site other than the substrate binding site.",
      b: "Binding of an inhibitor competitively to the substrate binding site.",
      c: "Binding of an inhibitor noncompetitively to the substrate binding site.",
      d: "Allosteric inhibitors increase the affinity of the enzyme to its substrate."
    },
    correctAnswer: "a",
    explanation: "Allosteric inhibitors bind to a regulatory site distinct from the active site, causing conformational changes that reduce enzyme activity."
  },
  {
    question: "8. When the velocity of enzyme activity is plotted against substrate concentration, which of the following is obtained?",
    answers: {
      a: "A hyperbolic curve",
      b: "A parabola",
      c: "A straight line with a positive slope",
      d: "A straight line with a negative slope"
    },
    correctAnswer: "a",
    explanation: "A hyperbolic curve is obtained according to the Michaelis–Menten equation, showing enzyme saturation at high substrate concentrations."
  },
  {
    question: "9. Michaelis constant (Km) of an enzyme is:",
    answers: {
      a: "The substrate concentration which gives maximal velocity.",
      b: "The substrate concentration which gives ½ the maximal velocity.",
      c: "Half the substrate concentration which gives maximal velocity.",
      d: "The enzyme concentration which gives maximal velocity."
    },
    correctAnswer: "b",
    explanation: "Km is the substrate concentration at which the enzyme reaches half of its maximum velocity (Vmax/2)."
  },
  {
    question: "10. Which of the following statements is true of enzyme catalysts?",
    answers: {
      a: "To be effective they must be present at the same concentration as their substrate.",
      b: "They can increase the equilibrium constant for a given reaction.",
      c: "They lower the activation energy for conversion of substrate to product.",
      d: "Their catalytic activity is independent of pH."
    },
    correctAnswer: "c",
    explanation: "Enzymes act as catalysts by lowering the activation energy required for a reaction, thereby speeding up the rate."
  },
  {
    question: "11. Which enzyme is increased in myocardial infarction?",
    answers: {
      a: "Alkaline phosphatase",
      b: "Glutamate-oxaloacetate transaminase",
      c: "Acid phosphatase",
      d: "Creatine kinase (CK-MB)"
    },
    correctAnswer: "d",
    explanation: "Creatine kinase (CK-MB) is elevated in myocardial infarction, indicating heart muscle damage."
  },
  {
    question: "12. As regards isoenzymes, which of the following is incorrect:",
    answers: {
      a: "They have similar polypeptide chains.",
      b: "They have different affinity to the substrate.",
      c: "They can be separated by electrophoresis.",
      d: "They catalyze the same reaction."
    },
    correctAnswer: "a",
    explanation: "Isoenzymes have different polypeptide compositions, not identical chains."
  },
  {
    question: "13. Which statement is incorrect regarding feedback inhibition:",
    answers: {
      a: "Inhibition is usually allosteric.",
      b: "The final product inhibits an enzyme catalyzing an early step.",
      c: "It prevents accumulation of unnecessary products.",
      d: "It is a type of competitive inhibition."
    },
    correctAnswer: "d",
    explanation: "Feedback inhibition is typically allosteric (noncompetitive), not competitive."
  },
  {
    question: "14. Enzymes accelerate reactions by _____ the activation energy.",
    answers: {
      a: "Stopping",
      b: "Raising",
      c: "Lowering",
      d: "Binding"
    },
    correctAnswer: "c",
    explanation: "Enzymes accelerate reactions by lowering the activation energy barrier."
  },
  {
    question: "15. In competitive inhibition, the inhibitor:",
    answers: {
      a: "Competes with the enzyme.",
      b: "Irreversibly binds with the enzyme.",
      c: "Binds with the substrate.",
      d: "Competes with the substrate."
    },
    correctAnswer: "d",
    explanation: "A competitive inhibitor competes with the substrate for the same active site."
  },
  {
    question: "16. The allosteric inhibitor of an enzyme:",
    answers: {
      a: "Causes the enzyme to work faster.",
      b: "Binds to the active site.",
      c: "Participates in feedback regulation.",
      d: "Denatures the enzyme."
    },
    correctAnswer: "c",
    explanation: "Allosteric inhibitors are often used in feedback regulation of metabolic pathways."
  },
  {
    question: "17. When the velocity of enzyme activity is plotted against substrate concentration, which shape is obtained?",
    answers: {
      a: "Hyperbolic curve",
      b: "Parabola",
      c: "Straight line with positive slope",
      d: "Straight line with negative slope"
    },
    correctAnswer: "a",
    explanation: "Michaelis–Menten kinetics show a hyperbolic curve between reaction rate and substrate concentration."
  },
  {
    question: "18. The drug allopurinol inhibits which enzyme?",
    answers: {
      a: "Adenosine deaminase",
      b: "AMP deaminase",
      c: "Nucleoside phosphorylase",
      d: "Xanthine oxidase"
    },
    correctAnswer: "d",
    explanation: "Allopurinol inhibits xanthine oxidase, reducing uric acid production in gout treatment."
  },
  {
    question: "19. In enzyme kinetics Km is:",
    answers: {
      a: "The substrate concentration giving one-half Vmax.",
      b: "The dissociation constant for the enzyme-substrate complex.",
      c: "Concentration of enzyme.",
      d: "Half of the substrate concentration required to achieve Vmax."
    },
    correctAnswer: "a",
    explanation: "Km is the substrate concentration that produces half of the maximal velocity."
  },
  {
    question: "20. NSAIDs such as aspirin act by inhibiting:",
    answers: {
      a: "Lipoxygenase",
      b: "Cyclooxygenase",
      c: "Phospholipase A2",
      d: "Lipoprotein lipase"
    },
    correctAnswer: "b",
    explanation: "Aspirin and other NSAIDs inhibit cyclooxygenase (COX), blocking prostaglandin synthesis."
  },
  {
    question: "21. Regulation of some enzymes by covalent modification involves addition or removal of:",
    answers: {
      a: "Acetate",
      b: "Sulphate",
      c: "Phosphate",
      d: "Coenzyme"
    },
    correctAnswer: "c",
    explanation: "Enzyme regulation often involves phosphorylation/dephosphorylation, adding or removing a phosphate group."
  },
  {
    question: "22. An inorganic ion required for enzyme activity is called:",
    answers: {
      a: "Activator",
      b: "Cofactor",
      c: "Coenzyme",
      d: "None of the above"
    },
    correctAnswer: "b",
    explanation: "An inorganic ion such as Mg^{2+} or Zn^{2+} required for enzyme activity is called a **cofactor**."
  },
  {
    question: "23. The isozyme CK-MB increases in:",
    answers: {
      a: "Skeletal muscle disease",
      b: "Recent myocardial infarction",
      c: "Infective hepatitis",
      d: "Brain infarction"
    },
    correctAnswer: "b",
    explanation: "CK-MB is specific for cardiac muscle damage and increases after myocardial infarction."
  },
  {
    question: "24. Feedback inhibition is a common regulatory mechanism where the end product inhibits an early enzyme in the pathway.",
    answers: {
      a: "It enhances enzyme activity.",
      b: "It activates the last enzyme of the pathway.",
      c: "It prevents overproduction of the end product.",
      d: "It increases substrate concentration."
    },
    correctAnswer: "c",
    explanation: "Feedback inhibition prevents overproduction by allowing the final product to inhibit an early enzyme in the pathway."
  },
  {
    question: "25. Phosphorylation/Dephosphorylation of enzymes:",
    answers: {
      a: "Occurs on specific serine and threonine residues",
      b: "Is a covalent type of modification",
      c: "Is a reversible type of regulation",
      d: "Is achieved by the activities of protein kinases and phosphatases",
      e: "All of the above is correct"
    },
    correctAnswer: "e",
    explanation: "Phosphorylation is a reversible, covalent modification that occurs on Ser/Thr residues and is mediated by kinases and phosphatases."
  },
  // السؤال رقم 26 غير موجود في البيانات الأصلية - يبدأ بعده بـ 27
  {
    question: "27. Hydrolases include:",
    answers: {
      a: "Catalases and mutases",
      b: "Oxygenases and dehydrogenases",
      c: "Esterases and glucosidases",
      d: "Aminotransferases and racemases",
      e: "Epimerases and oxidases"
    },
    correctAnswer: "c",
    explanation: "Hydrolases break bonds using water. Examples include Esterases and Glucosidases."
  },
  // السؤال رقم 28 غير موجود في البيانات الأصلية - يبدأ بعده بـ 29
  {
    question: "29. Which of the following statements is true of enzyme catalysts?",
    answers: {
      a: "They must be present at the same concentration as their substrate.",
      b: "They increase equilibrium constants.",
      c: "They lower the activation energy for substrate conversion.",
      d: "Their catalytic activity is independent of pH."
    },
    correctAnswer: "c",
    explanation: "Enzymes accelerate reactions by lowering activation energy without affecting equilibrium constants."
  },
  {
    question: "30. Isoenzymes:",
    answers: {
      a: "Are differentiated by dialysis",
      b: "Show the same electrophoretic mobility",
      c: "Include lactate dehydrogenase",
      d: "Are used as diagnostic tools",
      e: "Both C and D are correct"
    },
    correctAnswer: "e",
    explanation: "Lactate dehydrogenase (LDH) is an isoenzyme; isoenzymes are often used diagnostically."
  },
  // السؤال رقم 31 غير موجود في البيانات الأصلية - يبدأ بعده بـ 32
  {
    question: "31. Restriction enzymes:",
    answers: {
      a: "Recognize specific DNA sequences",
      b: "Cut both DNA strands",
      c: "Often produce single-stranded tails",
      d: "Do all of the above",
      e: "Do none of the above"
    },
    correctAnswer: "d",
    explanation: "Restriction enzymes recognize specific sequences, cut both strands, and often produce sticky ends."
  },
  {
    question: "32. Enzymes involved in hydrolysis:",
    answers: {
      a: "Are called decarboxylases",
      b: "Use folic acid as a coenzyme",
      c: "Include dehydrogenases",
      d: "Include peptidases",
      e: "Always require coenzyme"
    },
    correctAnswer: "d",
    explanation: "Hydrolases include peptidases, which hydrolyze peptide bonds."
  },
  {
    question: "33. Enzymes and pH:",
    answers: {
      a: "All enzymes have one optimum pH",
      b: "Enzymes in the stomach require alkaline pH",
      c: "All enzymes in eukaryotic cells require the same pH",
      d: "The optimum pH is the one at which the enzyme has maximum activity",
      e: "The pH is the same in the lysosome and plasma"
    },
    correctAnswer: "d",
    explanation: "Each enzyme has an optimum pH for maximum activity (e.g., pepsin at low pH, trypsin at alkaline pH)."
  },
  // السؤال رقم 35 غير موجود في البيانات الأصلية - يبدأ بعده بـ 36
  {
    question: "34. The following vitamin works as a coenzyme with the corresponding enzyme:",
    answers: {
      a: "Biotin and carboxylases",
      b: "Cobalamin with isomerases",
      c: "Retinol with lyases",
      d: "Riboflavin with hydrolases",
      e: "Thiamin and isomerases"
    },
    correctAnswer: "a",
    explanation: "Biotin acts as a coenzyme for carboxylases, which catalyze CO_2 transfer reactions."
  }
];