---
layout: page
title: Project 6 - Antibiotic Resistance Simulation
description: Drug Design with PyRosetta — Modelling Resistance Mutations in β-Lactamase
img: assets/img/RosettaCover.png
importance: 6
category: rosetta
related_publications: false
---

## What You Will Learn

- How antibiotic resistance arises at the molecular level
- How to model clinically documented resistance mutations computationally
- How to distinguish mutations that confer resistance by weakening drug binding vs. stabilizing the enzyme
- How to compute a resistance profile and interpret it in a clinical context
- How computational drug design responds to resistance: the next-generation drug problem

**Time:** ~60–90 minutes &nbsp;|&nbsp; **Prerequisite:** Projects 1–5 completed &nbsp;|&nbsp; **Difficulty:** Advanced

---

## Background: The Antibiotic Resistance Crisis

Every year, antimicrobial-resistant infections kill over 1.2 million people directly and contribute to millions more deaths globally. Resistance is not a new phenomenon — bacteria have been evolving ways to neutralize antibiotics since before we invented them. What has changed is the pace and scale, driven by overuse of antibiotics in medicine and agriculture.

At the molecular level, resistance often follows a predictable pattern: a single point mutation in a bacterial enzyme changes one amino acid, and that one change is enough to make an antibiotic fail.

> **Analogy:** Imagine your front door lock is an antibiotic, and the bacteria is the house. The bacteria does not need to build a completely new house to defeat your lock — it just needs to change the lock cylinder by one tiny notch. The locksmith (the drug) no longer fits. Everything else about the house is identical.

This project will teach you to model that "one tiny notch" computationally — quantifying exactly how much each resistance mutation changes the drug's ability to bind.

---

## The Protein We Will Study: TEM-1 β-Lactamase

β-Lactamases are bacterial enzymes that destroy β-lactam antibiotics (penicillins, cephalosporins, carbapenems — the most widely used class of antibiotics in the world). They do this by breaking the β-lactam ring that makes these antibiotics effective.

**TEM-1 β-Lactamase** (PDB: **1ZG4**) is the most clinically prevalent β-lactamase. It confers resistance to many penicillins but can be inhibited by β-lactamase inhibitors like **Clavulanic acid** (the "clavulanate" in Augmentin).

We will model the binding of an inhibitor to TEM-1, then introduce known clinical resistance mutations and measure how each one weakens binding.

---

## Clinically Documented Resistance Mutations

The following mutations have been identified in patients with antibiotic-resistant infections. Each has been validated experimentally to confer some degree of resistance.

| Mutation | Position | Notes |
|----------|----------|-------|
| **M69L** | 69 | Methionine → Leucine. Early step in inhibitor resistance |
| **K73R** | 73 | Lysine → Arginine. Disrupts the active site catalytic mechanism |
| **S130G** | 130 | Serine → Glycine. Destroys a key hydrogen bond to inhibitors |
| **R244S** | 244 | Arginine → Serine. Removes a critical electrostatic interaction |
| **N276D** | 276 | Asparagine → Aspartate. Changes polarity near the binding site |

These are not hypothetical — they are observed in clinical isolates from hospital patients.

---

## Why This Is Different from Projects 1 and 5

| Project 1 | Project 5 | Project 6 |
|-----------|-----------|-----------|
| Mutate to Alanine | Mutate to Alanine | Mutate to the **real clinical amino acid** |
| Any residue | Binding site residues | **Specific known resistance positions** |
| Measure protein stability | Measure binding contribution | Measure **resistance effect on drug** |
| Teaching mutations | Computational design | **Real-world clinical relevance** |

In Projects 1 and 5, we always mutated to Alanine because it is a neutral probe. Here we mutate to the actual amino acid that bacteria have evolved — these are not hypothetical perturbations, they are real evolutionary solutions that bacteria have discovered to defeat our drugs.

---

## Cell 1 — Initialize PyRosetta
*Set up with ligand support*

```python
import pyrosetta
from pyrosetta import *
from pyrosetta.toolbox import *

pyrosetta.init(extra_options="-ignore_unrecognized_res false -load_PDB_components true -mute all")
print("PyRosetta ready!")
print("Target protein: TEM-1 β-Lactamase (PDB: 1ZG4)")
print("Drug: Clavulanic acid inhibitor complex")
```

