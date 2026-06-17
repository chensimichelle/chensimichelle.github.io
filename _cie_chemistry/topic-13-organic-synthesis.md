---
layout: page
title: "Topic 13: Introduction to Organic Chemistry"
permalink: /cie-chemistry/topic-13-organic-synthesis/
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;
    --topic-color: #5a3080;
    --topic-light: #f0eaf8;
    --topic-mid: #c8a8e8;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #7a7a7a;
    --border: #e8e8e8;
    --bg: #ffffff;
    --bg-soft: #fafafa;
    --green: #1a7a3a;
    --green-light: #f0faf3;
    --red: #c0392b;
    --red-light: #fdf3f3;
    --reagent: #c0392b;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .tab-nav { position: sticky; top: 0; z-index: 100; background: #fdf0fd; border-bottom: 2px solid #f0d0f0; box-shadow: 0 2px 12px rgba(204,0,204,0.06); overflow-x: auto; white-space: nowrap; scrollbar-width: none; }
  .tab-nav::-webkit-scrollbar { display: none; }
  .tab-nav-inner { display: inline-flex; gap: 0; padding: 0 1.5rem; min-width: 100%; }
  .tab-btn { font-family: 'DM Sans', sans-serif; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); background: none; border: none; border-bottom: 3px solid transparent; padding: 0.9rem 1.1rem; cursor: pointer; transition: color 0.2s, border-color 0.2s; white-space: nowrap; margin-bottom: -2px; }
  .tab-btn:hover { color: var(--blog-accent); }
  .tab-btn.active { color: var(--blog-accent); border-bottom-color: var(--blog-accent); }
  .tab-panel { display: none; padding: 2rem 1.5rem 3rem; max-width: 860px; margin: 0 auto; }
  .tab-panel.active { display: block; animation: fadeIn 0.25s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

  .section-title { font-family: 'DM Serif Display', serif; font-size: 1.65rem; font-weight: 400; color: var(--text-primary); margin-bottom: 0.35rem; }
  .divider { width: 3rem; height: 3px; background: var(--blog-accent); border-radius: 2px; margin: 0.6rem 0 2rem; }
  .breadcrumb { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1.25rem; }
  .breadcrumb a { color: var(--topic-color); text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }

  /* Hero */
  .topic-hero { background: var(--topic-light); border: 1px solid var(--topic-mid); border-top: 4px solid var(--topic-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; }
  .topic-hero-eyebrow { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--topic-color); margin-bottom: 0.3rem; }
  .topic-hero-title { font-family: 'DM Serif Display', serif; font-size: 1.6rem; font-weight: 400; color: var(--text-primary); line-height: 1.2; margin-bottom: 0.5rem; }
  .topic-hero-sub { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.1rem; }
  .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.65rem; }
  .stat-card { background: white; border: 1px solid var(--topic-mid); border-radius: 8px; padding: 0.7rem 0.9rem; text-align: center; }
  .stat-num { font-family: 'DM Serif Display', serif; font-size: 1.35rem; color: var(--topic-color); display: block; line-height: 1; }
  .stat-label { font-size: 0.65rem; color: var(--text-muted); line-height: 1.35; margin-top: 0.15rem; }

  /* Info / warn boxes */
  .info-box { background: var(--topic-light); border-left: 4px solid var(--topic-color); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
  .info-box strong { color: var(--text-primary); }
  .warn-box { background: #fff8e6; border-left: 4px solid #e6a000; border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
  .warn-box strong { color: #7a4a00; }

  /* Definition cards */
  .def-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; margin-bottom: 2rem; }
  .def-card { background: white; border: 1px solid var(--border); border-left: 3px solid var(--topic-color); border-radius: 0 8px 8px 0; padding: 0.8rem 1rem; }
  .def-term { font-weight: 700; font-size: 0.85rem; color: var(--topic-color); margin-bottom: 0.25rem; }
  .def-body { font-size: 0.79rem; color: var(--text-secondary); line-height: 1.55; }
  .def-eg { font-size: 0.74rem; color: var(--text-muted); margin-top: 0.3rem; font-style: italic; }

  /* Reaction type section */
  .rxn-section { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; }
  .rxn-header { background: var(--topic-color); color: white; padding: 0.75rem 1.25rem; display: flex; align-items: baseline; gap: 0.75rem; }
  .rxn-title { font-family: 'DM Serif Display', serif; font-size: 1.05rem; font-weight: 400; }
  .rxn-subtitle { font-size: 0.75rem; opacity: 0.8; }
  .rxn-def { background: var(--topic-light); padding: 0.65rem 1.25rem; font-size: 0.81rem; color: var(--text-secondary); border-bottom: 1px solid var(--topic-mid); line-height: 1.5; }
  .rxn-body { padding: 1rem 1.25rem; background: white; }

  /* Equation rows */
  .eq-block { margin-bottom: 1.1rem; }
  .eq-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem; }
  .eq-sublabel { font-size: 0.75rem; font-weight: 600; color: var(--topic-color); margin-bottom: 0.4rem; margin-top: 0.6rem; }
  .eq-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0.4rem 0.6rem; font-size: 0.83rem; color: var(--text-primary); background: var(--bg-soft); border: 1px solid var(--border); border-radius: 7px; padding: 0.55rem 0.9rem; margin-bottom: 0.4rem; font-family: 'Georgia', serif; line-height: 1.6; }
  .eq-arrow { color: var(--text-muted); font-size: 1rem; flex-shrink: 0; }
  .eq-reagent { color: var(--reagent); font-weight: 600; font-size: 0.78rem; display: block; text-align: center; min-width: 80px; }
  .eq-cond { display: inline-flex; flex-direction: column; align-items: center; gap: 1px; }
  .eq-chem { font-family: 'Georgia', serif; }
  sub, sup { font-size: 0.7em; }

  /* Reagent summary table */
  .reg-table-wrap { overflow-x: auto; margin-bottom: 2rem; }
  .reg-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
  .reg-table th { padding: 0.6rem 0.85rem; text-align: left; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; border-bottom: 2px solid var(--border); background: var(--topic-light); color: var(--topic-color); }
  .reg-table td { padding: 0.6rem 0.85rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; line-height: 1.5; }
  .reg-table tr:nth-child(even) td { background: var(--bg-soft); }
  .reg-table tr:last-child td { border-bottom: none; }
  .reg-table .hl { font-weight: 600; color: var(--text-primary); }

  /* Do/Don't */
  .do-dont { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
  .do-card { background: var(--green-light); border-top: 3px solid var(--green); border-radius: 10px; padding: 1.1rem; }
  .dont-card { background: var(--red-light); border-top: 3px solid var(--red); border-radius: 10px; padding: 1.1rem; }
  .do-card-title { color: var(--green); font-weight: 700; font-size: 0.84rem; margin-bottom: 0.65rem; }
  .dont-card-title { color: var(--red); font-weight: 700; font-size: 0.84rem; margin-bottom: 0.65rem; }
  .ddlist { list-style: none; }
  .ddlist li { font-size: 0.79rem; color: var(--text-secondary); padding: 0.28rem 0 0.28rem 1.15rem; position: relative; line-height: 1.45; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .ddlist li:last-child { border-bottom: none; }
  .do-card .ddlist li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
  .dont-card .ddlist li::before { content: '✗'; position: absolute; left: 0; color: var(--red); font-weight: 700; }

  /* Checklist */
  .outcome-list { list-style: none; margin-bottom: 2rem; }
  .outcome-list li { display: grid; grid-template-columns: 18px 1fr; gap: 0.65rem; align-items: start; padding: 0.45rem 0; border-bottom: 1px solid var(--border); font-size: 0.81rem; color: var(--text-secondary); line-height: 1.5; }
  .outcome-list li:last-child { border-bottom: none; }
  .outcome-check { width: 16px; height: 16px; border: 2px solid var(--topic-color); border-radius: 3px; margin-top: 2px; flex-shrink: 0; }

  /* Nav */
  .topic-nav { display: flex; justify-content: space-between; align-items: center; padding-top: 2rem; margin-top: 1rem; border-top: 1px solid var(--border); }
  .topic-nav a { font-size: 0.8rem; color: var(--topic-color); text-decoration: none; font-weight: 600; padding: 0.45rem 0.9rem; border: 1px solid var(--topic-mid); border-radius: 6px; background: var(--topic-light); }
  .topic-nav a:hover { background: var(--topic-mid); }

  @media (max-width: 680px) {
    .stat-row, .def-grid, .do-dont { grid-template-columns: 1fr; }
    .eq-row { font-size: 0.76rem; }
  }
</style>

<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview',this)">Overview</button>
    <button class="tab-btn" onclick="showTab('terms',this)">Key Terms</button>
    <button class="tab-btn" onclick="showTab('reactions',this)">Reaction Types</button>
    <button class="tab-btn" onclick="showTab('reagents',this)">Reagent Summary</button>
    <button class="tab-btn" onclick="showTab('exam',this)">Exam Technique</button>
  </div>
</nav>

<!-- ══════════════ TAB 1: OVERVIEW ══════════════ -->
<div id="tab-overview" class="tab-panel active" style="display:block">
  <div class="breadcrumb"><a href="/cie-chemistry/">CIE Chemistry (9701)</a> › Topic 13</div>
  <p style="font-size:0.82rem;color:var(--text-muted);">AS Level · Organic Chemistry · CIE 9701 · 2025–2027 syllabus</p>
  <h2 class="section-title">Topic 13: Introduction to Organic Chemistry</h2>
  <div class="divider"></div>

  <div class="topic-hero">
    <div class="topic-hero-eyebrow">AS Level · Organic Chemistry · Topic 13 of 22</div>
    <div class="topic-hero-title">Organic Reaction Types &amp; Mechanisms</div>
    <p class="topic-hero-sub">The foundation of all organic chemistry — understanding how and why reactions happen. Covers the six core reaction types (substitution, addition, elimination, condensation, hydrolysis, oxidation/reduction), bond fission mechanisms, and the key reagents for each. Tested heavily in <strong>Paper 1 (MCQ)</strong> and <strong>Paper 2 (Structured)</strong>.</p>
    <div class="stat-row">
      <div class="stat-card"><span class="stat-num">6</span><span class="stat-label">Reaction types</span></div>
      <div class="stat-card"><span class="stat-num">2</span><span class="stat-label">Fission types</span></div>
      <div class="stat-card"><span class="stat-num">P1+P2</span><span class="stat-label">Papers assessed</span></div>
      <div class="stat-card"><span class="stat-num">High</span><span class="stat-label">Exam frequency</span></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">What this topic covers</h3>
  <div class="divider" style="margin-bottom:1rem;"></div>
  <div class="def-grid">
    <div class="def-card"><div class="def-term">Bond fission</div><div class="def-body">Homolytic (equal split → radicals) and heterolytic (unequal split → ions). Determines the reaction mechanism.</div></div>
    <div class="def-card"><div class="def-term">Reagent types</div><div class="def-body">Free radicals, nucleophiles and electrophiles — what they are, how they attack, and typical examples of each.</div></div>
    <div class="def-card"><div class="def-term">Substitution</div><div class="def-body">Free radical substitution (alkanes + Cl₂/UV) and nucleophilic substitution (halogenoalkanes + OH⁻, NH₃, CN⁻).</div></div>
    <div class="def-card"><div class="def-term">Addition</div><div class="def-body">Electrophilic addition to alkenes (Br₂, HBr, H₂/Ni, H₂O/H₃PO₄) and nucleophilic addition to carbonyls (HCN/KCN).</div></div>
    <div class="def-card"><div class="def-term">Elimination &amp; Condensation</div><div class="def-body">Elimination (OH⁻/alc, heat) forms double bonds. Condensation (esterification) joins two molecules with loss of H₂O.</div></div>
    <div class="def-card"><div class="def-term">Oxidation &amp; Reduction</div><div class="def-body">Oxidation: add O or remove H. Reduction: add H or remove O. Key oxidising agents: K₂Cr₂O₇/H⁺, KMnO₄/H⁺; reducing agent: NaBH₄, LiAlH₄.</div></div>
  </div>

  <div class="info-box"><strong>Why this topic matters:</strong> Every subsequent organic topic (Topics 14–21) builds directly on these reaction types. If you can classify a reaction and name its reagents and conditions, you can answer most organic questions. Learn the six types and their conditions cold.</div>
</div>

<!-- ══════════════ TAB 2: KEY TERMS ══════════════ -->
<div id="tab-terms" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Definitions you must be able to reproduce exactly</p>
  <h2 class="section-title">Key Terms</h2>
  <div class="divider"></div>

  <div class="def-grid" style="margin-bottom:1.5rem;">
    <div class="def-card">
      <div class="def-term">Free radical</div>
      <div class="def-body">A species with an unpaired electron. Highly reactive.</div>
      <div class="def-eg">e.g. Cl• &nbsp;·&nbsp; CH₃•</div>
    </div>
    <div class="def-card">
      <div class="def-term">Nucleophile</div>
      <div class="def-body">A lone pair donor — attacks electron-deficient (δ+) centres.</div>
      <div class="def-eg">e.g. OH⁻, NH₃, CN⁻, H₂O</div>
    </div>
    <div class="def-card">
      <div class="def-term">Electrophile</div>
      <div class="def-body">A lone pair acceptor — attacks electron-rich centres.</div>
      <div class="def-eg">e.g. HBr, Br₂, H⁺, NO₂⁺</div>
    </div>
    <div class="def-card">
      <div class="def-term">Homolytic fission</div>
      <div class="def-body">Bonding electrons are equally shared when a covalent bond breaks, producing two free radicals (one electron each).</div>
      <div class="def-eg">Cl–Cl →<sup>UV</sup> 2 Cl•</div>
    </div>
    <div class="def-card">
      <div class="def-term">Heterolytic fission</div>
      <div class="def-body">Bonding electrons are unequally shared when a covalent bond breaks, producing a cation and an anion.</div>
      <div class="def-eg">HBr → H⁺ + Br⁻</div>
    </div>
    <div class="def-card">
      <div class="def-term">Functional group</div>
      <div class="def-body">An atom or group of atoms responsible for the characteristic reactions of a molecule.</div>
      <div class="def-eg">e.g. –OH (alcohol), C=O (carbonyl), –COOH (carboxylic acid)</div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:0.5rem;color:var(--topic-color);">The six reaction types — one-line definitions</h3>
  <div style="display:grid;grid-template-columns:1fr;gap:0.45rem;margin-bottom:2rem;">
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Substitution</span>
      <span style="color:var(--text-secondary);">An atom or group in an organic molecule is replaced by another atom or group.</span>
    </div>
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Addition</span>
      <span style="color:var(--text-secondary);">One molecule is added to another by breaking a double bond — the product contains all atoms of both reactants.</span>
    </div>
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Elimination</span>
      <span style="color:var(--text-secondary);">A small molecule is removed from an organic compound, resulting in formation of a double bond.</span>
    </div>
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Condensation</span>
      <span style="color:var(--text-secondary);">Two molecules join together with the elimination of a small molecule (usually H₂O).</span>
    </div>
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Hydrolysis</span>
      <span style="color:var(--text-secondary);">A compound is split into two molecules by reaction with water (or aqueous acid/alkali).</span>
    </div>
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Oxidation</span>
      <span style="color:var(--text-secondary);">Addition of oxygen or removal of hydrogen from an organic compound.</span>
    </div>
    <div style="display:grid;grid-template-columns:150px 1fr;gap:0.75rem;background:var(--bg-soft);border:1px solid var(--border);border-radius:7px;padding:0.6rem 0.9rem;font-size:0.8rem;">
      <span style="font-weight:700;color:var(--topic-color);">Reduction</span>
      <span style="color:var(--text-secondary);">Addition of hydrogen or removal of oxygen from an organic compound.</span>
    </div>
  </div>
</div>

<!-- ══════════════ TAB 3: REACTION TYPES ══════════════ -->
<style>
  .section-title { font-size: 18px; font-weight: 500; color: var(--color-text-primary); margin: 0 0 4px; }
  .divider { border: none; border-top: 1px solid var(--color-border-tertiary); margin: 0 0 16px; }
  .rxn-section { margin-bottom: 28px; }
  .rxn-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 4px; }
  .rxn-title { font-size: 15px; font-weight: 500; color: var(--color-text-primary); }
  .rxn-subtitle { font-size: 12px; color: var(--color-text-secondary); }
  .rxn-def { font-size: 13px; color: var(--color-text-secondary); margin-bottom: 10px; border-left: 3px solid var(--color-border-secondary); padding-left: 10px; }
  .rxn-body { display: flex; flex-direction: column; gap: 8px; }
  .eq-sublabel { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-tertiary); margin-top: 4px; margin-bottom: 2px; }
  .eq-block { background: var(--color-background-secondary); border-radius: 8px; padding: 10px 14px; }
  .eq-label { font-size: 12px; color: var(--color-text-secondary); margin-bottom: 6px; }

  .eq-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: var(--color-text-primary);
    font-family: var(--font-mono);
    flex-wrap: wrap;
  }

  /* Arrow + condition: condition sits above the arrow, no separator line */
  .eq-arrow-group {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin: 0 4px;
  }
  .eq-reagent {
    font-size: 10px;
    font-family: var(--font-sans);
    color: var(--color-text-danger, #c0392b);
    white-space: nowrap;
    font-weight: 500;
    line-height: 1.2;
  }
  .eq-arrow {
    font-size: 15px;
    line-height: 1;
    color: var(--color-text-secondary);
  }

  .info-box { font-size: 12px; color: var(--color-text-info, #2980b9); background: var(--color-background-info); border-radius: 6px; padding: 7px 10px; }
  .warn-box { font-size: 12px; color: var(--color-text-warning, #c87000); background: var(--color-background-warning); border-radius: 6px; padding: 7px 10px; }
</style>

<div id="tab-reactions" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--color-text-secondary);">All reactions from your notes · reagents shown in red</p>
  <h2 class="section-title">Reaction Types</h2>
  <div class="divider"></div>

  <!-- SUBSTITUTION -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Substitution</span>
      <span class="rxn-subtitle">chlorination · bromination · nucleophilic substitution</span>
    </div>
    <div class="rxn-def">An atom or group of atoms in an organic molecule is replaced by another atom or group.</div>
    <div class="rxn-body">

      <div class="eq-sublabel">Free radical substitution — Alkane + halogen</div>
      <div class="eq-block">
        <div class="eq-label">Chlorination of methane (UV light required)</div>
        <div class="eq-row">
          CH₄ + Cl₂
          <span class="eq-arrow-group"><span class="eq-reagent">UV light</span><span class="eq-arrow">→</span></span>
          CH₃Cl + HCl
        </div>
        <div class="warn-box" style="margin-top:0.5rem;">Mechanism: Initiation (Cl–Cl →<sup>UV</sup> 2 Cl•) → Propagation → Termination. Only homolytic fission produces radicals.</div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Nucleophilic substitution — Halogenoalkane</div>
      <div class="eq-block">
        <div class="eq-label">With OH⁻ (aqueous) → alcohol</div>
        <div class="eq-row">
          CH₃CH₂Br + OH⁻(aq)
          <span class="eq-arrow-group"><span class="eq-reagent">reflux</span><span class="eq-arrow">→</span></span>
          CH₃CH₂OH + Br⁻
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">With NH₃ (alcoholic) → amine</div>
        <div class="eq-row">
          CH₃CH₂Br + NH₃(alc)
          <span class="eq-arrow-group"><span class="eq-reagent">heat under pressure</span><span class="eq-arrow">→</span></span>
          CH₃CH₂NH₂ + HBr
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">With CN⁻ (alcoholic) → nitrile (chain lengthened by 1C)</div>
        <div class="eq-row">
          CH₃CH₂Br + CN⁻(alc)
          <span class="eq-arrow-group"><span class="eq-reagent">reflux</span><span class="eq-arrow">→</span></span>
          CH₃CH₂CN + Br⁻
        </div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Nucleophilic substitution — Alcohol</div>
      <div class="eq-block">
        <div class="eq-label">Alcohol + HCl → halogenoalkane</div>
        <div class="eq-row">
          CH₃CH₂OH + HCl
          <span class="eq-arrow-group"><span class="eq-reagent">heat</span><span class="eq-arrow">→</span></span>
          CH₃CH₂Cl + H₂O
        </div>
      </div>
    </div>
  </div>

  <!-- ADDITION -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Addition</span>
      <span class="rxn-subtitle">electrophilic · nucleophilic · polymerisation</span>
    </div>
    <div class="rxn-def">One molecule is added to another by breaking a double bond. The product contains all atoms of both reactants.</div>
    <div class="rxn-body">

      <div class="eq-sublabel">Electrophilic addition — Alkene</div>
      <div class="eq-block">
        <div class="eq-label">Bromination</div>
        <div class="eq-row">H₂C=CH₂ + Br₂ <span class="eq-arrow">→</span> BrCH₂CH₂Br <em style="font-size:0.75rem;color:var(--color-text-secondary);">(1,2-dibromoethane)</em></div>
        <div class="eq-row" style="margin-top:4px;">H₂C=CH₂ + HBr <span class="eq-arrow">→</span> CH₃CH₂Br</div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Hydrogenation</div>
        <div class="eq-row">
          H₂C=CH₂ + H₂
          <span class="eq-arrow-group"><span class="eq-reagent">Ni catalyst</span><span class="eq-arrow">→</span></span>
          CH₃CH₃
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Hydration (produces ethanol)</div>
        <div class="eq-row">
          H₂C=CH₂ + H₂O(g)
          <span class="eq-arrow-group"><span class="eq-reagent">conc. H₃PO₄, 300°C</span><span class="eq-arrow">→</span></span>
          CH₃CH₂OH
        </div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Nucleophilic addition — Carbonyl compound</div>
      <div class="eq-block">
        <div class="eq-label">Ketone/aldehyde + HCN → hydroxynitrile</div>
        <div class="eq-row">
          CH₃COCH₃ + HCN
          <span class="eq-arrow-group"><span class="eq-reagent">KCN catalyst</span><span class="eq-arrow">→</span></span>
          (CH₃)₂C(OH)CN
        </div>
        <div class="info-box" style="margin-top:0.5rem;">The CN⁻ acts as the nucleophile, attacking the δ+ carbon of the carbonyl group. HCN alone is too weak an acid — KCN provides CN⁻.</div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Addition polymerisation</div>
      <div class="eq-block">
        <div class="eq-label">Many monomers join via repeated addition across double bonds</div>
        <div class="eq-row">
          n CH₂=CHCH₃ <span class="eq-arrow">→</span> –(CH₂–CH(CH₃))ₙ– <em style="font-size:0.75rem;color:var(--color-text-secondary);">(polypropene)</em>
        </div>
      </div>
    </div>
  </div>

  <!-- ELIMINATION -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Elimination</span>
      <span class="rxn-subtitle">dehydrohalogenation · dehydration</span>
    </div>
    <div class="rxn-def">A small molecule is eliminated from an organic compound, resulting in the formation of a double bond.</div>
    <div class="rxn-body">
      <div class="eq-block">
        <div class="eq-label">Halogenoalkane → alkene (dehydrohalogenation)</div>
        <div class="eq-row">
          CH₃CHBrCH₃
          <span class="eq-arrow-group"><span class="eq-reagent">OH⁻(alc), reflux</span><span class="eq-arrow">→</span></span>
          CH₃CH=CH₂ + HBr
        </div>
        <div class="warn-box" style="margin-top:0.5rem;">When more than one alkene product is possible, a mixture is formed — the more substituted alkene (Zaitsev's product) is major.</div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Alcohol → alkene (dehydration)</div>
        <div class="eq-row">
          CH₃CH(OH)CH₃
          <span class="eq-arrow-group"><span class="eq-reagent">conc. H₂SO₄, heat</span><span class="eq-arrow">→</span></span>
          CH₃CH=CH₂ + H₂O
        </div>
      </div>
    </div>
  </div>

  <!-- CONDENSATION -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Condensation</span>
      <span class="rxn-subtitle">esterification</span>
    </div>
    <div class="rxn-def">Two molecules join together with the elimination of a small molecule (H₂O in esterification).</div>
    <div class="rxn-body">
      <div class="eq-block">
        <div class="eq-label">Alcohol + carboxylic acid → ester + water</div>
        <div class="eq-row">
          CH₃CH₂OH + HCOOH
          <span class="eq-arrow-group"><span class="eq-reagent">conc. H₂SO₄, heat</span><span class="eq-arrow">⇌</span></span>
          HCOOCH₂CH₃ + H₂O
        </div>
        <div class="info-box" style="margin-top:0.5rem;">The reaction is reversible (⇌). Yield is improved by removing water or using excess of one reactant.</div>
      </div>
    </div>
  </div>

  <!-- HYDROLYSIS -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Hydrolysis</span>
      <span class="rxn-subtitle">ester · nitrile · halogenoalkane</span>
    </div>
    <div class="rxn-def">A compound is split into two molecules by reaction with water (often with acid or alkali catalyst).</div>
    <div class="rxn-body">

      <div class="eq-sublabel">Ester hydrolysis</div>
      <div class="eq-block">
        <div class="eq-label">Acid hydrolysis (reversible)</div>
        <div class="eq-row">
          HCOOCH₂CH₃ + H₂O
          <span class="eq-arrow-group"><span class="eq-reagent">H₂SO₄(aq), heat</span><span class="eq-arrow">⇌</span></span>
          CH₃CH₂OH + HCOOH
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Base hydrolysis / saponification (irreversible — gives carboxylate salt)</div>
        <div class="eq-row">
          HCOOCH₂CH₃ + OH⁻
          <span class="eq-arrow-group"><span class="eq-reagent">NaOH(aq), heat</span><span class="eq-arrow">→</span></span>
          CH₃CH₂OH + HCOO⁻
        </div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Nitrile hydrolysis</div>
      <div class="eq-block">
        <div class="eq-label">Acid hydrolysis → carboxylic acid + NH₄⁺</div>
        <div class="eq-row">
          CH₃CN + 2H₂O
          <span class="eq-arrow-group"><span class="eq-reagent">H⁺, heat</span><span class="eq-arrow">→</span></span>
          CH₃COOH + NH₄⁺
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Base hydrolysis → carboxylate salt + NH₃</div>
        <div class="eq-row">
          CH₃CN + H₂O + OH⁻
          <span class="eq-arrow-group"><span class="eq-reagent">OH⁻, heat</span><span class="eq-arrow">→</span></span>
          CH₃COO⁻ + NH₃
        </div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Halogenoalkane hydrolysis</div>
      <div class="eq-block">
        <div class="eq-row">
          CH₃CH₂Br + OH⁻(aq)
          <span class="eq-arrow-group"><span class="eq-reagent">reflux</span><span class="eq-arrow">→</span></span>
          CH₃CH₂OH + Br⁻
        </div>
        <div class="warn-box" style="margin-top:0.5rem;">Note: this is the same reaction as nucleophilic substitution with OH⁻ — it is also classified as hydrolysis when water/OH⁻ is the reagent breaking the C–X bond.</div>
      </div>
    </div>
  </div>

  <!-- OXIDATION -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Oxidation</span>
      <span class="rxn-subtitle">dehydrogenation · [O] reagents</span>
    </div>
    <div class="rxn-def">Addition of oxygen or removal of hydrogen from an organic compound. Written as [O] over the arrow.</div>
    <div class="rxn-body">

      <div class="eq-sublabel">Oxidation of alkene → aldehyde/ketone + CO₂</div>
      <div class="eq-block">
        <div class="eq-label">Terminal alkene (propene) → ethanal + methanal</div>
        <div class="eq-row">
          H₃C–CH=CH₂
          <span class="eq-arrow-group"><span class="eq-reagent">[O] KMnO₄/H⁺</span><span class="eq-arrow">→</span></span>
          CH₃CHO + HCHO
        </div>
        <div class="warn-box" style="margin-top:0.5rem;"><strong>Only KMnO₄/H⁺</strong> can oxidise alkenes. K₂Cr₂O₇/H⁺ cannot.</div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Oxidation of alcohols</div>
      <div class="eq-block">
        <div class="eq-label">Primary alcohol → aldehyde (distil to prevent further oxidation)</div>
        <div class="eq-row">
          CH₃CH₂OH
          <span class="eq-arrow-group"><span class="eq-reagent">K₂Cr₂O₇/H⁺, distil</span><span class="eq-arrow">→</span></span>
          CH₃CHO + H₂O
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Primary alcohol → carboxylic acid (reflux allows full oxidation)</div>
        <div class="eq-row">
          CH₃CH₂OH
          <span class="eq-arrow-group"><span class="eq-reagent">K₂Cr₂O₇/H⁺, reflux</span><span class="eq-arrow">→</span></span>
          CH₃COOH + H₂O
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Secondary alcohol → ketone</div>
        <div class="eq-row">
          CH₃CH(OH)CH₃
          <span class="eq-arrow-group"><span class="eq-reagent">K₂Cr₂O₇/H⁺, reflux</span><span class="eq-arrow">→</span></span>
          CH₃COCH₃ (propanone)
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Aldehyde → carboxylic acid</div>
        <div class="eq-row">
          CH₃CHO
          <span class="eq-arrow-group"><span class="eq-reagent">[O] reflux</span><span class="eq-arrow">→</span></span>
          CH₃COOH
        </div>
        <div class="info-box" style="margin-top:0.5rem;">K₂Cr₂O₇/H⁺, KMnO₄/H⁺, Tollens' reagent and Fehling's solution can all oxidise aldehydes. <strong>Ketones cannot be oxidised further</strong> under normal conditions.</div>
      </div>
    </div>
  </div>

  <!-- REDUCTION -->
  <div class="rxn-section">
    <div class="rxn-header">
      <span class="rxn-title">Reduction</span>
      <span class="rxn-subtitle">hydrogenation · [H] reagents</span>
    </div>
    <div class="rxn-def">Addition of hydrogen or removal of oxygen from an organic compound.</div>
    <div class="rxn-body">

      <div class="eq-sublabel">Reduction of alkene → alkane</div>
      <div class="eq-block">
        <div class="eq-row">
          H₂C=CH₂ + H₂
          <span class="eq-arrow-group"><span class="eq-reagent">Ni catalyst, heat</span><span class="eq-arrow">→</span></span>
          CH₃CH₃
        </div>
        <div class="warn-box" style="margin-top:0.5rem;"><strong>Only H₂/Ni</strong> can reduce an alkene. NaBH₄ and LiAlH₄ cannot.</div>
      </div>

      <div class="eq-sublabel" style="margin-top:8px;">Reduction of carbonyl compounds</div>
      <div class="eq-block">
        <div class="eq-label">Aldehyde → primary alcohol</div>
        <div class="eq-row">
          CH₃CHO
          <span class="eq-arrow-group"><span class="eq-reagent">NaBH₄</span><span class="eq-arrow">→</span></span>
          CH₃CH₂OH
        </div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Ketone → secondary alcohol</div>
        <div class="eq-row">
          CH₃COCH₃
          <span class="eq-arrow-group"><span class="eq-reagent">NaBH₄</span><span class="eq-arrow">→</span></span>
          CH₃CH(OH)CH₃
        </div>
        <div class="info-box" style="margin-top:0.5rem;">LiAlH₄, H₂/Ni and NaBH₄ can all reduce ketones and aldehydes.</div>
      </div>
      <div class="eq-block">
        <div class="eq-label">Carboxylic acid → primary alcohol</div>
        <div class="eq-row">
          CH₃COOH
          <span class="eq-arrow-group"><span class="eq-reagent">LiAlH₄</span><span class="eq-arrow">→</span></span>
          CH₃CH₂OH
        </div>
        <div class="warn-box" style="margin-top:0.5rem;"><strong>Only LiAlH₄</strong> can reduce a carboxylic acid. NaBH₄ is not strong enough.</div>
      </div>
    </div>
  </div>

</div>

<!-- ══════════════ TAB 4: REAGENT SUMMARY ══════════════ -->
<div id="tab-reagents" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Quick-reference table — reagent, conditions, and what it does</p>
  <h2 class="section-title">Reagent Summary</h2>
  <div class="divider"></div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:0.75rem;color:var(--topic-color);">Oxidising agents</h3>
  <div class="reg-table-wrap">
    <table class="reg-table">
      <thead><tr><th>Reagent</th><th>Can oxidise</th><th>Cannot oxidise</th><th>Key condition</th></tr></thead>
      <tbody>
        <tr><td class="hl">K₂Cr₂O₇/H⁺</td><td>Primary alcohols → aldehyde or acid; secondary alcohols → ketone; aldehydes → acid</td><td>Alkenes; ketones</td><td>Distil (aldehyde); reflux (acid)</td></tr>
        <tr><td class="hl">KMnO₄/H⁺</td><td>Alkenes → carbonyl + CO₂; primary alcohols; aldehydes</td><td>Ketones</td><td>Acidic conditions</td></tr>
        <tr><td class="hl">Tollens' reagent</td><td>Aldehydes → acid (silver mirror)</td><td>Ketones</td><td>Warm gently</td></tr>
        <tr><td class="hl">Fehling's solution</td><td>Aldehydes → acid (brick-red ppt)</td><td>Ketones; aromatic aldehydes</td><td>Warm gently</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:0.75rem;color:var(--topic-color);">Reducing agents</h3>
  <div class="reg-table-wrap">
    <table class="reg-table">
      <thead><tr><th>Reagent</th><th>Can reduce</th><th>Cannot reduce</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td class="hl">H₂/Ni</td><td>Alkenes → alkanes; aldehydes/ketones → alcohols</td><td>Carboxylic acids</td><td>Needs Ni catalyst and heat/pressure</td></tr>
        <tr><td class="hl">NaBH₄</td><td>Aldehydes → primary alcohols; ketones → secondary alcohols</td><td>Alkenes; carboxylic acids</td><td>Mild reducing agent; aqueous/alcoholic solvent</td></tr>
        <tr><td class="hl">LiAlH₄</td><td>Aldehydes; ketones; carboxylic acids → primary alcohols; esters; nitriles</td><td>Alkenes</td><td>Strong; use dry ether only — reacts violently with water</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:0.75rem;color:var(--topic-color);">Nucleophilic substitution reagents</h3>
  <div class="reg-table-wrap">
    <table class="reg-table">
      <thead><tr><th>Nucleophile</th><th>Conditions</th><th>Product from halogenoalkane</th></tr></thead>
      <tbody>
        <tr><td class="hl">OH⁻(aq)</td><td>Reflux</td><td>Alcohol</td></tr>
        <tr><td class="hl">NH₃(alc)</td><td>Heat under pressure (sealed tube)</td><td>Amine (+HBr)</td></tr>
        <tr><td class="hl">CN⁻(alc)</td><td>Reflux</td><td>Nitrile — chain extended by 1 carbon</td></tr>
      </tbody>
    </table>
  </div>

  <div class="info-box"><strong>Memory tip for reducing agents:</strong> "NaBH₄ for carbonyls, LiAlH₄ for acids and everything." LiAlH₄ is the stronger reagent and the only one that can reduce C=O in a carboxylic acid. Use in dry ether — it reacts explosively with water.</div>
</div>

<!-- ══════════════ TAB 5: EXAM TECHNIQUE ══════════════ -->
<div id="tab-exam" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Common mistakes · mark scheme language · Paper 1 + 2 strategy</p>
  <h2 class="section-title">Exam Technique</h2>
  <div class="divider"></div>

  <div class="do-dont">
    <div class="do-card">
      <div class="do-card-title">DO — Mark scheme habits</div>
      <ul class="ddlist">
        <li>Classify the reaction type first before writing conditions — it saves time and prevents errors</li>
        <li>Always include state symbols for reagents when given (aq), (alc), (g)</li>
        <li>For oxidation, specify the oxidising agent: [O] alone scores 0 in Paper 2 — write K₂Cr₂O₇/H⁺ or KMnO₄/H⁺</li>
        <li>For elimination vs substitution: OH⁻(aq) = substitution; OH⁻(alc) = elimination — the solvent determines the product</li>
        <li>State "distil" vs "reflux" for alcohol oxidation — these are separate mark points</li>
      </ul>
    </div>
    <div class="dont-card">
      <div class="dont-card-title">DON'T — Common errors</div>
      <ul class="ddlist">
        <li>Don't use NaBH₄ to reduce carboxylic acids — only LiAlH₄ works</li>
        <li>Don't use K₂Cr₂O₇ to oxidise alkenes — only KMnO₄/H⁺ works</li>
        <li>Don't forget UV light is required for free radical substitution — without it the reaction won't start</li>
        <li>Don't confuse esterification (condensation, reversible ⇌) with hydrolysis — they are reverse reactions</li>
        <li>Don't draw base hydrolysis of ester as reversible — it is irreversible because it produces the carboxylate anion (RCOO⁻)</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:0.5rem;">The OH⁻ solvent rule — exam favourite</h3>
  <div class="divider" style="margin-bottom:1rem;"></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;margin-bottom:2rem;">
    <div class="def-card" style="border-left-color:#1a5fa8;">
      <div class="def-term" style="color:#1a5fa8;">OH⁻ (aqueous) + halogenoalkane</div>
      <div class="def-body">→ <strong>Substitution</strong> → alcohol<br>Water stabilises the transition state, favours SN2 pathway.</div>
    </div>
    <div class="def-card" style="border-left-color:#c0392b;">
      <div class="def-term" style="color:#c0392b;">OH⁻ (alcoholic) + halogenoalkane</div>
      <div class="def-body">→ <strong>Elimination</strong> → alkene<br>Alcoholic solvent allows OH⁻ to act as a base rather than nucleophile.</div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:0.5rem;">Syllabus checklist — key outcomes</h3>
  <div class="divider" style="margin-bottom:1rem;"></div>
  <ul class="outcome-list">
    <li><div class="outcome-check"></div>Define free radical, nucleophile and electrophile with examples</li>
    <li><div class="outcome-check"></div>Distinguish homolytic and heterolytic fission; state products of each</li>
    <li><div class="outcome-check"></div>Define the six reaction types: substitution, addition, elimination, condensation, hydrolysis, oxidation, reduction</li>
    <li><div class="outcome-check"></div>Write equations for free radical substitution of alkanes (initiation, propagation, termination steps)</li>
    <li><div class="outcome-check"></div>Write equations for nucleophilic substitution of halogenoalkanes with OH⁻, NH₃ and CN⁻</li>
    <li><div class="outcome-check"></div>Write equations for electrophilic addition to alkenes (Br₂, HBr, H₂/Ni, H₂O/H₃PO₄)</li>
    <li><div class="outcome-check"></div>Write equation for nucleophilic addition of HCN to carbonyl compounds</li>
    <li><div class="outcome-check"></div>Distinguish conditions for elimination (OH⁻/alc) vs substitution (OH⁻/aq)</li>
    <li><div class="outcome-check"></div>Write equations for oxidation of primary and secondary alcohols, stating correct reagent and conditions</li>
    <li><div class="outcome-check"></div>State which reducing agent is required for each substrate (alkene → H₂/Ni; carbonyl → NaBH₄; acid → LiAlH₄)</li>
    <li><div class="outcome-check"></div>Write equations for acid and base hydrolysis of esters and nitriles</li>
  </ul>

  <div class="topic-nav">
    <a href="/cie-chemistry/">← Back to all topics</a>
    <a href="/cie-chemistry/topic-14/">Topic 14: Hydrocarbons →</a>
  </div>

</div>

<script>
  function showTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.remove('active'); p.style.display = 'none'; });
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    var panel = document.getElementById('tab-' + id);
    if (panel) { panel.classList.add('active'); panel.style.display = 'block'; }
    if (btn) btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.addEventListener('DOMContentLoaded', function() {
    var f = document.getElementById('tab-overview');
    if (f) f.style.display = 'block';
  });
</script>