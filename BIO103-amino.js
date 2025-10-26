// 1. Ensure the necessary global objects exist before assigning data.
window.QUIZ_APP_DATA = window.QUIZ_APP_DATA || {};
window.QUIZ_APP_DATA.questions = window.QUIZ_APP_DATA.questions || {};

// Data merged from "11- Biochemistry MCQs Amino Acid PROTEINS.pdf" and "Protein Biochemistry kasr.pdf" (Total 57 unique questions).
window.QUIZ_APP_DATA.questions["BIO103-amino"] = [
    // Common Questions - Symbols Corrected
    {
        question: "1. The peptide bond:",
        answers: { a: "Links two amino acids", b: "Links two nucleotides", c: "Is weaker than the hydrogen bond", d: "Is broken by mild heating", e: "Is a non-covalent bond" },
        correctAnswer: "a",
        explanation: "A peptide bond is an **amide bond** that links the carboxyl group of one amino acid to the **alpha-amino** group of another, forming the primary structure of a protein."
    },
    {
        question: "2. The primary structure of proteins:",
        answers: { a: "Refers to the sequence of amino acids in the polypeptide chain", b: "Refers to the helical structure of the protein", c: "Describes the beta-pleated sheets", d: "Is maintained by hydrogen bonds", e: "Is maintained by hydrophobic interactions" },
        correctAnswer: "a",
        explanation: "The primary structure is the **linear sequence** of amino acids linked by peptide bonds."
    },
    {
        question: "3. Denaturation of a protein involves loss of its:",
        answers: { a: "Primary structure", b: "Secondary & Tertiary structure", c: "Primary & Tertiary structure", d: "Primary & Quaternary structure", e: "Amino acids" },
        correctAnswer: "b",
        explanation: "Denaturation disrupts the higher-order structures (**Secondary, Tertiary, and Quaternary**) maintained by weak bonds, but generally leaves the **Primary structure (peptide bonds)** intact."
    },
    {
        question: "4. The alpha helix in a protein:",
        answers: { a: "Refers to its tertiary structure", b: "Is not affected by amino acid sequence", c: "Is stabilized by intrachain hydrogen bonds", d: "Is maintained by hydrophobic interactions" },
        correctAnswer: "c",
        explanation: "The **alpha helix** is a secondary structure stabilized by **intrachain hydrogen bonds** between the carbonyl oxygen ($\text{C=O}$) of one amino acid and the **alpha-amino** hydrogen ($\text{N-H}$) of an amino acid four residues away."
    },
    {
        question: "5. The tertiary structure of a protein is maintained by:",
        answers: { a: "Hydophobic interactions", b: "Hydrogen bond", c: "Disulphide bond", d: "All of the above" },
        correctAnswer: "d",
        explanation: "The three-dimensional (tertiary) structure is stabilized by various interactions, including **hydrophobic interactions, hydrogen bonds, ionic bonds, and disulfide bonds**."
    },
    {
        question: "6. Amino acids are ampholytes because they can function as either a(n):",
        answers: { a: "Acid or base.", b: "Neutral molecule or ion.", c: "Polar or nonpolar.", d: "Strand (chain) or branched molecule." },
        correctAnswer: "a",
        explanation: "An ampholyte (or amphoteric molecule) can act as both an **acid** and a **base**."
    },
    {
        question: "7. The following amino acids contain two carboxylic groups (Acidic amino acids):",
        answers: { a: "D and E", b: "Q and Y", c: "A and K", d: "C and M", e: "H and R" },
        correctAnswer: "a",
        explanation: "**D (Aspartate)** and **E (Glutamate)** are the acidic amino acids."
    },
    {
        question: "8. Positively charged amino acids (Basic amino acids) are:",
        answers: { a: "P and R", b: "L and T", c: "K and R and H", d: "H and M", e: "N and F" },
        correctAnswer: "c",
        explanation: "**K (Lysine)**, **R (Arginine)**, and **H (Histidine)** have side chains that are typically positively charged at physiological pH."
    },
    {
        question: "9. Which amino acid can form disulphide bonds?",
        answers: { a: "Glycine", b: "Proline", c: "Glutamate", d: "Cysteine" },
        correctAnswer: "d",
        explanation: "**Cysteine** contains a sulfhydryl (-SH) group that can oxidize to form a disulfide bond with another Cysteine residue."
    },

    // Unique Questions from "11- Biochemistry MCQs Amino Acid PROTEINS.pdf" (Q10-Q35)
    {
        question: "10. The most important function of proteins in our body is:",
        answers: { a: "Emulsification", b: "Thermal insulation", c: "Storage", d: "Catalysis", e: "Energy production" },
        correctAnswer: "d",
        explanation: "The largest and most diverse functional class of proteins are the enzymes, whose primary role is **Catalysis**."
    },
    {
        question: "11. Aliphatic non polar amino acids are exemplified by:",
        answers: { a: "Isoleucine and Serine", b: "Histidine and Alanine", c: "Cysteine and Valine", d: "Aspartate and Glycine", e: "Valine and Isoleucine" },
        correctAnswer: "e",
        explanation: "**Valine** and **Isoleucine** are key examples of non-polar amino acids with hydrocarbon (aliphatic) side chains."
    },
    {
        question: "12. The tertiary structure of a protein is:",
        answers: { a: "Its three dimensional structure", b: "The relationship between different subunits", c: "Not lost by denaturation", d: "Stabalized by peptide bonds only", e: "Not relevant to its function" },
        correctAnswer: "a",
        explanation: "The tertiary structure is the **overall three-dimensional shape** of a single polypeptide chain."
    },
    {
        question: "13. The major functions of proteins in the human body include:",
        answers: { a: "Storage of genetic information", b: "Immunity and locomotion", c: "Buffering and transport", d: "Catalysis and signalling", e: "B, C and D are correct" },
        correctAnswer: "e",
        explanation: "Proteins serve critical roles in **Immunity**, **Locomotion**, **Buffering**, **Transport**, **Catalysis**, and **Signaling**."
    },
    {
        question: "14. Non standard amino acids in protein structure include:",
        answers: { a: "Ornithine", b: "Citrulline", c: "Hydroxyproline", d: "Serine", e: "Glycine" },
        correctAnswer: "c",
        explanation: "**Hydroxyproline** is a common non-standard amino acid formed by post-translational modification, notably in collagen."
    },
    {
        question: "15. The pancreatic enzyme not involved in protein digestion is:",
        answers: { a: "Carboxypeptidase", b: "Trypsin", c: "Lipase", d: "Elastase" },
        correctAnswer: "c",
        explanation: "**Lipase** digests lipids (fats), not proteins."
    },
    {
        question: "16. In the polypeptide chain, the peptide bond:",
        answers: { a: "Is formed by the alpha carboxylic group of one amino acid and the alpha amino group of the next amino acid", b: "Is rigid", c: "Components are planner", d: "Is stronger than a single covalent bond", e: "All of the above is correct" },
        correctAnswer: "e",
        explanation: "The peptide bond is a strong, planar, and rigid covalent bond formed between the alpha-carboxyl and alpha-amino groups."
    },
    {
        question: "17. Denaturation of a protein:",
        answers: { a: "Disrupts the primary structure of the protein", b: "Alters the secondary and tertiary structures of the protein", c: "Breaks all covalent bonds in the protein", d: "Has no effect on the biological activity", e: "Removes disulphide bridges" },
        correctAnswer: "b",
        explanation: "Denaturation specifically **Alters the secondary and tertiary structures**, leading to loss of function."
    },
    {
        question: "18. The amino acids with positively charged side chains include:",
        answers: { a: "Arginine and serine", b: "Glutamine and alanine", c: "Glutamate and proline", d: "Glutamine and tyrosine", e: "Arginine and lysine" },
        correctAnswer: "e",
        explanation: "**Arginine** and **Lysine** are two of the three positively charged (basic) amino acids."
    },
    {
        question: "19. Which of the following is an imino acid?",
        answers: { a: "Serine", b: "Threonine", c: "Valine", d: "Proline" },
        correctAnswer: "d",
        explanation: "**Proline** is an imino acid because its **alpha-amino** group is secondary."
    },
    {
        question: "20. The non-essential amino acid, which has a sulfur containing group is:",
        answers: { a: "Methionine", b: "Cysteine", c: "Homocysteine", d: "Cystine" },
        correctAnswer: "b",
        explanation: "**Cysteine** is non-essential and contains a sulfur atom (thiol group)."
    },
    {
        question: "21. Amino acid containing an amide group is:",
        answers: { a: "Aspartate", b: "Glutamine", c: "Lysine", d: "Tyrosine" },
        correctAnswer: "b",
        explanation: "**Glutamine** has an amide group in its side chain ($\text{CONH}_2$)."
    },
    {
        question: "22. The amino acid involved in the biosynthesis of urea is:",
        answers: { a: "Ornithine", b: "Citrulline", c: "Arginine", d: "All of the above" },
        correctAnswer: "d",
        explanation: "The Urea Cycle involves **Ornithine**, **Citrulline**, and **Arginine**."
    },
    {
        question: "23. The amino acid which is a precursor for synthesis of $\text{NAD}^{+}$ is:",
        answers: { a: "Tyrosine", b: "Phenylalanine", c: "Tryptophan", d: "Histidine" },
        correctAnswer: "c",
        explanation: "**Tryptophan** is a precursor for Niacin ($\text{B}3$), which is used to synthesize $\text{NAD}^{+}$."
    },
    {
        question: "24. One of the following is an essential amino acid:",
        answers: { a: "Alanine", b: "Glycine", c: "Tryptophan", d: "Serine" },
        correctAnswer: "c",
        explanation: "**Tryptophan** is one of the nine essential amino acids."
    },
    {
        question: "25. Which of the following is a gamma amino acid?",
        answers: { a: "Alanine", b: "Tryptophan", c: "GABA (gamma-aminobutyric acid)", d: "Glutamate" },
        correctAnswer: "c",
        explanation: "**GABA** is a neurotransmitter and a **gamma** amino acid."
    },
    {
        question: "26. Which of the following is a non-polar amino acid?",
        answers: { a: "Serine", b: "Tyrosine", c: "Alanine", d: "Aspartate" },
        correctAnswer: "c",
        explanation: "**Alanine** has a small, non-polar methyl group side chain."
    },
    {
        question: "27. The simplest amino acid is:",
        answers: { a: "Alanine", b: "Glycine", c: "Proline", d: "Serine" },
        correctAnswer: "b",
        explanation: "**Glycine** is the simplest amino acid, having only a single hydrogen atom as its side chain."
    },
    {
        question: "28. The amino acid that lacks D and L stereoisomers is:",
        answers: { a: "Alanine", b: "Glycine", c: "Proline", d: "Serine" },
        correctAnswer: "b",
        explanation: "**Glycine** is the only amino acid that is not chiral because its alpha carbon is attached to two identical groups."
    },
    {
        question: "29. Amino acids are linked together by:",
        answers: { a: "Glycosidic bond", b: "Ester bond", c: "Peptide bond", d: "Ionic bond" },
        correctAnswer: "c",
        explanation: "Amino acids join to form proteins through a **Peptide bond**."
    },
    {
        question: "30. All the below mentioned amino acids can participate in hydrogen bonding Except:",
        answers: { a: "Serine", b: "Cysteine", c: "Threonine", d: "Valine" },
        correctAnswer: "d",
        explanation: "**Valine** is non-polar and hydrophobic. Serine, Cysteine, and Threonine all have polar groups capable of forming hydrogen bonds."
    },
    {
        question: "31. The primary structure of protein represents:",
        answers: { a: "Linear sequence of amino acids", b: "Folding of the polypeptide chain", c: "Association of two or more polypeptide chains", d: "Formation of alpha helix" },
        correctAnswer: "a",
        explanation: "The primary structure is the **Linear sequence of amino acids**."
    },
    {
        question: "32. Tertiary structure is the:",
        answers: { a: "2D structure of protein", b: "3D structure of protein", c: "Fibrous structure of protein", d: "Association of subunits" },
        correctAnswer: "b",
        explanation: "Tertiary structure defines the **three-dimensional (3D) conformation** of a single polypeptide chain."
    },
    {
        question: "33. Which of the following is NOT an essential amino acid?",
        answers: { a: "Tryptophan", b: "Methionine", c: "Lysine", d: "Serine" },
        correctAnswer: "d",
        explanation: "**Serine** is a non-essential amino acid, meaning the human body can synthesize it."
    },
    {
        question: "34. Which of the following is a branched amino acid?",
        answers: { a: "Cysteine", b: "Isoleucine", c: "Proline", d: "Histidine" },
        correctAnswer: "b",
        explanation: "**Isoleucine** is one of the three Branched-Chain Amino Acids (BCAAs)."
    },
    {
        question: "35. The two amino acids that contain sulfur atoms are:",
        answers: { a: "Cysteine and methionine", b: "Cysteine and serine", c: "Methionine and threonine", d: "Methionine and serine" },
        correctAnswer: "a",
        explanation: "**Cysteine** and **Methionine** are the two amino acids containing sulfur."
    },

    // Unique Questions from "Protein Biochemistry kasr.pdf" (Q36-Q57)
    {
        question: "36. Serine and threonine are polar amino acids due to:",
        answers: { a: "Reactive hydroxyl group in the side chain.", b: "Reactive thiol group in the side chain.", c: "Reactive amide group in the side chain.", d: "Reactive carboxyl group in the side chain." },
        correctAnswer: "a",
        explanation: "Both Serine and Threonine are polar because they possess a **hydroxyl ($\text{OH}$) group** in their side chain."
    },
    {
        question: "37. Amino acids with hydroxyl groups are:",
        answers: { a: "Serine and alanine", b: "Alanine and valine", c: "Serine and threonine", d: "Valine and isoleucine" },
        correctAnswer: "c",
        explanation: "**Serine** and **Threonine** contain a hydroxyl ($\text{OH}$) group."
    },
    {
        question: "38. An amino acid which contains a disulphide bond is:",
        answers: { a: "Lysine", b: "Methionine", c: "Homocysteine", d: "Cystine" },
        correctAnswer: "d",
        explanation: "**Cystine** is the dimer formed when two Cysteine molecules are linked by a disulfide bond."
    },
    {
        question: "39. All of the following are polar amino acids Except:",
        answers: { a: "Alanine", b: "Glutamate", c: "Arginine", d: "Serine" },
        correctAnswer: "a",
        explanation: "**Alanine** is non-polar. Glutamate, Arginine, and Serine are polar."
    },
    {
        question: "40. Acidic amino acids include:",
        answers: { a: "Arginine and glutamate", b: "Aspartate and glutamate", c: "Aspartate and lysine", d: "Aspartate and asparagines" },
        correctAnswer: "b",
        explanation: "**Aspartate** and **Glutamate** are the acidic amino acids."
    },
    {
        question: "41. Which of the following is known as half-cystine residue?",
        answers: { a: "Cysteine", b: "Isoleucine", c: "Valine", d: "Histidine" },
        correctAnswer: "a",
        explanation: "A single **Cysteine** residue is often referred to as a half-cystine residue."
    },
    {
        question: "42. The alpha carbon of an amino acid is attached to:",
        answers: { a: "Carboxyl group, Amino group, Hydrogen, R group.", b: "Carboxyl group, Amino group, R group.", c: "Carboxyl group, Amino group, R group, two Hydrogens.", d: "Carboxyl group, R group, two Hydrogens." },
        correctAnswer: "a",
        explanation: "The central alpha carbon is bonded to four different groups: a **Carboxyl group**, an **Amino group**, a **Hydrogen** atom, and the unique **R side chain**."
    },
    {
        question: "43. R group means the:",
        answers: { a: "Acidic group", b: "Carboxyl group", c: "Side chain", d: "Amino group" },
        correctAnswer: "c",
        explanation: "The R group represents the unique **Side chain** that determines the specific properties of each amino acid."
    },
    {
        question: "44. The $\text{pI}$ (isoelectric point) of acidic amino acids is:",
        answers: { a: "Less than $\text{pH} 7.0$", b: "More than $\text{pH} 7.0$", c: "Equal to $\text{pH} 7.0$", d: "None of the above" },
        correctAnswer: "a",
        explanation: "Acidic amino acids require a **lower $\text{pH}$ (acidic)** to neutralize the charge, thus the $\text{pI}$ is **less than $\text{pH} 7.0$**."
    },
    {
        question: "45. The $\text{pI}$ of basic amino acids is:",
        answers: { a: "Less than $\text{pH} 7.0$", b: "More than $\text{pH} 7.0$", c: "Equal to $\text{pH} 7.0$", d: "None of the above" },
        correctAnswer: "b",
        explanation: "Basic amino acids require a **higher $\text{pH}$ (alkaline)** to neutralize the charge, thus the $\text{pI}$ is **more than $\text{pH} 7.0$**."
    },
    {
        question: "46. In D amino acids, the alpha amino group is on the:",
        answers: { a: "Left side", b: "Right side", c: "Top side", d: "Bottom side" },
        correctAnswer: "b",
        explanation: "In the Fisher projection of a **D** amino acid, the **alpha amino** group is drawn on the **Right side**."
    },
    {
        question: "47. L amino acids are:",
        answers: { a: "Always optically active", b: "The form found in human proteins", c: "Less soluble in water", d: "Only found in bacteria" },
        correctAnswer: "b",
        explanation: "The vast majority of amino acids found in **human proteins** are of the **L-configuration**."
    },
    {
        question: "48. The weakest bond in protein structure is:",
        answers: { a: "Peptide bond", b: "Disulphide bond", c: "Ionic bond", d: "Van der Waal's force" },
        correctAnswer: "d",
        explanation: "**Van der Waal's forces** are the weakest non-covalent interactions."
    },
    {
        question: "49. Quaternary structure is stabilized by:",
        answers: { a: "Peptide bond", b: "Hydrogen bond", c: "Hydrophobic interaction", d: "Both b and c" },
        correctAnswer: "d",
        explanation: "Quaternary structure is maintained primarily by non-covalent forces, including **Hydrogen bonds** and **Hydrophobic interactions**."
    },
    {
        question: "50. Alpha amino acids are called alpha because:",
        answers: { a: "They contain alpha helix", b: "The amino group is attached to the alpha carbon", c: "They are found only in alpha position", d: "They contain alpha keto acid" },
        correctAnswer: "b",
        explanation: "They are called alpha amino acids because the amino group ($\text{NH}_2$) is bonded to the **alpha carbon**."
    },
    {
        question: "51. Which of the following is NOT a function of proteins?",
        answers: { a: "Catalysis", b: "Defence", c: "Transportation", d: "Genetic information storage" },
        correctAnswer: "d",
        explanation: "The primary function of nucleic acids (**DNA/RNA**) is **Genetic information storage**, not proteins."
    },
    {
        question: "52. Histidine is considered a basic amino acid because of:",
        answers: { a: "Carboxyl group", b: "Amino group", c: "Imidazole group", d: "Phenolic group" },
        correctAnswer: "c",
        explanation: "The basic property of Histidine is due to the nitrogen atoms in its **Imidazole group** side chain."
    },
    {
        question: "53. The precursor of thyroid hormones is:",
        answers: { a: "Tryptophan", b: "Tyrosine", c: "Serine", d: "Methionine" },
        correctAnswer: "b",
        explanation: "The amino acid **Tyrosine** is the precursor for the synthesis of thyroid hormones $\text{(T3/T4)}$."
    },
    {
        question: "54. An amino acid which can be converted to catecholamines is:",
        answers: { a: "Tyrosine", b: "Phenylalanine", c: "Tryptophan", d: "Proline" },
        correctAnswer: "a",
        explanation: "**Tyrosine** is the direct precursor for the synthesis of catecholamines."
    },
    {
        question: "55. Non-protein amino acid is:",
        answers: { a: "Hydroxy lysine", b: "Hydroxyl proline", c: "Selenocysteine", d: "Citrulline" },
        correctAnswer: "d",
        explanation: "**Citrulline** is an amino acid (part of the Urea Cycle) that is not incorporated into proteins during translation."
    },
    {
        question: "56. Sulphur containing amino acids are:",
        answers: { a: "Cysteine and methionine", b: "Methionine and threonine", c: "Cysteine and threonine", d: "Cysteine and serine" },
        correctAnswer: "a",
        explanation: "**Cysteine** and **Methionine** are the only two standard amino acids that contain sulfur."
    },
    {
        question: "57. In a tripeptide, the peptide bond:",
        answers: { a: "Links the two amino acids at the beginning of the chain", b: "Links two amino acids at the end of the chain", c: "Links the alpha carboxylic group of one amino acid to the alpha amino group of the next", d: "Is a non-covalent bond" },
        correctAnswer: "c",
        explanation: "The **Peptide bond** is formed between the **alpha-carboxyl** group of one amino acid and the **alpha-amino** group of the next."
    }
];