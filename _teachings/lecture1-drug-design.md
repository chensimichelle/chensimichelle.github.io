---
layout: course
title: From Protein to Drug Target
description: >
  A lecture series introducing A-level biology students to computational drug design.
  Students learn the biological and computational foundations before running PyRosetta
  simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.
instructor: Michelle
year: Lecture 1 (2026.6)
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

## Slide Presentation — Lecture 1

The interactive slides for Lecture 1 are embedded below.
Use the **arrow keys** or the on-screen controls to navigate.
Press **S** to open speaker notes (teaching cues and analogies).
Press **F** to go full screen.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 2rem;">
  <iframe
    src="{{ '/assets/slides/lecture1-drug-design.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
           border: 1px solid #ddd; border-radius: 8px;"
    allowfullscreen>
  </iframe>
</div>

> **Can't see the slides?** All slide content is written out in full below.

---

## Lecture Notes

The written notes below mirror every slide. Use them for revision,
for accessibility, or if the embedded presentation does not load.

---

### Slide 1 — Drug Design with Computers: How Do We Turn a Protein into a Medicine?

**Lecture 1 — From Protein to Drug Target**

> "It costs on average £1.5 billion and 10–15 years to bring one drug to market.
> Computational biology is changing that."

*Teaching note:* Hold up a packet of ibuprofen and tell students:
*"The molecule in this tablet was designed to fit into a specific cavity in one protein
in your body. We are going to simulate that interaction on a computer."*

---

### Slide 2 — You already know more than you think

This module builds directly on your A-level biology knowledge.

| You already know | We will build on this |
|---|---|
| Proteins are chains of amino acids | The sequence folds into a precise 3D shape |
| Enzymes have active sites | The shape of that site determines which molecules can bind |
| Inhibitors block enzyme activity | We can *design* molecules to be better inhibitors |
| Mutations change protein sequence | A single amino acid change can make a drug stop working |

*Activation exercise (2 minutes):* Turn to your partner and name one enzyme inhibitor
you have heard of. Expected answers: statins, antibiotics, aspirin, ACE inhibitors.

---

### Slide 3 — One question drives everything we will do

> "A disease is caused by a protein working too well.
> How do we design a molecule to switch it off?"

Every project in this module answers one of these three questions:

- Which **protein** do we target?
- **Where** exactly on that protein does the molecule need to bind?
- What **shape and chemistry** does the molecule need to have?

This is your mental map for the entire term.

---

### Slide 4 — The sequence is the blueprint; the shape is the machine

A protein's primary structure (the amino acid sequence) is just a linear chain — the blueprint.
When that chain folds, it creates a precise three-dimensional machine.

> **Analogy:** Think of a Swiss Army knife. The steel it is made from is the sequence.
> The exact shape of each blade — the hook, the scissors, the flat blade — is the 3D structure.
> A screwdriver that has been bent out of shape no longer works, even though it is made of
> exactly the same steel. Proteins are the same: a misfolded protein cannot do its job.

The same protein chain **always** folds into the same 3D shape. That shape determines
everything the protein can do — including whether a drug can bind to it.

---

### Slide 5 — The 20 amino acids have very different personalities

We will not list all 20 here. What matters for drug design is the **side chain** —
the part that varies between amino acids. Side chains are what make each amino acid
different, and it is the side chains that determine how a drug binds.

| Amino acid | Property | Drug design relevance |
|---|---|---|
| **Alanine (Ala, A)** | Tiny, non-polar | Used as a probe in alanine scanning — its side chain does almost nothing |
| **Phenylalanine (Phe, F)** | Large, hydrophobic aromatic ring | Likes to sit in hydrophobic pockets — often lines binding sites |
| **Arginine (Arg, R)** | Positively charged | Forms strong interactions with negatively charged drug molecules |
| **Serine (Ser, S)** | Polar, has -OH group | Forms hydrogen bonds — important for aspirin's covalent binding to COX-2 |

*Foreshadowing Projects 1 and 5:* In our simulations, we will swap every amino acid
for Alanine one at a time. Alanine is our "Swiss Army blank" — it switches off one
residue's contribution at a time so we can measure what that residue was doing.

---

### Slide 6 — Disease often begins with a protein doing its job too well

**Normal state:**
Stimulus → Enzyme active → Normal amount of product → Healthy outcome

**Disease state:**
Overactivation → Enzyme too active → Too much product → Inflammation / infection

**Example 1 — COX-2 and inflammation:**
COX-2 (Cyclooxygenase-2) converts arachidonic acid into prostaglandins, which cause
pain and inflammation. When tissue is damaged, COX-2 is overproduced, leading to chronic
inflammation and pain. COX-2 is the target of ibuprofen, and the protein we will dock
drugs onto in Projects 3 and 4.

