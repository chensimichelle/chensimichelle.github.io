---
layout: page
title: PyMOL Project D — Visualising Mutations and Drug Resistance
description: PyMOL — How a Single Amino Acid Change Can Break a Drug
img: assets/img/PymolCover.png
importance: 4
category: pymol
related_publications: false
---

## What You Will Learn

- How to compare a wild-type protein with a mutant version
- How to isolate and highlight a mutated residue
- How to visualise what a mutation changes in the local environment
- How to predict whether a mutation helps or hurts drug binding
- How this connects to real-world drug resistance in bacteria and cancer

**Time:** ~35 minutes &nbsp;|&nbsp; **Prerequisite:** PyMOL Projects A, B, and C &nbsp;|&nbsp; **Difficulty:** Intermediate

---

## Background: What is a Mutation?

A **mutation** is a change in the DNA sequence of a gene, which causes a change in the amino acid sequence of the protein that gene encodes. Instead of, say, Serine at position 530, a mutant protein might have Alanine — just one amino acid out of hundreds, but sometimes enough to completely change how the protein behaves.

Mutations happen naturally all the time. Most are harmless or even beneficial. But some mutations have dramatic consequences:

- **Drug resistance:** A mutation in the drug binding pocket changes the shape of the pocket so the drug no longer fits. The bacteria or cancer cell survives the drug and multiplies. This is one of the biggest problems in modern medicine.
- **Cancer-causing mutations:** Mutations in proteins that control cell division can cause cells to divide uncontrollably.
- **Inherited diseases:** Mutations in structural proteins (like the one causing sickle cell anaemia) change the protein's shape and function.

> **Analogy:** Imagine a lock that a drug (key) fits into perfectly. A mutation slightly reshapes the lock — maybe one of the tumblers is now a different shape. The original key no longer fits, but the lock still works fine for the bacterium. The drug is defeated.

In this project, you will *see* a mutation with your own eyes — in 3D — and judge for yourself what it does to the binding pocket.

---

## The Mutation We Will Study

We will compare two versions of **Lysozyme** — the same protein from Project A:

- **Wild-type Lysozyme** (PDB: 1LYZ) — the normal, natural version
- A **mutant version** where we manually change Tryptophan 62 (TRP62) to Alanine

**TRP62** (Tryptophan at position 62) sits in Lysozyme's active site — the groove that binds bacterial cell wall sugars. Tryptophan is a large, bulky, aromatic amino acid. Alanine is the smallest possible amino acid — just a single methyl group. Swapping TRP62 for Alanine removes a large chunk of the binding site.

We will also look at a real-world example of drug resistance by examining a mutation in COX-2.

---

## Part 1 — Comparing Wild-Type and Mutant Lysozyme

### Step 1 — Load the Wild-Type Structure

```
fetch 1LYZ, wildtype
hide everything
show cartoon, wildtype
color grey70, wildtype
```
<div class="row justify-content-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol4-1.jpg" title="Mutation Effects" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### Step 2 — Find and Highlight TRP62

```
select trp62, wildtype and resi 62
show sticks, trp62
color yellow, trp62
zoom trp62
```

Tryptophan (TRP) is one of the largest amino acids. Notice its size — it has a large double-ring structure (called an **indole ring**). This bulky shape is important: it fills space in the binding groove and creates interactions with the substrate.

Display the surrounding residues within 5 Å:

```
select around_62, byres (trp62 expand 5) and not trp62
show sticks, around_62
color cyan, around_62
```

Look carefully at how TRP62 fits among its neighbours. It is large enough that removing it would leave a significant hole in the binding site.



**Key Concepts:**

- **Wild-type:** The natural, unmodified version of a protein — the "normal" version found in nature.
- **Tryptophan (TRP/W):** The largest of the 20 amino acids, containing an aromatic indole ring system.
- **Alanine (ALA/A):** The smallest amino acid with a side chain — just a single CH₃ group. Often used in mutation studies because it removes the side chain without distorting the backbone.

---

### Step 3 — Simulate the Mutation Visually

We cannot actually create a mutant structure in PyMOL without additional tools, but we can visualise what the mutation removes. Let us hide TRP62 and see what the binding site looks like without it:

```
hide sticks, trp62
```

Now look at the gap left behind. Where TRP62 used to be, there is now nothing — just empty space. In a real Alanine mutant, a tiny ALA side chain would occupy the very centre of that gap, but the surrounding space would be unfilled.

Show a surface of the wild-type protein around this region to see the pocket:

```
show surface, wildtype
set transparency, 0.4
color grey80, wildtype
show sticks, around_62
color cyan, around_62
```

The surface shows the shape of the binding groove. With TRP62 present, it is filled and complementary to the substrate shape. Without it, there is a large void.

