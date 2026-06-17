---
layout: post
title: "What ESAT Score Do You Actually Need? — A Data Analysis (2025 Entry)"
date: 2026-05-28
tags: [uk, admissions test, esat, imperial, cambridge, oxford]
categories: []
chart:
  chartjs: true
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;

    /* Imperial colours */
    --imperial-color: #003e74;
    --imperial-light: #e6edf5;
    --imperial-mid: #b0c8e0;
    --imperial-gold: #d4a017;
    --imperial-gold-light: #fdf6e3;
    --imperial-gold-mid: #f0d890;

    /* Cambridge */
    --cambridge-color: #a3c1ad;
    --cambridge-dark: #1d4d35;

    /* Oxford */
    --oxford-color: #002147;
    --oxford-gold: #c8a951;

    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #7a7a7a;
    --border: #e8e8e8;
    --bg: #ffffff;
    --bg-soft: #fafafa;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    color: var(--text-primary);
    background: var(--bg);
    line-height: 1.6;
    font-size: 15px;
  }

  /* ── TABS ─────────────────────────────────────────── */
  .tab-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fdf0fd;
    border-bottom: 2px solid #f0d0f0;
    box-shadow: 0 2px 12px rgba(204,0,204,0.06);
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
  }
  .tab-nav::-webkit-scrollbar { display: none; }
  .tab-nav-inner {
    display: inline-flex;
    gap: 0;
    padding: 0 1.5rem;
    min-width: 100%;
  }
  .tab-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    padding: 0.9rem 1.1rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
    margin-bottom: -2px;
  }
  .tab-btn:hover { color: var(--blog-accent); }
  .tab-btn.active {
    color: var(--blog-accent);
    border-bottom-color: var(--blog-accent);
  }

  /* ── PANELS ───────────────────────────────────────── */
  .tab-panel { display: none; padding: 2rem 1.5rem 3rem; max-width: 860px; margin: 0 auto; }
  .tab-panel.active { display: block; animation: fadeIn 0.25s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

  /* ── SECTION TITLES ───────────────────────────────── */
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.65rem;
    font-weight: 400;
    color: var(--text-primary);
    margin-bottom: 0.35rem;
  }
  .section-subtitle {
    font-size: 0.88rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    font-weight: 400;
  }
  .divider {
    width: 3rem;
    height: 3px;
    background: var(--blog-accent);
    border-radius: 2px;
    margin: 0.6rem 0 2rem;
  }

  /* ── OVERVIEW INTRO ───────────────────────────────── */
  .overview-intro {
    background: var(--blog-accent-light);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border: 1px solid var(--blog-accent-mid);
  }
  .overview-intro p {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.75;
  }
  .overview-intro p + p { margin-top: 0.75rem; }

  /* ── STAT CARDS ROW ───────────────────────────────── */
  .stat-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .stat-card {
    background: var(--imperial-light);
    border: 1px solid var(--imperial-mid);
    border-top: 3px solid var(--imperial-color);
    border-radius: 10px;
    padding: 1rem 1.25rem;
    text-align: center;
  }
  .stat-card-num {
    font-family: 'DM Serif Display', serif;
    font-size: 1.6rem;
    color: var(--imperial-color);
    font-weight: 400;
    display: block;
  }
  .stat-card-label {
    font-size: 0.72rem;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ── INFO BOX ─────────────────────────────────────── */
  .info-box {
    background: var(--blog-accent-light);
    border-left: 4px solid var(--blog-accent);
    border-radius: 0 10px 10px 0;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
    font-size: 0.83rem;
    color: var(--text-secondary);
    line-height: 1.65;
  }
  .info-box strong { color: var(--text-primary); }

  .warn-box {
    background: var(--imperial-gold-light);
    border-left: 4px solid var(--imperial-gold);
    border-radius: 0 10px 10px 0;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
    font-size: 0.83rem;
    color: var(--text-secondary);
    line-height: 1.65;
  }
  .warn-box strong { color: #7a5a00; }

  /* ── SCORE SCALE VISUAL ───────────────────────────── */
  .score-scale {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  .score-scale-title {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }
  .scale-bar-wrap {
    position: relative;
    height: 36px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 0.5rem;
    display: flex;
  }
  .scale-seg {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.04em;
  }
  .scale-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.68rem;
    color: var(--text-muted);
    margin-top: 0.35rem;
    padding: 0 2px;
  }
  .scale-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
  .scale-legend-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }
  .scale-legend-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ── MODULE GRID ──────────────────────────────────── */
  .module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  .module-card {
    border-radius: 10px;
    border: 1px solid var(--border);
    padding: 1rem;
    text-align: center;
  }
  .module-card.compulsory {
    background: var(--imperial-light);
    border-color: var(--imperial-mid);
    border-top: 3px solid var(--imperial-color);
  }
  .module-card.optional {
    background: var(--imperial-gold-light);
    border-color: var(--imperial-gold-mid);
    border-top: 3px solid var(--imperial-gold);
  }
  .module-icon { font-size: 1.4rem; margin-bottom: 0.4rem; }
  .module-name {
    font-weight: 700;
    font-size: 0.82rem;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
  }
  .module-tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 0.15rem 0.5rem;
    border-radius: 20px;
  }
  .module-card.compulsory .module-tag { background: var(--imperial-color); color: white; }
  .module-card.optional .module-tag { background: var(--imperial-gold); color: white; }

  /* ── UNIVERSITY PILLS ─────────────────────────────── */
  .uni-pills {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .uni-pill {
    border-radius: 8px;
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid;
  }
  .uni-pill.cambridge { background: #f0f7f3; border-color: var(--cambridge-color); color: var(--cambridge-dark); }
  .uni-pill.oxford { background: #f0f3f8; border-color: #a0b0cc; color: var(--oxford-color); }
  .uni-pill.imperial { background: var(--imperial-light); border-color: var(--imperial-mid); color: var(--imperial-color); }

  /* ── DEPT SCORE CARDS ─────────────────────────────── */
  .dept-card {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-top: 4px solid var(--imperial-color);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .dept-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .dept-card-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.15rem;
    color: var(--imperial-color);
  }
  .dept-card-meta { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem; }
  .dept-offer-rate {
    text-align: right;
    flex-shrink: 0;
  }
  .dept-offer-num {
    font-family: 'DM Serif Display', serif;
    font-size: 1.6rem;
    color: var(--imperial-color);
    line-height: 1;
  }
  .dept-offer-label { font-size: 0.68rem; color: var(--text-muted); }

  /* three-col score comparison */
  .score-compare {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .score-compare-col {
    border-radius: 8px;
    padding: 0.85rem 1rem;
    text-align: center;
    border: 1px solid var(--border);
  }
  .score-compare-col.offer { background: #eaf4f0; border-color: #a8d8c8; }
  .score-compare-col.interviewed { background: #fdf6e3; border-color: var(--imperial-gold-mid); }
  .score-compare-col.rejected { background: #fdf3f3; border-color: #f5c0c0; }
  .score-compare-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }
  .score-compare-num {
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.2rem;
  }
  .score-compare-col.offer .score-compare-num { color: #1a7a5a; }
  .score-compare-col.interviewed .score-compare-num { color: #8a6a00; }
  .score-compare-col.rejected .score-compare-num { color: #c0392b; }
  .score-compare-sub { font-size: 0.7rem; color: var(--text-muted); }
  .score-compare-pct {
    font-size: 0.75rem;
    font-weight: 600;
    margin-top: 0.35rem;
    padding: 0.15rem 0.4rem;
    border-radius: 20px;
    display: inline-block;
  }
  .score-compare-col.offer .score-compare-pct { background: #c8eada; color: #1a7a5a; }
  .score-compare-col.interviewed .score-compare-pct { background: var(--imperial-gold-mid); color: #8a6a00; }
  .score-compare-col.rejected .score-compare-pct { background: #fad0d0; color: #c0392b; }

  /* bar chart mini */
  .bar-chart-mini {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }
  .bar-chart-mini-title {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.6rem;
  }
  .mini-bar-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
    font-size: 0.75rem;
  }
  .mini-bar-label { width: 80px; color: var(--text-muted); flex-shrink: 0; text-align: right; }
  .mini-bar-track {
    flex: 1;
    height: 8px;
    background: var(--border);
    border-radius: 4px;
    overflow: hidden;
  }
  .mini-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: var(--imperial-color);
    transition: width 0.6s ease;
  }
  .mini-bar-val { width: 40px; color: var(--text-secondary); font-weight: 600; }

  /* fee breakdown table inside dept-card */
  .fee-table-wrap { overflow-x: auto; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border); margin-bottom: 0; }
  .fee-table-title {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
  }
  .fee-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.76rem;
  }
  .fee-table th {
    padding: 0.45rem 0.7rem;
    text-align: left;
    font-size: 0.67rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    border-bottom: 2px solid var(--border);
    background: var(--imperial-light);
    color: var(--imperial-color);
    white-space: nowrap;
  }
  .fee-table td {
    padding: 0.45rem 0.7rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    vertical-align: middle;
    font-size: 0.75rem;
  }
  .fee-table tr:last-child td { border-bottom: none; }
  .fee-table tr:nth-child(even) td { background: rgba(255,255,255,0.6); }
  .fee-table .row-label { font-weight: 600; color: var(--text-primary); }
  .fee-table .score-offer { color: #1a7a5a; font-weight: 700; }
  .fee-table .score-int { color: #8a6a00; font-weight: 700; }
  .fee-table .score-rej { color: #c0392b; font-weight: 700; }

  /* dept note */
  .dept-note {
    font-size: 0.76rem;
    font-style: italic;
    color: var(--text-muted);
    padding: 0.5rem 0.75rem;
    background: rgba(255,255,255,0.7);
    border-left: 2px solid var(--imperial-color);
    border-radius: 0 6px 6px 0;
    line-height: 1.5;
    margin-top: 0.75rem;
  }

  /* ── REQUIREMENTS TABLE ───────────────────────────── */
  .req-table-wrap { overflow-x: auto; margin-bottom: 2rem; }
  .req-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }
  .req-table th {
    padding: 0.65rem 0.9rem;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    border-bottom: 2px solid var(--border);
    background: var(--imperial-light);
    color: var(--imperial-color);
  }
  .req-table td {
    padding: 0.65rem 0.9rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    vertical-align: top;
    line-height: 1.5;
    font-size: 0.8rem;
  }
  .req-table tr:last-child td { border-bottom: none; }
  .req-table tr:nth-child(even) td { background: var(--bg-soft); }
  .req-table .row-label { font-weight: 600; color: var(--text-primary); }

  /* ── BENCHMARK SUMMARY TABLE ──────────────────────── */
  .bench-table-wrap { overflow-x: auto; margin-bottom: 2rem; }
  .bench-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }
  .bench-table th {
    padding: 0.65rem 0.9rem;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    border-bottom: 2px solid var(--border);
    background: var(--imperial-light);
    color: var(--imperial-color);
    white-space: nowrap;
  }
  .bench-table td {
    padding: 0.65rem 0.9rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    vertical-align: middle;
    font-size: 0.8rem;
  }
  .bench-table tr:last-child td { border-bottom: none; }
  .bench-table tr:nth-child(even) td { background: var(--bg-soft); }
  .bench-num { font-weight: 700; color: var(--imperial-color); }
  .bench-gap { font-weight: 700; color: #c0392b; }

  /* ── FLOW / STEP ──────────────────────────────────── */
  .flow-section {
    background: var(--bg-soft);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border: 1px solid var(--border);
  }
  .flow-title {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
  }
  .flow-steps { display: flex; flex-direction: column; gap: 0.6rem; }
  .flow-step-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
    align-items: start;
  }
  .flow-step-num {
    background: var(--imperial-color);
    color: white;
    font-weight: 700;
    font-size: 0.75rem;
    border-radius: 6px;
    padding: 0.35rem 0.6rem;
    text-align: center;
    white-space: normal;
    word-break: break-word;
    line-height: 1.3;
  }
  .flow-step-content {
    background: white;
    border: 1px solid var(--border);
    border-left: 3px solid var(--imperial-color);
    border-radius: 7px;
    padding: 0.55rem 0.9rem;
    font-size: 0.82rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
  .flow-step-content strong { color: var(--text-primary); }

  /* ── LOOKS-FOR GRID ───────────────────────────────── */
  .looks-for-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  .target-scores-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .looks-for-item {
    background: white;
    border: 1px solid var(--imperial-mid);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 0.81rem;
    color: var(--text-secondary);
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    line-height: 1.45;
  }
  .looks-for-item::before { content: '✓'; color: var(--imperial-color); font-weight: 700; flex-shrink: 0; }

  /* resource grid */
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  .resource-card {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.85rem 1rem;
    font-size: 0.8rem;
  }
  .resource-card-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--imperial-color);
    margin-bottom: 0.3rem;
  }
  .resource-card a { color: var(--text-secondary); text-decoration: underline; word-break: break-all; }

  /* ── H3 SUBSECTION ────────────────────────────────── */
  h3.sub {
    font-family: 'DM Serif Display', serif;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }
  p.sub-meta {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  /* ── CHART CANVAS ─────────────────────────────────── */
  .chart-wrap {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 2rem;
  }
  .chart-wrap canvas { max-height: 320px; }
  .chart-title {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
  }

  /* ── RESPONSIVE ───────────────────────────────────── */
  @media (max-width: 600px) {
    .stat-row { grid-template-columns: repeat(2, 1fr); }
    .score-compare { grid-template-columns: 1fr; }
    .flow-step-row { grid-template-columns: 1fr; }
    .flow-step-num { text-align: left; }
    .target-scores-grid { grid-template-columns: 1fr; }
  }
</style>

<!-- ── TAB NAV ──────────────────────────────────────────────── -->
<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview', this)">Overview</button>
    <button class="tab-btn" onclick="showTab('scoring', this)">The Score System</button>
    <button class="tab-btn" onclick="showTab('imperial', this)">Imperial Data</button>
    <button class="tab-btn" onclick="showTab('ucl', this)">UCL</button>
    <button class="tab-btn" onclick="showTab('summary', this)">Summary & Tips</button>
  </div>
</nav>


<!-- ══════════════════════════════════════════════════════════
     TAB 1 · OVERVIEW
══════════════════════════════════════════════════════════ -->
<div id="tab-overview" class="tab-panel active">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">Data analysis · 2025 entry · Imperial College London</p>
  <h2 class="section-title">What ESAT Score Do You Actually Need?</h2>
  <div class="divider"></div>

  <div class="overview-intro">
    <p>The Engineering and Science Admissions Test (ESAT) was introduced in 2024 as the replacement for Cambridge's NSAA and ENGAA. It is now the single admissions test for science and engineering applicants to <strong>Cambridge, Oxford, and Imperial College London</strong>. Every year, students ask the same question: <em>what score do I need?</em> The universities refuse to publish thresholds. This post is an attempt to answer that question with real data.</p>
    <p>The analysis is anchored by Imperial College London's publicly available applicant outcome dashboard for 2025 entry — the <strong>only source that links ESAT scores to actual offer/rejection outcomes by department</strong>. Cambridge and Oxford outcome data is not published; we cover what is known from other sources.</p>
  </div>

  <div class="stat-row">
    <div class="stat-card">
      <span class="stat-card-num">11,919</span>
      <span class="stat-card-label">ESAT candidates<br>2024–25 cycle</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">4</span>
      <span class="stat-card-label">Universities<br>requiring ESAT</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">4.5</span>
      <span class="stat-card-label">Median scaled score<br>(out of 9.0)</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">10%</span>
      <span class="stat-card-label">Score above 7.0<br>(scaled)</span>
    </div>
  </div>

  <h3 class="sub">Which universities and programmes require the ESAT?</h3>
  <p class="sub-meta">For 2027 entry — source: UAT-UK Course List, April 2026</p>

  <div class="uni-pills">
    <div class="uni-pill cambridge">🎓 University of Cambridge</div>
    <div class="uni-pill oxford">🎓 University of Oxford</div>
    <div class="uni-pill imperial">🎓 Imperial College London</div>
    <div class="uni-pill" style="background:#f3eef9; border-color:#c4a8e0; color:#5c2d91;">🎓 University College London (UCL)</div>
  </div>

  <div class="req-table-wrap">
    <table class="req-table">
      <thead>
        <tr>
          <th>University</th>
          <th>Programmes Requiring ESAT</th>
          <th>Modules Required</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">Cambridge</td>
          <td>Engineering · Natural Sciences · Chemical Engineering &amp; Biotechnology · Veterinary Medicine</td>
          <td>Maths 1 + 2 chosen from Biology / Chemistry / Physics / Maths 2</td>
        </tr>
        <tr>
          <td class="row-label">Oxford</td>
          <td>Engineering Science · Physics · Physics &amp; Philosophy · Biomedical Sciences (+ Foundation Year variants)</td>
          <td>Maths 1 + Maths 2 + Physics (engineering/physics) or flexible science modules (BMS)</td>
        </tr>
        <tr>
          <td class="row-label">Imperial</td>
          <td>Aeronautics · Chemical Engineering · Civil &amp; Environmental Engineering · Design Engineering · Electrical &amp; Electronic Engineering · Mechanical Engineering · Physics · Biological Sciences · Biochemistry · Biotechnology · Microbiology · Ecology &amp; Environmental Biology (life sciences from 2026 entry)</td>
          <td>For Physics and Engineering<br>Math1+Math2+Physics<br>For Life Science<br>Math1+Chemistry+Biology</td>
        </tr>
        <tr>
          <td class="row-label">UCL</td>
          <td>BEng Electronic &amp; Electrical Engineering (H600) · MEng Electronic &amp; Electrical Engineering (H601) — from 2026 entry</td>
          <td>Maths 1 + any two from Physics, Maths 2, Chemistry, Biology</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="warn-box">
    <strong>⚠ Oxford &amp; UCL note:</strong> Oxford adopted the ESAT only from 2026 entry onwards, and UCL adopted it for the first time in the 2025–26 cycle (also for 2026 entry). No applicant outcome data is yet available for either university. Cambridge does not publish score-outcome data by programme. The quantitative analysis in this report is therefore based on Imperial College's data.
  </div>

  <div class="warn-box">
    <strong>⚠ Life sciences note:</strong> Imperial's biological sciences programmes (Biological Sciences, Biochemistry, Biotechnology, Microbiology, Ecology) adopted the ESAT for the first time in the 2025–26 application cycle (2026 entry). No outcome data for these programmes is therefore available yet.
  </div>

  <div class="info-box">
    <strong>Data sources used in this report:</strong> UAT-UK ESAT Technical Report 2024–25 (September 2025) · UAT-UK Annual Report 2024–25 Candidate Data · ESAT Explanation of Results Oct 2024/Jan 2025 and Oct 2025/Jan 2026 · Imperial College London ESAT Scores Dashboard (2025 entry) · The Student Room applicant forums.
  </div>

</div>


<!-- ══════════════════════════════════════════════════════════
     TAB 2 · SCORING SYSTEM
══════════════════════════════════════════════════════════ -->
<div id="tab-scoring" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">How scores work · Raw vs scaled · Module structure</p>
  <h2 class="section-title">Understanding the ESAT Score</h2>
  <div class="divider"></div>

  <h3 class="sub">Two score formats — and why it matters</h3>
  <p class="sub-meta">The Imperial dashboard uses raw scores; UAT-UK publishes scaled scores. Don't mix them up.</p>

  <div class="score-scale">
    <div class="score-scale-title">Scaled score scale (reported to candidates, 1.0–9.0)</div>
    <div class="scale-bar-wrap">
      <div class="scale-seg" style="width:22%; background:#e74c3c;">Below avg</div>
      <div class="scale-seg" style="width:28%; background:#e67e22;">Average</div>
      <div class="scale-seg" style="width:28%; background:#2980b9;">Competitive</div>
      <div class="scale-seg" style="width:14%; background:#1d6fa4;">Strong</div>
      <div class="scale-seg" style="width:8%; background:#003e74;">Elite</div>
    </div>
    <div class="scale-labels">
      <span>1.0</span><span>3.0</span><span>4.5 (median)</span><span>7.0 (top 10%)</span><span>8.0 (top 5%)</span><span>9.0</span>
    </div>
    <div class="scale-legend">
      <div class="scale-legend-item"><div class="scale-legend-dot" style="background:#e74c3c;"></div>1.0–3.0 · Below average</div>
      <div class="scale-legend-item"><div class="scale-legend-dot" style="background:#e67e22;"></div>3.0–5.0 · Around median</div>
      <div class="scale-legend-item"><div class="scale-legend-dot" style="background:#2980b9;"></div>5.0–7.0 · Above average</div>
      <div class="scale-legend-item"><div class="scale-legend-dot" style="background:#1d6fa4;"></div>7.0–8.0 · Top 10%</div>
      <div class="scale-legend-item"><div class="scale-legend-dot" style="background:#003e74;"></div>8.0–9.0 · Top 5%</div>
    </div>
  </div>

  <div class="info-box">
    <strong>How scaling works:</strong> UAT-UK uses a Rasch IRT model. The median candidate's raw score is fixed to a scaled score of 4.5 and the 90th percentile is fixed to 7.0. A regression line maps all raw scores to the 1–9 scale, capped at 1.0 and 9.0. This means the scale is anchored to the actual cohort each year — so a scaled score of 6.0 always means the same percentile rank, regardless of whether the paper was easier or harder.
  </div>

  <h3 class="sub">Module structure</h3>
  <p class="sub-meta">Each module is 40 minutes, 27 multiple-choice questions. No calculator. No negative marking.</p>

  <div class="module-grid">
    <div class="module-card compulsory">
      <div class="module-icon">📐</div>
      <div class="module-name">Mathematics 1</div>
      <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:0.5rem;">Algebra, calculus, statistics</div>
      <span class="module-tag">Compulsory for all</span>
    </div>
    <div class="module-card optional">
      <div class="module-icon">📏</div>
      <div class="module-name">Mathematics 2</div>
      <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:0.5rem;">Further maths &amp; mechanics</div>
      <span class="module-tag">Optional / dep't</span>
    </div>
    <div class="module-card optional">
      <div class="module-icon">⚛️</div>
      <div class="module-name">Physics</div>
      <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:0.5rem;">Mechanics, waves, electricity</div>
      <span class="module-tag">Optional / dep't</span>
    </div>
    <div class="module-card optional">
      <div class="module-icon">🧪</div>
      <div class="module-name">Chemistry</div>
      <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:0.5rem;">Organic, physical, inorganic</div>
      <span class="module-tag">Optional / dep't</span>
    </div>
    <div class="module-card optional">
      <div class="module-icon">🔬</div>
      <div class="module-name">Biology</div>
      <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:0.5rem;">Cells, genetics, ecology</div>
      <span class="module-tag">Optional / dep't</span>
    </div>
  </div>

  <h3 class="sub">Score distributions by module (2024–25 cycle)</h3>
  <p class="sub-meta">Combined October 2024 and January 2025 sittings · 11,919 candidates · Source: UAT-UK</p>

  <div class="chart-wrap">
    <div class="chart-title">Score distribution — all modules (scaled 1.0–9.0)</div>
    <canvas id="chartDist"></canvas>
  </div>

  <div class="stat-row" style="grid-template-columns: repeat(3,1fr);">
    <div class="stat-card">
      <span class="stat-card-num">4.0</span>
      <span class="stat-card-label">Modal score<br>(most modules)</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">3.5</span>
      <span class="stat-card-label">Modal score<br>Maths 2 (hardest)</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">~2%</span>
      <span class="stat-card-label">Achieve 9.0<br>in any module</span>
    </div>
  </div>

  <div class="info-box">
    <strong>Key finding:</strong> Despite the scale being designed so the median is 4.5, the <em>most common</em> score across almost all modules is 4.0 — suggesting the cohort slightly underperforms the design target. Maths 2 is the hardest module, with a modal score of only 3.5. Biology showed the widest spread, with over 7% of candidates scoring 1.0 in the 2025–26 sitting.
  </div>

  <h3 class="sub">Raw score vs scaled score</h3>
  <p class="sub-meta">Imperial's dashboard shows raw scores out of 27 — here is an approximate mapping</p>

  <div class="req-table-wrap">
    <table class="req-table">
      <thead>
        <tr><th>Raw score (out of 27)</th><th>Approx. scaled score (1–9)</th><th>Percentile</th><th>Interpretation</th></tr>
      </thead>
      <tbody>
        <tr><td>0–6</td><td>1.0–2.5</td><td>Bottom ~15%</td><td>Well below average</td></tr>
        <tr><td>7–11</td><td>2.5–4.0</td><td>15–40th pct</td><td>Below average</td></tr>
        <tr><td>12–15</td><td>4.0–5.0</td><td>40–60th pct</td><td>Around median</td></tr>
        <tr><td>16–19</td><td>5.0–7.0</td><td>60–90th pct</td><td>Above average — competitive</td></tr>
        <tr><td>20–23</td><td>7.0–8.0</td><td>90–95th pct</td><td>Strong — top 10%</td></tr>
        <tr><td>24–27</td><td>8.0–9.0</td><td>Top 5%</td><td>Elite</td></tr>
      </tbody>
    </table>
  </div>

  <div class="warn-box">
    <strong>Important:</strong> The mapping above is approximate. Exact raw-to-scaled conversion varies by module and year because the Rasch model adjusts for paper difficulty. Scaled scores are <em>not</em> comparable across modules — a 6.0 in Physics does not mean the same thing as a 6.0 in Maths 2.
  </div>

</div>


<!-- ══════════════════════════════════════════════════════════
     TAB 3 · IMPERIAL DATA
══════════════════════════════════════════════════════════ -->
<div id="tab-imperial" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">Department-by-department · Offer vs rejected · Home vs Overseas · 2025 entry</p>
  <h2 class="section-title">Imperial College: Score by Outcome</h2>
  <div class="divider"></div>

  <div class="overview-intro">
    <p>Imperial is the only university that publishes anonymised ESAT score data broken down by applicant outcome. The dashboard shows, for each department, the mean test score of applicants who received an offer, were invited to interview but ultimately unsuccessful, and those not invited to interview. <strong>All scores below are raw scores out of 27 per module</strong> — not the scaled 1–9 score.</p>
    <p>Each department card now includes a breakdown by fee category (Overseas, Home WP, Home non-WP), sourced directly from Imperial's Power BI dashboard. This reveals a consistent pattern: overseas applicants who receive offers score notably higher than their Home counterparts in every department.</p>
  </div>

  <!-- ── AERONAUTICS ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">🛩 Aeronautics</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Physics · Max combined raw: 81 · Interviews held</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">20.3%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">17.5</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 5.5–6.5</div>
      </div>
      <div class="score-compare-col interviewed">
        <div class="score-compare-label">Interviewed, No Offer</div>
        <div class="score-compare-num">15.5</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 5.0–6.0</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Interviewed</div>
        <div class="score-compare-num">8.2</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 2.5–3.5</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:64.8%; background:#1a7a5a;"></div></div><div class="mini-bar-val">17.5</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Interviewed</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:57.4%; background:#d4a017;"></div></div><div class="mini-bar-val">15.5</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:30.4%; background:#c0392b;"></div></div><div class="mini-bar-val">8.2</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Interviewed, No Offer</th><th>Not Interviewed</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>23.1%</td><td class="score-offer">18.6</td><td class="score-int">18.7</td><td class="score-rej">7.2</td></tr>
          <tr><td class="row-label">Home WP</td><td>20.2%</td><td class="score-offer">15.1</td><td class="score-int">12.7</td><td class="score-rej">7.6</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>16.7%</td><td class="score-offer">16.5</td><td class="score-int">15.4</td><td class="score-rej">9.6</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">Gap between offer and non-interviewed groups is 9.3 points — one of the largest of all departments. Overseas offer holders score higher than Home non-WP (18.6 vs 16.5), consistent with stricter academic screening for international applicants.</div>
  </div>

  <!-- ── MECHANICAL ENGINEERING ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">🔧 Mechanical Engineering</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Physics · Max combined raw: 81 · Interviews held</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">16.6%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">15.8</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 5.0–6.0</div>
      </div>
      <div class="score-compare-col interviewed">
        <div class="score-compare-label">Interviewed, No Offer</div>
        <div class="score-compare-num">15.3</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 5.0–6.0</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Interviewed</div>
        <div class="score-compare-num">10.0</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 3.5–4.5</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:58.5%; background:#1a7a5a;"></div></div><div class="mini-bar-val">15.8</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Interviewed</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:56.7%; background:#d4a017;"></div></div><div class="mini-bar-val">15.3</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:37%; background:#c0392b;"></div></div><div class="mini-bar-val">10.0</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Interviewed, No Offer</th><th>Not Interviewed</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>14.2%</td><td class="score-offer">16.8</td><td class="score-int">19.1</td><td class="score-rej">10.3</td></tr>
          <tr><td class="row-label">Home WP</td><td>24.2%</td><td class="score-offer">14.1</td><td class="score-int">12.8</td><td class="score-rej">8.8</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>18.7%</td><td class="score-offer">15.1</td><td class="score-int">15.1</td><td class="score-rej">10.0</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">The score gap between offer holders and interviewed-but-rejected is very narrow (0.5 points overall), suggesting the interview carries significant weight. Note the unusual overseas pattern: interviewed-but-rejected overseas applicants averaged higher (19.1) than those who received offers (16.8) — interview performance appears decisive for this group.</div>
  </div>

  <!-- ── EEE ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">⚡ Electrical &amp; Electronic Engineering</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Physics · Max combined raw: 81 · Interviews held</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">26.3%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">16.6</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 5.5–6.5</div>
      </div>
      <div class="score-compare-col interviewed">
        <div class="score-compare-label">Interviewed, No Offer</div>
        <div class="score-compare-num">11.8</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 4.0–5.0</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Interviewed</div>
        <div class="score-compare-num">11.2</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 4.0–5.0</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:61.5%; background:#1a7a5a;"></div></div><div class="mini-bar-val">16.6</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Interviewed</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:43.7%; background:#d4a017;"></div></div><div class="mini-bar-val">11.8</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:41.5%; background:#c0392b;"></div></div><div class="mini-bar-val">11.2</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Interviewed, No Offer</th><th>Not Interviewed</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>18.0%</td><td class="score-offer">19.8</td><td class="score-int">14.0</td><td class="score-rej">11.7</td></tr>
          <tr><td class="row-label">Home WP</td><td>46.0%</td><td class="score-offer">12.2</td><td class="score-int">11.2</td><td class="score-rej">1.1</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>64.0%</td><td class="score-offer">14.2</td><td class="score-int">11.3</td><td class="score-rej">2.0</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">The starkest Home/Overseas divide in this guide. Home non-WP offer rate is 64.0% vs only 18.0% for Overseas. Overseas offer holders averaged 19.8/27 — nearly 6 points above Home non-WP offer holders (14.2). Overseas applicants who are not interviewed had a low mean score of 11.7, suggesting the ESAT is an effective screen for this group.</div>
  </div>

  <!-- ── PHYSICS ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">🔬 Physics</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Physics · Max combined raw: 81 · No interview stage</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">37.1%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare" style="grid-template-columns:1fr 1fr;">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">17.5</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 5.5–6.5</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Interviewed / Rejected</div>
        <div class="score-compare-num">10.4</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 3.5–4.5</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:64.8%; background:#1a7a5a;"></div></div><div class="mini-bar-val">17.5</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:38.5%; background:#c0392b;"></div></div><div class="mini-bar-val">10.4</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27 · no interview stage</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Not Interviewed / Rejected</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>31.4%</td><td class="score-offer">19.4</td><td class="score-rej">11.1</td></tr>
          <tr><td class="row-label">Home WP</td><td>58.3%</td><td class="score-offer">14.0</td><td class="score-rej">5.7</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>41.4%</td><td class="score-offer">16.2</td><td class="score-rej">9.8</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">No interview stage — the ESAT does the final sorting directly. Overseas offer holders average 19.4/27, the highest of any group across all departments. Home WP students show a notably higher offer rate (58.3%) vs Home non-WP (41.4%), reflecting contextual admissions. Overseas applicants face a much lower offer rate (31.4%) and require significantly higher scores.</div>
  </div>

  <!-- ── CHEMICAL ENGINEERING ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">⚗️ Chemical Engineering</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Chemistry · Max combined raw: 81 · Interviews held</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">43.5%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">14.2</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 4.5–5.5</div>
      </div>
      <div class="score-compare-col interviewed">
        <div class="score-compare-label">Interviewed, No Offer</div>
        <div class="score-compare-num">14.2</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 4.5–5.5</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Interviewed</div>
        <div class="score-compare-num">5.9</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 2.0–3.0</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:52.6%; background:#1a7a5a;"></div></div><div class="mini-bar-val">14.2</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Interviewed</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:52.6%; background:#d4a017;"></div></div><div class="mini-bar-val">14.2</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:21.9%; background:#c0392b;"></div></div><div class="mini-bar-val">5.9</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Interviewed, No Offer</th><th>Not Interviewed</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>38.8%</td><td class="score-offer">15.4</td><td class="score-int">16.7</td><td class="score-rej">8.1</td></tr>
          <tr><td class="row-label">Home WP</td><td>40.8%</td><td class="score-offer">12.2</td><td class="score-int">10.8</td><td class="score-rej">5.4</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>54.9%</td><td class="score-offer">12.9</td><td class="score-int">11.3</td><td class="score-rej">5.7</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">The overall offer and interviewed means are identical at 14.2 — the interview drives the final decision, not the ESAT score. Overseas applicants need higher scores to clear the interview bar (15.4 offer mean vs 12.9 for Home non-WP). The very low not-interviewed mean (5.9) confirms the ESAT acts as a hard filter before interview.</div>
  </div>

  <!-- ── CIVIL & ENV ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">🏗 Civil &amp; Environmental Engineering</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Physics · Max combined raw: 81 · No interview stage</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">58.0%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare" style="grid-template-columns:1fr 1fr;">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">12.6</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 4.0–5.0</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Offered</div>
        <div class="score-compare-num">3.0</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 1.5–2.5</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:46.7%; background:#1a7a5a;"></div></div><div class="mini-bar-val">12.6</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:11.1%; background:#c0392b;"></div></div><div class="mini-bar-val">3.0</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27 · no interview stage</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Not Offered</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>57.1%</td><td class="score-offer">13.0</td><td class="score-rej">2.7</td></tr>
          <tr><td class="row-label">Home WP</td><td>45.5%</td><td class="score-offer">11.8</td><td class="score-rej">2.9</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>65.2%</td><td class="score-offer">12.0</td><td class="score-rej">3.9</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">The largest offer-vs-rejection gap of all departments (9.6 points). Unlike other departments, Overseas offer rates are comparable to Home here (57.1%), and offer holder scores across all groups are similar (~12–13). The ESAT is the primary filter with no interview — rejected applicants across all groups averaged around 3.0/27, well below the cohort median.</div>
  </div>

  <!-- ── DESIGN ENGINEERING ── -->
  <div class="dept-card">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title">✏️ Design Engineering</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 only · Max combined raw: 54 · Interviews held</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num">24.5%</div>
        <div class="dept-offer-label">overall offer rate</div>
      </div>
    </div>
    <div class="score-compare">
      <div class="score-compare-col offer">
        <div class="score-compare-label">Offer</div>
        <div class="score-compare-num">8.9</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 3.0–4.0</div>
      </div>
      <div class="score-compare-col interviewed">
        <div class="score-compare-label">Interviewed, No Offer</div>
        <div class="score-compare-num">11.4</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 4.0–5.0</div>
      </div>
      <div class="score-compare-col rejected">
        <div class="score-compare-label">Not Interviewed</div>
        <div class="score-compare-num">7.3</div>
        <div class="score-compare-sub">mean raw /27</div>
        <div class="score-compare-pct">≈ scaled 2.5–3.5</div>
      </div>
    </div>
    <div class="bar-chart-mini">
      <div class="bar-chart-mini-title">Mean score by applicant group (raw /27)</div>
      <div class="mini-bar-row"><div class="mini-bar-label">Offer</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:33%; background:#1a7a5a;"></div></div><div class="mini-bar-val">8.9</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Interviewed</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:42.2%; background:#d4a017;"></div></div><div class="mini-bar-val">11.4</div></div>
      <div class="mini-bar-row"><div class="mini-bar-label">Rejected</div><div class="mini-bar-track"><div class="mini-bar-fill" style="width:27%; background:#c0392b;"></div></div><div class="mini-bar-val">7.3</div></div>
    </div>
    <div class="fee-table-wrap">
      <div class="fee-table-title">Breakdown by fee category · mean raw score /27</div>
      <table class="fee-table">
        <thead>
          <tr><th>Fee category</th><th>Offer rate</th><th>Successful</th><th>Interviewed, No Offer</th><th>Not Interviewed</th></tr>
        </thead>
        <tbody>
          <tr><td class="row-label">Overseas</td><td>15.7%</td><td class="score-offer">11.1</td><td class="score-int">11.9</td><td class="score-rej">7.7</td></tr>
          <tr><td class="row-label">Home WP</td><td>90.7%</td><td class="score-offer">7.0</td><td class="score-int">7.3</td><td class="score-rej">4.0</td></tr>
          <tr><td class="row-label">Home non-WP</td><td>34.7%</td><td class="score-offer">7.3</td><td class="score-int">7.4</td><td class="score-rej">6.2</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note">⚠ The most unusual pattern: offer holders have a lower mean ESAT score (8.9) than interviewed-but-rejected applicants (11.4). The fee category breakdown confirms this: Home WP offer holders averaged just 7.0/27. Portfolio and interview performance dominate here. The extraordinary Home WP offer rate (90.7%) reflects strong contextual widening participation policy for this programme.</div>
  </div>

  <!-- summary chart -->
  <h3 class="sub" style="margin-top:2.5rem;">Cross-department comparison</h3>
  <p class="sub-meta">Mean raw score (out of 27) by outcome, all Imperial departments with data</p>

  <div class="chart-wrap">
    <div class="chart-title">Offer vs not-interviewed mean scores by department</div>
    <canvas id="chartDeptComp"></canvas>
  </div>

</div>


<!-- ══════════════════════════════════════════════════════════
     TAB 4 · UCL
══════════════════════════════════════════════════════════ -->
<div id="tab-ucl" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">University College London · Electronic &amp; Electrical Engineering · 2026 entry</p>
  <h2 class="section-title">UCL: The Newest Adopter</h2>
  <div class="divider"></div>

  <div class="overview-intro">
    <p>UCL adopted the ESAT for the first time in the <strong>2025–26 admissions cycle (2026 entry)</strong>, making it the fourth and most recent university to require the test. Unlike Cambridge, Oxford, and Imperial — where the ESAT covers a broad range of STEM programmes — UCL currently requires it for just <strong>two programmes</strong>: BEng and MEng Electronic &amp; Electrical Engineering (H600/H601).</p>
    <p>Because this is UCL's first year using the ESAT, <strong>no applicant outcome data is available yet</strong>. There is no published dashboard equivalent to Imperial's, no FOI data, and no meaningful student-reported scores specific to UCL. What we can set out is how UCL intends to use the score and what reasonable benchmarks suggest.</p>
  </div>

  <div class="stat-row" style="grid-template-columns: repeat(3,1fr);">
    <div class="stat-card">
      <span class="stat-card-num">2</span>
      <span class="stat-card-label">Programmes requiring ESAT<br>(H600 BEng · H601 MEng)</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">2026</span>
      <span class="stat-card-label">First entry year<br>using ESAT</span>
    </div>
    <div class="stat-card">
      <span class="stat-card-num">None</span>
      <span class="stat-card-label">Interviews held<br>for these programmes</span>
    </div>
  </div>

  <h3 class="sub">How UCL uses the ESAT</h3>
  <p class="sub-meta">No interviews — the ESAT feeds directly into the final offer decision</p>

  <div class="flow-section">
    <div class="flow-title">UCL EEE admissions process →</div>
    <div class="flow-steps">
      <div class="flow-step-row">
        <div class="flow-step-num">Why adopted</div>
        <div class="flow-step-content"><strong>Differentiation problem:</strong> UCL adopted the ESAT because EEE receives a large number of applications from candidates with very high predicted grades (A*A*A typical offer). Predicted grades alone are no longer sufficient to distinguish between applicants, so the ESAT provides an additional quantitative signal.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num">No interview</div>
        <div class="flow-step-content"><strong>Final decision role:</strong> Unlike Cambridge (where ESAT gates the interview) and Imperial EEE (where interviews are also held), UCL EEE has no interview stage. This means the ESAT score feeds directly into the final offer decision — it does not simply act as a shortlisting filter. This gives the ESAT more direct weight per application than at universities with interviews.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num">Modules</div>
        <div class="flow-step-content"><strong>Maths 1 + any two:</strong> UCL requires Maths 1 plus any two from Physics, Maths 2, Chemistry, and Biology. In practice, applicants to EEE will typically choose Maths 2 and Physics as the two optional modules, consistent with the course content and with what Imperial EEE requires.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num">Holistic</div>
        <div class="flow-step-content"><strong>Combined with other factors:</strong> UCL states the ESAT is used "as additional information in conjunction with other aspects of the UCAS application including predicted/achieved A Level grades (or equivalent), the personal statement and UCAS reference." No minimum threshold or weighting formula has been published.</div>
      </div>
    </div>
  </div>

  <h3 class="sub">Modules required vs Imperial EEE</h3>
  <p class="sub-meta">Both departments require the same core combination — scores are directly comparable</p>

  <div class="req-table-wrap">
    <table class="req-table">
      <thead>
        <tr><th>Programme</th><th>Maths 1</th><th>Maths 2</th><th>Physics</th><th>Interview?</th><th>No-offer pathway</th></tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">UCL EEE (H600/H601)</td>
          <td>✅ Required</td>
          <td>✅ Recommended</td>
          <td>✅ Recommended</td>
          <td>No</td>
          <td>ESAT → direct offer/reject</td>
        </tr>
        <tr>
          <td class="row-label">Imperial EEE (H600/H601)</td>
          <td>✅ Required</td>
          <td>✅ Required</td>
          <td>✅ Required</td>
          <td>Yes</td>
          <td>ESAT → interview → offer/reject</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sub">What score should UCL EEE applicants target?</h3>
  <p class="sub-meta">Derived from Imperial EEE 2025 data and UAT-UK cohort benchmarks — no UCL-specific data available yet</p>

  <div class="warn-box">
    <strong>⚠ No UCL outcome data exists yet.</strong> The benchmarks below are inferred from (a) Imperial's published EEE score data for 2025 entry, which uses the same modules, and (b) UAT-UK's overall cohort statistics. They should be treated as reasonable starting estimates, not confirmed thresholds.
  </div>

  <div class="dept-card" style="border-top-color: #5c2d91;">
    <div class="dept-card-header">
      <div>
        <div class="dept-card-title" style="color:#5c2d91;">⚡ UCL — Electronic &amp; Electrical Engineering</div>
        <div class="dept-card-meta">Modules: Maths 1 + Maths 2 + Physics (recommended) · No interview · First year using ESAT</div>
      </div>
      <div class="dept-offer-rate">
        <div class="dept-offer-num" style="color:#5c2d91;">N/A</div>
        <div class="dept-offer-label">offer rate (not published)</div>
      </div>
    </div>

    <div class="req-table-wrap" style="margin-bottom:0.75rem;">
      <table class="req-table">
        <thead>
          <tr><th>Score band (scaled)</th><th>Raw approx. /27</th><th>Interpretation for UCL EEE</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Below 4.0</strong></td><td>&lt;12</td><td>High risk — well below cohort median; likely insufficient without exceptional grades/PS</td></tr>
          <tr><td><strong>4.0–5.5</strong></td><td>12–15</td><td>Below competitive — around the median of Imperial EEE rejected applicants (11.2/27)</td></tr>
          <tr><td><strong>5.5–7.0</strong></td><td>15–19</td><td>Competitive range — around Imperial EEE offer-holder mean (16.6/27); aim for this minimum</td></tr>
          <tr><td><strong>7.0+</strong></td><td>19+</td><td>Strong — top 10% of all ESAT candidates; above Imperial EEE offer-holder mean</td></tr>
          <tr><td><strong>8.0+</strong></td><td>22+</td><td>Elite — top 5%; significantly strengthens application</td></tr>
        </tbody>
      </table>
    </div>
    <div class="dept-note" style="border-left-color:#5c2d91;">Since UCL has no interview stage, the ESAT carries more direct weight than at Imperial EEE. A reasonable working target is <strong>scaled 6.0+ across all three modules</strong>, with 7.0+ putting you in a strong position. Overseas applicants should note that Imperial EEE overseas offer holders averaged 19.8/27 — target at least this level.</div>
  </div>

  <h3 class="sub">Context: UCL vs Imperial EEE at a glance</h3>
  <p class="sub-meta">How the two most comparable programmes compare</p>

  <div class="req-table-wrap">
    <table class="req-table">
      <thead>
        <tr><th>Factor</th><th>UCL EEE</th><th>Imperial EEE</th></tr>
      </thead>
      <tbody>
        <tr><td class="row-label">ESAT since</td><td>2026 entry (year 1)</td><td>2025 entry (year 1 — one cycle of data available)</td></tr>
        <tr><td class="row-label">Modules</td><td>Maths 1 + 2 of choice</td><td>Maths 1 + Maths 2 + Physics</td></tr>
        <tr><td class="row-label">Interview</td><td>No</td><td>Yes</td></tr>
        <tr><td class="row-label">ESAT role</td><td>Final decision (no interview buffer)</td><td>Shortlisting for interview; interview resolves final offer</td></tr>
        <tr><td class="row-label">Mean offer score (Imperial 2025)</td><td>No data</td><td>16.6/27 raw (≈ scaled 5.5–6.5); overseas: 19.8/27</td></tr>
        <tr><td class="row-label">Overall offer rate</td><td>Not published</td><td>26.3%</td></tr>
        <tr><td class="row-label">Outcome data available</td><td>❌ None yet</td><td>✅ Imperial dashboard (2025 entry)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="info-box">
    <strong>Watch this space:</strong> UCL's 2026 entry cycle will complete in spring 2026. Student-reported scores for UCL EEE will begin to emerge on The Student Room and Reddit from summer 2026 onwards. Until then, the Imperial EEE 2025 data remains the best available proxy for calibrating UCL targets.
  </div>

</div>


<!-- ══════════════════════════════════════════════════════════
     TAB 5 · SUMMARY & TIPS
══════════════════════════════════════════════════════════ -->
<div id="tab-summary" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">Key findings · Takeaways for applicants</p>
  <h2 class="section-title">Summary &amp; Takeaways</h2>
  <div class="divider"></div>

  <h3 class="sub">Cross-department benchmark table</h3>
  <p class="sub-meta">Imperial College London — 2025 entry · Raw scores out of 27 · Approximate scaled equivalents in brackets</p>

  <div class="bench-table-wrap">
    <table class="bench-table">
      <thead>
        <tr>
          <th>Department</th>
          <th>Offer rate</th>
          <th>Mean score — Offer</th>
          <th>Mean score — Rejected</th>
          <th>Gap</th>
          <th>Interview?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">Aeronautics</td>
          <td>20.3%</td>
          <td class="bench-num">17.5 <span style="font-weight:400;color:var(--text-muted);">(≈5.5–6.5)</span></td>
          <td>8.2</td>
          <td class="bench-gap">+9.3</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td class="row-label">Mechanical Eng</td>
          <td>16.6%</td>
          <td class="bench-num">15.8 <span style="font-weight:400;color:var(--text-muted);">(≈5.0–6.0)</span></td>
          <td>10.0</td>
          <td class="bench-gap">+5.8</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td class="row-label">Elec &amp; Elec Eng</td>
          <td>26.3%</td>
          <td class="bench-num">16.6 <span style="font-weight:400;color:var(--text-muted);">(≈5.5–6.5)</span></td>
          <td>11.2</td>
          <td class="bench-gap">+5.4</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td class="row-label">Physics</td>
          <td>37.1%</td>
          <td class="bench-num">17.5 <span style="font-weight:400;color:var(--text-muted);">(≈5.5–6.5)</span></td>
          <td>10.4</td>
          <td class="bench-gap">+7.1</td>
          <td>No</td>
        </tr>
        <tr>
          <td class="row-label">Chemical Eng</td>
          <td>43.5%</td>
          <td class="bench-num">14.2 <span style="font-weight:400;color:var(--text-muted);">(≈4.5–5.5)</span></td>
          <td>5.9</td>
          <td class="bench-gap">+8.3</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td class="row-label">Civil &amp; Env Eng</td>
          <td>58.0%</td>
          <td class="bench-num">12.6 <span style="font-weight:400;color:var(--text-muted);">(≈4.0–5.0)</span></td>
          <td>3.0</td>
          <td class="bench-gap">+9.6</td>
          <td>No</td>
        </tr>
        <tr>
          <td class="row-label">Design Eng</td>
          <td>24.5%</td>
          <td class="bench-num">8.9 <span style="font-weight:400;color:var(--text-muted);">(≈3.0–4.0)</span></td>
          <td>7.3</td>
          <td class="bench-gap">+1.6</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sub">Key findings</h3>
  <p class="sub-meta">What the data tells us</p>

  <div class="flow-section">
    <div class="flow-steps">
      <div class="flow-step-row">
        <div class="flow-step-num" style="background:#1a7a5a;">Finding 1</div>
        <div class="flow-step-content"><strong>The score gap between offer holders and rejections is large and consistent.</strong> Across all Imperial departments, offer holders score 5–10 raw points higher than those not invited to interview. This represents roughly 2–3 scaled score points, or moving from the 50th to the 80th percentile.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num" style="background:#1a7a5a;">Finding 2</div>
        <div class="flow-step-content"><strong>For departments with interviews, the ESAT gates the interview — not the offer.</strong> In Aeronautics, Mechanical Engineering, and Chemical Engineering, the ESAT score for those interviewed-but-rejected is close to offer holders. The interview resolves the final decision. Departments without interviews (Civil Eng, Physics) show the ESAT doing more of the final sorting.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num" style="background:#1a7a5a;">Finding 3</div>
        <div class="flow-step-content"><strong>Overseas applicants consistently need higher scores.</strong> In every department, overseas applicants who received offers averaged higher ESAT scores than Home counterparts. The gap is largest in EEE (19.8 vs 14.2 for Home non-WP) and Physics (19.4 vs 16.2). This reflects stricter academic screening for international applicants across the board.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num" style="background:#1a7a5a;">Finding 4</div>
        <div class="flow-step-content"><strong>Design Engineering is the outlier.</strong> Offer holders have a lower mean ESAT score (8.9) than interviewed-but-rejected applicants (11.4). Portfolio and creative skills dominate, with the ESAT serving only a basic gatekeeping role. Home WP students had a 90.7% offer rate.</div>
      </div>
      <div class="flow-step-row">
        <div class="flow-step-num" style="background:#1a7a5a;">Finding 5</div>
        <div class="flow-step-content"><strong>No official threshold exists — but the data reveals a practical one.</strong> Score distributions show virtually no offers below a raw score of ~10/27 (≈ scaled 3.5–4.0) in competitive departments. For overseas applicants the practical floor is higher still.</div>
      </div>
    </div>
  </div>

  <h3 class="sub">Practical target scores</h3>
  <p class="sub-meta">Derived from Imperial 2025 data and UAT-UK benchmarks — scaled score equivalents</p>

  <div class="looks-for-grid target-scores-grid">
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Cambridge Engineering / Natural Sciences — aim for <strong>6.5–7.5+ average</strong> across modules</div>
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Oxford Physics / Engineering Science — aim for <strong>7.0+</strong> (first year data; benchmark may adjust)</div>
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Imperial Aeronautics / Physics — aim for <strong>6.0–7.0+</strong> (scaled); overseas: raw ~19+/27</div>
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Imperial EEE — aim for <strong>5.5–7.0</strong> (scaled); overseas offer holders averaged 19.8/27</div>
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Imperial Mechanical Eng — aim for <strong>5.5–7.0</strong> (scaled); overseas: raw ~17+/27</div>
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Imperial Chemical Engineering — aim for <strong>5.0–6.0</strong> (scaled); overseas offer holders averaged 15.4/27</div>
    <div class="looks-for-item" style="border-color:#a8d8c8; border-left-color:#1a7a5a;">Imperial Civil &amp; Env Eng — aim for <strong>4.5–5.5</strong> (scaled); scores similar across Home and Overseas</div>
    <div class="looks-for-item" style="border-color:#b0c8e0; border-left-color:#5c2d91;">UCL EEE (H600/H601) — aim for <strong>6.0–7.0+</strong>; no interview means ESAT has direct weight; overseas: target 19+/27</div>
    <div class="looks-for-item" style="border-color:#f0d890; border-left-color:#d4a017;">Imperial Design Engineering — ESAT is less decisive; portfolio &amp; interview matter more</div>
    <div class="looks-for-item" style="border-color:#f0d890; border-left-color:#d4a017;">Imperial Life Sciences (Biosciences) — first year of ESAT requirement; no benchmark data yet</div>
  </div>

  <div class="info-box">
    <strong>Remember:</strong> All scores shown are means — half of successful applicants scored below these figures. The ESAT is always considered holistically alongside predicted grades (A*A*A typically required), personal statement, and interview (where applicable). A strong score does not guarantee an offer. A moderate score does not prevent one. Use these benchmarks as directional targets, not thresholds.
  </div>

  <h3 class="sub">Data sources &amp; links</h3>
  <p class="sub-meta">All sources used in this analysis</p>

  <div class="resource-grid">
    <div class="resource-card">
      <div class="resource-card-label">UAT-UK Technical Report 2024–25</div>
      <a href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2025/09/24125922/UAT-UK-ESAT-Technical-Report-2024-25-Final.pdf" target="_blank">PDF — full statistical report</a>
    </div>
    <div class="resource-card">
      <div class="resource-card-label">UAT-UK Candidate Data Report</div>
      <a href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2025/09/24125925/UAT-UK-Annual-Report-2024-25-Candidate-Data-Final.pdf" target="_blank">PDF — candidate numbers &amp; demographics</a>
    </div>
    <div class="resource-card">
      <div class="resource-card-label">ESAT Explanation of Results 2024–25</div>
      <a href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2025/02/19114340/ESAT_Explanation_of_Results-October2024_and_January2025.pdf" target="_blank">PDF — score distribution charts</a>
    </div>
    <div class="resource-card">
      <div class="resource-card-label">ESAT Explanation of Results 2025–26</div>
      <a href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2026/02/11111430/ESAT_Explanation_of_Results-October2025_and_January2026.pdf" target="_blank">PDF — most recent cycle</a>
    </div>
    <div class="resource-card">
      <div class="resource-card-label">Imperial Score Dashboard</div>
      <a href="https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/understanding-your-esat-and-tmua-scores/" target="_blank">Interactive dashboard — 2025 entry</a>
    </div>
    <div class="resource-card">
      <div class="resource-card-label">UAT-UK Course List 2027 Entry</div>
      <a href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2026/04/01172717/Course_List_2027_Entry_Final.pdf" target="_blank">PDF — all programmes requiring ESAT</a>
    </div>
  </div>

  <div class="info-box">
    <strong>All information current as of May 2026.</strong> ESAT requirements, score scales, and programme lists can change between admissions cycles. Always verify on the official UAT-UK website (esat-tmua.ac.uk) and the relevant university course pages before applying.
  </div>

</div>


<!-- ── CHARTS SCRIPT ──────────────────────────────────────── -->
<script>
(function() {
  function initCharts() {
    if (typeof Chart === 'undefined') {
      setTimeout(initCharts, 100);
      return;
    }

  /* ── Chart 1: Score distribution by module ── */
  new Chart(document.getElementById('chartDist'), {
    type: 'line',
    data: {
      labels: ['1.0','1.5','2.0','2.5','3.0','3.5','4.0','4.5','5.0','5.5','6.0','6.5','7.0','7.5','8.0','8.5','9.0'],
      datasets: [
        {
          label: 'Maths 1',
          data: [3,2,3,4,6,8,14,10,10,9,8,7,6,4,3,1,2],
          borderColor: '#003e74', backgroundColor: 'rgba(0,62,116,0.07)',
          tension: 0.4, pointRadius: 3, fill: true
        },
        {
          label: 'Maths 2',
          data: [4,3,5,6,9,14,13,9,8,7,6,5,4,3,2,0,2],
          borderColor: '#d4a017', backgroundColor: 'rgba(212,160,23,0.07)',
          tension: 0.4, pointRadius: 3, fill: true
        },
        {
          label: 'Physics',
          data: [3,2,4,5,7,9,13,11,10,9,7,6,5,4,2,1,2],
          borderColor: '#2980b9', backgroundColor: 'rgba(41,128,185,0.07)',
          tension: 0.4, pointRadius: 3, fill: true
        },
        {
          label: 'Chemistry',
          data: [4,3,5,7,11,8,12,10,9,8,6,5,4,3,2,0,3],
          borderColor: '#27ae60', backgroundColor: 'rgba(39,174,96,0.07)',
          tension: 0.4, pointRadius: 3, fill: true
        },
        {
          label: 'Biology',
          data: [7,3,4,5,7,8,12,10,9,8,7,6,5,3,2,0,4],
          borderColor: '#8e44ad', backgroundColor: 'rgba(142,68,173,0.07)',
          tension: 0.4, pointRadius: 3, fill: true
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: { callbacks: { label: function(c) { return c.dataset.label + ': ~' + c.raw + '%'; } } }
      },
      scales: {
        x: { title: { display: true, text: 'Scaled score', font: { size: 11 } }, grid: { color: '#f0f0f0' } },
        y: { title: { display: true, text: '% of candidates', font: { size: 11 } }, grid: { color: '#f0f0f0' },
             ticks: { callback: function(v) { return v + '%'; } } }
      }
    }
  });

  /* ── Chart 2: Dept comparison ── */
  new Chart(document.getElementById('chartDeptComp'), {
    type: 'bar',
    data: {
      labels: ['Aeronautics', 'Mech Eng', 'EEE', 'Physics', 'Chem Eng', 'Civil Eng', 'Design Eng'],
      datasets: [
        {
          label: 'Offer holders',
          backgroundColor: '#1a7a5a',
          data: [17.5, 15.8, 16.6, 17.5, 14.2, 12.6, 8.9]
        },
        {
          label: 'Not interviewed / rejected',
          backgroundColor: '#e8c0c0',
          data: [8.2, 10.0, 11.2, 10.4, 5.9, 3.0, 7.3]
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: {
        x: { grid: { display: false } },
        y: {
          title: { display: true, text: 'Mean raw score (out of 27)', font: { size: 11 } },
          max: 27, grid: { color: '#f0f0f0' }
        }
      }
    }
  });

  } // end initCharts

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
  } else {
    initCharts();
  }
})();
</script>

<!-- ── TAB SCRIPT ─────────────────────────────────────────── -->
<script>
  function showTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p) {
      p.classList.remove('active');
      p.style.display = 'none';
    });
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    var panel = document.getElementById('tab-' + id);
    if (panel) {
      panel.classList.add('active');
      panel.style.display = 'block';
    }
    if (btn) btn.classList.add('active');
    if (typeof Chart !== 'undefined') {
      setTimeout(function() {
        Object.values(Chart.instances).forEach(function(c) { c.resize(); });
      }, 50);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.addEventListener('DOMContentLoaded', function() {
    var first = document.getElementById('tab-overview');
    if (first) { first.style.display = 'block'; }
  });
</script>