---
layout: page
title: PyMOL Project E — Visualising Docking Results
description: PyMOL — Bringing Your PyRosetta Results to Life
img: assets/img/PymolCover.jpg
importance: 5
category: pymol
related_publications: false
---

## What You Will Learn

- How to visualise the docking results you calculated in PyRosetta
- How to create a professional comparison of all three drugs in the binding pocket
- How to use colour and labelling to communicate scientific results visually
- How to make a publication-quality figure that tells the full story of your drug comparison
- How to connect computational scores to structural observations

**Time:** ~40 minutes &nbsp;|&nbsp; **Prerequisite:** PyMOL Projects A–D and PyRosetta Projects 1–2 &nbsp;|&nbsp; **Difficulty:** Intermediate

---

## Background: Connecting Numbers to Structures

In the PyRosetta projects, you calculated binding energy scores for three COX-2 inhibitors and ranked them. But a table of numbers alone does not tell the full scientific story. The most powerful way to communicate a result is to combine the quantitative data (the scores) with a visual explanation (the structure) — showing *why* the numbers are what they are.

This is exactly what professional scientists do in published papers. Every paper that reports a binding energy also shows a figure of the drug sitting in the binding pocket — because seeing the structure helps readers understand the numbers.

In this final PyMOL project, you will create a **complete visual summary** of your docking results — one that could go directly into a scientific poster or paper.

> **Analogy:** If PyRosetta is the measuring tape that tells you how well each key fits the lock, then PyMOL is the photograph that shows *why* the best key fits better. Both are needed to tell the complete story.

---

## Your Results From PyRosetta Project 2

Recall the binding energies you calculated:

| Rank | Drug | Binding Energy (REU) | Brand Name |
|---|---|---|---|
| 1 | Ibuprofen | −26.94 | Advil |
| 2 | Celecoxib | −20.84 | Celebrex |
| 3 | Meloxicam | −15.03 | Mobic |

In this project we will build a visual explanation for these rankings.

---

## Step-by-Step Instructions

### Step 1 — Load and Align All Three Structures

Start with a clean session and load all three structures:

```
reinitialize
fetch 4PH9, ibuprofen
fetch 3LN1, celecoxib
fetch 4M11, meloxicam
hide everything
align celecoxib, ibuprofen
align meloxicam, ibuprofen
```

`reinitialize` clears everything from any previous PyMOL session so you start completely fresh.

---

### Step 2 — Set Up a Clean, Publication-Ready Display

Set the background and visual style:

```
bg_color white
set cartoon_transparency, 0.0
set stick_radius, 0.15
set sphere_scale, 0.25
```

Display all three protein backbones in neutral grey — we want the drugs to be the visual focus, not the protein:

```
show cartoon, ibuprofen
show cartoon, celecoxib
show cartoon, meloxicam
color grey85, ibuprofen
color grey85, celecoxib
color grey85, meloxicam
```

**Key Concepts:**

- **`reinitialize`:** Clears all objects, selections, and settings from the current PyMOL session.
- **`stick_radius`:** Controls how thick the sticks are in the sticks representation.
- **Grey protein:** In publication figures, the protein is usually displayed in a muted colour so that the drug (in a bright colour) immediately draws the eye.

---

### Step 3 — Display the Three Drugs with Ranking Colours

Colour the drugs using a traffic-light scheme that immediately communicates ranking:

```
select ibp, ibuprofen and resn IBP
select cel, celecoxib and resn CEL
select mxm, meloxicam and resn MXM

show sticks, ibp
show sticks, cel
show sticks, mxm

color green, ibp
color orange, cel
color red, mxm
```

- **Green** = Rank 1, best binder (Ibuprofen, −26.94 REU)
- **Orange** = Rank 2 (Celecoxib, −20.84 REU)
- **Red** = Rank 3, weakest binder (Meloxicam, −15.03 REU)

This colour scheme is immediately intuitive — green is good, red is weaker — and helps viewers understand the ranking at a glance before reading any text.

---

### Step 4 — Add Binding Energy Labels

PyMOL allows you to add custom text labels to specific atoms. We will label each drug with its binding energy:

```
pseudoatom label_ibp, pos=[-10, 20, 5]
pseudoatom label_cel, pos=[-10, 15, 5]
pseudoatom label_mxm, pos=[-10, 10, 5]

label label_ibp, "Ibuprofen: -26.94 REU (#1)"
label label_cel, "Celecoxib: -20.84 REU (#2)"
label label_mxm, "Meloxicam: -15.03 REU (#3)"

set label_size, 16
set label_color, black
```

