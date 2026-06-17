---
layout: page
title: Project 4 - Visualizing Drug Binding Sites
description: Drug Design with PyRosetta — Mapping the COX-2 Active Site
img: assets/img/RosettaCover.png
importance: 3
category: rosetta
related_publications: false
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;
    --rosetta-color: #1a6b4a;
    --rosetta-light: #e8f5ee;
    --rosetta-mid: #a8d8bc;
    --code-color: #2d3a8c;
    --code-light: #eef0fb;
    --code-mid: #b8bfee;
    --warn-color: #8a5a00;
    --warn-light: #fdf3e0;
    --warn-mid: #f0d090;
    --imperial-color: #003e74;
    --imperial-light: #e6edf5;
    --imperial-mid: #b0c8e0;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #7a7a7a;
    --border: #e8e8e8;
    --bg: #ffffff;
    --bg-soft: #fafafa;
  }
  * { box-sizing: border-box; }

  /* ── workflow diagram ── */
  .workflow-wrap { margin: 1.5rem 0 2rem; }
  .workflow-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rosetta-color); margin-bottom: 0.75rem; }
  .workflow-steps { display: flex; flex-wrap: wrap; gap: 0; align-items: stretch; }
  .wf-step { flex: 1 1 0; min-width: 100px; background: var(--rosetta-light); border: 1px solid var(--rosetta-mid); border-radius: 10px; padding: 0.8rem 0.9rem; text-align: center; position: relative; }
  .wf-step + .wf-step { margin-left: 0.3rem; }
  .wf-step + .wf-step::before { content: '→'; position: absolute; left: -0.9rem; top: 50%; transform: translateY(-50%); color: var(--rosetta-color); font-size: 0.9rem; font-weight: 700; }
  .wf-num { display: inline-block; background: var(--rosetta-color); color: white; font-size: 0.6rem; font-weight: 700; border-radius: 50%; width: 18px; height: 18px; line-height: 18px; text-align: center; margin-bottom: 0.3rem; }
  .wf-label { font-size: 0.72rem; font-weight: 700; color: var(--rosetta-color); line-height: 1.3; margin-bottom: 0.2rem; }
  .wf-sub { font-size: 0.63rem; color: var(--text-muted); line-height: 1.3; }
  .wf-step.hl { background: var(--rosetta-color); border-color: var(--rosetta-color); }
  .wf-step.hl .wf-num { background: white; color: var(--rosetta-color); }
  .wf-step.hl .wf-label { color: white; }
  .wf-step.hl .wf-sub { color: rgba(255,255,255,0.75); }

  /* ── cell intro blocks ── */
  .cell-intro { background: var(--code-light); border: 1px solid var(--code-mid); border-left: 4px solid var(--code-color); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin: 0.5rem 0 0.85rem; }
  .cell-intro-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--code-color); margin-bottom: 0.5rem; }
  .cell-intro p { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 0.4rem; }
  .cell-intro p:last-child { margin-bottom: 0; }

  /* ── function table ── */
  .fn-table-wrap { overflow-x: auto; margin: 0.75rem 0 1rem; }
  .fn-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
  .fn-table th { padding: 0.55rem 0.85rem; text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; background: var(--code-light); color: var(--code-color); border-bottom: 2px solid var(--code-mid); }
  .fn-table td { padding: 0.55rem 0.85rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; line-height: 1.5; }
  .fn-table tr:last-child td { border-bottom: none; }
  .fn-table code { background: #f0f0f8; border-radius: 3px; padding: 0.1rem 0.35rem; font-size: 0.78rem; color: var(--code-color); }

  /* ── mini workflow inside cells ── */
  .mini-wf { background: var(--bg-soft); border: 1px solid var(--border); border-radius: 10px; padding: 1rem 1.1rem; margin: 0.75rem 0 1rem; }
  .mini-wf-title { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.7rem; }
  .mini-wf-row { display: grid; grid-template-columns: 22px 1fr; gap: 0.65rem; align-items: start; margin-bottom: 0.4rem; }
  .mini-wf-row:last-child { margin-bottom: 0; }
  .mini-wf-dot { width: 22px; height: 22px; border-radius: 50%; background: var(--rosetta-color); color: white; font-size: 0.62rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
  .mini-wf-body { background: white; border: 1px solid var(--border); border-left: 3px solid var(--rosetta-color); border-radius: 0 7px 7px 0; padding: 0.4rem 0.75rem; font-size: 0.79rem; color: var(--text-secondary); line-height: 1.5; }
  .mini-wf-body strong { color: var(--text-primary); }

  /* ── analogy box ── */
  .analogy-box { background: var(--warn-light); border: 1px solid var(--warn-mid); border-left: 4px solid var(--warn-color); border-radius: 0 10px 10px 0; padding: 0.85rem 1.1rem; margin: 0.75rem 0 1rem; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.7; }
  .analogy-box .analogy-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--warn-color); margin-bottom: 0.3rem; }

  /* ── section headers ── */
  .section-eyebrow { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rosetta-color); margin-bottom: 0.25rem; margin-top: 2rem; }
  .section-title { font-family: 'DM Serif Display', serif; font-size: 1.6rem; font-weight: 400; color: var(--text-primary); margin-bottom: 0.35rem; }
  .divider { width: 3rem; height: 3px; background: var(--blog-accent); border-radius: 2px; margin: 0.5rem 0 1.5rem; }

  /* ── info box ── */
  .info-box { background: var(--blog-accent-light); border-left: 4px solid var(--blog-accent); border-radius: 0 10px 10px 0; padding: 0.85rem 1.1rem; margin-bottom: 1.25rem; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.65; }
  .info-box strong { color: var(--text-primary); }

  /* ── responsive ── */
  @media (max-width: 640px) {
    .workflow-steps { flex-direction: column; }
    .wf-step + .wf-step { margin-left: 0; margin-top: 0.5rem; }
    .wf-step + .wf-step::before { content: '↓'; left: 50%; top: -0.75rem; transform: translateX(-50%); }
  }
