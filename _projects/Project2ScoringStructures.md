---
layout: page
title: Project 3 - Scoring Protein Structures
description: Drug Design with PyRosetta — Comparing Structure Quality Across PDB Models
img: assets/img/RosettaCover.png
importance: 2
category: rosetta
related_publications: false
---

## What You Will Learn

- How to download multiple versions of the same protein from the PDB
- What makes one protein structure "better" than another
- How to use Rosetta energy scores to rank structural quality
- Why experimental resolution and scoring disagreements happen
- How to automate comparisons and visualize the results

**Time:** ~20–30 minutes &nbsp;|&nbsp; **Prerequisite:** Project 1 completed &nbsp;|&nbsp; **Difficulty:** Beginner

---

## Background: Why Are There Multiple Structures of the Same Protein?

If you search the Protein Data Bank for a famous protein like Lysozyme, you do not find just one entry — you find dozens. Each entry represents a separate experiment, often performed by a different lab, under different conditions, using different crystals.

This raises a natural question: **are all these structures equally good?**

The answer is no. Some structures were determined at higher resolution (meaning they captured atomic positions more precisely). Some have better-behaved chemistry. Some were solved with older methods and contain small errors. Rosetta's energy scoring function is sensitive to these differences — a higher-quality structure will generally have a lower (more negative) Rosetta score.

> **Analogy:** Imagine ten different photographers taking a photo of the same building. Some use high-end cameras in perfect light and produce sharp, detailed images. Others use older equipment or shoot in bad weather. All ten photos show the same building, but some are much clearer and more useful than others. Rosetta scoring is like a sharpness meter — it can distinguish the crisp photos from the blurry ones.

In drug design, this matters enormously. If you use a poor-quality structure to design a drug, your drug may not work in the real world because the binding site geometry was slightly wrong in your model.

---

## The Protein We Will Study: Lysozyme

We already used Lysozyme in Project 1. Here we will download **five different PDB structures** of Lysozyme and rank them by Rosetta energy score.

| PDB ID | Notes |
|--------|-------|
| **1LYZ** | Classic hen egg-white lysozyme, 2.0 Å resolution |
| **2LYZ** | High-resolution structure, 1.65 Å resolution |
| **4LYZ** | Another well-studied variant |
| **1LSE** | Lysozyme at lower resolution |
| **2LZT** | Triclinic crystal form |

> **Resolution:** Measured in Ångströms (Å). Lower number = more precise atomic positions. A resolution of 1.0 Å is exceptional; 3.0 Å is considered low resolution.

---

## Cell 1 — Initialize PyRosetta
*Start the engine*

```python
import pyrosetta
pyrosetta.init("-mute all")
print("PyRosetta ready!")
```

The `-mute all` flag suppresses Rosetta's internal log messages so your output is clean. When developing your own projects you may want to remove this flag so you can read the logs.

**Key Concepts:**

- **`-mute all`:** A Rosetta flag that silences verbose internal output. Useful once you know the code is working correctly.

---

## Cell 2 — Download and Score One Structure
*Build the core logic before automating*

```python
from pyrosetta.toolbox import pose_from_rcsb

# Download one structure and score it
scorefxn = pyrosetta.get_fa_scorefxn()

pdb_id = "1LYZ"
pose = pose_from_rcsb(pdb_id)
score = scorefxn(pose)

print(f"PDB ID: {pdb_id}")
print(f"Number of residues: {pose.total_residue()}")
print(f"Rosetta score: {score:.2f} REU")
```

This cell repeats what you already know from Project 1 — download a protein, score it, print the result. We write it out explicitly here so we can see the core logic clearly before we automate it in the next cell.

**Key Concepts:**

- **Sanity check:** Always test your code on a single case before running a loop. If something is wrong, it is much easier to debug one structure than five at once.

---

## Cell 3 — Score All Five Structures Automatically
*Use a loop to repeat the experiment*