**Example 2 — β-Lactamase and antibiotic resistance:**
Bacteria produce an enzyme called β-Lactamase that destroys penicillin by breaking its
ring structure. Natural selection has simply favoured bacteria that happen to produce this
enzyme. This is the protein we will model in Project 6.

---

### Slide 7 — Not every protein is a good drug target

Three criteria determine whether a protein is worth targeting:

**1. Essential to the disease process.**
If you switch it off, the disease gets better. Blocking COX-2 relieves pain. ✓

**2. Has a binding pocket the drug can physically fit into.**
Many proteins are flat on the surface. Good drug targets have a deep, well-defined cavity.
The COX-2 binding site is a long hydrophobic channel — an ideal pocket. ✓

**3. Different enough from healthy human proteins.**
This prevents serious side effects. β-Lactamase exists only in bacteria; humans do not
produce it. ✓

> **Counterexample:** Early cancer drugs targeted rapidly dividing cells — which includes
> cancer cells, but also hair follicle cells. This is why chemotherapy causes hair loss.
> Modern targeted drugs look for proteins unique to the cancer cell: a far more precise strategy.

---

### Slide 8 — Drugs work by getting in the way

**Competitive inhibition:**
The drug resembles the natural substrate. It occupies the active site. The enzyme cannot
process the real substrate because the drug is already sitting there.

**Non-competitive inhibition:**
The drug binds to a separate allosteric site elsewhere on the protein. This causes the
active site to change shape slightly — the real substrate no longer fits, even though the
drug is not physically blocking the active site.

Both types work by **changing the geometry** of the active site.
A drug that is the wrong shape simply does not fit, no matter how good its chemistry is.

> **Concrete numbers:** Ibuprofen is approximately 0.5 nanometres across.
> The COX-2 binding site is about 0.6 nanometres wide at its narrowest point.
> If ibuprofen were even slightly larger, it would not fit at all.
> This is why drug design requires atomic-level precision.

---

### Slide 9 — The Protein Data Bank (PDB)

The **Protein Data Bank** is a global, open-access database of experimentally determined
protein structures. As of 2025, it holds over 220,000 structures. Every entry is freely
available to anyone in the world.

**How structures are deposited:**

1. Scientists grow protein crystals in the laboratory
2. X-rays are fired through the crystal
3. The diffraction pattern is used to calculate atomic positions
4. The structure (3D coordinates of every atom) is deposited in the PDB

**What a PDB entry contains:**
- A unique 4-character ID — e.g. `1LYZ` for Lysozyme, `4PH9` for COX-2 + Ibuprofen
- The 3D coordinates (x, y, z) of every atom in the protein
- The full amino acid sequence
- The experimental resolution in Ångströms
- Any bound ligands (drug molecules, cofactors, water)

Every simulation in this module begins with a real PDB structure. You are not working with
theoretical proteins — you are working with proteins that have been physically crystallised
and measured in a laboratory.