</style>


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

<div class="analogy-box">
<div class="analogy-label">Analogy</div>
Think of the binding site as a specialized parking space. The space has a specific size (<strong>shape complementarity</strong>) and specific markings — maybe "compact cars only" or "motorcycles only" (<strong>chemical complementarity</strong>). A car that matches both criteria will park cleanly and stay. A car that is the wrong size or wrong type will either not fit or will drift out.
</div>

In this project, we will use COX-2 with Ibuprofen (from Project 2) and systematically identify every amino acid within 5 Ångströms of the drug — the contact shell of the binding site.

---

## Project Workflow

Before writing any code, here is a bird's-eye view of everything this project does. Each step below corresponds to one or two code cells.

<div class="workflow-wrap">
  <div class="workflow-title">Project 4 — end-to-end pipeline</div>
  <div class="workflow-steps">
    <div class="wf-step">
      <div class="wf-num">1</div>
      <div class="wf-label">Start PyRosetta</div>
      <div class="wf-sub">Load libraries &amp; set flags</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">2</div>
      <div class="wf-label">Load &amp; Clean Structure</div>
      <div class="wf-sub">Download PDB, keep Chain A + Ibuprofen only</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">3</div>
      <div class="wf-label">Find Contact Residues</div>
      <div class="wf-sub">Measure atom–atom distance to drug (&lt; 5 Å)</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">4</div>
      <div class="wf-label">Classify Chemistry</div>
      <div class="wf-sub">Label each residue: hydrophobic / polar / charged</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">5</div>
      <div class="wf-label">Visualise</div>
      <div class="wf-sub">Draw a colour-coded contact distance map</div>
    </div>
    <div class="wf-step hl">
      <div class="wf-num">6</div>
      <div class="wf-label">Export Report</div>
      <div class="wf-sub">Save CSV for use in Project 5</div>
    </div>
  </div>
