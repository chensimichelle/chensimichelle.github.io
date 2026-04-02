---
layout: course
title: Antibiotic Resistance and the Drug Design Cycle
description: >
  A lecture series introducing A-level biology students to computational drug design.
  Students learn the biological and computational foundations before running PyRosetta
  simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.
instructor: Michelle
year: Lecture 5 (2026.6)
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

## Slide Presentation — Lecture 5

The interactive slides for Lecture 5 are embedded below.
Use the **arrow keys** or the on-screen controls to navigate.
Press **S** to open speaker notes (teaching cues and analogies).
Press **F** to go full screen.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 2rem;">
  <iframe
    src="{{ '/assets/slides/lecture5-resistance.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
           border: 1px solid #ddd; border-radius: 8px;"
    allowfullscreen>
  </iframe>
</div>

> **Can't see the slides?** All slide content is written out in full below.

---

## Lecture Notes

---

### Slide 1 — Antibiotic Resistance and the Drug Design Cycle

**Lecture 5 — From Resistance to Next-Generation Design**

Opening statistic:

> "In 2019, antimicrobial-resistant infections killed 1.27 million people directly —
> more than HIV/AIDS or malaria that year. By 2050, resistance is projected to cause
> 10 million deaths annually if left unchecked."

Students now have the tools to understand exactly how this happens at the atomic level —
and how computational drug design is part of the response.

---

### Slide 2 — Resistance is evolution happening in real time

Bacteria do not become resistant because they are trying to survive. Resistance arises
through natural selection — a random mutation happens to give one bacterium an advantage.

**Step 1 — Random mutation:** In millions of bacteria, random mutations occur constantly.
Occasionally, one changes an amino acid in a way that reduces drug binding.

**Step 2 — Selection:** When antibiotics are present, bacteria without the resistance
mutation die. The one resistant bacterium survives, replicates, and within hours millions
of resistant bacteria exist where there were none before.

**Step 3 — Spread:** Resistant bacteria spread between patients, hospitals, and countries.
Some bacteria can pass resistance genes directly to others via horizontal gene transfer —
without needing to reproduce first.

> **Analogy:** A stadium of bacteria. Spray an antibiotic. 999,999 die. One, by pure
> chance, had a protective mutation. That one survivor is now the ancestor of the entire
> population. This is resistance arising.

---

### Slide 3 — One amino acid change is enough

A drug works by binding tightly to a protein. Resistance often means the protein has
changed — just enough to weaken drug binding, while still being able to do its
original job.

**The key tension in drug design:** You want your drug to bind tightly to specific
residues (high binding energy). But the more your drug depends on a small number of
residues, the more vulnerable it is to a single mutation at one of those residues.
This is the fundamental trade-off of targeted drug design.

**Why this is hard to prevent:** Only a handful of residues in any binding site are
hot spots for drug binding. But those same hot spots are often the positions where
a single mutation can confer resistance — the drug relies on them, and so does the
bacterium's escape strategy.

In **Project 6** you will take five clinically documented resistance mutations in
TEM-1 β-Lactamase and calculate exactly how much each one weakens inhibitor binding.

---

### Slide 4 — β-Lactamase: the antibiotic destroyer

**β-Lactam antibiotics** (penicillins, cephalosporins, carbapenems) are the most widely
prescribed class of antibiotics in the world. They block a bacterial enzyme needed to
build the cell wall — without a cell wall, bacteria cannot survive.

**β-Lactamase** is a bacterial enzyme that destroys β-Lactam antibiotics by breaking
the β-Lactam ring — the chemical structure that makes these drugs work. Once the ring
is broken, the antibiotic is inactive.

**The clinical response — inhibitor combinations:** Augmentin = Amoxicillin (antibiotic)
+ Clavulanic acid (β-Lactamase inhibitor). Many students will have taken this. Bacteria
have now evolved mutations in β-Lactamase that also weaken the binding of clavulanic
acid — resistance to the resistance fighter.

