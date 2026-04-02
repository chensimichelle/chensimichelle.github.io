---
layout: page
title: Project 1 - Protein Stability
description: Drug Design with PyRosetta — Alanine Scanning of Lysozyme
img: assets/img/RosettaCover.png
importance: 1
category: rosetta
related_publications: false
---

## The Big Picture

These 6 cells together tell one scientific story:

**Load a real protein → Measure its stability → Change amino acids → See which changes make the protein weaker or stronger → Plot the results**

This is exactly the kind of analysis researchers use to study drug resistance.

---

## Cell 1 — Start PyRosetta
*Import and initialize the protein modeling engine*

```python
import pyrosetta
pyrosetta.init()
print("PyRosetta ready!")
```

This cell has two important jobs:

- **`import pyrosetta`** — Loads the PyRosetta library into Python. Think of a library as a toolbox full of pre-written tools that someone else built for you.
- **`pyrosetta.init()`** — Starts up all the internal machinery Rosetta needs: databases, energy scoring parameters, and chemical definitions for all 20 amino acids.

> **Analogy:** This is like turning on the engine of a car before you drive. Nothing else will work if you skip this step.

**Key Concepts:**

- **Library:** A collection of pre-written Python code that adds new capabilities to your program.
- **import:** The Python command that loads a library so you can use its tools.
- **init():** Short for "initialize" — sets everything up and gets it ready to use.

---

## Cell 2 — Load a Protein
*Download a real protein structure from the global database*

```python
from pyrosetta.toolbox import pose_from_rcsb

# Download lysozyme from the Protein Data Bank
pose = pose_from_rcsb("1LYZ")
print(f"Protein loaded: {pose.total_residue()} amino acids")
```

This cell downloads a real protein structure from the internet and loads it into memory.

- **`pose_from_rcsb`** — A tool that knows how to talk to the Protein Data Bank website.
- **`"1LYZ"`** — The PDB ID code for Lysozyme, a protein found in egg whites and human tears. Every protein structure deposited in the database has a unique 4-character ID.
- **`pose`** — A variable that stores the entire protein structure: every atom, every bond, every 3D coordinate.

> **Analogy:** The Protein Data Bank is like a global library of protein blueprints. "1LYZ" is the catalogue number for Lysozyme's blueprint. `pose_from_rcsb` goes to that library and downloads the blueprint for us.

**Key Concepts:**

- **Protein Data Bank (PDB):** A worldwide database containing over 200,000 experimentally determined protein structures, freely available to everyone.
- **Pose:** Rosetta's internal representation of a protein — stores all atomic coordinates, chemistry, and sequence information.
- **Variable:** A named container in Python that stores a value. Here, "pose" stores the entire protein.

---

## Cell 3 — Score the Original Protein
*Calculate a baseline stability measurement*

```python
# Create a scoring function (like a stability calculator)
scorefxn = pyrosetta.get_fa_scorefxn()

# Score the original protein
original_score = scorefxn(pose)
print(f"Original stability score: {original_score:.2f}")
print("(Lower score = more stable protein)")
```

This cell creates a scoring function and uses it to measure how stable the protein is.

- **`get_fa_scorefxn()`** — "fa" stands for Full Atom. This creates Rosetta's standard energy scoring function, which calculates the protein's stability by examining every single atom and its interactions with neighbouring atoms.
- **`scorefxn(pose)`** — Applies the scoring function to the protein. It adds up many different physical forces: van der Waals interactions, hydrogen bonds, electrostatics, and more.
- **`original_score`** — Saved as the baseline. All future mutant scores will be compared to this number. The unit is REU (Rosetta Energy Units).

> **Analogy:** Think of the scoring function as a building inspector who checks every part of a structure and gives it a score. Lower scores mean the building (protein) is better constructed and more stable.

**Key Concepts:**

- **Scoring function:** A mathematical formula that estimates a protein's free energy. Based on physics and statistics from known protein structures.
- **REU:** Rosetta Energy Units — the unit used for Rosetta scores. Lower (more negative) = more stable.
- **Baseline:** The original measurement we compare everything else to. Like a control group in a science experiment.

---

## Cell 4 — Mutate One Amino Acid
*Change a single residue and measure the effect*

```python
from pyrosetta.toolbox import mutate_residue

# Make a copy of the original protein
mutant_pose = pose.clone()

# Change amino acid at position 50 to Alanine
mutate_residue(mutant_pose, 50, "A")

# Score the mutant
mutant_score = scorefxn(mutant_pose)
difference = mutant_score - original_score

print(f"Original score: {original_score:.2f}")
print(f"Mutant score:   {mutant_score:.2f}")
print(f"Difference:     {difference:.2f}")

if difference > 0:
    print("This mutation DESTABILIZES the protein")
else:
    print("This mutation STABILIZES the protein")
```

This is the core of the experiment — we swap one amino acid and measure the impact on stability.

- **`pose.clone()`** — Makes an exact copy of the original protein. We never modify the original directly, so we always have our baseline to compare against.
- **`mutate_residue(mutant_pose, 50, "A")`** — Swaps the amino acid at position 50 for Alanine. "A" is the single-letter code for Alanine, the simplest amino acid. We use Alanine because it removes the side chain while keeping the protein backbone intact.
- **`difference = mutant_score - original_score`** — Calculates how much the mutation changed the stability.

