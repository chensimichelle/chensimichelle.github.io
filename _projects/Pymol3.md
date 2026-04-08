---
layout: page
title: PyMOL Project C — Comparing Three Drugs Side by Side
description: PyMOL — Aligning and Comparing COX-2 Inhibitors Visually
img: assets/img/PymolCover.png
importance: 3
category: pymol
related_publications: false
---

## What You Will Learn

- How to load multiple protein structures into the same PyMOL session
- How to align structures on top of each other for comparison
- How to visually assess how well each drug fills the binding pocket
- How to count and compare hydrogen bonds across multiple drugs
- How to create a multi-drug comparison figure

**Time:** ~40 minutes &nbsp;|&nbsp; **Prerequisite:** PyMOL Projects A and B &nbsp;|&nbsp; **Difficulty:** Intermediate

---

## Background: Why Compare Multiple Drugs?

In drug discovery, researchers rarely test just one molecule. They test hundreds or thousands of candidates against the same protein target, comparing them to find the one that binds most tightly and specifically. This process is called **lead optimisation** — finding the best "lead" drug candidate.

In this project you will do exactly what a medicinal chemist does: load three real drugs that all target the same protein (COX-2), align them in the same binding pocket, and compare them side by side — visually, before calculating any numbers.

The three drugs are:

| Drug | Brand Name | PDB ID | Prescription? |
|---|---|---|---|
| **Ibuprofen** | Advil | 4PH9 | No — over the counter |
| **Celecoxib** | Celebrex | 3LN1 | Yes |
| **Meloxicam** | Mobic | 4M11 | Yes |

All three block COX-2. But they are structurally very different molecules — and as you will see, they fit into the pocket in very different ways.

> **Analogy:** Imagine three different key designs that all open the same lock, but with very different amounts of effort. Some fit snugly with barely any wiggle room. Others work but rattle around loosely. Our job today is to see which key fits most precisely.

---

## Step-by-Step Instructions

### Step 1 — Load All Three Structures

Load each structure separately. We give them memorable names to keep them organised:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-1.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

```
fetch 4PH9, ibuprofen
fetch 3LN1, celecoxib
fetch 4M11, meloxicam
```

By adding a name after the PDB ID (e.g. `fetch 4PH9, ibuprofen`), we tell PyMOL to store the structure under that name instead of the default "4PH9". This makes all future commands much easier to read.

Initially hide everything to start with a clean slate:

```
hide everything
```

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-2.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-3.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**Key Concepts:**

- **Named fetch:** Loading a structure with a custom name (`fetch PDBID, name`) makes complex multi-object sessions much easier to manage.
- **Multiple objects:** PyMOL can hold many structures in memory simultaneously. Each appears as a separate row in the object panel on the right.

---

### Step 2 — Align All Three Structures

The three structures were crystallised by different research groups in different labs. The proteins are in slightly different orientations in each file. Before comparing, we need to **align** them — rotate and translate each structure so they overlap as perfectly as possible.

We use Ibuprofen's structure (4PH9) as our **reference** and align the other two onto it:

```
align celecoxib, ibuprofen
align meloxicam and chain A, ibuprofen and chain A
```

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-4.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-5.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

PyMOL will print an **RMSD** value after each alignment. RMSD stands for Root Mean Square Deviation — it measures how well two structures overlap after alignment.

| RMSD value | Meaning |
|---|---|
| **< 1.0 Å** | Excellent — structures are nearly identical |
| **1.0 – 2.0 Å** | Good — minor differences in flexible regions |
| **> 2.0 Å** | Significant differences in structure |

> **Note:** The 4M11 (meloxicam) file contains multiple protein chains and extra molecules from crystallisation (HEM, NAG, BOG). If you run `align meloxicam, ibuprofen` without specifying a chain, PyMOL may attempt to align the wrong chains against each other and return a very large RMSD (~33 Å). This is not a real biological difference — it is a chain mismatch. Always specify `chain A` for meloxicam to get a correct alignment. You can check which chains are present at any time with `get_chains meloxicam`.