---

## Cell 2 — Load TEM-1 β-Lactamase
*Download the enzyme and identify the inhibitor*

```python
import urllib.request
from pyrosetta import pose_from_pdb
import pandas as pd

# Download TEM-1 with bound inhibitor
url = "https://files.rcsb.org/download/1ZG4.pdb"
urllib.request.urlretrieve(url, "1ZG4.pdb")
pose_raw = pose_from_pdb("1ZG4.pdb")

print(f"Raw structure: {pose_raw.total_residue()} residues")

# Survey the non-protein molecules present
print("\nNon-protein residues:")
for i in range(1, pose_raw.total_residue() + 1):
    res   = pose_raw.residue(i)
    chain = pose_raw.pdb_info().chain(i)
    if not res.is_protein():
        pdb_num = pose_raw.pdb_info().number(i)
        print(f"  Position {i:4d} | Chain {chain} | PDB# {pdb_num:4d} | {res.name()}")
```

> **Note:** Inspect the output carefully. You will see a ligand residue (likely labelled with a three-letter code) and possibly water molecules. Identify the ligand code before proceeding to the next cell.

**Key Concepts:**

- **Surveying the structure:** Before automating anything, always manually inspect what a PDB structure contains. Crystal structures can contain unexpected molecules from crystallography buffers, multiple copies of the protein, or degradation products.

---

## Cell 3 — Clean the Structure and Compute Wild-Type Binding Energy
*Isolate chain A + inhibitor and establish the baseline*

```python
scorefxn = pyrosetta.get_fa_scorefxn()

# Identify the ligand (adjust the name string if your output above shows something different)
# Common inhibitor codes for 1ZG4: look for a non-standard residue code in the output above
LIGAND_CODES = {"CLV", "CVN", "FAC", "AXC", "FRO"}  # common β-lactamase inhibitor codes

ligand_pos_raw = None
keep_positions = []

for i in range(1, pose_raw.total_residue() + 1):
    res   = pose_raw.residue(i)
    chain = pose_raw.pdb_info().chain(i)
    rname = res.name().replace("pdb_", "").strip()[:3]  # strip pdb_ prefix

    if rname in LIGAND_CODES or (not res.is_protein() and chain == "A" and "HOH" not in res.name()):
        if ligand_pos_raw is None:
            ligand_pos_raw = i
            print(f"Using ligand: {res.name()} at raw position {i}")
        keep_positions.append(i)

    elif chain == "A" and res.is_protein():
        keep_positions.append(i)

# Build the clean pose
wt_pose = pose_raw.clone()
delete_positions = [i for i in range(1, pose_raw.total_residue() + 1)
                    if i not in keep_positions]
for i in reversed(delete_positions):
    wt_pose.delete_residue_slow(i)

print(f"Clean structure: {wt_pose.total_residue()} residues")

# Find ligand in clean pose
ligand_clean = None
for i in range(1, wt_pose.total_residue() + 1):
    if not wt_pose.residue(i).is_protein():
        ligand_clean = i
        print(f"Ligand in clean pose: position {ligand_clean}")
        break

# Wild-type binding energy (reusing the function from Project 5)
def compute_binding_energy(pose, ligand_res, scorefxn):
    score_complex = scorefxn(pose)

    prot_pose = pose.clone()
    prot_pose.delete_residue_slow(ligand_res)
    score_protein = scorefxn(prot_pose)

    lig_pose = pose.clone()
    prot_positions = [i for i in range(1, pose.total_residue() + 1)
                      if pose.residue(i).is_protein()]
    for i in reversed(prot_positions):
        lig_pose.delete_residue_slow(i)
    score_ligand = scorefxn(lig_pose)

    return score_complex - (score_protein + score_ligand)

wt_binding = compute_binding_energy(wt_pose, ligand_clean, scorefxn)
print(f"\nWild-type binding energy: {wt_binding:.2f} REU")
print("(This is the inhibitor binding strength in the drug-sensitive strain)")
```

