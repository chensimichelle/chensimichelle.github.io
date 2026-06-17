---
layout: page
title: Project 5 - Alanine Scanning of a Binding Site
description: Drug Design with PyRosetta — Identifying Critical Residues for Drug Binding
img: assets/img/RosettaCover.png
importance: 5
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
    --df-color: #6b1a6b;
    --df-light: #f8eef8;
    --df-mid: #dda8dd;
    --new-color: #b02020;
    --new-light: #fdf0f0;
    --new-mid: #f0b8b8;
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

  /* ── new function explainer ── */
  .new-fn { background: var(--new-light); border: 1px solid var(--new-mid); border-left: 4px solid var(--new-color); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin: 0.75rem 0 1rem; }
  .new-fn-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--new-color); margin-bottom: 0.5rem; }
  .new-fn p { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 0.5rem; }
  .new-fn p:last-child { margin-bottom: 0; }
  .new-fn code { background: #fde0e0; border-radius: 3px; padding: 0.1rem 0.35rem; font-size: 0.78rem; color: var(--new-color); }

  /* ── DataFrame explainer ── */
  .df-explainer { background: var(--df-light); border: 1px solid var(--df-mid); border-left: 4px solid var(--df-color); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin: 0.75rem 0 1rem; }
  .df-explainer-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--df-color); margin-bottom: 0.5rem; }
  .df-explainer p { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 0.4rem; }
  .df-explainer p:last-child { margin-bottom: 0; }
  .df-visual { margin: 0.75rem 0; overflow-x: auto; }
  .df-visual table { border-collapse: collapse; font-size: 0.78rem; font-family: monospace; }
  .df-visual th { background: var(--df-color); color: white; padding: 0.4rem 0.85rem; text-align: center; font-weight: 700; }
  .df-visual th.index-col { background: #4a2a4a; }
  .df-visual td { padding: 0.35rem 0.85rem; border: 1px solid var(--df-mid); text-align: center; color: var(--text-secondary); background: white; }
  .df-visual td.index-col { background: var(--df-light); color: var(--df-color); font-weight: 700; border: 1px solid var(--df-mid); }
  .df-visual td.highlight { background: #ffe8ff; font-weight: 700; color: var(--df-color); }
  .df-label { font-size: 0.65rem; color: var(--df-color); font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 0.3rem; }
  .df-annotation { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.4rem; font-style: italic; line-height: 1.5; }

  /* ── function table ── */
  .fn-table-wrap { overflow-x: auto; margin: 0.75rem 0 1rem; }
  .fn-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
  .fn-table th { padding: 0.55rem 0.85rem; text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; background: var(--code-light); color: var(--code-color); border-bottom: 2px solid var(--code-mid); }
  .fn-table td { padding: 0.55rem 0.85rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; line-height: 1.5; }
  .fn-table tr:last-child td { border-bottom: none; }
  .fn-table code { background: #f0f0f8; border-radius: 3px; padding: 0.1rem 0.35rem; font-size: 0.78rem; color: var(--code-color); }

  /* ── mini workflow ── */
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

  /* ── info box ── */
  .info-box { background: var(--blog-accent-light); border-left: 4px solid var(--blog-accent); border-radius: 0 10px 10px 0; padding: 0.85rem 1.1rem; margin-bottom: 1.25rem; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.65; }
  .info-box strong { color: var(--text-primary); }

  @media (max-width: 640px) {
    .workflow-steps { flex-direction: column; }
    .wf-step + .wf-step { margin-left: 0; margin-top: 0.5rem; }
    .wf-step + .wf-step::before { content: '↓'; left: 50%; top: -0.75rem; transform: translateX(-50%); }
  }
</style>


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

<div class="analogy-box">
<div class="analogy-label">Analogy</div>
Imagine a vault that needs three specific keys inserted simultaneously. Alanine scanning is like testing each key slot by replacing one key at a time with a plain blank key. If removing one key means the vault no longer opens, that slot is critical. If the vault still opens fine without a particular key, that slot is dispensable.
</div>

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

## Project Workflow

Here is the complete pipeline this project follows. Each numbered step maps to one code cell below.

<div class="workflow-wrap">
  <div class="workflow-title">Project 5 — end-to-end pipeline</div>
  <div class="workflow-steps">
    <div class="wf-step">
      <div class="wf-num">1</div>
      <div class="wf-label">Load Data</div>
      <div class="wf-sub">Start PyRosetta, read Project 4 CSV into DataFrame</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">2</div>
      <div class="wf-label">Baseline Energy</div>
      <div class="wf-sub">Load COX-2, clean structure, compute wild-type binding energy</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">3</div>
      <div class="wf-label">Alanine Scan</div>
      <div class="wf-sub">Mutate each residue to Ala, compute ΔΔG for each</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">4</div>
      <div class="wf-label">Rank Results</div>
      <div class="wf-sub">Print sorted table, label hot spots, save CSV</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">5</div>
      <div class="wf-label">Visualise</div>
      <div class="wf-sub">Bar chart with threshold lines, colour-coded by effect</div>
    </div>
    <div class="wf-step hl">
      <div class="wf-num">6</div>
      <div class="wf-label">SAR Summary</div>
      <div class="wf-sub">Translate ΔΔG values into drug design recommendations</div>
    </div>
  </div>
</div>

---

## Cell 1 — Initialize and Load the Contact Residues

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Starts PyRosetta and loads the binding site CSV file produced by Project 4 Cell 6. If that file is missing, the <code>except</code> block prints a helpful message instead of crashing.</p>
<p>This cell introduces <code>pd.read_csv()</code> — the counterpart to <code>pd.to_csv()</code> used in Project 4 — and a named exception type, <code>FileNotFoundError</code>.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — pd.read_csv() (loading a saved DataFrame)</div>
<p><code>pd.read_csv("filename.csv")</code> reads a CSV file from disk and reconstructs it as a DataFrame, with the same columns and values that were saved. It is the exact inverse of <code>df.to_csv()</code> used in Project 4.</p>
<p>This is how data flows between projects: Project 4 saved <code>binding_site_report.csv</code>; Project 5 loads it. This pattern — one script saves, another loads — is the foundation of reusable scientific pipelines.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — catching a specific error type (FileNotFoundError)</div>
<p>In Projects 3 and 4 we used <code>except Exception as e</code> to catch any error. Here we use <code>except FileNotFoundError</code> — a <em>named</em> exception type that only fires when a file does not exist.</p>
<p>Using a specific exception type is better practice when you know exactly what can go wrong: it catches the one expected failure (missing file) without accidentally hiding other bugs. Python has many named exception types — <code>FileNotFoundError</code>, <code>ValueError</code>, <code>KeyError</code>, <code>ZeroDivisionError</code> — each describing a specific category of problem.</p>
</div>

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

---

## Cell 2 — Load COX-2 and Calculate Wild-Type Binding Energy

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Downloads COX-2, cleans the structure (same steps as Project 4), then computes the wild-type binding energy as a baseline. The key new idea here is wrapping the binding energy calculation inside a <strong>reusable function</strong> using <code>def</code> and <code>return</code>.</p>
<p>We need to call this calculation once for the wild-type protein, then once for every mutant — potentially 20+ times. Writing it as a function means we write the logic once and call it by name each time.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — def and return (writing a reusable function)</div>
<p><strong><code>def function_name(parameter1, parameter2):</code></strong> defines a new function. Everything indented underneath it is the function body — the code that runs when the function is called.</p>
<p><strong><code>return value</code></strong> sends a result back to wherever the function was called from. Without <code>return</code>, a function runs its code but hands nothing back.</p>
<p>In this cell, <code>compute_binding_energy(pose, ligand_res, scorefxn)</code> takes three inputs (a pose, the ligand position, and the scoring function), runs the subtraction calculation, and returns the binding energy as a single number. Every time you call it later — <code>wt_binding = compute_binding_energy(wt_pose, ligand_pos_clean, scorefxn)</code> — Python jumps into the function body, runs all the code, and substitutes the returned value back in place of the call.</p>

<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Part of the function definition</th><th>What it means</th></tr></thead>
  <tbody>
    <tr><td><code>def compute_binding_energy(</code></td><td>Start defining a function called <code>compute_binding_energy</code></td></tr>
    <tr><td><code>pose, ligand_res, scorefxn</code></td><td>The three inputs (parameters) the function expects when called</td></tr>
    <tr><td><code>):</code></td><td>End of the parameter list; the body follows, indented</td></tr>
    <tr><td><code>return score_complex - (...)</code></td><td>Calculate and send the result back to the caller</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="mini-wf">
  <div class="mini-wf-title">What compute_binding_energy() does internally</div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">1</div>
    <div class="mini-wf-body"><strong>Score the complex:</strong> Score the full pose (protein + drug together) → <code>score_complex</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">2</div>
    <div class="mini-wf-body"><strong>Score protein alone:</strong> Clone the pose, delete the ligand, score what remains → <code>score_protein</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">3</div>
    <div class="mini-wf-body"><strong>Score ligand alone:</strong> Clone the pose again, delete all protein residues, score the drug alone → <code>score_ligand</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">4</div>
    <div class="mini-wf-body"><strong>Return the binding energy:</strong> <code>score_complex − (score_protein + score_ligand)</code>. A negative result means the complex is more stable than the separated parts — the drug binds favourably.</div>
  </div>
</div>

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

---

## Cell 3 — Mutate Each Binding Site Residue to Alanine

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> The core of the project — loops over every residue in the binding site, mutates it to Alanine, computes ΔΔG, and classifies the result. This cell runs the function you defined in Cell 2 once per residue, which is why writing it as a reusable function mattered.</p>
<p><strong>Expected runtime: 5–15 minutes.</strong> Each iteration scores the mutant three times (complex, protein alone, ligand alone) and there may be 15–25 residues to scan.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — df.iterrows() (reading a DataFrame row by row)</div>
<p><code>for _, row in df.iterrows():</code> loops through a DataFrame one row at a time. On each iteration:</p>
<p><code>_</code> is the row index (we use <code>_</code> as a name to signal "I don't need this value").<br>
<code>row</code> is a Series object — it behaves like a dictionary keyed by column name. Access values with <code>row["Column Name"]</code>.</p>

<div class="df-explainer">
<div class="df-explainer-title">What row looks like on each iteration</div>
<div class="df-label">DataFrame (from Project 4 CSV)</div>
<div class="df-visual">
<table>
  <thead><tr><th class="index-col">(index)</th><th>AA (1-letter)</th><th>Position (Rosetta)</th><th>Position (PDB)</th><th>Chemical Class</th></tr></thead>
  <tbody>
    <tr><td class="index-col highlight">0 ← iteration 1</td><td>V</td><td>102</td><td>349</td><td>Hydrophobic</td></tr>
    <tr><td class="index-col">1 ← iteration 2</td><td>L</td><td>117</td><td>364</td><td>Hydrophobic</td></tr>
    <tr><td class="index-col">2 ← iteration 3</td><td>S</td><td>121</td><td>368</td><td>Polar</td></tr>
  </tbody>
</table>
</div>
<div class="df-annotation">On iteration 1: <code>row["AA (1-letter)"]</code> → <code>"V"</code>, <code>row["Position (Rosetta)"]</code> → <code>102</code>, and so on.</div>
</div>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — mutate_residue() (changing one amino acid)</div>
<p><code>mutate_residue(pose, rosetta_position, "A")</code> replaces the side chain of the residue at <code>rosetta_position</code> with an Alanine side chain (a plain methyl group), leaving the protein backbone unchanged.</p>
<p>We always call it on a <code>clone()</code> of the wild-type pose — never on <code>wt_pose</code> directly. This preserves the original structure so the next loop iteration starts from the same unmodified baseline.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — continue (skipping the rest of a loop iteration)</div>
<p><code>continue</code> immediately jumps to the next iteration of a loop, skipping all remaining code in the current one. Here it is used to skip residues that are already Alanine — there is no point in mutating Alanine to Alanine.</p>
<p>Without <code>continue</code>, you would need to wrap the entire mutation logic in an <code>if aa_wt != "A":</code> block, which would indent everything further. <code>continue</code> keeps the code flatter and more readable by handling the skip case first and early.</p>
</div>

<div class="mini-wf">
  <div class="mini-wf-title">How the scan loop works — one iteration at a time</div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">1</div>
    <div class="mini-wf-body"><strong>Read the row:</strong> Extract <code>rosetta_pos</code>, <code>pdb_pos</code>, <code>aa_wt</code>, and <code>chem_class</code> from the current DataFrame row.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">2</div>
    <div class="mini-wf-body"><strong>Skip if already Ala:</strong> If <code>aa_wt == "A"</code>, append a row with ΔΔG = 0.0 and call <code>continue</code> to move to the next residue immediately.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">3</div>
    <div class="mini-wf-body"><strong>Clone and mutate:</strong> <code>mutant_pose = wt_pose.clone()</code> then <code>mutate_residue(mutant_pose, rosetta_pos, "A")</code>. The original <code>wt_pose</code> is unchanged.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">4</div>
    <div class="mini-wf-body"><strong>Compute ΔΔG:</strong> Call <code>compute_binding_energy()</code> on the mutant, subtract the wild-type value: <code>ddg = mut_binding - wt_binding</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">5</div>
    <div class="mini-wf-body"><strong>Classify and record:</strong> Assign an effect label (Hot spot / Moderate / Stabilizing / Dispensable) based on the ΔΔG value. Append a result dictionary to <code>scan_results</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">6</div>
    <div class="mini-wf-body"><strong>After all iterations:</strong> Convert <code>scan_results</code> to a DataFrame and sort by ΔΔG descending — largest (most critical) residues appear first.</div>
  </div>
</div>

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

---

## Cell 4 — Display the Ranked Results

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Prints the scan results as a neatly aligned table, lists the hot spots, and saves the full results to a CSV for Project 6. The new skill here is f-string column formatting — controlling the width and alignment of each printed value to produce clean, readable columns.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — f-string column alignment formatting</div>
<p>Inside an f-string, you can specify how a value is padded and aligned by adding a format spec after a colon: <code>{value:format_spec}</code>. This project uses three format specs together:</p>

<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Format spec</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><code>:<12</code></td><td>Left-align in a 12-character-wide field (pad with spaces on the right)</td><td><code>"V102A       "</code></td></tr>
    <tr><td><code>:>10</code></td><td>Right-align in a 10-character-wide field (pad with spaces on the left)</td><td><code>"     +2.45"</code></td></tr>
    <tr><td><code>:>+10.2f</code></td><td>Right-align, always show sign (+/−), 2 decimal places, width 10</td><td><code>"    +2.45"</code></td></tr>
  </tbody>
</table>
</div>

<p>By giving every value a fixed width, all rows line up into neat columns — the same technique spreadsheets use. Without fixed widths, short values like <code>"V10A"</code> and long values like <code>"PHE349A"</code> would cause columns to shift unpredictably.</p>
</div>

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

---

## Cell 5 — Plot the Alanine Scan Results

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Draws a vertical bar chart — one bar per mutation, coloured by effect category, with horizontal threshold lines at ΔΔG = 1.0 and 2.0. This cell introduces three new Matplotlib ideas: <code>ax.bar()</code> for vertical bars, <code>ax.axhline()</code> for horizontal reference lines, <code>plt.xticks(rotation=)</code> for angled labels, and <code>.tolist()</code> for extracting a column's values.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — ax.bar() vs ax.barh() (vertical vs horizontal bars)</div>
<p>In Project 3 we used <code>ax.barh()</code> for <em>horizontal</em> bars (labels on the y-axis, values on the x-axis). Here we use <code>ax.bar()</code> for <em>vertical</em> bars (labels on the x-axis, values on the y-axis).</p>
<p>Vertical bars are better here because we want the ΔΔG threshold lines to be horizontal — easy reference lines crossing the chart left-to-right. With horizontal bars, the threshold lines would have to be vertical, which is visually harder to compare.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — ax.axhline() (horizontal reference line)</div>
<p><code>ax.axhline(y=2.0, color="red", linestyle="--")</code> draws a horizontal dashed line across the entire chart at y = 2.0. <code>axhline</code> = "axis horizontal line." The counterpart <code>axvline</code> (used in Projects 3 and 4) draws a vertical line.</p>
<p>We add two threshold lines — at y = 1.0 and y = 2.0 — to visually separate dispensable residues from moderate ones and hot spots. Whenever your data has a scientifically meaningful cutoff, a reference line makes the chart self-explanatory without needing to read the axis carefully.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — plt.xticks(rotation=45) (angled axis labels)</div>
<p>With 15–25 mutation labels on the x-axis (e.g. <code>V349A</code>, <code>L364A</code>, <code>S368A</code>…), horizontal text would overlap and become unreadable. <code>plt.xticks(rotation=45, ha="right")</code> rotates each label 45° clockwise. <code>ha="right"</code> (horizontal alignment) anchors each label's right edge to its tick mark so the angled text sits directly below the correct bar.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — .tolist() (converting a DataFrame column to a plain Python list)</div>
<p><code>df["column"].tolist()</code> extracts all values from a DataFrame column into a plain Python list. Some functions — like the list comprehension used to build <code>colors</code> — work more reliably with a plain list than with a pandas Series. It is a small but common conversion in data visualisation code.</p>
</div>

<div class="mini-wf">
  <div class="mini-wf-title">How Cell 5 builds the chart — step by step</div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">1</div>
    <div class="mini-wf-body"><strong>Sort and extract:</strong> Sort <code>df_scan</code> by ΔΔG descending. Extract mutation labels (built with a list comprehension over <code>iterrows()</code>), values (<code>.tolist()</code>), and colours (mapped from the <code>EFFECT_COLORS</code> dict).</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">2</div>
    <div class="mini-wf-body"><strong>Draw vertical bars:</strong> <code>ax.bar(labels, values, color=colors)</code> — one bar per mutation, height = ΔΔG, colour = effect category.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">3</div>
    <div class="mini-wf-body"><strong>Add threshold lines:</strong> <code>ax.axhline(y=2.0)</code> and <code>ax.axhline(y=1.0)</code> draw dashed horizontal lines across the chart at the hot spot and moderate cutoffs.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">4</div>
    <div class="mini-wf-body"><strong>Rotate x-labels:</strong> <code>plt.xticks(rotation=45, ha="right")</code> angles the mutation labels so they do not overlap.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">5</div>
    <div class="mini-wf-body"><strong>Add legend and save:</strong> <code>mpatches.Patch</code> entries (seen in Project 4) build the colour legend. <code>plt.savefig()</code> writes to disk.</div>
  </div>
</div>

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

---

## Cell 6 — Structure-Activity Relationship (SAR) Summary

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Filters the results into three groups (hot spots, moderate, dispensable), prints a count summary, then generates a specific drug design recommendation for each hot spot based on its chemical class. The new idea here is the inline conditional expression used inside an f-string.</p>
</div>

<div class="new-fn">
<div class="new-fn-title">🆕 New — inline if/else inside an f-string</div>
<p>Python allows a compact one-line conditional: <code>value_if_true if condition else value_if_false</code>. This is called a <strong>ternary expression</strong> or <strong>inline conditional</strong>.</p>
<p>In this cell it is used to print different recommendations depending on the residue's chemical class:</p>
<p><code>'add hydrophobic group to drug' if chem == 'Hydrophobic' else 'add H-bond donor/acceptor' if chem == 'Polar' else 'add complementary charge to drug'</code></p>
<p>This chains two conditionals: first check if Hydrophobic, then if Polar, otherwise fall through to the charge recommendation. It is equivalent to a three-branch <code>if/elif/else</code> block, written in one line so it fits neatly inside a print statement.</p>
<p>Use inline conditionals sparingly — they are compact but can be hard to read if they get long. A full <code>if/elif/else</code> block is always clearer for complex logic.</p>
</div>

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

<div class="info-box">
<strong>Pipeline note:</strong> <code>alanine_scan_results.csv</code> saved in Cell 4 will be loaded by Project 6. Keep it in the same folder as your Project 6 notebook.
</div>

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
| **`pd.read_csv()`** | Loads a saved CSV file back into a DataFrame; the inverse of `.to_csv()` |
| **`FileNotFoundError`** | A named Python exception raised when a file does not exist |
| **`def` / `return`** | Define a reusable function (`def`) and send a result back to the caller (`return`) |
| **`mutate_residue()`** | PyRosetta function that replaces one residue's side chain with a different amino acid |
| **`continue`** | Skips the rest of the current loop iteration and jumps to the next one |
| **`df.iterrows()`** | Iterates over a DataFrame row by row; each iteration yields the index and a row Series |
| **f-string column alignment** | Format specs like `:<12` and `:>+10.2f` that pad values to fixed widths for neat columns |
| **`.tolist()`** | Converts a DataFrame column into a plain Python list |
| **`ax.bar()`** | Draws vertical bars (vs `ax.barh()` for horizontal bars) |
| **`ax.axhline()`** | Draws a horizontal reference line across the chart at a specified y value |
| **`plt.xticks(rotation=)`** | Rotates x-axis tick labels to prevent overlapping |
| **Inline conditional** | Compact one-line `value_if_true if condition else value_if_false` expression |
| **Functional group** | A specific chemical group on a drug molecule (e.g. -OH, -NH₂) that drives interactions |
| **Medicinal chemistry** | The science of designing and optimizing drug molecules for maximum efficacy and safety |