**Key Concepts:**

- **align:** PyMOL command that superimposes two structures by rotating and translating one to match the other as closely as possible.
- **RMSD (Root Mean Square Deviation):** A single number measuring how different two aligned structures are. Lower = more similar.
- **Reference structure:** The structure that stays fixed while others are moved to match it.
- **Structural alignment:** Essential whenever comparing proteins from different PDB entries — they are never pre-oriented the same way.
- **Chain specification:** Some PDB files contain multiple copies of a protein (chains A, B, C…). Specifying the chain explicitly ensures PyMOL aligns the correct copies against each other.

---

### Step 3 — Display the Three Proteins Together

Now display all three protein backbones as cartoons in different colours:

```
show cartoon, ibuprofen
show cartoon, celecoxib
show cartoon, meloxicam
color grey70, ibuprofen
color lightblue, celecoxib
color lightorange, meloxicam
```

You should now see three protein structures layered on top of each other. Because COX-2 is the same protein in all three cases, the structures should overlap very closely — confirming that our alignment worked well.

Rotate the view and observe: the three proteins are almost identical. This makes sense — the protein does not change shape much between the three crystal structures. The key difference will be in the drugs.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-7.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### Step 4 — Show All Three Drugs

Now let us reveal the three drugs:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-8.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

```
select ibp, ibuprofen and resn IBP
select cel, celecoxib and resn CEL
select mxm, meloxicam and resn MXM

show sticks, ibp
show sticks, cel
show sticks, mxm

color yellow, ibp
color magenta, cel
color orange, mxm
```

You should now see three stick molecules of different colours sitting in approximately the same region of the protein — the COX-2 binding pocket. Zoom into the pocket:

```
zoom ibp
```

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-9.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

This is one of the most striking views in drug design: three completely different molecules, all occupying the same cavity, all blocking the same enzyme. Notice:

- **How do their sizes compare?** Is one drug larger and more space-filling than the others?
- **Do they overlap?** Do all three drugs sit in exactly the same position, or do some extend into different parts of the pocket?
- **Which one looks like it fits most snugly?**

**Key Concepts:**

- **`resn IBP / CEL / MXM`:** The PDB residue names for Ibuprofen, Celecoxib, and Meloxicam respectively.
- **Pharmacophore:** The set of structural features a molecule needs to bind a particular protein. All three drugs share a pharmacophore for COX-2 binding, despite looking different overall.

---

### Step 5 — Compare Pocket Coverage

Let us show the binding pocket surface for one protein and see how each drug fills it:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-10.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

```
hide everything
show surface, ibuprofen
color grey70, ibuprofen
set transparency, 0.5
select pocket_ibp, ibuprofen and byres (ibp expand 5)
show sticks, pocket_ibp
color cyan, pocket_ibp
show sticks, ibp
show sticks, cel
show sticks, mxm
color yellow, ibp
color magenta, cel
color orange, mxm
```

> **Note:** `set transparency, 0.5` makes the surface semi-transparent so the drug stick models inside the pocket remain clearly visible. We also use `ibuprofen and byres (ibp expand 5)` rather than just `byres (ibp expand 5)` to restrict the pocket selection to only the ibuprofen object. Without this, PyMOL would select matching residues from all three aligned structures simultaneously, showing each pocket residue three times. Since all three proteins are well-aligned, the ibuprofen pocket is a fair representative for all three drugs.

With the surface displayed and all three drugs visible, you can see all three drugs inside the same pocket simultaneously. Look carefully:

- Does any drug leave large gaps (empty space) in the pocket?
- Does any drug appear to protrude outside the pocket?
- Which drug appears to fill the cavity most completely?

In drug design, a drug that fills the pocket with minimal empty space generally binds more tightly — this is called **shape complementarity**.

