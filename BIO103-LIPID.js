// 1. Ensure the necessary global objects exist before assigning data.
window.QUIZ_APP_DATA = window.QUIZ_APP_DATA || {};
window.QUIZ_APP_DATA.questions = window.QUIZ_APP_DATA.questions || {};

// Data merged from "Lipid Bio NUB.pdf" and "Lipid Bio Kasr al.pdf" (Total 45 unique questions).
window.QUIZ_APP_DATA.questions["BIO103-LIPID"] = [
    // Questions from both files - Symbols Corrected
    {
        question: "1. In humans, a dietary essential fatty acid is:",
        answers: { a: "Palmitic acid", b: "Stearic acid", c: "Oleic acid", d: "Linoleic acid" },
        correctAnswer: "d",
        explanation: "Linoleic acid (omega-6) and alpha-linolenic acid (omega-3) are the two essential fatty acids that must be obtained from the diet."
    },
    {
        question: "2. An example of a saturated fatty acid is:",
        answers: { a: "Stearic acid", b: "Oleic acid", c: "Linoleic acid", d: "Arachidonic acid" },
        correctAnswer: "a",
        explanation: "Stearic acid is a long-chain saturated fatty acid with 18 carbons (C18:0)."
    },
    {
        question: "3. Which of the following is a phospholipid:",
        answers: { a: "Lecithin", b: "Cholesterol", c: "Sterol", d: "Steroid" },
        correctAnswer: "a",
        explanation: "Lecithin (Phosphatidylcholine) is a common phospholipid found in cell membranes."
    },
    {
        question: "4. One of the following is NOT a phospholipid:",
        answers: { a: "Sphingomyelin", b: "Lecithin", c: "Cephalin", d: "Cerebroside" },
        correctAnswer: "d",
        explanation: "Cerebroside is a glycolipid, meaning it contains a sugar unit, not a phosphate group, classifying it as a non-phospholipid."
    },
    {
        question: "5. An example of monounsaturated fatty acids is:",
        answers: { a: "Oleic acid", b: "Arachidonic acid", c: "Palmitic acid", d: "alpha-Linolenic acid" },
        correctAnswer: "a",
        explanation: "Oleic acid has one double bond and is therefore monounsaturated."
    },
    {
        question: "6. Essential fatty acids are:",
        answers: { a: "Linoleic and arachidonic acids", b: "alpha-linolenic and timnodonic acids", c: "Linoleic and alpha-linolenic acids", d: "Oleic and linoleic acids" },
        correctAnswer: "c",
        explanation: "The two essential fatty acids are Linoleic acid (omega-6) and alpha-Linolenic acid (omega-3)."
    },
    {
        question: "7. The number of double bonds in Arachidonic acid (C20:4) is:",
        answers: { a: "1", b: "2", c: "3", d: "4" },
        correctAnswer: "d",
        explanation: "Arachidonic acid is a polyunsaturated fatty acid with 20 carbons and 4 double bonds."
    },
    {
        question: "8. As regards cholesterol one of the following is incorrect:",
        answers: { a: "It is the precursor of steroid hormones.", b: "It is excreted in the form of bile salts.", c: "It is an important constituent of cell membranes", d: "Its plasma level is 200-250 mg/dl." },
        correctAnswer: "d",
        explanation: "Normal plasma cholesterol is typically below 200 mg/dl. High concentrations are associated with health risks."
    },
    {
        question: "9. Which of the following is a neutral fat:",
        answers: { a: "Lecithin", b: "Phosphatidyl serine", c: "Triglyceride", d: "Fatty acid" },
        correctAnswer: "c",
        explanation: "Triglyceride (Triacylglycerol) is non-polar and uncharged, classifying it as a neutral fat."
    },
    {
        question: "10. One of the following has an alpha-beta unsaturated bond:",
        answers: { a: "Long chain fatty acid", b: "Short chain fatty acid", c: "Acetyl CoA", d: "Fatty acyl CoA" },
        correctAnswer: "d",
        explanation: "The initial step of beta-oxidation involves the enzyme acyl CoA dehydrogenase creating the alpha-beta unsaturated bond in Fatty acyl CoA."
    },
    {
        question: "11. All the following statements are correct about Lecithin Except:",
        answers: { a: "It contains sphingosine", b: "It is a glycerophospholipid", c: "It is phosphatidylcholine", d: "It contains choline" },
        correctAnswer: "a",
        explanation: "Lecithin is a glycerophospholipid (contains glycerol), not a sphingolipid, and therefore does not contain sphingosine."
    },
    {
        question: "12. One of the following is a steroid:",
        answers: { a: "Cholesterol", b: "Bile salt", c: "Lecithin", d: "Fatty acid" },
        correctAnswer: "a",
        explanation: "Cholesterol is the most common and important steroid in animal tissues, serving as a precursor for other steroids."
    },
    {
        question: "13. Fatty acids are stored in adipose tissue as:",
        answers: { a: "Free fatty acids", b: "Triglycerides", c: "Cholesterol esters", d: "Phospholipids" },
        correctAnswer: "b",
        explanation: "Triglycerides are the most energy-dense form of lipid storage in adipocytes (fat cells)."
    },
    {
        question: "14. HDL is rich in:",
        answers: { a: "Cholesterol", b: "Triglyceride", c: "Cholesterol ester", d: "Protein" },
        correctAnswer: "d",
        explanation: "High-Density Lipoprotein (HDL) has the highest protein-to-lipid ratio, making it the densest lipoprotein."
    },
    {
        question: "15. The precursor for all steroid hormones is:",
        answers: { a: "Cholesterol", b: "Triacylglycerol", c: "Fatty acid", d: "Choline" },
        correctAnswer: "a",
        explanation: "Cholesterol is the fundamental precursor molecule for the synthesis of all steroid hormones (e.g., cortisol, testosterone, estrogen)."
    },
    {
        question: "16. LDL is rich in:",
        answers: { a: "Triglycerides", b: "Cholesterol ester", c: "Free cholesterol", d: "Protein" },
        correctAnswer: "b",
        explanation: "Low-Density Lipoprotein (LDL) is the primary carrier of cholesterol esters in the blood, delivering them to peripheral tissues."
    },
    {
        question: "17. The following compound is omega-6 polyunsaturated fatty acid:",
        answers: { a: "Linoleic acid", b: "alpha-Linolenic acid", c: "Oleic acid", d: "Arachidonic acid" },
        correctAnswer: "a",
        explanation: "Linoleic acid is the parent fatty acid of the omega-6 series."
    },
    {
        question: "18. Which of the following is a component of a lipoprotein:",
        answers: { a: "Phospholipid", b: "Cholesterol", c: "Protein", d: "All of the above" },
        correctAnswer: "d",
        explanation: "Lipoproteins are complexes of all these components: a core of neutral lipids (Triglycerides and Cholesterol esters) and a shell of polar lipids (Phospholipids, Free Cholesterol) and Apoproteins."
    },
    {
        question: "19. One of the following is NOT a characteristic of essential fatty acids:",
        answers: { a: "Can be formed in the body", b: "Necessary for cell membrane structure", c: "Required for eicosanoid synthesis", d: "Polyunsaturated fatty acids" },
        correctAnswer: "a",
        explanation: "Essential fatty acids, by definition, cannot be synthesized by the body and must be supplied by the diet."
    },
    {
        question: "20. The following is an omega-3 polyunsaturated fatty acid:",
        answers: { a: "Linoleic acid", b: "alpha-Linolenic acid", c: "Oleic acid", d: "Arachidonic acid" },
        correctAnswer: "b",
        explanation: "alpha-Linolenic acid is the parent fatty acid of the omega-3 series."
    },
    {
        question: "21. Ceramide consists of:",
        answers: { a: "Glycerol and FA", b: "Sphingosine and galactose", c: "Sphingosine and FA", d: "Glycerol and galactose" },
        correctAnswer: "c",
        explanation: "Ceramide is the core sphingolipid formed by linking a Fatty Acid (FA) to the amino group of a Sphingosine molecule."
    },
    {
        question: "22. One of the following is NOT a glycolipid:",
        answers: { a: "Cerebrosides", b: "Sulpholipids", c: "Lecithin", d: "Gangliosides" },
        correctAnswer: "c",
        explanation: "Lecithin is a phospholipid (glycerophospholipid), while Cerebrosides, Sulpholipids, and Gangliosides are glycolipids."
    },
    {
        question: "23. Saturated FA which contains 18C is:",
        answers: { a: "Palmitoleic acid", b: "Oleic acid", c: "Lignoceric acid", d: "Stearic acid" },
        correctAnswer: "d",
        explanation: "Stearic acid is the saturated 18-carbon (C18:0) fatty acid."
    },
    {
        question: "24. FA which contains one double bond and omega-7 is:",
        answers: { a: "Nervonic acid", b: "Palmitoleic acid", c: "Linoleic acid", d: "Oleic acid" },
        correctAnswer: "b",
        explanation: "Palmitoleic acid (C16:1) has its double bond seven carbons from the omega end (omega-7)."
    },
    {
        question: "25. Linoleic acid is characterized by:",
        answers: { a: "It contains 20C.", b: "It contains 3 double bonds.", c: "Not formed inside the body.", d: "It is an omega-3 FA." },
        correctAnswer: "c",
        explanation: "Linoleic acid is an essential fatty acid, meaning it cannot be synthesized (Not formed) inside the human body."
    },
    {
        question: "26. alpha-linolenic acid is characterized by:",
        answers: { a: "It can be formed in our bodies.", b: "It is diethenoid.", c: "It is omega-3 FA.", d: "Can be converted to arachidonic acid." },
        correctAnswer: "c",
        explanation: "alpha-linolenic acid is the defining parent fatty acid of the omega-3 series."
    },
    {
        question: "27. Deficiency of essential fatty acids leads to:",
        answers: { a: "Fatty liver.", b: "Alpha 1 anti-trypsin deficiency.", c: "Marfan syndrome.", d: "Microcytic anemia." },
        correctAnswer: "a",
        explanation: "One of the symptoms of essential fatty acid deficiency is hepatic steatosis (Fatty liver)."
    },
    {
        question: "28. One of the following is NOT an essential fatty acid:",
        answers: { a: "Linoleic acid", b: "alpha-Linolenic acid", c: "Arachidonic acid", d: "Oleic acid" },
        correctAnswer: "d",
        explanation: "Oleic acid (omega-9) is non-essential as it can be synthesized by the body."
    },
    {
        question: "29. One of the following is the richest source of saturated fatty acids:",
        answers: { a: "Vegetable oils", b: "Corn oil", c: "Meat", d: "Fish oil" },
        correctAnswer: "c",
        explanation: "Animal fats (Meat) are generally the richest source of saturated fatty acids."
    },
    {
        question: "30. The following is an omega-9 fatty acid:",
        answers: { a: "Oleic acid", b: "Linoleic acid", c: "alpha-Linolenic acid", d: "Arachidonic acid" },
        correctAnswer: "a",
        explanation: "Oleic acid (C18:1) is the most abundant omega-9 fatty acid."
    },
    {
        question: "31. All of the following are saturated fatty acids Except:",
        answers: { a: "Palmitic acid", b: "Stearic acid", c: "Linoleic acid", d: "Butyric acid" },
        correctAnswer: "c",
        explanation: "Linoleic acid is a polyunsaturated fatty acid, while the others are saturated."
    },
    {
        question: "32. FA with 24C and saturation is:",
        answers: { a: "Lignoceric acid", b: "Nervonic acid", c: "Arachidic acid", d: "Palmitic acid" },
        correctAnswer: "a",
        explanation: "Lignoceric acid (C24:0) is the saturated 24-carbon fatty acid."
    },
    {
        question: "33. LDL is cleared from plasma by:",
        answers: { a: "EGF receptor", b: "LDL receptors", c: "Transferrin receptor", d: "Insulin receptor" },
        correctAnswer: "b",
        explanation: "LDL is internalized by cells through binding to specific LDL receptors."
    },
    {
        question: "34. The major lipid component of VLDL is:",
        answers: { a: "Triglyceride", b: "Cholesterol", c: "Cholesterol ester", d: "Protein" },
        correctAnswer: "a",
        explanation: "Very-Low-Density Lipoprotein (VLDL) is synthesized by the liver mainly to transport Triglyceride."
    },
    {
        question: "35. The lipoprotein richest in cholesterol is:",
        answers: { a: "VLDL", b: "HDL", c: "LDL", d: "Chylomicrons" },
        correctAnswer: "c",
        explanation: "LDL (Low-Density Lipoprotein) carries the highest concentration of cholesterol (mostly cholesterol esters) among lipoproteins."
    },
    {
        question: "36. Which of the following is a characteristic of HDL:",
        answers: { a: "Transports cholesterol from peripheral tissues to the liver", b: "Has the highest triglyceride content", c: "Transports exogenous cholesterol", d: "Is rich in cholesterol ester" },
        correctAnswer: "a",
        explanation: "HDL performs Reverse Cholesterol Transport, removing excess cholesterol from peripheral cells and returning it to the liver."
    },
    {
        question: "37. Bile salts are derivatives of:",
        answers: { a: "Cholesterol", b: "Amino acids", c: "Bilirubin", d: "Glycerol" },
        correctAnswer: "a",
        explanation: "Bile salts are synthesized in the liver by conjugating bile acids, which are derived directly from Cholesterol."
    },
    {
        question: "38. Which of the following is an omega-6 fatty acid:",
        answers: { a: "alpha-Linolenic acid", b: "Eicosapentaenoic acid", c: "Oleic acid", d: "Linoleic acid" },
        correctAnswer: "d",
        explanation: "Linoleic acid is the primary fatty acid in the omega-6 class."
    },
    {
        question: "39. omega-3 fatty acids are essential because:",
        answers: { a: "They are saturated.", b: "They are polar.", c: "They are long chain.", d: "We lack the enzyme to form double bonds at the omega-3 position." },
        correctAnswer: "d",
        explanation: "Humans lack the necessary desaturase enzymes ($\Delta12$ and $\Delta15$) to introduce double bonds at the omega-3 and omega-6 positions."
    },
    {
        question: "40. FA with 20C and four double bonds is:",
        answers: { a: "Arachidonic acid", b: "Oleic acid", c: "Linoleic acid", d: "Stearic acid" },
        correctAnswer: "a",
        explanation: "Arachidonic acid is the C20:4 fatty acid, often abbreviated to ARA."
    },
    {
        question: "41. VLDL is converted in circulation to:",
        answers: { a: "Chylomicrons", b: "HDL", c: "Albumin", d: "LDL" },
        correctAnswer: "d",
        explanation: "As VLDL loses triglycerides, it becomes IDL (Intermediate-Density Lipoprotein), which is then processed to form LDL."
    },
    {
        question: "42. The following contains the highest percentage of triglyceride:",
        answers: { a: "Chylomicrons", b: "VLDL", c: "LDL", d: "HDL" },
        correctAnswer: "a",
        explanation: "Chylomicrons, which transport dietary fats, are composed of up to 90% triglyceride by mass."
    },
    {
        question: "43. The function of bile salts in lipid digestion:",
        answers: { a: "Hydrolysis of fats", b: "Absorption of fats", c: "Synthesis of fats", d: "Emulsification of fats" },
        correctAnswer: "d",
        explanation: "Bile salts act as emulsifying agents, breaking down large fat globules into smaller micelles for subsequent enzyme action."
    },
    {
        question: "44. FA with 24C and one double bond is:",
        answers: { a: "Lignoceric acid", b: "Palmitic acid", c: "Stearic acid", d: "Nervonic acid" },
        correctAnswer: "d",
        explanation: "Nervonic acid (C24:1) is the monounsaturated 24-carbon fatty acid."
    },
    {
        question: "45. Fatty acids are activated into acyl CoA in the cytoplasm using:",
        answers: { a: "ATP", b: "ADP", c: "AMP", d: "GTP" },
        correctAnswer: "a",
        explanation: "The activation of fatty acids to acyl CoA is an energy-intensive process that requires the hydrolysis of ATP to AMP and PPi."
    }
];