*Live demo:* Visit [https://www.rcsb.org/3d-view/1LYZ](https://www.rcsb.org/3d-view/1LYZ)
to rotate a real Lysozyme structure in your browser. This is the protein you will use in
Projects 1 and 2.

---

### Slide 10 — Resolution: how sharp is the picture?

Resolution tells you how precisely the atomic positions in a structure were measured.
It is expressed in **Ångströms (Å)** — a lower number means a sharper, more precise structure.

Think of three photographs of the same building: one perfectly sharp, one slightly blurry,
one very blurry. Rosetta's scoring function is sensitive to this sharpness — higher-quality
structures generally receive lower (better) energy scores.

| Resolution | Quality | What you can see |
|---|---|---|
| < 1.5 Å | Exceptional | Individual hydrogen atoms sometimes visible |
| 1.5–2.5 Å | Good | All heavy atoms reliably placed — good for drug design |
| 2.5–3.5 Å | Moderate | Backbone reliable, some side chain uncertainty |
| > 3.5 Å | Low | Use with caution — atomic positions approximate |

In **Project 2**, you will download five different crystal structures of Lysozyme and rank
them by Rosetta energy score. You will find that higher-resolution structures tend to produce
better scores. Choosing the right starting structure is step one of every real drug design project.

> "Garbage in, garbage out." If your starting structure has the binding site geometry wrong
> by 0.3 Å, your predicted binding energy will be wrong too.

---

### Slide 11 — Ångströms: the unit of atomic distance

**1 Ångström (Å) = 0.1 nanometres = 10⁻¹⁰ metres**

Scale reference from large to small:

```
1 mm (flea) → 1 µm (bacterium) → 1 nm (protein) → 1 Å (bond length) → 0.1 Å (nucleus)
```

Distances you will encounter in the projects:

- A carbon–carbon bond is **1.54 Å**
- A hydrogen bond is **1.8–3.5 Å**
- The COX-2 binding channel is roughly **6–8 Å** wide
- The ibuprofen molecule is about **8 Å** across its longest axis

*Practical rule for Project 4:* We define "contact" between a drug and a protein residue
as any atom-to-atom distance less than **5.0 Å**. This is the van der Waals contact zone —
close enough for atoms to feel each other's presence. Beyond 8 Å, interactions are too
weak to contribute meaningfully to binding.

---

### Slide 12 — The Drug Discovery Pipeline

Developing a new drug takes 10–15 years from target identification to approval.
Computational screening dramatically compresses the early stages.

```
Target ID → [COMPUTATIONAL SCREENING] → Hit ID → Lead Optimisation → Clinical Trials → Approval
 (2 yrs)         (weeks–months)          (1–2 yrs)    (3–4 yrs)          (6–7 yrs)
```

| Without computational docking | With computational docking |
|---|---|
| Synthesise drug in lab (weeks, £10,000+) | Screen thousands of candidates digitally (hours, nearly free) |
| Test on cells or animals (months) | Only test the top candidates in the lab |
| >90% of candidates fail at this stage | Dramatically reduces the time and failure rate |

**Real-world examples:**
- Computational docking helped identify COVID-19 drug candidates within weeks of the virus's structure being published.
- HIV protease inhibitors — antiretroviral drugs that transformed HIV from a death sentence to a manageable condition — were designed using structural computational methods.
- Imatinib (Gleevec), a leukaemia drug, was designed by targeting a specific protein conformation identified through structural biology.

---

### Slide 13 — Your Computational Pipeline (Roadmap)

Here is what you will build across the six projects, and the scientific question each one answers:

| Project | What we do | The question it answers |
|---|---|---|
| **Project 1** | Measure Lysozyme stability; mutate residues | How stable is this protein, and which amino acids matter most? |
| **Project 2** | Compare 5 Lysozyme crystal structures | Which structure is highest quality to use as a starting point? |
| **Project 3** | Dock Ibuprofen, Celecoxib, Meloxicam into COX-2 | Which drug binds most tightly? |
| **Project 4** | Map the COX-2 binding site | Which residues are touching the drug, and what chemistry do they have? |
| **Project 5** | Alanine scan of the COX-2 binding site | Which residues are essential for the drug to bind? |
| **Project 6** | Model resistance mutations in β-Lactamase | How do bacteria evolve to make our antibiotics fail? |

> "By the end of Project 6, you will have run the same computational pipeline that
> professional drug discovery teams use. The tools differ in scale — real projects use
> supercomputers — but the scientific logic is identical."

---

### Slide 14 — Summary and Preparation

**Key takeaways from Lecture 1:**

- A drug works by binding to a specific protein and disrupting its function
- The protein's 3D shape — not just its sequence — determines what can bind to it
- A good drug target is essential to disease, has a binding pocket, and differs from healthy human proteins
- The **Protein Data Bank** holds over 220,000 real, experimentally determined 3D protein structures
- **Resolution (Å)** tells you how precisely a structure was measured — lower Å means better data
- Computational docking screens thousands of drug candidates in hours, saving years of laboratory work

**Preparation for Lecture 2:**

> Think about this before our next session:
> If you unfold a protein — stretch it out into a straight line — does that require energy,
> or does energy get released? Why?

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Drug target** | A protein whose activity, when blocked, reduces or eliminates a disease |
| **Binding site** | The specific pocket or cavity on a protein where a drug molecule physically docks |
| **Competitive inhibitor** | A molecule that occupies the active site, directly competing with the natural substrate |
| **Non-competitive inhibitor** | A molecule that binds elsewhere on the protein, changing the active site shape |
| **Protein Data Bank (PDB)** | A global open-access database of over 220,000 experimentally determined protein structures |
| **PDB ID** | A unique 4-character code identifying one structure in the Protein Data Bank (e.g. `1LYZ`) |
| **Resolution (Å)** | How precisely atomic positions were measured in a crystal structure. Lower = better |
| **Ångström (Å)** | Unit of length equal to 10⁻¹⁰ metres; used for atomic-scale distances |
| **Side chain** | The variable part of an amino acid that gives it its chemical character |
| **Ligand** | A small molecule (such as a drug) that binds to a protein |
| **X-ray crystallography** | The experimental technique used to determine protein structures at atomic resolution |
| **Computational docking** | Computationally predicting how a drug molecule fits into a protein binding site |