**Key Concepts:**

- **Shape complementarity:** How well a drug's shape matches the shape of the binding pocket. Like a puzzle piece fitting into its hole.
- **Pocket volume:** The total space available in the binding pocket. A drug that fills more of this volume tends to bind more tightly.
- **Void space:** Empty regions of the pocket not occupied by the drug — generally unfavourable for binding.

---

### Step 6 — Compare Hydrogen Bonds

In Project B you counted Ibuprofen's hydrogen bonds. Now do the same for all three drugs. Note that `mode=2` means PyMOL only draws **hydrogen bonds** — not all interactions. It finds atom pairs under 3.5 Å where the geometry is consistent with a donor–acceptor pair (N or O atoms).

```
select pocket_ibp, ibuprofen and byres (ibp expand 5)
select pocket_cel, celecoxib and byres (cel expand 5)
select pocket_mxm, meloxicam and byres (mxm expand 5)

distance hb_ibp, ibp, pocket_ibp, mode=2
distance hb_cel, cel, pocket_cel, mode=2
distance hb_mxm, mxm, pocket_mxm, mode=2

color yellow, hb_ibp
color magenta, hb_cel
color orange, hb_mxm

set label_distance_digits, 0
```

> **Note:** `set label_distance_digits, 0` hides the distance numbers on the dashed lines without removing the dashes themselves — keeping the view clean for counting. Using `hide labels` instead will remove the dashes entirely in some PyMOL versions, so avoid it here. We also restrict each pocket selection to its own object (e.g. `ibuprofen and byres`) for the same reason as Step 5 — to avoid counting interactions from all three aligned proteins at once.

Count the colored dashed lines for each drug and fill in the table below:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-12.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

| Drug | Hydrogen bonds with COX-2 | Residues involved | Visual pocket fit |
|---|---|---|---|
| Ibuprofen (yellow) | | | |
| Celecoxib (magenta) | | | |
| Meloxicam (orange) | | | |

> **Think about it:** Does the drug with the most hydrogen bonds also look like the best visual fit? Are these two things related, or can a drug have many H-bonds but still leave large gaps?

**Key Concepts:**

- **`mode=2`:** Tells the distance command to only display hydrogen bonds, not all distances.
- **H-bond count:** A rough measure of how many specific, directional interactions a drug makes with its target. More = generally better binding.
- **Binding selectivity:** Some drugs bind many different proteins; others bind only one. Celecoxib was specifically designed to bind COX-2 but not its close relative COX-1 — that is why it requires a prescription and has a different side-effect profile.

---

### Step 7 — Identify Shared Binding Residues

Some amino acids in the binding pocket interact with all three drugs — these are the most critical residues. Since all three proteins are well-aligned, we only need to show the pocket residues from one structure. We use `pocket_ibp` from the ibuprofen object as the representative:

```
show sticks, pocket_ibp
color cyan, pocket_ibp
```

> **Note:** We only show `pocket_ibp` here — showing all three pocket selections at once (`pocket_ibp`, `pocket_cel`, `pocket_mxm`) would display each residue three times since the proteins are stacked on top of each other. The ibuprofen pocket is a fair representative for all three drugs.

Label them by zooming into the pocket first, then applying labels:

```
zoom ibp
label (pocket_ibp and name CA), "%s%s" % (resn, resi)
set label_size, 14
set label_color, white
set label_position, (0, 0, 3)
```

> **Note:** Always run `zoom ibp` before labelling — this centers the view on the pocket so labels are immediately visible at the right scale. `set label_position, (0, 0, 3)` shifts labels slightly outward so they float above the sticks and surface rather than being buried inside them. `set label_color, white` ensures labels are readable against the dark background.

Note down any residue numbers you recognise from Project B (e.g. SER530, TYR385, ARG120).

To remove labels when done:

```
label all, ""
```

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol3-13.jpg" title="COX-2 Three Drug Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

