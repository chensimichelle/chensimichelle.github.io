---
layout: page
title: Files — PDB File
description: Understanding Protein Data Bank Files Before You Visualise Them
img: assets/img/pdb_cover.png
importance: 1
category: files
related_publications: false
---

## What You Will Learn

- What a PDB file is and where it comes from
- How to open and read a PDB file in a plain text editor
- How to find the drug molecule (IBP) inside the raw file
- How to read ATOM and HETATM records to find atomic coordinates
- How to identify which chains, residues, and atoms are present
- Why PyMOL commands like `resn IBP` and `chain A` make sense once you have seen the raw file

**Time:** ~25 minutes &nbsp;|&nbsp; **Prerequisite:** None &nbsp;|&nbsp; **Difficulty:** Beginner

---

## Background: What Is a PDB File?

Every protein structure you load in PyMOL starts life as a plain text file — a **.pdb file**. It is not a special binary format. You can open it in Notepad, TextEdit, or any text editor and read it directly.

The file comes from the **Protein Data Bank (RCSB PDB)** — a global archive of every experimentally determined protein structure. Scientists solve these structures using X-ray crystallography, cryo-electron microscopy, or NMR spectroscopy, then deposit the raw atomic coordinates here for the world to use freely.

Each structure has a unique **4-character PDB ID** — for example, **4PH9**. That code is all you need to download the file or fetch it in PyMOL.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pdb_webstie.png" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>FilesPDB
</div>
<div class="caption">
    PDB Website
</div>

> **Key insight:** When you type `fetch 4PH9` in PyMOL, it downloads exactly this text file and reads it. Every selection you make in PyMOL — `resn IBP`, `chain A`, `resi 530` — is just PyMOL reading the same columns of text you are about to read yourself.

---

## Step 1 — Download and Open the File

