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
  .ptag.flagship { background:var(--text-primary); }
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

  /* =====================================================
     NEW — Tab 1 "Snapshot" cycle tables
     ===================================================== */
  .cycle-block { border-radius:12px; overflow:hidden; border:1px solid var(--border); margin-bottom:1.5rem; }
  .cycle-bar { padding:0.8rem 1.1rem; color:#fff; display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0.4rem; }
  .cycle-bar .name { font-family:'DM Serif Display',serif; font-size:1rem; }
  .cycle-bar .sub { font-size:0.68rem; opacity:0.85; }
  .cycle-bar.chem { background:var(--chem-color); } .cycle-bar.chemeng { background:var(--chemeng-color); }
  .cycle-bar.mat { background:var(--mat-color); } .cycle-bar.bioe { background:var(--bioe-color); }
  table.cycle-table { width:100%; border-collapse:collapse; font-size:0.78rem; }
  .cycle-table thead th { font-size:0.62rem; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:var(--text-muted); text-align:right; padding:0.6rem 0.7rem 0.35rem; background:var(--bg-soft); white-space:nowrap; }
  .cycle-table thead th:first-child { text-align:left; }
  .cycle-table thead th .yr { display:block; font-weight:400; font-size:0.58rem; margin-top:0.1rem; }
  .cycle-table td { padding:0.65rem 0.7rem; text-align:right; border-bottom:1px solid var(--border); vertical-align:middle; }
  .cycle-table td:first-child { text-align:left; }
  .cycle-table tbody tr:last-child td { border-bottom:none; }
  .cycle-table tr.total-row td { background:var(--bg-soft); font-size:0.74rem; color:var(--text-muted); }
  .cycle-table .pname { font-weight:700; color:var(--text-primary); display:block; font-size:0.82rem; }
  .cycle-table .pname.chem{color:var(--chem-color);} .cycle-table .pname.chemeng{color:var(--chemeng-color);}
  .cycle-table .pname.mat{color:var(--mat-color);} .cycle-table .pname.bioe{color:var(--bioe-color);}
  .cycle-table td.dept-edge{border-left:3px solid transparent;}
  .cycle-table tr.r-chem td:first-child{border-left:3px solid var(--chem-color);}
  .cycle-table tr.r-chemeng td:first-child{border-left:3px solid var(--chemeng-color);}
  .cycle-table tr.r-mat td:first-child{border-left:3px solid var(--mat-color);}
  .cycle-table tr.r-bioe td:first-child{border-left:3px solid var(--bioe-color);}
  .cycle-table tr.total-row td:first-child{border-left:3px solid transparent;}
  .dept-legend{display:flex;gap:1.1rem;flex-wrap:wrap;margin-bottom:1rem;font-size:0.74rem;color:var(--text-secondary);}
  .dept-legend span{display:inline-flex;align-items:center;gap:0.4rem;}
  .dept-legend .dot{width:9px;height:9px;border-radius:50%;display:inline-block;}
  .cycle-table .pmeta { display:block; font-size:0.63rem; color:var(--text-muted); margin-top:0.1rem; font-weight:400; }
  .rate-val { font-weight:700; }
  .rate-val.chem { color:var(--chem-color); } .rate-val.chemeng { color:var(--chemeng-color); }
  .rate-val.mat { color:var(--mat-color); } .rate-val.bioe { color:var(--bioe-color); }
  .chg { font-weight:700; font-size:0.78rem; }
  .chg.pos { color:#27ae60; } .chg.neg { color:#c0392b; }
  .chg.pos::before { content:"+"; }
  @media (max-width:680px){ .cycle-table{ font-size:0.68rem; } .cycle-table td, .cycle-table thead th{ padding:0.45rem 0.35rem; } }

  /* =====================================================
     NEW — Tab 2 "Selectivity Spectrum"
     ===================================================== */
  .spectrum-block { background:var(--bg-soft); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.4rem; margin-bottom:1.5rem; }
  .spectrum-hdr { display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.1rem; }
  .spectrum-hdr h3 { font-family:'DM Serif Display',serif; font-size:1.1rem; }
  .chem .spectrum-hdr h3, h3.chem-t { color:var(--chem-color); }
  .spectrum-hdr .meta { font-size:0.68rem; color:var(--text-muted); display:block; margin-top:0.1rem; }
  .spread-badge { text-align:right; }
  .spread-badge .num { font-family:'DM Serif Display',serif; font-size:1.5rem; line-height:1; }
  .spread-badge .num.flat { color:#27ae60; }
  .spread-badge .num.wide { color:#c0392b; }
  .spread-badge .lbl { font-size:0.6rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); }
  .spec-line { display:flex; align-items:center; gap:0.8rem; padding:0.45rem 0; border-bottom:1px dashed var(--border); }
  .spec-line:last-child { border-bottom:none; }
  .spec-name { width:172px; flex:0 0 172px; }
  .spec-name b { display:block; font-size:0.78rem; }
  .spec-name small { color:var(--text-muted); font-size:0.63rem; }
  .spec-bar-wrap { flex:1; height:9px; background:rgba(0,0,0,0.07); border-radius:5px; }
  .spec-bar-fill { height:100%; border-radius:5px; }
  .spec-num { width:56px; flex:0 0 56px; text-align:right; font-weight:700; font-size:0.8rem; }
  .spec-num small { display:block; font-weight:400; color:var(--text-muted); font-size:0.6rem; }
  .spectrum-note { margin-top:0.9rem; font-size:0.74rem; color:var(--text-secondary); line-height:1.6; border-top:1px solid var(--border); padding-top:0.7rem; }
  .single-route-box { font-size:0.82rem; color:var(--text-secondary); line-height:1.65; }
  .single-route-box .big { font-family:'DM Serif Display',serif; font-size:1.8rem; }
  @media (max-width:680px){ .spec-name{width:auto;flex:1 0 100%;margin-bottom:0.3rem;} .spec-line{flex-wrap:wrap;} .spec-num{margin-left:auto;} }

  /* =====================================================
     NEW — Tab 3 diff list (appended inside prog-detail cards)
     ===================================================== */
  .diff-list { margin-top:0.9rem; border-top:1px solid rgba(0,0,0,0.08); padding-top:0.85rem; }
  .diff-list .dl-title { font-size:0.63rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.6rem; }
  .diff-row { display:grid; grid-template-columns:175px 1fr; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid rgba(0,0,0,0.05); }
  .diff-row:last-child { border-bottom:none; }
  .diff-row .dn { font-weight:700; font-size:0.78rem; }
  .diff-row .dn .rate { display:block; font-weight:700; font-size:0.76rem; margin-top:0.15rem; }
  .chem .diff-row .dn .rate { color:var(--chem-color); } .chemeng .diff-row .dn .rate { color:var(--chemeng-color); }
  .mat .diff-row .dn .rate { color:var(--mat-color); } .bioe .diff-row .dn .rate { color:var(--bioe-color); }
  .diff-row .dt { font-size:0.77rem; color:var(--text-secondary); line-height:1.55; }
  @media (max-width:680px){ .diff-row{ grid-template-columns:1fr; } }
</style>


<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('snapshot',this)">Snapshot</button>
    <button class="tab-btn" onclick="showTab('spectrum',this)">Selectivity Spectrum</button>
    <button class="tab-btn" onclick="showTab('differences',this)">Programme Differences</button>
    <button class="tab-btn" onclick="showTab('admissions',this)">Admissions Data</button>
    <button class="tab-btn" onclick="showTab('apply',this)">How to Apply</button>
  </div>
</nav>

<!-- ============================================================
     TAB 1 — SNAPSHOT (replaces old Overview)
     ============================================================ -->
<div id="tab-snapshot" class="tab-panel active" style="display:block">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Chemistry · Chemical Engineering · Materials · Biomedical Engineering · A-Level Applicant Guide · 2026–27 Entry</p>
  <h2 class="section-title">Imperial College London</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>four departments</strong> — Chemistry, Chemical Engineering, Materials, and Bioengineering — at Imperial College London, ranked <strong>#2 in the world (QS 2026)</strong>. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2026–27 entry</strong>.</p>
    <p>The table below merges every department's two largest routes by application volume into one view, 2023 → 2024 UCAS cycles, with <strong>RATE = Offers ÷ Applications</strong> and a year-on-year <strong>Change</strong> column. Programme names are colour-coded by department (see legend) — Chemical Engineering runs only one undergraduate route, so it appears once. Tab 2 covers every remaining sub-programme; Tab 3 explains what's academically different between them.</p>
  </div>

  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">#2</span><span class="stat-card-label">QS World Rankings 2026</span></div>
    <div class="stat-card"><span class="stat-card-num">4</span><span class="stat-card-label">Departments in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">G5</span><span class="stat-card-label">Elite UK university group</span></div>
    <div class="stat-card"><span class="stat-card-num">7.0</span><span class="stat-card-label">IELTS required (all four)</span></div>
  </div>

  <div class="dept-legend">
    <span><span class="dot" style="background:var(--chem-color);"></span>Chemistry</span>
    <span><span class="dot" style="background:var(--chemeng-color);"></span>Chemical Engineering</span>
    <span><span class="dot" style="background:var(--mat-color);"></span>Materials</span>
    <span><span class="dot" style="background:var(--bioe-color);"></span>Bioengineering</span>
  </div>

  <div class="cycle-block">
    <table class="cycle-table">
      <thead><tr>
        <th>Programme</th>
        <th>Apps<span class="yr">2023</span></th><th>Offers<span class="yr">2023</span></th><th>Rate<span class="yr">2023</span></th>
        <th>Apps<span class="yr">2024</span></th><th>Offers<span class="yr">2024</span></th><th>Rate<span class="yr">2024</span></th>
        <th>Change</th>
      </tr></thead>
      <tbody>
        <tr class="r-chem">
          <td><span class="pname chem">Chemistry</span><span class="pmeta">BSc · 3yr · F100 · A*AA · Interview</span></td>
          <td>640</td><td>152</td><td><span class="rate-val chem">23.8%</span></td>
          <td>704</td><td>202</td><td><span class="rate-val chem">28.7%</span></td>
          <td><span class="chg pos">4.9pp</span></td>
        </tr>
        <tr class="r-chem">
          <td><span class="pname chem">Chemistry</span><span class="pmeta">MSci · 4yr · A*AA · Interview</span></td>
          <td>382</td><td>194</td><td><span class="rate-val chem">50.8%</span></td>
          <td>365</td><td>171</td><td><span class="rate-val chem">46.8%</span></td>
          <td><span class="chg neg">−4.0pp</span></td>
        </tr>
        <tr class="total-row">
          <td><span class="pname chem" style="font-size:0.74rem;">Chemistry dept total</span><span class="pmeta">all 11 routes</span></td>
          <td>1,492</td><td>513</td><td><span class="rate-val chem">34.4%</span></td>
          <td>1,665</td><td>584</td><td><span class="rate-val chem">35.1%</span></td>
          <td><span class="chg pos">0.7pp</span></td>
        </tr>

        <tr class="r-chemeng">
          <td><span class="pname chemeng">Chemical Engineering</span><span class="pmeta">MEng · 4yr · H801 · A*AA · ESAT + Interview</span></td>
          <td>852</td><td>396</td><td><span class="rate-val chemeng">46.5%</span></td>
          <td>980</td><td>428</td><td><span class="rate-val chemeng">43.7%</span></td>
          <td><span class="chg neg">−2.8pp</span></td>
        </tr>

        <tr class="r-mat">
          <td><span class="pname mat">Materials Sci &amp; Eng</span><span class="pmeta">BEng · 3yr · JF52 · A*AA · Interview</span></td>
          <td>254</td><td>109</td><td><span class="rate-val mat">42.9%</span></td>
          <td>391</td><td>114</td><td><span class="rate-val mat">29.2%</span></td>
          <td><span class="chg neg">−13.7pp</span></td>
        </tr>
        <tr class="r-mat">
          <td><span class="pname mat">Materials Sci &amp; Eng</span><span class="pmeta">MEng · 4yr · JFM2 · A*AA · Interview</span></td>
          <td>244</td><td>153</td><td><span class="rate-val mat">62.7%</span></td>
          <td>295</td><td>154</td><td><span class="rate-val mat">52.2%</span></td>
          <td><span class="chg neg">−10.5pp</span></td>
        </tr>
        <tr class="total-row">
          <td><span class="pname mat" style="font-size:0.74rem;">Materials dept total</span><span class="pmeta">all 4 active routes</span></td>
          <td>620</td><td>300</td><td><span class="rate-val mat">48.4%</span></td>
          <td>821</td><td>298</td><td><span class="rate-val mat">36.3%</span></td>
          <td><span class="chg neg">−12.1pp</span></td>
        </tr>

        <tr class="r-bioe">
          <td><span class="pname bioe">Biomedical Engineering</span><span class="pmeta">MEng · 4yr · H161 · A*AA · Interview</span></td>
          <td>651</td><td>311</td><td><span class="rate-val bioe">47.8%</span></td>
          <td>709</td><td>341</td><td><span class="rate-val bioe">48.1%</span></td>
          <td><span class="chg pos">0.3pp</span></td>
        </tr>
        <tr class="r-bioe">
          <td><span class="pname bioe">Molecular Bioengineering</span><span class="pmeta">MEng · 4yr · H160 · A*AA · Interview</span></td>
          <td>175</td><td>117</td><td><span class="rate-val bioe">66.9%</span></td>
          <td>240</td><td>133</td><td><span class="rate-val bioe">55.4%</span></td>
          <td><span class="chg neg">−11.5pp</span></td>
        </tr>
        <tr class="total-row">
          <td><span class="pname bioe" style="font-size:0.74rem;">Bioengineering dept total</span><span class="pmeta">all 3 active routes</span></td>
          <td>907</td><td>475</td><td><span class="rate-val bioe">52.4%</span></td>
          <td>1,064</td><td>541</td><td><span class="rate-val bioe">50.8%</span></td>
          <td><span class="chg neg">−1.6pp</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="info-box"><strong>Reading this table:</strong> RATE = Offers ÷ Applications. Tabs 2–3 use a different metric, Success Rate = Confirmed Places ÷ Applications, so the same programme shows a different percentage there — that's intentional, not an error. Our most recent complete UCAS cycle is 2024; Imperial's published admissions statistics currently run 2020–2024.</div>
  <div class="info-box" style="border-color:#c0392b;background:#fdf3f3;"><strong>Worth a decision:</strong> by application volume, Molecular Bioengineering — not Biomedical Technology Ventures — is Bioengineering's second-largest route, so it's shown above. It's smaller than Biomedical Engineering, but its offer rate ran <em>higher</em> in both 2023 and 2024, not lower — see Tab 3. Swap in Biomedical Technology Ventures here if you'd rather keep strict alignment with the Biosciences guide's existing scope.</div>
</div>

<!-- ============================================================
     TAB 2 — SELECTIVITY SPECTRUM (new)
     ============================================================ -->
<div id="tab-spectrum" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Every undergraduate route · 2020–2024 pooled · sorted easiest → hardest</p>
  <h2 class="section-title">Selectivity Spectrum</h2>
  <div class="divider"></div>
  <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.7;">Success Rate here = Confirmed Places ÷ Applications, pooled across 2020–2024 for stability (small cohorts swing a lot year to year). Bars share a 0–35% scale across all four departments.</p>

  <!-- CHEMISTRY -->
  <div class="spectrum-block">
    <div class="spectrum-hdr">
      <div><h3 class="chem-t">Chemistry</h3><span class="meta">Faculty of Natural Sciences · 11 active routes</span></div>
      <div class="spread-badge"><div class="num wide">3.9×</div><div class="lbl">widest spread</div></div>
    </div>
    <div class="spec-line"><div class="spec-name"><b>+ Year in Industry</b><small>MSci · 5yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:73.4%;background:var(--chem-color)"></div></div><div class="spec-num">25.7%<small>n=315</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>Chemistry (straight)</b><small>MSci · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:60%;background:var(--chem-color)"></div></div><div class="spec-num">21.0%<small>n=1,735</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Research Abroad</b><small>MSci · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:54.3%;background:var(--chem-mid)"></div></div><div class="spec-num">19.0%<small>n=273</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Research Abroad + YII</b><small>MSci · 5yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:52.6%;background:var(--chem-mid)"></div></div><div class="spec-num">18.4%<small>n=179</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Medicinal Chemistry + YII</b><small>MSci · 5yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:48.6%;background:var(--chem-mid)"></div></div><div class="spec-num">17.0%<small>n=259</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Molecular Physics</b><small>MSci · pooled</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:44%;background:#7a8aab"></div></div><div class="spec-num">15.4%<small>n=332</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Medicinal Chemistry</b><small>MSci · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:39.1%;background:#7a8aab"></div></div><div class="spec-num">13.7%<small>n=663</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>Chemistry (straight)</b><small>BSc · 3yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:38.6%;background:#7a8aab"></div></div><div class="spec-num">13.5%<small>n=2,854</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Management</b><small>BSc · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:18.9%;background:#1a1a1a"></div></div><div class="spec-num">6.6%<small>n=241</small></div></div>
    <div class="spectrum-note">French / German / Spanish for Science MSci variants ran earlier in the period but had <b>zero applicants in 2023–24</b> — appear discontinued, omitted above. <b>+ Management (BSc/5yr)</b> and Molecular-Physics-with-YII have too few confirmed places to plot reliably (n&lt;15/yr) — directional only.</div>
  </div>

  <!-- CHEMICAL ENGINEERING -->
  <div class="spectrum-block">
    <div class="spectrum-hdr">
      <div><h3 style="color:var(--chemeng-color);">Chemical Engineering</h3><span class="meta">Faculty of Engineering · 1 route</span></div>
      <div class="spread-badge"><div class="num flat">n/a</div><div class="lbl">single-route dept</div></div>
    </div>
    <div class="single-route-box">Chemical Engineering runs <b>one</b> admissions line — MEng, ESAT-gated, <span class="big" style="color:var(--chemeng-color);">19.0%</span> five-year success rate (979 apps → 168 confirmed in 2024 alone). There's no internal comparison to make here: that figure is the genuine odds, with no easier side-door through a sibling programme, unlike every other department on this page.</div>
  </div>

  <!-- MATERIALS -->
  <div class="spectrum-block">
    <div class="spectrum-hdr">
      <div><h3 style="color:var(--mat-color);">Materials</h3><span class="meta">Faculty of Engineering · 4 active routes</span></div>
      <div class="spread-badge"><div class="num" style="color:#c0742e;">2.5×</div><div class="lbl">spread</div></div>
    </div>
    <div class="spec-line"><div class="spec-name"><b>Materials Sci &amp; Eng</b><small>MEng · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:74.6%;background:var(--mat-color)"></div></div><div class="spec-num">26.1%<small>n=1,274</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>Materials Sci &amp; Eng</b><small>BEng · 3yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:43.7%;background:var(--mat-mid)"></div></div><div class="spec-num">15.3%<small>n=1,434</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>+ Nuclear Engineering</b><small>MEng · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:37.1%;background:#9b7aab"></div></div><div class="spec-num">13.0%<small>n=253</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>Biomaterials &amp; Tissue Eng</b><small>MEng · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:29.7%;background:#1a1a1a"></div></div><div class="spec-num">10.4%<small>n=249</small></div></div>
    <div class="spectrum-note"><b>+ Management (BEng)</b> ran around a tiny base earlier in the period and shows <b>zero applicants in 2024</b> — looks discontinued, worth verifying with the department. Note the direction here is the <b>opposite</b> of Chemistry: the specialist tracks (Nuclear, Biomaterials) are <i>harder</i> to get into than the plain MEng, not easier.</div>
  </div>

  <!-- BIOENGINEERING -->
  <div class="spectrum-block">
    <div class="spectrum-hdr">
      <div><h3 style="color:var(--bioe-color);">Bioengineering</h3><span class="meta">Faculty of Engineering · 3 active routes</span></div>
      <div class="spread-badge"><div class="num flat">1.4×</div><div class="lbl">narrowest spread</div></div>
    </div>
    <div class="spec-line"><div class="spec-name"><b>Molecular Bioengineering</b><small>MEng · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:89.7%;background:var(--bioe-color)"></div></div><div class="spec-num">31.4%<small>n=930</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>Biomedical Tech Ventures</b><small>BSc · 3yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:62.6%;background:var(--bioe-mid)"></div></div><div class="spec-num">21.9%<small>n=196 · 2yr only</small></div></div>
    <div class="spec-line"><div class="spec-name"><b>Biomedical Engineering</b><small>MEng · 4yr</small></div><div class="spec-bar-wrap"><div class="spec-bar-fill" style="width:62%;background:var(--bioe-mid)"></div></div><div class="spec-num">21.7%<small>n=3,036</small></div></div>
    <div class="spectrum-note">Bioengineering is the most internally consistent department here — its three routes sit within 10 points of each other. Biomedical Technology Ventures only has two admissions cycles of data (launched 2023), so treat its figure as provisional.</div>
  </div>

  <div class="info-box"><strong>Headline:</strong> Chemistry has by far the widest internal spread (3.9×, Management vs. Year-in-Industry) of any department here — bigger than the spread <em>between</em> Chemistry and Chemical Engineering as whole departments. Bioengineering, despite covering three genuinely different programmes, is the most evenly matched.</div>
</div>

<!-- ============================================================
     TAB 3 — PROGRAMME DIFFERENCES (replaces old Programmes)
     ============================================================ -->
<div id="tab-differences" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">4 departments · Faculty of Natural Sciences · Faculty of Engineering</p>
  <h2 class="section-title">Programme Differences</h2>
  <div class="divider"></div>
  <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.7;">Each department's largest, default route — described in full, exactly as before — followed by how every sibling route differs from it.</p>

  <!-- CHEMISTRY: major = BSc -->
  <div class="prog-detail chem">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemistry</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Natural Sciences · UCAS: F100</div></div>
      <div class="ptags"><span class="ptag flagship">Major Programme</span><span class="ptag c">Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Explores atoms, molecules and reactions — from quantum chemistry and thermodynamics to organic synthesis and spectroscopy. The department's largest and default route: 704 applications in 2024, more than every other Chemistry route combined with room to spare. Years one and two are identical across all six Chemistry routes below, so switching later is straightforward.</p>
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
      <div><div class="pf-label">2024 Offer Rate</div><div class="pf-val">28.7% (202/704)</div></div>
    </div>
    <div class="prog-star">★ 51% of 2024 entrants held A*A*A*+; 85% held A*A*A or above. Overseas offers: 120 (2020) → 202 (2024).</div>

    <div class="diff-list">
      <div class="dl-title">How the other five routes differ from the BSc</div>
      <div class="diff-row"><div class="dn">MSci<span class="rate">13.5% → 21.0%</span></div><div class="dt">One extra year, same entry grades, same first two years. Adds a substantially bigger final-year research project and more advanced, research-led modules. The success-rate jump isn't about the work being easier — applicants who go straight for the 4-year code already know they want the research-heavy path, so it's a smaller, more self-selected pool.</div></div>
      <div class="diff-row"><div class="dn">+ Medicinal Chemistry<span class="rate">13.7%</span></div><div class="dt">Same MSci structure, co-taught by chemistry lecturers and pharmaceutical-industry experts, aimed at drug discovery. The one specialist track that does <em>not</em> get easier than the BSc — its rate sits right alongside it.</div></div>
      <div class="diff-row"><div class="dn">+ Molecular Physics<span class="rate">15.4%</span></div><div class="dt">Same MSci structure, co-taught with Mathematics and Physics instead. Slightly above the BSc's rate, between Medicinal Chemistry and the placement-based routes.</div></div>
      <div class="diff-row"><div class="dn">+ Year in Industry / + Research Abroad<span class="rate">18–26%</span></div><div class="dt">A paid industry placement, or an ~8-month placement at a partner university overseas, added onto the MSci. Both run well above the BSc's rate — a longer, more specific commitment narrows the pool to people who are already sure.</div></div>
      <div class="diff-row"><div class="dn">+ Management<span class="rate">6.6%</span></div><div class="dt">Keeps the BSc's three years, swaps the final-year chemistry specialisation for a year in the Business School. By far the smallest applicant pool of any Chemistry route — yet consistently the <em>most</em> selective, every year for five years running.</div></div>
    </div>
  </div>

  <!-- CHEMICAL ENGINEERING: only route -->
  <div class="prog-detail chemeng">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Chemical Engineering</div><div class="prog-detail-meta">MEng · 4 years · Faculty of Engineering · UCAS: H801</div></div>
      <div class="ptags"><span class="ptag flagship">Major Programme</span><span class="ptag ce">ESAT + Interview</span><span class="ptag high">High Competition</span></div>
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
    <div class="prog-star">★ Most demanding entry — ESAT + interview. 64% of 2024 entrants held A*A*A*+. Applications grew from 754 (2020) to 979 (2024).</div>

    <div class="diff-list">
      <div class="dl-title">How the other routes differ</div>
      <div class="diff-row"><div class="dn">There aren't any<span class="rate">19.0%</span></div><div class="dt">The only department on this page with no sibling routes at all. The 19.0% five-year success rate is the genuine odds for anyone applying — there's no easier specialist side-door the way there is in Chemistry or Materials.</div></div>
    </div>
  </div>

  <!-- MATERIALS: major = BEng -->
  <div class="prog-detail mat">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Materials Science &amp; Engineering</div><div class="prog-detail-meta">BEng · 3 years · Faculty of Engineering · UCAS: JF52</div></div>
      <div class="ptags"><span class="ptag flagship">Major Programme</span><span class="ptag m">Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Studies the structure, properties and applications of materials — metals, ceramics, polymers and biomaterials — and how to design new ones. The largest of the department's four active routes (391 applications in 2024). The first two years are shared with every other Materials route, so the BEng is the natural default if you're not yet committed to a specialism.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Structure &amp; properties of materials</li><li>Computational modelling</li><li>Materials design &amp; characterisation</li><li>Group &amp; individual project work</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Materials / R&amp;D engineer</li><li>Aerospace &amp; defence</li><li>Biomedical devices</li><li>Renewable energy sector</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*AA <span style="font-weight:400;color:var(--text-muted);">(min. AAA)</span></div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Maths + Physics/Chemistry</div></div>
      <div><div class="pf-label">2024 Offer Rate</div><div class="pf-val">29.2% (114/391)</div></div>
    </div>
    <div class="prog-star">★ Most accessible grade profile of the four departments — ~20% of entrants held AAA, the floor minimum. Typical offer is A*AA, not A*A*A as sometimes quoted — confirm against the department's own apply page.</div>

    <div class="diff-list">
      <div class="dl-title">How the other three routes differ from the BEng</div>
      <div class="diff-row"><div class="dn">MEng<span class="rate">15.3% → 26.1%</span></div><div class="dt">One extra year, Master's-level elective modules and an individual research project added to the same BEng foundation. Same pattern as Chemistry's BSc → MSci step: the 4-year code draws a smaller, more committed pool and is easier to get an offer on than the BEng, despite identical entry grades.</div></div>
      <div class="diff-row"><div class="dn">+ Nuclear Engineering<span class="rate">13.0%</span></div><div class="dt">Same MEng structure, specialised toward nuclear materials and engineering. Here the pattern flips from Chemistry's specialist tracks — this runs <em>harder</em> to get into than the BEng it's built on, not easier.</div></div>
      <div class="diff-row"><div class="dn">Biomaterials &amp; Tissue Engineering<span class="rate">10.4%</span></div><div class="dt">A separate MEng specialised toward biomedical-facing materials — bone regeneration, implants, tissue scaffolds. Currently the single most selective route in the department.</div></div>
      <div class="diff-row"><div class="dn">+ Management<span class="rate">discontinued?</span></div><div class="dt">Existed earlier in 2020–24 but shows zero applicants in the latest cycle — looks discontinued. Worth checking with the department before presenting it as a live option.</div></div>
    </div>
  </div>

  <!-- BIOENGINEERING: major = Biomedical Engineering -->
  <div class="prog-detail bioe">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biomedical Engineering</div><div class="prog-detail-meta">MEng · 4 years · Faculty of Engineering · UCAS: H161</div></div>
      <div class="ptags"><span class="ptag flagship">Major Programme</span><span class="ptag b">Interview</span><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A "top-down" engineering route into medicine and biology — mechanics, imaging, prosthetics, medical devices, physiological monitoring. By far the largest and most established route in the department — 709 applications in 2024, more than the other two routes combined — and the one most applicants mean when they say "Bioengineering at Imperial."</p>
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
    <div class="prog-star">★ Highest offer rate of the four departments (48.1%) and largest overseas offer volume (341 in 2024, up from 154 in 2020).</div>

    <div class="diff-list">
      <div class="dl-title">How the other two routes differ from Biomedical Engineering</div>
      <div class="diff-row"><div class="dn">Molecular Bioengineering<span class="rate">21.7% → 31.4%</span></div><div class="dt">Not a duration variant but a genuinely different academic identity — "bottom-up" engineering of biological systems at the molecular and cellular level, rather than top-down devices and mechanics. Smaller than Biomedical Engineering (930 vs. 3,036 applications over five years) — but its success rate is the <em>highest</em> in the department, not the lowest. If another page on this site calls it "more competitive" than Biomedical Engineering, this data says otherwise.</div></div>
      <div class="diff-row"><div class="dn">Biomedical Technology Ventures<span class="rate">21.9%</span></div><div class="dt">Keeps Biomedical Engineering's core foundation but swaps a meaningful slice of engineering content for entrepreneurship and business, run jointly with the Business School, including a startup internship. Launched 2023, so only two admissions cycles exist — treat its rate as provisional. Sits almost exactly level with Biomedical Engineering itself.</div></div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- ============================================================
     TAB 4 — ADMISSIONS DATA (unchanged from current page)
     ============================================================ -->
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

<!-- ============================================================
     TAB 5 — HOW TO APPLY (unchanged from current page)
     ============================================================ -->
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
    <div class="res-card"><div class="res-card-label">Materials</div><a href="https://www.imperial.ac.uk/study/courses/undergraduate/materials-science-engineering-beng/" target="_blank">imperial.ac.uk/study/courses</a></div>
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
    var f=document.getElementById('tab-snapshot');if(f)f.style.display='block';
  });
</script>