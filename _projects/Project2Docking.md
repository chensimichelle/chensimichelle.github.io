---
layout: page
title: Project 2 - Protein-Ligand Docking
description: Drug Design with PyRosetta — Comparing COX-2 Inhibitors
img: assets/img/RosettaCover.png
importance: 4
category: rosetta
related_publications: false
---

## What You Will Learn

- What protein-ligand docking is and why it matters in drug discovery
- How to load a protein-drug complex from the Protein Data Bank
- How to measure binding strength using computational energy scores
- How to compare multiple real drug candidates and rank them
- Why some drugs bind better than others — the foundation of drug design

**Time:** ~30–45 minutes &nbsp;|&nbsp; **Prerequisite:** Project 1 completed &nbsp;|&nbsp; **Difficulty:** Beginner–Intermediate

---

## Background: What is Protein-Ligand Docking?

Every drug works by binding to a specific protein in your body. When the drug binds, it either blocks the protein from working (like an antibiotic stopping a bacterial enzyme) or activates it in a new way. The better a drug fits into the protein's binding pocket, the more effective it tends to be.

Protein-ligand docking is a computational technique that predicts how a small molecule (the drug candidate, or "ligand") will fit into a protein's binding site, and how strongly it will bind. This lets scientists screen thousands of potential drugs on a computer before spending money synthesizing and testing them in the lab.

| Without Computational Docking | With Computational Docking |
|---|---|
| Synthesize drug in lab (weeks) | Screen thousands of candidates digitally (hours) |
| Test on cells or animals (months) | Only test the top candidates in the lab |
| Cost: $10,000–$100,000+ per candidate | Cost: Nearly free per candidate |
| Most candidates fail at this stage | Dramatically reduces time and cost |

> **Real World:** Computational docking was used to help identify drug candidates for COVID-19, HIV, and many cancers. It is now a standard step in nearly every modern drug discovery project.

---

## The Protein We Will Study: COX-2

In this project we will study **Cyclooxygenase-2 (COX-2)**, an enzyme that causes inflammation and pain. COX-2 is the target of many common pain-relief drugs. By blocking COX-2's active site, these drugs reduce inflammation.

We will compare three real COX-2 inhibitors — **Ibuprofen (Advil)**, **Celecoxib (Celebrex)**, and **Meloxicam (Mobic)** — by loading their crystal structures from the Protein Data Bank and calculating how strongly each one binds.

> **Analogy:** Think of COX-2's binding site as a lock and drug molecules as keys. Some keys fit perfectly (strong binding, effective drug). Others are the wrong shape (weak binding, less effective). Our job is to find the best key.

---

## How We Calculate Binding Energy

We use a simple but powerful method called the **subtraction method**:

```
Binding Energy = Complex Score − (Protein Score + Ligand Score)

More negative result = stronger binding = better drug candidate
```

- Score the full complex (protein + drug together)
- Score the protein alone (drug removed)
- Score the drug alone (protein removed)
- Subtract: if the drug "wants" to be bound, the complex score will be lower than the sum of the parts — giving a negative binding energy

---

## Drugs We Will Compare

| Drug | Brand Name | PDB ID | Notes |
|---|---|---|---|
| **Ibuprofen** | Advil | 4PH9 | Common OTC pain reliever. Ligand code: IBP at position 552 |
| **Celecoxib** | Celebrex | 3LN1 | Prescription selective COX-2 inhibitor. Ligand code: CEL at position 556 |
| **Meloxicam** | Mobic | 4M11 | Prescription anti-inflammatory. Ligand code: MXM at position 556 |

---

## Cell 1 — Initialize PyRosetta
*Start the engine with ligand support enabled*

```python
import pyrosetta
from pyrosetta import *
from pyrosetta.toolbox import *

# The flag tells Rosetta to recognize drug molecules (ligands)
# Without this, PyRosetta strips out the drug when loading the PDB
pyrosetta.init(extra_options="-ignore_unrecognized_res false -load_PDB_components true")

print("PyRosetta ready!")
```

> **Important:** Always use these exact init flags for this project. Without `-load_PDB_components true`, PyRosetta will ignore the drug molecule and load only the protein.

This cell is similar to Project 1, but with one critical difference: the `extra_options` argument. In Project 1 we only loaded protein — here we also need to load the drug molecule. Without these flags, PyRosetta would silently discard the drug and we would have nothing to score.

