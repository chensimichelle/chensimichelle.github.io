// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Study resources and materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae of Michelle Chen — Science Educator &amp; College Application Mentor",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-practical",
              title: "practical",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/practical/";
              },
            },{id: "post-2022-nsaa-chemistry-s2",
        
          title: "2022 NSAA Chemistry S2",
        
        description: "Interactive MCQ quiz for NSAA 2022 Chemistry Section 2",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Chem-s2/";
          
        },
      },{id: "post-2022-nsaa-chemistry-s1",
        
          title: "2022 NSAA Chemistry S1",
        
        description: "Interactive MCQ quiz for NSAA 2022 Chemistry Section 1",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Chem-s1/";
          
        },
      },{id: "post-2022-nsaa-biology-s1",
        
          title: "2022 NSAA Biology S1",
        
        description: "Interactive MCQ quiz for NSAA 2022 Biology Section 1",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Bio-s1/";
          
        },
      },{id: "post-2022-nsaa-biology-s2",
        
          title: "2022 NSAA Biology S2",
        
        description: "Interactive MCQ quiz for NSAA 2022 Biology Section 2",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Bio-s2/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-drug-design-research-programme",
          title: 'Drug Design Research Programme',
          description: "A hands-on summer project for high school students — visualise proteins, calculate binding energies, and model antibiotic resistance using real research tools.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "practical-qualitative-analysis",
          title: 'Qualitative Analysis',
          description: "CIE A-Level Chemistry 9701 · Cation, Anion &amp; Gas Tests",
          section: "Practical",handler: () => {
              window.location.href = "/practical/qualitative-analysis/";
            },},{id: "practical-rate-determination-practical",
          title: 'Rate Determination Practical',
          description: "CIE A-Level Chemistry 9701 · Thiosulfate Clock Reaction",
          section: "Practical",handler: () => {
              window.location.href = "/practical/rate-experiment/";
            },},{id: "projects-files-pdb-file",
          title: 'Files — PDB File',
          description: "Understanding Protein Data Bank Files Before You Visualise Them",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FilesPDB/";
            },},{id: "projects-project-1-protein-stability",
          title: 'Project 1 - Protein Stability',
          description: "Drug Design with PyRosetta — Alanine Scanning of Lysozyme",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project1ProteinStability/";
            },},{id: "projects-project-3-scoring-protein-structures",
          title: 'Project 3 - Scoring Protein Structures',
          description: "Drug Design with PyRosetta — Comparing Structure Quality Across PDB Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project2ScoringStructures/";
            },},{id: "projects-project-4-visualizing-drug-binding-sites",
          title: 'Project 4 - Visualizing Drug Binding Sites',
          description: "Drug Design with PyRosetta — Mapping the COX-2 Active Site",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project3BindingSiteVisualization/";
            },},{id: "projects-project-2-protein-ligand-docking",
          title: 'Project 2 - Protein-Ligand Docking',
          description: "Drug Design with PyRosetta — Comparing COX-2 Inhibitors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project4Docking/";
            },},{id: "projects-project-5-alanine-scanning-of-a-binding-site",
          title: 'Project 5 - Alanine Scanning of a Binding Site',
          description: "Drug Design with PyRosetta — Identifying Critical Residues for Drug Binding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project5AlanineScanning/";
            },},{id: "projects-project-6-antibiotic-resistance-simulation",
          title: 'Project 6 - Antibiotic Resistance Simulation',
          description: "Drug Design with PyRosetta — Modelling Resistance Mutations in β-Lactamase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project6AntibioticResistance/";
            },},{id: "projects-pymol-project-a-meet-your-protein",
          title: 'PyMOL Project A — Meet Your Protein',
          description: "PyMOL for Beginners — Loading and Visualising a Real Protein",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pymol1/";
            },},{id: "projects-pymol-project-b-exploring-the-binding-pocket",
          title: 'PyMOL Project B — Exploring the Binding Pocket',
          description: "PyMOL — Finding Where Drugs Attach to Proteins",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pymol2/";
            },},{id: "projects-pymol-project-c-comparing-three-drugs-side-by-side",
          title: 'PyMOL Project C — Comparing Three Drugs Side by Side',
          description: "PyMOL — Aligning and Comparing COX-2 Inhibitors Visually",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pymol3/";
            },},{id: "projects-pymol-project-d-visualising-mutations-and-drug-resistance",
          title: 'PyMOL Project D — Visualising Mutations and Drug Resistance',
          description: "PyMOL — How a Single Amino Acid Change Can Break a Drug",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pymol4/";
            },},{id: "projects-pymol-project-e-visualising-docking-results",
          title: 'PyMOL Project E — Visualising Docking Results',
          description: "PyMOL — Bringing Your PyRosetta Results to Life",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pymol5/";
            },},{id: "projects-installing-pyrosetta-mac",
          title: 'Installing PyRosetta (Mac)',
          description: "A step-by-step guide to setting up PyRosetta for protein modelling on Mac.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/install_pyrosetta_mac/";
            },},{id: "projects-installing-pyrosetta-windows",
          title: 'Installing PyRosetta (Windows)',
          description: "A step-by-step guide to setting up PyRosetta for protein modelling on Windows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/install_pyrosetta_windows/";
            },},{id: "projects-installing-vscode-and-pymol",
          title: 'Installing VSCode and PyMOL',
          description: "A beginner-friendly guide to installing Visual Studio Code and PyMOL on Windows and Mac.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/install_vscode_pymol/";
            },},{id: "projects-getting-started-with-visual-studio-code",
          title: 'Getting Started with Visual Studio Code',
          description: "A beginner&#39;s guide to the VSCode interface, the integrated terminal, and how kernels connect to WSL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vscode_intro/";
            },},{id: "teachings-from-protein-to-drug-target",
          title: 'From Protein to Drug Target',
          description: "A lecture series introducing A-level biology students to computational drug design. Students learn the biological and computational foundations before running PyRosetta simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/lecture1-drug-design/";
            },},{id: "teachings-energy-stability-and-the-rosetta-score",
          title: 'Energy, Stability and the Rosetta Score',
          description: "A lecture series introducing A-level biology students to computational drug design. Students learn the biological and computational foundations before running PyRosetta simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/lecture2-energy-stability/";
            },},{id: "teachings-the-binding-site-and-protein-ligand-docking",
          title: 'The Binding Site and Protein-Ligand Docking',
          description: "A lecture series introducing A-level biology students to computational drug design. Students learn the biological and computational foundations before running PyRosetta simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/lecture3-docking/";
            },},{id: "teachings-mutations-hot-spots-and-alanine-scanning",
          title: 'Mutations, Hot Spots and Alanine Scanning',
          description: "A lecture series introducing A-level biology students to computational drug design. Students learn the biological and computational foundations before running PyRosetta simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/lecture4-mutations/";
            },},{id: "teachings-antibiotic-resistance-and-the-drug-design-cycle",
          title: 'Antibiotic Resistance and the Drug Design Cycle',
          description: "A lecture series introducing A-level biology students to computational drug design. Students learn the biological and computational foundations before running PyRosetta simulations covering protein stability, docking, binding site analysis, and antibiotic resistance.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/lecture5-resistance/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
