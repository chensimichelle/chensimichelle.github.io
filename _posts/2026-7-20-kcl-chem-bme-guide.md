---
layout: post
title: "King's College London - Chemistry, Natural Sciences, Biomedical Engineering & Pharmacy Guide"
date: 2026-07-20
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
    --cwb-color: #7a3ba8;
    --cwb-light: #f3ecfa;
    --cwb-mid: #d9bdf0;
    --nat-color: #8a5a00;
    --nat-light: #fdf3e0;
    --nat-mid: #f0d090;
    --bme-color: #0d7a55;
    --bme-light: #e8f5ee;
    --bme-mid: #a8d8bc;
    --pharm-color: #c0392b;
    --pharm-light: #fdeeec;
    --pharm-mid: #f0b8ae;
    --fac-nmes: #2e6f9e;
    --fac-lsm: #b5542f;
    --kcl-color: #a6192e;
    --kcl-light: #faeaec;
    --kcl-mid: #e8b0ba;
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
  .stat-card { background: var(--kcl-light); border: 1px solid var(--kcl-mid); border-top: 3px solid var(--kcl-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.5rem; color: var(--kcl-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }
  .decision-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:2rem; }
  .decision-card { background:var(--bg-soft); border:1px solid var(--border); border-left:3px solid var(--kcl-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .decision-q { font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-bottom:0.3rem; line-height:1.4; }
  .decision-best { font-weight:700; font-size:0.85rem; color:var(--kcl-color); margin-bottom:0.12rem; }
  .decision-also { font-size:0.73rem; color:var(--text-muted); }
  .info-box { background:var(--blog-accent-light); border-left:4px solid var(--blog-accent); border-radius:0 10px 10px 0; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.83rem; color:var(--text-secondary); line-height:1.65; }
  .info-box strong { color:var(--text-primary); }
  .req-table-wrap { overflow-x:auto; margin-bottom:1rem; }
  .req-table { width:100%; border-collapse:collapse; font-size:0.82rem; }
  .req-table th { padding:0.65rem 0.8rem; text-align:left; font-size:0.68rem; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; border-bottom:2px solid var(--border); background:var(--kcl-light); color:var(--kcl-color); }
  .req-table td { padding:0.65rem 0.8rem; border-bottom:1px solid var(--border); color:var(--text-secondary); vertical-align:top; line-height:1.5; font-size:0.79rem; }
  .req-table tr:nth-child(even) td { background:var(--bg-soft); }
  .req-table tr:last-child td { border-bottom:none; }
  .req-table .row-label { font-weight:600; color:var(--text-primary); }
  .req-table tr.fac-nmes td.row-label { border-left: 4px solid var(--fac-nmes); padding-left: 0.65rem; }
  .req-table tr.fac-lsm td.row-label { border-left: 4px solid var(--fac-lsm); padding-left: 0.65rem; }
  .fac-legend { display:flex; gap:1.5rem; flex-wrap:wrap; align-items:center; margin-bottom:1rem; font-size:0.78rem; color:var(--text-secondary); }
  .fac-legend-item { display:flex; align-items:center; gap:0.45rem; }
  .fac-swatch { display:inline-block; width:12px; height:12px; border-radius:3px; flex-shrink:0; }
  .req-table .offer-num { font-weight:700; }
  .req-table .no-data { color:var(--text-muted); font-style:italic; font-weight:400; }
  .badge { display:inline-block; font-weight:700; font-size:0.82rem; background:var(--kcl-color); color:white; padding:0.2rem 0.55rem; border-radius:5px; }
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:110px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.73rem; border-radius:6px; padding:0.32rem 0.55rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--kcl-color); }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--kcl-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
  .flow-body strong { color:var(--text-primary); }
  .prog-detail { border-radius:12px; border:1px solid var(--border); padding:1.4rem; margin-bottom:1.4rem; position:relative; overflow:hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.chem { background:var(--chem-light); } .prog-detail.chem::before { background:var(--chem-color); }
  .prog-detail.cwb { background:var(--cwb-light); } .prog-detail.cwb::before { background:var(--cwb-color); }
  .prog-detail.nat { background:var(--nat-light); } .prog-detail.nat::before { background:var(--nat-color); }
  .prog-detail.bme { background:var(--bme-light); } .prog-detail.bme::before { background:var(--bme-color); }
  .prog-detail.pharm { background:var(--pharm-light); } .prog-detail.pharm::before { background:var(--pharm-color); }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.15rem; }
  .chem .prog-detail-title { color:var(--chem-color); } .cwb .prog-detail-title { color:var(--cwb-color); } .nat .prog-detail-title { color:var(--nat-color); } .bme .prog-detail-title { color:var(--bme-color); } .pharm .prog-detail-title { color:var(--pharm-color); }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag { font-size:0.67rem; font-weight:700; letter-spacing:0.06em; padding:0.18rem 0.55rem; border-radius:20px; color:white; }
  .ptag.no-int { background:#27ae60; } .ptag.acc { background:#8a5a00; } .ptag.int { background:#c0392b; }
  .ptag.c { background:var(--chem-color); } .ptag.cw { background:var(--cwb-color); } .ptag.n { background:var(--nat-color); } .ptag.b { background:var(--bme-color); } .ptag.p { background:var(--pharm-color); }
  .prog-detail-body { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:0.85rem; }
  .sec-label { font-size:0.63rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem; }
  .prog-desc { font-size:0.8rem; color:var(--text-secondary); line-height:1.65; }
  .plist { list-style:none; }
  .plist li { font-size:0.78rem; color:var(--text-secondary); padding:0.22rem 0 0.22rem 1rem; position:relative; line-height:1.4; border-bottom:1px solid rgba(0,0,0,0.05); }
  .plist li:last-child { border-bottom:none; }
  .plist li::before { content:'›'; position:absolute; left:0; font-weight:700; }
  .chem .plist li::before { color:var(--chem-color); } .cwb .plist li::before { color:var(--cwb-color); } .nat .plist li::before { color:var(--nat-color); } .bme .plist li::before { color:var(--bme-color); } .pharm .plist li::before { color:var(--pharm-color); }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:0.65rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); }
  .pf-label { font-size:0.62rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.12rem; }
  .chem .pf-label { color:var(--chem-color); } .cwb .pf-label { color:var(--cwb-color); } .nat .pf-label { color:var(--nat-color); } .bme .pf-label { color:var(--bme-color); } .pharm .pf-label { color:var(--pharm-color); }
  .pf-val { font-size:0.78rem; color:var(--text-primary); font-weight:600; }
  .prog-star { margin-top:0.7rem; font-size:0.75rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .chem .prog-star { border-left:2px solid var(--chem-color); } .cwb .prog-star { border-left:2px solid var(--cwb-color); } .nat .prog-star { border-left:2px solid var(--nat-color); } .bme .prog-star { border-left:2px solid var(--bme-color); } .pharm .prog-star { border-left:2px solid var(--pharm-color); }
  .chart-section { background:var(--bg-soft); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.5rem; margin-bottom:1.75rem; }
  .chart-lbl { font-size:0.63rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--kcl-color); margin-bottom:0.25rem; }
  .chart-title { font-family:'DM Serif Display',serif; font-size:1.05rem; font-weight:400; color:var(--text-primary); margin-bottom:0.18rem; }
  .chart-sub { font-size:0.77rem; font-style:italic; color:var(--text-muted); margin-bottom:0.9rem; }
  .chart-wrap { position:relative; width:100%; }
  .chart-insight { margin-top:0.8rem; font-size:0.79rem; color:var(--text-secondary); background:var(--kcl-light); border-left:3px solid var(--kcl-color); padding:0.5rem 0.8rem; border-radius:0 6px 6px 0; line-height:1.55; }
  .callout { font-size:0.77rem; color:var(--text-secondary); background:white; border:1px solid var(--border); border-left:3px solid; border-radius:0 7px 7px 0; padding:0.45rem 0.7rem; line-height:1.5; }
  .kpi { background:white; border:1px solid var(--border); border-radius:8px; padding:0.7rem; display:flex; flex-direction:column; align-items:center; text-align:center; gap:0.15rem; }
  .kpi-num { font-family:'DM Serif Display',serif; font-size:1.4rem; font-weight:400; line-height:1; }
  .kpi-lbl { font-size:0.63rem; color:var(--text-muted); line-height:1.35; }
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
  .tl-item:not(:last-child)::after { content:''; position:absolute; top:10px; left:55px; width:110px; height:2px; background:var(--kcl-color); opacity:0.22; }
  .tl-dot { width:20px; height:20px; border-radius:50%; background:var(--kcl-color); border:2px solid white; margin-bottom:0.45rem; flex-shrink:0; z-index:1; }
  .tl-item.hl .tl-dot { background:var(--blog-accent); }
  .tl-date { font-size:0.7rem; font-weight:700; color:var(--kcl-color); margin-bottom:0.18rem; text-align:center; }
  .tl-item.hl .tl-date { color:var(--blog-accent); }
  .tl-lbl { font-size:0.66rem; color:var(--text-primary); text-align:center; line-height:1.3; }
  .res-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:0.7rem; margin-bottom:2rem; }
  .res-card { background:var(--kcl-light); border:1px solid var(--kcl-mid); border-radius:8px; padding:0.8rem 1rem; }
  .res-card-label { font-weight:700; color:var(--kcl-color); font-size:0.79rem; margin-bottom:0.22rem; }
  .res-card a { color:var(--kcl-color); font-size:0.73rem; word-break:break-all; }
  @media (max-width:680px) {
    .stat-row,.do-dont,.decision-grid { grid-template-columns:1fr; }
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
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Chemistry · Natural Sciences · Biomedical Engineering · Pharmacy · A-Level Applicant Guide · 2026–27 Entry</p>
  <h2 class="section-title">King's College London</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>9 degree routes across 5 programme families</strong> — Chemistry, Chemistry with Biomedicine, Natural Sciences, Biomedical Engineering, and Pharmacy — at King's College London, ranked <strong>#37 in the world / #6 in the UK (QS World University Rankings 2027)</strong>. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2026–27 entry</strong>.</p>
    <p><strong>Important scope note:</strong> King's has <strong>no Chemical Engineering degree</strong> — this is confirmed against KCL's official department listings and is a genuine structural gap versus institutions like UCL, not a data-access limitation. Biomedical Engineering is the closest engineering-adjacent route. <strong>Eight of the nine programmes require no interview or admissions test</strong> — selection is by A-level grades and personal statement through UCAS alone. <strong>Pharmacy MPharm is the one exception</strong>: it carries a mandatory 30-minute recorded interview and a different English language band, flagged throughout this guide.</p>
  </div>
  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">#37</span><span class="stat-card-label">QS World Rankings 2027 (#6 UK)</span></div>
    <div class="stat-card"><span class="stat-card-num">9</span><span class="stat-card-label">Degree routes in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">8/9</span><span class="stat-card-label">Programmes with no interview or test</span></div>
    <div class="stat-card"><span class="stat-card-num">1</span><span class="stat-card-label">Exception: Pharmacy MPharm (interview required)</span></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">All 9 Programmes at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Department of Chemistry · School of Biomedical Engineering & Imaging Sciences · Teaching Department of Pharmacy · Live-verified against official KCL pages, 20 July 2026</p>
  <div class="fac-legend">
    <div class="fac-legend-item"><span class="fac-swatch" style="background:var(--fac-nmes);"></span>Faculty of Natural, Mathematical &amp; Engineering Sciences</div>
    <div class="fac-legend-item"><span class="fac-swatch" style="background:var(--fac-lsm);"></span>Faculty of Life Sciences &amp; Medicine</div>
  </div>
  <div class="req-table-wrap">
    <table class="req-table">
      <thead>
        <tr>
          <th>Programme</th>
          <th>UCAS</th>
          <th>A-Level Requirement</th>
          <th>IELTS</th>
          <th>Offer Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr class="fac-nmes">
          <td class="row-label">Chemistry BSc</td>
          <td>F100</td>
          <td>AAB — Chemistry A + one of Maths/Further Maths/Physics/Biology at A</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="offer-num" style="color:var(--chem-color);">65% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2023/24)</span></td>
        </tr>
        <tr class="fac-nmes">
          <td class="row-label">Chemistry MSci</td>
          <td>F103</td>
          <td>AAB — same subject profile as BSc</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="offer-num" style="color:var(--chem-color);">87% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2022/23)</span></td>
        </tr>
        <tr class="fac-nmes">
          <td class="row-label">Chemistry with Biomedicine BSc</td>
          <td>FC17</td>
          <td>AAB — Chemistry A + one of Maths/Further Maths/Physics/Biology at A</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="offer-num" style="color:var(--cwb-color);">60% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2023/24)</span></td>
        </tr>
        <tr class="fac-nmes">
          <td class="row-label">Chemistry with Biomedicine MSci</td>
          <td>F1C7</td>
          <td>AAB — same subject profile as BSc</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="offer-num" style="color:var(--cwb-color);">68% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2022/23)</span></td>
        </tr>
        <tr class="fac-nmes">
          <td class="row-label">Natural Sciences BSc</td>
          <td>CFG0</td>
          <td>AAC — Mathematics A + one of Biology/Chemistry/Physics/Computer Science at A</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="no-data">— not published (new programme)</td>
        </tr>
        <tr class="fac-nmes">
          <td class="row-label">Natural Sciences MSci</td>
          <td>CFG2</td>
          <td>AAC — same subject profile as BSc</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="no-data">— not published (new programme)</td>
        </tr>
        <tr class="fac-lsm">
          <td class="row-label">Biomedical Engineering BEng</td>
          <td>H160</td>
          <td>AAA — Mathematics A + one of Biology/Chemistry/Computer Science/Further Maths/Physics at A</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="offer-num" style="color:var(--bme-color);">69% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2023/24)</span></td>
        </tr>
        <tr class="fac-lsm">
          <td class="row-label">Biomedical Engineering MEng</td>
          <td>H161</td>
          <td>AAA — same subject profile as BEng</td>
          <td>6.5 / 6.0 (Band D)</td>
          <td class="offer-num" style="color:var(--bme-color);">71% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2022/23)</span></td>
        </tr>
        <tr class="fac-lsm">
          <td class="row-label">Pharmacy MPharm</td>
          <td>B230</td>
          <td>AAA — Chemistry A + one of Biology/Mathematics/Physics at A</td>
          <td>7.0 / 6.5 (Band B)</td>
          <td class="offer-num" style="color:var(--pharm-color);">37% <span style="font-weight:400;color:var(--text-muted);font-size:0.7rem;">(2022/23)</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.5rem;"><strong style="color:var(--text-primary);">No interview or admissions test</strong> for 8 of the 9 programmes above — selection is by A-level grades and personal statement through UCAS alone. The one exception is <strong style="color:var(--pharm-color);">Pharmacy MPharm</strong>, which requires a mandatory 30-minute recorded online interview.</p>
  <p style="font-size:0.67rem;color:var(--text-muted);line-height:1.5;margin-bottom:2rem;">Offer rate = offers made / applications received (not enrolment rate). Figures are FOI-derived single-year snapshots (admissionreport.com methodology), not a multi-year trend series — data years differ by programme because that is the most recent year each specific page had published. Natural Sciences has no offer-rate history because it is a newly launched degree with no FOI track record yet. A-level, IELTS band and interview requirements verified directly against official King's College London course requirement pages on 20 July 2026.</p>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Which Programme Suits You?</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Find your best fit based on your interests and strengths</p>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">"I love atoms, molecules and chemical reactions, and want a pure chemistry foundation"</div><div class="decision-best">→ Chemistry</div><div class="decision-also">Also consider: Chemistry with Biomedicine (health-facing applications)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to bridge chemistry with drug design, disease, and living systems"</div><div class="decision-best">→ Chemistry with Biomedicine</div><div class="decision-also">Also consider: Chemistry (broader, less health-specific)</div></div>
    <div class="decision-card"><div class="decision-q">"I don't want to commit to one science yet — I want to combine biology, chemistry, physics and maths"</div><div class="decision-best">→ Natural Sciences</div><div class="decision-also">Also consider: Chemistry if you already know chemistry is your focus</div></div>
    <div class="decision-card"><div class="decision-q">"I want to design medical devices, imaging systems or prosthetics as an engineer"</div><div class="decision-best">→ Biomedical Engineering</div><div class="decision-also">Also consider: Chemistry with Biomedicine (less engineering-focused)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to become a registered pharmacist and work directly with patients and medicines"</div><div class="decision-best">→ Pharmacy MPharm</div><div class="decision-also">The only UK qualification leading to professional registration as a pharmacist</div></div>
    <div class="decision-card"><div class="decision-q">"I'm confident interviewing and want the most direct path into a licensed health profession"</div><div class="decision-best">→ Pharmacy MPharm</div><div class="decision-also">Note: this is the only route in this guide with a mandatory interview</div></div>
  </div>
  <div class="info-box"><strong>Eight programmes, no interview — one exception:</strong> Chemistry, Chemistry with Biomedicine, Natural Sciences and Biomedical Engineering all make offers on UCAS application content alone — grades and personal statement, no interview or admissions test. <strong>Pharmacy MPharm breaks this pattern</strong>: it requires a mandatory 30-minute recorded interview on Microsoft Teams assessing communication, numeracy, values and motivation, plus a criminal-conviction disclosure/DBS check and an 18-by-1-January age requirement (for placement eligibility). If you're applying to Pharmacy alongside any of the other eight, budget real interview-prep time specifically for it.</div>