| Difference | Meaning | Real-world example |
|---|---|---|
| **Positive (e.g. +5.2)** | Destabilizing — protein is weaker | Drug resistance mutations often destabilize the drug binding site |
| **Negative (e.g. -3.1)** | Stabilizing — protein is stronger | Protein engineers use stabilizing mutations to make better medicines |

> **Analogy:** This is like replacing one brick in a wall and checking if the wall becomes stronger or weaker. Drug-resistant bacteria do exactly this — a single amino acid change can make a protein ignore an antibiotic completely.

**Key Concepts:**

- **Mutation:** A change in the amino acid sequence of a protein. Can be stabilizing, destabilizing, or neutral.
- **Alanine scanning:** A technique where each amino acid is replaced with Alanine one at a time to identify which residues are most important.
- **clone():** Creates an independent copy of the protein so the original is not modified.

---

## Cell 5 — Test Multiple Mutations
*Automate the experiment across many positions*

```python
import pandas as pd

results = []
residues_to_test = [20, 30, 40, 50, 60, 70, 80]

for res_num in residues_to_test:
    mutant = pose.clone()
    original_aa = pose.residue(res_num).name1()
    mutate_residue(mutant, res_num, "A")
    score = scorefxn(mutant)
    diff = score - original_score
    results.append({
        "Residue": res_num,
        "Original AA": original_aa,
        "Score Change": round(diff, 2),
        "Effect": "Destabilizing" if diff > 0 else "Stabilizing"
    })

df = pd.DataFrame(results)
print(df.to_string(index=False))
```

This cell automates Cell 4 — instead of doing one mutation at a time, it tests 7 positions automatically and collects all the results into a table.

- **`import pandas as pd`** — Pandas is a Python library for working with tables of data. "pd" is just a shorthand nickname.
- **`results = []`** — Creates an empty list where we will collect all our results.
- **`for res_num in residues_to_test:`** — A loop that repeats the indented block of code once for each residue number in the list. Each time through, `res_num` takes the next value.
- **`pose.residue(res_num).name1()`** — Looks up what amino acid is currently at that position and returns its single-letter code (e.g. "G" for Glycine).
- **`pd.DataFrame(results)`** — Converts the list of results into a proper table with labelled columns, like a spreadsheet.

> **Analogy:** Instead of manually testing each brick in a wall one by one, this is like having a robot test all 7 bricks automatically and write down the results in a table for you.

**Key Concepts:**

- **Loop (for):** A programming construct that repeats a block of code multiple times, once for each item in a list.
- **List:** An ordered collection of values in Python, written with square brackets: `[20, 30, 40, ...]`
- **DataFrame:** A pandas table with rows and columns, similar to an Excel spreadsheet, that makes data easy to analyze.
- **append():** Adds a new item to the end of a list.

---

## Cell 6 — Plot Your Results
*Visualize the data as a colour-coded bar chart*

```python
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 5))
colors = ["red" if x > 0 else "green" for x in df["Score Change"]]
plt.bar(df["Residue"].astype(str), df["Score Change"], color=colors)
plt.axhline(y=0, color="black", linestyle="-", linewidth=0.8)
plt.xlabel("Residue Position")
plt.ylabel("Score Change (REU)")
plt.title("Effect of Alanine Mutations on Lysozyme Stability")
plt.legend(handles=[
    plt.Rectangle((0,0),1,1, color="red",   label="Destabilizing"),
    plt.Rectangle((0,0),1,1, color="green", label="Stabilizing")
])
plt.tight_layout()
plt.savefig("stability_results.png")
plt.show()
```

This cell turns the table of numbers from Cell 5 into a visual bar chart that is easy to read and share.

- **`import matplotlib.pyplot as plt`** — Matplotlib is Python's main plotting library. "plt" is its standard nickname.
- **`figsize=(10, 5)`** — Sets the chart size to 10 inches wide and 5 inches tall.
- **`"red" if x > 0 else "green"`** — A list comprehension that assigns a colour to each bar: red for destabilizing, green for stabilizing.
- **`plt.axhline(y=0)`** — Draws a horizontal line at zero so it is easy to see which bars go above (bad) and below (good) the baseline.
- **`plt.savefig("stability_results.png")`** — Saves the chart as an image file so you can include it in a report or presentation.

> **Analogy:** Instead of reading a table of numbers, a bar chart lets your brain instantly see the pattern — which positions are critical and which are less important. Scientists always visualize data because humans are much better at reading pictures than tables of numbers.

**Key Concepts:**

- **matplotlib:** Python's most popular library for creating charts and graphs.
- **Bar chart:** A chart where each category is represented by a bar whose height shows its value. Great for comparing results across multiple conditions.
- **List comprehension:** A compact Python syntax for creating a list by applying a rule to every item: `["red" if x > 0 else "green" for x in scores]`
- **savefig():** Saves the current chart as an image file (PNG, JPG, PDF, etc.)