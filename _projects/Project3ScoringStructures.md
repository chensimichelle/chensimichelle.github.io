---
layout: page
title: Project 3 - Scoring Protein Structures
description: Drug Design with PyRosetta — Comparing Structure Quality Across PDB Models
img: assets/img/RosettaCover.png
importance: 2
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

  /* ── DataFrame explainer ── */
  .df-explainer { background: var(--df-light); border: 1px solid var(--df-mid); border-left: 4px solid var(--df-color); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin: 0.75rem 0 1rem; }
  .df-explainer-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--df-color); margin-bottom: 0.5rem; }
  .df-explainer p { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 0.4rem; }
  .df-explainer p:last-child { margin-bottom: 0; }

  /* ── fake DataFrame table ── */
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

  /* ── divider ── */
  .divider { width: 3rem; height: 3px; background: var(--blog-accent); border-radius: 2px; margin: 0.5rem 0 1.5rem; }

  @media (max-width: 640px) {
    .workflow-steps { flex-direction: column; }
    .wf-step + .wf-step { margin-left: 0; margin-top: 0.5rem; }
    .wf-step + .wf-step::before { content: '↓'; left: 50%; top: -0.75rem; transform: translateX(-50%); }
  }
</style>


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

## Project Workflow

Here is the complete pipeline this project follows. Each step maps to one code cell below.

<div class="workflow-wrap">
  <div class="workflow-title">Project 3 — end-to-end pipeline</div>
  <div class="workflow-steps">
    <div class="wf-step">
      <div class="wf-num">1</div>
      <div class="wf-label">Start PyRosetta</div>
      <div class="wf-sub">Load libraries &amp; silence logs</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">2</div>
      <div class="wf-label">Test One Structure</div>
      <div class="wf-sub">Download &amp; score 1LYZ as a sanity check</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">3</div>
      <div class="wf-label">Score All Five</div>
      <div class="wf-sub">Loop over all PDB IDs, collect results into a DataFrame</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">4</div>
      <div class="wf-label">Rank Structures</div>
      <div class="wf-sub">Sort DataFrame by score per residue</div>
    </div>
    <div class="wf-step">
      <div class="wf-num">5</div>
      <div class="wf-label">Visualise</div>
      <div class="wf-sub">Plot a colour-coded bar chart</div>
    </div>
    <div class="wf-step hl">
      <div class="wf-num">6</div>
      <div class="wf-label">Interpret</div>
      <div class="wf-sub">Read the spread &amp; pick the best structure</div>
    </div>
  </div>
</div>

---

## Cell 1 — Initialize PyRosetta

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Starts PyRosetta and passes it one flag: <code>-mute all</code>. Without this flag, PyRosetta prints hundreds of internal log lines every time it loads a structure — enough to bury your actual results. This flag silences all of that output so only your <code>print()</code> statements appear.</p>
</div>

```python
import pyrosetta
pyrosetta.init("-mute all")
print("PyRosetta ready!")
```

---

## Cell 2 — Download and Score One Structure

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Downloads a single structure (1LYZ) and scores it. This is a <em>sanity check</em> — we deliberately test one case by hand before writing the loop in Cell 3, so that if something goes wrong it is easy to spot.</p>
<p><strong>Key functions:</strong></p>
<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Function</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>pyrosetta.get_fa_scorefxn()</code></td><td>Creates the scoring function object. Think of it as a weighing machine — you pass a protein pose to it and it returns a single energy number.</td></tr>
    <tr><td><code>pose_from_rcsb("1LYZ")</code></td><td>Downloads the PDB file from the RCSB database and loads it into a Pose object. Requires an internet connection.</td></tr>
    <tr><td><code>scorefxn(pose)</code></td><td>Calling the scoring function like a function with a pose as input returns the Rosetta energy score in REU (Rosetta Energy Units). More negative = better.</td></tr>
  </tbody>
</table>
</div>
</div>

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

---

## Cell 3 — Score All Five Structures Automatically

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Loops over all five PDB IDs, scores each one, and collects the results into a <strong>DataFrame</strong> — a table-like data structure from the pandas library. Understanding how the DataFrame is built and read is the central skill in this cell.</p>
</div>

<div class="df-explainer">
<div class="df-explainer-title">📋 What is a DataFrame?</div>
<p>A <strong>DataFrame</strong> is a table with labelled rows and columns — like a spreadsheet in Python. Each column has a name (a string), and each row holds the data for one observation — in this project, one protein structure.</p>
<p>DataFrames come from the <strong>pandas</strong> library (<code>import pandas as pd</code>). They are the standard tool in Python for storing and analysing tabular data.</p>