**Key Concepts:**

- **extra_options:** A way to pass special instructions to Rosetta's internal engine when it starts up.
- **-ignore_unrecognized_res false:** Tells Rosetta *not* to skip molecules it doesn't immediately recognise — like drug molecules.
- **-load_PDB_components true:** Loads Rosetta's built-in library of known small molecules so it can identify and handle drugs.

---

## Cell 2 — Load and Inspect the Structure
*Download COX-2 + Ibuprofen and find all molecules*

```python
import urllib.request
from pyrosetta import pose_from_pdb

# Download the raw PDB file directly
# pose_from_rcsb strips ligands — we must download manually
url = "https://files.rcsb.org/download/4PH9.pdb"
urllib.request.urlretrieve(url, "4PH9.pdb")
print("Downloaded 4PH9.pdb")

# Load the structure
pose = pose_from_pdb("4PH9.pdb")
print(f"Total residues (protein + all molecules): {pose.total_residue()}")

# Find all non-protein residues (drugs, sugars, etc.)
print("\nNon-protein residues and their chains:")
for i in range(1, pose.total_residue() + 1):
    res = pose.residue(i)
    if not res.is_protein():
        chain = pose.pdb_info().chain(i)
        print(f"  Position {i}: {res.name()} — Chain {chain}")
```

> **Note:** You will see many non-protein residues: IBP (Ibuprofen), HEM (Heme), BOG, NAG, EDO etc. These are all molecules present in the crystal structure. We only care about IBP — the drug.

This cell downloads and inspects the raw protein structure. Notice we use `pose_from_pdb` (loading from a local file) instead of `pose_from_rcsb` (direct download) — this is because `pose_from_rcsb` automatically strips out ligands, which would defeat the whole purpose of this project.

**Key Concepts:**

- **urllib.request:** A Python built-in library for downloading files from the internet.
- **pose_from_pdb:** Loads a protein structure from a local `.pdb` file, keeping all molecules intact.
- **res.is_protein():** Returns `True` if a residue is a standard amino acid, `False` if it is a drug, water molecule, or anything else.
- **pdb_info().chain(i):** Returns which chain (A, B, etc.) a residue belongs to. Crystal structures often contain multiple copies of a protein.

---

## Cell 3 — Clean the Structure
*Keep only chain A protein + the drug*

The raw PDB contains two protein chains (A and B) plus many other molecules. We need to isolate just one protein chain and its drug before scoring.

```python
# Create a scoring function
scorefxn = pyrosetta.get_fa_scorefxn()

# Score the full messy complex first
total_score = scorefxn(pose)
print(f"Full complex score: {total_score:.2f} REU")

# Keep ONLY chain A protein residues + IBP at position 552
# We must clean before scoring to avoid interference from other molecules
keep_positions = []
for i in range(1, pose.total_residue() + 1):
    res = pose.residue(i)
    chain = pose.pdb_info().chain(i)
    if chain == "A" and (res.is_protein() or res.name() == "pdb_IBP"):
        keep_positions.append(i)

# Delete everything not in our keep list (in reverse to preserve numbering)
clean_pose = pose.clone()
delete_positions = [i for i in range(1, pose.total_residue() + 1)
                    if i not in keep_positions]
for i in reversed(delete_positions):
    clean_pose.delete_residue_slow(i)

print(f"Clean pose: {clean_pose.total_residue()} residues")

# Verify the drug is still there
for i in range(1, clean_pose.total_residue() + 1):
    if not clean_pose.residue(i).is_protein():
        print(f"Drug found at position {i}: {clean_pose.residue(i).name()}")
```

> **Expected Output:** `Clean pose: 552 residues. Drug found at position 552: pdb_IBP`

This is the "housekeeping" step. Crystal structures contain many extra molecules that are not relevant to our experiment — water molecules, stabilising agents, and the second copy of the protein. If we scored everything together, those extra molecules would contaminate our binding energy calculation.

**Key Concepts:**

