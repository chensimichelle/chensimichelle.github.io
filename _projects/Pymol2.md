---
layout: page
title: PyMOL Project B — Exploring the Binding Pocket
description: PyMOL — Finding Where Drugs Attach to Proteins
img: assets/img/PymolCover.png
importance: 2
category: pymol
related_publications: false
---

## What You Will Learn

- How to load a protein that already has a drug bound to it
- How to find and isolate the drug molecule inside the structure
- How to measure the distances between a drug and surrounding amino acids
- How to display hydrogen bonds visually
- How to identify which amino acids are most important for drug binding

**Time:** ~35 minutes &nbsp;|&nbsp; **Prerequisite:** PyMOL Project A &nbsp;|&nbsp; **Difficulty:** Beginner–Intermediate

---

## Background: The Binding Pocket

In Project A you looked at a protein's overall shape. Now we zoom in on the most important part: the **binding pocket** (also called the active site) — the specific groove or cavity where a drug attaches.

When a drug binds to a protein, it is not just sitting loosely inside a hole. It is held in place by many weak chemical attractions between the drug's atoms and the surrounding amino acids. The most important of these attractions are:

- **Hydrogen bonds** — a weak attraction between a hydrogen atom on one molecule and an electronegative atom (oxygen or nitrogen) on another. These are the most important interactions in drug binding.
- **Hydrophobic contacts** — nonpolar parts of the drug nestle against nonpolar amino acids, away from water. Like oil droplets clumping together.
- **Electrostatic interactions** — attraction between positively and negatively charged groups.

The more of these interactions a drug makes, the more tightly it binds — and generally, the more effective it is.

> **Analogy:** Think of a drug binding to its pocket like a hand in a glove. The glove (pocket) has a specific shape, and each finger (drug atom) must fit into exactly the right place. The more fingers that fit snugly, the harder the glove is to pull off.

---

## The Structure We Will Study: COX-2 + Ibuprofen

We will load the same COX-2 protein you will score computationally in PyRosetta Project 2 — but this time, we are going to *see* the drug inside the binding pocket with our own eyes before calculating anything.

**PDB ID: 4PH9** — COX-2 (Cyclooxygenase-2) with Ibuprofen bound in the active site.

- **COX-2** is the enzyme that produces inflammation and pain in your body
- **Ibuprofen (Advil)** is the drug that blocks it

---

## Step-by-Step Instructions

### Step 1 — Load the Structure

```
fetch 4PH9
hide everything
show cartoon, 4PH9
color grey80, 4PH9
```

This loads the full COX-2 crystal structure and displays it as a grey cartoon. The protein will look very large — COX-2 is much bigger than Lysozyme from Project A.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol2-0.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sequence Display
</div>

> **Note:** You will notice the structure contains two copies of the protein (chains A and B). Crystal structures often contain multiple identical copies packed together. We will focus on chain A.

---

### Step 2 — Find the Drug Molecule

The drug (Ibuprofen) is stored in the structure under the code **IBP**. Let us find it and display it:

```
select drug, resn IBP
show sticks, drug
color yellow, drug
zoom drug
```

**What this does:**