<div class="df-label">What our DataFrame will look like after Cell 3 runs</div>
<div class="df-visual">
<table>
  <thead>
    <tr>
      <th class="index-col">(index)</th>
      <th>PDB ID</th>
      <th>Residues</th>
      <th>Rosetta Score (REU)</th>
      <th>Score per Residue</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="index-col">0</td><td>1LYZ</td><td>129</td><td>−1823.45</td><td>−14.13</td></tr>
    <tr><td class="index-col">1</td><td>2LYZ</td><td>129</td><td>−1798.21</td><td>−13.94</td></tr>
    <tr><td class="index-col">2</td><td>4LYZ</td><td>129</td><td>−1755.88</td><td>−13.61</td></tr>
    <tr><td class="index-col">3</td><td>1LSE</td><td>129</td><td>−1699.30</td><td>−13.17</td></tr>
    <tr><td class="index-col">4</td><td>2LZT</td><td>129</td><td>−1712.04</td><td>−13.27</td></tr>
  </tbody>
</table>
</div>
<div class="df-annotation">↑ The grey column on the left is the automatic row index (0, 1, 2…). The four named columns are what we defined. Values shown here are illustrative — your actual scores will differ slightly.</div>
</div>

<div class="df-explainer">
<div class="df-explainer-title">🔨 How the DataFrame is built — the results list pattern</div>
<p>We build the DataFrame in two steps. First we collect results into a plain Python <strong>list of dictionaries</strong>, then we convert it to a DataFrame with <code>pd.DataFrame(results)</code>.</p>
<p><strong>Step 1 — a list of dictionaries.</strong> Each dictionary holds one row's worth of data. The keys become column names; the values become the cell contents:</p>

<div class="df-label">One dictionary = one row</div>
<div class="df-visual">
<table>
  <thead>
    <tr><th>Python code</th><th>→ becomes this row</th></tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-family:monospace; font-size:0.75rem; text-align:left; padding: 0.5rem 0.85rem;">
        {<br>
        &nbsp;&nbsp;"PDB ID": "1LYZ",<br>
        &nbsp;&nbsp;"Residues": 129,<br>
        &nbsp;&nbsp;"Rosetta Score (REU)": −1823.45,<br>
        &nbsp;&nbsp;"Score per Residue": −14.13<br>
        }
      </td>
      <td>
        <table style="margin:0;">
          <thead><tr><th>PDB ID</th><th>Residues</th><th>Rosetta Score</th><th>Score per Residue</th></tr></thead>
          <tbody><tr><td>1LYZ</td><td>129</td><td>−1823.45</td><td>−14.13</td></tr></tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>

<p><strong>Step 2 — convert the list to a DataFrame.</strong> After the loop finishes, <code>results</code> is a list of 5 dictionaries. <code>pd.DataFrame(results)</code> stacks them into a table — each dictionary becomes one row, and matching keys line up into the same column automatically.</p>

<div class="df-label">List of 5 dicts → DataFrame with 5 rows</div>
<div class="df-visual">
<table>
  <thead><tr><th class="index-col">(index)</th><th>PDB ID</th><th>Residues</th><th>Rosetta Score (REU)</th><th>Score per Residue</th></tr></thead>
  <tbody>
    <tr><td class="index-col">0</td><td class="highlight">dict 0</td><td>…</td><td>…</td><td>…</td></tr>
    <tr><td class="index-col">1</td><td class="highlight">dict 1</td><td>…</td><td>…</td><td>…</td></tr>
    <tr><td class="index-col">2</td><td class="highlight">dict 2</td><td>…</td><td>…</td><td>…</td></tr>
    <tr><td class="index-col">3</td><td class="highlight">dict 3</td><td>…</td><td>…</td><td>…</td></tr>
    <tr><td class="index-col">4</td><td class="highlight">dict 4</td><td>…</td><td>…</td><td>…</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="mini-wf">
  <div class="mini-wf-title">How the loop in Cell 3 works — step by step</div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">1</div>
    <div class="mini-wf-body"><strong>Initialise an empty list:</strong> <code>results = []</code> — this will collect one dictionary per structure.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">2</div>
    <div class="mini-wf-body"><strong>Loop over each PDB ID.</strong> For each ID, try to download the structure with <code>pose_from_rcsb(pdb_id)</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">3</div>
    <div class="mini-wf-body"><strong>Score the structure</strong> and calculate score per residue: <code>score / n_res</code>.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">4</div>
    <div class="mini-wf-body"><strong>Append a dictionary</strong> to <code>results</code> with four keys: PDB ID, Residues, Rosetta Score, Score per Residue.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">5</div>
    <div class="mini-wf-body"><strong>If the download fails,</strong> the <code>except</code> block catches the error, prints a message, and appends a row with <code>"N/A"</code> values — so the loop continues rather than crashing.</div>
  </div>
  <div class="mini-wf-row">
    <div class="mini-wf-dot">6</div>
    <div class="mini-wf-body"><strong>After the loop,</strong> convert <code>results</code> to a DataFrame with <code>pd.DataFrame(results)</code> and print it.</div>
  </div>
