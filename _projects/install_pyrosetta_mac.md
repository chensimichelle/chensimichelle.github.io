---
layout: page
title: Installing PyRosetta (Mac)
description: A step-by-step guide to setting up PyRosetta for protein modelling on Mac.
img: assets/img/SetupCover.png
importance: 3
category: setup
---

**Estimated setup time: 30–60 minutes**

This guide walks you through installing everything you need to run computational protein science experiments on a Mac. Unlike Windows, Mac does not need WSL — you can work directly in the Mac Terminal.

> **Do I need to install Python?** No. Miniconda (installed in Part 2) comes with its own Python. You do not need to install Python separately. If you already installed VSCode in the previous guide, you can skip Part 4 — just install the extra extensions listed there.

> **Not sure which chip your Mac has?** Click the Apple menu () in the top-left corner, then click "About This Mac". Look for "Chip" or "Processor".

| Mac type | What to expect |
|---|---|
| Intel Mac (2019 or older) | Standard installation — follow all steps normally |
| Apple Silicon Mac (M1/M2/M3/M4) | Extra steps required — watch for the warning boxes carefully |

---

## What you will learn

- How to set up a professional science computing environment on Mac
- How proteins are modelled using computational tools
- How mutations affect protein stability — key to drug resistance
- How to visualise and interpret scientific results

## Software you will install

| Software | What it does | Why we need it |
|---|---|---|
| Miniconda | Manages Python environments | Keeps scientific packages organised |
| PyRosetta | Protein modelling engine | Core tool for all experiments |
| VSCode | Code editor | Write and run Python notebooks |
| Jupyter Notebook | Interactive Python environment | Run experiments step by step |

---

## Part 1: Open the Terminal

Unlike Windows, Mac does not need WSL. You already have a built-in Linux-like terminal. All commands in this guide are typed into the Mac Terminal.

### How to open Terminal

1. Press **Command + Space** to open Spotlight search
2. Type "Terminal"
3. Press **Enter**

You should see a window with a command prompt that looks something like: `yourname@MacBook ~ %`

> **Note:** Keep the Terminal open throughout this entire guide. All commands below are typed here.

### Check your Mac chip (important)

Run this command to confirm your chip type:

```bash
uname -m
```

- If it prints `x86_64` — you have an **Intel Mac**. Follow all instructions normally.
- If it prints `arm64` — you have an **Apple Silicon Mac** (M1/M2/M3/M4). Watch for the Apple Silicon warning boxes carefully.

---

## Part 2: Install Miniconda

Miniconda manages Python and scientific packages. It keeps everything organised so different projects do not interfere with each other.

### Intel Mac: Install Miniconda

```bash
# Download Miniconda for Intel Mac
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh

# Run the installer
bash Miniconda3-latest-MacOSX-x86_64.sh
```

### Apple Silicon Mac (M1/M2/M3/M4): Install x86 Miniconda

> **Apple Silicon warning:** PyRosetta does not yet run natively on Apple Silicon. You must install the x86_64 (Intel) version of Miniconda so Mac can emulate it using its built-in Rosetta 2. You must download the x86_64 version specifically — **NOT** the Apple Silicon version.

```bash
# Download the x86_64 version (NOT the Apple Silicon version)
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh

# Run installer using x86 emulation
arch -x86_64 bash Miniconda3-latest-MacOSX-x86_64.sh
```

### Follow the installer prompts (all Mac users)

- Press **ENTER** to read the license agreement
- Hold **SPACE** to scroll through it quickly
- Type `yes` and press Enter to accept the license
- Press **ENTER** to confirm the default install location
- Type `yes` when asked to initialize Miniconda

### Activate Miniconda

```bash
# Reload your terminal settings
source ~/.zshrc

# OR if that does not work, try:
source ~/.bash_profile
```

You should now see `(base)` at the start of your terminal prompt. This means Miniconda is active.

### Apple Silicon: Verify x86 mode

```bash
file $(which python)
# Should show: Mach-O 64-bit executable x86_64
# If it shows arm64, the wrong version was installed
```

---

## Part 3: Install PyRosetta

PyRosetta is the main protein modelling tool we will use. It is free for academic and educational use.

### Step 1: Create a PyRosetta environment

```bash
# Intel Mac:
conda create -n pyrosetta python=3.8 -y

# Apple Silicon Mac — must force x86_64 architecture:
CONDA_SUBDIR=osx-64 conda create -n pyrosetta python=3.8 -y
```

Then activate the environment:

```bash
conda activate pyrosetta
```

You should now see `(pyrosetta)` at the start of your terminal prompt.

### Step 2: Apple Silicon — lock environment to x86

> **Apple Silicon users only:** Run this **before** installing PyRosetta to ensure all packages use the x86 version.

