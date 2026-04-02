---
layout: course
title: Energy, Stability and the Rosetta Score
description: >
  A lecture series introducing A-level biology students to computational drug design.
  Students learn the biological and computational foundations before running PyRosetta
  simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.
instructor: Michelle
year: Lecture 2 (2026.6)
term: "2026 Summer Camp"
location: "SUIS"
time: "2026.6"
course_id: drug-design-pyrosetta
schedule:
  - week: 1
    topic: "Lecture 1 — From Protein to Drug Target"
    description: >
      Proteins as 3D machines, enzyme inhibition, drug target criteria,
      the Protein Data Bank, resolution, and Ångströms.
    materials:
      - name: Slides
        url: /assets/slides/lecture1-drug-design.html

  - week: 2
    topic: "Lecture 2 — Energy, Stability and the Rosetta Score"
    description: >
      Non-covalent interactions, free energy, what Rosetta measures,
      REU explained, normalisation by residue count, and the baseline concept.
    materials:
      - name: Slides
        url: /assets/slides/lecture2-energy-stability.html

  - week: 3
    topic: "Lecture 3 — The Binding Site and Protein-Ligand Docking"
    description: >
      Binding pockets, shape and chemical complementarity, the subtraction
      method for binding energy, and comparing drug candidates.
    materials:
      - name: Slides
        url: /assets/slides/lecture3-docking.html

  - week: 4
    topic: "Lecture 4 — Mutations, Hot Spots and Alanine Scanning"
    description: >
      Point mutations, wild type vs mutant, ΔG and ΔΔG, hot spot residues,
      and an introduction to structure-activity relationships.
    materials:
      - name: Slides
        url: /assets/slides/lecture4-mutations.html

  - week: 5
    topic: "Lecture 5 — Antibiotic Resistance and the Drug Design Cycle"
    description: >
      Resistance mechanisms, β-lactamase, clinically documented mutations,
      combination therapy, and the full computational pipeline.
    materials:
      - name: Slides
        url: /assets/slides/lecture5-resistance.html
---

## Slide Presentation — Lecture 2

The interactive slides for Lecture 2 are embedded below.
Use the **arrow keys** or the on-screen controls to navigate.
Press **S** to open speaker notes (teaching cues and analogies).
Press **F** to go full screen.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 2rem;">
  <iframe
    src="{{ '/assets/slides/lecture2-energy-stability.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
           border: 1px solid #ddd; border-radius: 8px;"
    allowfullscreen>
  </iframe>
</div>

> **Can't see the slides?** All slide content is written out in full below.

---

## Lecture Notes

---

### Slide 1 — Energy, Stability and the Rosetta Score

**Lecture 2 — From Physical Forces to a Single Number**

Opening question (show of hands):

> "If you unfold a protein — stretch it out into a straight line — does that require energy,
> or does energy get released? Why?"

The correct answer: unfolding **requires energy input** — meaning the folded state is lower
energy and more stable. This is the conceptual foundation for everything in this lecture.

---

### Slide 2 — Why does stability matter for drug design?

**Stable protein ✓**
- Maintains its 3D shape under physiological conditions
- Binding site geometry is consistent and predictable
- Drug binds reliably every time — good drug target

**Unstable protein ✗**
- Fluctuates between multiple shapes
- Binding site geometry changes unpredictably
- Drug may bind sometimes but not others — unreliable drug target

> Before we can design a drug to fit a binding site, we need to know that binding site
> holds its shape. Measuring stability is step zero of drug design.

In **Project 1** you will measure the stability of Lysozyme and test how single amino acid
changes affect that stability. This slide explains why that measurement is meaningful.

---

### Slide 3 — Four forces hold every protein together

**1. Van der Waals interactions**
Weak attractive forces between any two atoms that are very close together (3.5–5.0 Å).
Like two pieces of cling film pressed together — individually almost nothing, but thousands
of them across a whole protein surface add up to something substantial.