**Key Concepts:**

- **Drug-sensitive strain:** A bacterial strain that is still killed by the antibiotic — the "before resistance" state. Our wild-type structure represents this.
- **Drug-resistant strain:** A bacterial strain that survives antibiotic treatment. Each resistance mutation we model represents one possible evolutionary path to this state.
- **Defensive coding:** The `LIGAND_CODES` set and the fallback condition handle the possibility that different PyRosetta versions or PDB downloads name the ligand differently. Advanced code should anticipate multiple possible inputs.

---

## Cell 4 — Map PDB Residue Numbers to Rosetta Positions
*Build the lookup table before mutating*

```python
# Build a dictionary: PDB residue number → Rosetta position
pdb_to_rosetta = {}
for i in range(1, wt_pose.total_residue() + 1):
    if wt_pose.residue(i).is_protein():
        pdb_num = wt_pose.pdb_info().number(i)
        pdb_to_rosetta[pdb_num] = i

print("PDB ↔ Rosetta position mapping (first 10 protein residues):")
count = 0
for pdb_num, ros_pos in sorted(pdb_to_rosetta.items()):
    print(f"  PDB {pdb_num:4d} → Rosetta {ros_pos:4d} | "
          f"{wt_pose.residue(ros_pos).name3()}")
    count += 1
    if count >= 10:
        print("  ...")
        break

print(f"\nTotal protein residues mapped: {len(pdb_to_rosetta)}")

# Verify the resistance mutation positions exist
resistance_mutations = {
    "M69L":  (69,  "L"),
    "K73R":  (73,  "R"),
    "S130G": (130, "G"),
    "R244S": (244, "S"),
    "N276D": (276, "D"),
}

print("\nVerifying resistance mutation positions:")
for name, (pdb_pos, new_aa) in resistance_mutations.items():
    if pdb_pos in pdb_to_rosetta:
        ros_pos = pdb_to_rosetta[pdb_pos]
        current_aa = wt_pose.residue(ros_pos).name1()
        print(f"  {name}: PDB {pdb_pos} → Rosetta {ros_pos} | "
              f"Current AA: {current_aa} | {'✓ Matches' if current_aa == name[0] else '⚠ Mismatch'}")
    else:
        print(f"  {name}: PDB position {pdb_pos} NOT FOUND in structure")
```

This cell builds a dictionary that translates PDB residue numbers (how biochemists refer to positions) into Rosetta's internal numbering (which may differ after cleaning). **Never assume PDB numbers equal Rosetta numbers** — cleaning a structure removes residues and shifts Rosetta's internal count.

> **Analogy:** Imagine a city's street addresses are renumbered after several houses are demolished. A house that was "123 Main Street" (PDB numbering) might now be "87 Main Street" (Rosetta numbering) because earlier houses were removed. You need the translation table before you can find any house by its old address.

**Key Concepts:**

- **PDB numbering:** The residue numbers as published in the PDB file, reflecting the original experimental numbering. May contain gaps (missing density) or non-sequential numbers.
- **Rosetta numbering:** Sequential integers from 1 to N assigned by PyRosetta after loading. Always contiguous.
- **Lookup dictionary:** A data structure that maps one set of identifiers to another. Essential when working with multiple numbering systems.

---

## Cell 5 — Introduce Each Resistance Mutation and Measure ΔΔG
*The resistance profile computation*

