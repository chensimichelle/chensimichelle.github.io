---
layout: page
title: AS Level Biology 9700 — 2025 Exam Study Guide
permalink: /cie-biology/9700-study-guide/
nav: false
---

<style>
/* ── al-folio CV colour tokens ─────────────────────────── */
:root {
  --bg:        #ffffff;
  --surface:   #f8f9fa;
  --border:    #dee2e6;
  --border-lt: #e9ecef;

  --text:      #212529;
  --muted:     #6c757d;
  --link:      #0066cc;

  /* accent — matches al-folio teal/navy palette */
  --accent:    #0a7275;   /* deep teal */
  --accent-lt: #e6f3f3;
  --accent-mid:#138a8d;

  --amber-bg:  #fff8e6;
  --amber-bd:  #f0c060;
  --amber-tx:  #7a4f00;

  --red-bg:    #fff0f0;
  --red-bd:    #f0a0a0;
  --red-tx:    #8b0000;

  --sidebar-w: 230px;
  --top-h:     52px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Source Sans 3', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  background: var(--bg);
  color: var(--text);
}

/* ── TOP BAR ──────────────────────────────────────────── */
.topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--top-h);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 200;
  gap: 12px;
}
.topbar-title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 16px;
  font-weight: normal;
  color: var(--text);
  white-space: nowrap;
}
.topbar-sep { color: var(--border); font-size: 18px; }
.topbar-sub { font-size: 13px; color: var(--muted); white-space: nowrap; }
.topbar-stats {
  margin-left: auto;
  display: flex;
  gap: 24px;
}
.stat { font-size: 12px; color: var(--muted); white-space: nowrap; }
.stat strong { color: var(--accent); font-weight: 600; }

/* ── LAYOUT ───────────────────────────────────────────── */
.layout {
  display: flex;
  padding-top: var(--top-h);
  min-height: 100vh;
}

/* ── SIDEBAR ──────────────────────────────────────────── */
.sidebar {
  width: var(--sidebar-w);
  flex-shrink: 0;
  position: sticky;
  top: var(--top-h);
  height: calc(100vh - var(--top-h));
  overflow-y: auto;
  border-right: 1px solid var(--border);
  padding: 24px 0 40px;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.sidebar::-webkit-scrollbar { width: 4px; }
.sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

.sb-section {
  margin-bottom: 20px;
}
.sb-heading {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 0 18px 6px;
  display: block;
}
.sb-link {
  display: block;
  padding: 5px 18px;
  font-size: 13px;
  font-weight: 300;
  color: var(--text);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all .15s;
  line-height: 1.4;
}
.sb-link:hover {
  color: var(--accent);
  background: var(--accent-lt);
  border-left-color: var(--accent-mid);
}
.sb-link.active {
  color: var(--accent);
  background: var(--accent-lt);
  border-left-color: var(--accent);
  font-weight: 400;
}
.sb-badge {
  display: inline-block;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 1px 5px;
  border-radius: 3px;
  margin-left: 4px;
  vertical-align: middle;
}
.sb-t1 { background: var(--accent-lt); color: var(--accent); }
.sb-t2 { background: #e8eaf6; color: #3949ab; }

/* ── MAIN CONTENT ─────────────────────────────────────── */
.main {
  flex: 1;
  min-width: 0;
  padding: 40px 56px 80px 48px;
  max-width: 900px;
}

/* ── PAGE HEADER ──────────────────────────────────────── */
.page-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.page-header h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 28px;
  font-weight: normal;
  color: var(--text);
  margin-bottom: 6px;
}
.page-header .subtitle {
  font-size: 14px;
  color: var(--muted);
}
.page-header .tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-lt);
  border: 1px solid var(--accent-mid);
  padding: 2px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
}

/* ── SECTION HEADERS ──────────────────────────────────── */
.sec-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 4px;
}
.sec-title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 22px;
  font-weight: normal;
  color: var(--text);
  margin-bottom: 20px;
}

/* ── PRIORITY GRID ────────────────────────────────────── */
.priority-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 12px;
  margin-bottom: 40px;
}
.pc {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 14px 16px;
  transition: box-shadow .2s;
}
.pc:hover { box-shadow: 0 3px 12px rgba(0,0,0,.07); }
.pc.t1 { border-top: 2px solid var(--accent); }
.pc.t2 { border-top: 2px solid #3949ab; }
.pc.t3 { border-top: 2px solid var(--muted); }
.pc-tier { font-size: 9.5px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 4px; }
.t1 .pc-tier { color: var(--accent); }
.t2 .pc-tier { color: #3949ab; }
.t3 .pc-tier { color: var(--muted); }
.pc-name { font-family: Georgia, serif; font-size: 15px; font-weight: normal; margin-bottom: 2px; }
.pc-sub { font-size: 11.5px; color: var(--muted); margin-bottom: 8px; }
.pc-bar { height: 3px; background: var(--border-lt); border-radius: 99px; overflow: hidden; margin-bottom: 5px; }
.pc-fill { height: 100%; border-radius: 99px; }
.t1 .pc-fill { background: var(--accent); }
.t2 .pc-fill { background: #3949ab; }
.t3 .pc-fill { background: var(--muted); }
.pc-count { font-size: 11.5px; color: var(--muted); }

/* ── CROSS CARDS ──────────────────────────────────────── */
.cross-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 10px; margin-bottom: 40px; }
.cross-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-mid);
  border-radius: 4px;
  padding: 12px 14px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}
.cross-card strong { color: var(--text); font-weight: 600; }

/* ── TOPIC SECTION ────────────────────────────────────── */
.topic-section {
  margin-bottom: 48px;
  scroll-margin-top: calc(var(--top-h) + 20px);
}
.topic-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
.topic-num {
  width: 30px;
  height: 30px;
  background: var(--accent);
  color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  font-size: 13px;
  flex-shrink: 0;
}
.topic-header h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 20px;
  font-weight: normal;
  flex: 1;
}
.freq-badge {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 3px;
  white-space: nowrap;
}
.fb-high { background: var(--accent-lt); color: var(--accent); }
.fb-med  { background: #e8eaf6; color: #3949ab; }
.fb-low  { background: var(--surface); color: var(--muted); }

/* ── ACCORDION ────────────────────────────────────────── */
details {
  border: 1px solid var(--border);
  border-radius: 5px;
  margin-bottom: 8px;
  overflow: hidden;
  background: var(--bg);
}
summary {
  padding: 12px 18px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  user-select: none;
  transition: background .12s;
}
summary:hover { background: var(--surface); }
summary::-webkit-details-marker { display: none; }
summary::after { content: '+'; font-size: 18px; color: var(--accent-mid); line-height: 1; flex-shrink: 0; margin-left: 8px; }
details[open] summary::after { content: '−'; }
details[open] summary { border-bottom: 1px solid var(--border-lt); background: var(--surface); }

/* ── TABLE ────────────────────────────────────────────── */
.db { padding: 0; }
.q-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.q-table thead th {
  background: var(--surface);
  color: var(--muted);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 9px 14px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}
.q-table thead th:first-child { width: 120px; }
.q-table thead th:nth-child(2) { width: 210px; }
.q-table tbody tr { border-bottom: 1px solid var(--border-lt); }
.q-table tbody tr:last-child { border-bottom: none; }
.q-table tbody tr:hover { background: var(--surface); }
.q-table td { padding: 11px 14px; vertical-align: top; line-height: 1.6; color: var(--text); }

/* ── MISC ELEMENTS ────────────────────────────────────── */
.q-ref {
  font-family: 'Source Code Pro', 'Courier New', monospace;
  font-size: 11px;
  color: var(--accent);
  background: var(--accent-lt);
  padding: 2px 6px;
  border-radius: 3px;
  display: inline-block;
  white-space: nowrap;
}
.blist { list-style: none; padding: 0; margin: 0; }
.blist li {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 4px;
  font-size: 13px;
  color: var(--text);
  line-height: 1.55;
}
.blist li::before { content: '→'; color: var(--accent-mid); flex-shrink: 0; font-weight: 500; margin-top: 1px; }
strong { font-weight: 600; color: var(--text); }
em { font-style: italic; color: var(--accent); }

/* ── TIP / WARN BOXES ─────────────────────────────────── */
.tip-box, .warn-box {
  padding: 11px 16px;
  font-size: 13px;
  line-height: 1.6;
  border-top: 1px solid var(--border-lt);
}
.tip-box  { background: var(--amber-bg); border-top-color: var(--amber-bd); }
.warn-box { background: var(--red-bg);   border-top-color: var(--red-bd); }
.box-label {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.tip-box  .box-label { color: var(--amber-tx); }
.tip-box  p          { color: var(--amber-tx); }
.warn-box .box-label { color: var(--red-tx); }
.warn-box p          { color: var(--red-tx); }

/* ── HOW TO ANSWER ────────────────────────────────────── */
.answer-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(240px,1fr)); gap: 12px; margin-bottom: 24px; }
.answer-card { background: var(--bg); border: 1px solid var(--border); border-radius: 5px; padding: 16px; }
.answer-card h3 { font-family: Georgia, serif; font-size: 14px; font-weight: normal; color: var(--accent); margin-bottom: 8px; }
.answer-card ol { padding-left: 16px; }
.answer-card li { font-size: 13px; color: var(--muted); margin-bottom: 4px; line-height: 1.5; }