- **Chain A:** By convention, crystal structures label their protein copies A, B, C, etc. We always use chain A as our reference.
- **reversed(delete_positions):** We delete from the end of the list backwards. If we deleted from position 1 first, all the subsequent position numbers would shift and we would delete the wrong residues.
- **delete_residue_slow:** A PyRosetta function that carefully removes a residue and re-indexes the pose. It is called "slow" because it is thorough — faster methods can corrupt the structure.
- **`"pdb_IBP"`:** PyRosetta prefixes ligand codes with `"pdb_"` to distinguish them from standard amino acids.

---

## Cell 4 — Calculate Ibuprofen Binding Energy
*Score complex, protein alone, and drug alone*

```python
# Score 1: Full complex (protein + drug together)
complex_score = scorefxn(clean_pose)
print(f"Complex score: {complex_score:.2f} REU")

# Score 2: Protein alone (remove drug at position 552)
protein_only = clean_pose.clone()
protein_only.delete_residue_slow(552)
protein_score = scorefxn(protein_only)
print(f"Protein alone score: {protein_score:.2f} REU")

# Score 3: Drug alone (remove all protein residues 1-551)
drug_only = clean_pose.clone()
for i in reversed(range(1, 552)):
    drug_only.delete_residue_slow(i)
drug_score = scorefxn(drug_only)
print(f"Drug alone score: {drug_score:.2f} REU")

# Binding energy = complex - (protein + drug)
ibuprofen_binding = complex_score - (protein_score + drug_score)
print(f"\nIbuprofen binding energy: {ibuprofen_binding:.2f} REU")
print("More negative = stronger binding = better drug candidate")
```

> **Expected Output:** `Ibuprofen binding energy: -26.94 REU` — negative means the drug genuinely prefers to stay bound to COX-2.

This is the heart of the experiment. The logic mirrors real-world thermodynamics: if binding is favorable, the complex (protein + drug together) has lower energy than the two parts separately. The difference — the binding energy — tells us how much the drug "wants" to be bound.

| Score | What it measures |
|---|---|
| **Complex score** | Total energy of protein and drug sitting together in the binding pocket |
| **Protein score** | Energy of the protein with an empty binding site |
| **Drug score** | Energy of the free-floating drug molecule on its own |
| **Binding energy** | Complex − (Protein + Drug): the energy gained from binding |

**Key Concepts:**

- **Subtraction method:** A simple approximation of binding affinity. Real pharmaceutical research uses more sophisticated methods, but this captures the same fundamental idea.
- **Negative binding energy:** The complex is more stable than the separated parts — the drug is genuinely attracted to the binding site.
- **Positive binding energy:** Would mean the drug actively *dislikes* the binding site — it would not be a useful drug candidate.

---

## Cell 5 — Compare All Three Drugs
*Automate the scoring for all drug candidates*

Now we automate the same process for all three drugs. Each drug comes from a different PDB structure, so we loop through them all.

```python
import urllib.request
import pandas as pd

# Drug list with confirmed ligand codes from the PDB structures
# Format: drug name: (PDB ID, ligand code, known position in chain A)
drug_structures = {
    "Ibuprofen": ("4PH9", "IBP", 552),   # Advil
    "Celecoxib": ("3LN1", "CEL", 556),   # Celebrex
    "Meloxicam": ("4M11", "MXM", None),  # Mobic - auto-detect position
}

results = []

def score_drug(pdb_id, ligand_code, known_pos=None):
    """Download, clean, and score a protein-drug complex."""
    # Download PDB
    url = f"https://files.rcsb.org/download/{pdb_id}.pdb"
    urllib.request.urlretrieve(url, f"{pdb_id}.pdb")
    p = pose_from_pdb(f"{pdb_id}.pdb")

    # Find ligand position in chain A
    ligand_pos = known_pos
    if ligand_pos is None:
        for i in range(1, p.total_residue() + 1):
            if (p.residue(i).name() == f"pdb_{ligand_code}"
                    and p.pdb_info().chain(i) == "A"):
                ligand_pos = i
                break

    if ligand_pos is None:
        print(f"  Ligand {ligand_code} not found in chain A!")
        return None

    print(f"  Found {ligand_code} at position {ligand_pos}, chain A")

    # Keep only chain A protein + ligand
    keep = [i for i in range(1, p.total_residue() + 1)
            if p.pdb_info().chain(i) == "A"
            and (p.residue(i).is_protein() or i == ligand_pos)]
    clean = p.clone()
    for i in reversed([i for i in range(1, p.total_residue() + 1)
                       if i not in keep]):
        clean.delete_residue_slow(i)

    # Find new ligand position after deletion
    new_lig = next(i for i in range(1, clean.total_residue() + 1)
                   if not clean.residue(i).is_protein())

    # Score complex
    complex_s = scorefxn(clean)

    # Score protein alone
    prot = clean.clone()
    prot.delete_residue_slow(new_lig)
    prot_s = scorefxn(prot)

    # Score ligand alone
    lig = clean.clone()
    for i in reversed(range(1, new_lig)):
        lig.delete_residue_slow(i)
    lig_s = scorefxn(lig)

    return round(complex_s - (prot_s + lig_s), 2)

# Run for all three drugs
for drug_name, (pdb_id, ligand_code, known_pos) in drug_structures.items():
    print(f"\nProcessing {drug_name} ({pdb_id})...")
    try:
        binding = score_drug(pdb_id, ligand_code, known_pos)
        if binding is not None:
            print(f"  Binding energy: {binding:.2f} REU")
            results.append({
                "Drug": drug_name,
                "PDB ID": pdb_id,
                "Binding Energy (REU)": binding
            })
    except Exception as e:
        print(f"  Error: {e}")

print("\nAll drugs processed!")
```

