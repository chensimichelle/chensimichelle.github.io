---
layout: page
title: PyMOL Project A — Meet Your Protein
description: PyMOL for Beginners — Loading and Visualising a Real Protein
img: assets/img/PymolCover.jpg
importance: 1
category: pymol
related_publications: false
---

## What You Will Learn

- What PyMOL is and why scientists use it
- How to load a real protein from the global database
- How to switch between different visual representations
- How to colour a protein by its structural features
- How to take a publication-quality screenshot

**Time:** ~30 minutes &nbsp;|&nbsp; **Prerequisite:** None — this is your first project &nbsp;|&nbsp; **Difficulty:** Beginner

---

## Background: Why Do We Visualise Proteins?

Proteins are the molecular machines of life. They digest your food, carry oxygen in your blood, fight infections, and control every chemical reaction in your body. But proteins are far too small to see — a single protein is about 10,000 times smaller than the width of a human hair.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol1.gif" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pymol Pictures
</div>

Scientists figured out a way around this. Using a technique called **X-ray crystallography**, they can determine the exact 3D position of every single atom in a protein. These atomic coordinates are then stored in the **Protein Data Bank (PDB)** — a free, public database containing over 200,000 protein structures that anyone in the world can download.

**PyMOL** is the software scientists use to open these files and see proteins in 3D. Think of it as the "photo viewer" for molecular structures — except instead of looking at flat photographs, you are spinning and exploring a real 3D object made of thousands of atoms.

> **Analogy:** The Protein Data Bank is like Google Maps for molecules. PyMOL is the app you use to explore it.

---

## The Protein We Will Study: Lysozyme

In this first project we will look at **Lysozyme** — one of the most studied proteins in history, and the same protein you will analyse computationally in the PyRosetta projects. Lysozyme is found in your tears, saliva, and egg whites. Its job is to destroy bacteria by cutting apart their cell walls.

Its PDB ID is **1LYZ**. Every structure in the database has a unique 4-character ID like this.

---

## Step-by-Step Instructions

### Step 1 — Open PyMOL

Open PyMOL on your computer. You will see two panels:

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol1-1.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>

- **The viewer** (large black window on the left) — this is where your protein will appear
- **The command line** (white box at the bottom right) — this is where you type instructions

All the commands in this project are typed into the command line and pressed **Enter** to run.

---

### Step 2 — Load the Protein

Type the following command and press Enter:

```
fetch 1LYZ
```

**What this does:** PyMOL connects to the Protein Data Bank on the internet, downloads the Lysozyme structure, and displays it automatically.

You should see a tangled mess of coloured sticks appear in the viewer. This is every bond in the protein shown at once — not very readable yet! We will fix that in the next steps.

> **Note:** If you see an error about internet connection, your teacher may have already downloaded the file. In that case, use `load 1LYZ.pdb` instead.

**Key Concepts:**

- **fetch:** A PyMOL command that downloads a structure directly from the Protein Data Bank using its PDB ID.
- **PDB ID:** A unique 4-character code (letters and numbers) that identifies every protein structure in the database.

---

### Step 3 — Switch to Cartoon View

The default "sticks" view shows every single atom and bond, which is overwhelming. The **cartoon** representation simplifies this by drawing the protein's overall shape:

```
hide everything
show cartoon, 1LYZ
```

Now you should see a much cleaner view with:

- **Ribbons / spirals** — these are **alpha helices**, regions where the protein chain coils like a spring
- **Flat arrows** — these are **beta sheets**, regions where the chain lies flat and folds back on itself
- **Thin lines/loops** — irregular connecting regions between the helices and sheets

> **Analogy:** Switching from sticks to cartoon is like zooming out on a city map. You stop seeing every brick in every building and start seeing the overall layout of streets and neighbourhoods.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol1-2.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>

**Key Concepts:**

- **hide everything:** Turns off all current visual representations.
- **show cartoon:** Displays the protein's backbone as a simplified ribbon.
- **Alpha helix:** A right-handed spiral shape — one of the two most common structural patterns in proteins.
- **Beta sheet:** A flat, pleated sheet shape — the other most common structural pattern.
- **Secondary structure:** The local 3D shape that a stretch of the protein chain folds into (helix or sheet).

---

### Step 4 — Colour by Secondary Structure

By default PyMOL colours the protein by chain. Let us colour it by secondary structure instead, so helices and sheets stand out clearly:

```
color red, ss h
color yellow, ss s
color white, ss l+''
```

Your protein should now show:

- **Red** = alpha helices
- **Yellow** = beta sheets
- **White** = loops and irregular regions

This colour scheme is one of the most common in published scientific papers — when you see it in a textbook, you will recognise it now.

**Key Concepts:**

- **`ss`:** second structure.
- **`ss h`:** Selects all residues in helices (`h` = helix).
- **`ss s`:** Selects all residues in sheets (`s` = strand/sheet).
- **`ss l`:** Selects all residues in loops (`l` = loop).
- **Secondary structure colouring:** A standard way to make protein structure immediately readable to other scientists.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol1-3.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>

---

### Step 5 — Explore the Surface