Restore TRP62 to compare:

```
show sticks, trp62
color yellow, trp62
```
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol4-2.jpg" title="Mutation Effects" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**Key Concepts:**

- **Side chain:** The part of an amino acid that varies between the 20 types — the part that hangs off the backbone and determines chemical properties.
- **Alanine scanning:** The experimental technique (also done computationally in PyRosetta Project 1) of mutating each residue to Alanine one by one to identify which residues are most important.

---

## Part 2 — Real Drug Resistance: COX-2

Now we look at a real drug-resistance scenario. Rather than telling you which residue matters, we will let you discover it yourself — the same way a researcher would approach a new structure.

The question is: **which amino acids in COX-2 are actually touching Ibuprofen's carboxylate group?** The carboxylate (–COO⁻) is the only part of Ibuprofen that can form hydrogen bonds and electrostatic interactions with the protein — so whatever residues are within 3.5 Å of its oxygens are the key binding partners.

### Step 4 — Load COX-2 and Find the Drug

```
fetch 4PH9, cox2_wt
hide everything, cox2_wt
show cartoon, cox2_wt
color grey70, cox2_wt
select ibu, cox2_wt and resn IBP and chain A
show sticks, ibu
color yellow, ibu
zoom ibu
```
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol4-3.jpg" title="Mutation Effects" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
Now find which residues are within 3.5 Å of Ibuprofen's carboxylate oxygens (atom names O1 and O2):

```
select near_carboxylate, byres ((ibu and name O1+O2) expand 3.5) and chain A and not resn IBP
show sticks, near_carboxylate
color cyan, near_carboxylate
iterate near_carboxylate and name CA, print(resn, resi)
```

PyMOL will print a list of residues in the terminal. Look at the list — one of them will be an **Arginine (ARG)**. Arginine has a positively charged guanidinium group that is strongly attracted to the negatively charged carboxylate. This is the key hydrogen bonding and electrostatic partner for the drug.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol4-4.jpg" title="Mutation Effects" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

> **What to look for:** The residue list should include ARG121. Note it down — this is the residue we will use for the drug resistance example. If you see other residues too (TYR, VAL, ALA), these are hydrophobic contacts — important for pocket shape, but not the primary hydrogen bonding partner.

---

### Step 5 — Highlight and Measure the Key Residue

Now select ARG121 specifically and measure its interaction with the drug:

```
select arg121, cox2_wt and resi 121 and chain A
show sticks, arg121
color red, arg121
distance d_arg_ibu, (arg121 and name NH1+NH2+NE), (ibu and name O1+O2), cutoff=5
```
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/pymol4-5.jpg" title="Mutation Effects" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
> **Note:** We specify nitrogen atoms (`NH1`, `NH2`, `NE`) on ARG121 and oxygen atoms (`O1`, `O2`) on IBP because hydrogen bonds and electrostatic interactions form between these specific atoms — not carbons. If you run this command a second time and extra lines appear, delete the old object first with `delete d_arg_ibu`, then re-run.

You should see one or two clean dashed lines — these are the direct hydrogen bond and electrostatic contacts between ARG121 and Ibuprofen's carboxylate group. These are the interactions that would be lost if ARG121 were mutated to Alanine.

If ARG121 were mutated to a non-charged amino acid such as Alanine (**ARG121ALA**), this interaction would be completely destroyed — the positively charged guanidinium group that attracts the negatively charged carboxylate would be replaced by a tiny methyl group. The drug would lose one of its primary anchoring points and bind far more weakly. This is a well-known mechanism of drug resistance.

---

### Step 6 — Compare With and Without the Mutation (Conceptual)

Select all residues surrounding ARG121 to see its local environment:

```
select around_121, byres (arg121 expand 4) and not arg121 and chain A
show sticks, around_121
color lightblue, around_121
color yellow, ibu
color red, arg121
```

Look at how ARG121 reaches directly toward the carboxylate group of Ibuprofen. The positively charged guanidinium group of Arginine (the forked nitrogen-containing tip) points straight at the negatively charged –COO⁻ of the drug. This is both a hydrogen bond and an electrostatic attraction — one of the strongest non-covalent interactions possible in a binding pocket.

Mutating ARG121 to Alanine would replace this entire charged group with a single methyl group — not only losing the hydrogen bonds but also removing the charge complementarity entirely.

> **Think about it:** The ARG121–carboxylate interaction is like a magnet holding the drug in place. Mutating ARG to ALA removes the magnet entirely — the drug can still sit in the pocket due to hydrophobic contacts, but the specific, tight positioning that makes it an effective inhibitor is gone.

---

### Step 7 — Create a Mutation Figure