**Project 6 protein:** TEM-1 β-Lactamase (PDB: 1ZG4) is the most clinically prevalent
β-Lactamase. It is the protein you will work with in Project 6.

---

### Slide 5 — Five mutations found in real patients

| Mutation | Change | Mechanism of resistance |
|---|---|---|
| **M69L** | Met → Leu at 69 | Alters local pocket geometry near the binding site |
| **K73R** | Lys → Arg at 73 | Disrupts the active site catalytic mechanism |
| **S130G** | Ser → Gly at 130 | Destroys a key H-bond between Ser -OH and inhibitor carbonyl |
| **R244S** | Arg → Ser at 244 | Removes electrostatic interaction with inhibitor carboxylate |
| **N276D** | Asn → Asp at 276 | Introduces a negative charge near the binding site |

**Applying Lecture 4 to S130G:** Serine has an -OH group that forms hydrogen bonds.
Glycine has no side chain at all. That hydrogen bond to the inhibitor is gone — exactly
the kind of change you would predict to weaken binding in an alanine scan.

**Reading R244S:** Arginine at position 244 → Serine. Arginine is positively charged.
Serine is polar but uncharged. The electrostatic interaction with the inhibitor's
carboxylate group is eliminated. Project 6 will quantify how much binding energy that costs.

---

### Slide 6 — A good resistance mutation must do two things

**1. It must weaken drug binding:** The mutation must reduce inhibitor binding energy
enough that the drug can no longer block the enzyme at clinically achievable drug
concentrations. A mutation that only weakens binding by 1 REU may not be enough to
cause clinical resistance.

**2. It must preserve enzyme function:** The enzyme must still be able to destroy
β-Lactam antibiotics. A mutation that eliminates drug binding but also breaks the
enzyme is worthless to the bacterium. The most successful resistance mutations
selectively disrupt drug binding while leaving enzyme activity intact.

**Why resistance is constrained:** The binding site for the inhibitor overlaps with
the active site. Mutations that affect one tend to affect the other. This is good news
for drug designers — it means resistance is not unlimited. But evolution is patient,
and over millions of generations, bacteria find the rare mutations that thread this needle.

---

### Slide 7 — Three strategies to overcome resistance

**Strategy A — Recover the lost binding energy:**
Design a new drug that compensates for the lost interaction by forming stronger
interactions elsewhere — using hot spots not affected by the resistance mutation.

**Strategy B — Design around the mutation:**
Identify which hot spots are mutation-prone and which are stable. Design a new drug
that does not rely on vulnerable positions. Use alanine scan data from Project 5 to
find alternative hot spots to exploit.

**Strategy C — Combination therapy:**
Use two drugs targeting different binding sites simultaneously. Resistance to both
requires two independent mutations at once. The probability of a resistance mutation
at any position is roughly 10⁻⁷ per replication. For two simultaneous mutations:
(10⁻⁷)² = 10⁻¹⁴. In a bacterial infection with 10¹⁰ bacteria, one mutation is almost
inevitable — two simultaneous mutations are essentially impossible.

This is why HIV, tuberculosis, and many cancers are treated with drug cocktails rather
than single agents.

---

### Slide 8 — Your six projects tell one connected story

| Project | What you did | Scientific question |
|---|---|---|
| **Project 1** | Scored and mutated Lysozyme | Is this protein stable? Which residues matter? |
| **Project 2** | Ranked five crystal structures | Which structure is high enough quality to use? |
| **Project 3** | Docked three drugs into COX-2 | Which drug candidate binds most tightly? |
| **Project 4** | Mapped the COX-2 binding site | Which residues line the pocket and what chemistry? |
| **Project 5** | Alanine-scanned the binding site | Which residues are hot spots for drug binding? |
| **Project 6** | Modelled resistance mutations | How do clinical mutations weaken inhibitor binding? |

