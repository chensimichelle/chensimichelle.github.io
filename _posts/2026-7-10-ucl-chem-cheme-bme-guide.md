---
layout: post
title: "UCL - Chemistry, Chemical Engineering, Biochemical Engineering & Biomedical Engineering Guide"
date: 2026-07-10
tags: [uk, ucl, program introduction]
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
    --bc-color: #1d9e75;
    --bc-light: #e6f7f1;
    --bc-mid: #a8ddc7;
    --bioe-color: #a8325a;
    --bioe-light: #faeef2;
    --bioe-mid: #e8b8ce;
    --ucl-color: #500778;
    --ucl-light: #f4ecf8;
    --ucl-mid: #d9b3e6;
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
  .stat-card { background: var(--ucl-light); border: 1px solid var(--ucl-mid); border-top: 3px solid var(--ucl-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--ucl-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }
  .prog-quartet { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .prog-card { border-radius: 12px; padding: 1.25rem; border: 1px solid var(--border); position: relative; overflow: hidden; }
  .prog-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-card.chem { background:var(--chem-light); } .prog-card.chem::before { background:var(--chem-color); }
  .prog-card.chemeng { background:var(--chemeng-light); } .prog-card.chemeng::before { background:var(--chemeng-color); }
  .prog-card.bc { background:var(--bc-light); } .prog-card.bc::before { background:var(--bc-color); }
  .prog-card.bioe { background:var(--bioe-light); } .prog-card.bioe::before { background:var(--bioe-color); }
  .prog-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .chem .prog-card-label { color:var(--chem-color); } .chemeng .prog-card-label { color:var(--chemeng-color); }
  .bc .prog-card-label { color:var(--bc-color); } .bioe .prog-card-label { color:var(--bioe-color); }
  .prog-card-name { font-family:'DM Serif Display',serif; font-size:1rem; color:var(--text-primary); margin-bottom:0.15rem; }
  .prog-card-meta { font-size:0.72rem; color:var(--text-muted); margin-bottom:0.75rem; }
  .prog-card-stats { display:grid; grid-template-columns:1fr 1fr; gap:0.35rem; }
  .prog-stat { background:white; border-radius:6px; padding:0.35rem 0.55rem; text-align:center; }
  .prog-stat-num { font-weight:700; font-size:0.9rem; }
  .chem .prog-stat-num { color:var(--chem-color); } .chemeng .prog-stat-num { color:var(--chemeng-color); }
  .bc .prog-stat-num { color:var(--bc-color); } .bioe .prog-stat-num { color:var(--bioe-color); }
  .prog-stat-label { font-size:0.6rem; color:var(--text-muted); }
  .decision-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:2rem; }
  .decision-card { background:var(--bg-soft); border:1px solid var(--border); border-left:3px solid var(--ucl-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .decision-q { font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-bottom:0.3rem; line-height:1.4; }
  .decision-best { font-weight:700; font-size:0.85rem; color:var(--ucl-color); margin-bottom:0.12rem; }
  .decision-also { font-size:0.73rem; color:var(--text-muted); }
  .info-box { background:var(--blog-accent-light); border-left:4px solid var(--blog-accent); border-radius:0 10px 10px 0; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.83rem; color:var(--text-secondary); line-height:1.65; }
  .info-box strong { color:var(--text-primary); }
  .req-table-wrap { overflow-x:auto; margin-bottom:2rem; }
  .req-table { width:100%; border-collapse:collapse; font-size:0.82rem !important; }
  .req-table th { padding:0.65rem 0.9rem; text-align:left; font-size:0.72rem !important; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; border-bottom:2px solid var(--border); background:var(--ucl-light); color:var(--ucl-color); }
  .req-table td { padding:0.65rem 0.9rem; border-bottom:1px solid var(--border); color:var(--text-secondary); vertical-align:top; line-height:1.5; font-size:0.8rem !important; }
  .req-table tr:nth-child(even) td { background:var(--bg-soft); }
  .req-table tr:last-child td { border-bottom:none; }
  .req-table .ucl-row-label { font-weight:600; font-size:0.8rem !important; }
  .glance-table td:first-child { border-left:4px solid transparent; }
  .glance-table tr.dept-chem td { background:var(--chem-light) !important; }
  .glance-table tr.dept-chem td:first-child { border-left-color:var(--chem-color); }
  .glance-table tr.dept-chem .prog-name, .glance-table tr.dept-chem .prog-type { color:var(--chem-color); }
  .glance-table tr.dept-chem td:nth-child(3), .glance-table tr.dept-chem td:nth-child(4), .glance-table tr.dept-chem td:nth-child(5) { color:var(--chem-color) !important; }
  .glance-table tr.dept-chemeng td { background:var(--chemeng-light) !important; }
  .glance-table tr.dept-chemeng td:first-child { border-left-color:var(--chemeng-color); }
  .glance-table tr.dept-chemeng .prog-name, .glance-table tr.dept-chemeng .prog-type { color:var(--chemeng-color); }
  .glance-table tr.dept-chemeng td:nth-child(3), .glance-table tr.dept-chemeng td:nth-child(4), .glance-table tr.dept-chemeng td:nth-child(5) { color:var(--chemeng-color) !important; }
  .glance-table tr.dept-bc td { background:var(--bc-light) !important; }
  .glance-table tr.dept-bc td:first-child { border-left-color:var(--bc-color); }
  .glance-table tr.dept-bc .prog-name, .glance-table tr.dept-bc .prog-type { color:var(--bc-color); }
  .glance-table tr.dept-bc td:nth-child(3), .glance-table tr.dept-bc td:nth-child(4), .glance-table tr.dept-bc td:nth-child(5) { color:var(--bc-color) !important; }
  .glance-table tr.dept-bioe td { background:var(--bioe-light) !important; }
  .glance-table tr.dept-bioe td:first-child { border-left-color:var(--bioe-color); }
  .glance-table tr.dept-bioe .prog-name, .glance-table tr.dept-bioe .prog-type { color:var(--bioe-color); }
  .glance-table tr.dept-bioe td:nth-child(3), .glance-table tr.dept-bioe td:nth-child(4), .glance-table tr.dept-bioe td:nth-child(5) { color:var(--bioe-color) !important; }
  .glance-table td { vertical-align:middle; font-weight:700; font-size:0.82rem !important; color:var(--text-primary); }
  .glance-table .prog-name, .glance-table .prog-type { font-weight:700; font-size:0.82rem !important; line-height:1.35; }
  .glance-table .req-grade { font-weight:700; font-size:0.82rem !important; color:var(--text-primary); line-height:1.2; }
  .glance-table .req-subjects { font-weight:400 !important; font-size:0.68rem !important; color:var(--text-muted); margin-top:0.25rem; line-height:1.4; white-space:normal; }
  .glance-table .ielts-cell { white-space:nowrap !important; padding-left:1.1rem !important; padding-right:1.1rem !important; }
  .glance-table td:nth-child(4), .glance-table td:nth-child(5) { padding-left:1.1rem !important; padding-right:1.1rem !important; }
  .badge { display:inline-block; font-weight:700; font-size:0.82rem; background:var(--ucl-color); color:white; padding:0.2rem 0.55rem; border-radius:5px; }
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:100px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.73rem; border-radius:6px; padding:0.32rem 0.55rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--ucl-color); }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--ucl-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
  .flow-body strong { color:var(--text-primary); }
  .prog-detail { border-radius:12px; border:1px solid var(--border); padding:1.4rem; margin-bottom:1.4rem; position:relative; overflow:hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.chem { background:var(--chem-light); } .prog-detail.chem::before { background:var(--chem-color); }
  .prog-detail.chemeng { background:var(--chemeng-light); } .prog-detail.chemeng::before { background:var(--chemeng-color); }
  .prog-detail.bc { background:var(--bc-light); } .prog-detail.bc::before { background:var(--bc-color); }
  .prog-detail.bioe { background:var(--bioe-light); } .prog-detail.bioe::before { background:var(--bioe-color); }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.15rem; }
  .chem .prog-detail-title { color:var(--chem-color); } .chemeng .prog-detail-title { color:var(--chemeng-color); }
  .bc .prog-detail-title { color:var(--bc-color); } .bioe .prog-detail-title { color:var(--bioe-color); }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag { font-size:0.67rem; font-weight:700; letter-spacing:0.06em; padding:0.18rem 0.55rem; border-radius:20px; color:white; }
  .ptag.high { background:#c0392b; } .ptag.mod { background:#e67e22; } .ptag.low { background:#27ae60; }
  .ptag.c { background:var(--chem-color); } .ptag.ce { background:var(--chemeng-color); }
  .ptag.b { background:var(--bc-color); } .ptag.bm { background:var(--bioe-color); }
  .prog-detail-body { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:0.85rem; }
  .sec-label { font-size:0.63rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem; }
  .prog-desc { font-size:0.8rem; color:var(--text-secondary); line-height:1.65; }
  .plist { list-style:none; }
  .plist li { font-size:0.78rem; color:var(--text-secondary); padding:0.22rem 0 0.22rem 1rem; position:relative; line-height:1.4; border-bottom:1px solid rgba(0,0,0,0.05); }
  .plist li:last-child { border-bottom:none; }
  .plist li::before { content:'›'; position:absolute; left:0; font-weight:700; }
  .chem .plist li::before { color:var(--chem-color); } .chemeng .plist li::before { color:var(--chemeng-color); }
  .bc .plist li::before { color:var(--bc-color); } .bioe .plist li::before { color:var(--bioe-color); }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:0.65rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); }
  .pf-label { font-size:0.62rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.12rem; }
  .chem .pf-label { color:var(--chem-color); } .chemeng .pf-label { color:var(--chemeng-color); }
  .bc .pf-label { color:var(--bc-color); } .bioe .pf-label { color:var(--bioe-color); }
  .pf-val { font-size:0.78rem; color:var(--text-primary); font-weight:600; }
  .prog-star { margin-top:0.7rem; font-size:0.75rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .chem .prog-star { border-left:2px solid var(--chem-color); } .chemeng .prog-star { border-left:2px solid var(--chemeng-color); }
  .bc .prog-star { border-left:2px solid var(--bc-color); } .bioe .prog-star { border-left:2px solid var(--bioe-color); }
  .chart-section { background:var(--bg-soft); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.5rem; margin-bottom:1.75rem; }
  .chart-lbl { font-size:0.63rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--ucl-color); margin-bottom:0.25rem; }
  .chart-title { font-family:'DM Serif Display',serif; font-size:1.05rem; font-weight:400; color:var(--text-primary); margin-bottom:0.18rem; }
  .chart-sub { font-size:0.77rem; font-style:italic; color:var(--text-muted); margin-bottom:0.9rem; }
  .chart-wrap { position:relative; width:100%; }
  .chart-insight { margin-top:0.8rem; font-size:0.79rem; color:var(--text-secondary); background:var(--ucl-light); border-left:3px solid var(--ucl-color); padding:0.5rem 0.8rem; border-radius:0 6px 6px 0; line-height:1.55; }
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
  .tl-item:not(:last-child)::after { content:''; position:absolute; top:10px; left:55px; width:110px; height:2px; background:var(--ucl-color); opacity:0.22; }
  .tl-dot { width:20px; height:20px; border-radius:50%; background:var(--ucl-color); border:2px solid white; margin-bottom:0.45rem; flex-shrink:0; z-index:1; }
  .tl-item.hl .tl-dot { background:var(--blog-accent); }
  .tl-date { font-size:0.7rem; font-weight:700; color:var(--ucl-color); margin-bottom:0.18rem; text-align:center; }
  .tl-item.hl .tl-date { color:var(--blog-accent); }
  .tl-lbl { font-size:0.66rem; color:var(--text-primary); text-align:center; line-height:1.3; }
  .res-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:0.7rem; margin-bottom:2rem; }
  .res-card { background:var(--ucl-light); border:1px solid var(--ucl-mid); border-radius:8px; padding:0.8rem 1rem; }
  .res-card-label { font-weight:700; color:var(--ucl-color); font-size:0.79rem; margin-bottom:0.22rem; }
  .res-card a { color:var(--ucl-color); font-size:0.73rem; word-break:break-all; }
  .data-table-wrap { overflow-x:auto; margin-bottom:1.75rem; }
  .data-table { width:100%; border-collapse:collapse; font-size:0.76rem !important; }
  .data-table th { padding:0.55rem 0.7rem; text-align:left; font-size:0.66rem !important; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; border-bottom:2px solid var(--border); background:var(--ucl-light); color:var(--ucl-color); white-space:nowrap; }
  .data-table td { padding:0.5rem 0.7rem; border-bottom:1px solid var(--border); color:var(--text-secondary); white-space:nowrap; font-size:0.76rem !important; line-height:1.4; }
  .data-table tr:nth-child(even) td { background:var(--bg-soft); }
  .data-table tr:last-child td { border-bottom:none; }
  .data-table .ucl-row-label { font-weight:600; font-size:0.76rem !important; color:var(--text-primary); white-space:normal; }
  .data-table .agg-row td { font-weight:700; background:var(--ucl-light) !important; color:var(--text-primary); font-size:0.76rem !important; }
  .flag { font-size:0.68rem !important; color:var(--text-muted); font-style:italic; }
  @media (max-width:680px) {
    .stat-row,.prog-quartet,.do-dont,.decision-grid { grid-template-columns:1fr; }
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
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Chemistry · Chemical Engineering · Biochemical Engineering · Biomedical Engineering · A-Level Applicant Guide · 2027 Entry</p>
  <h2 class="section-title">UCL — University College London</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>4 undergraduate programme families</strong> — Chemistry, Chemical Engineering, Biochemical Engineering, and Biomedical Engineering — at UCL, ranked <strong>#8 in the world (QS 2026)</strong>. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2027 entry</strong>.</p>
    <p>Key differentiators: <strong>Chemistry</strong> is UCL's largest and most flexible department here, with 7+ named routes (BSc/MSci, plus Maths and Management Studies joint programmes); <strong>Chemical Engineering</strong> sits within the Integrated Engineering Programme; <strong>Biochemical Engineering</strong> is a separate, adjacent department bridging chemistry and biotech and is markedly the least competitive by offer rate; <strong>Biomedical Engineering</strong> sits in the Department of Medical Physics and Biomedical Engineering, alongside Physics-with-Medical-Physics routes. All follow the standard UCAS 2027-entry cycle, with an equal consideration deadline of <strong>13 January 2027</strong>.</p>
  </div>
  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">#8</span><span class="stat-card-label">QS World Rankings 2026</span></div>
    <div class="stat-card"><span class="stat-card-num">4</span><span class="stat-card-label">Departments in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">15+</span><span class="stat-card-label">Named UG programmes covered</span></div>
    <div class="stat-card"><span class="stat-card-num">13 Jan</span><span class="stat-card-label">UCAS equal consideration deadline (2027)</span></div>
  </div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">The 4 Departments at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">2 representative programmes per department · colour-coded by department</p>
  <div class="req-table-wrap">
    <table class="req-table glance-table">
      <thead><tr><th>Programme</th><th>A-Level Requirement</th><th>IELTS</th><th>Places</th><th>Offer Rate</th></tr></thead>
      <tbody>
        <tr class="dept-chem"><td><div class="prog-name">Chemistry</div><div class="prog-type">BSc</div></td><td><div class="req-grade">AAA</div><div class="req-subjects">Chemistry required<span style="display:block;margin-top:0.15rem;">+ one of Biology/Physics/Maths</span></div></td><td class="ielts-cell">6.5/6</td><td rowspan="2">200</td><td>50.7%</td></tr>
        <tr class="dept-chem"><td><div class="prog-name">Chemistry</div><div class="prog-type">MSci</div></td><td><div class="req-grade">A*AA</div><div class="req-subjects">Chemistry required<span style="display:block;margin-top:0.15rem;">+ one of Biology/Physics/Maths</span></div></td><td class="ielts-cell">6.5/6</td><td>68.6%</td></tr>
        <tr class="dept-chemeng"><td><div class="prog-name">Chemical Eng.</div><div class="prog-type">BEng</div></td><td><div class="req-grade">AAB</div><div class="req-subjects">Mathematics + Chemistry</div></td><td class="ielts-cell">6.5/6</td><td rowspan="2">147</td><td>24.7%</td></tr>
        <tr class="dept-chemeng"><td><div class="prog-name">Chemical Eng.</div><div class="prog-type">MEng</div></td><td><div class="req-grade">A*AA</div><div class="req-subjects">Mathematics (min. A) + Chemistry (min. B)</div></td><td class="ielts-cell">6.5/6</td><td>40.8%</td></tr>
        <tr class="dept-bc"><td><div class="prog-name">Biochemical Eng.</div><div class="prog-type">BEng</div></td><td><div class="req-grade">AAA</div><div class="req-subjects">Mathematics required<span style="display:block;margin-top:0.15rem;">plus one from Biology, Chemistry or Physics</span></div></td><td class="ielts-cell">6.5/6</td><td rowspan="2">90</td><td>76.9%</td></tr>
        <tr class="dept-bc"><td><div class="prog-name">Biochemical Eng.</div><div class="prog-type">MEng</div></td><td><div class="req-grade">AAA</div><div class="req-subjects">Mathematics required<span style="display:block;margin-top:0.15rem;">plus one from Biology, Chemistry or Physics</span></div></td><td class="ielts-cell">6.5/6</td><td>86.6%</td></tr>
        <tr class="dept-bioe"><td><div class="prog-name">Biomedical Eng.</div><div class="prog-type">BEng</div></td><td><div class="req-grade">A/A</div><div class="req-subjects">Mathematics + Physics<span style="display:block;margin-top:0.15rem;">(Biology may substitute Physics if graded A at GCSE)</span></div></td><td class="ielts-cell">6.5/6</td><td rowspan="2">105</td><td>41.7%</td></tr>
        <tr class="dept-bioe"><td><div class="prog-name">Biomedical Eng.</div><div class="prog-type">MEng</div></td><td><div class="req-grade">A/A</div><div class="req-subjects">Mathematics + Physics<span style="display:block;margin-top:0.15rem;">(Biology may substitute Physics if graded A at GCSE)</span></div></td><td class="ielts-cell">6.5/6</td><td>50.2%</td></tr>
        <tr class="dept-bioe"><td><div class="prog-name">Physics w/ Med. Physics</div><div class="prog-type">BSc</div></td><td><div class="req-grade">A*AA</div><div class="req-subjects">Mathematics and Physics required. A* must be in one of these<span style="display:block;margin-top:0.15rem;">Biology and Chemistry preferred</span></div></td><td class="ielts-cell">6.5/6</td><td rowspan="2">28</td><td>90.5%</td></tr>
        <tr class="dept-bioe"><td><div class="prog-name">Medical Physics</div><div class="prog-type">MSci</div></td><td><div class="req-grade">A*AA</div><div class="req-subjects">Mathematics and Physics required. A* must be in one of these<span style="display:block;margin-top:0.15rem;">Biology and Chemistry preferred</span></div></td><td class="ielts-cell">6.5/6</td><td>69.5%</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.68rem;color:var(--text-muted);line-height:1.5;margin-top:-1.25rem;margin-bottom:2rem;">IELTS shown as overall/minimum per element (UCL "Standard level" baseline — some faculties require a higher level, confirm on the course page). See the Programmes and Admissions Data tabs for the full breakdown.</p>
  <div class="info-box"><strong>Offer rate ≠ chance of a place:</strong> UCL makes offers well above the number of available seats, since not every offer-holder accepts or meets conditions. The "applications per place" figures above give a rougher but more honest sense of final-outcome competitiveness than the headline offer rate. Biochemical Engineering is, by a wide margin, the least competitive of the four departments in this guide.</div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Which Department Suits You?</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Find your best fit based on your interests and strengths</p>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">"I love atoms, molecules, and chemical reactions — and want maximum flexibility"</div><div class="decision-best">→ Chemistry</div><div class="decision-also">Also consider: Chemistry with Mathematics if you're maths-strong</div></div>
    <div class="decision-card"><div class="decision-q">"I want to design large-scale industrial or pharmaceutical processes"</div><div class="decision-best">→ Chemical Engineering</div><div class="decision-also">Also consider: Biochemical Engineering (biotech/pharma focus)</div></div>
    <div class="decision-card"><div class="decision-q">"I'm drawn to biotech, fermentation, and bioprocessing rather than heavy industry"</div><div class="decision-best">→ Biochemical Engineering</div><div class="decision-also">Also consider: Chemical Engineering's MEng "Biochemical Engineering" Year 4 route</div></div>
    <div class="decision-card"><div class="decision-q">"I want to engineer medical devices, imaging systems or prosthetics"</div><div class="decision-best">→ Biomedical Engineering</div><div class="decision-also">Also consider: Physics with Medical Physics (imaging-leaning)</div></div>
    <div class="decision-card"><div class="decision-q">"I want a business-facing route into the chemical sciences"</div><div class="decision-best">→ Chemistry with Management Studies</div><div class="decision-also">Also consider: standard Chemistry BSc/MSci</div></div>
    <div class="decision-card"><div class="decision-q">"I want the strongest employability/least competitive route into chem-adjacent engineering"</div><div class="decision-best">→ Biochemical Engineering</div><div class="decision-also">Also consider: still verify fit — it's a distinct, biotech-facing curriculum, not "easy Chemical Engineering"</div></div>
  </div>
  <div class="info-box"><strong>Important:</strong> Chemistry is UCL's broadest department here — BSc and MSci share identical first two years, so you can defer that choice until the end of Year 2. Chemical Engineering, Biochemical Engineering, and Biomedical Engineering similarly let you defer the BEng/MEng or 3-year/4-year decision, typically to the end of Year 3. Apply for the named route that matches your interests now; internal transfers between closely related routes are usually possible early on, subject to performance.</div>
</div>

<!-- TAB 2 PROGRAMMES -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">4 departments · Faculty of Mathematical &amp; Physical Sciences · Faculty of Engineering Sciences</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>

  <div class="prog-detail chem">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemistry</div><div class="prog-detail-meta">Dept of Chemistry · Faculty of Mathematical &amp; Physical Sciences</div></div>
      <div class="ptags"><span class="ptag c">7 named routes</span><span class="ptag mod">Moderate–High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">UCL Chemistry's full undergraduate portfolio: BSc Chemistry, MSci Chemistry, BSc/MSci Chemistry with Mathematics, BSc/MSci Chemistry with Management Studies, MSci Chemistry (International Programme, with a year abroad in Australia/Canada/USA), and Chemistry with a European Language (BSc/MSci). BSc and MSci share an identical first two years, so the choice can be deferred to end of Year 2 — UCL recommends starting on the MSci to keep options open, since BSc→MSci transfer requires consistently strong (2:1-level) performance.</p>
        <div class="sec-label" style="margin-top:0.75rem;">Structure notes</div>
        <ul class="plist"><li>MSci = 480 credits · BSc = 360 credits</li><li>MSci is RSC-accredited for full Chartered Chemist (CChem) status; BSc meets requirements only partially</li><li>Chemistry with Mathematics: joint Maths + Chemistry required</li><li>International Programme: year abroad built into the MSci</li></ul>
      </div>
      <div>
        <div class="sec-label">Entry &amp; contact</div>
        <ul class="plist"><li>Chemistry BSc/MSci: Chemistry + one of Biology/Physics/Maths required</li><li>Typical band: AAA (BSc) / A*AA (MSci)</li><li>Chemistry with Mathematics: Maths + Chemistry required, AAA/A*AA</li><li>Contact: admissions.chem@ucl.ac.uk</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Dept Aggregate Offer Rate</div><div class="pf-val">55.1% (880/1,597)</div></div>
      <div><div class="pf-label">Places Available</div><div class="pf-val">200</div></div>
      <div><div class="pf-label">Apps per Place</div><div class="pf-val">~8.0</div></div>
    </div>
    <div class="prog-star">★ Chemistry with a European Language did not appear in either the course-listing or admissions-statistics datasets used here — it may not be running, or is too small to report separately. Verify directly on the department hub before relying on it. The UCAS code F101 was found reused across two of UCL's own listings for MSci routes — double-check the exact code on UCAS itself.</div>
  </div>

  <div class="prog-detail chemeng">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemical Engineering</div><div class="prog-detail-meta">Dept of Chemical Engineering · Faculty of Engineering Sciences</div></div>
      <div class="ptags"><span class="ptag ce">BEng / MEng</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">UCL's only two Chemical Engineering entry routes are the BEng and MEng — unlike Chemistry, there are no separate joint-named variants; specialisation instead happens within the MEng's Year 4 "route" choice (standard MEng, Chemistry, Biochemical Engineering, Engineering Mathematics, or Study Abroad). Part of the Integrated Engineering Programme (IEP): interdisciplinary, project/scenario-based teaching, with IEP "minor" options such as programming, business, sustainability, and molecular engineering.</p>
        <div class="sec-label" style="margin-top:0.75rem;">Structure notes</div>
        <ul class="plist"><li>BEng/MEng share a common curriculum through Year 3; transfer to MEng possible at end of Year 3 (subject to approval)</li><li>Year 3: group design project — a full chemical process plant, covering unit design, safety, sustainability and costing</li><li>Both IChemE-accredited; MEng is the direct route to Chartered Engineer (CEng)</li><li>Optional Year in Industry (student-sourced placement)</li></ul>
      </div>
      <div>
        <div class="sec-label">Entry &amp; contact</div>
        <ul class="plist"><li>BEng: Mathematics + Chemistry required, typical AAB band</li><li>MEng: Mathematics (min. grade A) + Chemistry (min. grade B), typical A*AA/AAA band</li><li>Contact: ug-chemeng@ucl.ac.uk</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Dept Aggregate Offer Rate</div><div class="pf-val">32.7% (459/1,403)</div></div>
      <div><div class="pf-label">Places Available</div><div class="pf-val">147</div></div>
      <div><div class="pf-label">Apps per Place</div><div class="pf-val">~9.5</div></div>
    </div>
    <div class="prog-star">★ Highest applications-per-place of the four departments (~9.5) despite a mid-range headline offer rate — a reminder that offer rate alone understates real competitiveness here. MEng has a noticeably higher offer rate than BEng (40.8% vs 24.7%) in the 2024/25 cycle.</div>
  </div>

  <div class="prog-detail bc">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biochemical Engineering</div><div class="prog-detail-meta">Dept of Biochemical Engineering (separate, adjacent dept) · Faculty of Engineering Sciences</div></div>
      <div class="ptags"><span class="ptag b">BEng / MEng</span><span class="ptag low">Least Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A distinct department, adjacent to Chemistry and Chemical Engineering, bridging chemical/biological science with biotechnology and bioprocessing. Relevant if you're drawn to fermentation, biopharmaceuticals, or bioprocess design rather than heavy industrial chemical engineering. By a wide margin the most accessible of the four departments in this guide by offer rate.</p>
        <div class="sec-label" style="margin-top:0.75rem;">Structure notes</div>
        <ul class="plist"><li>BEng · 3 years / MEng · 4 years</li><li>Sits within the same Faculty of Engineering Sciences as Chemical Engineering</li><li>Chemical Engineering MEng students can also route into Biochemical Engineering content via a Year 4 specialisation, without switching department</li></ul>
      </div>
      <div>
        <div class="sec-label">Entry &amp; contact</div>
        <ul class="plist"><li>See department hub for exact A-level requirements — not itemised in the sourced dataset</li><li>Contact: biochemeng@ucl.ac.uk</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Dept Aggregate Offer Rate</div><div class="pf-val">82.2% (426/518)</div></div>
      <div><div class="pf-label">Places Available</div><div class="pf-val">90</div></div>
      <div><div class="pf-label">Apps per Place</div><div class="pf-val">~5.8</div></div>
    </div>
    <div class="prog-star">★ Caution on the MEng Chinese-applicant figure: only 18 Chinese applicants were recorded, all 18 receiving offers (100%) — a genuinely tiny sample where a single-digit swing would change the rate substantially. Treat as directional, not a stable benchmark.</div>
  </div>

  <div class="prog-detail bioe">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biomedical Engineering</div><div class="prog-detail-meta">Dept of Medical Physics &amp; Biomedical Engineering · Faculty of Engineering Sciences</div></div>
      <div class="ptags"><span class="ptag bm">BEng: HC60 / MEng: H160</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Applies engineering to medicine and biology — medical devices, imaging systems and physiological monitoring. One of four UG entry routes run by the same department: BEng/MEng Biomedical Engineering, plus BSc Physics with Medical Physics and MSci Medical Physics, which are taught jointly with UCL Physics & Astronomy and sit closer to the physics/imaging side than device-design engineering. Highly competitive: the department's own FAQ cites roughly 500 applications for around 50 BME places per year.</p>
        <div class="sec-label" style="margin-top:0.75rem;">Structure notes</div>
        <ul class="plist"><li>BEng/MEng share an identical first 3 years; transfer possible up to end of Year 3, requiring 55%+ weighted average</li><li>Year 3: major individual project linked to UCL research strengths / healthcare partners</li><li>MEng Year 4: group design project + advanced modules; MEng is IET-accredited, meeting CEng requirements directly</li><li>Optional Year in Industry (student-sourced) and Year Abroad (MEng only, Year 3)</li></ul>
      </div>
      <div>
        <div class="sec-label">Entry &amp; contact</div>
        <ul class="plist"><li>Mathematics and Physics required, typically grade A</li><li>Biology acceptable in place of Physics if Physics was taken to grade A/7 at GCSE</li><li>Contact: medphys.teaching@ucl.ac.uk</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">BME-Line Offer Rate</div><div class="pf-val">49.8% (423/849)</div></div>
      <div><div class="pf-label">Places Available (BME line)</div><div class="pf-val">105</div></div>
      <div><div class="pf-label">Apps per Place</div><div class="pf-val">~8.1</div></div>
    </div>
    <div class="prog-star">★ Don't confuse the BME-line aggregate with the department's separate "Medical Physics" line (Physics with Medical Physics + MSci Medical Physics), which runs at a much higher 83.9% offer rate (135/161) — those routes are joint-taught with Physics and noticeably less competitive than BEng/MEng itself.</div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- TAB 3 ADMISSIONS DATA (includes Chinese applicant data) -->
<div id="tab-admissions" class="tab-panel">

  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Applications · Offer rates · Chinese applicant data · 2024/25 cycle</p>
  <h2 class="section-title">Admissions Data</h2>
  <div class="divider"></div>

  <div class="info-box"><strong>Source:</strong> UCL FOI response 024-370 (per-programme applications/offers for the 2024/25 cycle, including a Chinese-domiciled-applicant breakdown) and a separate UG "Apps per Place" department-aggregate summary. Values shown as <strong>&lt;5</strong> are suppressed for privacy by UCL — Chinese-specific rates for several smaller programmes can only be bounded, not stated precisely. This is a single cycle's figures; year-to-year variation can be meaningful, especially for smaller programmes with low applicant counts.</div>

  <div class="chart-section">
    <div class="chart-lbl">Department Offer Rates · 2024/25</div>
    <p class="chart-sub">All applicants, department aggregate level · offer rate = offers made / applications received</p>
    <canvas id="chart-dept-offer" height="140"></canvas>
    <div class="chart-insight">Biochemical Engineering (82.2%) is far less competitive by offer rate than the other three departments. Chemical Engineering, despite a mid-range 32.7% offer rate, has the highest applications-per-place (~9.5) of the four.</div>
  </div>

  <div class="chart-section">
    <div class="chart-lbl">Applications per Place · 2024/25</div>
    <p class="chart-sub">A rougher but more honest read on final-outcome competitiveness than offer rate alone</p>
    <canvas id="chart-apps-place" height="140"></canvas>
  </div>

  <!-- Chemistry table -->
  <h3 class="chart-title" style="margin-top:0.5rem;">Chemistry — Full Programme Breakdown</h3>
  <p class="chart-sub">All applicants vs Chinese-domiciled applicants, 2024/25</p>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>Programme</th><th>All Apps → Offers</th><th>All Offer Rate</th><th>Chinese Apps → Offers</th><th>Chinese Offer Rate</th></tr></thead>
      <tbody>
        <tr><td class="ucl-row-label">BSc Chemistry</td><td>980 → 497</td><td>50.7%</td><td>518 → 235</td><td>45.4%</td></tr>
        <tr><td class="ucl-row-label">BSc Chemistry with Mathematics</td><td>67 → 32</td><td>47.8%</td><td>18 → &lt;5</td><td>≤27.8%</td></tr>
        <tr><td class="ucl-row-label">BSc Chemistry with Management Studies</td><td>69 → 19</td><td>27.5%</td><td>24 → &lt;5</td><td>≤20.8%</td></tr>
        <tr><td class="ucl-row-label">MSci Chemistry</td><td>360 → 247</td><td>68.6%</td><td>67 → 28</td><td>41.8%</td></tr>
        <tr><td class="ucl-row-label">MSci Chemistry with Mathematics</td><td>41 → 27</td><td>65.9%</td><td>&lt;5 → &lt;5</td><td>n/a (suppressed)</td></tr>
        <tr><td class="ucl-row-label">MSci Chemistry with Management Studies</td><td>34 → 17</td><td>50.0%</td><td>&lt;5 → &lt;5</td><td>n/a (suppressed)</td></tr>
        <tr><td class="ucl-row-label">MSci Chemistry (International Programme)</td><td>78 → 55</td><td>70.5%</td><td>7 → &lt;5</td><td>≤71.4%</td></tr>
        <tr><td class="ucl-row-label">Chemistry with a European Language</td><td colspan="4"><span class="flag">Not found in either dataset — likely not running, or too small to report</span></td></tr>
        <tr class="agg-row"><td class="ucl-row-label">Department Aggregate</td><td>1,597 → 880</td><td>55.1%</td><td colspan="2">~8.0 applications per place</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Chemical Engineering + Biochemical Engineering table -->
  <h3 class="chart-title" style="margin-top:1.5rem;">Chemical Engineering &amp; Biochemical Engineering — Full Breakdown</h3>
  <p class="chart-sub">Two separate departments, shown together for comparison</p>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>Programme</th><th>All Apps → Offers</th><th>All Offer Rate</th><th>Chinese Apps → Offers</th><th>Chinese Offer Rate</th></tr></thead>
      <tbody>
        <tr><td class="ucl-row-label">BEng Chemical Engineering</td><td>842 → 208</td><td>24.7%</td><td>253 → 88</td><td>34.8%</td></tr>
        <tr><td class="ucl-row-label">MEng Chemical Engineering</td><td>679 → 277</td><td>40.8%</td><td>63 → 32</td><td>50.8%</td></tr>
        <tr class="agg-row"><td class="ucl-row-label">Chemical Eng. Aggregate</td><td>1,403 → 459</td><td>32.7%</td><td colspan="2">~9.5 applications per place</td></tr>
        <tr><td class="ucl-row-label">BEng Biochemical Engineering</td><td>268 → 206</td><td>76.9%</td><td>103 → 96</td><td>93.2%</td></tr>
        <tr><td class="ucl-row-label">MEng Biochemical Engineering</td><td>134 → 116</td><td>86.6%</td><td>18 → 18</td><td>100%*</td></tr>
        <tr class="agg-row"><td class="ucl-row-label">Biochemical Eng. Aggregate</td><td>518 → 426</td><td>82.2%</td><td colspan="2">~5.8 applications per place</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.68rem;color:var(--text-muted);line-height:1.5;margin-top:-0.5rem;margin-bottom:1.5rem;">*MEng Biochemical Engineering Chinese figure is based on only 18 applicants — a very small sample; treat with caution rather than as a stable benchmark.</p>

  <!-- Biomedical Engineering / Medical Physics table -->
  <h3 class="chart-title" style="margin-top:1.5rem;">Biomedical Engineering &amp; Medical Physics — Full Breakdown</h3>
  <p class="chart-sub">All four UG entry routes in the Department of Medical Physics &amp; Biomedical Engineering</p>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>Programme</th><th>All Apps → Offers</th><th>All Offer Rate</th><th>Chinese Apps → Offers</th><th>Chinese Offer Rate</th></tr></thead>
      <tbody>
        <tr><td class="ucl-row-label">BEng Biomedical Engineering</td><td>516 → 215</td><td>41.7%</td><td>199 → 104</td><td>52.3%</td></tr>
        <tr><td class="ucl-row-label">MEng Biomedical Engineering</td><td>434 → 218</td><td>50.2%</td><td>109 → 62</td><td>56.9%</td></tr>
        <tr class="agg-row"><td class="ucl-row-label">Biomedical Eng. ("BME line") Aggregate</td><td>849 → 423</td><td>49.8%</td><td colspan="2">~8.1 applications per place</td></tr>
        <tr><td class="ucl-row-label">BSc Physics with Medical Physics</td><td>105 → 95</td><td>90.5%</td><td>65 → 62</td><td>95.4%</td></tr>
        <tr><td class="ucl-row-label">MSci Medical Physics</td><td>59 → 41</td><td>69.5%</td><td>19 → 16</td><td>84.2%</td></tr>
        <tr class="agg-row"><td class="ucl-row-label">"Medical Physics" Line Aggregate</td><td>161 → 135</td><td>83.9%</td><td colspan="2">Separate from BME line</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.68rem;color:var(--text-muted);line-height:1.5;margin-top:-0.5rem;">The Physics-with-Medical-Physics routes are taught jointly with UCL Physics &amp; Astronomy and sit closer to imaging/physics than device-design engineering — their much higher offer rates reflect a different applicant pool, not that BME itself is easy to get into.</p>

</div><!-- end tab-admissions -->

<!-- ✅ All charts drawn lazily when tab becomes visible -->
<script>
(function() {
  const sharedBarOpts = {
    responsive: true,
    plugins: { legend: { display:false } },
    scales: { y: { min:0, max:100, title:{ display:true, text:"%" }, ticks:{ stepSize:20 } } }
  };

  const chartDefs = [
    { id:'chart-dept-offer', cfg:{ type:'bar', data:{
      labels:["Chemistry","Chemical Engineering","Biochemical Engineering","Biomedical Engineering (BME line)"],
      datasets:[{ label:"Department offer rate (%)", data:[55.1,32.7,82.2,49.8],
        backgroundColor:["rgba(26,95,168,0.8)","rgba(138,90,0,0.8)","rgba(29,158,117,0.8)","rgba(168,50,90,0.8)"] }]
    }, options:sharedBarOpts }},
    { id:'chart-apps-place', cfg:{ type:'bar', data:{
      labels:["Chemistry","Chemical Engineering","Biochemical Engineering","Biomedical Engineering (BME line)"],
      datasets:[{ label:"Applications per place", data:[8.0,9.5,5.8,8.1],
        backgroundColor:["rgba(26,95,168,0.8)","rgba(138,90,0,0.8)","rgba(29,158,117,0.8)","rgba(168,50,90,0.8)"] }]
    }, options:{ responsive:true, plugins:{legend:{display:false}}, scales:{ y:{ min:0, max:12, title:{display:true,text:"Applications per place"}, ticks:{stepSize:2} } } } }}
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
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · Deadlines · Entry requirements summary · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">UCAS Application Process</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">2027-entry cycle · Applications for all UCL routes go through UCAS — no separate UCL portal application needed</p>
  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">12 May 2026</div><div class="flow-body"><strong>UCAS applications open for 2027 entry</strong> — Register on UCAS Hub and start researching your chosen named routes (e.g. Chemistry vs Chemistry with Mathematics; BEng vs MEng).</div></div>
      <div class="flow-row"><div class="flow-num">May–Dec 2026</div><div class="flow-body"><strong>Write your personal statement</strong> — One statement serves all 5 UCAS choices, so it needs to work across every course you apply to, not just your UCL choice.</div></div>
      <div class="flow-row"><div class="flow-num">13 Jan 2027</div><div class="flow-body"><strong>UCAS equal consideration deadline</strong> — 6pm UK time. Applications may still be accepted after this via Clearing or late applications, but check UCAS directly rather than relying on that as a fallback.</div></div>
      <div class="flow-row"><div class="flow-num">Post-deadline</div><div class="flow-body"><strong>Decisions issued</strong> — Timing varies by department; some UCL science/engineering courses may include an additional interview or written assessment stage — confirm on each individual course page.</div></div>
      <div class="flow-row"><div class="flow-num">Aug 2027</div><div class="flow-body"><strong>A-level results &amp; confirmation</strong> — Meet your conditional offer to secure your place.</div></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Entry Requirements Summary (A-Level, Indicative)</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">Always confirm exact grade profiles, GCSE prerequisites, and English language requirements on the official course page before applying</p>
  <div class="req-table-wrap">
    <table class="req-table">
      <thead><tr><th>Route</th><th>Required Subjects</th><th>Typical Band</th></tr></thead>
      <tbody>
        <tr><td class="ucl-row-label">Chemistry BSc / MSci</td><td>Chemistry + one of Biology/Physics/Maths</td><td>AAA / A*AA</td></tr>
        <tr><td class="ucl-row-label">Chemistry with Mathematics</td><td>Mathematics + Chemistry</td><td>AAA / A*AA</td></tr>
        <tr><td class="ucl-row-label">Chemical Engineering BEng</td><td>Mathematics + Chemistry</td><td>AAB</td></tr>
        <tr><td class="ucl-row-label">Chemical Engineering MEng</td><td>Mathematics (min. A) + Chemistry (min. B)</td><td>A*AA / AAA</td></tr>
        <tr><td class="ucl-row-label">Biochemical Engineering BEng / MEng</td><td>See department hub — not itemised in sourced data</td><td>Verify on official page</td></tr>
        <tr><td class="ucl-row-label">Biomedical Engineering BEng / MEng</td><td>Mathematics + Physics (Biology can substitute Physics if Physics graded A/7 at GCSE)</td><td>Typically grade A in both</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:1.5rem;">Common Application Mistakes</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;"></p>
  <div>
    <div class="mistake-item"><div class="mw">Confusing the department aggregate offer rate with your specific programme's rate</div><div class="mr">Check the exact named route in the tables above — rates vary widely within a department (e.g. Chemistry with Management Studies at 27.5% vs MSci Chemistry at 68.6%)</div></div>
    <div class="mistake-item"><div class="mw">Assuming Biomedical Engineering and Physics with Medical Physics are equally competitive</div><div class="mr">They're taught jointly with different departments and have very different offer rates — don't apply to one assuming it behaves like the other</div></div>
    <div class="mistake-item"><div class="mw">Treating "-2026" URLs on UCL's site as current for 2027 entry</div><div class="mr">UCL was actively republishing course pages under new year-suffixed URLs at time of research — re-check each link close to application time</div></div>
    <div class="mistake-item"><div class="mw">Assuming Chemical Engineering and Biochemical Engineering are the same department</div><div class="mr">They're separate, adjacent departments with very different offer rates (32.7% vs 82.2%) — verify which one your named UCAS choice actually belongs to</div></div>
    <div class="mistake-item"><div class="mw">Relying on small-sample Chinese-applicant rates as if they were stable</div><div class="mr">Programmes with under ~20 Chinese applicants (e.g. MSci Chemistry with Mathematics, MEng Biochemical Engineering) can swing sharply year to year — treat as directional only</div></div>
    <div class="mistake-item"><div class="mw">Missing the 13 January 2027 equal consideration deadline</div><div class="mr">Late applications may still be possible via Clearing, but don't plan around that — treat 13 Jan as the real deadline</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:2rem;">Application Timeline</h3>
  <div class="tl-track">
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">12 May 2026</div><div class="tl-lbl">UCAS 2027-entry applications open</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Summer 2026</div><div class="tl-lbl">Research named routes &amp; open days</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Autumn 2026</div><div class="tl-lbl">Write personal statement</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">13 Jan 2027</div><div class="tl-lbl">UCAS equal consideration deadline</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Early 2027</div><div class="tl-lbl">Decisions issued</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Aug 2027</div><div class="tl-lbl">Results — confirm place</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">Chemistry Dept Hub</div><a href="https://www.ucl.ac.uk/mathematical-physical-sciences/chemistry/study/undergraduate" target="_blank">ucl.ac.uk/chemistry</a></div>
    <div class="res-card"><div class="res-card-label">Chemical Engineering Dept Hub</div><a href="https://www.ucl.ac.uk/engineering/chemical-engineering/study/undergraduate-study" target="_blank">ucl.ac.uk/chemical-engineering</a></div>
    <div class="res-card"><div class="res-card-label">Biochemical Engineering Dept Hub</div><a href="https://www.ucl.ac.uk/biochemical-engineering/study/undergraduate" target="_blank">ucl.ac.uk/biochemical-engineering</a></div>
    <div class="res-card"><div class="res-card-label">Biomedical Eng. / Medical Physics Dept Hub</div><a href="https://www.ucl.ac.uk/engineering/medical-physics-biomedical-engineering/study/undergraduate" target="_blank">ucl.ac.uk/medical-physics-biomedical-engineering</a></div>
    <div class="res-card"><div class="res-card-label">BME FAQ (competitiveness, admissions)</div><a href="https://www.ucl.ac.uk/medical-physics-biomedical-engineering/study/undergraduate/frequently-asked-questions-biomedical-engineering" target="_blank">ucl.ac.uk/…/faq</a></div>
    <div class="res-card"><div class="res-card-label">UCAS</div><a href="https://www.ucas.com" target="_blank">ucas.com</a></div>
  </div>
  <div class="info-box"><strong>All admissions statistics current as of the 2024/25 cycle; course/requirement details compiled from official UCL pages during 2026.</strong> UCL was actively transitioning course pages from "-2026" to "-2027" URLs at time of research. Always verify requirements, deadlines, and UCAS codes on official UCL and UCAS pages before submitting — these can change year to year, and several UCAS codes in this guide were not independently confirmed beyond Biomedical Engineering.</div>
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