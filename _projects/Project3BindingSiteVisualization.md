---
layout: page
title: Project 4 - Visualizing Drug Binding Sites
description: Drug Design with PyRosetta — Mapping the COX-2 Active Site
img: assets/img/RosettaCover.png
importance: 3
category: rosetta
related_publications: false
---

## What You Will Learn

- How to identify which amino acids are physically close to a drug molecule
- How to classify residues by their chemical properties (hydrophobic, polar, charged)
- How to compute a contact map of the binding site
- Why different chemical environments favour different drugs
- How to export a binding site report for use in downstream drug design

**Time:** ~30–40 minutes &nbsp;|&nbsp; **Prerequisite:** Projects 1–2 completed &nbsp;|&nbsp; **Difficulty:** Beginner

---

## Background: What Is a Binding Site?

When a drug molecule enters a protein and settles into its pocket, it does not interact with the entire protein — only with a small number of amino acids that happen to be close enough to touch it. These amino acids form the **binding site** (also called the active site or binding pocket).

Understanding the binding site is foundational to drug design for two reasons:

**1. Shape complementarity:** The drug must physically fit into the pocket. If the pocket is small and narrow, a large drug molecule will not fit no matter how chemically compatible it is.

**2. Chemical complementarity:** The drug and the pocket must also have matching chemistry. Hydrophobic (water-fearing) regions of the drug should face hydrophobic regions of the pocket; charged regions should face oppositely charged residues.

> **Analogy:** Think of the binding site as a specialized parking space. The space has a specific size (shape complementarity) and specific markings — maybe "compact cars only" or "motorcycles only" (chemical complementarity). A car that matches both criteria will park cleanly and stay. A car that is the wrong size or wrong type will either not fit or will drift out.

In this project, we will use COX-2 with Ibuprofen (from Project 2) and systematically identify every amino acid within 5 Ångströms of the drug — the contact shell of the binding site.

---

## The Distance Cutoff: Why 5 Å?

An Ångström (Å) is one ten-billionth of a metre. At the atomic scale:

| Distance | Meaning |
|----------|---------|
| < 2.0 Å | Overlapping atoms — a clash (problem) |
| 2.0–3.5 Å | Direct chemical bond or strong hydrogen bond |
| 3.5–5.0 Å | Van der Waals contact — atoms "touching" |
| 5.0–8.0 Å | Close neighbourhood — indirect interactions |
| > 8.0 Å | Too far away to interact meaningfully |

We use **5.0 Å** as the cutoff because residues within this distance are directly contacting the drug and contributing to binding. Residues farther away are bystanders.

---

## Cell 1 — Initialize PyRosetta with Ligand Support
*Same setup as Project 2*

```python
import pyrosetta
from pyrosetta import *
from pyrosetta.toolbox import *

pyrosetta.init(extra_options="-ignore_unrecognized_res false -load_PDB_components true -mute all")
print("PyRosetta ready!")
```

We use the same flags as Project 2 because we are loading a protein-drug complex. The `-mute all` flag keeps output clean.

---

## Cell 2 — Load COX-2 + Ibuprofen and Isolate Chain A
*Download and clean the structure*

```python
import urllib.request
from pyrosetta import pose_from_pdb

# Download COX-2 + Ibuprofen
url = "https://files.rcsb.org/download/4PH9.pdb"
urllib.request.urlretrieve(url, "4PH9.pdb")
pose = pose_from_pdb("4PH9.pdb")

print(f"Full structure: {pose.total_residue()} residues")

# Find all residues: identify IBP (Ibuprofen) and chain A protein
ligand_position = None
keep_positions  = []

for i in range(1, pose.total_residue() + 1):
    res   = pose.residue(i)
    chain = pose.pdb_info().chain(i)

    if res.name() == "pdb_IBP":
        ligand_position = i
        keep_positions.append(i)
        print(f"Found Ibuprofen at Rosetta position {i}")
    elif chain == "A" and res.is_protein():
        keep_positions.append(i)

# Build clean pose: chain A protein + Ibuprofen only
clean_pose = pose.clone()
delete_positions = [i for i in range(1, pose.total_residue() + 1)
                    if i not in keep_positions]
for i in reversed(delete_positions):
    clean_pose.delete_residue_slow(i)

print(f"Clean structure: {clean_pose.total_residue()} residues")

# Find Ibuprofen in the clean pose
for i in range(1, clean_pose.total_residue() + 1):
    if not clean_pose.residue(i).is_protein():
        ligand_pos_clean = i
        print(f"Ibuprofen in clean pose: position {ligand_pos_clean}")
        break
```

