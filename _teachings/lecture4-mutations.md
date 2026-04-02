---
layout: course
title: Mutations, Hot Spots and Alanine Scanning
description: >
  A lecture series introducing A-level biology students to computational drug design.
  Students learn the biological and computational foundations before running PyRosetta
  simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.
instructor: Michelle
year: Lecture 4 (2026.6)
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

## Slide Presentation — Lecture 4

The interactive slides for Lecture 4 are embedded below.
Use the **arrow keys** or the on-screen controls to navigate.
Press **S** to open speaker notes (teaching cues and analogies).
Press **F** to go full screen.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 2rem;">
  <iframe
    src="{{ '/assets/slides/lecture4-mutations.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
           border: 1px solid #ddd; border-radius: 8px;"
    allowfullscreen>
  </iframe>
</div>

> **Can't see the slides?** All slide content is written out in full below.

---

## Lecture Notes

---

### Slide 1 — Mutations, Hot Spots and Alanine Scanning

**Lecture 4 — From Binding Site to Design Target**

Opening question:

> "If you removed the side chain of a hydrophobic residue lining the binding site, what
> would happen to the drug's binding energy? Why?"

Correct intuition: removing a hydrophobic contact reduces the van der Waals interactions
between drug and protein — binding energy becomes less negative, meaning weaker binding.
This is exactly what alanine scanning measures.

---

### Slide 2 — A mutation is a change in the amino acid sequence

| Level | What changes | Example |
|---|---|---|
| DNA level | One nucleotide base is substituted | C → T in codon |
| Protein level | One amino acid is replaced by another | Serine → Glycine at position 130 |

**Three possible outcomes at the protein level:**

**Synonymous (silent):** The DNA changes but the amino acid stays the same — due to
codon redundancy. No effect on the protein. Invisible to Rosetta.

**Non-synonymous (missense) — what we study:** The DNA change results in a different
amino acid. May or may not affect function depending on where the change is and what
the new amino acid is.

**Nonsense:** The DNA change creates a stop codon — the protein is truncated. Usually
catastrophic for function.

In Projects 1, 5, and 6 we work exclusively with **non-synonymous point mutations** —
single amino acid changes. These are the most common type seen in drug resistance and
protein engineering.

---

### Slide 3 — Wild type vs mutant

**Wild type:** The original, naturally occurring protein sequence. In our simulations,
wild type means the protein as it appears in the PDB structure.

**Mutant:** Any version where one or more amino acids have been changed. In drug
resistance, the mutant is what the bacterium evolves. In protein engineering, it is
what the scientist deliberately designs.

**Mutation naming convention:** `V102A` means Valine (V) at position 102 has been
changed to Alanine (A). Format: **[original AA][position][new AA]**

| Notation | Meaning | Context |
|---|---|---|
| **S130G** | Serine at 130 → Glycine | Resistance mutation in β-Lactamase (Project 6) |
| **V102A** | Valine at 102 → Alanine | Alanine scan probe (Project 5) |
| **K73R** | Lysine at 73 → Arginine | Resistance mutation in β-Lactamase (Project 6) |

---

### Slide 4 — One amino acid change can make a drug fail

**Three ways a mutation can affect drug binding:**

**1. Removes a key contact:** If the mutated residue was forming a hydrogen bond or
van der Waals contact with the drug, removing it weakens binding directly. The drug
still enters the pocket but holds on less tightly.

**2. Changes the pocket shape:** Some substitutions alter the binding site geometry —
making it slightly larger, smaller, or differently shaped. The drug may no longer fit
as well even if it still enters.

**3. Changes the pocket chemistry:** Replacing a charged residue (Arginine) with a
neutral one (Serine) removes an electrostatic interaction. A drug designed to interact
with that charge loses a significant portion of its binding energy.

**Real example (Project 6):** β-Lactamase S130G — Serine 130 normally forms a hydrogen
bond with the carbonyl oxygen of clavulanic acid. When bacteria mutate this serine to
glycine, that hydrogen bond disappears. The inhibitor's binding energy drops sharply.
One letter change in a 263-residue protein renders a drug clinically ineffective.

---

### Slide 5 — Why Alanine? The logic of the probe

| Property of Alanine | Why it matters |
|---|---|
| Smallest side chain with a carbon (-CH₃) | Removes original chemistry without removing the backbone |
| Non-polar and chemically inert | Does not introduce new interactions — truly erases the original contribution |
| Does not disrupt the backbone | Unlike Glycine, maintains correct backbone geometry |
| Naturally present in all proteins | The protein already knows how to fold with Alanine — minimally disruptive |

**Why not Glycine?** Glycine has no side chain at all, but its unusual backbone
flexibility can distort local structure — making it hard to tell whether any binding
change is due to losing the side chain or due to backbone distortion. Alanine avoids
this problem entirely.

Mutating Valine → Alanine trims a four-carbon branching arm down to a single methyl
group. The backbone is untouched. But all the van der Waals contacts that Valine was
making with the drug — gone.

---

### Slide 6 — ΔΔG measures the energetic cost of each mutation

**Building up to ΔΔG step by step:**

- ΔG_wt = binding energy of wild-type protein + drug
- ΔG_mut = binding energy of mutant protein + drug
- **ΔΔG = ΔG_mut − ΔG_wt**

| ΔΔG value | Meaning | Classification |
|---|---|---|
| **> +2.0 REU** | Mutation greatly weakens binding | Hot spot — critical residue |
| **+1.0 to +2.0 REU** | Mutation moderately weakens binding | Moderate contributor |
| **−0.5 to +1.0 REU** | Mutation has little effect | Dispensable residue |
| **< −0.5 REU** | Mutation strengthens binding | Rare — removing side chain helps |