```python
import pandas as pd

# The five Lysozyme structures we will compare
pdb_ids = ["1LYZ", "2LYZ", "4LYZ", "1LSE", "2LZT"]

results = []

for pdb_id in pdb_ids:
    try:
        print(f"Processing {pdb_id}...", end=" ")
        pose = pose_from_rcsb(pdb_id)
        score = scorefxn(pose)
        n_res = pose.total_residue()

        results.append({
            "PDB ID": pdb_id,
            "Residues": n_res,
            "Rosetta Score (REU)": round(score, 2),
            "Score per Residue": round(score / n_res, 2)
        })
        print(f"done — {score:.2f} REU")

    except Exception as e:
        print(f"failed — {e}")
        results.append({
            "PDB ID": pdb_id,
            "Residues": "N/A",
            "Rosetta Score (REU)": "N/A",
            "Score per Residue": "N/A"
        })

df = pd.DataFrame(results)
print("\n" + df.to_string(index=False))
```

This loop downloads and scores each of the five structures, collecting results into a table. Notice the new column: **Score per Residue**.

**Why normalize by residue count?**

Different PDB entries of "the same" protein sometimes include slightly different numbers of residues — some include flexible loop regions that others leave out, or some contain extra residues from the expression tag used in the experiment. A raw Rosetta score is larger (more negative) simply for having more atoms. Dividing by the number of residues gives a **normalized score** that is fair to compare across structures of slightly different lengths.

| Raw Score | Residues | Score per Residue |
|-----------|----------|-------------------|
| −1800 REU | 129 | −13.95 |
| −1600 REU | 115 | −13.91 |
| −2400 REU | 200 | −12.00 |

In this example the third structure looks best by raw score — but per residue it is actually the weakest. Normalization tells the true story.

**Key Concepts:**

- **Normalization:** Dividing a raw value by a size measure to make fair comparisons. Common in biology, statistics, and data science.
- **`try/except`:** Handles errors gracefully. If a download fails (e.g. network problem), the loop skips that entry and continues instead of crashing.
- **`end=" "`:** Keeps the "done" message on the same line as the "Processing..." message, giving clean progress output.

---

## Cell 4 — Rank the Structures
*Sort by score per residue to find the best model*

```python
# Filter out any failed entries and sort
df_clean = df[df["Score per Residue"] != "N/A"].copy()
df_clean["Score per Residue"] = df_clean["Score per Residue"].astype(float)
df_clean = df_clean.sort_values("Score per Residue", ascending=True)
df_clean["Rank"] = range(1, len(df_clean) + 1)

print("=" * 60)
print("STRUCTURE RANKING (most negative per-residue score = best)")
print("=" * 60)
print(df_clean[["Rank", "PDB ID", "Residues", "Score per Residue"]].to_string(index=False))
print("=" * 60)

best = df_clean.iloc[0]
print(f"\nBest structure: {best['PDB ID']} ({best['Score per Residue']:.2f} REU/residue)")
```

**Key Concepts:**

- **`df[df["col"] != "N/A"]`:** Filters a DataFrame to keep only rows where the column is not "N/A". This removes any structures that failed to download.
- **`.astype(float)`:** Converts a column from text strings to numbers so we can sort numerically.
- **`sort_values(ascending=True)`:** Sorts lowest (most negative) first — these are the best Rosetta scores.
- **`df.iloc[0]`:** Gets the first row of the sorted DataFrame — the top-ranked structure.

---

## Cell 5 — Visualize the Comparison
*Plot scores as a horizontal bar chart*