> **Note:** The `pos=` coordinates may need adjusting depending on your view angle. Use `pseudoatom label_ibp, selection=ibp` to place the label at the drug's centre of mass instead.

Alternatively, a cleaner approach for figures is to add labels in an image editing program (like PowerPoint or Keynote) after saving the raw PyMOL image.

**Key Concepts:**

- **`pseudoatom`:** A fake atom placed at a specific 3D coordinate — used purely to anchor a text label.
- **Label placement:** Good figure design places labels where they do not obscure the important structural features.

---

### Step 5 — Show the Binding Pocket Surface

Display the molecular surface of the binding pocket around Ibuprofen (our reference structure) to provide context:

```
select pocket_ref, byres (ibp expand 6)
show surface, pocket_ref
set transparency, 0.55
color grey60, pocket_ref
```

The semi-transparent surface lets you see all three drugs inside the pocket simultaneously. This creates a powerful image: three coloured molecules of different sizes and shapes, all inside the same grey cavity.

Zoom to the pocket:

```
zoom ibp, 12
```

The number `12` controls the zoom distance — larger numbers zoom out more, showing more context.

---

### Step 6 — Highlight the Key Interactions

For the best-binding drug (Ibuprofen, green), display its hydrogen bonds to show *why* it scores best:

```
select pocket_ibp, byres (ibp expand 5)
distance hb_ibp, ibp, pocket_ibp, mode=2
color green, hb_ibp
set dash_width, 3
set dash_gap, 0.5
```

Now do the same for the weakest binder (Meloxicam, red):

```
select pocket_mxm, byres (mxm expand 5)
distance hb_mxm, mxm, pocket_mxm, mode=2
color red, hb_mxm
```

Count the green dashes (Ibuprofen H-bonds) and the red dashes (Meloxicam H-bonds). The drug with more hydrogen bonds generally has a more negative binding energy — your counts should reflect the ranking you calculated.

**Key Concepts:**

- **`dash_width`:** Controls the thickness of dashed lines used for distances and hydrogen bonds.
- **`dash_gap`:** Controls the spacing between dashes.
- **Structural explanation:** When your visual hydrogen bond count matches your computational energy ranking, it validates both the structure and the calculation — they are telling the same story from two different angles.

---

### Step 7 — Create Three Individual Panel Figures

Professional papers often show one panel per drug rather than all three overlaid. Create a separate high-quality image for each drug:

**Panel 1 — Ibuprofen (Best binder):**

```
hide sticks, cel
hide sticks, mxm
hide everything, hb_mxm
zoom ibp, 10
set_view (orient ibp)
ray 1200, 900
png panel_ibuprofen_rank1.png
```

**Panel 2 — Celecoxib:**

```
hide sticks, ibp
hide sticks, mxm
show sticks, cel
zoom cel, 10
ray 1200, 900
png panel_celecoxib_rank2.png
```

**Panel 3 — Meloxicam (Weakest binder):**

```
hide sticks, cel
show sticks, mxm
zoom mxm, 10
ray 1200, 900
png panel_meloxicam_rank3.png
```

**Combined overview (all three):**

```
show sticks, ibp
show sticks, cel
show sticks, mxm
zoom ibp, 15
ray 1600, 1000
png combined_all_drugs.png
```

---

### Step 8 — Build Your Final Results Figure

Create the definitive summary figure — this is the one you would put on a poster or in a report:

```
reinitialize
fetch 4PH9, ibuprofen
fetch 3LN1, celecoxib
fetch 4M11, meloxicam
hide everything
align celecoxib, ibuprofen
align meloxicam, ibuprofen
bg_color white
show cartoon, ibuprofen
color grey85, ibuprofen
select ibp, ibuprofen and resn IBP
select cel, celecoxib and resn CEL
select mxm, meloxicam and resn MXM
show sticks, ibp
show sticks, cel
show sticks, mxm
color green, ibp
color orange, cel
color red, mxm
select pocket_ref, byres (ibp expand 6)
show surface, pocket_ref
set transparency, 0.5
color grey60, pocket_ref
select pocket_ibp, byres (ibp expand 5)
distance hb_ibp, ibp, pocket_ibp, mode=2
color green, hb_ibp
zoom ibp, 12
ray 1800, 1200
png FINAL_docking_results.png
save FINAL_session.pse
```

