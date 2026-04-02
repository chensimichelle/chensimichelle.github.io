---
layout: course
title: The Binding Site and Protein-Ligand Docking
description: >
  A lecture series introducing A-level biology students to computational drug design.
  Students learn the biological and computational foundations before running PyRosetta
  simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.
instructor: Michelle
year: Lecture 3 (2026.6)
term: 2026 Summer Camp
location: SUIS
time: 2026.6
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

## Slide Presentation — Lecture 3

The interactive slides for Lecture 3 are embedded below.
Use the **arrow keys** or the on-screen controls to navigate.
Press **S** to open speaker notes (teaching cues and analogies).
Press **F** to go full screen.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 2rem;">
  <iframe
    src="{{ '/assets/slides/lecture3-docking.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
           border: 1px solid #ddd; border-radius: 8px;"
    allowfullscreen>
  </iframe>
</div>

> **Can't see the slides?** All slide content is written out in full below.

---

## Lecture Notes

---

### Slide 1 — The Binding Site and Protein-Ligand Docking

**Lecture 3 — Shape, Chemistry and Binding Energy**

Opening question:

> "Ibuprofen is a non-polar molecule with a large hydrophobic region. The COX-2 binding
> site is also largely hydrophobic. Why does this chemical match matter? What would happen
> if you tried to fit a highly charged, polar drug into a hydrophobic pocket?"

Correct idea: a polar drug in a hydrophobic pocket would be energetically unfavourable —
like trying to dissolve oil in water.

---

### Slide 2 — The binding site is where the drug physically docks

A **binding site** (also called an active site or binding pocket) is a cavity or groove
on the protein surface where a small molecule can settle and interact with surrounding
amino acids. The drug does not interact with the whole protein — only with the
**10–20 amino acids** that line this pocket.

Three things must all match for binding to occur:
1. **Shape** — the drug must fit the pocket geometry
2. **Size** — not too large, not too small
3. **Chemistry** — matching polarity and charge between drug and pocket

In **Project 4** you will identify every amino acid within 5 Å of Ibuprofen inside
COX-2 — these residues form the binding site.

---

### Slide 3 — Rule 1: the drug must fit the shape of the pocket

**Shape complementarity** — the drug must physically fit the pocket geometry.

| Situation | Result |
|---|---|
| Drug too large | Cannot enter the pocket — steric clash |
| Drug too small | Fits but makes few contacts — weak binding |
| Wrong shape, right size | Some contacts made but poor fit — moderate binding |
| Matches pocket shape precisely | Maximum contacts — strong binding ✓ |

**Induced fit:** A real binding site is not a rigid lock — the protein can flex slightly
to accommodate a drug that is close to the right shape.

**Concrete numbers:** The COX-2 binding channel is 6–8 Å wide at its narrowest point.
Ibuprofen is approximately 8 Å across its longest axis — a near-perfect fit. Celecoxib
is larger and requires a slightly different part of the channel.

---

### Slide 4 — Rule 2: the drug's chemistry must match the pocket

**Chemical complementarity** — the chemistry of the drug must match the chemistry of the pocket.

| Binding site character | Key residues | Drug should have |
|---|---|---|
| Hydrophobic pocket | Phe, Val, Ile, Leu, Met | Non-polar groups, aromatic rings |
| Polar region | Ser, Thr, Asn, Gln | H-bond donors or acceptors (-OH, -NH₂) |
| Positively charged region | Arg, Lys, His | Negatively charged group on drug |
| Negatively charged region | Asp, Glu | Positively charged group on drug |

> **Analogy:** Shape complementarity is like finding a key that fits the lock.
> Chemical complementarity is like making sure the key is made of the right material.
> A key made of butter might fit the lock perfectly in shape — but it will fail to turn it.

In **Project 4** you will classify every binding site residue as hydrophobic, polar,
positively or negatively charged. The chemical profile you produce tells you exactly
what kind of drug fits best.

---

### Slide 5 — COX-2: a real binding site example

COX-2 (Cyclooxygenase-2) converts arachidonic acid into prostaglandins, which cause
pain and inflammation. Blocking its active site prevents this — the mechanism of action
of NSAIDs (non-steroidal anti-inflammatory drugs).

The COX-2 active site is a long, narrow hydrophobic channel lined predominantly with
non-polar residues. One key polar residue — Serine 530 — is the site where Aspirin
covalently bonds (a different mechanism from non-covalent NSAIDs).

The three drugs you will compare in Project 3:

| Drug | Brand name | Character |
|---|---|---|
| **Ibuprofen** | Advil | Small, non-polar, flexible |
| **Celecoxib** | Celebrex | Larger, selective COX-2 inhibitor, sulfonamide group |
| **Meloxicam** | Mobic | Intermediate size, thiazine ring system |

All three are approved COX-2 inhibitors — they all bind and they all work. But they
bind with different strengths, making different contacts. Project 3 will quantify
those differences.

---

### Slide 6 — Protein-ligand docking: predicting how a drug fits

**Protein-ligand docking** is a computational technique that predicts how a small
molecule (the ligand) will fit into a protein's binding site, and how strongly it will bind.

Docking predicts two things:
1. **Pose** — the orientation and position of the drug inside the binding site
2. **Binding energy** — how tightly the drug binds

**What we do in Projects 3 and 4:**
The drug is already inside the protein — co-crystallised in the PDB structure. We are
scoring a known, experimentally confirmed pose, not predicting a new one. This is
simpler and more reliable than full de novo docking.