This cleaning step is essential. The raw PDB file contains two protein chains, many water molecules, cofactors, and crystallography reagents — none of which we want interfering with our binding site analysis.

**Key Concepts:**

- **Crystal structure extras:** Real PDB files contain far more than just the protein of interest. Learning to identify and remove irrelevant molecules is a core bioinformatics skill.
- **`delete_residue_slow`:** Removes one residue from a pose. We work in reverse order (highest index first) because deleting a residue shifts all subsequent indices down — iterating in reverse avoids index errors.

---

## Cell 3 — Find All Residues Contacting the Drug
*Calculate distances between every protein residue and Ibuprofen*

```python
import numpy as np

def get_residue_centroid(pose, res_num):
    """Calculate the geometric centre of all atoms in a residue."""
    res    = pose.residue(res_num)
    coords = [np.array([res.atom(j).xyz().x,
                        res.atom(j).xyz().y,
                        res.atom(j).xyz().z])
              for j in range(1, res.natoms() + 1)]
    return np.mean(coords, axis=0)

def min_distance_to_ligand(pose, protein_res, ligand_res):
    """
    Calculate the minimum atom-atom distance between a protein residue
    and the drug molecule (minimum is more accurate than centroid-centroid).
    """
    lig  = pose.residue(ligand_res)
    prot = pose.residue(protein_res)
    min_dist = float("inf")

    for j in range(1, lig.natoms() + 1):
        lig_atom = np.array([lig.atom(j).xyz().x,
                             lig.atom(j).xyz().y,
                             lig.atom(j).xyz().z])
        for k in range(1, prot.natoms() + 1):
            prot_atom = np.array([prot.atom(k).xyz().x,
                                  prot.atom(k).xyz().y,
                                  prot.atom(k).xyz().z])
            dist = np.linalg.norm(lig_atom - prot_atom)
            if dist < min_dist:
                min_dist = dist

    return min_dist

# Distance cutoff for "contact"
CUTOFF = 5.0  # Ångströms

contact_residues = []

for i in range(1, clean_pose.total_residue() + 1):
    if i == ligand_pos_clean:
        continue  # skip the drug itself
    if not clean_pose.residue(i).is_protein():
        continue

    dist = min_distance_to_ligand(clean_pose, i, ligand_pos_clean)
    if dist <= CUTOFF:
        res       = clean_pose.residue(i)
        pdb_num   = clean_pose.pdb_info().number(i)
        aa_name   = res.name1()     # single-letter code
        aa_full   = res.name3()     # three-letter code
        contact_residues.append({
            "Position (Rosetta)": i,
            "Position (PDB)":     pdb_num,
            "AA (1-letter)":      aa_name,
            "AA (3-letter)":      aa_full,
            "Min Distance (Å)":   round(dist, 2)
        })

print(f"Found {len(contact_residues)} residues within {CUTOFF} Å of Ibuprofen:\n")
import pandas as pd
df_contacts = pd.DataFrame(contact_residues).sort_values("Min Distance (Å)")
print(df_contacts.to_string(index=False))
```

We calculate the **minimum atom-atom distance** rather than the distance between residue centers. This is important because amino acid side chains extend significantly — a residue whose center is 8 Å away might still have an atom that is only 3 Å from the drug.

> **Analogy:** Measuring the distance between the centers of two people is not the same as measuring the distance between their outstretched hands. For chemical interactions, it is the hands — the atoms at the tips of the side chains — that matter.

**Key Concepts:**

- **`np.linalg.norm`:** Calculates the Euclidean (straight-line) distance between two 3D points. This is the standard distance formula extended to three dimensions.
- **`res.natoms()`:** Returns how many atoms are in a residue. Side chains vary — Glycine has 7, Tryptophan has 27.
- **`res.name1()` vs `res.name3()`:** Single-letter and three-letter amino acid codes respectively. Serine is "S" in one-letter and "SER" in three-letter.