The cartoon view shows the protein's skeleton but hides its outer shape. The **surface** representation shows what the protein actually looks like from the outside — including its grooves, pockets, and bumps where other molecules can attach:

```
show surface, 1LYZ
set transparency, 0.5
```

Setting the transparency to 0.5 (50%) lets you see the cartoon skeleton inside the surface at the same time.

Rotate the protein by clicking and dragging in the viewer. Look for:

- **Concave dips and grooves** — these are potential binding sites where drugs or other molecules could attach
- **Convex bumps** — usually less important for binding
- **The overall shape** — is the protein round, elongated, irregular?

> **Analogy:** The surface view is like seeing a key for the first time. The cartoon was just the internal metal structure — the surface shows the actual shape that will fit (or not fit) into a lock.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/pymol1-4.jpg" title="your title" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>

---

### Step 6 — Colour by Amino Acid Properties

Different amino acids have different chemical properties. Colouring by these properties reveals which parts of the protein are hydrophobic (water-repelling) and which are hydrophilic (water-attracting):

```
hide surface
show cartoon, 1LYZ
util.cbaw 1LYZ
```

`util.cbaw` stands for "colour by amino acid — white background" and applies a standard colour scheme where each of the 20 amino acids gets a unique colour.

Alternatively, try colouring by **B-factor** — a measure of how much each atom wiggles in the crystal:

```
spectrum b, blue_red, 1LYZ
```

- **Blue** = rigid, stable regions
- **Red** = flexible, wobbly regions

Flexible regions are often important for how the protein moves and functions.

**Key Concepts:**

- **Amino acid:** One of 20 building blocks that chain together to form a protein. Each has different chemical properties.
- **Hydrophobic:** Water-repelling. Hydrophobic amino acids tend to cluster in the protein's interior, away from water.
- **Hydrophilic:** Water-attracting. These tend to be on the protein's surface, interacting with the surrounding water.
- **B-factor:** A measure of atomic flexibility in the crystal structure. High B-factor = the atom was hard to pin down precisely.

---

### Step 7 — Save Your Image

Take a high-quality screenshot for your portfolio:

```
hide surface
show cartoon, 1LYZ
color red, ss h
color yellow, ss s
color white, ss l+''
ray 1200, 900
png lysozyme_portrait.png
```

**What this does:**

- `ray` renders a high-quality image using ray-tracing (like a proper 3D rendering engine) at 1200 × 900 pixels
- `png` saves the rendered image to your project folder

> **Note:** The `ray` command can take 10–30 seconds to complete on slower computers. The viewer will appear frozen — this is normal. Wait for it to finish before typing the next command.

**Key Concepts:**

- **ray:** PyMOL's ray-tracing renderer. Produces smooth, professional-quality images with proper lighting and shadows.
- **png:** Saves the current rendered image as a PNG file.

---

### Step 8 — Save Your Session

Save your entire PyMOL session so you can come back to it later:

```
save lysozyme_session.pse
```

A `.pse` file saves everything — the protein, all your colour settings, the camera angle, and all your selections. Opening it later restores exactly where you left off.

---

## Full Command Summary

Here is the complete sequence of everything you did in this project:

```
fetch 1LYZ
hide everything
show cartoon, 1LYZ
color red, ss h
color yellow, ss s
color white, ss l+''
show surface, 1LYZ
set transparency, 0.5
hide surface
spectrum b, blue_red, 1LYZ
hide everything
show cartoon, 1LYZ
color red, ss h
color yellow, ss s
color white, ss l+''
ray 1200, 900
png lysozyme_portrait.png
save lysozyme_session.pse
```

---

## Discussion Questions

**1.** How many alpha helices can you count in Lysozyme? How many beta sheets?

**2.** When you displayed the molecular surface, could you find any obvious grooves or pockets? Where on the protein were they located?

**3.** After colouring by B-factor (blue to red), which parts of the protein were most flexible? Were they in the helices, the sheets, or the loops?

**4.** Why do you think scientists use the cartoon representation most often in published papers, rather than the stick or surface representation?

**5.** The Protein Data Bank has over 200,000 structures. Why do you think sharing these structures publicly and for free benefits science?

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **PyMOL** | A molecular visualisation program used by scientists worldwide to view 3D protein structures |
| **Protein Data Bank (PDB)** | A free, public database of over 200,000 experimentally determined protein structures |
| **PDB ID** | A unique 4-character code identifying each structure in the Protein Data Bank |
| **fetch** | PyMOL command to download a structure directly from the PDB |
| **Cartoon representation** | A simplified view showing protein secondary structure as ribbons and arrows |
| **Surface representation** | Shows the outer boundary of a protein — the shape other molecules encounter |
| **Alpha helix** | A coiled, spring-like region of protein secondary structure |
| **Beta sheet** | A flat, pleated region of protein secondary structure |
| **B-factor** | A measure of how much an atom wiggles in the crystal structure |
| **Active site** | The region of a protein where a drug or substrate binds |
| **ray** | PyMOL's high-quality rendering command |
| **.pse file** | A PyMOL session file that saves your entire workspace |