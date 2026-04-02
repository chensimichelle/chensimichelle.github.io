---
layout: page
title: Installing PyRosetta (Windows)
description: A step-by-step guide to setting up PyRosetta for protein modelling on Windows.
img: assets/img/SetupCover.png
importance: 2
category: setup
---

**Estimated setup time: 30–60 minutes**

This guide walks you through setting up everything you need to run computational protein science experiments on a Windows computer. By the end, you will be able to mutate amino acids in a real protein and measure how those changes affect stability — a technique used in real drug discovery research.

> **Do I need to install Python?** No. Miniconda (installed in Part 2) comes with its own Python. You do not need to install Python separately. If you already installed VSCode in the previous guide, you can skip Part 4 — just install the extra extensions listed there.

---

## What you will learn

- How to set up a professional science computing environment
- How proteins are modelled using computational tools
- How mutations affect protein stability — key to drug resistance
- How to visualise and interpret scientific results

## Software you will install

| Software | What it does | Why we need it |
|---|---|---|
| WSL2 (Ubuntu) | Runs Linux inside Windows | PyRosetta requires a Linux environment |
| Miniconda | Manages Python environments | Keeps scientific packages organised |
| PyRosetta | Protein modelling engine | Core tool for all experiments |
| VSCode | Code editor | Write and run Python notebooks |
| Jupyter Notebook | Interactive Python environment | Run experiments step by step |

---

## Part 1: Install WSL2 (Windows Subsystem for Linux)

WSL2 lets you run Linux commands directly inside Windows. Think of it as a Linux computer living inside your Windows computer.

> **Requirement:** WSL2 requires Windows 10 (version 2004 or later) or Windows 11. To check your version: press **Windows key + R**, type `winver`, and press Enter.

### Step 1: Open PowerShell as Administrator

1. Click the Start menu
2. Type "PowerShell"
3. Right-click on **Windows PowerShell**
4. Select **Run as administrator**
5. Click **Yes** when prompted

### Step 2: Install WSL2

In the PowerShell window, type the following and press Enter:

```
wsl --install
```

> **Note:** This will automatically install WSL2 and Ubuntu Linux. The download is about 500MB — make sure you have internet access.

### Step 3: Restart your computer

After the installation finishes, restart your computer. This is required to complete the WSL2 setup.

### Step 4: Set up Ubuntu

After restarting, Ubuntu will open automatically and ask you to:

- Create a username (use lowercase letters only, e.g. `student`)
- Create a password (you will not see it as you type — this is normal)
- Confirm your password

> **Important:** Remember your username and password — you will need them whenever WSL asks.

### Step 5: Verify installation

In the Ubuntu terminal, type:

```bash
uname -a
```

You should see a line containing "Linux". If you do, WSL2 is working correctly.

---

## Part 2: Install Miniconda

Miniconda manages Python and scientific packages. It keeps everything organised so different projects do not interfere with each other.

### Step 1: Download Miniconda

In your Ubuntu (WSL) terminal, run these commands one by one:

```bash
# Download the Miniconda installer
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

### Step 2: Run the installer

```bash
# Run the installer
bash Miniconda3-latest-Linux-x86_64.sh
```

Follow the prompts:
- Press **ENTER** to read the license
- Hold **SPACE** to scroll through it quickly
- Type `yes` and press Enter to accept
- Press **ENTER** to confirm the install location
- Type `yes` when asked to initialize Miniconda

### Step 3: Activate Miniconda

```bash
# Reload your terminal settings
source ~/.bashrc
```

You should now see `(base)` at the start of your terminal line. This means Miniconda is active.

---

## Part 3: Install PyRosetta

PyRosetta is the main protein modelling tool we will use. It is free for academic and educational use.

### Step 1: Create a PyRosetta environment

We will create a separate environment just for PyRosetta to keep it isolated from other software.

```bash
# Create a new environment with Python 3.8
conda create -n pyrosetta python=3.8 -y