---

## Cell 4 — Classify Residues by Chemical Property
*Label each contact residue as hydrophobic, polar, or charged*

```python
# Standard amino acid chemical classifications
HYDROPHOBIC = set("AVILMFYW")   # Ala, Val, Ile, Leu, Met, Phe, Tyr, Trp
POLAR       = set("STNQ")        # Ser, Thr, Asn, Gln
CHARGED_POS = set("RKH")         # Arg, Lys, His (positive at physiological pH)
CHARGED_NEG = set("DE")          # Asp, Glu (negative at physiological pH)
SPECIAL     = set("CGP")         # Cys, Gly, Pro (unique properties)

def classify_aa(aa1):
    if aa1 in HYDROPHOBIC:  return "Hydrophobic"
    if aa1 in POLAR:        return "Polar"
    if aa1 in CHARGED_POS:  return "Charged (+)"
    if aa1 in CHARGED_NEG:  return "Charged (−)"
    if aa1 in SPECIAL:      return "Special"
    return "Unknown"

df_contacts["Chemical Class"] = df_contacts["AA (1-letter)"].apply(classify_aa)

# Summary by class
print("BINDING SITE CHEMICAL PROFILE")
print("=" * 45)
class_counts = df_contacts["Chemical Class"].value_counts()
total = len(df_contacts)
for cls, count in class_counts.items():
    pct = 100 * count / total
    print(f"  {cls:<18} {count} residues ({pct:.0f}%)")
print()
print(df_contacts[["AA (3-letter)", "Position (PDB)", "Min Distance (Å)", "Chemical Class"]]
      .sort_values("Min Distance (Å)").to_string(index=False))
```

The chemical profile of the binding site tells you what kind of drug will bind best. A mostly hydrophobic pocket (like the COX-2 active site) prefers drugs that also have large hydrophobic regions — this is why ibuprofen, which has a hydrophobic isobutyl group, binds well.

| Binding Site Character | Preferred Drug Properties |
|------------------------|--------------------------|
| Mostly hydrophobic | Non-polar drug with aromatic rings |
| Polar-rich | Drug with hydrogen bond donors/acceptors |
| Charged residues present | Complementary charges in drug (salt bridges) |
| Mix of types | Amphiphilic drug with both polar and non-polar regions |

**Key Concepts:**

- **Hydrophobic effect:** Non-polar molecules prefer to cluster together in aqueous solution. A hydrophobic drug fits snugly into a hydrophobic pocket because exposing non-polar surfaces to water is energetically costly.
- **Hydrogen bond:** An attractive interaction between a hydrogen atom and an electronegative atom (N, O). Polar residues can form these with complementary drug groups.
- **`.apply(function)`:** Applies a function to every value in a DataFrame column. Here it classifies each amino acid one-letter code into its chemical category.

---

## Cell 5 — Build a Contact Distance Map
*Visualize how close each binding site residue is to the drug*

```python
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# Colour by chemical class
CLASS_COLORS = {
    "Hydrophobic":  "#e07b39",
    "Polar":        "#4a90d9",
    "Charged (+)":  "#2ecc71",
    "Charged (−)":  "#e74c3c",
    "Special":      "#9b59b6",
    "Unknown":      "#95a5a6"
}

df_plot = df_contacts.sort_values("Min Distance (Å)")
colors  = df_plot["Chemical Class"].map(CLASS_COLORS)

fig, ax = plt.subplots(figsize=(12, 6))
bars = ax.barh(
    df_plot["AA (3-letter)"] + " " + df_plot["Position (PDB)"].astype(str),
    df_plot["Min Distance (Å)"],
    color=colors, height=0.6
)

# Reference line at 5 Å cutoff
ax.axvline(x=CUTOFF, color="black", linestyle="--", linewidth=1,
           label=f"{CUTOFF} Å cutoff")

ax.set_xlabel("Minimum Distance to Ibuprofen (Å)", fontsize=12)
ax.set_title("COX-2 Binding Site Contact Map\n(Ibuprofen — 4PH9)",
             fontsize=13, fontweight="bold")

# Legend for chemical classes
patches = [mpatches.Patch(color=v, label=k) for k, v in CLASS_COLORS.items()
           if k in df_plot["Chemical Class"].values]
ax.legend(handles=patches, loc="lower right", fontsize=9)

plt.tight_layout()
plt.savefig("binding_site_contacts.png", dpi=150, bbox_inches="tight")
plt.show()
print("Chart saved as binding_site_contacts.png")
```