```bash
conda config --env --set subdir osx-64
```

### Step 3: Install PyRosetta

```bash
# Install PyRosetta (works for both Intel and Apple Silicon)
conda install -c https://levinthal:paradox@conda.graylab.jhu.edu pyrosetta -y
```

> **Note:** This download is large (about 1–2 GB). It may take 10–30 minutes. Be patient and do not close the terminal.

### Step 4: Verify PyRosetta

```bash
python -c "import pyrosetta; pyrosetta.init(); print('PyRosetta works')"
```

If you see `PyRosetta works` printed, the installation was successful.

> **Apple Silicon:** The very first time you run PyRosetta it may take 1–2 minutes to load. This is normal — it is being translated from x86 to ARM. Subsequent runs will be much faster.

### Step 5: Install additional packages

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

> **Already installed VSCode?** If you followed the previous guide and installed VSCode, skip Step 1. Just open VSCode and install the extensions in Step 2.

### Step 1: Download VSCode

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click the **Download Mac Universal** button
3. Open the downloaded `.zip` file — it will extract `VSCode.app`
4. Drag `VSCode.app` to your **Applications** folder
5. Open VSCode from your Applications folder or Launchpad

> **Mac security:** If Mac says "VSCode cannot be opened because it is from an unidentified developer", go to **System Settings → Privacy & Security** and click **Open Anyway**.

### Step 2: Install required extensions

In VSCode, press **Command+Shift+X** to open Extensions and search for each of these:

| Extension name | What it does |
|---|---|
| Python | Enables Python language support and autocomplete |
| Jupyter | Allows running Jupyter notebooks inside VSCode |

> **Note:** Mac does not need the WSL extension — that is Windows only.

### Step 3: Point VSCode to your Conda Python

1. Press **Command+Shift+P** to open the command palette
2. Type "Python: Select Interpreter" and press Enter
3. Look for the option that contains `pyrosetta` in the path, e.g. `~/miniconda3/envs/pyrosetta/bin/python`
4. Select it

---

## Part 5: Set up your project folder

### Step 1: Create the project folder

In Terminal (make sure you see `(pyrosetta)` at the start), run:

```bash
# Activate your PyRosetta environment
conda activate pyrosetta

# Create a folder for the project in your home directory
mkdir -p ~/drug_design_project

# Navigate to the folder
cd ~/drug_design_project

# Open VSCode in this folder
code .
```

> **Troubleshooting:** If `code .` does not work, open VSCode manually, then go to **File → Open Folder** and select the `drug_design_project` folder.

### Step 2: Create your notebook

1. In VSCode, press **Command+Shift+P**
2. Type "Create: New Jupyter Notebook" and press Enter
3. Press **Command+Shift+S** to save the file
4. Name it `project1_stability.ipynb` and click Save

### Step 3: Select the PyRosetta kernel

1. Click **Select Kernel** in the top right corner of the notebook
2. Choose **Jupyter Kernel**
3. Select **PyRosetta** from the list

> **Troubleshooting:** If PyRosetta does not appear in the list, open Terminal and run: `python -m ipykernel install --user --name pyrosetta --display-name "PyRosetta"` — then press **Command+Shift+P** in VSCode and type "Developer: Reload Window".

---

## Troubleshooting common problems

| Problem | What to try |
|---|---|
| `conda: command not found` | Miniconda is not activated. Run: `source ~/.zshrc` |
| `No module named pyrosetta` | You are in the wrong environment. Run: `conda activate pyrosetta` |
| `PyRosetta kernel not found in VSCode` | In Terminal run: `python -m ipykernel install --user --name pyrosetta --display-name "PyRosetta"` — then in VSCode press **Command+Shift+P** and type "Developer: Reload Window" |
| `code .` command not found in Terminal | Open VSCode → press **Command+Shift+P** → type "Shell Command: Install code command in PATH" → press Enter, then try again |
| Apple Silicon: "Bad CPU type in executable" | PyRosetta is running in ARM mode instead of x86. Re-create the environment: `conda deactivate` → `conda env remove -n pyrosetta` → `CONDA_SUBDIR=osx-64 conda create -n pyrosetta python=3.8 -y` → `conda activate pyrosetta` → `conda config --env --set subdir osx-64` — then re-run Part 3 Step 3 |
| Code cell shows `[*]` for a very long time | Some cells take 1–5 minutes, especially Cell 2 (downloading the protein) and Cell 5 (running multiple mutations). Apple Silicon users may also experience a slow first load. This is normal — wait for `[*]` to change to a number |

If you encounter an error not listed here, copy the error message and send it to your mentor at [chensimichelle@gmail.com](mailto:chensimichelle@gmail.com).