/* ── SPELLING GRID ────────────────────────────────────── */
.spell-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(230px,1fr)); gap: 8px; }
.spell-item { background: var(--bg); border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; display: flex; gap: 10px; align-items: flex-start; }
.spell-check { width: 16px; height: 16px; background: var(--accent-lt); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 3px; font-size: 9px; color: var(--accent); font-weight: 700; }
.spell-item .term { font-size: 13px; font-weight: 500; font-style: italic; display: block; margin-bottom: 2px; color: var(--text); }
.spell-item .note { font-size: 11.5px; color: var(--muted); }

/* ── FOOTER ───────────────────────────────────────────── */
footer {
  border-top: 1px solid var(--border);
  padding: 20px 48px;
  font-size: 12.5px;
  color: var(--muted);
  margin-top: 40px;
}
footer strong { color: var(--text); font-weight: 500; }

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .main { padding: 24px 20px 60px; }
  .topbar-stats { display: none; }
}
@media (max-width: 900px) {
  .main { padding: 32px 28px 60px; }
}
@media (max-width: 640px) { .q-table { display: block; overflow-x: auto; } }
@media print { .sidebar, .topbar { display: none; } .main { padding: 20px; } }
</style>


<!-- TOP BAR -->
<header class="topbar">
  <span class="topbar-title">AS Level Biology 9700</span>
  <span class="topbar-sep">·</span>
  <span class="topbar-sub">2025 Exam Study Guide</span>
  <div class="topbar-stats">
    <span class="stat"><strong>9</strong> Topics</span>
    <span class="stat"><strong>60+</strong> Questions</span>
    <span class="stat"><strong>s25 · w25 · m25</strong></span>
  </div>
</header>

<div class="layout">

<!-- SIDEBAR -->
<nav class="sidebar" id="sidebar">
  <div class="sb-section">
    <span class="sb-heading">Overview</span>
    <a class="sb-link" href="#priority">Topic Rankings</a>
    <a class="sb-link" href="#cross">Cross-topic Links</a>
  </div>
  <div class="sb-section">
    <span class="sb-heading">Topics</span>
    <a class="sb-link" href="#t1">1 · Cell Structure &amp; Microscopy</a>
    <a class="sb-link" href="#t2">2 · Biological Molecules</a>
    <a class="sb-link" href="#t3">3 · Membranes &amp; Transport</a>
    <a class="sb-link" href="#t4">4 · Enzymes <span class="sb-badge sb-t1">T1</span></a>
    <a class="sb-link" href="#t5">5 · Mitotic Cell Cycle</a>
    <a class="sb-link" href="#t6">6 · Nucleic Acids</a>
    <a class="sb-link" href="#t7">7 · Disease &amp; Immunity <span class="sb-badge sb-t1">T1</span></a>
    <a class="sb-link" href="#t8">8 · Transport in Mammals</a>
  </div>
  <div class="sb-section">
    <span class="sb-heading">Exam Technique</span>
    <a class="sb-link" href="#howto">How to Answer</a>
    <a class="sb-link" href="#spelling">Zero-tolerance Spellings</a>
  </div>
</nav>