</div>

<!-- TAB 2 PROGRAMMES -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">5 programme families · 9 degree routes · Department of Chemistry · School of Biomedical Engineering & Imaging Sciences · Teaching Department of Pharmacy</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>

  <div class="prog-detail chem">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemistry</div><div class="prog-detail-meta">BSc · 3 years / MSci · 4 years · Department of Chemistry · UCAS: F100 / F103</div></div>
      <div class="ptags"><span class="ptag no-int">No Interview</span><span class="ptag acc">RSC Accredited</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Rigorous training in the core principles of chemistry — physical, organic and inorganic — plus hands-on laboratory skills, from how medicines work to developing sustainable solutions. King's own framing explicitly points graduates toward the chemical, biotech and pharmaceutical industries, alongside tech, finance and law. Ranked 8th in the UK for Chemistry (THE/QS 2025 subject rankings).</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Physical, organic &amp; inorganic chemistry</li><li>Integrated laboratory course &amp; open-ended project</li><li>Mathematics for Chemists (for students without A-level Maths)</li><li>MSci only: substantial 4th-year research project — in the Department, King's Health Faculties, or the Francis Crick Institute</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Research scientist (pharma / academia)</li><li>Chemical analyst</li><li>Biotech &amp; nanotechnology roles</li><li>PhD / postgraduate research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAB</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry A + Maths/FM/Physics/Bio at A</div></div>
      <div><div class="pf-label">Offer Rate</div><div class="pf-val">BSc 65% · MSci 87%</div></div>
    </div>
    <div class="prog-star">★ Flexible transfer to Chemistry with Biomedicine, or to the MSci / Year in Industry variants. 6th in the UK for graduate employability (THE Graduate Employability Rankings 2024/5). Practical endorsement in all science A-levels required for linear A-level (England) takers.</div>
  </div>

  <div class="prog-detail cwb">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemistry with Biomedicine</div><div class="prog-detail-meta">BSc · 3 years / MSci · 4 years · Department of Chemistry · UCAS: FC17 / F1C7</div></div>
      <div class="ptags"><span class="ptag no-int">No Interview</span><span class="ptag acc">RSC Accredited</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">King's is the only London university — and one of very few in the UK — to offer a dedicated Chemistry with Biomedicine degree. It layers the same rigorous physical/organic/inorganic chemistry core with biomedicine content: the chemistry of disease, drug design and delivery, and the chemistry of living systems, drawing on King's world-class Health Faculties and teaching hospitals.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Physical, organic &amp; inorganic chemistry core</li><li>Chemistry of disease, drug design &amp; delivery</li><li>Integrated laboratory course &amp; open-ended project</li><li>MSci only: 4th-year research project across Chemistry, Health Faculties/hospitals, or the Francis Crick Institute</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Biomedical engineering &amp; chemical biology</li><li>Biotech &amp; biomedical research</li><li>Pharmaceutical industry</li><li>PhD / postgraduate research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAB</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry A + Maths/FM/Physics/Bio at A</div></div>
      <div><div class="pf-label">Offer Rate</div><div class="pf-val">BSc 60% · MSci 68%</div></div>
    </div>
    <div class="prog-star">★ Flexible transfer to Chemistry BSc/MSci or to a Year in Industry programme. Same entry-grade profile as standard Chemistry — the differentiator is course content, not admission difficulty.</div>
  </div>

  <div class="prog-detail nat">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Natural Sciences</div><div class="prog-detail-meta">BSc · 3 years / MSci · 4 years · Faculty of Natural, Mathematical &amp; Engineering Sciences · UCAS: CFG0 / CFG2</div></div>
      <div class="ptags"><span class="ptag no-int">No Interview</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">An interdisciplinary degree spanning biology, chemistry, mathematics and physics, for students who don't want to commit to one single-subject department. Bespoke modules explore the interconnections between the sciences, with a strong emphasis on computational and mathematical skills — coding, simulation, and machine learning/AI tools — plus an entrepreneurship-focused final-year project.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Year 1: core biology, chemistry, mathematics &amp; physics foundations</li><li>Years 2–3: advanced maths, Machine Learning/AI, bespoke interdisciplinary modules</li><li>Optional Year Abroad between Years 2 and 3</li><li>Final-year research project with an employability/entrepreneurship module</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Emerging &amp; interdisciplinary science industries</li><li>Data science / computational science</li><li>Scientific consultancy</li><li>PhD / postgraduate research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAC</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Maths A + Bio/Chem/Physics/CompSci at A</div></div>
      <div><div class="pf-label">Offer Rate</div><div class="pf-val">Not published (new programme)</div></div>
    </div>
    <div class="prog-star">★ 6th in the UK for employability (THE Graduate Employability Rankings 2025). A newly launched degree (~2023) with no FOI offer-rate history yet — the lowest stated A-level grade profile (AAC) of the five families in this guide, but treat that as reflecting a young programme, not lower academic rigour.</div>
  </div>

  <div class="prog-detail bme">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biomedical Engineering</div><div class="prog-detail-meta">BEng · 3 years / MEng · 4 years · School of Biomedical Engineering &amp; Imaging Sciences · UCAS: H160 / H161</div></div>
      <div class="ptags"><span class="ptag no-int">No Interview</span><span class="ptag acc">CEng Accredited</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Trains the next generation of biomedical engineers for healthcare research and development, with graduates going on to specialise in medical engineering, medical physics, or further study in Medicine. Based in a clinical setting at St Thomas' Hospital — a UK centre of excellence for medical imaging, with access to on-site MRI and PET facilities in later years.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study — Year 1 (no optional modules)</div>
        <ul class="plist"><li>Mathematics &amp; Mechanics for Biomedical Engineering</li><li>Physics for Biomedical Engineering</li><li>Introduction to Human Anatomy &amp; Physiology</li><li>Introduction to Electrical &amp; Electronic Engineering, Computer Programming, CAD, Computational Statistics</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Clinical / medical engineering</li><li>Medical devices R&amp;D</li><li>Medical physics</li><li>Further study in Medicine</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Maths A + Bio/Chem/CompSci/FM/Physics at A</div></div>
      <div><div class="pf-label">Offer Rate</div><div class="pf-val">BEng 69% · MEng 71%</div></div>
    </div>
    <div class="prog-star">★ CEng-accredited — fulfils the educational requirements for Chartered Engineer when presented with an accredited MSc, and meets Incorporated Engineer registration requirements outright. This is King's closest equivalent to a chemical/process engineering degree; King's has no standalone Chemical Engineering programme.</div>
  </div>

  <div class="prog-detail pharm">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Pharmacy</div><div class="prog-detail-meta">MPharm · 4 years · Teaching Department of Pharmacy · UCAS: B230</div></div>
      <div class="ptags"><span class="ptag int">Interview Required</span><span class="ptag acc">GPhC Accredited</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">The only UK qualification leading to professional registration as a pharmacist. An integrated four-year course combining pharmaceutical science with clinical pharmacy practice, taught alongside nursing, medical, dental and midwifery students, with placements at Guy's, King's College Hospital and St Thomas'. Reaccredited by the General Pharmaceutical Council for 6 years in February 2025 with no conditions. Ranked 7th in Europe for Pharmacy &amp; Pharmacology (QS World University Rankings by Subject 2026).</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Year 1: underpinning scientific principles + intro to pharmacy practice</li><li>Years 2–3: disease, drugs &amp; clinical uses of medicines; pharmacist-specific science</li><li>Year 4: clinical decision-making, emerging therapeutics, substantial research project</li><li>Increasing clinical placement time each year; optional Semester 1 study abroad in Year 4</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Registered pharmacist — hospital or community</li><li>GP practices &amp; care homes</li><li>Pharmaceutical industry</li><li>Clinical research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry A + Bio/Maths/Physics at A</div></div>
      <div><div class="pf-label">Offer Rate</div><div class="pf-val">37% (2022/23)</div></div>
    </div>
    <div class="prog-star">★ The one programme in this guide with a mandatory interview: 30 minutes, recorded, on Microsoft Teams, assessing communication, numeracy, values/judgement and motivation for pharmacy specifically — King's says it can consider Medicine/Dentistry personal statements but still wants clear evidence of pharmacy-specific commitment. Also requires GCSE grade 6/B in English &amp; Maths, a criminal-conviction/DBS disclosure, Occupational Health Clearance, and applicants must turn 18 by 1 January of Year 1 (placement eligibility). English requirement sits at Band B (7.0/6.5) — higher than every other programme in this guide.</div>
  </div>
