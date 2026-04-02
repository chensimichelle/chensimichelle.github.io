---
layout: page
title: Project 5 - Alanine Scanning of a Binding Site
description: Drug Design with PyRosetta — Identifying Critical Residues for Drug Binding
img: assets/img/RosettaCover.png
importance: 5
category: rosetta
related_publications: false
---

## What You Will Learn

- How alanine scanning reveals which residues are essential for drug binding
- How to compute ΔΔG (delta-delta-G) — the energetic cost of mutating a residue
- How to distinguish "hot spot" residues from dispensable ones
- How structure-activity relationships (SAR) connect computational results to drug design decisions
- How to build a prioritized list of residues for experimental validation

**Time:** ~45–60 minutes &nbsp;|&nbsp; **Prerequisite:** Projects 1–4 completed &nbsp;|&nbsp; **Difficulty:** Intermediate

---

## Background: What Is Alanine Scanning?

You performed alanine scanning in Project 1 to test protein stability — mutating each residue to Alanine and watching the stability score change. Here we apply the same technique with a critical twist: we are not just measuring whether the protein becomes more or less stable. We are measuring **how much each residue contributes to holding the drug in place**.

This is called **binding site alanine scanning**, and it is one of the most powerful experimental and computational tools in drug design.

**The logic:**

Alanine is the simplest amino acid with a side chain — it has just a methyl group (-CH₃) with no special chemical properties. When you mutate a residue to Alanine, you erase whatever that residue's side chain was doing (forming hydrogen bonds, van der Waals contacts, electrostatic interactions) while keeping the protein backbone intact.

- If erasing that side chain dramatically weakens drug binding → the residue was **critical** (a "hot spot")
- If erasing it barely affects binding → the residue was **dispensable**

> **Analogy:** Imagine a vault that needs three specific keys inserted simultaneously. Alanine scanning is like testing each key slot by replacing one key at a time with a plain blank key. If removing one key means the vault no longer opens, that slot is critical. If the vault still opens fine without a particular key, that slot is dispensable.

---

## The ΔΔG Concept

We measure binding contribution using **ΔΔG** (pronounced "delta-delta-G"):

```
ΔG_binding      = binding energy of wild-type protein + drug
ΔG_binding_mut  = binding energy of mutant protein + drug
ΔΔG             = ΔG_binding_mut − ΔG_binding

ΔΔG > 0  →  mutation weakens binding (hot spot residue — critical)
ΔΔG < 0  →  mutation strengthens binding (rare, but possible)
ΔΔG ≈ 0  →  mutation has little effect (dispensable residue)
```

A ΔΔG above **+1.0 REU** is considered significant. Residues above **+2.0 REU** are considered strong hot spots — validated targets for structure-activity relationship (SAR) studies.

---

## Setup: Using the Binding Site from Project 4

This project uses the CSV file generated in Project 4's Cell 6. If you have not completed Project 4, you can recreate the contact residues using the code from that project.

---

## Cell 1 — Initialize and Load the Contact Residues
*Start PyRosetta and read in the binding site residues*

```python
import pyrosetta
from pyrosetta import *
from pyrosetta.toolbox import *
import pandas as pd

pyrosetta.init(extra_options="-ignore_unrecognized_res false -load_PDB_components true -mute all")
print("PyRosetta ready!")

# Load the binding site report from Project 4
try:
    df_contacts = pd.read_csv("binding_site_report.csv")
    print(f"Loaded {len(df_contacts)} contact residues from Project 4.")
    print(df_contacts[["AA (3-letter)", "Position (PDB)", "Min Distance (Å)", "Chemical Class"]].to_string(index=False))
except FileNotFoundError:
    print("binding_site_report.csv not found.")
    print("Please complete Project 4 Cell 6 first, or manually define contact residues.")
```

**Key Concepts:**

- **`pd.read_csv()`:** Loads a CSV file back into a DataFrame. The inverse of `.to_csv()` — this is how we pass data between projects.
- **`FileNotFoundError`:** A specific Python error raised when a file does not exist. Catching it here gives the user a helpful message instead of a cryptic crash.

---

## Cell 2 — Load COX-2 and Calculate Wild-Type Binding Energy
*Establish the baseline before any mutations*