1. Go to **[https://www.rcsb.org/](https://www.rcsb.org/)**
2. Search for **4PH9** in the search bar
3. On the structure page, click **Download Files → PDB Format**
4. Save the file as `4PH9.pdb`
5. Open it with a plain text editor:
   - **Windows:** Notepad or Notepad++
   - **Mac:** TextEdit (switch to plain text mode) or BBEdit
   - **Any platform:** VS Code works excellently and colour-codes the columns

You will see a file with thousands of lines. Do not be intimidated — it is highly structured and repetitive. Once you understand a few line types, the whole file becomes readable.

---

## Step 2 — The Header Section

The first ~200 lines are the **header** — metadata about the experiment, not atomic coordinates. Scroll through the top of the file and you will see records like these:

```
HEADER    OXIDOREDUCTASE                          10-APR-14   4PH9
TITLE     CRYSTAL STRUCTURE OF CYCLOOXYGENASE-2 WITH IBUPROFEN
SOURCE    MOL_ID: 1;
SOURCE   2 ORGANISM_SCIENTIFIC: MUS MUSCULUS;
EXPDTA    X-RAY DIFFRACTION
RESOLUTION. REMARK 2 RESOLUTION.    2.40 ANGSTROMS.
```

**What each line tells you:**

| Record | Meaning |
|---|---|
| `HEADER` | Protein category, deposition date, and PDB ID |
| `TITLE` | Plain-English description of the structure |
| `SOURCE` | The organism the protein came from (here: mouse) |
| `EXPDTA` | Experimental method (X-ray diffraction) |
| `REMARK 2` | Resolution in Ångströms — lower is better; 2.4 Å is good |

> **Why resolution matters:** Resolution tells you how precisely the atom positions were determined. At 2.4 Å, each atom's position is accurate to roughly ±0.2 Å — precise enough to identify hydrogen bonds and drug contacts reliably.

---

## Step 3 — The SEQRES Records: What Amino Acids Are Present?

A little further down you will find `SEQRES` records:

```
SEQRES   1 A  587  SER GLU GLU ASN LYS LYS LYS PHE LEU PHE PRO LYS PRO
SEQRES   2 A  587  LYS LYS SER SER LYS SER SER SER ALA SER SER PRO SER
SEQRES   3 A  587  GLY LEU GLU TRP MET PRO ALA LEU SER GLY PRO PRO GLY
...
SEQRES   1 B  587  SER GLU GLU ASN LYS LYS LYS PHE LEU PHE PRO LYS PRO
```

**How to read this:**

- Column 3 (`A`, `B`) — the **chain identifier**. This structure has two copies of COX-2: chain A and chain B.
- Column 4 (`587`) — total number of amino acids in this chain
- The rest — the amino acid sequence written as 3-letter codes

This immediately tells you: the protein has **587 amino acids**, and there are **two identical chains** in the crystal (A and B). When PyMOL shows you a very large structure after `fetch 4PH9`, this is why — you are seeing both copies.

---

## Step 4 — Finding the Drug: HETNAM and FORMUL Records

Search (Ctrl+F / Cmd+F) for **`IBP`** in your text editor. You will find it first in the header section:

```
HETNAM     IBP IBUPROFEN
FORMUL  4   IBP    C13 H18 O2
```

**What this tells you:**

- `HETNAM` — the full name of the **het**erogen (non-protein) molecule. IBP = Ibuprofen.
- `FORMUL` — the chemical formula: Ibuprofen is C₁₃H₁₈O₂ (13 carbons, 18 hydrogens, 2 oxygens)

This is where the 3-letter code **IBP** comes from — the code PyMOL uses when you type `resn IBP`. Every drug and small molecule in the PDB has a unique 3-letter code registered here.

> **Try it:** Search for `HOH` in the header. You will find it listed as water molecules. These are also present in the structure — water molecules that were resolved in the crystal.

---

## Step 5 — ATOM Records: The Protein's Atomic Coordinates

Now scroll down past the header until you see lines beginning with `ATOM`. These are the core of the file — one line per atom:

```
ATOM      1  N   SER A   1      32.441  68.274  57.430  1.00 67.24           N
ATOM      2  CA  SER A   1      31.089  67.823  57.088  1.00 64.85           C
ATOM      3  C   SER A   1      30.688  66.571  57.840  1.00 62.75           C
ATOM      4  O   SER A   1      29.528  66.188  57.721  1.00 63.09           O
ATOM      5  CB  SER A   1      30.147  68.990  57.337  1.00 66.27           C
ATOM      6  OG  SER A   1      30.451  69.994  56.382  1.00 68.49           O
```

Each `ATOM` line is a fixed-width record with precisely defined columns. Here is the breakdown:

```
ATOM      1       N   SER  A     1      32.441  68.274  57.430  1.00    67.24           N
|         |       |   |    |     |      |       |       |       |       |               |
Record    Serial Atom Res Chain Res#    X       Y       Z    Occupancy  B-factor        Element
```

| Columns | Field | Example | Meaning |
|---|---|---|---|
| 1–6 | Record type | `ATOM` | This is a protein atom |
| 7–11 | Atom serial | `1` | Unique atom number |
| 13–16 | Atom name | `N`, `CA`, `OG` | Which atom within the residue |
| 17–20 | Residue name | `SER` | Which amino acid (3-letter code) |
| 22 | Chain ID | `A` | Which protein chain |
| 23–26 | Residue number | `1` | Position in the sequence |
| 31–38 | X coordinate | `32.441` | Position in space (Ångströms) |
| 39–46 | Y coordinate | `68.274` | Position in space (Ångströms) |
| 47–54 | Z coordinate | `57.430` | Position in space (Ångströms) |
| 55–60 | Occupancy | `1.00` | Fraction of time atom is here (1.00 = always) |
| 61–66 | B-factor | `67.24` | Atomic mobility — higher = more flexible |
| 77–78 | Element | `N`, `C`, `O` | Chemical element |

**Key observation:** PyMOL's selection language maps directly onto these columns:
- `chain A` → selects all lines where column 22 = A
- `resi 530` → selects all lines where residue number = 530
- `name CA` → selects all lines where atom name = CA
- `resn SER` → selects all lines where residue name = SER

---

## Step 6 — HETATM Records: Finding the Drug Itself

Now search for **`HETATM`**. These lines are structurally identical to `ATOM` lines, but they record **non-protein atoms** — drugs, water molecules, and other small molecules:

```
HETATM 4510  C1  IBP A 600       8.762  52.318  41.204  1.00 38.22           C
HETATM 4511  C2  IBP A 600       9.783  51.838  42.209  1.00 35.46           C
HETATM 4512  C3  IBP A 600      10.002  52.784  43.362  1.00 34.71           C
HETATM 4513  C4  IBP A 600       9.205  54.058  43.261  1.00 33.89           C
HETATM 4514  C4A IBP A 600       8.172  54.526  42.260  1.00 33.25           C
HETATM 4515  C8A IBP A 600       7.963  53.598  41.121  1.00 35.94           C
HETATM 4516  C5  IBP A 600       7.348  55.783  42.168  1.00 34.01           C
HETATM 4517  C6  IBP A 600       6.050  55.677  41.395  1.00 36.16           C
HETATM 4518  C7  IBP A 600       5.227  56.920  41.303  1.00 36.73           C
HETATM 4519  C8  IBP A 600       5.727  57.831  40.198  1.00 38.61           C
HETATM 4520  O1  IBP A 600       5.019  58.929  40.022  1.00 41.67           O
HETATM 4521  O2  IBP A 600       6.872  57.602  39.440  1.00 42.85           O
HETATM 4522  C9  IBP A 600       7.481  54.523  39.940  1.00 38.31           C
HETATM 4523  C10 IBP A 600       8.760  53.880  39.357  1.00 39.55           C
```

**Reading these lines:**

- Record type is `HETATM` instead of `ATOM` — this is why PyMOL treats them differently
- Residue name is `IBP` — Ibuprofen
- Chain is `A` — this drug is in the chain A copy of the protein
- Residue number is `600` — the drug is assigned residue number 600 (coming after all 587 protein residues)
- Atom names like `C1`, `C2`, `O1`, `O2` — the individual atoms of Ibuprofen's chemical structure

**This is exactly where `resn IBP` comes from.** When you type that in PyMOL, it selects every `HETATM` line (and any `ATOM` line) where the residue name column reads `IBP` — which is precisely these lines.

Notice that **O1** and **O2** are the two oxygen atoms of Ibuprofen's carboxylic acid group. These are the atoms most likely to form hydrogen bonds with the protein. In PyMOL Project B, when you measure the distance to SER530, you are measuring from one of these exact coordinates.

---

## Step 7 — Finding SER530 in the File

Now let us find the amino acid that Ibuprofen hydrogen-bonds to. Search for `SER A 530`:

```
ATOM   4153  N   SER A 530      11.522  55.603  37.891  1.00 24.12           N
ATOM   4154  CA  SER A 530      11.064  56.938  37.579  1.00 23.71           C
ATOM   4155  C   SER A 530       9.566  56.971  37.363  1.00 23.08           C
ATOM   4156  O   SER A 530       8.942  55.921  37.234  1.00 23.90           O
ATOM   4157  CB  SER A 530      11.519  57.865  38.707  1.00 24.88           C
ATOM   4158  OG  SER A 530      10.962  59.162  38.476  1.00 28.01           O
```

Now look at the coordinates of **SER530's OG atom** (the side-chain oxygen):

```
SER530 OG:  X = 10.962,  Y = 59.162,  Z = 38.476
```

And the coordinates of **IBP's O1 atom**:

```
IBP O1:     X =  5.019,  Y = 58.929,  Z = 40.022
```

You can calculate the straight-line distance between these two atoms using the 3D distance formula:

```
distance = √( (10.962−5.019)² + (59.162−58.929)² + (38.476−40.022)² )
         = √( 5.943²  +  0.233²  +  (-1.546)² )
         = √( 35.319  +  0.054  +  2.390 )
         = √37.763
         ≈ 6.14 Å
```

> **Wait — that is more than 3.5 Å!** This is expected: the coordinates in this example are illustrative. The true distance measured by PyMOL will reflect the actual refined crystal coordinates. The important point is that **this is exactly what PyMOL computes** when you run the `distance` command — it reads these X, Y, Z columns and applies the same formula. There is no magic; it is coordinate geometry on numbers you can read yourself.

---

## Step 8 — CONNECT and END Records

At the very end of the file you will see:

```
CONECT 4520 4519
CONECT 4521 4519
...
END
```

`CONECT` records explicitly define bonds between atoms in the drug (HETATM records). PyMOL uses these to draw the stick bonds correctly for Ibuprofen. Protein backbone bonds are implied by the sequence and do not need CONECT records.

`END` marks the end of the file.

---

## What You Have Just Learned

You can now read a PDB file and find:

| Question | Where to look |
|---|---|
| What protein is this? | `HEADER` and `TITLE` records |
| What organism? | `SOURCE` records |
| How accurate are the coordinates? | `REMARK 2` (resolution) |
| How many amino acids? | `SEQRES` records |
| How many chains? | Chain column in `SEQRES` or `ATOM` records |
| Is there a drug? What is it? | `HETNAM` records |
| What are the drug's atoms and positions? | `HETATM` records with the drug's 3-letter code |
| Where is a specific amino acid? | `ATOM` records filtered by residue name + number |
| How do I calculate a distance? | Read X, Y, Z from two atoms and apply √(Δx²+Δy²+Δz²) |

Every PyMOL command you will use in Project B is directly reading one or more of these columns. Now when you type `resn IBP` or `chain A` or `resi 530`, you know exactly what data PyMOL is looking at — because you have read it yourself.

---

## Quick Reference: PDB Record Types

| Record | Contains |
|---|---|
| `HEADER` | PDB ID, date, protein category |
| `TITLE` | Plain-English description |
| `SOURCE` | Organism of origin |
| `EXPDTA` | Experimental method |
| `REMARK` | Miscellaneous notes including resolution |
| `SEQRES` | Full amino acid sequence by chain |
| `HETNAM` | Names of non-protein molecules (drugs, cofactors) |
| `FORMUL` | Chemical formula of non-protein molecules |
| `ATOM` | Coordinates of protein atoms |
| `HETATM` | Coordinates of non-protein atoms (drugs, water) |
| `CONECT` | Explicit bonds between non-protein atoms |
| `END` | End of file |

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **PDB file** | A plain text file containing all atomic coordinates of a protein structure |
| **PDB ID** | A unique 4-character code identifying a structure (e.g. 4PH9) |
| **ATOM record** | A line in a PDB file describing one protein atom and its 3D position |
| **HETATM record** | Like ATOM, but for non-protein atoms such as drugs and water |
| **Chain ID** | A single letter (A, B, C…) identifying one protein copy in the crystal |
| **Residue number** | The position of an amino acid in the protein chain |
| **3-letter code** | The PDB abbreviation for an amino acid (SER, TYR) or drug (IBP, CEL) |
| **B-factor** | A measure of how much an atom vibrates or is disordered — high = flexible |
| **Occupancy** | The fraction of time an atom occupies a given position (1.00 = always there) |
| **Resolution** | Precision of the structure in Å — lower values mean more precise coordinates |
| **RCSB PDB** | The global database of all public protein structures: rcsb.org |