</div>

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

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Loads PyRosetta and tells it two things — (1) do not crash when it sees an unfamiliar molecule like Ibuprofen, and (2) stay quiet so the output is readable.</p>
<p>The two important flags are <code>-ignore_unrecognized_res false</code>, which tells PyRosetta to keep molecules it has not seen before (without this, Ibuprofen would simply be deleted from the structure), and <code>-mute all</code>, which suppresses hundreds of internal log lines that would otherwise flood your screen.</p>
</div>

```python
import pyrosetta
from pyrosetta import *
from pyrosetta.toolbox import *

pyrosetta.init(extra_options="-ignore_unrecognized_res false -load_PDB_components true -mute all")
print("PyRosetta ready!")
```

---

## Cell 2 — Load COX-2 + Ibuprofen and Isolate Chain A

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>Why cleaning is necessary:</strong> A raw PDB file from the database is like a messy lab bench — it contains the protein you want, but also a second copy of the protein (the other chain), water molecules, salt ions, and crystallography chemicals. If we do not remove these, our distance measurements will be cluttered with irrelevant contacts.</p>
<p>This cell keeps only two things: <strong>the protein residues from Chain A</strong>, and <strong>the Ibuprofen molecule</strong>. Everything else is deleted.</p>

<p><strong>Key functions used in this cell:</strong></p>
<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Function</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>pose_from_pdb("file.pdb")</code></td><td>Reads a PDB file from disk and builds a PyRosetta Pose object — the main data structure holding all atom coordinates.</td></tr>
    <tr><td><code>pose.total_residue()</code></td><td>Returns the total number of residues (amino acids + drug + waters) in the pose as an integer.</td></tr>
    <tr><td><code>pose.residue(i)</code></td><td>Returns the residue object at position <code>i</code>. Positions are numbered 1 to N (not 0-based like Python lists).</td></tr>
    <tr><td><code>pose.pdb_info().chain(i)</code></td><td>Returns the chain letter (e.g. "A" or "B") for residue at position <code>i</code> — lets us filter by chain.</td></tr>
    <tr><td><code>res.name()</code></td><td>Returns the full residue name. Ibuprofen appears as <code>"pdb_IBP"</code> — this is how we find it.</td></tr>
    <tr><td><code>res.is_protein()</code></td><td>Returns <code>True</code> if the residue is an amino acid, <code>False</code> for drugs, waters, ions, etc.</td></tr>
    <tr><td><code>pose.clone()</code></td><td>Makes a deep copy of the pose so we can delete residues from the copy without affecting the original.</td></tr>
    <tr><td><code>clean_pose.delete_residue_slow(i)</code></td><td>Removes the residue at position <code>i</code> from the pose. Called "slow" because it renumbers all positions afterwards — that's why we delete in reverse order.</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="mini-wf">
  <div class="mini-wf-title">How this cell works — step by step</div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">1</div>
    <div class="mini-wf-body"><strong>Download & load:</strong> Fetch 4PH9.pdb from RCSB and build a Pose with every atom in the crystal structure (~600+ residues).</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">2</div>
    <div class="mini-wf-body"><strong>Scan all residues:</strong> Loop from position 1 to <code>total_residue()</code>. For each residue, check its chain and name — collect positions we want to <em>keep</em> into a list.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">3</div>
    <div class="mini-wf-body"><strong>Build delete list:</strong> Any position <em>not</em> in the keep list goes into <code>delete_positions</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">4</div>
    <div class="mini-wf-body"><strong>Delete in reverse order:</strong> We delete from the highest index down to 1. This is critical — deleting position 50 shifts positions 51, 52, 53… down by one. Working in reverse avoids those index errors.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">5</div>
    <div class="mini-wf-body"><strong>Locate Ibuprofen in the clean pose:</strong> After deletion, scan again to find the non-protein residue — that's Ibuprofen — and record its new position as <code>ligand_pos_clean</code>.</div>
  </div>