```python
from pyrosetta.toolbox import mutate_residue

print("Modelling resistance mutations...")
print("(Each mutation requires ~1–3 minutes)\n")

resistance_results = []

for mutation_name, (pdb_pos, new_aa) in resistance_mutations.items():
    if pdb_pos not in pdb_to_rosetta:
        print(f"  {mutation_name}: position not found — skipping")
        continue

    rosetta_pos = pdb_to_rosetta[pdb_pos]
    current_aa  = wt_pose.residue(rosetta_pos).name1()

    print(f"  Processing {mutation_name} (Rosetta position {rosetta_pos})...", end=" ")

    try:
        # Create mutant pose
        mutant_pose = wt_pose.clone()
        mutate_residue(mutant_pose, rosetta_pos, new_aa)

        # Score the mutant
        mut_binding = compute_binding_energy(mutant_pose, ligand_clean, scorefxn)
        ddg         = mut_binding - wt_binding

        # Resistance classification
        if ddg >= 3.0:
            resistance_level = "High resistance"
        elif ddg >= 1.5:
            resistance_level = "Moderate resistance"
        elif ddg >= 0.5:
            resistance_level = "Low resistance"
        elif ddg <= -0.5:
            resistance_level = "Hypersensitivity"
        else:
            resistance_level = "No effect"

        print(f"ΔΔG = {ddg:+.2f} REU — {resistance_level}")
        resistance_results.append({
            "Mutation":          mutation_name,
            "PDB Position":      pdb_pos,
            "Wild-Type AA":      current_aa,
            "Mutant AA":         new_aa,
            "WT Binding (REU)":  round(wt_binding, 2),
            "Mut Binding (REU)": round(mut_binding, 2),
            "ΔΔG (REU)":         round(ddg, 2),
            "Resistance Level":  resistance_level
        })

    except Exception as e:
        print(f"ERROR — {e}")

df_resistance = pd.DataFrame(resistance_results).sort_values("ΔΔG (REU)", ascending=False)
print("\nDone! Resistance profile computed.")
```

The ΔΔG thresholds here are higher than in Project 5 because we are using real resistance mutations, not Alanine probes. Clinical resistance often corresponds to ΔΔG values of 1.5–5.0 REU — large enough to meaningfully impair drug binding, small enough that the enzyme still functions.

**Key Concepts:**

- **Hypersensitivity:** Occasionally, a mutation actually improves inhibitor binding (ΔΔG < 0). This is rare for resistance mutations but has been observed — sometimes a mutation that confers resistance to one drug simultaneously increases sensitivity to another.
- **Functional constraint:** Resistance mutations cannot be arbitrary. The enzyme must still function (break down antibiotic) after the mutation — it cannot be so destabilized that it falls apart. This is why most resistance mutations are conservative substitutions (similar amino acids).

---

## Cell 6 — Display the Resistance Profile Table
*Rank mutations by clinical resistance potential*

```python
print("\n" + "=" * 75)
print("RESISTANCE PROFILE — TEM-1 β-Lactamase vs. Inhibitor")
print("=" * 75)
print(f"\nWild-type binding energy (drug-sensitive): {wt_binding:.2f} REU")
print(f"Positive ΔΔG = inhibitor binds more weakly in the mutant = resistance\n")

print(f"{'Mutation':<10} {'WT AA→Mut':<12} {'Mut Binding':>12} {'ΔΔG (REU)':>12} {'Resistance Level'}")
print("-" * 75)

for _, row in df_resistance.iterrows():
    print(f"{row['Mutation']:<10} "
          f"{row['Wild-Type AA']}→{row['Mutant AA']:<10} "
          f"{row['Mut Binding (REU)']:>12.2f} "
          f"{row['ΔΔG (REU)']:>+12.2f}   "
          f"{row['Resistance Level']}")

print("=" * 75)

highest = df_resistance.iloc[0]
print(f"\nHighest resistance mutation: {highest['Mutation']} (ΔΔG = {highest['ΔΔG (REU)']:+.2f} REU)")
print(f"This mutation is expected to require a {abs(highest['ΔΔG (REU)']):.1f}x-fold increase")
print(f"in inhibitor concentration to maintain the same binding occupancy.")

df_resistance.to_csv("resistance_profile.csv", index=False)
print("\nResistance profile saved to resistance_profile.csv")
```

**Key Concepts:**

- **Fold-change in IC₅₀:** In pharmacology, a 1.4 REU increase in ΔΔG corresponds roughly to a 10-fold increase in the drug concentration needed to achieve the same effect. This is a rough rule of thumb — exact conversion requires experimental validation.
- **Clinical threshold:** Resistance is clinically relevant when the required drug dose exceeds the safe dosage for patients. A mutation might cause measurable resistance computationally but not be clinically significant if the drug can still be used at a higher (but still safe) dose.

---

## Cell 7 — Visualize the Resistance Profile
*Plot ΔΔG for each mutation with clinical significance zones*