**Concrete example:** Wild-type binding = −27 REU. After mutating Phe381 → Ala,
binding = −19 REU. ΔΔG = −19 − (−27) = **+8 REU** → Phe381 is a hot spot. The drug
was heavily relying on contacts with that phenylalanine ring.

---

### Slide 7 — Hot spots and dispensable residues

**Hot spot (ΔΔG ≥ +2.0 REU):** The drug depends on this residue heavily. Mutating it
away causes a large loss in binding affinity. These are your primary design targets.

**Moderate contributor (ΔΔG +1.0 to +2.0 REU):** The residue contributes meaningfully
but is not essential. Worth engaging but not as critical as hot spots.

**Dispensable (ΔΔG < +1.0 REU):** Present in the binding site but contributes little
to binding. The drug barely notices if it is mutated away.

**The 80/20 rule of binding:** In a typical binding site of 12–15 residues, only 2–4
are true hot spots. Roughly 80% of the binding energy comes from 20% of the contact
residues. Identifying that 20% is the whole point of alanine scanning.

Hot spots are your design targets. If you want to make a better drug, design it to
make stronger interactions with the hot spot residues. If you want to understand
resistance, ask: which of my hot spots is the bacterium most likely to mutate?

---

### Slide 8 — SAR: connecting structure to activity

**Structure-Activity Relationship (SAR)** is the systematic study of how changes in
a drug's molecular structure affect its biological activity. It is the central
framework of medicinal chemistry.

**How alanine scanning feeds into SAR:**

1. Alanine scan identifies hot spot residues
2. Hot spot chemical class tells you what interaction to target
3. Drug is modified to maximise that interaction

| Hot spot residue | Chemical class | SAR implication |
|---|---|---|
| Phenylalanine (Phe) | Hydrophobic aromatic | Add aromatic ring to drug for π-π stacking |
| Arginine (Arg) | Positively charged | Add negatively charged group to drug |
| Serine (Ser) | Polar, H-bond donor | Add H-bond acceptor to drug (carbonyl, ether) |

Real drug design is iterative: scan → identify hot spots → modify drug → test → scan
again. Each cycle produces a better understanding of what the binding site wants.

---

### Slide 9 — Alanine scanning in the real world

**Experimental scanning:** Physically synthesise each mutant protein, purify it, and
measure binding affinity using SPR or ITC. Each mutant takes days to weeks and costs
£5,000–£20,000.

**Computational scanning:** Each mutation takes seconds. An entire binding site of 15
residues scanned in minutes. An approximation — but accurate enough to prioritise
which mutants are worth making in the lab.

**The combined workflow:**
1. Computational scan — all 15 residues (hours)
2. Identify top 3–4 predicted hot spots
3. Synthesise and test only those mutants in the lab
4. Confirm or refine the computational prediction
5. Use confirmed hot spots to guide drug optimisation

Computational scanning acts as a filter — reducing 15 potential experiments to 3 or
4 without losing the key information.

---

### Slide 10 — Alanine scanning appears three times in your pipeline

| Project | What is scanned | What is measured | Question answered |
|---|---|---|---|
| **Project 1** | Any residue in Lysozyme | Change in protein stability | Which residues keep the protein folded? |
| **Project 5** | Binding site residues in COX-2 | Change in drug binding (ΔΔG) | Which residues are hot spots for Ibuprofen? |
| **Project 6** | Known resistance positions in β-Lactamase | Change in inhibitor binding (ΔΔG) | How much does each clinical mutation weaken the drug? |

**Project 5 vs Project 6:** In Project 5 we always mutate to Alanine — a neutral probe
asking "what could hurt?" In Project 6 we mutate to the actual amino acid bacteria have
evolved — asking "what has actually hurt in patients?"

---

### Slide 11 — Summary and Preparation

**Key takeaways from Lecture 4:**

- A **point mutation** changes one amino acid — it can strengthen, weaken, or have no effect on drug binding
- **Wild type** is the natural protein sequence; **mutant** is any version with at least one amino acid change
- **Alanine** is used as the probe because it removes the side chain without disrupting the backbone
- **ΔΔG = ΔG_mut − ΔG_wt** — positive ΔΔG means the mutation weakened binding; that residue was contributing
- **Hot spots** are residues with ΔΔG ≥ +2.0 REU — the drug depends on these most heavily
- **SAR** connects hot spot identity to drug modification decisions

**Preparation for Lecture 5:**

> "If a bacterium mutates one of the hot spot residues your drug relies on heavily,
> what happens to the drug's effectiveness? And what would you do as a drug designer
> to respond?"

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Point mutation** | A change of a single amino acid in a protein sequence |
| **Non-synonymous mutation** | A DNA mutation that results in an amino acid change in the protein |
| **Wild type** | The original, naturally occurring protein sequence |
| **Mutant** | A protein with one or more amino acid changes relative to wild type |
| **Mutation notation** | Format [original AA][position][new AA], e.g. S130G = Serine at 130 → Glycine |
| **Alanine scanning** | Systematically mutating each residue to Alanine to measure its contribution |
| **ΔΔG** | The change in binding energy caused by a mutation. Positive = weaker binding |
| **Hot spot** | A residue whose side chain contributes strongly to binding (ΔΔG ≥ +2.0 REU) |
| **Dispensable residue** | A residue that contributes little to binding; mutating it has minimal effect |
| **SAR** | Structure-Activity Relationship — how changes in drug structure affect biological activity |
| **Induced fit** | The slight conformational change a protein makes to better accommodate a ligand |
| **π-π stacking** | An attractive interaction between two aromatic rings facing each other |
| **SPR** | Surface Plasmon Resonance — an experimental technique for measuring binding affinity |