**2. Hydrogen bonds**
An attraction between a hydrogen atom attached to N or O, and another N or O nearby
(1.8–3.5 Å). Like a firm handshake — directional, specific, and relatively strong compared
to van der Waals.

**3. Electrostatic interactions**
Attraction between oppositely charged amino acids (e.g. positive Arginine near negative
Aspartate). Like opposite poles of a magnet — they pull toward each other across a slightly
longer range than hydrogen bonds.

**4. The hydrophobic effect**
Non-polar amino acids cluster together in the protein core to avoid contact with water.
Like oil in water — they group together not because they attract each other strongly, but
because water molecules strongly prefer to hydrogen-bond with each other rather than
surround non-polar molecules.

Rosetta's scoring function calculates all four of these forces simultaneously, for every
pair of atoms in the protein. The total is the Rosetta score.

---

### Slide 4 — Proteins fold because the folded state is more stable

An energy diagram with two states:

- **Unfolded** — high energy, unstable
- **Folded** — low energy, stable

Three key points:

1. **Lower energy = more stable.** The folded protein sits in an energy valley. It needs energy input to unfold.
2. **The depth of the valley = stability.** A very stable protein has a deep valley. A marginally stable one has a shallow valley and unfolds more easily under stress.
3. **Mutations can change the valley depth.** In Project 1 we ask: does this mutation make the valley deeper (more stable) or shallower (less stable)?

> **Concrete example:** Lysozyme is found in egg whites and human tears. It can withstand
> temperatures up to 75°C before unfolding. That stability comes from a particularly
> favourable network of hydrogen bonds and hydrophobic contacts throughout its core.
> In Project 1 you will see exactly which amino acids contribute most to that stability.

---

### Slide 5 — Scientists measure stability using free energy — ΔG

ΔG (delta G) tells you whether a process is favourable or not.

| ΔG | Meaning | Example |
|---|---|---|
| **Negative (ΔG < 0)** | Favourable — happens spontaneously | Protein folding, drug binding to its target |
| **Positive (ΔG > 0)** | Unfavourable — requires energy input | Protein unfolding, pulling a drug out of its binding site |

**Important caveat:** Rosetta does not calculate true thermodynamic free energy — it uses
an approximation that correlates well with real stability measurements but is not an exact
free energy. This is why we use **REU** (Rosetta Energy Units) rather than kJ/mol.

---

### Slide 6 — Rosetta's scoring function: a stability calculator

> "Rosetta adds up all non-covalent interactions across every atom in the protein and
> produces a single number representing overall stability."

| Component | What it measures |
|---|---|
| `fa_atr` | Attractive van der Waals forces between atom pairs |
| `fa_rep` | Repulsive forces when atoms are too close (clashes) |
| `hbond_sc` | Hydrogen bonds between side chains |
| `fa_elec` | Electrostatic interactions between charged residues |
| `fa_sol` | Solvation — how much each residue interacts with water |

You do not need to memorise these terms. The key concept is that the score is a sum of
many physical contributions — the `get_fa_scorefxn()` function you call in Project 1
stands for "full atom scoring function" and examines every single atom in the protein.

---

### Slide 7 — REU: the unit you will see in every project

**The key rule: Lower REU = more stable protein. More negative = better.**

| Protein size | Typical Rosetta score |
|---|---|
| Small (~100 residues, e.g. Lysozyme) | −1,000 to −2,000 REU |
| Medium (~300 residues) | −3,000 to −6,000 REU |
| Large (~500+ residues) | −8,000 REU and below |

When you run Cell 3 of Project 1, you will see a number like −1,742.38 REU printed on
your screen. That number is the sum of every van der Waals contact, every hydrogen bond,
every electrostatic interaction in Lysozyme — a single number capturing the entire physical
chemistry of a real protein.

---

### Slide 8 — Score per residue: making fair comparisons

A larger protein always has a more negative raw score simply because it has more atoms.
Dividing by residue count makes comparisons fair.

| Structure | Raw score | Residues | Score per residue |
|---|---|---|---|
| Lysozyme (1LYZ) | −1,800 REU | 129 | **−13.95** |
| Lysozyme variant (2LZT) | −2,400 REU | 200 | **−12.00** |