</div>

<div class="info-box">
<strong>Why Score per Residue?</strong> Different PDB entries of the same protein sometimes include slightly different numbers of residues — some include flexible loop regions that others leave out. A raw Rosetta score is larger (more negative) simply for having more atoms. Dividing by residue count gives a <strong>normalised score</strong> that is fair to compare across structures of slightly different lengths.
</div>

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

---

## Cell 4 — Rank the Structures

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Cleans the DataFrame (removing any failed rows), converts the Score per Residue column to numbers, sorts it, and adds a Rank column. Three DataFrame operations are used here that are worth understanding carefully.</p>

<div class="df-explainer">
<div class="df-explainer-title">🔍 Three DataFrame operations explained</div>

<p><strong>1. Filtering rows — <code>df[df["Score per Residue"] != "N/A"]</code></strong></p>
<p>This keeps only rows where the Score per Residue is not the string <code>"N/A"</code>. Think of it as asking the table: "show me only the rows that pass this test." The condition inside the outer <code>df[…]</code> is evaluated for every row — rows where the condition is <code>True</code> are kept; rows where it is <code>False</code> are dropped.</p>

<div class="df-label">Before filtering (one failed row)</div>
<div class="df-visual">
<table>
  <thead><tr><th class="index-col">(index)</th><th>PDB ID</th><th>Score per Residue</th></tr></thead>
  <tbody>
    <tr><td class="index-col">0</td><td>1LYZ</td><td>−14.13</td></tr>
    <tr><td class="index-col">1</td><td>2LYZ</td><td>−13.94</td></tr>
    <tr><td class="index-col">2</td><td>4LYZ</td><td class="highlight">N/A ← this row will be removed</td></tr>
    <tr><td class="index-col">3</td><td>1LSE</td><td>−13.17</td></tr>
    <tr><td class="index-col">4</td><td>2LZT</td><td>−13.27</td></tr>
  </tbody>
</table>
</div>
<div class="df-label" style="margin-top:0.6rem;">After filtering</div>
<div class="df-visual">
<table>
  <thead><tr><th class="index-col">(index)</th><th>PDB ID</th><th>Score per Residue</th></tr></thead>
  <tbody>
    <tr><td class="index-col">0</td><td>1LYZ</td><td>−14.13</td></tr>
    <tr><td class="index-col">1</td><td>2LYZ</td><td>−13.94</td></tr>
    <tr><td class="index-col">3</td><td>1LSE</td><td>−13.17</td></tr>
    <tr><td class="index-col">4</td><td>2LZT</td><td>−13.27</td></tr>
  </tbody>
</table>
</div>
<div class="df-annotation">Notice: the original index numbers are kept. Index 2 is gone; indices 0, 1, 3, 4 remain.</div>

<p style="margin-top:0.85rem;"><strong>2. Converting column type — <code>.astype(float)</code></strong></p>
<p>When we stored <code>"N/A"</code> as a fallback in Cell 3, pandas treated the entire <code>Score per Residue</code> column as <em>text</em> (strings), even the rows with real numbers. We cannot sort text values numerically — <code>"−14.13"</code> sorted as text does not equal <code>−14.13</code> sorted as a number. <code>.astype(float)</code> converts the column to proper decimal numbers so sorting works correctly.</p>

<p><strong>3. Sorting — <code>.sort_values("Score per Residue", ascending=True)</code></strong></p>
<p>Reorders the rows from the most negative (best) score to the least negative (worst). <code>ascending=True</code> means smallest-first — since our scores are negative, the most negative value (e.g. −14.13) is the smallest and appears at the top.</p>

<div class="df-label">After sorting (most negative = rank 1)</div>
<div class="df-visual">
<table>
  <thead><tr><th class="index-col">Rank</th><th>PDB ID</th><th>Score per Residue</th></tr></thead>
  <tbody>
    <tr><td class="index-col">1</td><td>1LYZ</td><td class="highlight">−14.13 ← best</td></tr>
    <tr><td class="index-col">2</td><td>2LYZ</td><td>−13.94</td></tr>
    <tr><td class="index-col">3</td><td>2LZT</td><td>−13.27</td></tr>
    <tr><td class="index-col">4</td><td>1LSE</td><td>−13.17</td></tr>
  </tbody>