### Step 8 — Create a Comparison Figure

```
hide everything
show cartoon, ibuprofen
color grey70, ibuprofen
show sticks, ibp
show sticks, cel
show sticks, mxm
color yellow, ibp
color magenta, cel
color orange, mxm
show sticks, pocket_ibp
color cyan, pocket_ibp
distance hb_ibp, ibp, pocket_ibp, mode=2
color yellow, hb_ibp
bg_color white
zoom ibp
ray 1600, 1000
png three_drugs_comparison.png
save three_drugs_session.pse
```

---

## Full Command Summary

```
fetch 4PH9, ibuprofen
fetch 3LN1, celecoxib
fetch 4M11, meloxicam
hide everything
align celecoxib, ibuprofen
align meloxicam and chain A, ibuprofen and chain A
show cartoon, ibuprofen
show cartoon, celecoxib
show cartoon, meloxicam
color grey70, ibuprofen
color lightblue, celecoxib
color lightorange, meloxicam
select ibp, ibuprofen and resn IBP
select cel, celecoxib and resn CEL
select mxm, meloxicam and resn MXM
show sticks, ibp
show sticks, cel
show sticks, mxm
color yellow, ibp
color magenta, cel
color orange, mxm
zoom ibp
hide everything
show surface, ibuprofen
color grey70, ibuprofen
set transparency, 0.5
select pocket_ibp, ibuprofen and byres (ibp expand 5)
show sticks, pocket_ibp
color cyan, pocket_ibp
show sticks, ibp
show sticks, cel
show sticks, mxm
color yellow, ibp
color magenta, cel
color orange, mxm
select pocket_cel, celecoxib and byres (cel expand 5)
select pocket_mxm, meloxicam and byres (mxm expand 5)
distance hb_ibp, ibp, pocket_ibp, mode=2
distance hb_cel, cel, pocket_cel, mode=2
distance hb_mxm, mxm, pocket_mxm, mode=2
color yellow, hb_ibp
color magenta, hb_cel
color orange, hb_mxm
set label_distance_digits, 0
show sticks, pocket_ibp
color cyan, pocket_ibp
zoom ibp
bg_color white
ray 1600, 1000
png three_drugs_comparison.png
save three_drugs_session.pse
```

---

## Discussion Questions

**1.** Which drug appeared to fill the COX-2 binding pocket most completely? Did this match the drug with the most hydrogen bonds?

**2.** The celecoxib–ibuprofen alignment gave an RMSD of ~0.3 Å, but the first attempt at aligning meloxicam gave an RMSD of ~33 Å. Why did the meloxicam alignment fail, and how did specifying `chain A` fix it? What does this tell you about always checking your alignment results before drawing conclusions?

**3.** If two drugs occupy partially different regions of the binding pocket, could they theoretically be used together? What might that treatment strategy be called?

**4.** Based purely on your visual observations today (before doing any PyRosetta calculations), which drug would you predict has the strongest binding energy — and why?

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **align** | PyMOL command that superimposes two structures to overlap as closely as possible |
| **RMSD** | Root Mean Square Deviation — measures how different two aligned structures are in Å |
| **Shape complementarity** | How well a drug's 3D shape fits the binding pocket — like a puzzle piece |
| **Lead optimisation** | The drug discovery process of refining a promising molecule to bind better and have fewer side effects |
| **Pharmacophore** | The set of chemical features a molecule must have to bind a specific protein |
| **Conserved residues** | Amino acids that appear in the binding pocket of multiple drug–protein complexes — usually the most critical for binding |
| **Binding selectivity** | How specifically a drug binds its target versus other proteins in the body |
| **Void space** | Empty space in the binding pocket not occupied by the drug — generally reduces binding strength |
| **COX-1 vs COX-2** | Two closely related enzymes. COX-2 causes inflammation; COX-1 protects the stomach. Celecoxib was designed to block COX-2 selectively to reduce stomach side effects |