- `select drug, resn IBP` — creates a selection called "drug" containing all atoms with residue name IBP (Ibuprofen's code in the PDB)
- `show sticks` — displays the drug as a stick model showing every atom and bond
- `color yellow` — makes the drug bright yellow so it stands out
- `zoom drug` — moves the camera to focus on the drug

You should now see a small yellow stick molecule sitting inside the grey protein. This is Ibuprofen, sitting exactly where it was found in the crystal structure — its real position inside COX-2's binding pocket.

**Key Concepts:**

- **`resn`:** Short for "residue name" — used to select molecules by their 3-letter PDB code.
- **Sticks representation:** Shows every atom as a sphere and every bond as a stick. Best for seeing the detailed chemistry of small molecules.
- **Ligand code:** The 3-letter code the PDB uses to identify a drug or small molecule (e.g. IBP = Ibuprofen, CEL = Celecoxib).

---

### Step 3 — Isolate the Binding Pocket

Now let us select the amino acids immediately surrounding the drug — these are the ones forming the binding pocket:

```
select pocket, byres (drug expand 5)
show sticks, pocket
color cyan, pocket
color yellow, drug
```

**What this does:**

- `byres (drug expand 5)` — finds every residue with any atom within 5 Ångströms of the drug (1 Ångström = 0.1 nanometres — roughly the size of one atom)
- The cyan (light blue) amino acids you now see form the binding pocket
- `color yellow, drug` — re-applies yellow to the drug, since coloring the pocket cyan would otherwise overwrite it (the `pocket` selection includes residues that overlap spatially with the drug's neighbourhood)

Look at the pocket carefully. You should now have a clear two-colour view: **yellow** for Ibuprofen, **cyan** for the surrounding amino acids. The drug is surrounded on all sides by amino acids reaching in from the protein walls. This is the molecular environment that the drug "feels" when it is bound.

> **Analogy:** 5 Ångströms is roughly the distance of one direct chemical interaction. Selecting within 5 Å of the drug is like selecting every person at a dinner party who is close enough to pass the salt to Ibuprofen.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol2-1.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sequence Display
</div>

**Key Concepts:**

- **Ångström (Å):** A unit of length used in chemistry. 1 Å = 0.1 nanometres = 0.0000001 millimetres. Atoms are roughly 1–2 Å in radius; bonds are ~1.5 Å long.
- **`expand N`:** Selects all atoms within N Ångströms of a selection.
- **`byres`:** Expands the selection to include the entire residue, not just the nearby atoms.
- **Binding pocket:** The set of amino acids that directly surround and contact the drug.

---

### Step 4 — Measure Key Distances

Now that you can see the drug (yellow) surrounded by pocket residues (cyan), the question is: which amino acids are actually *touching* the drug? Proximity alone does not tell you — you need to measure.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol2-2.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Wizard
</div>


**What to look for:**

| Distance | What it means |
|---|---|
| **< 3.5 Å** | Likely a hydrogen bond — very important for binding |
| **3.5 – 5.0 Å** | Close contact — probably a hydrophobic or weak interaction |
| **> 5.0 Å** | Too far for a direct interaction |

As you click around, try to find at least one pair of atoms that is under 3.5 Å apart — this is a hydrogen bond candidate. Pay attention to which amino acid it belongs to (hover over atoms in PyMOL to read their residue name and number in the bottom bar).

> **Tip:** Oxygen atoms (red) and nitrogen atoms (blue) are the most likely to form hydrogen bonds. Focus your measurements on these atoms on both the drug and the surrounding residues.

Once you have explored and found a close contact yourself, you can confirm it precisely with the command line. For example, if you noticed that the oxygen on Ibuprofen looks very close to **SER530**, you can measure it exactly:

```
distance d1, /4PH9//A/IBP/O1, /4PH9//A/SER530/OG
```

This measures the distance between the carboxylate oxygen (O1) of Ibuprofen and the side-chain oxygen (OG) of Serine 530. A value under 3.5 Å confirms a hydrogen bond.


> **How to read the atom notation:** `/4PH9//A/SER530/OG` means: structure 4PH9 → chain A → residue SER530 → atom named OG. You can find atom names by hovering over atoms in PyMOL — the name appears in the bottom status bar.

**Key Concepts:**

- **Hydrogen bond distance:** Typically 2.5–3.5 Å between the hydrogen donor and acceptor atoms. One of the strongest non-covalent interactions in biology.
- **Non-covalent interaction:** A chemical attraction that does not involve sharing electrons (unlike a covalent bond). Individually weak, but collectively very powerful when many occur together.

---

### Step 5 — Display Hydrogen Bonds

PyMOL can automatically find and display all hydrogen bonds between the drug and the protein:

```
set h_bond_cutoff_center, 3.5
set h_bond_cutoff_edge, 3.0
distance hbonds, drug, pocket, mode=2
color magenta, hbonds
```

You should now see **magenta dashed lines** connecting drug atoms to nearby amino acid atoms — these are the hydrogen bonds holding the drug in place.

Count how many hydrogen bonds Ibuprofen makes with COX-2. Write this number down — you will compare it with other drugs in Project C.

> **Analogy:** Hydrogen bonds are like Velcro. One Velcro hook is weak and easy to pull apart. But many hooks together create a strong, secure attachment. The more hydrogen bonds a drug makes, the harder it is to pull out of the binding pocket.

**Key Concepts:**

- **`mode=2`:** Tells the distance command to only display hydrogen bonds (not all distances).
- **Hydrogen bond donor:** An atom that shares its hydrogen (usually N-H or O-H groups).
- **Hydrogen bond acceptor:** An electronegative atom that attracts the hydrogen (usually O or N).

---

### Step 6 — Label the Key Amino Acids

Let us add labels so we can see which amino acids are interacting with the drug:

```
label pocket and name CA, "%s%s" % (resn, resi)
set label_size, 14
set label_color, black
```

This labels every alpha carbon (the central atom of each amino acid) with its name and number. You should now be able to identify amino acids like **SER530**, **TYR385**, **ARG120** — these are the key residues of COX-2's active site that appear in the scientific literature.

To remove labels when done:

```
label all, ""
```

**Key Concepts:**

- **`name CA`:** Selects only the alpha carbon of each amino acid — the central backbone atom, one per residue.
- **Residue number:** Each amino acid in a protein has a unique position number (e.g. SER530 = Serine at position 530). These numbers match between the PDB structure and the scientific literature.
- **Active site residues:** The specific amino acids that directly contact the drug. Mutations in these residues can cause drug resistance.

---
<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol2-4.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This prepares you for label moving
</div>

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol2-5.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Now you can move your label to the right place
</div>


### Step 7 — Create a Publication Figure

Now let us create a clean, professional image of the binding pocket:

```
hide everything
show cartoon, 4PH9
color grey70, 4PH9
show sticks, pocket
color cyan, pocket
show sticks, drug
color yellow, drug
distance hbonds, drug, pocket, mode=2
color magenta, hbonds
set label_size, 0
bg_color white
ray 1400, 1000
png cox2_ibuprofen_pocket.png
```

Setting the background to white (`bg_color white`) produces a cleaner image suitable for a report or poster.

---

### Step 8 — Save Your Session

```
save cox2_ibuprofen_session.pse
```

---

## Full Command Summary

```
fetch 4PH9
hide everything
show cartoon, 4PH9
color grey80, 4PH9
select drug, resn IBP
show sticks, drug
color yellow, drug
zoom drug
select pocket, byres (drug expand 5)
show sticks, pocket
color cyan, pocket
color yellow, drug
distance hbonds, drug, pocket, mode=2
color magenta, hbonds
label pocket and name CA, "%s%s" % (resn, resi)
set label_size, 14
bg_color white
ray 1400, 1000
png cox2_ibuprofen_pocket.png
save cox2_ibuprofen_session.pse
```

---

## Discussion Questions

**1.** How many hydrogen bonds did Ibuprofen make with COX-2? Which amino acids were involved?

**2.** Look at the shape of the binding pocket around Ibuprofen. Does the drug fill the pocket tightly, or is there empty space? What might that suggest about how well it binds?

**3.** Why do you think scientists care about the exact positions of each amino acid in the binding pocket, not just the overall protein shape?

**4.** If one of the key amino acids (e.g. SER530) were mutated to a different amino acid, how might that affect Ibuprofen's ability to bind? This is how drug resistance develops in bacteria and cancer cells.

**5.** In the next project, you will compare all three COX-2 inhibitors visually. Based on what you have seen today, what features of a drug do you think would make it bind more tightly to COX-2?

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Binding pocket / active site** | The specific region of a protein where a drug or substrate binds |
| **Ligand** | A small molecule (like a drug) that binds to a protein |
| **Hydrogen bond** | A weak attraction between a hydrogen atom and an electronegative atom (O or N). Typically 2.5–3.5 Å |
| **Hydrophobic interaction** | Attraction between nonpolar groups that clump together away from water |
| **Ångström (Å)** | Unit of atomic-scale distance. 1 Å = 0.1 nm. Bonds are ~1.5 Å; hydrogen bonds ~3 Å |
| **`resn`** | PyMOL keyword for "residue name" — used to select molecules by their PDB code |
| **`expand N`** | PyMOL command to select all atoms within N Ångströms of a selection |
| **`byres`** | Expands a PyMOL selection to include the full residue |
| **Non-covalent interaction** | A chemical attraction not involving electron sharing. Weak individually but powerful in combination |
| **Residue number** | The position number of an amino acid in the protein chain (e.g. SER530) |
| **Drug resistance** | When a mutation in the binding pocket prevents a drug from attaching properly |