</table>
</div>
</div>

<p><strong>Reading a single value — <code>df.iloc[0]</code></strong></p>
<p><code>.iloc[n]</code> selects a row by its integer position (0 = first row, −1 = last row). After sorting, <code>iloc[0]</code> is the best structure. We then access individual fields from it like a dictionary: <code>best["PDB ID"]</code>, <code>best["Score per Residue"]</code>.</p>
</div>

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

---

## Cell 5 — Visualize the Comparison

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Takes the sorted DataFrame and draws a horizontal bar chart. Each bar represents one structure; bar length encodes its score; colour encodes relative quality (darker = better).</p>
<p><strong>Key functions:</strong></p>
<div class="fn-table-wrap">
<table class="fn-table">
  <thead><tr><th>Function</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>cm.YlOrRd_r(np.linspace(0.2, 0.8, n))</code></td><td>Picks <code>n</code> evenly spaced colours from the yellow-to-red gradient, reversed so the best (most negative) score gets the darkest colour. <code>np.linspace</code> generates evenly spaced values between 0.2 and 0.8 to sample from the gradient.</td></tr>
    <tr><td><code>ax.barh(labels, values)</code></td><td>Draws horizontal bars. Labels come from the <code>PDB ID</code> column; values come from <code>Score per Residue</code>.</td></tr>
    <tr><td><code>ax.axvline(x=0)</code></td><td>Draws a vertical dashed line at x = 0 as a visual reference point.</td></tr>
    <tr><td><code>ax.text(x, y, label)</code></td><td>Places a text annotation at a specific (x, y) position in the chart — used here to print each score value inside its bar.</td></tr>
    <tr><td><code>plt.savefig("file.png", dpi=150)</code></td><td>Saves the chart as a PNG image file. <code>dpi=150</code> produces a high-resolution image.</td></tr>
  </tbody>
</table>
</div>
</div>

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

---

## Cell 6 — Interpret the Results

<div class="cell-intro">
<div class="cell-intro-title">Before you run this cell</div>
<p><strong>What this cell does:</strong> Reads specific values out of the sorted DataFrame to compute and print the spread between the best and worst structures, then gives a practical recommendation.</p>

<div class="df-explainer">
<div class="df-explainer-title">📖 Reading values out of a DataFrame</div>
<p>There are two main ways to access a specific cell after sorting:</p>
<p><strong><code>df.iloc[0]</code></strong> — select the first row (by position). Returns a Series object that behaves like a dictionary. Access a specific column with <code>df.iloc[0]["Column Name"]</code>.</p>
<p><strong><code>df.iloc[-1]</code></strong> — select the last row (−1 always means "last"). After sorting best-to-worst, this is the worst structure.</p>

<div class="df-label">iloc positions after sorting</div>
<div class="df-visual">
<table>
  <thead><tr><th class="index-col">iloc position</th><th>PDB ID</th><th>Score per Residue</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td class="index-col highlight">iloc[0]</td><td>1LYZ</td><td class="highlight">−14.13</td><td>← best structure</td></tr>
    <tr><td class="index-col">iloc[1]</td><td>2LYZ</td><td>−13.94</td><td></td></tr>
    <tr><td class="index-col">iloc[2]</td><td>2LZT</td><td>−13.27</td><td></td></tr>
    <tr><td class="index-col highlight">iloc[-1]</td><td>1LSE</td><td class="highlight">−13.17</td><td>← worst structure</td></tr>
  </tbody>
</table>
</div>
<div class="df-annotation">Note: <code>iloc[-1]</code> and <code>iloc[3]</code> refer to the same row here — both access the last row. <code>-1</code> is a convenient shorthand that always means "last", regardless of how many rows there are.</div>
</div>
</div>

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
| **DataFrame** | A table with labelled rows and columns from the pandas library; like a spreadsheet in Python |
| **List of dictionaries** | The pattern used to collect row data before converting to a DataFrame; each dict = one row |
| **`.iloc[n]`** | Selects a row by integer position; 0 = first row, −1 = last row |
| **`.astype(float)`** | Converts a column from text strings to decimal numbers so arithmetic and sorting work correctly |
| **Filtering** | Selecting only the rows of a DataFrame that satisfy a condition |
| **Colormap** | A mapping from numerical values to colours; used for visual encoding of data |
| **Sanity check** | Testing code on a single known case before running a full loop |
| **Spread** | The range between the best and worst scores in a comparison |