# Activate the new environment
conda activate pyrosetta
```

You should now see `(pyrosetta)` at the start of your terminal line.

### Step 2: Install PyRosetta

```bash
# Install PyRosetta from the PyRosetta channel
conda install -c https://levinthal:paradox@conda.graylab.jhu.edu pyrosetta -y
```

> **Note:** This download is large (about 1–2 GB). It may take 10–30 minutes depending on your internet speed. Be patient and do not close the terminal.

### Step 3: Verify PyRosetta

```bash
python -c "import pyrosetta; pyrosetta.init(); print('PyRosetta works')"
```

If you see `PyRosetta works` printed, the installation was successful.

### Step 4: Install additional packages

```bash
# Install scientific Python packages
pip install pandas matplotlib notebook ipywidgets

# Install PyMOL for 3D visualisation
conda install -c conda-forge pymol-open-source -y

# Register PyRosetta as a Jupyter kernel
python -m ipykernel install --user --name pyrosetta --display-name "PyRosetta"
```

---

## Part 4: Set up Visual Studio Code (VSCode)

> **Already installed VSCode?** If you followed the previous guide and installed VSCode, skip Step 1. Just open VSCode and install the extensions in Step 2, then connect to WSL in Step 3.

### Step 1: Download VSCode

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click the blue **Download for Windows** button
3. Run the downloaded installer
4. Accept all default settings and click **Next / Install**

### Step 2: Install required extensions

Open VSCode, then press **Ctrl+Shift+X** and search for each of these:

| Extension name | What it does |
|---|---|
| WSL | Connects VSCode to your WSL/Ubuntu environment |
| Python | Enables Python language support |
| Jupyter | Allows running Jupyter notebooks inside VSCode |

### Step 3: Connect VSCode to WSL

1. Press **Ctrl+Shift+P** to open the command palette
2. Type "WSL: Connect to WSL" and press Enter
3. The bottom-left corner should now show **WSL: Ubuntu** in blue

> **Note:** Always check that the bottom-left corner says "WSL: Ubuntu" before starting your experiments.

---

## Part 5: Set up your project folder

### Step 1: Create the project folder

In your Ubuntu terminal (make sure you see `(pyrosetta)` at the start), run:

```bash
# Activate your PyRosetta environment
conda activate pyrosetta

# Create a folder for the project (on your Windows D: drive)
mkdir -p /mnt/d/WORK/drug_design_project

# Navigate to the folder
cd /mnt/d/WORK/drug_design_project

# Open VSCode in this folder
code .
```

> **Note:** `/mnt/d/` refers to your Windows D: drive. If you want to save it on C: drive instead, use `/mnt/c/`.

### Step 2: Create your notebook

1. In VSCode, press **Ctrl+Shift+P**
2. Type "Create: New Jupyter Notebook" and press Enter
3. Press **Ctrl+Shift+S** to save the file
4. Name it `project1_stability.ipynb` and click Save

### Step 3: Select the PyRosetta kernel

1. Click **Select Kernel** in the top right corner of VSCode
2. Choose **Jupyter Kernel**
3. Select **PyRosetta** from the list

> **Troubleshooting:** If PyRosetta does not appear in the list, press **Ctrl+Shift+P** and type "Developer: Reload Window", then try again.

---

## Troubleshooting common problems

| Problem | What to try |
|---|---|
| `conda: command not found` | Miniconda is not activated. Run: `source ~/.bashrc` |
| `No module named pyrosetta` | You are in the wrong environment. Run: `conda activate pyrosetta` |
| `PyRosetta kernel not found in VSCode` | In your WSL terminal, run: `python -m ipykernel install --user --name pyrosetta --display-name "PyRosetta"` — then in VSCode press **Ctrl+Shift+P** and type "Developer: Reload Window" |
| `WSL: Ubuntu` not showing in VSCode | Press **Ctrl+Shift+P**, type "WSL: Connect to WSL", press Enter |
| Code cell shows `[*]` for a very long time | Some cells (especially Cell 2 and Cell 5) take 1–5 minutes. This is normal — wait for `[*]` to change to a number before continuing |

If you encounter an error not listed here, copy the error message and send it to your mentor at [chensimichelle@gmail.com](mailto:chensimichelle@gmail.com).
