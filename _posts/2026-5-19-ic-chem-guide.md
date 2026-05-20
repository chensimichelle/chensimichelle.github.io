---
layout: post
title: "Imperial College London - Chemistry, Chemical Engineering, Materials & Biomedical Engineering Guide"
date: 2026-05-19
tags: [uk, program introduction]
categories: []
chart:
  chartjs: true
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;
    --chem-color: #1a5fa8;
    --chem-light: #e8f0fb;
    --chem-mid: #b8d0f0;
    --chemeng-color: #8a5a00;
    --chemeng-light: #fdf3e0;
    --chemeng-mid: #f0d090;
    --mat-color: #5a3080;
    --mat-light: #f0eaf8;
    --mat-mid: #c8a8e8;
    --bioe-color: #0d7a55;
    --bioe-light: #e8f5ee;
    --bioe-mid: #a8d8bc;
    --imperial-color: #003e74;
    --imperial-light: #e6edf5;
    --imperial-mid: #b0c8e0;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #7a7a7a;
    --border: #e8e8e8;
    --bg: #ffffff;
    --bg-soft: #fafafa;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; color: var(--text-primary); background: var(--bg); line-height: 1.6; font-size: 15px; }
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
  .overview-intro { background: var(--blog-accent-light); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid var(--blog-accent-mid); }
  .overview-intro p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.75; }
  .overview-intro p + p { margin-top: 0.75rem; }
  .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .stat-card { background: var(--imperial-light); border: 1px solid var(--imperial-mid); border-top: 3px solid var(--imperial-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--imperial-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }
  .prog-quartet { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .prog-card { border-radius: 12px; padding: 1.25rem; border: 1px solid var(--border); position: relative; overflow: hidden; }
  .prog-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-card.chem { background:var(--chem-light); } .prog-card.chem::before { background:var(--chem-color); }
  .prog-card.chemeng { background:var(--chemeng-light); } .prog-card.chemeng::before { background:var(--chemeng-color); }
  .prog-card.mat { background:var(--mat-light); } .prog-card.mat::before { background:var(--mat-color); }
  .prog-card.bioe { background:var(--bioe-light); } .prog-card.bioe::before { background:var(--bioe-color); }
  .prog-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .chem .prog-card-label { color:var(--chem-color); } .chemeng .prog-card-label { color:var(--chemeng-color); }
  .mat .prog-card-label { color:var(--mat-color); } .bioe .prog-card-label { color:var(--bioe-color); }
  .prog-card-name { font-family:'DM Serif Display',serif; font-size:1rem; color:var(--text-primary); margin-bottom:0.15rem; }
  .prog-card-meta { font-size:0.72rem; color:var(--text-muted); margin-bottom:0.75rem; }
  .prog-card-stats { display:grid; grid-template-columns:1fr 1fr; gap:0.35rem; }
  .prog-stat { background:white; border-radius:6px; padding:0.35rem 0.55rem; text-align:center; }
  .prog-stat-num { font-weight:700; font-size:0.9rem; }
  .chem .prog-stat-num { color:var(--chem-color); } .chemeng .prog-stat-num { color:var(--chemeng-color); }
  .mat .prog-stat-num { color:var(--mat-color); } .bioe .prog-stat-num { color:var(--bioe-color); }
  .prog-stat-label { font-size:0.6rem; color:var(--text-muted); }
  .decision-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:2rem; }
  .decision-card { background:var(--bg-soft); border:1px solid var(--border); border-left:3px solid var(--imperial-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .decision-q { font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-bottom:0.3rem; line-height:1.4; }
  .decision-best { font-weight:700; font-size:0.85rem; color:var(--imperial-color); margin-bottom:0.12rem; }
  .decision-also { font-size:0.73rem; color:var(--text-muted); }
  .info-box { background:var(--blog-accent-light); border-left:4px solid var(--blog-accent); border-radius:0 10px 10px 0; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.83rem; color:var(--text-secondary); line-height:1.65; }
  .info-box strong { color:var(--text-primary); }
  .req-table-wrap { overflow-x:auto; margin-bottom:2rem; }
  .req-table { width:100%; border-collapse:collapse; font-size:0.82rem; }
  .req-table th { padding:0.65rem 0.9rem; text-align:left; font-size:0.72rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; border-bottom:2px solid var(--border); background:var(--imperial-light); color:var(--imperial-color); }
  .req-table td { padding:0.65rem 0.9rem; border-bottom:1px solid var(--border); color:var(--text-secondary); vertical-align:top; line-height:1.5; font-size:0.8rem; }
  .req-table tr:nth-child(even) td { background:var(--bg-soft); }
  .req-table tr:last-child td { border-bottom:none; }
  .req-table .row-label { font-weight:600; }
  .badge { display:inline-block; font-weight:700; font-size:0.82rem; background:var(--imperial-color); color:white; padding:0.2rem 0.55rem; border-radius:5px; }
  .esat-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2rem; }
  .esat-card { border-radius:10px; padding:1.1rem; }
  .esat-row { display:flex; justify-content:space-between; align-items:center; background:white; border-radius:6px; padding:0.4rem 0.7rem; margin-bottom:0.35rem; font-size:0.79rem; color:var(--text-secondary); border:1px solid var(--border); }
  .etag { font-size:0.63rem; font-weight:700; padding:0.12rem 0.45rem; border-radius:20px; color:white; }
  .esat-note { margin-top:0.6rem; font-size:0.73rem; font-style:italic; color:var(--text-muted); line-height:1.5; padding:0.45rem 0.6rem; background:rgba(255,255,255,0.6); border-radius:5px; }
  .ielts-box { background:var(--imperial-light); border:1px solid var(--imperial-mid); border-left:4px solid var(--imperial-color); border-radius:0 10px 10px 0; padding:1.25rem 1.5rem; margin-bottom:2rem; display:flex; gap:2rem; align-items:center; flex-wrap:wrap; }
  .ielts-num { font-family:'DM Serif Display',serif; font-size:2.5rem; color:var(--imperial-color); display:block; line-height:1; }
  .ielts-lbl { font-size:0.7rem; color:var(--text-muted); }
  .ielts-desc { font-size:0.82rem; color:var(--text-secondary); line-height:1.7; }
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:100px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.73rem; border-radius:6px; padding:0.32rem 0.55rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--imperial-color); }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--imperial-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
  .flow-body strong { color:var(--text-primary); }
  .prog-detail { border-radius:12px; border:1px solid var(--border); padding:1.4rem; margin-bottom:1.4rem; position:relative; overflow:hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.chem { background:var(--chem-light); } .prog-detail.chem::before { background:var(--chem-color); }
  .prog-detail.chemeng { background:var(--chemeng-light); } .prog-detail.chemeng::before { background:var(--chemeng-color); }
  .prog-detail.mat { background:var(--mat-light); } .prog-detail.mat::before { background:var(--mat-color); }
  .prog-detail.bioe { background:var(--bioe-light); } .prog-detail.bioe::before { background:var(--bioe-color); }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.15rem; }
  .chem .prog-detail-title { color:var(--chem-color); } .chemeng .prog-detail-title { color:var(--chemeng-color); }
  .mat .prog-detail-title { color:var(--mat-color); } .bioe .prog-detail-title { color:var(--bioe-color); }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag { font-size:0.67rem; font-weight:700; letter-spacing:0.06em; padding:0.18rem 0.55rem; border-radius:20px; color:white; }
  .ptag.high { background:#c0392b; } .ptag.mod { background:#e67e22; }
  .ptag.c { background:var(--chem-color); } .ptag.ce { background:var(--chemeng-color); }
  .ptag.m { background:var(--mat-color); } .ptag.b { background:var(--bioe-color); }
  .prog-detail-body { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:0.85rem; }
  .sec-label { font-size:0.63rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem; }
  .prog-desc { font-size:0.8rem; color:var(--text-secondary); line-height:1.65; }
  .plist { list-style:none; }
  .plist li { font-size:0.78rem; color:var(--text-secondary); padding:0.22rem 0 0.22rem 1rem; position:relative; line-height:1.4; border-bottom:1px solid rgba(0,0,0,0.05); }
  .plist li:last-child { border-bottom:none; }
  .plist li::before { content:'›'; position:absolute; left:0; font-weight:700; }
  .chem .plist li::before { color:var(--chem-color); } .chemeng .plist li::before { color:var(--chemeng-color); }
  .mat .plist li::before { color:var(--mat-color); } .bioe .plist li::before { color:var(--bioe-color); }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:0.65rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); }
  .pf-label { font-size:0.62rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.12rem; }
  .chem .pf-label { color:var(--chem-color); } .chemeng .pf-label { color:var(--chemeng-color); }
  .mat .pf-label { color:var(--mat-color); } .bioe .pf-label { color:var(--bioe-color); }
  .pf-val { font-size:0.78rem; color:var(--text-primary); font-weight:600; }
  .prog-star { margin-top:0.7rem; font-size:0.75rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .chem .prog-star { border-left:2px solid var(--chem-color); } .chemeng .prog-star { border-left:2px solid var(--chemeng-color); }
  .mat .prog-star { border-left:2px solid var(--mat-color); } .bioe .prog-star { border-left:2px solid var(--bioe-color); }
  .chart-section { background:var(--bg-soft); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.5rem; margin-bottom:1.75rem; }
  .chart-lbl { font-size:0.63rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--imperial-color); margin-bottom:0.25rem; }
  .chart-title { font-family:'DM Serif Display',serif; font-size:1.05rem; font-weight:400; color:var(--text-primary); margin-bottom:0.18rem; }
  .chart-sub { font-size:0.77rem; font-style:italic; color:var(--text-muted); margin-bottom:0.9rem; }
  .chart-wrap { position:relative; width:100%; }
  .chart-insight { margin-top:0.8rem; font-size:0.79rem; color:var(--text-secondary); background:var(--imperial-light); border-left:3px solid var(--imperial-color); padding:0.5rem 0.8rem; border-radius:0 6px 6px 0; line-height:1.55; }
  .callout { font-size:0.77rem; color:var(--text-secondary); background:white; border:1px solid var(--border); border-left:3px solid; border-radius:0 7px 7px 0; padding:0.45rem 0.7rem; line-height:1.5; }
  .kpi { background:white; border:1px solid var(--border); border-radius:8px; padding:0.7rem; display:flex; flex-direction:column; align-items:center; text-align:center; gap:0.15rem; }
  .kpi-num { font-family:'DM Serif Display',serif; font-size:1.4rem; font-weight:400; line-height:1; }
  .kpi-lbl { font-size:0.63rem; color:var(--text-muted); line-height:1.35; }
  .tw-row { display:grid; grid-template-columns:28px 1fr; gap:0.7rem; background:var(--imperial-light); border:1px solid var(--imperial-mid); border-radius:8px; padding:0.8rem 1rem; font-size:0.8rem; color:var(--text-secondary); line-height:1.6; align-items:start; margin-bottom:0.5rem; }
  .tw-num { font-family:'DM Serif Display',serif; font-size:1.2rem; color:var(--imperial-color); line-height:1; }
  .ctab-row { display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.7rem; }
  .ctab { font-family:'DM Sans',sans-serif; font-size:0.73rem; font-weight:600; padding:0.28rem 0.75rem; border:1px solid var(--border); border-radius:4px; background:white; color:var(--text-muted); cursor:pointer; transition:all 0.15s; }
  .ctab:hover { border-color:var(--imperial-color); color:var(--imperial-color); }
  .ctab.active { background:var(--imperial-color); color:white; border-color:var(--imperial-color); }
  .do-dont { display:grid; grid-template-columns:1fr 1fr; gap:1.1rem; margin-bottom:2rem; }
  .do-card { background:#f0faf3; border-top:3px solid #27ae60; border-radius:10px; padding:1.1rem; }
  .dont-card { background:#fdf3f3; border-top:3px solid #c0392b; border-radius:10px; padding:1.1rem; }
  .do-card-title { color:#27ae60; font-weight:700; font-size:0.84rem; margin-bottom:0.65rem; }
  .dont-card-title { color:#c0392b; font-weight:700; font-size:0.84rem; margin-bottom:0.65rem; }
  .ddlist { list-style:none; }
  .ddlist li { font-size:0.79rem; color:var(--text-secondary); padding:0.28rem 0 0.28rem 1.15rem; position:relative; line-height:1.45; border-bottom:1px solid rgba(0,0,0,0.05); }
  .ddlist li:last-child { border-bottom:none; }
  .do-card .ddlist li::before { content:'✓'; position:absolute; left:0; color:#27ae60; font-weight:700; }
  .dont-card .ddlist li::before { content:'✗'; position:absolute; left:0; color:#c0392b; font-weight:700; }
  .mistake-item { display:grid; grid-template-columns:1fr 1fr; gap:0.45rem; margin-bottom:0.55rem; }
  .mw { background:#fdf3f3; border-left:3px solid #c0392b; border-radius:0 7px 7px 0; padding:0.55rem 0.8rem; font-size:0.8rem; color:var(--text-secondary); line-height:1.45; }
  .mr { background:#f0faf3; border-left:3px solid #27ae60; border-radius:0 7px 7px 0; padding:0.55rem 0.8rem; font-size:0.8rem; color:var(--text-secondary); line-height:1.45; }
  .mw::before { content:'✗ '; color:#c0392b; font-weight:700; }
  .mr::before { content:'✓ '; color:#27ae60; font-weight:700; }
  .tl-track { display:flex; overflow-x:auto; padding-bottom:0.5rem; margin-bottom:2rem; }
  .tl-item { flex:0 0 auto; display:flex; flex-direction:column; align-items:center; width:110px; position:relative; }
  .tl-item:not(:last-child)::after { content:''; position:absolute; top:10px; left:55px; width:110px; height:2px; background:var(--imperial-color); opacity:0.22; }
  .tl-dot { width:20px; height:20px; border-radius:50%; background:var(--imperial-color); border:2px solid white; margin-bottom:0.45rem; flex-shrink:0; z-index:1; }
  .tl-item.hl .tl-dot { background:var(--blog-accent); }
  .tl-date { font-size:0.7rem; font-weight:700; color:var(--imperial-color); margin-bottom:0.18rem; text-align:center; }
  .tl-item.hl .tl-date { color:var(--blog-accent); }
  .tl-lbl { font-size:0.66rem; color:var(--text-primary); text-align:center; line-height:1.3; }
  .res-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:0.7rem; margin-bottom:2rem; }
  .res-card { background:var(--imperial-light); border:1px solid var(--imperial-mid); border-radius:8px; padding:0.8rem 1rem; }
  .res-card-label { font-weight:700; color:var(--imperial-color); font-size:0.79rem; margin-bottom:0.22rem; }
  .res-card a { color:var(--imperial-color); font-size:0.73rem; word-break:break-all; }
  @media (max-width:680px) {
    .stat-row,.prog-quartet,.esat-grid,.do-dont,.decision-grid { grid-template-columns:1fr; }
    .prog-detail-body,.prog-detail-footer,.mistake-item { grid-template-columns:1fr; }
  }
</style>


<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview',this)">Overview</button>
    <button class="tab-btn" onclick="showTab('programmes',this)">Programmes</button>
    <button class="tab-btn" onclick="showTab('admissions',this)">Admissions Data</button>
    <button class="tab-btn" onclick="showTab('apply',this)">How to Apply</button>
  </div>
</nav>

<!-- TAB 1 OVERVIEW -->
<div id="tab-overview" class="tab-panel active" style="display:block">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Chemistry · Chemical Engineering · Materials · Biomedical Engineering · A-Level Applicant Guide · 2026–27 Entry</p>
  <h2 class="section-title">Imperial College London</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>4 undergraduate programmes</strong> — Chemistry, Chemical Engineering, Materials, and Biomedical Engineering — at Imperial College London, ranked <strong>#2 in the world (QS 2026)</strong>. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2026–27 entry</strong>.</p>
    <p>Key differentiators: <strong>Chemistry</strong> requires an interview (no ESAT); <strong>Chemical Engineering</strong> requires ESAT and interview — the most demanding entry process of the four; <strong>Materials</strong> requires an interview only; <strong>Biomedical Engineering</strong> requires an interview and is the largest programme by overseas offer volume (341 overseas offers in 2024, up from 154 in 2020). All share the 15 January UCAS deadline and IELTS 7.0 minimum.</p>
  </div>
  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">#2</span><span class="stat-card-label">QS World Rankings 2026</span></div>
    <div class="stat-card"><span class="stat-card-num">4</span><span class="stat-card-label">Programmes in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">G5</span><span class="stat-card-label">Elite UK university group</span></div>
    <div class="stat-card"><span class="stat-card-num">7.0</span><span class="stat-card-label">IELTS required (all four)</span></div>
  </div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">The 4 Programmes at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Faculty of Natural Sciences · Faculty of Engineering · Real 2024 data</p>
  <div class="prog-quartet">
    <div class="prog-card chem">
      <div class="prog-card-label">Chemistry</div>
      <div class="prog-card-name">BSc · 3 yrs / MSci · 4 yrs</div>
      <div class="prog-card-meta">Faculty of Natural Sciences · UCAS: F100</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">A*AA</div><div class="prog-stat-label">Typical offer</div></div>
        <div class="prog-stat"><div class="prog-stat-num">Interview</div><div class="prog-stat-label">Selection</div></div>
        <div class="prog-stat"><div class="prog-stat-num">14.2%</div><div class="prog-stat-label">Success rate 2024</div></div>
        <div class="prog-stat"><div class="prog-stat-num">202</div><div class="prog-stat-label">Overseas offers 2024</div></div>
      </div>
    </div>
    <div class="prog-card chemeng">
      <div class="prog-card-label">Chemical Engineering</div>
      <div class="prog-card-name">MEng · 4 yrs</div>
      <div class="prog-card-meta">Faculty of Engineering · UCAS: H810</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">A*AA</div><div class="prog-stat-label">Typical offer</div></div>
        <div class="prog-stat"><div class="prog-stat-num">ESAT+Int.</div><div class="prog-stat-label">Selection</div></div>
        <div class="prog-stat"><div class="prog-stat-num">17.2%</div><div class="prog-stat-label">Success rate 2024</div></div>
        <div class="prog-stat"><div class="prog-stat-num">206</div><div class="prog-stat-label">Overseas offers 2024</div></div>
      </div>
    </div>
    <div class="prog-card mat">
      <div class="prog-card-label">Materials</div>
      <div class="prog-card-name">BSc · 3 yrs / MSci · 4 yrs</div>
      <div class="prog-card-meta">Faculty of Engineering · UCAS: J500</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">A*A*A</div><div class="prog-stat-label">Typical offer</div></div>
        <div class="prog-stat"><div class="prog-stat-num">Interview</div><div class="prog-stat-label">Selection</div></div>
        <div class="prog-stat"><div class="prog-stat-num">~14%</div><div class="prog-stat-label">Success rate 2024</div></div>
        <div class="prog-stat"><div class="prog-stat-num">81</div><div class="prog-stat-label">Overseas offers 2024</div></div>
      </div>
    </div>
    <div class="prog-card bioe">
      <div class="prog-card-label">Biomedical Engineering</div>
      <div class="prog-card-name">MEng · 4 yrs</div>
      <div class="prog-card-meta">Faculty of Engineering · UCAS: H161</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">A*AA</div><div class="prog-stat-label">Typical offer</div></div>
        <div class="prog-stat"><div class="prog-stat-num">Interview</div><div class="prog-stat-label">Selection</div></div>
        <div class="prog-stat"><div class="prog-stat-num">19.0%</div><div class="prog-stat-label">Success rate 2024</div></div>
        <div class="prog-stat"><div class="prog-stat-num">341</div><div class="prog-stat-label">Overseas offers 2024</div></div>
      </div>
    </div>
  </div>
  <div class="info-box"><strong>Real vs stated minimums:</strong> 51% of Chemistry and 64% of Chemical Engineering 2024 entrants held A*A*A*+. Biomedical Engineering has the highest offer rate (48.1%) but applications have grown 28% since 2020. A*AA is the floor, not a competitive target.</div>
  <div class="info-box"><strong>ESAT for Chemical Engineering — 3 sections:</strong> Mathematics 1 (algebra, functions, calculus) · Chemistry (mole calculations, physical chemistry) · Physics (mechanics, electricity, waves). Note: ChemEng uses Physics, NOT Biology. Scores 1.0–9.0. Top 10% score above 7.0. Sit ONLY ONCE — only first score used. Registration opens July 2026; Sitting 1 October 2026 (recommended); Sitting 2 January 2027.</div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Which Programme Suits You?</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Find your best fit based on your interests and strengths</p>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">"I love atoms, molecules, and chemical reactions"</div><div class="decision-best">→ Chemistry</div><div class="decision-also">Also consider: Chemical Engineering (applied problems)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to engineer medical devices, imaging systems or prosthetics"</div><div class="decision-best">→ Biomedical Engineering</div><div class="decision-also">Also consider: Materials (biomaterials track)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to design large-scale industrial or pharmaceutical processes"</div><div class="decision-best">→ Chemical Engineering</div><div class="decision-also">Also consider: Chemistry (if fundamentals focus)</div></div>
    <div class="decision-card"><div class="decision-q">"I am fascinated by biomaterials, nanoscience or aerospace materials"</div><div class="decision-best">→ Materials</div><div class="decision-also">Also consider: Biomedical Engineering (health applications)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to go into pharmaceutical research or a PhD"</div><div class="decision-best">→ Chemistry</div><div class="decision-also">Also consider: Chemical Engineering (pharma manufacturing)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to work in healthcare technology or medtech startups"</div><div class="decision-best">→ Biomedical Engineering</div><div class="decision-also">Also consider: Chemical Engineering</div></div>
    <div class="decision-card"><div class="decision-q">"I want a rigorous engineering degree with strong industry prospects"</div><div class="decision-best">→ Chemical Engineering</div><div class="decision-also">Also consider: Biomedical Engineering</div></div>
    <div class="decision-card"><div class="decision-q">"I want an interdisciplinary degree bridging chemistry, physics and engineering"</div><div class="decision-best">→ Materials</div><div class="decision-also">Also consider: Chemistry (if chemistry side dominates)</div></div>
  </div>
  <div class="info-box"><strong>Important:</strong> All four programmes are highly selective. Real entrant grades far exceed stated minimums — 64% of 2024 Chemical Engineering entrants held A*A*A*+. Biomedical Engineering is the most accessible by offer rate (48.1%) but is growing fast. Apply for what genuinely excites you — passion shows in your personal statement and interview.</div>
</div>

<!-- TAB 3 PROGRAMMES -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">4 programmes · Faculty of Natural Sciences · Faculty of Engineering</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>

  <div class="prog-detail chem">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemistry</div><div class="prog-detail-meta">BSc · 3 years / MSci · 4 years · Faculty of Natural Sciences · UCAS: F100</div></div>
      <div class="ptags"><span class="ptag c">Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Explores atoms, molecules and reactions — from quantum chemistry and thermodynamics to organic synthesis and spectroscopy. One of Imperial's most popular Natural Sciences degrees. 2024: 704 applications, 202 offers, 100 enrolled. Applications grew 75% since 2020.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Organic &amp; inorganic chemistry</li><li>Physical chemistry &amp; thermodynamics</li><li>Computational &amp; analytical methods</li><li>Research project (final year)</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Research scientist (pharma / academia)</li><li>Chemical analyst</li><li>Materials &amp; formulation scientist</li><li>PhD / postdoctoral researcher</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*AA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + Maths/Physics/Biology</div></div>
      <div><div class="pf-label">2024 Offer Rate (BSc)</div><div class="pf-val">28.7% (202/704)</div></div>
    </div>
    <div class="prog-star">★ 51% of 2024 entrants held A*A*A*+; 85% held A*A*A or above. Overseas offers: 120 (2020) → 202 (2024). Chemistry with Medicinal Chemistry (MSci) and Chemistry with Research Abroad (MSci) are popular sub-programmes.</div>
  </div>

  <div class="prog-detail chemeng">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemical Engineering</div><div class="prog-detail-meta">MEng · 4 years · Faculty of Engineering · UCAS: H810</div></div>
      <div class="ptags"><span class="ptag ce">ESAT + Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Applies chemistry and mathematics to design and optimise industrial processes — from pharmaceutical manufacturing and food production to sustainable energy. One programme, one cohort. 2024: 979 applications, 428 offers, 168 enrolled. Overseas offers stable: 193 (2020) → 206 (2024).</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Chemical &amp; reaction engineering</li><li>Thermodynamics &amp; transport phenomena</li><li>Process design &amp; simulation</li><li>Safety &amp; sustainability</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Process engineer (oil, pharma, food)</li><li>Energy &amp; sustainability engineer</li><li>Management consulting</li><li>Postgraduate research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*AA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + Mathematics (both)</div></div>
      <div><div class="pf-label">2024 Offer Rate</div><div class="pf-val">43.7% (428/979)</div></div>
    </div>
    <div class="prog-star">★ Most demanding entry — ESAT + interview. 64% of 2024 entrants held A*A*A*+. Applications grew from 754 (2020) to 979 (2024). The only single-programme department in this guide.</div>
  </div>

  <div class="prog-detail mat">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Materials</div><div class="prog-detail-meta">BSc · 3 years / MSci · 4 years · Faculty of Engineering · UCAS: J500</div></div>
      <div class="ptags"><span class="ptag m">Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Studies the structure, properties and applications of materials — metals, ceramics, polymers and biomaterials — and how to design new ones. Bridging chemistry, physics and engineering. 2024 (combined programmes): 526 applications, 144 offers, 63 enrolled. Overseas offers: 43 (2020) → 74 (2024) for Materials Science &amp; Eng alone.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Structure &amp; properties of materials</li><li>Biomaterials &amp; nanoscience</li><li>Computational modelling</li><li>Materials design &amp; characterisation</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Materials / R&amp;D engineer</li><li>Aerospace &amp; defence</li><li>Biomedical devices</li><li>Renewable energy sector</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*A*A</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry or Physics + Mathematics</div></div>
      <div><div class="pf-label">2024 Overseas Offers</div><div class="pf-val">81 (combined programmes)</div></div>
    </div>
    <div class="prog-star">★ Highest stated offer grade (A*A*A). More grade spread than other programmes — ~20% of entrants held AAA. Sub-programmes include Biomaterials &amp; Tissue Engineering and Materials with Nuclear Engineering.</div>
  </div>

  <div class="prog-detail bioe">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biomedical Engineering</div><div class="prog-detail-meta">MEng · 4 years · Faculty of Engineering · UCAS: H161</div></div>
      <div class="ptags"><span class="ptag b">Interview</span><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Applies engineering principles to medicine and biology — designing medical devices, imaging systems, prosthetics, diagnostic tools and physiological monitoring systems. The largest programme by overseas offer volume at Imperial. 2024: 709 applications, 341 offers, 135 enrolled. Overseas offers more than doubled: 154 (2020) → 341 (2024).</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Biomedical signals &amp; imaging</li><li>Biomechanics &amp; tissue engineering</li><li>Medical device design</li><li>Physiology for engineers</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Medical devices R&amp;D</li><li>Clinical engineer</li><li>Health technology entrepreneur</li><li>Academic research / PhD</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*AA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Mathematics + Biology or Chemistry</div></div>
      <div><div class="pf-label">2024 Offer Rate</div><div class="pf-val">48.1% (341/709)</div></div>
    </div>
    <div class="prog-star">★ Highest offer rate of the four (48.1%) and largest overseas offer volume (341 in 2024, up from 154 in 2020). Note: Molecular Bioengineering (UCAS H160) is a separate, smaller and more competitive programme — covered in the Biosciences guide.</div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- TAB 4 ADMISSIONS DATA -->
<!-- ✅ Chart.js loaded once -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- TAB 4: ADMISSIONS DATA (includes Chinese applicant data) -->
<div id="tab-admissions" class="tab-panel">

  <!-- SECTION 1: Overall offer rates -->
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Applications · Offer rates · 2020–2024 UCAS data</p>
  <h2 class="section-title">Admissions Data</h2>
  <div class="divider"></div>

  <div class="chart-section">
    <div class="chart-lbl">Offer Rate by Department · 2020–2024</div>
    <p class="chart-sub">Offer rate = offers made / applications received · 0–100% fixed scale</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:1rem;">
      <div>
        <h3 class="chart-title" style="margin-top:0;">Chemistry</h3>
        <canvas id="chart-chem" height="180"></canvas>
      </div>
      <div>
        <h3 class="chart-title" style="margin-top:0;">Materials</h3>
        <canvas id="chart-materials" height="180"></canvas>
      </div>
      <div>
        <h3 class="chart-title" style="margin-top:0;">Biomedical Engineering</h3>
        <canvas id="chart-biomed" height="180"></canvas>
      </div>
      <div>
        <h3 class="chart-title" style="margin-top:0;">Chemical Engineering</h3>
        <canvas id="chart-chemeng" height="180"></canvas>
      </div>
    </div>
    <p style="font-size:0.67rem;color:var(--text-muted);line-height:1.5;margin-top:0.8rem;">Offer rate = offers made / applications received. Suppressed values (≤5) shown as null. Source: Imperial College London UG Admissions Statistics 2020–2024.</p>
  </div>

  <!-- SECTION 2: Entrant grades -->
  <div class="chart-section" style="margin-top:1.5rem;">
    <div class="chart-lbl">New Entrants' Grades</div>
    <h3 class="chart-title">Achieved A-Level Grades of Students Who Enrolled (2024)</h3>
    <p class="chart-sub">What grades entrants actually held on results day — the most honest measure of competition</p>
    <canvas id="chart-grades" height="120"></canvas>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.55rem;margin-top:0.8rem;">
      <div class="callout" style="border-color:var(--chem-color);">Chemistry: 51% arrived with A*A*A*+; 85% held A*A*A or above.</div>
      <div class="callout" style="border-color:var(--chemeng-color);">Chemical Engineering: 64% arrived with A*A*A*+ — far above the A*AA stated minimum.</div>
      <div class="callout" style="border-color:var(--mat-color);">Materials: more grade spread, ~20% at AAA — most accessible grade profile of the four.</div>
      <div class="callout" style="border-color:var(--bioe-color);">Biomedical Engineering: highest offer rate (48.1%) but entrant grades still predominantly A*AA+.</div>
    </div>
  </div>

  <!-- SECTION 3: Chinese applicants -->
  <div class="chart-section" style="margin-top:2rem;">
    <div class="chart-lbl">Chinese Applicants · 2020–2024</div>
    <h2 class="section-title" style="font-size:1.1rem;">Chinese Applicant Data</h2>
    <div class="divider"></div>

    <h3 class="chart-title">Offer Rate for Chinese Applicants · 2020–2024</h3>
    <p class="chart-sub">Applications rose while offers contracted — offer rate = offers made / Chinese applications received</p>
    <canvas id="chart-cn-offerrate" height="110"></canvas>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.6rem;margin-top:1rem;">
      <div class="callout" style="border-color:#1a5fa8;text-align:center;">
        <div style="font-size:1.1rem;font-weight:700;color:#1a5fa8;">−16pp</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">Chemistry<br>40% → 24%</div>
      </div>
      <div class="callout" style="border-color:#8a5a00;text-align:center;">
        <div style="font-size:1.1rem;font-weight:700;color:#8a5a00;">−27pp</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">Chemical Eng.<br>50% → 23%</div>
      </div>
      <div class="callout" style="border-color:#5a3080;text-align:center;">
        <div style="font-size:1.1rem;font-weight:700;color:#5a3080;">+3pp</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">Materials<br>16% → 19%</div>
      </div>
      <div class="callout" style="border-color:#555;text-align:center;">
        <div style="font-size:1.1rem;font-weight:700;color:#555;">−12pp</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">Overall avg<br>34% → 22%</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:1.5rem;">
      <div>
        <div class="chart-lbl">Chinese Application Volume · 2020–2024</div>
        <h3 class="chart-title" style="margin-top:0.3rem;">Applications grew +41% across 3 departments</h3>
        <p class="chart-sub">Chemistry dominates volume; Chemical Engineering grew fastest</p>
        <canvas id="chart-cn-apps" height="200"></canvas>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-top:0.8rem;">
          <div class="callout" style="border-color:#555;text-align:center;">
            <div style="font-size:1.15rem;font-weight:700;">1,110</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">Total Chinese apps 2024</div>
          </div>
          <div class="callout" style="border-color:#555;text-align:center;">
            <div style="font-size:1.15rem;font-weight:700;">+41%</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">Growth 2020→2024</div>
          </div>
        </div>
      </div>

      <div>
        <div class="chart-lbl">Admissions Funnel · Chinese Applicants · 2024</div>
        <h3 class="chart-title" style="margin-top:0.3rem;">Applications → Offers → Enrolled</h3>
        <p class="chart-sub" style="margin-top:1.5rem;">Chemistry, Chemical Engineering & Materials</p>
        <canvas id="chart-cn-funnel" height="200"></canvas>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-top:0.8rem;">
          <div class="callout" style="border-color:#0d7a55;text-align:center;">
            <div style="font-size:1.15rem;font-weight:700;">22.2%</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">Overall offer rate 2024</div>
          </div>
          <div class="callout" style="border-color:#c0392b;text-align:center;">
            <div style="font-size:1.15rem;font-weight:700;">−13pp</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">Drop since 2020</div>
          </div>
        </div>
      </div>
    </div>

    <p style="font-size:0.67rem;color:var(--text-muted);line-height:1.5;margin-top:1rem;">Source: Imperial College London Undergraduate Admissions Statistics 2020–2024. Chemical Engineering dept includes Biomedical Engineering and Biomedical Tech Ventures in addition to Molecular Chemical Engineering.</p>
  </div>

</div><!-- end tab-admissions -->

<!-- ✅ All charts drawn lazily when tab becomes visible -->
<script>
(function() {
  const years = ["2020","2021","2022","2023","2024"];
  const sharedOfferOpts = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    scales: { y: { min:0, max:100, title:{ display:true, text:"Offer rate (%)" }, ticks:{ stepSize:20 } } }
  };

  const chartDefs = [
    { id:'chart-chem', cfg:{ type:'line', data:{ labels:years, datasets:[
      { label:"Chemistry BSc",           data:[51.2,43.8,25.0,23.8,28.7], borderColor:"#1a5fa8", backgroundColor:"rgba(26,95,168,0.1)",  borderWidth:2, tension:0.3, fill:false },
      { label:"Chem w/ Research Abroad", data:[80.0,90.9,46.7,47.5,46.5], borderColor:"#2d7fc1", backgroundColor:"rgba(45,127,193,0.1)", borderWidth:2, borderDash:[5,5], tension:0.3, fill:false }
    ]}, options:sharedOfferOpts }},
    { id:'chart-materials', cfg:{ type:'line', data:{ labels:years, datasets:[
      { label:"Materials",  data:[24.8,35.3,35.3,43.0,29.2], borderColor:"#5a3080", backgroundColor:"#5a308015", borderWidth:2, pointRadius:4, tension:0.3 },
      { label:"Biomaterials",data:[52.9,35.1,43.2,37.0,10.3], borderColor:"#9060c0", backgroundColor:"#9060c015", borderWidth:2, borderDash:[5,3], pointRadius:4, tension:0.3 },
      { label:"Materials (Nuclear)", data:[41.9,56.8,38.8,44.7,31.2], borderColor:"#c8a8e8", backgroundColor:"#c8a8e815", borderWidth:2, borderDash:[2,2], pointRadius:4, tension:0.3 }
    ]}, options:{ ...sharedOfferOpts, plugins:{ legend:{ position:"bottom", labels:{ font:{size:11}, boxWidth:12, padding:8 } } } } }},
    { id:'chart-biomed', cfg:{ type:'line', data:{ labels:years, datasets:[
      { label:"Biomedical Eng",   data:[54.5,57.5,61.2,47.8,48.1], borderColor:"#0d7a55", backgroundColor:"#0d7a5515", borderWidth:2, pointRadius:4, tension:0.3 },
      { label:"Molecular Bioeng", data:[77.5,73.8,82.2,66.9,55.4], borderColor:"#4ab890", backgroundColor:"#4ab89015", borderWidth:2, borderDash:[5,3], pointRadius:4, tension:0.3 }
    ]}, options:sharedOfferOpts }},
    { id:'chart-chemeng', cfg:{ type:'line', data:{ labels:years, datasets:[
      { label:"Chemical Engineering", data:[51.1,42.4,50.4,46.5,43.7], borderColor:"#8a5a00", backgroundColor:"#8a5a0015", borderWidth:2, pointRadius:4, tension:0.3 }
    ]}, options:sharedOfferOpts }},
    { id:'chart-grades', cfg:{ type:'bar', data:{ labels:["Chemistry","Chemical Engineering","Materials","Biomedical Engineering"], datasets:[
      { label:"A*A*A*+", backgroundColor:"#1a1a1a", data:[51,64,30,28] },
      { label:"A*A*A",   backgroundColor:"#555555", data:[34,25,25,30] },
      { label:"A*AA",    backgroundColor:"#2a9d8f", data:[9,8,25,26]   },
      { label:"AAA",     backgroundColor:"#4a90d9", data:[3,2,20,16]   },
      { label:"Other",   backgroundColor:"#c8dfc8", data:[3,1,0,0]     }
    ]}, options:{ responsive:true, plugins:{legend:{position:"bottom"}}, scales:{ x:{stacked:true}, y:{stacked:true,max:100,title:{display:true,text:"%"},ticks:{stepSize:20}} } }}},
    { id:'chart-cn-offerrate', cfg:{ type:'line', data:{ labels:years, datasets:[
      { label:"Chemistry",            data:[40,33,22,20,24], borderColor:"#1a5fa8", backgroundColor:"rgba(26,95,168,0.08)",  borderWidth:2, pointRadius:4, tension:0.3, fill:false },
      { label:"Chemical Engineering", data:[50,44,38,30,23], borderColor:"#8a5a00", backgroundColor:"rgba(138,90,0,0.08)",   borderWidth:2, pointRadius:4, tension:0.3, fill:false },
      { label:"Materials",            data:[16,20,18,17,19], borderColor:"#5a3080", backgroundColor:"rgba(90,48,128,0.08)",  borderWidth:2, pointRadius:4, borderDash:[4,3], tension:0.3, fill:false }
    ]}, options:{ responsive:true, plugins:{legend:{position:"bottom"}}, scales:{ y:{ min:0,max:60, title:{display:true,text:"Offer rate (%)"},ticks:{stepSize:10} } } }}},
    { id:'chart-cn-apps', cfg:{ type:'bar', data:{ labels:years, datasets:[
      { label:"Chemistry",            data:[600,641,668,693,600], backgroundColor:"rgba(26,95,168,0.75)" },
      { label:"Chemical Engineering", data:[96,120,142,165,186],  backgroundColor:"rgba(138,90,0,0.75)"  },
      { label:"Materials",            data:[93,100,106,125,324],  backgroundColor:"rgba(90,48,128,0.75)" }
    ]}, options:{ responsive:true, plugins:{ legend:{ position:"bottom", labels:{ font:{size:11}, boxWidth:12, padding:8 } } }, scales:{ x:{stacked:true}, y:{stacked:true,title:{display:true,text:"Chinese applications"},ticks:{stepSize:200}} } }}},
    { id:'chart-cn-funnel', cfg:{ type:'bar', data:{ labels:["Chemistry","Chemical Eng.","Materials"], datasets:[
      { label:"Applications", data:[600,186,324], backgroundColor:"rgba(74,120,200,0.8)"  },
      { label:"Offers made",  data:[145,43,60],   backgroundColor:"rgba(42,157,143,0.8)"  },
      { label:"Enrolled",     data:[60,98,10],    backgroundColor:"rgba(231,111,81,0.8)" }
    ]}, options:{ responsive:true, plugins:{legend:{position:"bottom"}}, scales:{ y:{title:{display:true,text:"Number of students"}} } }}}
  ];

  const drawn = {};

  function drawAll() {
    const tab = document.getElementById('tab-admissions');
    if (!tab || getComputedStyle(tab).display === 'none') return;
    chartDefs.forEach(function(def) {
      if (drawn[def.id]) return;
      const canvas = document.getElementById(def.id);
      if (canvas) { new Chart(canvas, def.cfg); drawn[def.id] = true; }
    });
  }

  // Draw on load if tab already visible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawAll);
  } else {
    drawAll();
  }

  // Watch for tab becoming visible via style/class changes
  const tab = document.getElementById('tab-admissions');
  if (tab) {
    new MutationObserver(drawAll).observe(tab, { attributes:true, attributeFilter:['style','class'] });
  }

  // Also catch any click anywhere on the page (tab buttons)
  document.addEventListener('click', function() { setTimeout(drawAll, 60); });
})();
</script>

<!-- TAB 5 HOW TO APPLY -->
<div id="tab-apply" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · Interview · Personal statement · Key dates · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">UCAS Application Process</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Step-by-step for 2026–27 entry · All four programmes share the 15 January UCAS deadline</p>
  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">May–Jun 2026</div><div class="flow-body"><strong>Register on UCAS Hub</strong> — Create your account at ucas.com. Choose 1–2 of the four programmes. Do not apply to both BSc and MSci of the same subject.</div></div>
      <div class="flow-row"><div class="flow-num">Jun–Jul 2026</div><div class="flow-body"><strong>Register for ESAT</strong> (Chemical Engineering only) — Opens July 2026 for the October sitting. Chemistry, Materials, and Biomedical Engineering applicants skip this step.</div></div>
      <div class="flow-row"><div class="flow-num">Sep–Oct 2026</div><div class="flow-body"><strong>Write personal statement &amp; sit ESAT</strong> — 80% subject passion, 20% wider skills. One statement for all 5 UCAS choices. ESAT Sitting 1 in October is the recommended sitting for ChemEng applicants.</div></div>
      <div class="flow-row"><div class="flow-num">15 Jan 2027</div><div class="flow-body"><strong>Submit UCAS application</strong> — Equal consideration deadline. No late applications considered. Include school-submitted predicted grades.</div></div>
      <div class="flow-row"><div class="flow-num">Jan–Mar 2027</div><div class="flow-body"><strong>Interview invitations &amp; decisions</strong> — All four use interviews. Prepare scientific problem-solving, not just recall. Interviews probe your personal statement.</div></div>
      <div class="flow-row"><div class="flow-num">Aug 2027</div><div class="flow-body"><strong>A-level results &amp; confirm</strong> — Meet your conditional offer. Imperial does not accept resit qualifications — first sittings only.</div></div>
    </div>
  </div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Personal Statement Do's &amp; Don'ts</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">4,000 characters · One statement for all 5 choices · Interviewers will read it</p>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">DO</div>
      <ul class="ddlist">
        <li>Name specific topics, reactions, materials or devices that excite you</li>
        <li>Mention books, papers or lectures that inspired you</li>
        <li>Link your A-level subjects directly to the degree content</li>
        <li>Show you understand what the course involves day-to-day</li>
        <li>Write for your subject — one statement serves all 5 UCAS choices</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">DON'T</div>
      <ul class="ddlist">
        <li>Apply to both BSc and MSci of the same subject</li>
        <li>Open with generic sentences ("Since childhood I have loved science…")</li>
        <li>List extracurriculars without connecting them to science</li>
        <li>Resit A-levels — Imperial does not accept resit qualifications</li>
        <li>Confuse Biomedical Engineering (H161) with Molecular Bioengineering (H160)</li>
      </ul>
    </div>
  </div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Common Application Mistakes</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;"></p>
  <div>
    <div class="mistake-item"><div class="mw">Applying to both BSc and MSci of the same course</div><div class="mr">Pick one — you can often switch internally in Year 1</div></div>
    <div class="mistake-item"><div class="mw">Forgetting to register for ESAT (Chemical Engineering)</div><div class="mr">Registration opens July 2026 — set a calendar alert now</div></div>
    <div class="mistake-item"><div class="mw">Sitting the ESAT twice hoping for a better score</div><div class="mr">Only your FIRST score is used — prepare thoroughly before Sitting 1</div></div>
    <div class="mistake-item"><div class="mw">Resitting A-levels to improve grades</div><div class="mr">Imperial does not accept resit qualifications — first sittings only</div></div>
    <div class="mistake-item"><div class="mw">Confusing Biomedical Eng (H161) with Molecular Bioengineering (H160)</div><div class="mr">They are separate programmes — check UCAS codes carefully</div></div>
    <div class="mistake-item"><div class="mw">Forgetting IELTS or letting the score expire</div><div class="mr">Valid 2 years only, single sitting — plan well ahead</div></div>
  </div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:2rem;">Application Timeline</h3>
  <div class="tl-track">
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">May 2026</div><div class="tl-lbl">UCAS Hub opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jun 2026</div><div class="tl-lbl">ESAT Oct registration opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">24–25 Jun</div><div class="tl-lbl">Imperial Open Day</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Sep–Oct 2026</div><div class="tl-lbl">Write personal statement</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Oct 2026</div><div class="tl-lbl">ESAT Sitting 1 (ChemEng)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">12 Sep 2026</div><div class="tl-lbl">Imperial Open Day (2nd)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jan 2027</div><div class="tl-lbl">ESAT Sitting 2 (backup)</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">15 Jan 2027</div><div class="tl-lbl">UCAS Deadline</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jan–Mar 2027</div><div class="tl-lbl">Interviews + offers</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Aug 2027</div><div class="tl-lbl">Results — confirm place</div></div>
  </div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">Chemistry</div><a href="https://www.imperial.ac.uk/study/courses/undergraduate/chemistry-bsc/" target="_blank">imperial.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">Chemical Engineering</div><a href="https://www.imperial.ac.uk/study/courses/undergraduate/chemical-engineering-meng/" target="_blank">imperial.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">Materials</div><a href="https://www.imperial.ac.uk/study/courses/undergraduate/materials-bsc/" target="_blank">imperial.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">Biomedical Engineering</div><a href="https://www.imperial.ac.uk/study/courses/undergraduate/biomedical-engineering-meng/" target="_blank">imperial.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">ESAT Info &amp; Practice</div><a href="https://uatuktest.com" target="_blank">uatuktest.com</a></div>
    <div class="res-card"><div class="res-card-label">Open Days 2026</div><div style="font-size:0.77rem;color:var(--text-secondary);">24–25 Jun &amp; 12 Sep 2026</div></div>
  </div>
  <div class="info-box"><strong>All information current as of May 2026.</strong> Always verify requirements on official Imperial course pages before submitting — offer grades, ESAT sections, and programme structures can change year to year.</div>
</div>




<script>
  function showTab(id,btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active');p.style.display='none';});
    document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
    var panel=document.getElementById('tab-'+id);
    if(panel){panel.classList.add('active');panel.style.display='block';}
    if(btn) btn.classList.add('active');
    if(typeof Chart!=='undefined'){
      setTimeout(function(){if(typeof Chart.instances!=='undefined')Chart.instances.forEach(function(c){c.resize();});},50);
    }
    window.scrollTo({top:0,behavior:'smooth'});
  }
  document.addEventListener('DOMContentLoaded',function(){
    var f=document.getElementById('tab-overview');if(f)f.style.display='block';
    var adm=document.getElementById('tab-admissions');
    if(adm && adm.style.display==='block'){buildAdmissionCharts();}
  });
</script>