You started by learning to measure protein stability. You applied that to drug binding.
You mapped where the drug sits. You found which residues it depends on. Now you will
see what happens when bacteria evolve to disrupt exactly those residues. This is the
full drug discovery cycle — compressed into six projects.

---

### Slide 9 — Computation vs experiment: what each is good for

| Question | What computation tells you | What it cannot tell you |
|---|---|---|
| Does the drug bind? | Predicted binding strength in a static structure | Actual binding in a living cell |
| Which residues matter? | Predicted energetic contribution (ΔΔG) | Whether the mutant folds correctly in vivo |
| Will resistance emerge? | Predicted weakening of binding | Which mutations bacteria will actually evolve |
| Is the drug safe? | Nothing | Side effects, toxicity, metabolism |

**The key message:** Computation is fast, cheap, and screens thousands of possibilities.
Experiment is slow, expensive, and measures reality. The power comes from combining
them — using computation to decide which experiments are worth running, then using
experiments to validate and refine the computational predictions.

---

### Slide 10 — The drug design cycle never ends

The full pipeline your six projects have built:

1. Identify target protein
2. Choose highest-quality structure (Project 2)
3. Dock candidates → rank by binding energy (Project 3)
4. Map binding site chemistry (Project 4)
5. Identify hot spots via alanine scanning (Project 5)
6. **Model resistance mutations (Project 6)**
7. Redesign drug to engage stable hot spots → loop back to step 3

Every time a new drug is deployed, natural selection begins working on resistance.
Drug designers work proactively — using structural data and computational tools to
anticipate which mutations are coming and design drugs that stay effective even after
those mutations arise. The drug design cycle and the resistance cycle are locked in
a permanent arms race.

---

### Slide 11 — Summary: five lectures in five sentences

- **Lecture 1:** A drug works by binding to a specific protein — choosing the right target and the right crystal structure is the foundation of everything.
- **Lecture 2:** Rosetta measures protein stability as a sum of non-covalent forces — lower REU always means more stable.
- **Lecture 3:** Drug binding depends on shape and chemical complementarity — binding energy is the complex score minus the sum of its parts.
- **Lecture 4:** Alanine scanning identifies hot spot residues by measuring ΔΔG — the energetic cost of erasing each side chain's contribution.
- **Lecture 5:** Resistance arises when bacteria evolve mutations at hot spots — overcoming it requires designing drugs that engage stable, mutation-resistant positions.

> **Closing thought:** The proteins, mutations, and drugs in this module are all real.
> The structures come from real crystallography. The resistance mutations come from
> real patients. The computational methods are used in real pharmaceutical research.
> You have not been doing exercises — you have been doing science.

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Antimicrobial resistance (AMR)** | The ability of a microorganism to survive exposure to a drug that would normally kill it |
| **Natural selection** | The process by which organisms with advantageous traits survive and reproduce more successfully |
| **Horizontal gene transfer** | The direct sharing of genetic material between bacteria without reproduction |
| **β-Lactam antibiotic** | A class of antibiotics (penicillins, cephalosporins) that block bacterial cell wall synthesis |
| **β-Lactamase** | A bacterial enzyme that inactivates β-Lactam antibiotics by breaking their ring structure |
| **TEM-1** | The most clinically prevalent β-Lactamase; the resistance enzyme studied in Project 6 |
| **Clavulanic acid** | A β-Lactamase inhibitor used in combination with amoxicillin (Augmentin) |
| **Combination therapy** | Using two or more drugs simultaneously to reduce the probability of resistance emerging |
| **Resistance landscape** | The full map of which mutations confer resistance and by how much |
| **Structure-guided drug design** | Rational drug optimisation using atomic-level structural and energetic data |
| **IC₅₀** | The drug concentration needed to inhibit 50% of enzyme activity — a standard potency measure |
| **Clinical isolate** | A microorganism sample taken directly from a patient — the source of the Project 6 mutations |
| **Conservative substitution** | Replacing an amino acid with one of similar size and chemistry, minimising structural disruption |