```python
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

LEVEL_COLORS = {
    "High resistance":     "#922b21",
    "Moderate resistance": "#e67e22",
    "Low resistance":      "#f4d03f",
    "No effect":           "#95a5a6",
    "Hypersensitivity":    "#27ae60"
}

df_plot = df_resistance.sort_values("ΔΔG (REU)", ascending=False)
colors  = [LEVEL_COLORS.get(l, "#95a5a6") for l in df_plot["Resistance Level"]]

fig, ax = plt.subplots(figsize=(11, 6))
bars = ax.bar(df_plot["Mutation"], df_plot["ΔΔG (REU)"],
              color=colors, edgecolor="white", linewidth=0.5, width=0.5)

# Clinical zone shading
ax.axhspan(3.0, ax.get_ylim()[1] if ax.get_ylim()[1] > 3.0 else 6.0,
           alpha=0.08, color="#922b21", label="High resistance zone")
ax.axhspan(1.5, 3.0, alpha=0.08, color="#e67e22", label="Moderate resistance zone")
ax.axhspan(0.5, 1.5, alpha=0.08, color="#f4d03f", label="Low resistance zone")

# Reference lines
ax.axhline(y=3.0, color="#922b21", linestyle="--", linewidth=0.8)
ax.axhline(y=1.5, color="#e67e22", linestyle="--", linewidth=0.8)
ax.axhline(y=0.5, color="#f4d03f", linestyle="--", linewidth=0.8)
ax.axhline(y=0.0, color="black",   linestyle="-",  linewidth=0.5)

# Annotate bars
for bar, val in zip(bars, df_plot["ΔΔG (REU)"]):
    ax.text(bar.get_x() + bar.get_width() / 2, val + 0.05,
            f"{val:+.2f}", ha="center", va="bottom",
            fontsize=10, fontweight="bold")

ax.set_xlabel("Resistance Mutation", fontsize=12)
ax.set_ylabel("ΔΔG (REU)\n(Positive = drug binds more weakly = resistance)", fontsize=11)
ax.set_title("Antibiotic Resistance Profile — TEM-1 β-Lactamase\n"
             "Effect of Clinical Mutations on Inhibitor Binding",
             fontsize=13, fontweight="bold")

# Legend
patches = [mpatches.Patch(color=v, label=k) for k, v in LEVEL_COLORS.items()
           if k in df_plot["Resistance Level"].values]
ax.legend(handles=patches, loc="upper right", fontsize=9)

plt.tight_layout()
plt.savefig("resistance_profile.png", dpi=150, bbox_inches="tight")
plt.show()
print("Chart saved as resistance_profile.png")
```

**Key Concepts:**

- **Zone shading (`axhspan`):** Fills a horizontal band of the plot with a semi-transparent colour. Here each band corresponds to a clinical resistance classification — the chart communicates not just the values but also their clinical meaning.
- **`axhspan` vs `axhline`:** `axhline` draws a line; `axhspan` fills a region. Both use axis coordinates (y-values), not pixel coordinates.

---

## Cell 8 — The Next-Generation Drug Problem
*Model what a drug needs to overcome resistance*