</div>

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

---

## Cell 3 — Find All Residues Contacting the Drug

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p>This cell finds the <em>minimum</em> distance between any atom in a residue and any atom in Ibuprofen. That's the true measure of whether two molecules are touching.</p>

<p><strong>Key functions used in this cell:</strong></p>
<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Function / concept</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>res.natoms()</code></td><td>Returns the total atom count for a residue. Side chains vary enormously — Glycine has 7 atoms, Tryptophan has 27.</td></tr>
    <tr><td><code>res.atom(j).xyz()</code></td><td>Returns a 3D coordinate object for atom <code>j</code>. We access the x, y, z values individually as <code>.x</code>, <code>.y</code>, <code>.z</code>.</td></tr>
    <tr><td><code>np.array([x, y, z])</code></td><td>Packages the three coordinates into a NumPy array so we can do maths on them.</td></tr>
    <tr><td><code>np.linalg.norm(a - b)</code></td><td>Computes the straight-line (Euclidean) distance between two 3D points — the standard 3D distance formula √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²).</td></tr>
    <tr><td><code>pose.pdb_info().number(i)</code></td><td>Returns the original PDB residue number for position <code>i</code> — useful for cross-referencing with published literature.</td></tr>
    <tr><td><code>res.name1()</code> / <code>res.name3()</code></td><td>Single-letter and three-letter amino acid codes. Serine = <code>"S"</code> / <code>"SER"</code>. Both are standard biochemistry notation.</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="mini-wf">
  <div class="mini-wf-title">How the distance calculation works — inside <code>min_distance_to_ligand()</code></div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">1</div>
    <div class="mini-wf-body"><strong>Set up:</strong> Start <code>min_dist = infinity</code> as a placeholder that any real distance will beat.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">2</div>
    <div class="mini-wf-body"><strong>Outer loop — drug atoms:</strong> Iterate over every atom <code>j</code> in Ibuprofen. Get its (x, y, z) coordinates as a NumPy array.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">3</div>
    <div class="mini-wf-body"><strong>Inner loop — residue atoms:</strong> For each drug atom, iterate over every atom <code>k</code> in the protein residue. Get its (x, y, z) coordinates.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">4</div>
    <div class="mini-wf-body"><strong>Compute distance:</strong> Use <code>np.linalg.norm(lig_atom - prot_atom)</code> to get the Euclidean distance between these two atoms.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">5</div>
    <div class="mini-wf-body"><strong>Keep the minimum:</strong> If this distance is smaller than the current <code>min_dist</code>, update <code>min_dist</code>. After all atom pairs, return the smallest value found.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">6</div>
    <div class="mini-wf-body"><strong>Apply the cutoff:</strong> In the main loop, if <code>min_dist ≤ 5.0 Å</code>, record this residue — its name, PDB number, and distance — in the <code>contact_residues</code> list.</div>
  </div>
</div>

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

---

