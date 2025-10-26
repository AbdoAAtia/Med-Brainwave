// Data merged from "Lipid Bio Kasr al.pdf" (30 questions) and "Lipid Bio NUB.pdf" (25 questions)
// After eliminating 24 identical duplicates, the total is 31 unique questions.
window.QUIZ_APP_DATA.questions["BIO103-LIPID"] = [
    // Questions Unique to Kasr/Merged (Q1-Q7)
    {
        question: "1. An example of monounsaturated fatty acids is:",
        answers: { a: "Oleic acid", b: "Arachidonic acid", c: "Palmitic acid", d: "Linolenic acid" },
        correctAnswer: "a",
        explanation: "**Oleic acid** ($\text{C}18:1$) contains only one carbon-carbon double bond, which defines it as a Monounsaturated Fatty Acid (MUFA)."
    },
    {
        question: "2. Essential fatty acids are:",
        answers: { a: "Linoleic and arachidonic acids.", b: "$\alpha$-linolenic and timnodonic acids.", c: "Linoleic and $\alpha$-linolenic acids.", d: "Oleic and linoleic acids" },
        correctAnswer: "c",
        explanation: "The two primary dietary **Essential Fatty Acids (EFAs)** that humans cannot synthesize are **Linoleic acid ($\omega-6$) and $\alpha$-Linolenic acid ($\omega-3$)**."
    },
    {
        question: "3. As regards cholesterol one of the following is incorrect:",
        answers: { a: "It is the precursor of steroid hormones.", b: "It is excreted in the form of bile salts.", c: "It is an important constituent of cell membranes", d: "Its plasma level is $\text{200-250 mg/dl}$." },
        correctAnswer: "d",
        explanation: "A plasma cholesterol level in the range of $\text{200-250 mg/dl}$ is typically considered elevated or high-risk; the desirable normal level is **below $\text{200 mg/dl}$**."
    },
    {
        question: "4. $\text{Ceramide}$ consists of:",
        answers: { a: "Glycerol and FA.", b: "Sphingosine and galactose.", c: "Sphingosine and FA.", d: "Glycerol and galactose" },
        correctAnswer: "c",
        explanation: "**Ceramide** is the structural backbone of all sphingolipids, formed by the attachment of a **Fatty Acid ($\text{FA}$) to Sphingosine** via an amide bond."
    },
    {
        question: "5. One of the following is not a glycolipid:",
        answers: { a: "Cerebrosides", b: "Sulpholipids", c: "Lecithin.", d: "Gangliosides" },
        correctAnswer: "c",
        explanation: "**Lecithin** (Phosphatidylcholine) is a **phospholipid** (contains phosphate), while Cerebrosides, Sulpholipids, and Gangliosides are glycolipids (contain carbohydrate)."
    },
    {
        question: "6. Saturated FA which contains 18C is:",
        answers: { a: "Palmitoleic acid.", b: "Oleic acid.", c: "Lignoceric acid.", d: "Stearic acid." },
        correctAnswer: "d",
        explanation: "**Stearic acid** is the saturated fatty acid with 18 carbons ($\text{C}18:0$). Palmitoleic and Oleic are unsaturated."
    },
    {
        question: "7. FA which contains one double bond and $\omega-7$ is:",
        answers: { a: "Nervonic acid.", b: "Palmitoleic acid.", c: "Linoleic acid.", d: "Oleic acid." },
        correctAnswer: "b",
        explanation: "**Palmitoleic acid** ($\text{C}16:1, \omega-7$) is a monounsaturated fatty acid where the double bond is located at the 7th carbon from the methyl ($\omega$) end."
    },

    // Questions Unique to NUB (Q8-Q11)
    {
        question: "8. All the following are essential fatty acids except:",
        answers: { a: "Linoleic acid", b: "$\alpha$-Linolenic acid", c: "Arachidonic acid", d: "Oleic acid" },
        correctAnswer: "d",
        explanation: "**Oleic acid** ($\text{C}18:1$) is a **non-essential** fatty acid because humans can synthesize it from stearic acid."
    },
    {
        question: "9. The precursor for all steroids is:",
        answers: { a: "Fatty acids", b: "Isoprene units", c: "Cholesterol", d: "Vitamin D" },
        correctAnswer: "c",
        explanation: "**Cholesterol** is the key metabolic precursor for the synthesis of all steroid hormones (e.g., testosterone, cortisol) and bile acids."
    },
    {
        question: "10. One of the following is not an eicosanoid:",
        answers: { a: "Prostaglandin", b: "Thromboxane", c: "Lipoxin", d: "Leukotriene" },
        correctAnswer: "c",
        explanation: "The three major classes of eicosanoids are Prostaglandins, Thromboxanes, and Leukotrienes. **Lipoxin** is a specialized pro-resolving mediator, not one of the classical eicosanoids."
    },
    {
        question: "11. The main product of $\text{Lipolysis}$ is:",
        answers: { a: "Glucose", b: "Amino acids", c: "Fatty acids and Glycerol", d: "Cholesterol" },
        correctAnswer: "c",
        explanation: "**Lipolysis** is the breakdown of stored triglycerides into their component molecules: **Fatty acids and Glycerol**."
    },

    // Common/Shared Questions (Q12-Q31)
    {
        question: "12. In humans, a dietary essential fatty acid is:",
        answers: { a: "Palmitic acid", b: "Stearic acid", c: "Oleic acid", d: "Linoleic acid" },
        correctAnswer: "d",
        explanation: "**Linoleic acid** ($\text{C}18:2, \omega-6$) is an essential fatty acid that must be consumed in the diet."
    },
    {
        question: "13. Which of the following is a phospholipid:",
        answers: { a: "Lecithin", b: "Cholesterol", c: "Sterol", d: "Steroid" },
        correctAnswer: "a",
        explanation: "**Lecithin** (Phosphatidylcholine) is a major type of phospholipid."
    },
    {
        question: "14. An example of a saturated fatty acid is:",
        answers: { a: "Stearic acid", b: "Oleic acid", c: "Linoleic acid", d: "Arachidonic acid" },
        correctAnswer: "a",
        explanation: "**Stearic acid** ($\text{C}18:0$) contains no double bonds and is classified as saturated."
    },
    {
        question: "15. The number of double bonds in Arachidonic acid is:",
        answers: { a: "1", b: "2", c: "3", d: "4" },
        correctAnswer: "d",
        explanation: "Arachidonic acid is a polyunsaturated fatty acid with the designation $\text{C}20:4$, indicating **4** double bonds."
    },
    {
        question: "16. One of the following is not a phospholipid:",
        answers: { a: "Sphingomyelin", b: "Lecithin", c: "Cephalin", d: "Cerebroside" },
        correctAnswer: "d",
        explanation: "**Cerebrosides** are glycolipids, which lack a phosphate group and are therefore not phospholipids."
    },
    {
        question: "17. Which of the following is an $\text{omega-3}$ polyunsaturated fatty acid?",
        answers: { a: "Linoleic acid", b: "$\alpha$-Linolenic acid", c: "$\gamma$-Linolenic acid", d: "Arachidonic acid" },
        correctAnswer: "b",
        explanation: "**$\alpha$-Linolenic acid (ALA)** ($\text{C}18:3$) is the parent essential $\text{omega-3}$ fatty acid."
    },
    {
        question: "18. A steroid which moderates membrane fluidity is:",
        answers: { a: "Cholesterol", b: "Testosterone", c: "Estradiol", d: "Progesterone" },
        correctAnswer: "a",
        explanation: "**Cholesterol** inserts into the lipid bilayer to regulate the fluidity and permeability of the animal cell membrane."
    },
    {
        question: "19. Which of the following is a type of ether phospholipids?",
        answers: { a: "Gangliosides", b: "Phosphatidyl choline", c: "Plasmalogen", d: "Cerebrosides" },
        correctAnswer: "c",
        explanation: "**Plasmalogens** are phospholipids distinguished by a vinyl **ether** linkage at the C-1 position of the glycerol backbone."
    },
    {
        question: "20. Oleic acid is:",
        answers: { a: "Saturated", b: "$\text{C}18:2$", c: "$\text{C}18:1$", d: "$\text{omega-3}$ FA" },
        correctAnswer: "c",
        explanation: "**Oleic acid** is the $\text{C}18:1$ fatty acid (18 carbons, 1 double bond)."
    },
    {
        question: "21. Lipids are soluble in:",
        answers: { a: "Water", b: "Ethanol", c: "Ether and Chloroform", d: "Saline" },
        correctAnswer: "c",
        explanation: "Lipids are nonpolar and are soluble in nonpolar organic solvents such as **Ether and Chloroform**."
    },
    {
        question: "22. Deficiency of $\text{omega-3}$ fatty acids is associated with:",
        answers: { a: "Dermatitis", b: "Neurological defects", c: "Fatty liver", d: "Both A and B" },
        correctAnswer: "d",
        explanation: "$\omega-3$ FAs are essential for neural function and skin health, so deficiency leads to **Dermatitis** and **Neurological defects**."
    },
    {
        question: "23. The storage form of lipids in adipocytes is:",
        answers: { a: "Phospholipids", b: "Cholesterol", c: "Triglycerides", d: "Sphingolipids" },
        correctAnswer: "c",
        explanation: "**Triglycerides** (Triacylglycerols) are the primary molecules used for energy storage in adipocytes."
    },
    {
        question: "24. A lipid which contains $\text{Ceramide}$ is:",
        answers: { a: "Phosphatidylcholine", b: "Cerebroside", c: "Triglyceride", d: "Cholesterol" },
        correctAnswer: "b",
        explanation: "All sphingolipids, including **Cerebrosides**, are based on a $\text{Ceramide}$ backbone."
    },
    {
        question: "25. The main difference between saturated and unsaturated fatty acids is:",
        answers: { a: "Length of chain", b: "Presence of carboxyl group", c: "Presence of double bonds", d: "Water solubility" },
        correctAnswer: "c",
        explanation: "Unsaturated fatty acids are defined by the **Presence of double bonds**; saturated ones lack them."
    },
    {
        question: "26. The main characteristic of Plasmalogens is:",
        answers: { a: "Ester bond at $\text{C}1$", b: "Ether bond at $\text{C}1$", c: "No glycerol", d: "Contain ceramide" },
        correctAnswer: "b",
        explanation: "Plasmalogens are characterized by an **Ether bond at $\text{C}1$** of the glycerol backbone."
    },
    {
        question: "27. The essential fatty acid precursor for eicosanoids is:",
        answers: { a: "Linoleic acid", b: "$\alpha$-linolenic acid", c: "Oleic acid", d: "Arachidonic acid" },
        correctAnswer: "d",
        explanation: "**Arachidonic acid** ($\text{C}20:4, \omega-6$) is the direct and most common precursor for eicosanoid synthesis."
    },
    {
        question: "28. Which of the following is true about Sphingomyelin:",
        answers: { a: "Contains glycerol", b: "Contains ceramide and phosphate", c: "Is a glycolipid", d: "Found only in plants" },
        correctAnswer: "b",
        explanation: "Sphingomyelin is a sphingolipid (contains $\text{Ceramide}$) that is also a phospholipid (**contains phosphate**)."
    },
    {
        question: "29. The most abundant lipid in the cell membrane is:",
        answers: { a: "Triglycerides", b: "Cholesterol", c: "Phospholipids", d: "Fatty acids" },
        correctAnswer: "c",
        explanation: "**Phospholipids** form the fundamental structural bilayer of all biological membranes."
    },
    {
        question: "30. $\alpha$-Linolenic acid is characterized by:",
        answers: { a: "It can be formed in our bodies.", b: "It is $\text{diethenoid}$.", c: "It is $\omega-3$ FA.", d: "Can be converted to arachidonic acid." },
        correctAnswer: "c",
        explanation: "**$\alpha$-Linolenic acid** ($\text{C}18:3$) is characterized as the essential **$\omega-3$ fatty acid**."
    },
    {
        question: "31. Deficiency of essential fatty acids leads to:",
        answers: { a: "Fatty liver.", b: "Alfa 1 anti-trypsin deficiency.", c: "Marfan syndrome.", d: "Microcytic anemia." },
        correctAnswer: "a",
        explanation: "EFA deficiency impairs lipid export from the liver, leading to the accumulation of triglycerides and causing **Fatty liver** (hepatic steatosis)."
    }
];