2LZT looks better by raw score — but per residue it is actually the weaker structure.
Normalisation tells the true story.

In **Project 2** you will download five different crystal structures of Lysozyme and rank
them by score per residue. This normalisation step is what makes the comparison valid.

---

### Slide 9 — Every measurement needs a reference point

A **baseline** is the original, unmodified measurement that all results are compared against —
the same idea as a control group in a science experiment.

In Project 1, before mutating any amino acid, we score the original Lysozyme:

```python
original_score = scorefxn(pose)   # this is the baseline
difference = mutant_score - original_score
```

- **Positive difference** → mutation made the protein less stable (destabilising)
- **Negative difference** → mutation made the protein more stable (stabilising)

> **Analogy:** Measuring your running speed after changing shoes only means something if
> you know your original time. The original time is your baseline. The difference tells
> you whether the new shoes helped or hurt.

---

### Slide 10 — Project 1 in one picture

The full computational pipeline for Project 1:

1. Load Lysozyme (1LYZ)
2. Score with `get_fa_scorefxn()` → record as baseline
3. Clone the protein
4. Mutate one residue to Alanine
5. Score the mutant → calculate difference (mutant − original)
6. Positive → Destabilising &nbsp;|&nbsp; Negative → Stabilising
7. Repeat for 7 positions → plot bar chart

Red bars = destabilising mutations (the protein needs that amino acid to stay stable).
Green bars = stabilising mutations (removing that amino acid actually helps). The height
of each bar tells you how important that position is.

**Preview of Project 2:** In Project 2 you apply the same scoring logic — but instead of
mutating one protein, you download five different crystal structures of the same protein
and compare their scores. You are asking: which experimentalist did the best job solving
this structure?

---

### Slide 11 — Summary and Preparation

**Key takeaways from Lecture 2:**

- Proteins are stable because the **folded state has lower free energy** than the unfolded state
- Four non-covalent forces hold proteins together: **van der Waals, hydrogen bonds, electrostatics, and the hydrophobic effect**
- **ΔG < 0** means a process is favourable — both protein folding and drug binding have negative ΔG
- The **Rosetta scoring function** sums all non-covalent interactions across every atom to produce a single stability score in REU
- **Lower REU = more stable** — more negative is always better in Rosetta
- Dividing by residue count gives a **normalised score** for fair comparisons between proteins of different sizes

**Preparation for Lecture 3:**

> "Ibuprofen is a non-polar molecule with a large hydrophobic region. The COX-2 binding
> site is also largely hydrophobic. Why does this chemical match matter? What would happen
> if you tried to fit a highly charged, polar drug into a hydrophobic pocket?"

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Free energy (ΔG)** | A measure of whether a process is favourable. ΔG < 0 = spontaneous; ΔG > 0 = requires energy input |
| **Van der Waals interaction** | Weak attractive forces between atoms that are 3.5–5.0 Å apart |
| **Hydrogen bond** | Attraction between a hydrogen on N or O and another N or O (1.8–3.5 Å) |
| **Electrostatic interaction** | Attraction between oppositely charged amino acids |
| **Hydrophobic effect** | The tendency of non-polar groups to cluster together to avoid water |
| **REU** | Rosetta Energy Units — the unit of Rosetta scores. Lower (more negative) = more stable |
| **Scoring function** | A mathematical formula that estimates a protein's stability by summing all non-covalent interactions |
| **Baseline** | The original, unmodified measurement used as a reference for all comparisons |
| **Normalisation** | Dividing a raw value by a size measure (e.g. residue count) to allow fair comparisons |
| **Score per residue** | Rosetta energy score divided by the number of amino acids — used to compare structures of different sizes |
| **`get_fa_scorefxn()`** | PyRosetta function that creates the full-atom scoring function |
| **Destabilising mutation** | A mutation that increases the Rosetta score (positive difference from baseline) |
| **Stabilising mutation** | A mutation that decreases the Rosetta score (negative difference from baseline) |
