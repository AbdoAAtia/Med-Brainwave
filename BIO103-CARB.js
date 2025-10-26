// 1. Ensure the necessary global objects exist before assigning data.
window.QUIZ_APP_DATA = window.QUIZ_APP_DATA || {};
window.QUIZ_APP_DATA.questions = window.QUIZ_APP_DATA.questions || {};

// Data merged and cleaned from all Carbohydrate files (Total 60 unique questions).
window.QUIZ_APP_DATA.questions["BIO103-CARB"] = [
    // --- Carbohydrate Chemistry (Monosaccharides, Disaccharides, Polysaccharides) ---
    {
        question: "1. The following are Aldohexoses:",
        answers: { a: "Glucose, fructose", b: "Fructose, ribose", c: "Glucose, Galactose", d: "Ribose, glucose" },
        correctAnswer: "c",
        explanation: "**Glucose** and **Galactose** are Hexoses of the Aldose type."
    },
    {
        question: "2. The sugar found in DNA is:",
        answers: { a: "Xylose", b: "Ribose", c: "Deoxyribose", d: "Ribulose" },
        correctAnswer: "c",
        explanation: "The pentose sugar in **Deoxyribonucleic acid** is **Deoxyribose**."
    },
    {
        question: "3. The sugar found in RNA is:",
        answers: { a: "Xylose", b: "Ribose", c: "Deoxyribose", d: "Ribulose" },
        correctAnswer: "b",
        explanation: "The pentose sugar in **Ribonucleic acid** is **Ribose**."
    },
    {
        question: "4. Sugar alcohol derived from glucose is:",
        answers: { a: "Sorbitol", b: "Inositol", c: "Dulcitol", d: "Lipositol" },
        correctAnswer: "a",
        explanation: "The sugar alcohol derived from glucose is **Sorbitol**."
    },
    {
        question: "5. Sugar alcohol derived from galactose is:",
        answers: { a: "Sorbitol", b: "Mannitol", c: "Dulcitol", d: "Ribitol" },
        correctAnswer: "c",
        explanation: "The sugar alcohol derived from galactose is **Dulcitol**."
    },
    {
        question: "6. The mother compound of all aldoses is:",
        answers: { a: "Dihydroxyacetone", b: "Glyceraldehyde", c: "Ribose", d: "Erythrose" },
        correctAnswer: "b",
        explanation: "The mother compound for all Aldoses is **Glyceraldehyde**."
    },
    {
        question: "7. The simplest ketose (ketotriose) is:",
        answers: { a: "Erythrulose", b: "Ribulose", c: "Dihydroxyacetone", d: "Fructose" },
        correctAnswer: "c",
        explanation: "The simplest Ketose sugar is **Dihydroxyacetone**."
    },
    {
        question: "8. The most sweet sugar is:",
        answers: { a: "Glucose", b: "Sucrose", c: "Fructose", d: "Lactose" },
        correctAnswer: "c",
        explanation: "The sweetest sugar is **Fructose**."
    },
    {
        question: "9. Glucose, Galactose and Mannose are:",
        answers: { a: "Ketohexoses", b: "Aldopentoses", c: "Aldohexoses", d: "Ketopentoses" },
        correctAnswer: "c",
        explanation: "Glucose, Galactose, and Mannose are all hexose sugars of the Aldehyde type (**Aldohexoses**)."
    },
    {
        question: "10. D-Glucose and D-Mannose are isomers that differ only in the configuration around the second carbon atom. They are classified as:",
        answers: { a: "Anomers", b: "Aldose-ketose isomers", c: "Epimers", d: "Enantiomers" },
        correctAnswer: "c",
        explanation: "**Epimers** are stereoisomers that differ in the configuration around only one hydroxyl group; here, the difference is around the **second carbon atom**."
    },
    {
        question: "11. D-Glucose and D-Galactose are epimers, differing only around the fourth carbon atom. They are classified as:",
        answers: { a: "Anomers", b: "Aldose-ketose isomers", c: "Epimers", d: "Enantiomers" },
        correctAnswer: "c",
        explanation: "Glucose and Galactose differ in configuration around the **fourth carbon atom**, so they are **Epimers**."
    },
    {
        question: "12. The anomers are epimers that differ only in the configuration around the:",
        answers: { a: "second carbon atom", b: "third carbon atom", c: "fourth carbon atom", d: "anomeric carbon (Carbon number 1)" },
        correctAnswer: "d",
        explanation: "**Anomers** are isomers that differ only in the configuration around the **anomeric carbon (Carbon number 1)** in an aldose sugar."
    },
    {
        question: "13. All the following are reducing sugars except:",
        answers: { a: "Glucose", b: "Fructose", c: "Maltose", d: "Sucrose" },
        correctAnswer: "d",
        explanation: "**Sucrose** is a non-reducing sugar because Carbon number 1 of glucose is linked to Carbon number 2 of fructose."
    },
    {
        question: "14. Lactose is a disaccharide made up of:",
        answers: { a: "Glucose and glucose", b: "Glucose and galactose", c: "Glucose and fructose", d: "Galactose and fructose" },
        correctAnswer: "b",
        explanation: "Lactose is made up of **Glucose** and **Galactose**."
    },
    {
        question: "15. Sucrose is a disaccharide made up of:",
        answers: { a: "Glucose and glucose", b: "Glucose and galactose", c: "Glucose and fructose", d: "Galactose and fructose" },
        correctAnswer: "c",
        explanation: "Sucrose is made up of **Glucose** and **Fructose**."
    },
    {
        question: "16. A carbohydrate found only in milk is:",
        answers: { a: "Glucose", b: "Galactose", c: "Lactose", d: "Maltose" },
        correctAnswer: "c",
        explanation: "The sugar found only in milk is **Lactose**."
    },
    {
        question: "17. The disaccharide formed by alpha-1,4 glucosidic linkage is:",
        answers: { a: "Sucrose", b: "Lactose", c: "Maltose", d: "Cellobiose" },
        correctAnswer: "c",
        explanation: "**Maltose** consists of two glucose molecules linked by an **alpha-1,4 glucosidic linkage**."
    },
    {
        question: "18. Starch and glycogen are examples of:",
        answers: { a: "Heteropolysaccharide", b: "Glycosaminoglycan", c: "Homopolysaccharide", d: "Disaccharide" },
        correctAnswer: "c",
        explanation: "Both are composed of repeating glucose units, so they are **Homopolysaccharides**."
    },
    {
        question: "19. The storage form of carbohydrate in plants is:",
        answers: { a: "Glycogen", b: "Starch", c: "Cellulose", d: "Chitin" },
        correctAnswer: "b",
        explanation: "The storage form of carbohydrate in plants is **Starch**."
    },
    {
        question: "20. The storage form of carbohydrate in the liver and muscles is:",
        answers: { a: "Starch", b: "Inulin", c: "Glycogen", d: "Cellulose" },
        correctAnswer: "c",
        explanation: "The storage form of carbohydrate in animals (liver and muscles) is **Glycogen**."
    },
    {
        question: "21. One of the following polysaccharides is not easily digested by humans:",
        answers: { a: "Starch", b: "Glycogen", c: "Cellulose", d: "Dextrin" },
        correctAnswer: "c",
        explanation: "**Cellulose** is not easily digested due to its **beta-1,4** linkages."
    },
    {
        question: "22. All the following are homopolysaccharides except:",
        answers: { a: "Starch", b: "Hyaluronic acid", c: "Cellulose", d: "Glycogen" },
        correctAnswer: "b",
        explanation: "**Hyaluronic acid** is a Heteropolysaccharide of the **Glycosaminoglycan** type."
    },
    {
        question: "23. Heparin is an example of a:",
        answers: { a: "Homopolysaccharide", b: "Heteropolysaccharide", c: "Monosaccharide", d: "Disaccharide" },
        correctAnswer: "b",
        explanation: "**Heparin** is a **Heteropolysaccharide**."
    },
    {
        question: "24. The main function of Heparin is:",
        answers: { a: "Immunological function", b: "Lubricant", c: "Structural", d: "Anticoagulant" },
        correctAnswer: "d",
        explanation: "The main function of Heparin is to act as an **Anticoagulant**."
    },
    {
        question: "25. The end product of complete hydrolysis of starch or glycogen is:",
        answers: { a: "Fructose", b: "Galactose", c: "Glucose", d: "Ribose" },
        correctAnswer: "c",
        explanation: "The final product of complete hydrolysis of both starch and glycogen is **Glucose**."
    },
    {
        question: "26. Starch is made up of:",
        answers: { a: "Amylose", b: "Amylopectin", c: "Both A and B", d: "None of the above" },
        correctAnswer: "c",
        explanation: "Starch is composed of two main components: **Amylose** and **Amylopectin**."
    },
    {
        question: "27. In the alpha-D-glucose, the hydroxyl group on Carbon number 1 is:",
        answers: { a: "Above the plane", b: "Below the plane", c: "On the right side", d: "On the left side" },
        correctAnswer: "b",
        explanation: "In the alpha  isomer, the **hydroxyl group** on the **anomeric carbon** (**Carbon number 1**) is **below** the plane of the ring."
    },
    {
        question: "28. The reducing end of a polysaccharide is characterized by:",
        answers: { a: "Free hydroxyl group at C1", b: "Free hydroxyl group at C4", c: "Free hydroxyl group at C6", d: "C1 hydroxyl group attached to another molecule" },
        correctAnswer: "a",
        explanation: "The reducing end of a polysaccharide is characterized by a **free hydroxyl group** on the **anomeric carbon (Carbon number 1)**, which allows it to reduce other compounds."
    },
    {
        question: "29. D-Galactose and D-Fructose are:",
        answers: { a: "Epimers", b: "Aldose-ketose isomers", c: "Anomers", d: "Enantiomers" },
        correctAnswer: "b",
        explanation: "Galactose is an Aldohexose and Fructose is a Ketohexose, so they are **Aldose-Ketose isomers**."
    },
    {
        question: "30. Glucuronic acid is an example of:",
        answers: { a: "Sugar alcohol", b: "Amino sugar", c: "Sugar acid", d: "Deoxy sugar" },
        correctAnswer: "c",
        explanation: "Glucuronic acid is a **Sugar acid** where the Hydroxyl group at **Carbon number 6** has been oxidized."
    },

    // --- Carbohydrate Metabolism (Glycolysis, Gluconeogenesis, Glycogen) ---
    {
        question: "31. The enzymes of glycolysis are located in the:",
        answers: { a: "Intermembrane space", b: "Plasma membrane", c: "Cytosol", d: "Mitochondrial matrix" },
        correctAnswer: "c",
        explanation: "The process of glycolysis occurs in the **Cytosol**."
    },
    {
        question: "32. For every one molecule of glucose oxidized in glycolysis, how many molecules of pyruvic acid are produced?",
        answers: { a: "1", b: "2", c: "3", d: "4" },
        correctAnswer: "b",
        explanation: "One molecule of Glucose (six carbons) is broken down into two molecules of Pyruvic acid (three carbons each)."
    },
    {
        question: "33. The true statement about glycolysis is:",
        answers: { a: "Occurs in mitochondria", b: "Complete breakdown of glucose", c: "Conversion of glucose to 3C units", d: "3 ATPs are used in anaerobic pathway" },
        correctAnswer: "c",
        explanation: "The main purpose of glycolysis is the **conversion of Glucose (six carbons) into three-carbon units (Pyruvate)**."
    },
    {
        question: "34. The three irreversible reactions of Glycolysis are catalyzed by:",
        answers: { a: "Glucokinase, Phosphofructokinase-1, Pyruvate Kinase", b: "Glucokinase, Pyruvate Kinase, Glyceraldehyde 3 Phosphate Dehydrogenase", c: "Glucokinase, Phospho-Glycerate Kinase, Pyruvate Kinase", d: "Pyruvate Kinase, Fructose 1,6 Bis-phosphatase, Phosphofructokinase-1" },
        correctAnswer: "a",
        explanation: "The main irreversible enzymes are **Glucokinase, Phosphofructokinase-1, and Pyruvate Kinase**."
    },
    {
        question: "35. The net number of Adenosine Triphosphate molecules produced by anaerobic glycolysis in a Red Blood Cell is:",
        answers: { a: "1", b: "2", c: "3", d: "4" },
        correctAnswer: "b",
        explanation: "In anaerobic glycolysis, 2 **Adenosine Triphosphate** molecules are consumed and 4 are produced, resulting in a net yield of **2 Adenosine Triphosphate** molecules."
    },
    {
        question: "36. The oxidative decarboxylation of pyruvate forms:",
        answers: { a: "Lactate", b: "Acetyl Coenzyme A", c: "Oxaloacetate", d: "Ethanol" },
        correctAnswer: "b",
        explanation: "The oxidation of Pyruvic acid leads to the formation of **Acetyl Coenzyme A**, which enters the Citric Acid Cycle."
    },
    {
        question: "37. Acetyl Coenzyme A acts as an activator for which enzyme in the conversion of pyruvate?",
        answers: { a: "Pyruvate dehydrogenase", b: "Pyruvate carboxylase", c: "Hexokinase", d: "Glucokinase" },
        correctAnswer: "b",
        explanation: "**Acetyl Coenzyme A** **activates the enzyme Pyruvate carboxylase**, a crucial step in **Gluconeogenesis**."
    },
    {
        question: "38. One of the following substances is NOT glucogenic (cannot be converted to glucose):",
        answers: { a: "Lactate", b: "Even chain fatty acids", c: "Proteins", d: "Glycerol" },
        correctAnswer: "b",
        explanation: "Oxidation of even-chain fatty acids cannot lead to glucose formation in humans because they only produce **Acetyl Coenzyme A**."
    },
    {
        question: "39. Glucagon and adrenaline regulate glycogen synthase (the enzyme that synthesizes glycogen) by:",
        answers: { a: "Activating it", b: "Inactivating it", c: "Inhibiting its synthesis", d: "Stimulating its breakdown" },
        correctAnswer: "b",
        explanation: "Glucagon and adrenaline increase cyclic Adenosine Monophosphate, which leads to the phosphorylation and **Inactivation** of Glycogen Synthase to promote Glycogen breakdown."
    },
    {
        question: "40. Insulin affects carbohydrate metabolism by:",
        answers: { a: "Stimulating gluconeogenesis and glycolysis", b: "Stimulating gluconeogenesis and inhibiting glycolysis", c: "Inhibiting gluconeogenesis and glycolysis", d: "Inhibiting gluconeogenesis and stimulating glycolysis" },
        correctAnswer: "d",
        explanation: "Insulin is a blood sugar lowering hormone that works by **inhibiting Gluconeogenesis and stimulating Glycolysis**."
    },
    {
        question: "41. Glucose-6-Phosphate Dehydrogenase deficiency is the possible defect leading to hemolytic anemia upon ingestion of Primaquine because this enzyme is important for:",
        answers: { a: "Producing ATP in Red Blood Cells", b: "Producing NADH", c: "Producing reduced Nicotinamide Adenine Dinucleotide Phosphate", d: "Breakdown of glycogen" },
        correctAnswer: "c",
        explanation: "The main function of the enzyme **Glucose-6-Phosphate Dehydrogenase** in **Red Blood Cells** is the **production of reduced Nicotinamide Adenine Dinucleotide Phosphate**, which is essential for protecting the cells from oxidative stress."
    },
    {
        question: "42. The main pathway responsible for the complete oxidation of Acetyl Coenzyme A is:",
        answers: { a: "Glycolysis", b: "Gluconeogenesis", c: "Citric Acid Cycle (TCA Cycle)", d: "Pentose Phosphate Pathway" },
        correctAnswer: "c",
        explanation: "**Acetyl Coenzyme A** is completely oxidized to produce energy in the **Citric Acid Cycle (TCA Cycle)**."
    },
    {
        question: "43. Galactose is converted to Glucose 1-Phosphate via three reactions. The key regulatory enzyme in this process is:",
        answers: { a: "Galactokinase", b: "UDP-glucose pyrophosphorylase", c: "Galactose 1-Phosphate uridylyltransferase", d: "Phosphoglucomutase" },
        correctAnswer: "c",
        explanation: "The enzyme **Galactose 1-Phosphate Uridylyltransferase** is the key enzyme whose deficiency causes classic Galactosemia."
    },

    // --- Mixed/Additional Questions ---
    {
        question: "44. Fructose is a:",
        answers: { a: "Aldohexose", b: "Aldopentose", c: "Ketohexose", d: "Ketopentose" },
        correctAnswer: "c",
        explanation: "Fructose is a six-carbon sugar of the Ketone type (**Ketohexose**)."
    },
    {
        question: "45. A pentose sugar is:",
        answers: { a: "Dihydroxyacetone", b: "Ribulose", c: "Fructose", d: "Glucose" },
        correctAnswer: "b",
        explanation: "**Ribulose** is a Pentose sugar."
    },
    {
        question: "46. Glucosidic linkage is a type of:",
        answers: { a: "Ester bond", b: "Amide bond", c: "Ether bond", d: "Hydrogen bond" },
        correctAnswer: "c",
        explanation: "The Glycosidic linkage is a covalent bond of the **Ether bond** type that connects sugar units."
    },
    {
        question: "47. The most important dietary carbohydrate is:",
        answers: { a: "Fructose", b: "Starch", c: "Sucrose", d: "Lactose" },
        correctAnswer: "b",
        explanation: "**Starch** is considered the most important dietary carbohydrate in terms of consumed quantity."
    },
    {
        question: "48. The enzyme that breaks down Starch is:",
        answers: { a: "Lactase", b: "Sucrase", c: "Amylase", d: "Maltase" },
        correctAnswer: "c",
        explanation: "Starch is digested by the enzyme **Amylase**."
    },
    {
        question: "49. Glycosaminoglycans (GAGs) are mainly examples of:",
        answers: { a: "Homopolysaccharides", b: "Heteropolysaccharides", c: "Monosaccharides", d: "Lipopolysaccharides" },
        correctAnswer: "b",
        explanation: "**Glycosaminoglycans** are made up of repeating units of two different sugars, so they are **Heteropolysaccharides**."
    },
    {
        question: "50. Which carbon atom of glucose is used to form a phosphate ester in the first step of glycolysis?",
        answers: { a: "Carbon number 1", b: "Carbon number 3", c: "Carbon number 4", d: "Carbon number 6" },
        correctAnswer: "d",
        explanation: "In the first step of glycolysis, glucose is phosphorylated by Hexokinase at the **sixth carbon atom** (**Carbon number 6**) to form Glucose-6-Phosphate."
    },
    {
        question: "51. Fructose and Mannose are:",
        answers: { a: "Anomers", b: "Epimers", c: "Aldose-ketose isomers", d: "Enantiomers" },
        correctAnswer: "c",
        explanation: "Fructose is a Ketohexose and Mannose is an Aldohexose, so they are **Aldose-Ketose isomers**."
    },
    {
        question: "52. Ribose and Ribulose are:",
        answers: { a: "Aldose-ketose isomers", b: "Epimers", c: "Aldohexoses", d: "Ketohexoses" },
        correctAnswer: "a",
        explanation: "Ribose is an Aldopentose and Ribulose is a Ketopentose, so they are **Aldose-Ketose isomers**."
    },
    {
        question: "53. The disaccharide formed by beta-1,4 galactosidic linkages is:",
        answers: { a: "Glycogen", b: "Cellulose", c: "Lactose", d: "Inulin" },
        correctAnswer: "c",
        explanation: "**Lactose** links Galactose to Glucose via a **beta-1,4 galactosidic linkage**."
    },
    {
        question: "54. The initial enzyme in glycogen synthesis is:",
        answers: { a: "Glycogen phosphorylase", b: "Glycogen synthase", c: "Branching enzyme", d: "Glucokinase" },
        correctAnswer: "b",
        explanation: "**Glycogen Synthase** is the essential enzyme for building Glycogen chains."
    },
    {
        question: "55. The main function of the Pentose Phosphate Pathway is to produce:",
        answers: { a: "Adenosine Triphosphate", b: "NADH", c: "Reduced Nicotinamide Adenine Dinucleotide Phosphate and Ribose 5-Phosphate", d: "Pyruvate" },
        correctAnswer: "c",
        explanation: "The **Pentose Phosphate Pathway** primarily produces **reduced Nicotinamide Adenine Dinucleotide Phosphate** (for cell protection) and **Ribose 5-Phosphate** (for nucleic acid synthesis)."
    },
    {
        question: "56. The process of forming glucose from non-carbohydrate sources (e.g., lactate, amino acids) is called:",
        answers: { a: "Glycogenesis", b: "Glycogenolysis", c: "Gluconeogenesis", d: "Glycolysis" },
        correctAnswer: "c",
        explanation: "The process of forming glucose from non-carbohydrate sources is called **Gluconeogenesis**."
    },
    {
        question: "57. The disaccharide made up of two glucose units is:",
        answers: { a: "Sucrose", b: "Maltose", c: "Lactose", d: "Cellobiose" },
        correctAnswer: "b",
        explanation: "**Maltose** is a disaccharide made up of two glucose molecules."
    },
    {
        question: "58. Which of the following is NOT a monosaccharide derivative:",
        answers: { a: "Sorbitol", b: "Glucuronic acid", c: "Dihydroxyacetone", d: "Glycerol" },
        correctAnswer: "d",
        explanation: "**Glycerol** is an alcohol and not a direct derivative of the monosaccharides known in the basic carbohydrate pathways."
    },
    {
        question: "59. The reaction catalyzed by Hexokinase or Glucokinase is:",
        answers: { a: "Hydrolysis", b: "Phosphorylation", c: "Dehydrogenation", d: "Isomerization" },
        correctAnswer: "b",
        explanation: "The function of Kinases is to transfer a phosphate group, which is **Phosphorylation**."
    },
    {
        question: "60. The major structural polysaccharide in plant cell walls is:",
        answers: { a: "Starch", b: "Glycogen", c: "Cellulose", d: "Chitin" },
        correctAnswer: "c",
        explanation: "**Cellulose** provides structural support to plant cell walls."
    }
];