The contact map is a standard visualization in structural biology. Each bar represents one residue; the bar length shows how close that residue is to the drug. Residues with short bars are the closest contacts and likely the most important for binding.

**Key Concepts:**

- **`mpatches.Patch`:** Creates a coloured rectangle used as a legend entry. Used here to build a colour-coded legend matching each chemical class.
- **`.map(dictionary)`:** Replaces each value in a Series with the corresponding value from a dictionary. Here it converts class names (strings) into colour codes (hex strings).
- **Contact map:** A visualization showing pairwise distances. Common in structural biology and bioinformatics.

---

## Cell 6 — Export the Binding Site Report
*Save a structured summary for use in downstream projects*

```python
# Full summary table
print("BINDING SITE REPORT — COX-2 + Ibuprofen (4PH9)")
print("=" * 60)
print(f"Drug: Ibuprofen (IBP)")
print(f"Protein: COX-2 (PDB 4PH9, Chain A)")
print(f"Distance cutoff: {CUTOFF} Å\n")

print(f"Total contact residues: {len(df_contacts)}")
print(f"Closest residue: {df_contacts.sort_values('Min Distance (Å)').iloc[0]['AA (3-letter)']} "
      f"at {df_contacts['Min Distance (Å)'].min():.2f} Å")
print(f"Chemical composition:")
for cls, count in df_contacts["Chemical Class"].value_counts().items():
    print(f"   {cls}: {count}")

# Save to CSV for use in Projects 5 and 6
df_contacts.to_csv("binding_site_report.csv", index=False)
print("\nFull report saved to binding_site_report.csv")
print("You will use this file in Project 5 (Alanine Scanning).")
```

> **Note:** We save the output as a CSV file that will feed directly into Project 5. This is how real research pipelines work — output from one analysis becomes input for the next.

**Key Concepts:**

- **`.to_csv()`:** Saves a DataFrame as a comma-separated values file, which can be opened in Excel, Google Sheets, or loaded back into Python.
- **Pipeline:** A series of computational steps where each step uses the output of the previous step. Building analyses as pipelines makes science reproducible and modular.

---

## Discussion Questions

**1.** Which residue was closest to Ibuprofen? What chemical class does it belong to, and why might that matter for binding?

**2.** The COX-2 binding site is described as primarily hydrophobic. Does your contact map support this? What percentage of residues were hydrophobic?

**3.** We used a 5 Å cutoff. What would happen to your contact residue count if you changed this to 4 Å? Or 8 Å? What is the trade-off?

**4.** Aspirin also inhibits COX-2 but works differently — it covalently bonds to a specific serine residue. If you found a serine in your contact map, which position is it? How would covalent binding change the drug design approach?

**5.** If you were designing a new COX-2 inhibitor, what chemical properties would you prioritize based on the binding site profile you generated?

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Binding site** | The region of a protein where a drug or ligand physically docks |
| **Contact residue** | An amino acid within the distance cutoff of the drug |
| **Hydrophobic** | Water-fearing; amino acids or drug regions that prefer non-polar environments |
| **Polar** | Able to form hydrogen bonds; interacts well with water and charged groups |
| **Hydrogen bond** | A non-covalent attractive interaction between a hydrogen donor and acceptor |
| **Cutoff distance** | The maximum distance used to define "close enough to interact" |
| **Contact map** | A visualization of pairwise distances between atoms or residues |
| **Ångström (Å)** | Unit of length equal to 10⁻¹⁰ metres; used to measure atomic distances |
| **Min atom-atom distance** | The shortest distance between any atom in residue A and any atom in residue B |
| **Chemical complementarity** | The matching of chemical properties (charge, polarity) between drug and binding site |
