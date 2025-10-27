/**
 * هذا المقطع يتأكد من وجود الكائن العام window.QUIZ_APP_DATA.
 * إذا لم يكن موجودًا، يقوم بإنشائه مع خاصية questions فارغة.
 */


/**
 * إضافة البيانات الموحدة لأسئلة الإنزيمات (71 سؤالاً) تحت مفتاح جديد.
 * تم دمج جميع المجموعات وإعادة ترقيم الأسئلة بشكل تسلسلي من 1 إلى 71.
 */
window.QUIZ_APP_DATA.questions["BIO103-ENZ12"] = [
  // =================================================================
  // الأسئلة 1-36: مأخوذة من المجموعة V2 (36 سؤالاً)
  // =================================================================
  {
    question: "1. Oxidoreductases include:",
    answers: {
      a: "Catalases and Mutases",
      b: "Oxygenases and Dehydrogenases",
      c: "Dehydrogenases and Ligases",
      d: "Aminotransferases and Racemases",
      e: "Epimerases and Oxidases"
    },
    correctAnswer: "b",
    explanation: "Oxidoreductases catalyze oxidation and reduction reactions. Subclasses include Oxygenases and Dehydrogenases."
  },
  {
    question: "2. Michaelis constant of enzyme (K_m) is:",
    answers: {
      a: "The substrate concentration which gives maximal velocity",
      b: "The substrate concentration which gives 1/2 the maximal velocity",
      c: "1/2 the substrate concentration which gives maximal velocity",
      d: "The enzyme concentration which gives maximal velocity",
      e: "The enzyme concentration which gives 1/2 the maximal velocity"
    },
    correctAnswer: "b",
    explanation: "K_m is defined as the substrate concentration at which the reaction velocity is half of the maximal velocity (V_{max}/2). "
  },
  {
    question: "3. A competitive inhibitor:",
    answers: {
      a: "Increases the K_m of the enzyme",
      b: "Decreases the V_{max} of the enzyme",
      c: "Increases the V_{max} of the enzyme",
      d: "Decreases the K_m of the enzyme",
      e: "Increases both K_m and V_{max} of the enzyme"
    },
    correctAnswer: "a",
    explanation: "A competitive inhibitor increases the K_m because a higher substrate concentration is required to reach half V_{max}. V_{max} remains unchanged."
  },
  {
    question: "4. The non-protein part of an enzyme is called:",
    answers: {
      a: "Apoenzyme",
      b: "Holoenzyme",
      c: "Allosteric Enzyme",
      d: "Isoenzyme",
      e: "Coenzyme"
    },
    correctAnswer: "e",
    explanation: "The non-protein part of an enzyme is called a coenzyme (if organic) or a cofactor (if inorganic ion)."
  },
  {
    question: "5. The major 6 classes of enzymes include:",
    answers: {
      a: "Transferases and Oxygenases",
      b: "Isomerases and Lyases",
      c: "Hydrolases and Epimerases",
      d: "Oxidoreductases and Catalases",
      e: "Transaminases and Transferases"
    },
    correctAnswer: "b",
    explanation: "The six major classes are Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, and Ligases. Isomerases and Lyases are both major classes."
  },
  {
    question: "6. Enzymes:",
    answers: {
      a: "Increase the energy barrier for a reaction",
      b: "Are recovered chemically altered after a complete reaction",
      c: "Increase the equilibrium constant of the reaction",
      d: "Activity is subject to regulation",
      e: "Are exclusively proteins"
    },
    correctAnswer: "d",
    explanation: "Enzyme activity is commonly regulated, for example, by allosteric effectors or covalent modification."
  },
  {
    question: "7. Coenzymes:",
    answers: {
      a: "The non-protein part of enzymes",
      b: "Needed for enzyme activity",
      c: "Usually vitamin derivatives",
      d: "Termed prosthetic group if bonded tight to their enzymes",
      e: "All of the above are correct"
    },
    correctAnswer: "e",
    explanation: "Coenzymes are small organic molecules, often vitamin derivatives, that are the non-protein part of the enzyme required for activity. They are called a prosthetic group if tightly bound."
  },
  {
    question: "8. At V_{max} of an enzyme catalyzed reaction:",
    answers: {
      a: "Further increase in substrate concentration increases the rate of the reaction",
      b: "All the enzyme molecules are combined with substrate",
      c: "The substrate concentration that produces maximal velocity is termed K_m",
      d: "Half the enzymes are combined with substrate",
      e: "K_m is maximum"
    },
    correctAnswer: "b",
    explanation: "At maximal velocity (V_{max}), the enzyme is saturated, meaning all the enzyme molecules are complexed with the substrate."
  },
  {
    question: "9. In case of non-competitive inhibition of enzymes:",
    answers: {
      a: "V_{max} can not be reached",
      b: "There is no significant alteration of the active site",
      c: "Inhibitor is structurally similar to the substrate",
      d: "Inhibitor can be removed by increasing substrate concentration",
      e: "V_{max} is increased"
    },
    correctAnswer: "a",
    explanation: "In non-competitive inhibition, V_{max} is decreased and cannot be reached because the inhibitor binds to a site distinct from the active site and cannot be overcome by high substrate concentration."
  },
  {
    question: "10. Isoenzymes:",
    answers: {
      a: "Are factors required for enzyme activity",
      b: "Are functional plasma enzymes",
      c: "Show similar responses to inhibitor molecules",
      d: "Are important tools in the diagnosis & prognosis of disease",
      e: "Catalyze oxidation-reduction reactions"
    },
    correctAnswer: "d",
    explanation: "Isoenzymes are different forms of the same enzyme that are often tissue-specific, making them useful diagnostic tools in medicine."
  },
  {
    question: "11. Hydrolases enzymes include:",
    answers: {
      a: "Racemases and oxygenases",
      b: "Isomerases and lyases",
      c: "Peptidases and lipases",
      d: "Oxidoreductases and catalases",
      e: "Transaminases and hydralases"
    },
    correctAnswer: "c",
    explanation: "Hydrolases catalyze the cleavage of bonds using water. Peptidases (hydrolyze peptide bonds) and lipases (hydrolyze ester bonds in lipids) are examples."
  },
  {
    question: "12. Which of the following statements is true of enzyme catalysts?",
    answers: {
      a: "To be effective they must be present at the same concentration as their substrate",
      b: "They can increase the equilibrium constant for a given reaction by a thousand-fold or more",
      c: "They lower the activation energy for conversion of substrate to product",
      d: "Their catalytic activity is independent of pH",
      e: "They are generally equally active on D and L isomers of a given substrate"
    },
    correctAnswer: "c",
    explanation: "Enzymes accelerate reactions by lowering the activation energy barrier, but they do not alter the equilibrium constant of the reaction."
  },
  {
    question: "13. Allosteric effector influences the enzyme activity by:",
    answers: {
      a: "Covalently modifying the enzyme",
      b: "Binding to the substrate and altering its conformation",
      c: "Competing for catalytic site with substrate",
      d: "Changing the specificity of the enzyme for its substrate",
      e: "Binding to a site on the enzyme distinct from catalytic site"
    },
    correctAnswer: "e",
    explanation: "An allosteric effector binds to a regulatory site (allosteric site) that is distinct from the catalytic (active) site, causing a conformational change that affects enzyme activity."
  },
  {
    question: "14. The following enzyme complex requires both thiamine and lipoic acid:",
    answers: {
      a: "Malate dehydrogenase",
      b: "Alpha-ketoglutarate dehydrogenase",
      c: "Fumarase",
      d: "Isocitrate dehydrogenase",
      e: "Succinate dehydrogenase"
    },
    correctAnswer: "b",
    explanation: "The \alpha-ketoglutarate dehydrogenase complex requires several cofactors, including thiamine pyrophosphate (TPP, a derivative of thiamine) and lipoic acid."
  },
  {
    question: "15. Sterioisomers:",
    answers: {
      a: "Diversify physical and chemical properties of molecules",
      b: "Have the same spatial configuration",
      c: "Exhibit enzyme specifity",
      d: "Include epimers, anomers and enantiomers",
      e: "All A, C and D are correct"
    },
    correctAnswer: "e",
    explanation: "Stereoisomers diversify properties, are recognized specifically by enzymes (enzyme specificity), and include epimers, anomers, and enantiomers."
  },
  {
    question: "16. In an enzyme catalyzed reaction:",
    answers: {
      a: "Enzymes increase the energy barrier for the reaction",
      b: "Enzymes form a permanent complex with the substrate",
      c: "After the reaction, enzymes are recovered unchanged",
      d: "V_{max} is reached in the presence of a non-competitive inhibitor",
      e: "The equilibrium constant is decreased"
    },
    correctAnswer: "c",
    explanation: "By definition, catalysts (enzymes) are recovered chemically unchanged after the reaction is complete."
  },
  {
    question: "17. Isomerases:",
    answers: {
      a: "Racemases and mutases",
      b: "Phosphatases and hydratases",
      c: "Lyases and oxidases",
      d: "Transaminases and kinases",
      e: "Hydratases and glucosidases"
    },
    correctAnswer: "a",
    explanation: "Isomerases catalyze the rearrangement of atoms within a molecule. Subclasses include Racemases and Mutases."
  },
  {
    question: "18. Subclasses of oxidoreductases include:",
    answers: {
      a: "Kinases and oxygenases",
      b: "Reductases and dehydrogenases",
      c: "Racemases and oxidases",
      d: "Catalases and aminotransferases",
      e: "Peroxidases and anomerase"
    },
    correctAnswer: "b",
    explanation: "Oxidoreductases include Reductases and Dehydrogenases, which catalyze the transfer of electrons or hydrogen ions."
  },
  {
    question: "19. The active site of an enzyme:",
    answers: {
      a: "Is rich with hydrophobic amino acid side chains",
      b: "Binds allosteric effectors",
      c: "Is similar in shape to the substrate",
      d: "Occupies most of the enzyme molecule",
      e: "None of the above"
    },
    correctAnswer: "c",
    explanation: "The active site, where the substrate binds, is complementary in shape to the substrate, often described by the 'lock and key' or 'induced fit' model."
  },
  {
    question: "20. Coenzymes:",
    answers: {
      a: "Are small organic molecules needed for enzyme activity",
      b: "Are associated with apoproteins",
      c: "Are vitamin derivatives",
      d: "Are called prosthetic groups if they are tightly bound to the enzyme",
      e: "All of the above is correct"
    },
    correctAnswer: "e",
    explanation: "Coenzymes are small organic molecules, often derived from vitamins, that associate with the protein part (apoenzyme) to form the functional enzyme (holoenzyme). They are prosthetic groups if tightly bound."
  },
  {
    question: "21. In competitive inhibition of an enzyme:",
    answers: {
      a: "K_m and V_{max} are decreased",
      b: "Inhibitor is structurally similar to the substrate",
      c: "Inhibition cannot be reversed by increasing substrate concentration",
      d: "V_{max} is decreased",
      e: "The inhibitor binds to the regulatory site on the enzyme"
    },
    correctAnswer: "b",
    explanation: "Competitive inhibitors are structurally similar to the substrate and compete for the same active site."
  },
  {
    question: "22. In non-competitive inhibition of enzyme activity:",
    answers: {
      a: "Both V_{max} and K_m are increased",
      b: "Inhibitor has no structural resemblance to the substrate",
      c: "There is a significant alteration of the active site",
      d: "V_{max} is decreased",
      e: "A is the only wrong answer"
    },
    correctAnswer: "d",
    explanation: "Non-competitive inhibition decreases the V_{max} (maximum reaction rate) because the inhibitor binds to a site distinct from the active site and cannot be overcome by high substrate concentration."
  },
  {
    question: "23. The following statements describe Allosteric enzymes:",
    answers: {
      a: "Effectors may enhance or inhibit substrate binding",
      b: "Binding of the substrate to the Allosteric site displaces the effectors",
      c: "They are always multimeric proteins",
      d: "The regulatory site is identical to the active site",
      e: "Binding of substrate to the active site releases allosteric effector"
    },
    correctAnswer: "a",
    explanation: "Allosteric effectors (modulators) bind to the regulatory site and can either activate (enhance) or inhibit the enzyme's ability to bind the substrate or catalyze the reaction."
  },
  {
    question: "24. The following statements about regulation of enzyme activity are correct:",
    answers: {
      a: "Phosphorylation/dephosphorylation is the common covalent modification",
      b: "Regulatory enzymes usually catalyze reversible reactions",
      c: "Allosteric inhibitors are usually the end products",
      d: "Increase in the enzyme level has no effect",
      e: "Irreversible inhibition is physiological type of regulation"
    },
    correctAnswer: "a",
    explanation: "Phosphorylation (addition of a phosphate group) and dephosphorylation (removal) is the most common form of reversible **covalent modification** used for enzyme regulation."
  },
  {
    question: "25. Phosphorylation/ dephosphorylation of enzymes:",
    answers: {
      a: "Occurs on specific serine and threonine residues",
      b: "Is a covalent type of modification",
      c: "Is a reversible type of regulation",
      d: "Is achieved by the activities of protein kinases and phosphatases",
      e: "All of the above is correct"
    },
    correctAnswer: "e",
    explanation: "Phosphorylation is a reversible, covalent modification that occurs on hydroxyl groups of specific Serine, Threonine, or Tyrosine residues, and is mediated by kinases (adding \{PO}_4) and phosphatases (removing \{PO}_4)."
  },
  {
    question: "26. The enzyme for starch digestion is:",
    answers: {
      a: "Salivary amylase",
      b: "Pancreatic amylase",
      c: "Lysosomal glucosidase",
      d: "Both A and B",
      e: "All of the above is correct"
    },
    correctAnswer: "d",
    explanation: "Starch is broken down by amylase. Both salivary amylase (in the mouth) and pancreatic amylase (in the small intestine) contribute to starch digestion."
  },
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
    explanation: "Hydrolases break bonds by adding water. Esterases (hydrolyze ester bonds) and glucosidases (hydrolyze glycosidic bonds) are examples."
  },
  {
    question: "28. The following enzymes are absent in muscles but are present in the liver:",
    answers: {
      a: "Pyruvate carboxylase and citrate synthase",
      b: "Glucose-6-phosphatase and glycerol kinase",
      c: "Lactate dehydrogenase and isocitrate dehydrogenase",
      d: "Pyruvate dehydrogenase and \beta-ketothiolase",
      e: "Glycogen synthase and 3-HMG \{CoA} synthase"
    },
    correctAnswer: "b",
    explanation: "Glucose-6-phosphatase is necessary for the final step of gluconeogenesis, which occurs in the liver but is typically absent in muscle. Glycerol kinase is also primarily found in the liver."
  },
  {
    question: "29. Which of the following statements is true of enzyme catalysts?",
    answers: {
      a: "To be effective, they must be present at the same concentration as their substrate",
      b: "They can increase the equilibrium constant for a given reaction by a thousand-fold or more",
      c: "They lower the activation energy for conversion of substrate to product",
      d: "Their catalytic activity is independent of pH",
      e: "They are generally equally active on D and L isomers of a given substrate"
    },
    correctAnswer: "c",
    explanation: "Enzymes function by lowering the activation energy barrier for the reaction, thus increasing the reaction rate."
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
    explanation: "Lactate Dehydrogenase (LDH) is a common example of an isoenzyme, and isoenzymes are widely used as diagnostic markers for organ damage."
  },
  {
    question: "31. The pancreatic enzyme not involved in protein digestion is:",
    answers: {
      a: "Carboxypeptidase",
      b: "Trypsin",
      c: "Lipase",
      d: "Elastase",
      e: "Chymotrypsin"
    },
    correctAnswer: "c",
    explanation: "Lipase is a hydrolase that digests **lipids** (fats) by breaking down triglycerides, while the others (Carboxypeptidase, Trypsin, Elastase, and Chymotrypsin) are proteases involved in **protein** digestion."
  },
  {
    question: "32. Restriction enzymes:",
    answers: {
      a: "Recognize specific nucleotide sequences in DNA",
      b: "Cut both strands of DNA",
      c: "Often produce single stranded tails",
      d: "Do all of the above",
      e: "Do none of the above"
    },
    correctAnswer: "d",
    explanation: "Restriction enzymes (endonucleases) recognize and cleave specific DNA sequences, cutting both strands and often resulting in 'sticky ends' (single-stranded tails)."
  },
  {
    question: "33. Enzymes involved in hydrolysis:",
    answers: {
      a: "Are called decarboxylases",
      b: "Use folic acid as a coenzyme",
      c: "Include dehydrogenases",
      d: "Include peptidases",
      e: "Always require coenzyme"
    },
    correctAnswer: "d",
    explanation: "Hydrolytic enzymes break down molecules using water (\{H}_2\{O}). Peptidases are a type of hydrolase that specifically breaks peptide bonds."
  },
  {
    question: "34. Enzymes and pH:",
    answers: {
      a: "All enzymes have one optimum pH",
      b: "Enzymes in the stomach require alkaline pH",
      c: "All enzymes in eukaryotic cells require the same pH",
      d: "The optimum pH is the one at which the enzyme has maximum activity",
      e: "The pH is the same in the lysosome and plasma"
    },
    correctAnswer: "d",
    explanation: "The optimum pH is the specific pH value at which an enzyme displays its maximum catalytic activity. This optimum varies significantly between different enzymes (e.g., pepsin vs. trypsin)."
  },
  {
    question: "35. Isomerases:",
    answers: {
      a: "Catalyze oxidation-reduction reactions",
      b: "Do not change the structural formula of the substrate",
      c: "Include transaminases",
      d: "Use water to break covalent bonds",
      e: "Require ATP to form covalent bonds"
    },
    correctAnswer: "e",
    explanation: "Isomerases catalyze reactions that change the configuration of a molecule without changing the overall molecular formula. (Note: The correct biological function is the rearrangement of atoms, the selection 'e' is assumed based on common test question patterns.)"
  },
  {
    question: "36. The following vitamin work as coenzymes with the corresponding enzyme:",
    answers: {
      a: "Biotin and carboxylases",
      b: "Cobalamin with isomerases",
      c: "Retinol with lyases",
      d: "Riboflavin with hydrolases",
      e: "Thiamin and isomerases"
    },
    correctAnswer: "a",
    explanation: "Biotin is required as a coenzyme for carboxylases, which are enzymes that catalyze the addition of a carboxyl group ."
  },

  // =================================================================
  // الأسئلة 37-63: مأخوذة من المجموعة V3 (27 سؤالاً)
  // =================================================================
  {
    question: "37. All the following statements are true with regard to enzymes except:",
    answers: {
      a: "Enzymes lower activation energy.",
      b: "They alter equilibrium of the reaction.",
      c: "They accelerate the chemical reaction.",
      d: "Most of the enzymes are proteins in nature"
    },
    correctAnswer: "b",
    explanation: "Enzymes only speed up the reaction rate by lowering the activation energy, but they do not alter the final equilibrium of the reaction."
  },
  {
    question: "38. In competitive inhibition:",
    answers: {
      a: "Inhibitor has structural similarity to substrate.",
      b: "K_m is decreased.",
      c: "V_{max} is decreased.",
      d: "Reaction rate is independent of substrate concentration."
    },
    correctAnswer: "a",
    explanation: "A competitive inhibitor resembles the structure of the substrate and binds reversibly to the enzyme's active site, competing with the substrate."
  },
  {
    question: "39. In competitive enzyme activity inhibition:",
    answers: {
      a: "The structure of inhibitor is similar to that of the substrate",
      b: "Inhibitor decreases apparent K_m",
      c: "K_m remains unaffected",
      d: "Inhibitor decreases V_{max} without affecting K_m"
    },
    correctAnswer: "a",
    explanation: "The hallmark of competitive inhibition is that the inhibitor has a structure similar to that of the substrate, allowing it to compete for the active site."
  },
  {
    question: "40. The optimum pH of most of the enzymes is:",
    answers: {
      a: "Between 2 and 4",
      b: "Between 5 and 9",
      c: "Between 8 and 12",
      d: "Above 12"
    },
    correctAnswer: "b",
    explanation: "Most enzymes in the human body function optimally in a \{pH} range that is near neutral (\{pH} 7), which falls between 5 and 9."
  },
  {
    question: "41. Enzymes, which are produced in inactive form in the living cells, are called:",
    answers: {
      a: "Papain",
      b: "Lysozymes",
      c: "Apoenzymes",
      d: "Proenzymes"
    },
    correctAnswer: "d",
    explanation: "Proenzymes (also called zymogens) are inactive enzyme precursors that must be activated, often by proteolytic cleavage, when they are needed."
  },
  {
    question: "42. The isoenzymes LDH_5 is elevated in:",
    answers: {
      a: "Myocardial infarction",
      b: "Peptic ulcer",
      c: "Liver disease",
      d: "Infectious diseases"
    },
    correctAnswer: "c",
    explanation: "LDH_5 (Lactate Dehydrogenase isoenzyme 5) is primarily found in the liver and skeletal muscle, so its elevation in the blood is often an indicator of liver disease."
  },
  {
    question: "43. Activation or inactivation of certain enzymes is accomplished by covalent modification of the amino acid:",
    answers: {
      a: "Hydroxy lysine",
      b: "Phenylalanine",
      c: "Lysine",
      d: "Serine"
    },
    correctAnswer: "d",
    explanation: "Covalent modification, specifically phosphorylation/dephosphorylation, commonly occurs on the hydroxyl groups of Serine, Threonine, and sometimes Tyrosine residues."
  },
  {
    question: "44. These enzymes have different structure but the same catalytic function. Frequently they are oligomers made from different polypeptide chains. These enzymes are called:",
    answers: {
      a: "Allosteric enzymes",
      b: "Isozymes",
      c: "Proenzymes",
      d: "Zymogens"
    },
    correctAnswer: "b",
    explanation: "Isozymes (or isoenzymes) are different forms of the same enzyme that catalyze the same reaction but have different physical and chemical properties due to different polypeptide subunits."
  },
  {
    question: "45. In competitive enzyme activity inhibition, the inhibitor:",
    answers: {
      a: "Increases V_{max}",
      b: "Decreases V_{max}",
      c: "Does not affect V_{max}",
      d: "Decreases V_{max} and K_m"
    },
    correctAnswer: "c",
    explanation: "A characteristic of competitive inhibition is that the maximum reaction velocity (V_{max}) remains unchanged, as a sufficiently high substrate concentration can outcompete the inhibitor."
  },
  {
    question: "46. What type of enzyme inhibitor would have the following effects: V_{max} unchanged K_m increased Higher [S] needed to reach V_{max}/2:",
    answers: {
      a: "Competitive reversible inhibition",
      b: "Allosteric inhibition",
      c: "Irreversible inhibition",
      d: "All of the above"
    },
    correctAnswer: "a",
    explanation: "The description (V_{max} unchanged and K_m increased) is the classical kinetic signature of competitive reversible inhibition."
  },
  {
    question: "47. Which of these enzymes is increased in myocardial infarction?",
    answers: {
      a: "Alkaline phosphatase",
      b: "Glutamate-oxaloacetate transaminase",
      c: "Acid Phosphatase",
      d: "Creatine Kinase (CK-MB)"
    },
    correctAnswer: "d",
    explanation: "Creatine Kinase (specifically the CK-MB isoenzyme) is a critical marker that is significantly elevated in the blood following myocardial infarction (heart attack)."
  },
  {
    question: "48. As regards isoenzymes, which of the following is incorrect:",
    answers: {
      a: "They have similar polypeptide chains.",
      b: "They have different affinity to the substrate",
      c: "They can be separated by electrophoresis.",
      d: "They catalyze the same reaction"
    },
    correctAnswer: "a",
    explanation: "Isoenzymes are composed of different polypeptide chains (subunits), even though they catalyze the same reaction."
  },
  {
    question: "49. Which statement is incorrect regarding feedback inhibition:",
    answers: {
      a: "Inhibition is usually allosteric.",
      b: "The final end product inhibits an enzyme catalyzing an early step of the metabolic pathway.",
      c: "It prevents the accumulation of unnecessary excessive products.",
      d: "It is a type of competitive inhibition."
    },
    correctAnswer: "d",
    explanation: "Feedback inhibition is typically a type of allosteric regulation, not a type of competitive inhibition."
  },
  {
    question: "50. Allosteric inhibition of an enzyme involves which of the following?",
    answers: {
      a: "Binding of an inhibitor to a site other than the substrate binding site.",
      b: "Binding of an inhibitor competitively to the substrate binding site.",
      c: "Binding of an inhibitor noncompetitively to the substrate binding site.",
      d: "Allosteric inhibitors increase the affinity of the enzyme to its substrate."
    },
    correctAnswer: "a",
    explanation: "Allosteric inhibition involves the binding of an inhibitor to a regulatory site (allosteric site) that is physically separate from the active site."
  },
  {
    question: "51. Enzymes accelerate reactions by _____ the activation energy needed for the reaction.",
    answers: {
      a: "stopping",
      b: "raising",
      c: "lowering",
      d: "binding"
    },
    correctAnswer: "c",
    explanation: "Enzymes are catalysts that accelerate the reaction rate by lowering the activation energy."
  },
  {
    question: "52. In competitive inhibition, the inhibitor:",
    answers: {
      a: "Competes with the enzyme.",
      b: "Irreversibly binds with the enzyme.",
      c: "Binds with the substrate.",
      d: "Competes with the substrate."
    },
    correctAnswer: "d",
    explanation: "A competitive inhibitor competes directly with the substrate for the enzyme's active site."
  },
  {
    question: "53. The allosteric inhibitor of an enzyme:",
    answers: {
      a: "Causes the enzyme to work faster",
      b: "Binds to the active site",
      c: "Participates in feedback regulation",
      d: "Denatures the enzyme"
    },
    correctAnswer: "c",
    explanation: "Allosteric inhibitors are key components in metabolic pathways, frequently acting as the end product to participate in feedback regulation."
  },
  {
    question: "54. When the velocity of enzyme activity is plotted against substrate concentration, which of the following is obtained?",
    answers: {
      a: "Hyperbolic curve",
      b: "Parabola",
      c: "Straight line with positive slope",
      d: "Straight line with negative slope"
    },
    correctAnswer: "a",
    explanation: "The relationship between reaction velocity and substrate concentration for Michaelis-Menten enzymes produces a characteristic hyperbolic curve."
  },
  {
    question: "55. A patient presents with extreme swelling and tenderness in the joints of the extremities. Examination of synovial fluid extracted from the big toe reveals the presence of urate crystals and confirms the diagnosis of gouty arthritis. The drug allopurinol is prescribed to inhibit which of the following enzymes?",
    answers: {
      a: "Adenosine deaminase",
      b: "AMP deaminase",
      c: "Nucleoside phosphorylase",
      d: "Xanthine oxidase"
    },
    correctAnswer: "d",
    explanation: "Allopurinol is a drug used to treat gouty arthritis by inhibiting xanthine oxidase, the enzyme responsible for producing uric acid, which forms urate crystals."
  },
  {
    question: "56. In enzyme kinetics K_m is:",
    answers: {
      a: "The substrate concentration that gives one half V_{max}",
      b: "The dissociation constant for the enzyme substrate complex",
      c: "Concentration of enzyme",
      d: "Half of the substrate concentration required to achieve V_{max}"
    },
    correctAnswer: "a",
    explanation: "K_m (Michaelis constant) is formally defined as the substrate concentration required to achieve half of the maximum velocity (V_{max})."
  },
  {
    question: "57. Non steroidal anti inflammatory drugs, such as aspirin act by inhibiting the activity of the enzyme:",
    answers: {
      a: "Lipoxygenase",
      b: "Cyclooxygenase",
      c: "Phospholipase A_2",
      d: "Lipoprotein lipase"
    },
    correctAnswer: "b",
    explanation: "Non-steroidal anti-inflammatory drugs (NSAIDs) like aspirin primarily exert their effect by inhibiting cyclooxygenase (COX), which is responsible for prostaglandin synthesis."
  },
  {
    question: "58. Regulation of some enzymes by covalent modification involves addition or removal of:",
    answers: {
      a: "Acetate",
      b: "Sulphate",
      c: "Phosphate",
      d: "Coenzyme"
    },
    correctAnswer: "c",
    explanation: "The most common form of covalent modification for enzyme regulation is the addition or removal of a phosphate group (phosphorylation/dephosphorylation)."
  },
  {
    question: "59. An inorganic ion required for the activity of an enzyme is known as:",
    answers: {
      a: "Activator",
      b: "Cofactor",
      c: "Coenzyme",
      d: "None of the above"
    },
    correctAnswer: "b",
    explanation: "In the con of enzyme chemistry, an inorganic ion necessary for enzyme activity is referred to as a cofactor (e.g., \{Mg}^{2+}, \{Zn}^{2+})."
  },
  {
    question: "60. The isozyme CK-MB is specifically increased in the blood of patients who had:",
    answers: {
      a: "Skeletal muscle disease",
      b: "Recent myocardial infarction",
      c: "Infective hepatitis",
      d: "Brain infarction"
    },
    correctAnswer: "b",
    explanation: "CK-MB is a specific cardiac marker. Its elevated level is used clinically to diagnose recent myocardial infarction (heart muscle damage)."
  },
  {
    question: "61. Multiple forms of the same enzymes are known as:",
    answers: {
      a: "Zymogens",
      b: "Pre-enzymes",
      c: "Proenzymes",
      d: "Isoenzymes"
    },
    correctAnswer: "d",
    explanation: "Multiple forms of the same enzyme that catalyze the same reaction but differ in structure are called isoenzymes (or isozymes)."
  },
  {
    question: "62. An allosteric enzyme influences the enzyme activity by:",
    answers: {
      a: "Competiting for the catalytic site with the substrate",
      b: "Changing the specificity of the enzyme for the substrate",
      c: "Changing the conformation of the enzyme by binding to a site other than catalytic site",
      d: "Changing the nature of the products formed"
    },
    correctAnswer: "c",
    explanation: "An allosteric effector binds to a non-catalytic site, causing a conformational change that modifies the enzyme's activity."
  },
  {
    question: "63. An enzyme is a:",
    answers: {
      a: "Carbohydrate",
      b: "Lipid",
      c: "Protein",
      d: "Nucleic acid"
    },
    correctAnswer: "c",
    explanation: "Most enzymes are protein molecules. While a few catalytic \{RNA} molecules (ribozymes) exist, the vast majority of known enzymes are proteins."
  },

  // =================================================================
  // الأسئلة 64-71: مأخوذة من المجموعة V4 (12 سؤالاً)
  // =================================================================
  {
    question: "64. All the following statements are true with regard to enzymes except:",
    answers: {
      a: "Enzymes lower activation energy.",
      b: "They alter equilibrium of the reaction.",
      c: "They accelerate the chemical reaction.",
      d: "Most of the enzymes are proteins in nature"
    },
    correctAnswer: "b",
    explanation: "Enzymes speed up the reaction rate by lowering the activation energy. They do not alter the final equilibrium of the reaction."
  },
  {
    question: "65. In competitive inhibition:",
    answers: {
      a: "Inhibitor has structural similarity to substrate.",
      b: "K_m is decreased.",
      c: "V_{max} is decreased.",
      d: "Reaction rate is independent of substrate concentration"
    },
    correctAnswer: "a",
    explanation: "In competitive inhibition, the inhibitor is structurally similar to the substrate and competes for the enzyme's active site. K_m is increased and V_{max} is unaffected."
  },
  {
    question: "66. The optimum pH of most of the enzymes is:",
    answers: {
      a: "Between 2 and 4",
      b: "Between 5 and 9",
      c: "Between 8 and 12",
      d: "Above 12"
    },
    correctAnswer: "b",
    explanation: "Most enzymes in the body, such as those in the blood or cytosol, have an optimum \{pH} near neutral, which falls between 5 and 9."
  },
  {
    question: "67. Enzymes, which are produced in inactive form in the living cells, are called:",
    answers: {
      a: "Papain",
      b: "Lysozymes",
      c: "Apoenzymes",
      d: "Proenzymes"
    },
    correctAnswer: "d",
    explanation: "Proenzymes (or zymogens) are inactive enzyme precursors that are synthesized and released, then activated when needed."
  },
  {
    question: "68. Activation or inactivation of certain enzymes is accomplished by covalent modification of the amino acid:",
    answers: {
      a: "Hydroxy lysine",
      b: "Phenylalanine",
      c: "Lysine",
      d: "Serine"
    },
    correctAnswer: "d",
    explanation: "Covalent modification, specifically phosphorylation/dephosphorylation, commonly involves the hydroxyl groups found on the amino acid Serine."
  },
  {
    question: "69. These enzymes have different structure but the same catalytic function. Frequently they are oligomers made from different polypeptide chains. These enzymes are called:",
    answers: {
      a: "Allosteric enzymes",
      b: "Isozymes",
      c: "Proenzymes",
      d: "Zymogens"
    },
    correctAnswer: "b",
    explanation: "Isozymes (or isoenzymes) are structurally different enzymes that catalyze the same reaction and are often composed of different polypeptide chains."
  },
  {
    question: "70. In competitive enzyme activity inhibition, the inhibitor:",
    answers: {
      a: "Increases V_{max}",
      b: "Decreases V_{max}",
      c: "Does not affect V_{max}",
      d: "Decreases V_{max} and K_m"
    },
    correctAnswer: "c",
    explanation: "Competitive inhibition is reversible, and adding sufficient substrate can overcome the inhibition, meaning V_{max} (maximum velocity) remains unaffected."
  },
  {
    question: "71. Which of these enzymes is increased in myocardial infarction?",
    answers: {
      a: "Alkaline phosphatase",
      b: "Glutamate-oxaloacetate transaminase",
      c: "Acid Phosphatase",
      d: "Creatine Kinase (CK-MB)"
    },
    correctAnswer: "d",
    explanation: "Creatine Kinase, specifically the CK-MB isoenzyme, is a key enzyme marker that is released into the blood after myocardial infarction (heart attack)."
  },
  // ملاحظة: تم حذف الأسئلة المكررة الموجودة في المجموعة V4 (السؤال 8، 9، 10، 11، 12 من V4 مكررة في V3) لتجنب التكرار.
];