**Real-world power:** Screen thousands of candidates digitally in hours. Only synthesise
and test the top scorers in the lab. Dramatically reduces the >90% failure rate of
untargeted drug development.

---

### Slide 7 — Binding energy: the number that ranks drugs

**The subtraction method:**

```
Binding Energy = Complex Score − (Protein Score + Ligand Score)
```

More negative binding energy = tighter binding = better drug candidate.

**Worked example with Ibuprofen:**

| Component | Score |
|---|---|
| Complex (COX-2 + Ibuprofen) | −1,820 REU |
| Protein alone (COX-2) | −1,768 REU |
| Ibuprofen alone | −25 REU |
| **Binding energy** | **−1,820 − (−1,768 + −25) = −27 REU** |

That −27 REU is the energy gained by bringing the drug and protein together — all
the van der Waals contacts, hydrogen bonds, and hydrophobic interactions that form
when Ibuprofen settles into the COX-2 pocket.

---

### Slide 8 — Interpreting binding energy values

**Negative binding energy (e.g. −27 REU):**
The drug genuinely binds. Energy is released when the complex forms. The more negative,
the tighter the binding. This is what you want for a drug candidate.

**Near-zero binding energy (e.g. −2 REU):**
The drug barely binds. Almost no energy is gained. Unlikely to be therapeutically useful
at normal doses.

**Positive binding energy (e.g. +8 REU):**
Binding is energetically unfavourable — the complex is less stable than the separated
components. This molecule does not bind under physiological conditions.

> **Important:** Binding energy is one factor, not the only factor. A drug also needs
> bioavailability (reaching its target in the body), selectivity (avoiding side effects),
> and chemical stability. Docking tells you about binding — the rest requires lab and
> clinical testing.

---

### Slide 9 — Structure quality affects every docking result

If the binding site geometry in your crystal structure is wrong by even 0.3 Å, your
calculated binding energy will be wrong too.

| Source of error | Effect on docking |
|---|---|
| Low resolution (> 2.5 Å) | Side chain positions uncertain — binding site shape approximate |
| Missing residues | Parts of the binding site absent — contacts not calculated |
| Crystal contacts | Packing forces in the crystal may distort the binding site slightly |

**Why Project 2 comes before Project 3:** In Project 2 you rank five Lysozyme structures
by quality. In real drug discovery, choosing the highest-quality starting structure always
happens before any docking. *Garbage in, garbage out* — the best scoring function cannot
compensate for a poor starting structure.

---

### Slide 10 — The contact shell: which residues touch the drug?

A **contact residue** is any amino acid with at least one atom within **5.0 Å** of any
atom of the drug — these are the residues physically touching the drug and contributing
to its binding energy.

| Distance | Interaction type |
|---|---|
| < 2.0 Å | Clash — atoms overlapping (problem) |
| 2.0–3.5 Å | Covalent bond or strong hydrogen bond |
| 3.5–5.0 Å | Van der Waals contact — atoms touching ✓ |
| 5.0–8.0 Å | Close neighbourhood — weak or indirect |
| > 8.0 Å | Too far to interact meaningfully |

A binding site may have 200 residues nearby, but only **12–15 are actually touching
the drug**. Those are the ones that matter for binding energy, drug design, and
resistance mutations — and the target of Project 4.

**Preview of Project 5:** Once you know which residues touch the drug, the natural
next question is: which of those residues are most important? That is exactly what
Project 5 — alanine scanning — will answer.

---

### Slide 11 — Summary and Preparation

**Key takeaways from Lecture 3:**

- A **binding site** is a cavity on the protein surface — shape and chemistry both determine whether binding occurs
- **Shape complementarity** — the drug must physically fit the pocket geometry
- **Chemical complementarity** — hydrophobic drug regions face hydrophobic residues; polar faces polar; charged faces oppositely charged
- **Binding energy** = Complex score − (Protein score + Ligand score). More negative = tighter binding
- Structure quality matters — a poor crystal structure gives unreliable docking results
- **Contact residues** are within 5.0 Å of the drug — typically 12–15 residues form the functional binding site

**Preparation for Lecture 4:**

> "In Project 5 we will mutate every binding site residue to Alanine and measure how
> much each mutation weakens drug binding. Think about this: if you removed the side
> chain of a hydrophobic residue lining the binding site, what would happen to the
> drug's binding energy? Why?"

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Binding site** | A cavity on the protein surface where a drug physically docks and interacts with surrounding amino acids |
| **Shape complementarity** | The geometric match between the drug's shape and the binding site's shape |
| **Chemical complementarity** | The match of chemical properties (polarity, charge) between drug and binding site |
| **Induced fit** | The slight conformational change a protein makes to better accommodate a binding ligand |
| **Ligand** | A small molecule (such as a drug) that binds to a protein |
| **Docking** | Computationally predicting the pose and binding energy of a drug in a protein binding site |
| **Pose** | The specific orientation and position of a drug inside a binding site |
| **Binding energy** | Energy released when a drug binds. Calculated as: Complex − (Protein + Ligand). More negative = tighter |
| **Subtraction method** | The approach of computing binding energy by subtracting the scores of the parts from the whole |
| **Contact residue** | An amino acid with at least one atom within 5.0 Å of the drug |
| **Bioavailability** | How well a drug is absorbed and reaches its target in the body |
| **Steric clash** | When two atoms are forced too close together — energetically very unfavourable |
| **COX-2** | Cyclooxygenase-2 — an enzyme that produces prostaglandins; the target of NSAIDs like ibuprofen |
| **NSAID** | Non-steroidal anti-inflammatory drug — a class of drugs that inhibit COX enzymes |