```python
import urllib.request
from pyrosetta import pose_from_pdb

# Download and load COX-2 + Ibuprofen
url = "https://files.rcsb.org/download/4PH9.pdb"
urllib.request.urlretrieve(url, "4PH9.pdb")
pose_full = pose_from_pdb("4PH9.pdb")

scorefxn = pyrosetta.get_fa_scorefxn()

# Isolate chain A protein + IBP
ligand_pos_full = None
keep_positions  = []

for i in range(1, pose_full.total_residue() + 1):
    res   = pose_full.residue(i)
    chain = pose_full.pdb_info().chain(i)
    if res.name() == "pdb_IBP":
        ligand_pos_full = i
        keep_positions.append(i)
    elif chain == "A" and res.is_protein():
        keep_positions.append(i)

wt_pose = pose_full.clone()
delete_positions = [i for i in range(1, pose_full.total_residue() + 1)
                    if i not in keep_positions]
for i in reversed(delete_positions):
    wt_pose.delete_residue_slow(i)

# Find IBP in the clean pose
ligand_pos_clean = None
for i in range(1, wt_pose.total_residue() + 1):
    if not wt_pose.residue(i).is_protein():
        ligand_pos_clean = i
        break

print(f"Clean structure: {wt_pose.total_residue()} residues")
print(f"Ibuprofen at clean position: {ligand_pos_clean}")

# Compute wild-type binding energy using the subtraction method (see Project 2)
def compute_binding_energy(pose, ligand_res, scorefxn):
    """
    Binding energy = Complex score − (protein-only score + ligand-only score)
    """
    score_complex = scorefxn(pose)

    # Score the protein alone (delete ligand from a copy)
    prot_pose = pose.clone()
    prot_pose.delete_residue_slow(ligand_res)
    score_protein = scorefxn(prot_pose)

    # Score the ligand alone (delete all protein from a copy)
    lig_pose = pose.clone()
    protein_positions = [i for i in range(1, pose.total_residue() + 1)
                         if pose.residue(i).is_protein()]
    for i in reversed(protein_positions):
        lig_pose.delete_residue_slow(i)
    score_ligand = scorefxn(lig_pose)

    return score_complex - (score_protein + score_ligand)

wt_binding = compute_binding_energy(wt_pose, ligand_pos_clean, scorefxn)
print(f"\nWild-type binding energy: {wt_binding:.2f} REU")
print("This is the baseline. All mutant energies will be compared to this.")
```

We reuse the subtraction method from Project 2, now wrapped in a reusable function. This is good programming practice — if we need to call this logic many times (once per mutation), we should write it once as a function.

**Key Concepts:**

- **Wild type:** The original, unmodified protein sequence. "Wild type" is the biology term for "the natural version."
- **Baseline:** The reference value everything else is compared against. Always compute and verify your baseline before running many mutations.
- **Reusable function:** Wrapping repeated logic in a `def` block means if we find a bug, we fix it in one place, and all 20+ calls automatically benefit.

---

## Cell 3 — Mutate Each Binding Site Residue to Alanine
*The core alanine scan*

```python
from pyrosetta.toolbox import mutate_residue
import numpy as np

print("Running alanine scan on binding site residues...")
print("(This may take 5–15 minutes depending on your machine)\n")

scan_results = []

for _, row in df_contacts.iterrows():
    rosetta_pos = int(row["Position (Rosetta)"])
    pdb_pos     = int(row["Position (PDB)"])
    aa_wt       = row["AA (1-letter)"]
    chem_class  = row["Chemical Class"]

    # Skip residues that are already Alanine — no meaningful mutation to make
    if aa_wt == "A":
        print(f"  Skipping {row['AA (3-letter)']} {pdb_pos} — already Alanine")
        scan_results.append({
            "PDB Position": pdb_pos,
            "Wild-Type AA": aa_wt,
            "Chemical Class": chem_class,
            "ΔΔG (REU)": 0.0,
            "Effect": "Already Ala"
        })
        continue

    # Create mutant pose
    mutant_pose = wt_pose.clone()
    mutate_residue(mutant_pose, rosetta_pos, "A")

    # Compute mutant binding energy
    try:
        mut_binding = compute_binding_energy(mutant_pose, ligand_pos_clean, scorefxn)
        ddg = mut_binding - wt_binding  # ΔΔG

        if ddg >= 2.0:
            effect = "Hot spot"
        elif ddg >= 1.0:
            effect = "Moderate"
        elif ddg <= -1.0:
            effect = "Stabilizing"
        else:
            effect = "Dispensable"

        print(f"  {aa_wt}{pdb_pos}A: ΔΔG = {ddg:+.2f} REU — {effect}")
        scan_results.append({
            "PDB Position": pdb_pos,
            "Wild-Type AA": aa_wt,
            "Chemical Class": chem_class,
            "ΔΔG (REU)": round(ddg, 2),
            "Effect": effect
        })

    except Exception as e:
        print(f"  {aa_wt}{pdb_pos}A: ERROR — {e}")

print("\nAlanine scan complete!")
df_scan = pd.DataFrame(scan_results).sort_values("ΔΔG (REU)", ascending=False)
```

