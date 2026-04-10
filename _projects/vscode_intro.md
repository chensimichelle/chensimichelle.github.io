---
layout: page
title: Getting Started with Visual Studio Code
description: A beginner's guide to the VSCode interface, the integrated terminal, and how kernels connect to WSL.
img: assets/img/SetupCover.png
importance: 1
category: setup
---

**Estimated time: 20–30 minutes**

This guide introduces Visual Studio Code (VSCode) — the code editor you will use throughout this course. By the end, you will know your way around the interface, understand what a kernel is and why it matters, and be ready to connect VSCode to your Linux environment in the next tutorial.

> **This is the first guide in the series.** After completing it, continue to: [Installing PyRosetta (Windows)](install_pyrosetta_windows).

---

## What you will learn

- How to navigate the five main areas of the VSCode interface
- How to use the Command Palette to run any action without memorising menus
- How to open and control the integrated terminal
- What a kernel is, why multiple Pythons can exist on one machine, and how VSCode reaches the right one through WSL
- What extensions are and which three you need for this course

> **Do I need to install VSCode?** This guide assumes VSCode is already installed on your Windows machine. If you have not installed it yet, go to [https://code.visualstudio.com](https://code.visualstudio.com), download the Windows installer, and run it with all default settings before continuing.

---

## Part 1: The VSCode Interface

When you open VSCode for the first time, the window can look overwhelming. It helps to know that everything on screen belongs to one of five named areas. Once you know the names, the rest of the course will make sense when instructions say things like "look at the Status Bar" or "open the Explorer panel".

{% include figure.liquid path="assets/img/vscode_intro/interface_overview.png" caption="The five main areas of the VSCode interface, labelled." %}

### Area 1: The Activity Bar

The narrow strip of icons running down the far left of the window is the Activity Bar. Each icon opens a different panel in the area next to it. The icons you will use most are:

- **Explorer** (two overlapping pages) — shows your files and folders
- **Extensions** (four squares) — browse and install extensions
- **Remote Explorer** (monitor icon) — manages your WSL connection

### Area 2: The Explorer Panel

Clicking the Explorer icon in the Activity Bar opens the Explorer panel — a file tree showing every file in your current folder. Think of it as Windows Explorer, but built into your editor. When you open a project folder with `code .` from the terminal, its contents appear here automatically.

{% include figure.liquid path="assets/img/vscode_intro/explorer_panel.png" caption="The Explorer panel showing a project folder with a .ipynb notebook file." %}

### Area 3: The Editor

The large central area is the Editor — where you read and write code. You can have multiple files open at once as tabs along the top. When you open a `.ipynb` notebook file, the Editor switches into notebook mode, showing cells instead of raw text.

### Area 4: The Integrated Terminal

The panel at the bottom of the window is the integrated Terminal. It runs a command-line shell directly inside VSCode so you do not need to switch to a separate application. To open it, press:

```
Ctrl + `
```

(That is the backtick key, to the left of the `1` key on most keyboards.)

{% include figure.liquid path="assets/img/vscode_intro/terminal_panel.png" caption="The integrated terminal open at the bottom of the VSCode window." %}

### Area 5: The Status Bar

The thin coloured strip along the very bottom of the window is the Status Bar. It shows information about the current state of VSCode. Two things on the Status Bar matter most for this course:

- **Bottom-left corner** — shows the remote connection status. When you connect VSCode to WSL later, this will show **WSL: Ubuntu** in blue. If it is empty or shows something else, you are not connected to WSL.
- **Top-right corner of a notebook** — shows the currently selected kernel. This will be covered in detail in Part 4.

{% include figure.liquid path="assets/img/vscode_intro/status_bar_wsl.png" caption="The Status Bar bottom-left corner showing 'WSL: Ubuntu', confirming an active WSL connection." %}

---

## Part 2: The Command Palette

The Command Palette is the single most important shortcut in VSCode. It gives you a search box that can run any action in the editor — without hunting through menus.

Open it with:

```
Ctrl + Shift + P
```

Type any part of what you want to do and VSCode will find it. You will use the Command Palette constantly throughout this course. Three commands you will use most often are:

| What to type | What it does |
|---|---|
| `WSL: Connect to WSL` | Connects VSCode to your Ubuntu environment |
| `Create: New Jupyter Notebook` | Creates a new notebook file |
| `Developer: Reload Window` | Restarts VSCode in place — fixes most unexpected errors |

{% include figure.liquid path="assets/img/vscode_intro/command_palette.png" caption="The Command Palette open, with 'WSL: Connect to WSL' typed in the search box." %}

> **Tip:** You do not need to type the full command. Typing `connect wsl` is enough for VSCode to find `WSL: Connect to WSL`.

---

## Part 3: The Integrated Terminal

The integrated terminal is where you will install packages, activate environments, and launch VSCode from a specific folder. Before you use it, you need to understand one important thing: not all terminals are the same.

### Recognising which shell is running

When you open the terminal, look at the prompt — the text that appears before your cursor:

| What you see | Shell | Where it runs |
|---|---|---|
| `PS C:\Users\yourname>` | PowerShell | Windows |
| `C:\Users\yourname>` | Command Prompt | Windows |
| `yourname@machine:~$` | Bash (Ubuntu) | WSL / Linux |

For this course, you almost always need the **Ubuntu (Bash)** shell. Commands like `conda`, `pip`, and `python` behave differently — or fail silently — when run in PowerShell instead of Ubuntu.

{% include figure.liquid path="assets/img/vscode_intro/terminal_shells.png" %}

### Opening a specific shell

If the terminal opens in PowerShell by default, you can switch:

1. Click the **`+` dropdown arrow** next to the `+` button in the terminal panel's top-right corner
2. Select **Ubuntu (WSL)** from the list

> **Note:** If Ubuntu does not appear in the dropdown, the WSL extension is not installed yet. This will be covered in Part 5.

---

## Part 4: What is a Kernel?

This is the most important concept to understand before working with Jupyter notebooks in VSCode. Most errors students encounter in this course come from having the wrong kernel selected.

### The analogy

Think of VSCode as a **kitchen**. A Python installation is a **chef**. The kernel is the answer to the question: **which chef is on duty right now?**

You can have many chefs available — but only one is cooking at any given time. If you ask for a dish that only Chef A knows how to make, but Chef B is on duty, you will get an error. Not because the dish is impossible, but because the wrong chef was called.

### Why multiple Pythons exist on one machine

This surprises most beginners: a single Windows computer running WSL can easily have four or more completely separate Python installations, each unaware of the others:

- **Windows Python** — installed directly on Windows via python.org
- **WSL system Python** — the default Python that comes with Ubuntu (`/usr/bin/python3`)
- **Miniconda base Python** — installed by Miniconda inside WSL
- **Conda environment Python** — a separate Python inside a named environment, e.g. `pyrosetta`

Each of these has its own set of installed packages. Installing PyRosetta into one does **not** make it available in any of the others. They are completely isolated.

### The chain

When you run a notebook cell in VSCode, your code travels through a chain of connections before it reaches the Python that actually executes it. For this course, the full chain looks like this:

```
VSCode (Windows)
  └── Remote WSL Extension
        └── Ubuntu (WSL)
              └── conda environment: pyrosetta
                    └── Python 3.8
                          └── PyRosetta, pandas, matplotlib
```

Each link in the chain depends on the one above it:

| Link | What it does | What breaks if it is missing |
|---|---|---|
| **VSCode** | The editor — sends code to the kernel | Nothing runs at all |
| **Remote WSL Extension** | Bridges Windows and Linux | VSCode cannot see anything inside WSL |
| **Ubuntu (WSL)** | The Linux environment where PyRosetta lives | The conda environment is unreachable |
| **conda environment: pyrosetta** | An isolated Python environment with all packages installed | Python runs but `import pyrosetta` fails |
| **Python 3.8 + packages** | The actual interpreter that executes your code | Specific imports fail |


### Why WSL is not optional

PyRosetta is compiled for Linux. It does not exist on the Windows side of your machine at all — not even if you install it with `pip` in a Windows terminal. The kernel must travel through the Remote WSL Extension into Ubuntu to find it. This is why the Status Bar must show **WSL: Ubuntu** before you select a kernel: without that connection, VSCode cannot even see the conda environment, let alone use it.

### What the wrong kernel looks like

If you select a kernel that is not the PyRosetta conda environment — for example, the Windows Python or the WSL system Python — and then run a notebook cell, you will see:

```
ModuleNotFoundError: No module named 'pyrosetta'
```

In terms of the kitchen analogy: VSCode called a chef who has never heard of PyRosetta. The fix is never to reinstall PyRosetta — it is to go back and select the correct kernel.

### How to confirm you have the right kernel

Once a kernel is selected, paste this into any notebook cell and press **Shift+Enter**:

```python
import sys
print(sys.executable)
```

| Output | Meaning |
|---|---|
| `/home/yourname/miniconda3/envs/pyrosetta/bin/python` | ✅ Correct — this is the PyRosetta conda environment |
| `/usr/bin/python3` | ❌ Wrong — this is the WSL system Python |
| `C:\Users\yourname\...` | ❌ Wrong — this is Windows Python |

{% include figure.liquid path="assets/img/vscode_intro/kernel_selector.png" caption="The kernel selector in the top-right corner of a notebook, showing 'PyRosetta' selected." %}

---

## Part 5: Extensions

An extension is a plugin that adds a new capability to VSCode. Without extensions, VSCode is a basic text editor. Extensions are what turn it into a full scientific computing environment.

Open the Extensions panel with:

```
Ctrl + Shift + X
```

Search for each extension by name and click **Install**. Three extensions are required for this course:

| Extension | What it does | Which link it enables |
|---|---|---|
| **WSL** | Connects VSCode to your Ubuntu environment | VSCode → Remote WSL Extension |
| **Python** | Adds Python language support, linting, and interpreter selection | Recognising conda environments as kernels |
| **Jupyter** | Allows `.ipynb` notebook files to run inside VSCode | Running notebook cells against a kernel |

{% include figure.liquid path="assets/img/vscode_intro/extensions_panel.png" caption="The Extensions panel with the WSL extension installed. A blue 'Disable' button (instead of 'Install') confirms it is active." %}

> **How to confirm an extension is installed:** Search for it in the Extensions panel. If the button next to its name says **Disable** or **Uninstall**, it is installed and active. If it says **Install**, it is not installed yet.

---

## Troubleshooting common problems

| Problem | What to try |
|---|---|
| Terminal opens PowerShell instead of Ubuntu | Click the `+` dropdown in the terminal panel and select **Ubuntu (WSL)** |
| `WSL: Ubuntu` not showing in the Status Bar | Press **Ctrl+Shift+P**, type `WSL: Connect to WSL`, press Enter |
| Command Palette does not open | Click anywhere inside the VSCode window first to give it focus, then try **Ctrl+Shift+P** again |
| Ubuntu does not appear in the terminal shell list | The WSL extension is not installed. Go to Part 5 and install it. |
| Kernel selector shows no Python environments | The Python extension is not installed, or VSCode is not connected to WSL. Check both. |
| `No module named 'pyrosetta'` | Wrong kernel selected. See Part 4 — select the PyRosetta conda environment kernel. |

If you encounter an error not listed here, copy the error message and send it to your mentor at [chensimichelle@gmail.com](mailto:chensimichelle@gmail.com).

---

You are now ready to install PyRosetta. Continue to: [Installing PyRosetta (Windows)](install_pyrosetta_windows).