## Cell 4 — Classify Residues by Chemical Property

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Adds a <code>Chemical Class</code> column to the contact table, labelling each residue as hydrophobic, polar, charged positive, charged negative, or special. This classification tells you what kind of drug chemistry would fit best into the pocket.</p>
<p><strong>Key concepts:</strong></p>
<p><strong>Hydrophobic residues</strong> (A, V, I, L, M, F, Y, W) have non-polar side chains that prefer to avoid water. A binding site rich in these residues wants a drug with large non-polar surfaces — like the isobutyl group on Ibuprofen.</p>
<p><strong>Polar residues</strong> (S, T, N, Q) can donate or accept hydrogen bonds. A polar-rich site prefers drugs with –OH, –NH, or –C=O groups.</p>
<p><strong>Charged residues</strong> (R, K, H are positive; D, E are negative) form strong electrostatic interactions. A drug with the opposite charge will be pulled in strongly.</p>
<p><strong>Key Python used in this cell:</strong></p>
<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Function / concept</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>set("AVILMFYW")</code></td><td>Creates a set from a string — each character becomes one element. Sets have O(1) membership lookup, making <code>if aa1 in HYDROPHOBIC</code> very fast.</td></tr>
    <tr><td><code>df["col"].apply(func)</code></td><td>Applies <code>func</code> to every value in column <code>col</code> and returns a new Series. Here it classifies each one-letter amino acid code into its chemical category.</td></tr>
    <tr><td><code>df["col"].value_counts()</code></td><td>Counts how many times each unique value appears — gives the chemical profile summary (e.g. "8 hydrophobic, 3 polar…").</td></tr>
  </tbody>
</table>
</div>
</div>

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

The table below summarises what the chemical profile of a binding site tells you about optimal drug design:

| Binding Site Character | Preferred Drug Properties |
|------------------------|--------------------------|
| Mostly hydrophobic | Non-polar drug with aromatic rings |
| Polar-rich | Drug with hydrogen bond donors/acceptors |
| Charged residues present | Complementary charges in drug (salt bridges) |
| Mix of types | Amphiphilic drug with both polar and non-polar regions |

---

## Cell 5 — Build a Contact Distance Map

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Draws a horizontal bar chart — one bar per contact residue — sorted by distance. Bars are coloured by chemical class so you can immediately see the chemical character of the binding pocket at a glance.</p>
<p><strong>Key Matplotlib functions used:</strong></p>
<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Function</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>df["col"].map(dict)</code></td><td>Replaces each value in a column using a dictionary as a lookup table. Here it converts class names like <code>"Hydrophobic"</code> into hex colour codes like <code>"#e07b39"</code>.</td></tr>
    <tr><td><code>ax.barh(labels, values, color=colors)</code></td><td>Draws a horizontal bar chart. Each bar's length equals its distance value; its colour comes from the <code>colors</code> list.</td></tr>
    <tr><td><code>ax.axvline(x=5.0)</code></td><td>Draws a vertical dashed line at x = 5 Å — a visual reminder of the cutoff.</td></tr>
    <tr><td><code>mpatches.Patch(color, label)</code></td><td>Creates a coloured rectangle for use as a custom legend entry. Without this, matplotlib would not know how to label the colour-coded bars.</td></tr>
    <tr><td><code>plt.savefig("file.png", dpi=150)</code></td><td>Saves the figure to disk. <code>dpi=150</code> gives a high-resolution image suitable for reports.</td></tr>
  </tbody>
</table>
</div>
</div>

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

The contact map is a standard visualization in structural biology. Each bar represents one residue; the bar length shows how close that residue is to the drug. **Residues with the shortest bars are the closest contacts and are likely the most important for binding.**

---

## Cell 6 — Export the Binding Site Report

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Prints a clean human-readable summary and then saves the full contact table as a <code>.csv</code> file. This file will be used directly as input in <strong>Project 5 (Alanine Scanning)</strong> — this is how computational pipelines work: the output of one analysis feeds the next.</p>
<p><strong>Key function:</strong> <code>df.to_csv("filename.csv", index=False)</code> saves the DataFrame as a comma-separated file that can be opened in Excel, Google Sheets, or loaded back into Python with <code>pd.read_csv()</code>. <code>index=False</code> prevents pandas from writing the row numbers as an extra column.</p>
</div>

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

<div class="info-box">
<strong>Pipeline note:</strong> <code>binding_site_report.csv</code> is not just a summary — it is a structured data file that Project 5 will load automatically. Keep it in the same folder as your Project 5 notebook. This mirrors how real research pipelines work: each analysis step produces an output that becomes the next step's input.
</div>

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