The notation **V102A** means "replace Valine at position 102 with Alanine." This is standard biochemistry notation: original amino acid, position number, new amino acid.

> **Analogy:** If wild-type binding is a perfectly fitted glove, then each mutation is like trimming away part of one finger. Some fingers are load-bearing (removing them means the glove no longer fits), while others are decorative (removing them barely changes anything).

**Key Concepts:**

- **`df.iterrows()`:** Iterates over a DataFrame one row at a time, returning both the row index and the row data as a Series.
- **ΔΔG notation:** Read as "delta-delta-G." Each "Δ" represents a difference — ΔG is the binding energy difference; ΔΔG is the *change* in that difference caused by the mutation.
- **Hot spot:** A residue whose side chain contributes so much to binding that mutating it away causes a large (>2 REU) loss in binding affinity.

---

## Cell 4 — Display the Ranked Results
*Identify hot spots and dispensable residues*

```python
print("\n" + "=" * 65)
print("ALANINE SCAN RESULTS — COX-2 Binding Site (4PH9 + Ibuprofen)")
print("=" * 65)
print(f"{'Mutation':<12} {'ΔΔG (REU)':>10} {'Chemical Class':<20} {'Effect'}")
print("-" * 65)

for _, row in df_scan.iterrows():
    mutation = f"{row['Wild-Type AA']}{row['PDB Position']}A"
    print(f"{mutation:<12} {row['ΔΔG (REU)']:>+10.2f} "
          f"{row['Chemical Class']:<20} {row['Effect']}")

print("=" * 65)

hot_spots = df_scan[df_scan["Effect"] == "Hot spot"]
print(f"\nHot spots identified ({len(hot_spots)} residues with ΔΔG ≥ 2.0 REU):")
for _, row in hot_spots.iterrows():
    print(f"  → {row['Wild-Type AA']}{row['PDB Position']}A : ΔΔG = {row['ΔΔG (REU)']:+.2f} REU")

df_scan.to_csv("alanine_scan_results.csv", index=False)
print("\nFull results saved to alanine_scan_results.csv")
```

**Key Concepts:**

- **`f-string formatting`:** `{value:>+10.2f}` formats a float with 2 decimal places, in a right-aligned field 10 characters wide, with a `+` sign for positive values. This produces neatly aligned columns.
- **Hot spot vs. dispensable:** These classifications guide the next step in drug design — hot spot residues are the targets for designing tighter-binding drugs (you want your drug to interact with these residues maximally).

---

## Cell 5 — Plot the Alanine Scan Results
*Visualize ΔΔG across all binding site residues*

```python
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# Assign colors by effect
EFFECT_COLORS = {
    "Hot spot":    "#c0392b",
    "Moderate":    "#e67e22",
    "Dispensable": "#95a5a6",
    "Stabilizing": "#27ae60",
    "Already Ala": "#bdc3c7"
}

df_plot  = df_scan.sort_values("ΔΔG (REU)", ascending=False)
labels   = [f"{row['Wild-Type AA']}{row['PDB Position']}A" for _, row in df_plot.iterrows()]
values   = df_plot["ΔΔG (REU)"].tolist()
colors   = [EFFECT_COLORS.get(e, "#95a5a6") for e in df_plot["Effect"]]

fig, ax = plt.subplots(figsize=(13, 6))
bars = ax.bar(labels, values, color=colors, edgecolor="white", linewidth=0.5)

# Reference lines
ax.axhline(y=2.0, color="#c0392b", linestyle="--", linewidth=1.0, label="Hot spot threshold (2.0)")
ax.axhline(y=1.0, color="#e67e22", linestyle="--", linewidth=0.8, label="Moderate threshold (1.0)")
ax.axhline(y=0.0, color="black",   linestyle="-",  linewidth=0.5)

ax.set_xlabel("Mutation", fontsize=11)
ax.set_ylabel("ΔΔG (REU)", fontsize=11)
ax.set_title("Alanine Scan — COX-2 Binding Site\n(Positive ΔΔG = residue contributes to Ibuprofen binding)",
             fontsize=13, fontweight="bold")
plt.xticks(rotation=45, ha="right", fontsize=9)

# Legend
patches = [mpatches.Patch(color=v, label=k) for k, v in EFFECT_COLORS.items()]
ax.legend(handles=patches, loc="upper right", fontsize=9)

plt.tight_layout()
plt.savefig("alanine_scan.png", dpi=150, bbox_inches="tight")
plt.show()
print("Chart saved as alanine_scan.png")
```