</div>

<!-- TAB 3 ADMISSIONS DATA -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<div id="tab-admissions" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Offer rates · A-level requirements · Single-year FOI-derived snapshot per programme</p>
  <h2 class="section-title">Admissions Data</h2>
  <div class="divider"></div>

  <div class="chart-section">
    <div class="chart-lbl">Offer Rate by Programme</div>
    <h3 class="chart-title">BSc/BEng vs. MSci/MEng Offer Rates</h3>
    <p class="chart-sub">Offer rate = offers made / applications received · most recent published year per programme (2022/23 or 2023/24)</p>
    <canvas id="chart-kcl-offers" height="140"></canvas>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin-top:1rem;">
      <div class="kpi"><span class="kpi-num" style="color:var(--chem-color);">65–87%</span><span class="kpi-lbl">Chemistry BSc / MSci</span></div>
      <div class="kpi"><span class="kpi-num" style="color:var(--cwb-color);">60–68%</span><span class="kpi-lbl">Chemistry w/ Biomedicine BSc / MSci</span></div>
      <div class="kpi"><span class="kpi-num" style="color:var(--bme-color);">69–71%</span><span class="kpi-lbl">Biomedical Engineering BEng / MEng</span></div>
    </div>
    <div class="chart-insight">Across all three paired families, the 4-year integrated Master's route (MSci/MEng) shows a higher offer rate than its 3-year counterpart — most visibly for Chemistry (65% BSc vs. 87% MSci). This is a pattern seen across UK chemistry departments generally, not unique to King's, and reflects applicant pool composition rather than a lower academic bar for the MSci.</div>
  </div>

  <div class="chart-section">
    <div class="chart-lbl">Natural Sciences &amp; Pharmacy</div>
    <h3 class="chart-title">The Two Outliers in This Guide</h3>
    <p class="chart-sub">One has no offer-rate history yet; the other has the lowest offer rate and the only interview</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;">
      <div class="callout" style="border-color:var(--nat-color);"><strong style="color:var(--nat-color);">Natural Sciences BSc/MSci — no data published.</strong> A newly launched degree (~2023) with no FOI offer-rate track record yet. Stated grade profile (AAC) is the lowest in this guide, consistent with a young, still-building programme rather than lower rigour.</div>
      <div class="callout" style="border-color:var(--pharm-color);"><strong style="color:var(--pharm-color);">Pharmacy MPharm — 37% offer rate (2022/23).</strong> The lowest offer rate of the nine programmes in this guide, and the only one with a mandatory interview stage layered on top of the AAA academic bar.</div>
    </div>
  </div>

  <div class="chart-section">
    <div class="chart-lbl">A-Level Grade Profile</div>
    <h3 class="chart-title">Stated Minimum Grades by Programme Family</h3>
    <p class="chart-sub">Grades range from AAC (Natural Sciences) to AAA (Biomedical Engineering, Pharmacy) — all well below the A*AA/A*A*A tier typical of Imperial or UCL's equivalent departments</p>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.5rem;">
      <div class="callout" style="border-color:var(--nat-color);text-align:center;"><strong style="color:var(--nat-color);font-size:1rem;">AAC</strong><br>Natural Sciences</div>
      <div class="callout" style="border-color:var(--chem-color);text-align:center;"><strong style="color:var(--chem-color);font-size:1rem;">AAB</strong><br>Chemistry</div>
      <div class="callout" style="border-color:var(--cwb-color);text-align:center;"><strong style="color:var(--cwb-color);font-size:1rem;">AAB</strong><br>Chem. w/ Biomedicine</div>
      <div class="callout" style="border-color:var(--bme-color);text-align:center;"><strong style="color:var(--bme-color);font-size:1rem;">AAA</strong><br>Biomedical Eng.</div>
      <div class="callout" style="border-color:var(--pharm-color);text-align:center;"><strong style="color:var(--pharm-color);font-size:1rem;">AAA</strong><br>Pharmacy</div>
    </div>
  </div>

  <div class="info-box"><strong>Data provenance:</strong> offer-rate figures are FOI-derived single-year snapshots (admissionreport.com methodology), cross-checked for programme/UCAS-code accuracy against official King's College London pages on 20 July 2026. They are <em>not</em> a five-year trend series like some other guides in this series — King's FOI responses publish irregularly by programme, so Chemistry's figures are 2023/24 (BSc) and 2022/23 (MSci) because that is the latest year each specific record covers, not a data-entry inconsistency. Offer rate ≠ enrolment rate: it measures the share of <em>applicants</em> who received an offer, not the share who ultimately enrolled. The Year in Industry variants are excluded from this guide because no offer-rate history could be located for them.</div>