This cell packages everything from Cell 4 into a reusable **function** called `score_drug`, then calls it once for each of our three drugs.

**Key Concepts:**

- **Function (`def`):** A named block of reusable code. Instead of copy-pasting Cell 4 three times, we write it once as a function and call it with different inputs each time.
- **Dictionary:** The `drug_structures` variable stores key-value pairs — each drug name maps to its PDB ID, ligand code, and position.
- **Auto-detect position (`None`):** For Meloxicam we don't know the position in advance, so we set it to `None` and let the code search for it automatically.
- **try/except:** Wraps code that might fail (like a failed download). If an error occurs, it prints the error and continues instead of crashing the whole notebook.

---

## Cell 6 — Build the Rankings Table
*Sort and display the results*

```python
import pandas as pd

# Create results table and sort by binding energy
df = pd.DataFrame(results)
df = df.sort_values("Binding Energy (REU)", ascending=True)
df["Rank"] = range(1, len(df) + 1)

# Print the ranking
print("=" * 55)
print("DRUG RANKING (most negative = strongest binder)")
print("=" * 55)
print(df.to_string(index=False))
print("=" * 55)
```

> **Expected Results:**
> - Rank 1: Ibuprofen (−26.94 REU)
> - Rank 2: Celecoxib (−20.84 REU)
> - Rank 3: Meloxicam (−15.03 REU)

**Key Concepts:**

- **`sort_values(ascending=True)`:** Sorts the table so the most negative (best) binding energy appears first. `ascending=True` means smallest number first — since our values are negative, that means the most negative.
- **`range(1, len(df) + 1)`:** Creates rank numbers 1, 2, 3 that match the sorted order.
- **`to_string(index=False)`:** Prints the full table without the default row index numbers on the left.

---

## Cell 7 — Plot the Results
*Visualize binding energies as a bar chart*

```python
import matplotlib.pyplot as plt

# Use the confirmed results directly
data = {
    "Drug": ["Ibuprofen", "Celecoxib", "Meloxicam"],
    "Binding Energy (REU)": [-26.94, -20.84, -15.03],
    "Common Name": ["Advil", "Celebrex", "Mobic"]
}
df_plot = pd.DataFrame(data).sort_values("Binding Energy (REU)")

# Darker green = stronger binder
colors = ["#1a5c2a", "#2e9e58", "#7dd4a0"]

fig, ax = plt.subplots(figsize=(11, 6))
bars = ax.barh(df_plot["Drug"], df_plot["Binding Energy (REU)"],
               color=colors, height=0.5)
ax.axvline(x=0, color="black", linestyle="--", linewidth=0.8)
ax.set_xlabel("Binding Energy (REU)", fontsize=12)
ax.set_title("COX-2 Inhibitor Binding Comparison\n(More negative = stronger binding)",
             fontsize=13, fontweight="bold")

# Labels with white background box for readability
for bar, val, name in zip(bars, df_plot["Binding Energy (REU)"],
                           df_plot["Common Name"]):
    ax.text(val - 0.3, bar.get_y() + bar.get_height()/2,
            f"{val:.2f} REU ({name})",
            va="center", ha="right",
            color="black", fontweight="bold", fontsize=11,
            bbox=dict(boxstyle="round,pad=0.2", facecolor="white",
                      edgecolor="gray", alpha=0.8))

ax.set_xlim(-35, 2)
ax.invert_xaxis()
plt.tight_layout()
plt.savefig("docking_results.png", dpi=150, bbox_inches="tight")
plt.show()
print("Chart saved as docking_results.png")
```