**Key Concepts:**

- **Threshold lines:** Horizontal reference lines at ΔΔG = 1.0 and 2.0 make it immediately obvious which bars cross into meaningful territory. Always add reference lines when your data has scientifically meaningful thresholds.
- **Color-by-category:** Using a consistent color scheme across a project (same colors in Cell 5 and Cell 4's output) makes results easier to follow and report.

---

## Cell 6 — Structure-Activity Relationship (SAR) Summary
*Connect computational results to drug design strategy*

```python
hot_spots    = df_scan[df_scan["Effect"] == "Hot spot"]
moderate     = df_scan[df_scan["Effect"] == "Moderate"]
dispensable  = df_scan[df_scan["Effect"] == "Dispensable"]

print("STRUCTURE-ACTIVITY RELATIONSHIP (SAR) SUMMARY")
print("=" * 60)
print(f"\nTotal binding site residues scanned: {len(df_scan)}")
print(f"  Hot spots      (ΔΔG ≥ 2.0): {len(hot_spots)} residues")
print(f"  Moderate       (ΔΔG ≥ 1.0): {len(moderate)} residues")
print(f"  Dispensable    (ΔΔG < 1.0): {len(dispensable)} residues")

print("\nDrug design implications:")
print("-" * 60)

if len(hot_spots) > 0:
    print("\n✓ HOT SPOTS — Design new drugs to maximally engage these:")
    for _, row in hot_spots.iterrows():
        chem = row["Chemical Class"]
        pos  = row["PDB Position"]
        aa   = row["Wild-Type AA"]
        print(f"   {aa}{pos}: {chem} residue — "
              f"{'add hydrophobic group to drug' if chem == 'Hydrophobic' else 'add H-bond donor/acceptor' if chem == 'Polar' else 'add complementary charge to drug'}")

print("\n✗ DISPENSABLE — Drug modifications here will not improve binding:")
for _, row in dispensable.iterrows():
    print(f"   {row['Wild-Type AA']}{row['PDB Position']}: "
          f"low contribution (ΔΔG = {row['ΔΔG (REU)']:+.2f} REU)")

print("\nNext step: Use Project 6 to simulate resistance mutations at hot spot positions.")
```

This cell turns raw numbers into **actionable scientific conclusions** — the goal of any computational analysis. A list of ΔΔG values means nothing on its own; translating them into design recommendations is what makes the work useful.

**Key Concepts:**

- **SAR (Structure-Activity Relationship):** The systematic study of how changes in molecular structure affect biological activity. The central framework of medicinal chemistry.
- **Hot spot engagement:** When designing a new drug, medicinal chemists deliberately add functional groups that form strong interactions with hot spot residues. This is how drugs are optimized from initial hits into clinical candidates.
- **Actionable output:** Every computational analysis should end with a recommendation, not just numbers. "Residue X is a hot spot" is a number. "Design drugs that add a hydrogen bond donor to interact with X" is an action.

---

## Discussion Questions

**1.** How many hot spot residues did you find in the COX-2 binding site? Are they all the same chemical class, or a mix?

**2.** If you were designing a new drug to replace Ibuprofen, which residue(s) would you most want your new drug to interact with? Why?

**3.** One assumption we make is that Alanine-mutant proteins still fold correctly and maintain the same overall shape. When might this assumption break down? (Hint: think about Glycine and Proline.)

**4.** We used the subtraction method to calculate binding energy. What are the limitations of this approach compared to more sophisticated methods like FEP (Free Energy Perturbation)?

**5.** Experimental alanine scanning involves actually synthesizing and testing each mutant protein. How might the computational results from this project guide which mutations to prioritize for expensive lab testing?

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Alanine scanning** | Systematically mutating each residue to Alanine to measure its contribution |
| **ΔΔG** | The change in binding energy caused by a mutation. Positive = weaker binding |
| **Hot spot** | A residue whose side chain contributes strongly to binding (ΔΔG ≥ 2.0 REU) |
| **Wild type** | The original, naturally occurring protein sequence before any mutations |
| **Dispensable residue** | A residue that contributes little to binding; mutating it has minimal effect |
| **SAR** | Structure-Activity Relationship — the study of how molecular structure affects activity |
| **Binding affinity** | How tightly a drug binds to its target. Higher affinity = tighter binding = better drug |
| **`df.iterrows()`** | Iterates over a pandas DataFrame one row at a time |
| **Functional group** | A specific chemical group on a drug molecule (e.g. -OH, -NH₂) that drives interactions |
| **Medicinal chemistry** | The science of designing and optimizing drug molecules for maximum efficacy and safety |