```python
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np

df_plot = df_clean.sort_values("Score per Residue", ascending=True)

# Colour gradient: darker = better score
colors = cm.YlOrRd_r(np.linspace(0.2, 0.8, len(df_plot)))

fig, ax = plt.subplots(figsize=(10, 5))
bars = ax.barh(df_plot["PDB ID"], df_plot["Score per Residue"],
               color=colors, height=0.5)

ax.set_xlabel("Score per Residue (REU)", fontsize=12)
ax.set_title("Lysozyme Structure Quality Comparison\n(More negative = better Rosetta score)",
             fontsize=13, fontweight="bold")
ax.axvline(x=0, color="black", linestyle="--", linewidth=0.8)

# Annotate each bar with the score value
for bar, val in zip(bars, df_plot["Score per Residue"]):
    ax.text(val - 0.1, bar.get_y() + bar.get_height() / 2,
            f"{val:.2f}", va="center", ha="right",
            fontsize=10, fontweight="bold", color="white")

plt.tight_layout()
plt.savefig("structure_comparison.png", dpi=150, bbox_inches="tight")
plt.show()
print("Chart saved as structure_comparison.png")
```

**Key Concepts:**

- **`matplotlib.cm`:** Matplotlib's "colormap" module. Colormaps automatically assign a colour from a gradient to each data point — here `YlOrRd_r` is a yellow-to-red scale, reversed so the best scores appear darkest.
- **`np.linspace(0.2, 0.8, n)`:** Creates `n` evenly spaced numbers between 0.2 and 0.8. We use this to pick `n` colors spread across the colormap.
- **Annotating bars:** Placing the score value inside each bar makes the chart self-contained — a reader does not need to look at a separate table to read the numbers.

---

## Cell 6 — Interpret the Results
*Connect scoring differences to structural biology*

```python
df_plot = df_clean.sort_values("Score per Residue")

best  = df_plot.iloc[0]
worst = df_plot.iloc[-1]
spread = abs(best["Score per Residue"]) - abs(worst["Score per Residue"])

print("INTERPRETATION")
print("=" * 55)
print(f"\nBest structure:  {best['PDB ID']} ({best['Score per Residue']:.2f} REU/residue)")
print(f"Worst structure: {worst['PDB ID']} ({worst['Score per Residue']:.2f} REU/residue)")
print(f"Spread:          {spread:.2f} REU/residue")
print()
print("What the spread tells us:")
print("  • A larger spread means some structures are significantly")
print("    better modelled than others.")
print("  • If the spread is small (<2 REU/residue), all structures")
print("    are roughly equivalent quality.")
print("  • If the spread is large (>5 REU/residue), you should")
print("    prefer the top-ranked structure for drug design work.")
print()
print(f"Recommendation: Use {best['PDB ID']} as your starting structure.")
```

**Key Concepts:**

- **`df.iloc[-1]`:** Gets the last row — the worst-ranked structure after sorting.
- **Spread:** The difference between the best and worst scores. A large spread tells us that structure choice matters; a small spread tells us all structures are roughly equivalent.
- **Practical recommendation:** In real drug discovery projects, computational chemists always choose the highest-quality starting structure. A 1–2 REU/residue difference can translate into meaningfully different docking results downstream.

---

## Discussion Questions

**1.** Did the highest-resolution structure (lowest Å value) always have the best Rosetta score? If not, why might they disagree?

**2.** We normalized scores by number of residues. What other ways might you normalize protein scores to make fair comparisons?

**3.** If two structures have very similar per-residue scores but one has more residues, which would you prefer for drug docking? Why?

**4.** Rosetta scores measure energy in a computational model. What real-world factors might make a computationally "worse" structure more useful for a specific experiment?

**5.** If you were designing a drug to bind Lysozyme, which structure would you choose as your starting point? Justify your answer using the data from this project.

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Resolution (Å)** | How precisely atomic positions were measured. Lower = better. |
| **Normalization** | Dividing a raw value by a size measure to allow fair comparison |
| **Score per residue** | Rosetta energy score divided by the number of amino acids |
| **Colormap** | A mapping from numerical values to colours; used for visual encoding of data |
| **Sanity check** | Testing code on a single known case before running a full loop |
| **pose_from_rcsb** | Downloads and loads a PDB structure from the RCSB Protein Data Bank |
| **Spread** | The range between the best and worst scores in a comparison |
| **Expression tag** | Extra amino acids added to a protein to help purify it; sometimes included in PDB structures |