```
hide everything
show cartoon, cox2_wt
color grey70, cox2_wt
show sticks, arg121
color red, arg121
show sticks, ibu
color yellow, ibu
show sticks, around_121
color lightblue, around_121
delete d_arg_ibu
distance d_arg_ibu, (arg121 and name NH1+NH2+NE), (ibu and chain A and name O1+O2), cutoff=5
bg_color white
zoom arg121
ray 1400, 1000
png mutation_resistance.png
save mutation_session.pse
```

---

## Connecting to PyRosetta Project 1

In **PyRosetta Project 1**, you used `mutate_residue()` to computationally swap amino acids one at a time and measured the energy change. Now you understand *why* that matters:

- A **positive** energy change (destabilising) means the mutation disrupts favourable interactions — like removing TRP62 from Lysozyme's binding site
- A **negative** energy change (stabilising) means the mutation creates new favourable contacts

The visual intuition you built in this project explains the numbers you calculate in PyRosetta. Mutations that change a large amino acid to a small one (like TRP→ALA) almost always destabilise the protein because they leave voids. Mutations that change shape in a tightly packed region (like VAL→ILE near a drug) can disrupt binding.

---

## Full Command Summary

```
# Part 1: Lysozyme wild-type
fetch 1LYZ, wildtype
hide everything
show cartoon, wildtype
color grey70, wildtype
select trp62, wildtype and resi 62
show sticks, trp62
color yellow, trp62
select around_62, byres (trp62 expand 5) and not trp62
show sticks, around_62
color cyan, around_62
hide sticks, trp62
show sticks, trp62

# Part 2: COX-2 drug resistance
fetch 4PH9, cox2_wt
hide everything, cox2_wt
show cartoon, cox2_wt
color grey70, cox2_wt
select ibu, cox2_wt and resn IBP and chain A
show sticks, ibu
color yellow, ibu
zoom ibu
select near_carboxylate, byres ((ibu and name O1+O2) expand 3.5) and chain A and not resn IBP
show sticks, near_carboxylate
color cyan, near_carboxylate
iterate near_carboxylate and name CA, print(resn, resi)
select arg121, cox2_wt and resi 121 and chain A
show sticks, arg121
color red, arg121
distance d_arg_ibu, (arg121 and name NH1+NH2+NE), (ibu and name O1+O2), cutoff=5
select around_121, byres (arg121 expand 4) and not arg121 and chain A
show sticks, around_121
color lightblue, around_121
color yellow, ibu
color red, arg121
bg_color white
ray 1400, 1000
png mutation_resistance.png
save mutation_session.pse
```

---

## Discussion Questions

**1.** When you hid TRP62 from the Lysozyme structure, how large was the gap it left behind compared to the rest of the binding site? What does this tell you about how important this residue is?

**2.** ARG121 interacts with Ibuprofen through both hydrogen bonds and electrostatic attraction. If this residue were mutated to Alanine, what two types of interaction would be lost simultaneously — and why would this be more damaging than losing just one?

**3.** If you were designing a new COX-2 inhibitor that would remain effective even if ARG121 were mutated, what properties would you want it to have? How might you compensate for the loss of the charged interaction?

**4.** In PyRosetta Project 1, mutations of large amino acids (like Tryptophan or Phenylalanine) to Alanine tend to give the most positive (destabilising) energy scores. Does your visual observation of TRP62 in this project help explain why?

**5.** Drug-resistant bacteria evolve mutations in their target proteins to escape antibiotics. Based on what you have learned, why is it so difficult to design an antibiotic that bacteria cannot develop resistance to?

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Mutation** | A change in one or more amino acids in a protein's sequence, caused by a DNA change |
| **Wild-type** | The natural, unmodified version of a protein |
| **Drug resistance** | When a mutation in the target protein prevents a drug from binding effectively |
| **Alanine scanning** | Mutating each residue to Alanine to identify which residues are most important for function |
| **Indole ring** | The large aromatic ring system of Tryptophan — one reason TRP is so bulky and important in binding sites |
| **Side chain** | The variable chemical group of each amino acid — determines its size, shape, and chemical properties |
| **ARG121ALA** | A notation for a mutation: Arginine at position 121 replaced by Alanine. Would destroy both the hydrogen bond and electrostatic interaction between COX-2 and Ibuprofen's carboxylate group |
| **Void** | Empty space left in a binding pocket when a large residue is mutated to a smaller one |
| **Tightly packed region** | An area of the protein where there is little free space — mutations here have the most impact |
| **Stabilising mutation** | A mutation that lowers the protein's energy score (makes it more stable) |
| **Destabilising mutation** | A mutation that raises the protein's energy score (makes it less stable) |