```python
# Find the most resistant mutation
most_resistant = df_resistance.sort_values("ΔΔG (REU)", ascending=False).iloc[0]
mut_name       = most_resistant["Mutation"]
ddg_resistance = most_resistant["ΔΔG (REU)"]

print("THE NEXT-GENERATION DRUG CHALLENGE")
print("=" * 60)
print(f"\nThe mutation {mut_name} causes ΔΔG = +{ddg_resistance:.2f} REU")
print(f"This means the inhibitor binds {ddg_resistance:.2f} REU more weakly")
print(f"in the resistant mutant than in the drug-sensitive wild type.")
print()
print("To restore binding in the resistant strain, a next-generation")
print("drug would need to:")
print()
print(f"  Option A: Recover the {ddg_resistance:.2f} REU loss")
print(f"            → Add new chemical interactions to regain this energy")
print(f"            → Target other binding site residues NOT affected by {mut_name}")
print()
print(f"  Option B: Design around the mutation")
print(f"            → Synthesize a drug that does not rely on position {most_resistant['PDB Position']}")
print(f"            → Use the alanine scan (Project 5) to identify alternative hot spots")
print()
print(f"  Option C: Combination therapy")
print(f"            → Pair the inhibitor with a second drug that targets a different")
print(f"              enzyme, reducing the chance of resistance emerging to both simultaneously")
print()

# Summarize the full project pipeline
print("YOUR FULL COMPUTATIONAL DRUG DESIGN PIPELINE")
print("=" * 60)
print("  Project 1 → Characterize protein stability")
print("  Project 2 → Dock drug candidates and rank by binding energy")
print("  Project 3 → Select the highest-quality structure for analysis")
print("  Project 4 → Map the drug binding site chemically")
print("  Project 5 → Identify hot spot residues via alanine scanning")
print("  Project 6 → Model known resistance mutations and their impact")
print()
print("In a real drug discovery program, you would now:")
print("  → Take the hot spots from Project 5")
print("  → Confirm they are NOT affected by resistance mutations from Project 6")
print("  → Design a new drug that engages the resistant mutant at safe hot spots")
print("  → Re-dock (Project 2 workflow) to validate computational predictions")
print("  → Submit top candidates for laboratory synthesis and testing")
```

This cell synthesizes everything from all six projects into a coherent drug discovery narrative. The most powerful thing about computational methods is not that they replace lab experiments — it is that they dramatically **focus** which experiments are worth running.

**Key Concepts:**

- **Combination therapy:** Using two or more drugs with different targets simultaneously. Resistance to both at once requires two mutations occurring together, which is far less likely than one mutation alone. This is why HIV, tuberculosis, and cancer are treated with drug cocktails.
- **Structure-guided drug design:** Using detailed structural and energetic information — exactly what we have computed — to rationally design the next generation of drugs. The alternative (random screening) is orders of magnitude more expensive.
- **Resistance landscape:** The full set of mutations that confer resistance and their severity. Understanding the resistance landscape tells drug designers which positions to avoid anchoring their drug to.

---

## Discussion Questions

**1.** Which mutation caused the greatest increase in ΔΔG? Based on what you know about that amino acid substitution, can you explain mechanistically why it disrupts inhibitor binding?

**2.** Were any mutations classified as "No effect" or "Hypersensitivity"? What does it tell you about the binding site if some mutations have no effect on inhibitor binding?

**3.** A bacterium would need to accumulate multiple resistance mutations to fully escape combination therapy. Why is acquiring two simultaneous mutations much harder than acquiring one? (Think about probability.)

**4.** Our model assumes the protein structure does not change after mutation. In reality, mutations can cause local or global structural rearrangements. How might you test this assumption computationally?

**5.** You now have a complete computational pipeline from structure loading to resistance profiling. If you were a pharmaceutical company, which single computational result from Projects 1–6 would you trust most when deciding which drug candidate to invest in developing, and why?

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **β-Lactamase** | A bacterial enzyme that inactivates β-lactam antibiotics by breaking their ring structure |
| **Resistance mutation** | A naturally occurring amino acid change that reduces drug binding without eliminating enzyme function |
| **ΔΔG** | The energetic cost of a mutation, expressed as the change in binding energy relative to wild type |
| **Drug-sensitive strain** | A bacterium killed by the antibiotic at normal clinical doses |
| **Drug-resistant strain** | A bacterium that survives the antibiotic due to one or more mutations |
| **PDB numbering** | Residue numbers as published in the PDB entry — may not match Rosetta's internal numbering |
| **Rosetta numbering** | Sequential internal numbering assigned by PyRosetta; always starts at 1 |
| **Combination therapy** | Using two or more drugs to reduce the likelihood of resistance evolving |
| **Resistance landscape** | The full map of which mutations confer resistance and by how much |
| **Structure-guided drug design** | Rational drug optimization informed by atomic-level structural and energetic data |
| **IC₅₀** | The drug concentration needed to inhibit 50% of the enzyme activity — a standard potency measure |
| **Conservative substitution** | Replacing an amino acid with one of similar size and chemistry, minimizing structural disruption |