---

## Interpreting Your Complete Results

Now that you have both the numbers (PyRosetta) and the visual (PyMOL), you can write a complete scientific interpretation. A strong interpretation addresses all of these points:

**1. Ranking:** Which drug scored best and by how much?

**2. Structural reason:** Looking at the pocket, why does the top-ranked drug score better? Is it:
- More hydrogen bonds?
- Better shape complementarity (fills the pocket more completely)?
- Larger contact surface area?

**3. Limitations:** What can our method NOT tell us?
- We used structures from different crystal forms (slightly different protein conformations)
- We did not account for how the drug gets into the body (absorption, metabolism)
- We did not test toxicity or side effects

**4. Real-world context:** Do our computational rankings match clinical reality? (All three drugs are approved and effective — the differences in binding energy explain differences in potency, not efficacy)

---

## Full Command Summary

```
reinitialize
fetch 4PH9, ibuprofen
fetch 3LN1, celecoxib
fetch 4M11, meloxicam
hide everything
align celecoxib, ibuprofen
align meloxicam, ibuprofen
bg_color white
show cartoon, ibuprofen
color grey85, ibuprofen
select ibp, ibuprofen and resn IBP
select cel, celecoxib and resn CEL
select mxm, meloxicam and resn MXM
show sticks, ibp
show sticks, cel
show sticks, mxm
color green, ibp
color orange, cel
color red, mxm
select pocket_ibp, byres (ibp expand 5)
distance hb_ibp, ibp, pocket_ibp, mode=2
color green, hb_ibp
select pocket_ref, byres (ibp expand 6)
show surface, pocket_ref
set transparency, 0.5
color grey60, pocket_ref
zoom ibp, 12
ray 1800, 1200
png FINAL_docking_results.png
save FINAL_session.pse
```

---

## Discussion Questions

**1.** Did the number of hydrogen bonds you counted in PyMOL match the energy ranking from PyRosetta? If not, what other factors might explain the discrepancy?

**2.** You used three different crystal structures (4PH9, 3LN1, 4M11) — each with slightly different protein conformations. How might this affect the fairness of the energy comparison? How could you design a fairer experiment?

**3.** Ibuprofen ranked #1 in binding energy, yet it is sold over the counter while Celecoxib (#2) requires a prescription. What factors other than binding energy must determine a drug's prescription status?

**4.** Looking at your final figure, does the visual impression of the binding match the numerical ranking? Can you explain to someone who has not done this project why Ibuprofen scores better than Meloxicam — using only the PyMOL image?

**5.** You have now completed the full workflow: visualise (PyMOL A–E) → measure stability (PyRosetta 1) → calculate docking (PyRosetta 2). How did each step build on the previous one? Which step gave you the most scientific insight, and why?

---

## The Complete Learning Journey

You have now completed a full computational drug design workflow used by real pharmaceutical researchers:

```
PyMOL A          PyMOL B          PyMOL C
See protein  →   Find pocket  →   Compare drugs
   ↓                                    ↓
PyMOL D                          PyMOL E
Understand     ←————————————    Visualise results
mutations                             ↑
                                      |
                    PyRosetta 1 → PyRosetta 2
                    Measure         Calculate
                    stability       docking
```

Every arrow in this diagram represents something you have done yourself — not just read about, but actually performed using the same tools that professional structural biologists and medicinal chemists use every day.

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **`reinitialize`** | Clears all objects and settings from PyMOL — starts completely fresh |
| **`pseudoatom`** | A fake atom placed at a 3D coordinate, used to anchor text labels |
| **Traffic-light colouring** | Using green/orange/red to visually communicate ranking (best/middle/worst) |
| **Publication figure** | A figure formatted and polished enough to appear in a scientific journal or poster |
| **Structural validation** | Confirming that a computational result makes structural sense when visualised |
| **Shape complementarity** | How well a drug fills the pocket — measured visually or computationally |
| **Lead compound** | The best-performing drug candidate from a screening study — the starting point for further optimisation |
| **Multi-panel figure** | A scientific figure with multiple sub-images (panels) showing different aspects of the same result |
| **Binding affinity** | How strongly a drug binds its target. Related to but not identical to binding energy |
| **Drug discovery pipeline** | The full sequence of steps from identifying a target protein to an approved medicine — computational docking is an early step |