<!-- MAIN -->
<main class="main">

  <!-- PAGE HEADER -->
  <div class="page-header">
    <div class="tag">Cambridge AS Level · 9700 · 2025 Series</div>
    <h1>Biology Exam Study Guide</h1>
    <p class="subtitle">Every question from the 2025 papers — with the exact reference, what was asked, and the specific mark scheme points.</p>
  </div>

  <!-- PRIORITY -->
  <section id="priority" style="scroll-margin-top:72px; margin-bottom:48px">
    <div class="sec-label">Where to spend your time</div>
    <div class="sec-title">Topic frequency ranking</div>
    <div class="priority-grid">
      <div class="pc t1"><div class="pc-tier">Tier 1 — Essential</div><div class="pc-name">Immunity</div><div class="pc-sub">Topic 11 · Every paper</div><div class="pc-bar"><div class="pc-fill" style="width:95%"></div></div><div class="pc-count">~12 question parts</div></div>
      <div class="pc t1"><div class="pc-tier">Tier 1 — Essential</div><div class="pc-name">Enzymes</div><div class="pc-sub">Topic 3 · Data and graph heavy</div><div class="pc-bar"><div class="pc-fill" style="width:85%"></div></div><div class="pc-count">~10 question parts</div></div>
      <div class="pc t2"><div class="pc-tier">Tier 2 — High value</div><div class="pc-name">Cell membranes</div><div class="pc-sub">Topic 4 · Always in Paper 1</div><div class="pc-bar"><div class="pc-fill" style="width:72%"></div></div><div class="pc-count">~9 question parts</div></div>
      <div class="pc t2"><div class="pc-tier">Tier 2 — High value</div><div class="pc-name">Biological molecules</div><div class="pc-sub">Topic 2 · Proteins everywhere</div><div class="pc-bar"><div class="pc-fill" style="width:68%"></div></div><div class="pc-count">~8 question parts</div></div>
      <div class="pc t2"><div class="pc-tier">Tier 2 — High value</div><div class="pc-name">Nucleic acids</div><div class="pc-sub">Topic 6 · DNA + protein synthesis</div><div class="pc-bar"><div class="pc-fill" style="width:65%"></div></div><div class="pc-count">~8 question parts</div></div>
      <div class="pc t2"><div class="pc-tier">Tier 2 — High value</div><div class="pc-name">Cell structure</div><div class="pc-sub">Topic 1 · Organelles + microscopy</div><div class="pc-bar"><div class="pc-fill" style="width:58%"></div></div><div class="pc-count">~7 question parts</div></div>
      <div class="pc t2"><div class="pc-tier">Tier 2 — High value</div><div class="pc-name">Infectious disease</div><div class="pc-sub">Topic 10 · Antibiotics + pathogens</div><div class="pc-bar"><div class="pc-fill" style="width:55%"></div></div><div class="pc-count">~7 question parts</div></div>
      <div class="pc t3"><div class="pc-tier">Tier 3 — Solid support</div><div class="pc-name">Cell cycle</div><div class="pc-sub">Topic 5 · Mitosis + stem cells</div><div class="pc-bar"><div class="pc-fill" style="width:45%"></div></div><div class="pc-count">~6 question parts</div></div>
      <div class="pc t3"><div class="pc-tier">Tier 3 — Solid support</div><div class="pc-name">Transport in mammals</div><div class="pc-sub">Topic 8 · Bohr shift + heart</div><div class="pc-bar"><div class="pc-fill" style="width:40%"></div></div><div class="pc-count">~5 question parts</div></div>
    </div>
  </section>

  <!-- CROSS-TOPIC -->
  <section id="cross" style="scroll-margin-top:72px; margin-bottom:48px">
    <div class="sec-label">Connections</div>
    <div class="sec-title">Cross-topic links</div>
    <div class="cross-grid">
      <div class="cross-card"><strong>Proteins</strong> — collagen (T2), haemoglobin (T2 &amp; T8), enzymes (T3), channel proteins (T4), antibodies (T11). Strong protein knowledge pays off across half the paper.</div>
      <div class="cross-card"><strong>70S vs 80S ribosomes</strong> — tested in cell structure (T1), antibiotic action (T10), and protein synthesis (T6). One fact, marks in three topics.</div>
      <div class="cross-card"><strong>Phospholipid bilayer</strong> — membranes (T4), cell comparisons (T1), cholesterol in malaria (T10). Same structure, three contexts.</div>
      <div class="cross-card"><strong>Mitosis</strong> — cell cycle (T5), clonal expansion in immunity (T11), tumour formation (T5). Always say mitosis, not meiosis.</div>
      <div class="cross-card"><strong>Colorimeters</strong> — enzyme kinetics (T3) and ELISA for monoclonal antibodies (T11). Same principle, tested twice per year.</div>
      <div class="cross-card"><strong>Specific receptors</strong> — membrane signalling (T4), phagocytosis (T11), clonal selection (T11). One concept, three question contexts.</div>
    </div>
  </section>

  <!-- T1 CELL STRUCTURE -->
  <section id="t1" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">1</div>
      <h2>Cell Structure &amp; Microscopy</h2>
      <span class="freq-badge fb-med">Tier 2</span>
    </div>

    <details open>
      <summary>Microscopy and measurements</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">m25-22-1(a)</span></td><td>Name the type of microscope used for a root image</td><td><ul class="blist"><li><strong>Light / optical</strong> microscope</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-1(b)</span></td><td>Calculate actual length (µm) of a root hair cell from a micrograph</td><td><ul class="blist"><li>Formula: image size ÷ magnification</li><li>Answer: <strong>460–464 µm</strong></li><li>Must show working and units</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-2(c)(i)</span></td><td>Calculate magnification of a <em>Plasmodium</em> image (actual size = 2 µm)</td><td><ul class="blist"><li>Image size ÷ actual size (2 µm)</li><li>Answer: <strong>×12,000</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-2(b)</span></td><td>Suggest a measurement to estimate microvilli surface area</td><td><ul class="blist"><li><strong>Number of microvilli</strong> per unit area of cell surface</li></ul></td></tr>
          </tbody>
        </table>
        <div class="tip-box"><div class="box-label">Calculation tip</div><p>Always write: formula → substitution → answer with units. Correct method earns marks even if the arithmetic is wrong. Convert mm to µm by ×1000 before dividing.</p></div>
      </div>
    </details>

    <details>
      <summary>Organelles — identification and function</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-22-1(a)</span></td><td>Identify plant cell structures X, Y, Z from a diagram</td><td><ul class="blist"><li><strong>X:</strong> (large/permanent) vacuole</li><li><strong>Y:</strong> tonoplast (vacuolar membrane)</li><li><strong>Z:</strong> nucleus</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-1(a)(ii)</span></td><td>Describe features of a nucleus, excluding chromatin</td><td><ul class="blist"><li><strong>Nuclear envelope:</strong> double membrane, protects DNA</li><li><strong>Nuclear pores:</strong> allow mRNA / ribosomal subunits to exit</li><li><strong>Nucleolus:</strong> site of rRNA synthesis and ribosome assembly</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-2(a) / w25-22-1(a)</span></td><td>Compare cilia and microvilli</td><td><ul class="blist"><li><strong>Cilia:</strong> microtubules in <strong>9+2 arrangement</strong>; attach to basal body; rhythmic movement moves mucus</li><li><strong>Microvilli:</strong> contain <strong>actin microfilaments</strong>; increase surface area for absorption; no movement</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-1(d)(i)</span></td><td>Roles of Rough ER vs Smooth ER</td><td><ul class="blist"><li><strong>Rough ER:</strong> ribosomes on surface → protein/enzyme synthesis and transport</li><li><strong>Smooth ER:</strong> no ribosomes → <strong>lipid synthesis</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-1(e)(ii)</span></td><td>Evidence from an EM image that a cell is specialised for secretion</td><td><ul class="blist"><li>Abundant <strong>Rough ER</strong></li><li>Many <strong>ribosomes</strong></li><li>High density of <strong>Golgi / secretory vesicles</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-2(c)</span></td><td>Identify organelle Z and its role in epithelial cells</td><td><ul class="blist"><li><strong>Mitochondrion:</strong> produces <strong>ATP</strong> for energy-requiring processes such as active transport or exocytosis</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-6(b)</span></td><td>Define telomere, centriole, centromere</td><td><ul class="blist"><li><strong>Telomere:</strong> repeated DNA sequences at chromosome ends</li><li><strong>Centriole:</strong> organises microtubules / spindle</li><li><strong>Centromere:</strong> attachment point between sister chromatids</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-1(b)</span></td><td>How viruses travel between plant cells without crossing membranes</td><td><ul class="blist"><li>Via <strong>plasmodesmata</strong> — cytoplasmic strands connecting adjacent cells through cell walls</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Prokaryote vs eukaryote — comparison</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-23-3(a)</span></td><td>Comparison table: prokaryote vs eukaryote features</td><td><ul class="blist"><li><strong>Prokaryote:</strong> circular DNA; 70S ribosomes; 1–5 µm; no nuclear envelope</li><li><strong>Eukaryote:</strong> linear DNA + histones; 80S ribosomes; membrane-bound organelles; nuclear envelope</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-2(d)</span></td><td>Organisation and distribution of DNA in prokaryotes vs eukaryotes</td><td><ul class="blist"><li><strong>Eukaryotic:</strong> linear DNA associated with <strong>histones</strong>; enclosed in nuclear envelope</li><li><strong>Prokaryotic:</strong> circular DNA; found free in <strong>cytoplasm</strong> (nucleoid region)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-4(a)</span></td><td>Similarities and differences: bacterial outer membrane vs eukaryotic cell membrane</td><td><ul class="blist"><li><strong>Similarities:</strong> both have phospholipid bilayer; transport proteins</li><li><strong>Differences:</strong> bacteria have <em>lipopolysaccharides</em>; eukaryotes have <strong>cholesterol</strong> and glycoproteins</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-2(a)</span></td><td>Classify disease-causing organisms as prokaryotic or eukaryotic</td><td><ul class="blist"><li>Cholera and TB: <strong>prokaryotic</strong></li><li>Malaria (<em>Plasmodium</em>): <strong>eukaryotic</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-1(e)(iii)</span></td><td>Difference between Paneth cells and stem cells</td><td><ul class="blist"><li>Paneth cells: <strong>differentiated / specialised</strong></li><li>Stem cells: <strong>undifferentiated</strong></li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Common mistake</div><p>Students list only differences. Both prokaryotes and eukaryotes have a phospholipid bilayer and transport proteins — these similarities earn marks too.</p></div>
      </div>
    </details>
  </section>

  <!-- T2 BIOLOGICAL MOLECULES -->
  <section id="t2" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">2</div>
      <h2>Biological Molecules</h2>
      <span class="freq-badge fb-med">Tier 2</span>
    </div>

    <details open>
      <summary>Carbohydrates — structure, bonds, and tests</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-21-1(a)</span></td><td>Define "macromolecule" and "polymer"</td><td><ul class="blist"><li><strong>Macromolecule:</strong> large molecule with high molecular mass</li><li><strong>Polymer:</strong> composed of many repeating monomers (e.g. α-glucose)</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-2(a) / w25-22-3(d)</span></td><td>Complete / draw the ring structure of α-glucose</td><td><ul class="blist"><li>–OH <strong>below</strong> at C1 (defines α); –H above at C1</li><li>All carbons numbered correctly — examiners check C1 and C4 specifically</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-3(a)</span></td><td>Differences between galactose and α-glucose</td><td><ul class="blist"><li>Positions of –H and –OH on <strong>C1 and C4</strong> are reversed compared to α-glucose</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-3(b)</span></td><td>Support conclusions about sugars in carrots (Benedict's / hydrolysis tests)</td><td><ul class="blist"><li>Fructose / glucose / galactose: <strong>reducing sugars</strong>; sucrose: <strong>non-reducing</strong></li><li>Glucose / fructose / galactose: <strong>monosaccharides</strong>; sucrose: <strong>disaccharide</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-4(a)</span></td><td>Identify bonds and monomers in chitin</td><td><ul class="blist"><li>Correct <strong>glycosidic bond</strong> circled</li><li>Monomer shown with –OH at C1 and C4 after hydrolysis</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-1(b)(i)</span></td><td>Structural differences between starch and cellulose</td><td><ul class="blist"><li><strong>Starch:</strong> α-glucose; same orientation; coiled (amylose) or branched (amylopectin); no H-bonds between chains</li><li><strong>Cellulose:</strong> β-glucose; 180° alternating rotation; linear; H-bonds between chains → <strong>microfibrils</strong> → high tensile strength</li></ul></td></tr>
          </tbody>
        </table>
        <div class="tip-box"><div class="box-label">Drawing tip</div><p>Label carbon numbers on all ring diagrams. Getting the –OH direction wrong on C1 loses the α/β mark. Draw C1 first, then work around the ring.</p></div>
      </div>
    </details>

    <details>
      <summary>Proteins — amino acids, structure levels, and specific proteins</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-23-2(a)(ii)</span></td><td>Draw the general structure of an amino acid</td><td><ul class="blist"><li>Central carbon bonded to <strong>–COOH</strong> (carboxyl) and <strong>–NH₂</strong> (amine group), plus –H and variable R-group</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-2(b)(i)</span></td><td>Identify covalent bonds C and D in a glycoprotein</td><td><ul class="blist"><li><strong>C: peptide bond</strong> (between amino acids)</li><li><strong>D: glycosidic bond</strong> (between carbohydrate units)</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-23-2(b)</span></td><td>Match descriptions to protein structure levels</td><td><ul class="blist"><li><strong>Primary:</strong> sequence of amino acids, joined by peptide bonds</li><li><strong>Secondary:</strong> H-bonds → α-helix or β-sheet; proline disrupts this</li><li><strong>Tertiary:</strong> 3D fold; H-bonds, ionic, disulfide bonds, hydrophobic interactions between R-groups</li><li><strong>Quaternary:</strong> 2+ polypeptide chains associated together</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-2(c)</span></td><td>Why β-casein lacks secondary and tertiary structure</td><td><ul class="blist"><li>High <strong>proline</strong> content prevents H-bonding / helix formation (disrupts secondary)</li><li>Little <strong>cysteine</strong> → few/no disulfide bonds; little serine → fewer H-bonds (disrupts tertiary)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-2(a)</span></td><td>Structure and assembly of collagen</td><td><ul class="blist"><li>3 polypeptides wound into a <strong>triple helix</strong></li><li>Molecules arranged <strong>parallel and staggered</strong>, held by covalent bonds between R-groups</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-2(c)(ii)</span></td><td>Importance of glycine in collagen</td><td><ul class="blist"><li>Every third amino acid; <strong>smallest R-group (–H)</strong> → allows tight packing → high tensile strength</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-2(a) / w25-22-6(b)</span></td><td>Haemoglobin as a globular protein; quaternary structure and cooperative binding</td><td><ul class="blist"><li>Hydrophilic R-groups on exterior → <strong>soluble</strong></li><li>Quaternary: <strong>2α + 2β chains</strong>, each with haem group containing <strong>Fe²⁺</strong></li><li>First O₂ binding causes <strong>conformational change</strong> → increases affinity for subsequent O₂</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Lipids and glycoproteins</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-21-1(c)</span></td><td>Effect of unsaturated fatty acids on membrane fluidity</td><td><ul class="blist"><li>Double bonds cause <strong>kinks/bends</strong> in hydrocarbon tails → prevent close packing → weakens hydrophobic interactions → <strong>increases fluidity</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-2(e)</span></td><td>Role of cholesterol in <em>Plasmodium</em> membranes</td><td><ul class="blist"><li>Maintains / <strong>regulates fluidity and stability</strong></li><li>Prevents membrane becoming too fluid at high temp or too rigid at low temp</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-2(b)(ii)</span></td><td>Role of glycoproteins in cell surface membranes</td><td><ul class="blist"><li>Act as <strong>receptors</strong> on cell surface; bind specific <strong>ligands</strong> — cell recognition and signalling</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- T3 MEMBRANES -->
  <section id="t3" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">3</div>
      <h2>Cell Membranes &amp; Transport</h2>
      <span class="freq-badge fb-med">Tier 2</span>
    </div>

    <details open>
      <summary>Fluid mosaic model — structure and components</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-21-1(a)</span></td><td>Identify components A, B, C of the fluid mosaic model</td><td><ul class="blist"><li><strong>A:</strong> glycolipid &nbsp; <strong>B:</strong> cholesterol &nbsp; <strong>C:</strong> glycoprotein</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-1(d)</span></td><td>Distribution of R-groups in a membrane channel protein</td><td><ul class="blist"><li>Facing fatty acid tails: <strong>hydrophobic</strong> R-groups</li><li>Lining the pore: <strong>hydrophilic</strong> R-groups (allow polar molecules through)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-1(c) / w25-24-2(e)</span></td><td>Effect of unsaturated fatty acids on fluidity; role of cholesterol</td><td><ul class="blist"><li>Unsaturated: kinks prevent close packing → <strong>increases fluidity</strong></li><li>Cholesterol: <strong>regulates fluidity and stability</strong> across temperature changes</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Transport mechanisms</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-23-1(a)</span></td><td>Match substances to transport mechanisms</td><td><ul class="blist"><li><strong>O₂ / CO₂:</strong> simple diffusion through phospholipid bilayer; no protein; no ATP</li><li><strong>Glucose / ions (down gradient):</strong> facilitated diffusion via channel or carrier protein; no ATP</li><li><strong>Ions against gradient:</strong> active transport via carrier protein + ATP</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-1(d)</span></td><td>Transport of Na⁺ and K⁺ into root hair cells</td><td><ul class="blist"><li><strong>Na⁺:</strong> facilitated diffusion — down concentration gradient; channel protein; no ATP</li><li><strong>K⁺:</strong> active transport — <em>against</em> gradient; carrier protein; <strong>ATP required</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-1(d)(ii)</span></td><td>Mechanisms for secreting enzymes and lipids from cells</td><td><ul class="blist"><li><strong>Enzymes (large molecules):</strong> exocytosis — vesicles fuse with membrane</li><li><strong>Lipids (small, hydrophobic):</strong> simple diffusion through bilayer</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-2(f)</span></td><td>Role of flippase, floppase, and scramblase</td><td><ul class="blist"><li><strong>Flippase / floppase:</strong> active / energy-requiring; maintain membrane <strong>asymmetry</strong></li><li><strong>Scramblase:</strong> random movement; activated by Ca²⁺; disrupts asymmetry</li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Common mistake</div><p>Both facilitated diffusion and active transport use carrier/channel proteins. The distinction is: with or against concentration gradient, and whether ATP is used. State both clearly.</p></div>
      </div>
    </details>

    <details>
      <summary>Water potential, osmosis, and cell signalling</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">m25-22-1(e)</span></td><td>Explain water movement between cells A and B with different water potentials</td><td><ul class="blist"><li>Water moves by <strong>osmosis</strong></li><li>From <strong>higher water potential (less negative)</strong> to lower water potential (more negative)</li><li>e.g. –120 kPa → –350 kPa</li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-1(c)</span></td><td>Role of aquaporins in root hair cells</td><td><ul class="blist"><li>Channel proteins providing specific channels for water molecules</li><li><strong>Increase the rate</strong> of water uptake — do not change the direction</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-1(d)</span></td><td>Sequence of events in cell signalling by GLP-1</td><td><ul class="blist"><li>GLP-1 secreted → transported in blood</li><li>Binds to <strong>specific / complementary receptor</strong> on target cell surface membrane</li><li>Triggers <strong>intracellular response</strong> — enzyme cascade / gene activation</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- T4 ENZYMES -->
  <section id="t4" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">4</div>
      <h2>Enzymes</h2>
      <span class="freq-badge fb-high">Tier 1 — Essential</span>
    </div>

    <details open>
      <summary>Mode of action — induced-fit and lock-and-key</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-21-3(a)</span></td><td>Similarities and differences between lock-and-key and induced-fit</td><td><ul class="blist"><li><strong>Similarities:</strong> substrate binds to active site; ESC forms; activation energy lowered</li><li><strong>Induced-fit only:</strong> active site initially only <em>partially complementary</em>; <strong>conformational change</strong> occurs to become fully complementary</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-3(a)</span></td><td>Describe the induced-fit hypothesis</td><td><ul class="blist"><li>Active site and substrate are initially only <strong>partially complementary</strong></li><li>Substrate binding causes enzyme to undergo a <strong>conformational change</strong></li><li>Active site becomes fully complementary → <strong>ESC forms</strong> → activation energy <strong>lowered</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-3(a)(ii)</span></td><td>Explain active site specificity for different enzymes (Drosha/Dicer)</td><td><ul class="blist"><li>Active sites are <strong>specific</strong> to a particular site on the substrate</li><li>Only a complementary substrate shape fits the active site</li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Common mistake</div><p>"Conformational change" is the required phrase for the induced-fit difference mark. Without it, full marks are not possible. Similarities (ESC forms, activation energy lowered) are also worth marks — do not skip them.</p></div>
      </div>
    </details>

    <details>
      <summary>Inhibition — competitive and non-competitive</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-22-6(a)</span></td><td>Draw a graph for non-competitive inhibition on a Michaelis–Menten curve</td><td><ul class="blist"><li>Same general curve shape but <strong>lower plateau (lower Vmax)</strong></li><li><strong>Same Km</strong> (0.055–0.06 mmol dm⁻³)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-3(c)</span></td><td>Use data to support that caffeine is a non-competitive inhibitor</td><td><ul class="blist"><li>Activity is <strong>reduced at all substrate concentrations</strong></li><li><strong>Vmax/plateau is lower</strong></li><li><strong>Km value is unchanged</strong> — same substrate concentration for half-Vmax</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-5(c)</span></td><td>Mechanism of rifampicin as an enzyme inhibitor</td><td><ul class="blist"><li>Binds to <strong>active site</strong> of RNA polymerase (competitive); OR binds <strong>allosteric site</strong> → changes active site shape (non-competitive)</li><li>Prevents transcription / phosphodiester bond formation</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-23-4(b)(ii)</span></td><td>Effect of lowering pH on enzyme activity</td><td><ul class="blist"><li>H⁺ ions break <strong>ionic bonds and H-bonds</strong> in tertiary structure</li><li>Active site changes shape → becomes <strong>less complementary</strong> to substrate → fewer ESCs</li></ul></td></tr>
          </tbody>
        </table>
        <div class="tip-box"><div class="box-label">Three-point evidence rule for non-competitive inhibition</div><p>Cite all three from the data: (1) activity lower at every substrate concentration, (2) Vmax/plateau is lower, (3) Km is unchanged. All three = full marks.</p></div>
      </div>
    </details>

    <details>
      <summary>Km, Vmax, and immobilised enzymes</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-21-3(b)(i)</span></td><td>Calculate the Michaelis–Menten constant (Km)</td><td><ul class="blist"><li>Read Vmax from graph → halve it → read corresponding substrate concentration from x-axis</li><li>e.g. Vmax = 80 → half-Vmax = 40 → Km = <strong>0.014 mmol dm⁻³</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-3(b)(ii)</span></td><td>Advantage of an enzyme with a lower Km</td><td><ul class="blist"><li>Lower substrate concentration needed to reach half-Vmax</li><li>Enzyme has <strong>higher affinity</strong> for substrate; works efficiently when substrate is <strong>scarce</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-3(a)</span></td><td>Advantages of using a colorimeter to measure enzyme activity</td><td><ul class="blist"><li>Provides <strong>quantitative / numerical</strong> results</li><li>Removes <strong>subjective / eye-based bias</strong></li><li>Can detect very small differences in colour intensity</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-3(e)(ii)</span></td><td>Advantages of immobilised enzymes (e.g. lactase)</td><td><ul class="blist"><li>Enzyme can be <strong>recovered and reused</strong> → greater productivity</li><li>More tolerant of fluctuations in temperature and pH</li><li>More <strong>heat stable</strong> — less denaturation at high temperatures</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- T5 CELL CYCLE -->
  <section id="t5" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">5</div>
      <h2>The Mitotic Cell Cycle</h2>
      <span class="freq-badge fb-low">Tier 3</span>
    </div>

    <details open>
      <summary>Interphase, mitosis stages, and chromosome behaviour</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">m25-22-6(a)(i)</span></td><td>Identify the correct sequence of the mitotic cell cycle from photomicrographs</td><td><ul class="blist"><li>Correct order: <strong>B → E → F → D → A → C</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-1(e)(i)</span></td><td>Name the four stages of mitosis in sequence</td><td><ul class="blist"><li><strong>Prophase → Metaphase → Anaphase → Telophase</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-1(a)(i)</span></td><td>Explain the difference in chromatin between G1 and G2 phase</td><td><ul class="blist"><li>DNA replication (S phase) has occurred between G1 and G2</li><li>G2 has <strong>double the quantity</strong> of DNA / chromatin</li><li><strong>Sister chromatids</strong> have formed — two identical molecules joined at centromere</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-5(a)(i)</span></td><td>Identify the component that makes up spindle fibres</td><td><ul class="blist"><li><strong>Microtubules</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-5(a)(ii)</span></td><td>Describe the events of telophase</td><td><ul class="blist"><li>Chromosomes at poles begin to <strong>decondense / uncoil</strong></li><li><strong>Nuclear envelope reforms</strong> around each set</li><li><strong>Nucleolus reappears</strong>; spindle breaks down</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-5(c)</span></td><td>Effects of endoreplication (multiple S phases without mitosis)</td><td><ul class="blist"><li>Nucleus contains <strong>more than two copies of each chromosome</strong> (polyploidy)</li><li>Cell is larger; contains more organelles</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Telomeres, stem cells, and tumour formation</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-21-4(b) / s25-23-5(a)</span></td><td>Location and role of telomeres</td><td><ul class="blist"><li>Located at the <strong>ends of chromosomes</strong></li><li>Repeated non-coding DNA sequences</li><li>Prevents loss of <strong>coding sequences / genes</strong> during replication; allows continuous cell division</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-5(b)</span></td><td>Advantages of using bone marrow stem cells to manufacture red blood cells</td><td><ul class="blist"><li>Haematopoietic — specialise into blood cell types</li><li>Produce <strong>genetically identical cells</strong></li><li>Can <strong>divide continuously</strong> by mitosis (self-renewal)</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-23-1(a)(ii)</span></td><td>Role of meristematic / procambial cells in plants</td><td><ul class="blist"><li>Divide continuously by <strong>mitosis</strong></li><li>Cells <strong>differentiate</strong> into vascular tissues (xylem / phloem)</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-4(c)</span></td><td>How a tumour may form from a melanocyte</td><td><ul class="blist"><li>Mutation in proto-oncogene → <strong>oncogene</strong></li><li>Leads to <strong>uncontrolled mitosis</strong></li><li>Normal cell cycle <strong>checkpoints fail</strong></li><li><strong>Mass of abnormal / non-functional cells</strong> (tumour) forms</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- T6 NUCLEIC ACIDS -->
  <section id="t6" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">6</div>
      <h2>Nucleic Acids &amp; Protein Synthesis</h2>
      <span class="freq-badge fb-med">Tier 2</span>
    </div>

    <details open>
      <summary>DNA and RNA structure</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-23-4(a)</span></td><td>Define DNA monomers; compare DNA nucleotides with ATP</td><td><ul class="blist"><li><strong>Monomer:</strong> repeating unit (nucleotide) used to build a polynucleotide</li><li><strong>ATP vs DNA nucleotide:</strong> ATP has <em>ribose</em> (–OH at C2); DNA has <em>deoxyribose</em> (–H at C2)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-4(b)</span></td><td>Identify bonds in the DNA double helix from a diagram</td><td><ul class="blist"><li><strong>A–T: 2 hydrogen bonds; C–G: 3 hydrogen bonds</strong></li><li><strong>Bond X: phosphodiester bond</strong> (linking nucleotides within each strand)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-3(a)</span></td><td>Complementary base pairing in double-stranded RNA</td><td><ul class="blist"><li>Complementary bases: A–U and G–C, held by <strong>hydrogen bonds</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-3(b)</span></td><td>Structural differences between mRNA and siRNA</td><td><ul class="blist"><li>mRNA: <strong>single-stranded</strong>; siRNA: <strong>double-stranded</strong></li><li>siRNA has paired complementary nucleotides; mRNA does not</li><li>mRNA is longer and codes for amino acids</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Transcription and RNA processing</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">m25-22-5(b)</span></td><td>Basic transcription mechanism and role of RNA polymerase</td><td><ul class="blist"><li><strong>RNA polymerase</strong> catalyses transcription using template strand</li><li>Complementary base pairing: DNA A → RNA <strong>U</strong>; T→A; G→C; C→G</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-3(b)</span></td><td>Relationship between template strand, primary transcript, and mature mRNA</td><td><ul class="blist"><li>RNA polymerase → complementary <strong>primary transcript</strong></li><li><strong>Splicing:</strong> introns removed; exons joined → mature <strong>mRNA</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-4(a)</span></td><td>Functions of the mRNA 5' cap and poly(A) tail</td><td><ul class="blist"><li>Protect mRNA from <strong>degradation by nucleases</strong></li><li>Assist passage through <strong>nuclear pores</strong></li><li>Required for <strong>ribosome attachment</strong> to begin translation</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-4(a)(iii)</span></td><td>Describe the process of RNA splicing</td><td><ul class="blist"><li><strong>Introns</strong> (non-coding sequences) are removed</li><li><strong>Exons</strong> (coding sequences) are joined together → shorter mature mRNA</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Translation, codons, and gene mutations</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-22-6(b)</span></td><td>Definitions of start and stop codons</td><td><ul class="blist"><li><strong>Start codon (AUG):</strong> begins translation; codes for methionine</li><li><strong>Stop codon (UAA/UAG/UGA):</strong> no amino acid; polypeptide <strong>detaches</strong> from ribosome</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-3(e)</span></td><td>Translation in viruses</td><td><ul class="blist"><li>Viral RNA acts directly as <strong>mRNA</strong>; translated by <strong>host ribosomes</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-3(c)</span></td><td>Effects of cleaving mRNA via siRNA</td><td><ul class="blist"><li>Prevents <strong>translation</strong></li><li>No protein formed, or <strong>abnormal / shortened polypeptide</strong> that fails to fold correctly</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-3(c)</span></td><td>Identify the mutation type where one nucleotide differs</td><td><ul class="blist"><li>One nucleotide replaced = <strong>base substitution</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-2(c)(iii)</span></td><td>Compare deletion and substitution mutations</td><td><ul class="blist"><li><strong>Deletion (frameshift):</strong> changes entire amino acid sequence from mutation point onwards</li><li><strong>Substitution:</strong> changes only <em>one</em> amino acid; rest unaffected (may be silent)</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- T7 DISEASE & IMMUNITY -->
  <section id="t7" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">7</div>
      <h2>Infectious Disease &amp; Immunity</h2>
      <span class="freq-badge fb-high">Tier 1 — Essential</span>
    </div>

    <details open>
      <summary>Pathogens, classification, and transmission</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-22-4(a)</span></td><td>Name the main bacterium causing TB</td><td><ul class="blist"><li><em><strong>Mycobacterium tuberculosis</strong></em> — must be spelled correctly and italicised</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-2(a)</span></td><td>Name the bacterium that causes cholera</td><td><ul class="blist"><li><em><strong>Vibrio cholerae</strong></em> — must be spelled correctly and italicised</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-4(b)</span></td><td>Transmission of TB</td><td><ul class="blist"><li>Infected person coughs / sneezes; uninfected person <strong>inhales airborne droplets</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-2(c)(ii)</span></td><td>Transmission of malaria</td><td><ul class="blist"><li>Transmitted by <strong>vector</strong> — female <em>Anopheles</em> mosquito</li><li>Takes a blood meal and <strong>injects <em>Plasmodium</em></strong> along with saliva / anticoagulant</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-2(b)</span></td><td>Prevention of cholera through hygiene</td><td><ul class="blist"><li>Provide <strong>safe drinking water</strong>; hand washing with soap</li><li>Break the <strong>faecal-oral route</strong> — use toilets; separate sewage from water supply</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-4(b)</span></td><td>Why cloth filters reduce but do not eliminate cholera</td><td><ul class="blist"><li>Filters remove <strong>copepods</strong> (which carry bacteria on surface)</li><li>Some bacteria live free in water and pass through the fabric</li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Spelling — zero tolerance</div><p>Incorrect spelling of species names = no mark. Capital first letter (Genus), lowercase second (species), italicised. Underline if handwriting.</p></div>
      </div>
    </details>

    <details open>
      <summary>Phagocytosis and the non-specific immune response</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-23-2(d)</span></td><td>Describe the process of phagocytosis</td><td><ul class="blist"><li>Phagocyte has <strong>specific surface receptors</strong> that bind to molecules on pathogen surface</li><li>Pseudopodia surround and engulf → <strong>endocytosis</strong></li><li><strong>Phagosome (phagocytic vacuole)</strong> pinches off inside cell</li><li><strong>Lysosomes</strong> fuse; release <strong>hydrolytic enzymes</strong> → digest contents</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-2(d)</span></td><td>Why phagocytes destroy infected red blood cells in malaria</td><td><ul class="blist"><li>Phagocytes have <strong>specific receptors</strong> for molecules (e.g. phosphatidylserine) appearing on infected cell membranes</li><li>Binding triggers engulfment</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-4(e)</span></td><td>Formation and effect of granulomas in TB</td><td><ul class="blist"><li><strong>Benefit:</strong> confines / isolates pathogen</li><li><strong>Harm:</strong> damages lung tissue → reduces <strong>surface area for gas exchange</strong> → fatigue, difficulty breathing</li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Key term — phagosome</div><p>Do not write "bubble", "bag", or "sac". The correct term is <strong>phagosome</strong> or phagocytic vacuole. This is a standalone mark point in every phagocytosis question.</p></div>
      </div>
    </details>

    <details open>
      <summary>Primary and secondary immune response</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-23-6(d)</span></td><td>Sequence of events in a primary immune response leading to long-term immunity</td><td><ul class="blist"><li><strong>Antigen presentation</strong> by macrophage</li><li><strong>Clonal selection:</strong> lymphocyte with complementary receptor binds antigen</li><li>T-helper cells release <strong>cytokines</strong> → stimulate lymphocyte proliferation</li><li><strong>Clonal expansion:</strong> lymphocytes divide by <strong>mitosis</strong></li><li>Differentiate into <strong>plasma cells</strong> (secrete antibodies) and <strong>memory B-cells</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">m25-22-4(a)</span></td><td>Why antibody concentration is higher after a second injection of the same antigen</td><td><ul class="blist"><li>First injection produces <strong>memory B-cells</strong> that persist in circulation</li><li>Second exposure: memory cells rapidly activated → response is <strong>faster</strong></li><li>Produces a <strong>higher concentration</strong> of antibodies</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-4(d)</span></td><td>How cytokines and cancer cell antigens stimulate the immune system</td><td><ul class="blist"><li><strong>Cytokines:</strong> stimulate clonal expansion of lymphocytes; activate macrophages</li><li><strong>Antigens:</strong> stimulate clonal selection → plasma cells → antibodies</li><li>Antibodies mark cells for <strong>T-killer cells</strong> → release <strong>perforin / granzymes</strong></li></ul></td></tr>
          </tbody>
        </table>
        <div class="tip-box"><div class="box-label">Secondary response — must say both</div><p>"Faster AND greater/higher concentration" are two separate marks. Writing only "more" or only "faster" typically loses one mark.</p></div>
      </div>
    </details>

    <details>
      <summary>Types of immunity and vaccination</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">m25-22-4(b)</span></td><td>Features of passive immunity</td><td><ul class="blist"><li>Involves injection of <strong>ready-made antibodies / immunoglobulins</strong></li><li>Provides <strong>immediate</strong> protection; effect is <strong>temporary / short-term</strong></li><li>Does <strong>not</strong> produce memory cells</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-2(c)(i)</span></td><td>Compare an oral vaccine vs passive immunisation</td><td><ul class="blist"><li><strong>Vaccine:</strong> contains antigens; artificial <em>active</em> immunity; stimulates memory cells; longer-lasting</li><li><strong>Passive:</strong> contains antibodies; artificial <em>passive</em> immunity; no memory cells; shorter duration</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-4(c)(iii)</span></td><td>Advantage of vaccines over antibiotics in preventing resistance</td><td><ul class="blist"><li>Vaccines contain <strong>multiple antigens</strong> → requires many simultaneous mutations for immune evasion</li><li>Stimulate secondary immunity → kills pathogens before new mutations arise</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Antibiotics — mode of action and resistance</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-23-5(b)</span></td><td>Mode of action of penicillin</td><td><ul class="blist"><li>Inhibits <strong>transpeptidase</strong> → prevents cross-links in <strong>peptidoglycan</strong> cell wall</li><li>Cell wall weakens → osmotic lysis</li><li>Human cells have <strong>no cell wall / no peptidoglycan</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-5(a)</span></td><td>Why erythromycin affects bacteria but not humans</td><td><ul class="blist"><li>Binds to bacterial <strong>70S ribosomes</strong> → inhibits translation</li><li>Human ribosomes are <strong>80S</strong> — binding site is absent</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-5(c)</span></td><td>Mode of action of rifampicin</td><td><ul class="blist"><li>Binds to <strong>active site of RNA polymerase</strong> → blocks <strong>transcription</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-4(c)</span></td><td>Mechanism of antibiotic resistance in bacteria</td><td><ul class="blist"><li><strong>Efflux pumps</strong> — membrane proteins that use <strong>ATP</strong> to pump antibiotics out of the cell</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-23-3(d)</span></td><td>Steps to reduce antibiotic resistance</td><td><ul class="blist"><li>Complete the <strong>full course</strong></li><li>Prescribe only when necessary — not for viral infections</li><li>Use <strong>multiple antibiotics simultaneously</strong></li></ul></td></tr>
          </tbody>
        </table>
        <div class="tip-box"><div class="box-label">Exam tip — "why not humans" questions</div><p>Name the specific structural difference. "Humans are different" scores nothing. Required answers: 70S vs 80S ribosomes; or peptidoglycan is absent in human cells.</p></div>
      </div>
    </details>

    <details>
      <summary>Monoclonal antibodies — hybridoma method and ELISA</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-23-6(a)</span></td><td>Outline the hybridoma method for monoclonal antibody production</td><td><ul class="blist"><li>Inject specific <strong>antigen</strong> into a mouse</li><li>Remove <strong>B-lymphocytes (splenocytes)</strong> from spleen</li><li>Fuse with <strong>myeloma (cancer) cells</strong> → hybridoma cells</li><li>Screen; <strong>clone</strong> selected hybridomas</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-2(c)(ii)</span></td><td>Why both B-lymphocytes and myeloma cells are needed</td><td><ul class="blist"><li><strong>B-lymphocytes:</strong> provide antibody specificity; cannot survive long in culture</li><li><strong>Myeloma cells:</strong> cancer cells; can divide <strong>continuously / indefinitely</strong> (immortal)</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-1(b)(ii)</span></td><td>Why multiple mAbs are needed to study complex molecules like pectin</td><td><ul class="blist"><li>mAbs are <strong>highly specific</strong> to one <strong>epitope / antigenic determinant</strong></li><li>Complex molecules have different shapes → require different mAbs for each region</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-6(c)</span></td><td>Use of colorimeters in a sandwich ELISA</td><td><ul class="blist"><li>Measures <strong>absorbance of light</strong> from coloured product</li><li>Absorbance is <strong>proportional to antigen concentration</strong></li><li>Removes <strong>subjective / eye-based</strong> judgement</li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Common mistake</div><p>Students state "B-cells cannot survive" but forget why myeloma cells are needed. Both halves are required: B-cells = specificity; myeloma cells = immortality / continuous division.</p></div>
      </div>
    </details>
  </section>

  <!-- T8 TRANSPORT -->
  <section id="t8" class="topic-section">
    <div class="topic-header">
      <div class="topic-num">8</div>
      <h2>Transport in Mammals &amp; Gas Exchange</h2>
      <span class="freq-badge fb-low">Tier 3</span>
    </div>

    <details open>
      <summary>Haemoglobin, gas transport, and the Bohr shift</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">s25-21-6(a)</span></td><td>Features of haemoglobin structure</td><td><ul class="blist"><li>Contains <strong>haem group</strong> with <strong>Fe²⁺</strong> that binds one O₂ molecule</li><li><strong>Quaternary structure:</strong> four polypeptide chains (2α + 2β)</li></ul></td></tr>
            <tr><td><span class="q-ref">s25-21-6(b)</span></td><td>Description and advantage of the Bohr shift</td><td><ul class="blist"><li><strong>Description:</strong> curve shifts <strong>to the right</strong> as pCO₂ increases; lower % saturation at same pO₂</li><li><strong>Mechanism:</strong> ↑CO₂ → carbonic acid → <strong>H⁺</strong> → H⁺ binds Hb → <strong>haemoglobinic acid</strong> forms → O₂ released</li><li><strong>Advantage:</strong> more O₂ delivered to <strong>actively respiring tissues</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">w25-21-2(b)</span></td><td>Effect of lower CO₂ (hyperventilation) on O₂ release from haemoglobin</td><td><ul class="blist"><li>Less CO₂ → less carbonic acid → fewer <strong>H⁺ ions</strong></li><li>Less haemoglobinic acid formed → Hb retains O₂ → <strong>decreased O₂ release</strong></li></ul></td></tr>
            <tr><td><span class="q-ref">s25-22-2(b)</span></td><td>Match substances to their roles in gas transport</td><td><ul class="blist"><li><strong>Chloride ion:</strong> chloride shift</li><li><strong>Carbaminohaemoglobin:</strong> Hb bound to CO₂</li><li><strong>Hydrogencarbonate ion:</strong> main CO₂ transport form in plasma</li><li><strong>Haemoglobinic acid:</strong> Hb bound to H⁺</li></ul></td></tr>
          </tbody>
        </table>
        <div class="warn-box"><div class="box-label">Common mistake</div><p>"The curve shifts right" alone scores very little. The full causal chain is required: CO₂ → carbonic acid → H⁺ → binds Hb → haemoglobinic acid → O₂ released. Each arrow is a mark.</p></div>
      </div>
    </details>

    <details>
      <summary>The heart — structure and cardiac cycle coordination</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">m25-22-3(a)</span></td><td>Identify valves and describe blood flow in the heart</td><td><ul class="blist"><li>Valve V = <strong>atrioventricular (bicuspid / mitral)</strong> valve</li><li>Blood flows from atria to ventricles when atrial pressure exceeds ventricular pressure</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-6(a)</span></td><td>Adaptations of the left side of the heart</td><td><ul class="blist"><li><strong>Thick muscular wall</strong> of left ventricle → pumps blood at <strong>high pressure</strong> to systemic circulation</li><li><strong>Valves</strong> prevent backflow; <strong>chordae tendineae</strong> hold valves during systole</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-22-6(a)</span></td><td>Sequence of events in the left side during the cardiac cycle</td><td><ul class="blist"><li>Blood enters via <strong>pulmonary vein</strong> → atrial systole forces blood through <strong>bicuspid valve</strong></li><li>Ventricular systole → closes bicuspid; opens <strong>aortic semilunar valve</strong> → blood into aorta</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-6(b)</span></td><td>Coordination of the heartbeat by SAN and AVN</td><td><ul class="blist"><li><strong>SAN</strong> generates impulse → spreads across atria → <strong>atria contract</strong></li><li>Delayed at <strong>AVN (~0.1s)</strong> → allows ventricles to fill</li><li>AVN → <strong>Purkyne tissue</strong> → apex → ventricles contract <strong>base-upwards</strong></li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>Blood vessels and tissue fluid</summary>
      <div class="db">
        <table class="q-table">
          <thead><tr><th>Question</th><th>What was asked</th><th>Key mark scheme points</th></tr></thead>
          <tbody>
            <tr><td><span class="q-ref">w25-21-2(c)(i)</span></td><td>Adaptations of the tunica media in the aorta</td><td><ul class="blist"><li>High proportion of <strong>elastic fibres</strong></li><li>Stretch during systole → <strong>recoil</strong> during diastole to maintain high blood pressure</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-24-5(b)</span></td><td>Relationship between vein structure and function</td><td><ul class="blist"><li><strong>Valves:</strong> prevent backflow of low-pressure blood</li><li><strong>Large lumen:</strong> minimises resistance to flow</li><li><strong>Tunica externa (collagen):</strong> prevents collapse</li></ul></td></tr>
            <tr><td><span class="q-ref">w25-23-6(c)</span></td><td>Formation and functions of tissue fluid</td><td><ul class="blist"><li><strong>Formation:</strong> high hydrostatic pressure at arteriole end → forces plasma out through endothelial pores (ultrafiltration)</li><li><strong>Function:</strong> aqueous medium for exchange of O₂, glucose, CO₂, urea between blood and cells</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- HOW TO ANSWER -->
  <section id="howto" style="scroll-margin-top:72px; margin-bottom:48px">
    <div class="sec-label">Exam technique</div>
    <div class="sec-title">How to answer each question type</div>
    <div class="answer-grid">
      <div class="answer-card"><h3>Describe / outline</h3><p style="font-size:12px;color:var(--muted);margin-bottom:8px">e.g. "Describe phagocytosis" · "Outline the hybridoma method"</p><ol><li>Use a numbered sequence — each step is typically 1 mark.</li><li>Name structures correctly: <em>phagosome</em> not "bubble"; <em>Purkyne tissue</em> not "fibres".</li><li>Do not explain why unless asked.</li><li>Count the marks and match the number of points you write.</li></ol></div>
      <div class="answer-card"><h3>Explain</h3><p style="font-size:12px;color:var(--muted);margin-bottom:8px">e.g. "Explain the Bohr shift" · "Explain why the secondary response is greater"</p><ol><li>Give a full cause → effect chain: "because… therefore… as a result…"</li><li>Quantify: "faster AND greater" — not just "more".</li><li>Link mechanism to consequence.</li><li>Avoid circular answers.</li></ol></div>
      <div class="answer-card"><h3>Compare</h3><p style="font-size:12px;color:var(--muted);margin-bottom:8px">e.g. "Compare active and passive immunity" · "Compare cilia and microvilli"</p><ol><li>Use parallel structure: "X has… whereas Y has…"</li><li>Cover both items — mentioning only one side loses the comparison mark.</li><li>Include similarity AND difference unless specified otherwise.</li><li>Match comparisons to marks available.</li></ol></div>
      <div class="answer-card"><h3>Graph / data analysis</h3><p style="font-size:12px;color:var(--muted);margin-bottom:8px">e.g. "Identify the inhibitor type" · "Suggest why activity decreases at pH 4"</p><ol><li><strong>Observe:</strong> state what you see with figures.</li><li><strong>Conclude:</strong> name the pattern or phenomenon.</li><li><strong>Explain:</strong> give the mechanism. All three steps are usually needed.</li></ol></div>
      <div class="answer-card"><h3>Calculation</h3><p style="font-size:12px;color:var(--muted);margin-bottom:8px">e.g. "Calculate actual size" · "Calculate magnification"</p><ol><li>Write the formula first.</li><li>Show the substitution with numbers.</li><li>State the answer with correct units.</li><li>Convert units before calculating (mm → µm = ×1000).</li></ol></div>
      <div class="answer-card"><h3>Drawing</h3><p style="font-size:12px;color:var(--muted);margin-bottom:8px">e.g. "Draw α-glucose ring structure" · "Sketch the inhibition curve"</p><ol><li>Label carbon numbers — examiners check C1 and C4.</li><li>Show –OH and –H explicitly at each carbon.</li><li>For curves: label axes with units; draw smoothly; show Vmax clearly.</li><li>Use a sharp pencil for easy correction.</li></ol></div>
    </div>
  </section>

  <!-- SPELLING -->
  <section id="spelling" style="scroll-margin-top:72px; margin-bottom:48px">
    <div class="sec-label">Zero tolerance</div>
    <div class="sec-title">Critical spellings</div>
    <p style="font-size:14px;color:var(--muted);margin-bottom:16px">Incorrect spelling = no mark, regardless of the rest of the answer.</p>
    <div class="spell-grid">
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Mycobacterium tuberculosis</span><span class="note">Capital M, lowercase t · must be italicised</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Vibrio cholerae</span><span class="note">Capital V, lowercase c · must be italicised</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Phagosome / phagocytic vacuole</span><span class="note">Not "bubble", "bag", or "pocket"</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Hydrogencarbonate ion</span><span class="note">Not "bicarbonate" — outdated term</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Purkyne tissue</span><span class="note">Some mark schemes accept Purkinje — check yours</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Peptide bond vs glycosidic bond</span><span class="note">Amino acids ≠ sugars. Never swap these.</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Enzyme-substrate complex (ESC)</span><span class="note">Not "compound" or "bond"</span></div></div>
      <div class="spell-item"><div class="spell-check">✓</div><div><span class="term">Mitosis (not meiosis)</span><span class="note">Clonal expansion uses mitosis — common slip under pressure</span></div></div>
    </div>
  </section>

</main>
</div>

<footer>
  <strong>AS Level Biology 9700 — 2025 Examination Series</strong> &nbsp;·&nbsp; Based on s25, w25, and m25 papers &nbsp;·&nbsp; For revision purposes only
</footer>

<script>
// Sidebar active link highlighting on scroll
const sections = document.querySelectorAll('section[id], .topic-section[id]');
const links = document.querySelectorAll('.sb-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.sb-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-60px 0px -70% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));
</script>