This cell creates a **horizontal bar chart** — a better choice than a vertical one here because the drug names are long and easier to read on the left side. The colour gradient (dark green = best binder, light green = weakest) gives an immediate visual signal of ranking.

**Key Concepts:**

- **`barh`:** Horizontal bar chart. The `h` stands for horizontal.
- **`axvline(x=0)`:** Draws a vertical reference line at zero — bars extending left of this line represent negative (favorable) binding energies.
- **`invert_xaxis()`:** Flips the x-axis so the most negative values (longest bars) appear on the left, making the "best binder" visually the most prominent.
- **`bbox=dict(...)`:** Adds a white box behind each label so it is readable even when overlapping with the bar.
- **`dpi=150`:** Sets image resolution. Higher DPI = sharper image when saved.

---

## Cell 8 — Interpret the Results
*Connect scores to real-world drug science*

```python
best  = min(results, key=lambda x: x["Binding Energy (REU)"])
worst = max(results, key=lambda x: x["Binding Energy (REU)"])

print("RESULTS INTERPRETATION")
print("=" * 50)
print(f"\nBest binder:    {best['Drug']} ({best['Binding Energy (REU)']:.2f} REU)")
print(f"Weakest binder: {worst['Drug']} ({worst['Binding Energy (REU)']:.2f} REU)")

diff = abs(best["Binding Energy (REU)"]) - abs(worst["Binding Energy (REU)"])
print(f"\n{best['Drug']} binds {diff:.2f} REU more favorably than {worst['Drug']}")

print("\nAll three drugs have negative binding energies,")
print("meaning all three genuinely bind to COX-2.")
print("This matches real pharmacology — all are approved COX-2 inhibitors.")

print("\nRemember: binding score is just one factor in drug development.")
print("Safety, side effects, bioavailability, and cost also matter.")
```

**Key Concepts:**

- **`min(..., key=lambda x: x[...])`:** Finds the item with the smallest value for a given field. `lambda` is a quick way to write a small one-line function — here it means "look at the Binding Energy field of each result."
- **`abs()`:** Returns the absolute value (removes the minus sign). We use this to calculate the *difference* between energies as a positive number.
- **Bioavailability:** How well a drug is absorbed and reaches its target in the body — a critical real-world factor that computational docking alone cannot capture.

---

## Discussion Questions

**1.** Which drug had the most negative binding energy? What does this tell you about how tightly it binds to COX-2?

**2.** All three drugs had negative binding energies. What would it mean scientifically if a drug had a *positive* binding energy?

**3.** Ibuprofen is sold over the counter while Celecoxib requires a prescription. Based on binding score alone, which is more potent? Does this match your expectation?

**4.** We compared drugs from different crystal structures — meaning the protein shape is slightly different in each. How might this affect the fairness of our comparison?

**5.** If you were a pharmaceutical researcher, what additional information beyond binding score would you need before deciding to develop a drug further?

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Ligand** | A small molecule (such as a drug) that binds to a protein |
| **Docking** | Computationally predicting how a ligand fits into a protein binding site |
| **Binding Energy** | The energy released when a drug binds to a protein. More negative = tighter binding |
| **COX-2** | Cyclooxygenase-2 — an enzyme that produces inflammation; the target of pain-relief drugs |
| **Active site** | The specific pocket on a protein where ligands bind |
| **PDB ID** | A unique 4-character code identifying a protein structure in the Protein Data Bank |
| **REU** | Rosetta Energy Units — the unit of Rosetta scores. Lower = more stable |
| **Crystal structure** | A protein structure determined by X-ray crystallography — the "ground truth" 3D shape |
| **pose_from_pdb** | PyRosetta function to load a protein structure from a local PDB file |
| **delete_residue_slow** | PyRosetta function to remove a specific residue from a pose |