</div>

<script>
(function() {
  const sharedOpts = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    scales: { y: { min:0, max:100, title:{ display:true, text:"Offer rate (%)" }, ticks:{ stepSize:20 } } }
  };
  const chartDefs = [
    { id:'chart-kcl-offers', cfg:{ type:'bar', data:{
      labels:["Chemistry","Chemistry w/ Biomedicine","Biomedical Engineering"],
      datasets:[
        { label:"BSc / BEng (3-yr)", data:[65,60,69], backgroundColor:["rgba(26,95,168,0.75)","rgba(122,59,168,0.75)","rgba(13,122,85,0.75)"] },
        { label:"MSci / MEng (4-yr)", data:[87,68,71], backgroundColor:["rgba(26,95,168,0.35)","rgba(122,59,168,0.35)","rgba(13,122,85,0.35)"] }
      ]}, options:sharedOpts }}
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawAll);
  } else {
    drawAll();
  }
  const tab = document.getElementById('tab-admissions');
  if (tab) {
    new MutationObserver(drawAll).observe(tab, { attributes:true, attributeFilter:['style','class'] });
  }
  document.addEventListener('click', function() { setTimeout(drawAll, 60); });
})();
</script>

<!-- TAB 4 HOW TO APPLY -->
<div id="tab-apply" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · Personal statement · Key dates · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">UCAS Application Process</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Step-by-step for 2026–27 entry · Shared timeline for all nine routes — Pharmacy adds an interview stage</p>
  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">May 2026</div><div class="flow-body"><strong>Register on UCAS Hub</strong> — Registration opens 12 May 2026. Choose up to 5 UCAS choices; you can mix King's programmes with other universities.</div></div>
      <div class="flow-row"><div class="flow-num">1 Sep 2026</div><div class="flow-body"><strong>Submissions open</strong> — Completed UCAS applications can be submitted from 1 September 2026.</div></div>
      <div class="flow-row"><div class="flow-num">Autumn 2026</div><div class="flow-body"><strong>Write your personal statement</strong> — One statement for all 5 UCAS choices. For the 8 no-interview programmes this is doing most of the persuasive work; for Pharmacy, King's says it can consider a Medicine/Dentistry-style statement but still wants pharmacy-specific commitment.</div></div>
      <div class="flow-row"><div class="flow-num">13 Jan 2027</div><div class="flow-body"><strong>Submit UCAS application</strong> — 18:00 UK time equal-consideration deadline for all nine programmes in this guide (none carry the earlier 15 October Oxbridge/Medicine/Dentistry deadline).</div></div>
      <div class="flow-row"><div class="flow-num">Jan–Mar 2027</div><div class="flow-body"><strong>Pharmacy applicants only: interview invitations</strong> — a 30-minute recorded interview on Microsoft Teams, covering motivation, numeracy, values/judgement and a situational scenario. You'll need to show photo ID on camera at the start.</div></div>
      <div class="flow-row"><div class="flow-num">Jan–May 2027</div><div class="flow-body"><strong>Decisions issued</strong> — Chemistry, Chemistry with Biomedicine, Natural Sciences and Biomedical Engineering are assessed on grades and personal statement alone; Pharmacy decisions also fold in interview performance.</div></div>
      <div class="flow-row"><div class="flow-num">Aug 2027</div><div class="flow-body"><strong>A-level results &amp; confirm</strong> — Meet your conditional offer. Resits are accepted by King's for these programmes (check the specific course page, as this can vary). Pharmacy offer-holders also complete Occupational Health Clearance, usually notified end of May/early June.</div></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Personal Statement Do's &amp; Don'ts</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">One statement for all 5 choices · Carries extra weight for the 8 programmes with no interview</p>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">DO</div>
      <ul class="ddlist">
        <li>Name specific chemistry topics, biomedical applications, or engineering problems that excite you</li>
        <li>Link your A-level subjects directly to the degree content</li>
        <li>Show a clear commitment to pharmacy specifically if applying to Pharmacy — not just "science" in general</li>
        <li>Mention relevant lab work, EPQ-adjacent projects, or reading — note King's does not consider the EPQ itself for entry</li>
        <li>Write for your subject — one statement must serve all 5 UCAS choices</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">DON'T</div>
      <ul class="ddlist">
        <li>Assume an interview will "fix" a weak statement for the 8 non-Pharmacy programmes — there isn't one</li>
        <li>Take A-level General Studies, Critical Thinking, Thinking Skills or Global Perspectives as one of your three A-levels — King's does not accept these</li>
        <li>Confuse Chemistry (F100/F103) with Chemistry with Biomedicine (FC17/F1C7) UCAS codes</li>
        <li>Apply to Biomedical Engineering or Natural Sciences assuming a science A-level substitutes for Mathematics — Maths A is compulsory for both</li>
        <li>Under-prepare for the Pharmacy interview by treating it like a formality — King's explicitly reviews the recording for consistency</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Common Application Mistakes</h3>
  <div>
    <div class="mistake-item"><div class="mw">Applying to Biomedical Engineering or Natural Sciences without A-level Mathematics</div><div class="mr">Maths at grade A is a fixed requirement for both — the second subject slot is what varies</div></div>
    <div class="mistake-item"><div class="mw">Assuming Chemical Engineering exists at King's</div><div class="mr">It doesn't — Biomedical Engineering is the closest engineering-adjacent route; consider UCL or Imperial if Chemical Engineering specifically is the goal</div></div>
    <div class="mistake-item"><div class="mw">Applying to Pharmacy without checking the age requirement</div><div class="mr">You must be 18 by 1 January of Year 1 (placement eligibility) — if you won't be, apply the following cycle</div></div>
    <div class="mistake-item"><div class="mw">Not disclosing spent/unspent convictions on the Pharmacy UCAS application</div><div class="mr">UCAS requires this disclosure for Pharmacy specifically; offers are conditional on a satisfactory DBS check</div></div>
    <div class="mistake-item"><div class="mw">Missing the practical endorsement in science A-levels (England, linear specs)</div><div class="mr">Required for Chemistry, Chemistry with Biomedicine, Natural Sciences and Biomedical Engineering — check with your school early</div></div>
    <div class="mistake-item"><div class="mw">Assuming Pharmacy uses the same IELTS threshold as the other 8 programmes</div><div class="mr">Pharmacy sits at Band B (7.0 overall / 6.5 per skill) — the other eight sit at Band D (6.5/6.0)</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:2rem;">Application Timeline</h3>
  <div class="tl-track">
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">12 May 2026</div><div class="tl-lbl">UCAS Hub registration opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">1 Sep 2026</div><div class="tl-lbl">Applications can be submitted</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Autumn 2026</div><div class="tl-lbl">Write personal statement</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">13 Jan 2027</div><div class="tl-lbl">UCAS equal consideration deadline</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jan–Mar 2027</div><div class="tl-lbl">Pharmacy interviews (only)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jan–May 2027</div><div class="tl-lbl">Decisions issued</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">25 Feb 2027</div><div class="tl-lbl">UCAS Extra opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Aug 2027</div><div class="tl-lbl">Results — confirm place</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">Chemistry BSc / MSci</div><a href="https://www.kcl.ac.uk/study/undergraduate/courses/chemistry-bsc" target="_blank">kcl.ac.uk/.../chemistry-bsc</a></div>
    <div class="res-card"><div class="res-card-label">Chemistry with Biomedicine</div><a href="https://www.kcl.ac.uk/study/undergraduate/courses/chemistry-with-biomedicine-bsc" target="_blank">kcl.ac.uk/.../chemistry-with-biomedicine-bsc</a></div>
    <div class="res-card"><div class="res-card-label">Natural Sciences</div><a href="https://www.kcl.ac.uk/study/undergraduate/courses/natural-sciences" target="_blank">kcl.ac.uk/.../natural-sciences</a></div>
    <div class="res-card"><div class="res-card-label">Biomedical Engineering</div><a href="https://www.kcl.ac.uk/study/undergraduate/courses/biomedical-engineering-beng" target="_blank">kcl.ac.uk/.../biomedical-engineering-beng</a></div>
    <div class="res-card"><div class="res-card-label">Pharmacy MPharm</div><a href="https://www.kcl.ac.uk/study/undergraduate/courses/pharmacy-mpharm" target="_blank">kcl.ac.uk/.../pharmacy-mpharm</a></div>
    <div class="res-card"><div class="res-card-label">English Language Requirements</div><a href="https://www.kcl.ac.uk/study/undergraduate/how-to-apply/english-language-requirements" target="_blank">kcl.ac.uk/.../english-language-requirements</a></div>
    <div class="res-card"><div class="res-card-label">UCAS 2027 Key Dates</div><div style="font-size:0.77rem;color:var(--text-secondary);">13 Jan 2027 equal consideration deadline</div></div>
    <div class="res-card"><div class="res-card-label">Contact</div><div style="font-size:0.77rem;color:var(--text-secondary);">newstudents@kcl.ac.uk</div></div>
  </div>
  <div class="info-box"><strong>All information verified directly against official King's College London course pages on 20 July 2026.</strong> Always re-check requirements on the official KCL course pages before submitting — offer grades, module lists, English bands and deadlines can change year to year, and King's requirements pages are updated more frequently than most (several were last modified within the current admissions cycle).</div>
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
  });
</script>