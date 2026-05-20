---
layout: post
title: "University of Cambridge - Natural Sciences & Engineering (Bioengineering) Guide"
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
    --natsci-color: #003a8c;
    --natsci-light: #e8eef8;
    --natsci-mid: #b0c4e8;
    --eng-color: #6b1a1a;
    --eng-light: #f8eeee;
    --eng-mid: #e0b8b8;
    --cam-color: #003a8c;
    --cam-light: #e8eef8;
    --cam-mid: #b0c4e8;
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
  .stat-card { background: var(--cam-light); border: 1px solid var(--cam-mid); border-top: 3px solid var(--cam-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--cam-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }
  .prog-duo { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .prog-card { border-radius: 12px; padding: 1.25rem; border: 1px solid var(--border); position: relative; overflow: hidden; }
  .prog-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-card.natsci { background:var(--natsci-light); } .prog-card.natsci::before { background:var(--natsci-color); }
  .prog-card.eng { background:var(--eng-light); } .prog-card.eng::before { background:var(--eng-color); }
  .prog-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .natsci .prog-card-label { color:var(--natsci-color); } .eng .prog-card-label { color:var(--eng-color); }
  .prog-card-name { font-family:'DM Serif Display',serif; font-size:1rem; color:var(--text-primary); margin-bottom:0.15rem; }
  .prog-card-meta { font-size:0.72rem; color:var(--text-muted); margin-bottom:0.75rem; }
  .prog-card-stats { display:grid; grid-template-columns:1fr 1fr; gap:0.35rem; }
  .prog-stat { background:white; border-radius:6px; padding:0.35rem 0.55rem; text-align:center; }
  .prog-stat-num { font-weight:700; font-size:0.9rem; }
  .natsci .prog-stat-num { color:var(--natsci-color); } .eng .prog-stat-num { color:var(--eng-color); }
  .prog-stat-label { font-size:0.6rem; color:var(--text-muted); }
  .decision-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:2rem; }
  .decision-card { background:var(--bg-soft); border:1px solid var(--border); border-left:3px solid var(--cam-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .decision-q { font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-bottom:0.3rem; line-height:1.4; }
  .decision-best { font-weight:700; font-size:0.85rem; color:var(--cam-color); margin-bottom:0.12rem; }
  .decision-also { font-size:0.73rem; color:var(--text-muted); }
  .info-box { background:var(--blog-accent-light); border-left:4px solid var(--blog-accent); border-radius:0 10px 10px 0; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.83rem; color:var(--text-secondary); line-height:1.65; }
  .info-box strong { color:var(--text-primary); }
  .req-table-wrap { overflow-x:auto; margin-bottom:2rem; }
  .req-table { width:100%; border-collapse:collapse; font-size:0.82rem; }
  .req-table th { padding:0.65rem 0.9rem; text-align:left; font-size:0.72rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; border-bottom:2px solid var(--border); background:var(--cam-light); color:var(--cam-color); }
  .req-table td { padding:0.65rem 0.9rem; border-bottom:1px solid var(--border); color:var(--text-secondary); vertical-align:top; line-height:1.5; font-size:0.8rem; }
  .req-table tr:nth-child(even) td { background:var(--bg-soft); }
  .req-table tr:last-child td { border-bottom:none; }
  .req-table .row-label { font-weight:600; }
  .badge { display:inline-block; font-weight:700; font-size:0.82rem; background:var(--cam-color); color:white; padding:0.2rem 0.55rem; border-radius:5px; }
  .esat-box { background: var(--natsci-light); border-radius: 10px; padding: 1.1rem; margin-bottom: 1.5rem; }
  .esat-row { display:flex; justify-content:space-between; align-items:center; background:white; border-radius:6px; padding:0.4rem 0.7rem; margin-bottom:0.35rem; font-size:0.79rem; color:var(--text-secondary); border:1px solid var(--border); }
  .etag { font-size:0.63rem; font-weight:700; padding:0.12rem 0.45rem; border-radius:20px; color:white; }
  .esat-note { margin-top:0.6rem; font-size:0.73rem; font-style:italic; color:var(--text-muted); line-height:1.5; padding:0.45rem 0.6rem; background:rgba(255,255,255,0.6); border-radius:5px; }
  .ielts-box { background:var(--cam-light); border:1px solid var(--cam-mid); border-left:4px solid var(--cam-color); border-radius:0 10px 10px 0; padding:1.25rem 1.5rem; margin-bottom:2rem; display:flex; gap:2rem; align-items:center; flex-wrap:wrap; }
  .ielts-num { font-family:'DM Serif Display',serif; font-size:2.5rem; color:var(--cam-color); display:block; line-height:1; }
  .ielts-lbl { font-size:0.7rem; color:var(--text-muted); }
  .ielts-desc { font-size:0.82rem; color:var(--text-secondary); line-height:1.7; }
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:100px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.73rem; border-radius:6px; padding:0.32rem 0.55rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--cam-color); }
  .flow-num.hl { background: #c0392b; }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--cam-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
  .flow-body strong { color:var(--text-primary); }
  .prog-detail { border-radius:12px; border:1px solid var(--border); padding:1.4rem; margin-bottom:1.4rem; position:relative; overflow:hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.natsci { background:var(--natsci-light); } .prog-detail.natsci::before { background:var(--natsci-color); }
  .prog-detail.eng { background:var(--eng-light); } .prog-detail.eng::before { background:var(--eng-color); }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.15rem; }
  .natsci .prog-detail-title { color:var(--natsci-color); } .eng .prog-detail-title { color:var(--eng-color); }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag { font-size:0.67rem; font-weight:700; letter-spacing:0.06em; padding:0.18rem 0.55rem; border-radius:20px; color:white; }
  .ptag.high { background:#c0392b; } .ptag.mod { background:#e67e22; }
  .ptag.ns { background:var(--natsci-color); } .ptag.en { background:var(--eng-color); }
  .prog-detail-body { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:0.85rem; }
  .sec-label { font-size:0.63rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem; }
  .prog-desc { font-size:0.8rem; color:var(--text-secondary); line-height:1.65; }
  .plist { list-style:none; }
  .plist li { font-size:0.78rem; color:var(--text-secondary); padding:0.22rem 0 0.22rem 1rem; position:relative; line-height:1.4; border-bottom:1px solid rgba(0,0,0,0.05); }
  .plist li:last-child { border-bottom:none; }
  .plist li::before { content:'›'; position:absolute; left:0; font-weight:700; }
  .natsci .plist li::before { color:var(--natsci-color); } .eng .plist li::before { color:var(--eng-color); }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:0.65rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); }
  .pf-label { font-size:0.62rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.12rem; }
  .natsci .pf-label { color:var(--natsci-color); } .eng .pf-label { color:var(--eng-color); }
  .pf-val { font-size:0.78rem; color:var(--text-primary); font-weight:600; }
  .prog-star { margin-top:0.7rem; font-size:0.75rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .natsci .prog-star { border-left:2px solid var(--natsci-color); } .eng .prog-star { border-left:2px solid var(--eng-color); }
  .chart-section { background:var(--bg-soft); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.5rem; margin-bottom:1.75rem; }
  .chart-lbl { font-size:0.63rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--cam-color); margin-bottom:0.25rem; }
  .chart-title { font-family:'DM Serif Display',serif; font-size:1.05rem; font-weight:400; color:var(--text-primary); margin-bottom:0.18rem; }
  .chart-sub { font-size:0.77rem; font-style:italic; color:var(--text-muted); margin-bottom:0.9rem; }
  .chart-wrap { position:relative; width:100%; }
  .chart-insight { margin-top:0.8rem; font-size:0.79rem; color:var(--text-secondary); background:var(--cam-light); border-left:3px solid var(--cam-color); padding:0.5rem 0.8rem; border-radius:0 6px 6px 0; line-height:1.55; }
  .callout { font-size:0.77rem; color:var(--text-secondary); background:white; border:1px solid var(--border); border-left:3px solid; border-radius:0 7px 7px 0; padding:0.45rem 0.7rem; line-height:1.5; }
  .score-band-table { width:100%; border-collapse:collapse; font-size:0.8rem; margin-bottom:1rem; }
  .score-band-table th { background:var(--natsci-color); color:white; padding:0.5rem 0.8rem; text-align:left; font-size:0.7rem; letter-spacing:0.07em; text-transform:uppercase; }
  .score-band-table td { padding:0.5rem 0.8rem; border-bottom:1px solid var(--border); color:var(--text-secondary); }
  .score-band-table tr:nth-child(even) td { background:var(--natsci-light); }
  .score-band-table tr:last-child td { border-bottom:none; }
  .cn-data-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0.6rem; margin-bottom:1.5rem; }
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
  .tl-item { flex:0 0 auto; display:flex; flex-direction:column; align-items:center; width:120px; position:relative; }
  .tl-item:not(:last-child)::after { content:''; position:absolute; top:10px; left:60px; width:120px; height:2px; background:var(--cam-color); opacity:0.22; }
  .tl-dot { width:20px; height:20px; border-radius:50%; background:var(--cam-color); border:2px solid white; margin-bottom:0.45rem; flex-shrink:0; z-index:1; }
  .tl-item.hl .tl-dot { background:#c0392b; }
  .tl-date { font-size:0.7rem; font-weight:700; color:var(--cam-color); margin-bottom:0.18rem; text-align:center; }
  .tl-item.hl .tl-date { color:#c0392b; }
  .tl-lbl { font-size:0.66rem; color:var(--text-primary); text-align:center; line-height:1.3; }
  .res-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:0.7rem; margin-bottom:2rem; }
  .res-card { background:var(--cam-light); border:1px solid var(--cam-mid); border-radius:8px; padding:0.8rem 1rem; }
  .res-card-label { font-weight:700; color:var(--cam-color); font-size:0.79rem; margin-bottom:0.22rem; }
  .res-card a { color:var(--cam-color); font-size:0.73rem; word-break:break-all; }
  .warn-box { background:#fff8e1; border-left:4px solid #f39c12; border-radius:0 10px 10px 0; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.83rem; color:var(--text-secondary); line-height:1.65; }
  .warn-box strong { color:#7a4f00; }
  @media (max-width:680px) {
    .stat-row,.prog-duo,.do-dont,.decision-grid,.cn-data-grid { grid-template-columns:1fr; }
    .prog-detail-body,.prog-detail-footer,.mistake-item { grid-template-columns:1fr; }
  }
</style>

<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview',this)">Overview</button>
    <button class="tab-btn" onclick="showTab('programmes',this)">Programmes</button>
    <button class="tab-btn" onclick="showTab('esat',this)">ESAT Deep-Dive</button>
    <button class="tab-btn" onclick="showTab('admissions',this)">Admissions Data</button>
    <button class="tab-btn" onclick="showTab('apply',this)">How to Apply</button>
  </div>
</nav>

<!-- TAB 1: OVERVIEW -->
<div id="tab-overview" class="tab-panel active" style="display:block">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Natural Sciences · Engineering (Bioengineering) · A-Level Applicant Guide · 2026–27 Entry</p>
  <h2 class="section-title">University of Cambridge</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>2 undergraduate pathways</strong> — Natural Sciences (Biological or Physical track) and Engineering MEng (Bioengineering pathway) — at the University of Cambridge, established 1209 and consistently ranked among the world's top three universities. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2026–27 entry</strong>.</p>
    <p>Key differentiators from other top UK universities: Cambridge does <strong>not offer standalone Biology, Biochemistry or Biomedical Science</strong> degrees — all science applicants enter via the <strong>Natural Sciences Tripos (NST)</strong>, one of the broadest and most prestigious science programmes in the world. Both pathways require the <strong>ESAT admissions test</strong> (October sitting only), an interview in December, and the unique <strong>My Cambridge Application (MyCApp)</strong> form. The UCAS deadline is <strong>15 October</strong> — three months earlier than Imperial and UCL. You cannot apply to both Cambridge and Oxford in the same year.</p>
  </div>
  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">Est.&nbsp;1209</span><span class="stat-card-label">University of Cambridge</span></div>
    <div class="stat-card"><span class="stat-card-num">21.7%</span><span class="stat-card-label">Overall offer rate 2024/25</span></div>
    <div class="stat-card"><span class="stat-card-num">7.5</span><span class="stat-card-label">IELTS required (7.0 per component)</span></div>
    <div class="stat-card"><span class="stat-card-num">15 Oct</span><span class="stat-card-label">UCAS deadline (6pm UK)</span></div>
  </div>

  <div class="warn-box"><strong>⚠ You CANNOT apply to both Cambridge and Oxford in the same year.</strong> Choose one. Cambridge also requires an extra form — My Cambridge Application (MyCApp) — due 22 October, one week after the UCAS deadline. This is unique to Cambridge and easily overlooked.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">The 2 Pathways at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Both require ESAT + Interview · 2024/25 data</p>
  <div class="prog-duo">
    <div class="prog-card natsci">
      <div class="prog-card-label">Natural Sciences</div>
      <div class="prog-card-name">BA → MSci option (3–4 years)</div>
      <div class="prog-card-meta">Largest Cambridge course · UCAS: C100 / C101</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">A*A*A</div><div class="prog-stat-label">Typical offer</div></div>
        <div class="prog-stat"><div class="prog-stat-num">ESAT+Int.</div><div class="prog-stat-label">Selection</div></div>
        <div class="prog-stat"><div class="prog-stat-num">~22%</div><div class="prog-stat-label">Acceptance rate</div></div>
        <div class="prog-stat"><div class="prog-stat-num">~547</div><div class="prog-stat-label">Places per year</div></div>
      </div>
    </div>
    <div class="prog-card eng">
      <div class="prog-card-label">Engineering MEng</div>
      <div class="prog-card-name">MEng · 4 years (Bioengineering pathway)</div>
      <div class="prog-card-meta">Faculty of Engineering · UCAS: H100</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">A*A*A</div><div class="prog-stat-label">Typical offer</div></div>
        <div class="prog-stat"><div class="prog-stat-num">ESAT+Int.</div><div class="prog-stat-label">Selection</div></div>
        <div class="prog-stat"><div class="prog-stat-num">Selective</div><div class="prog-stat-label">Competition</div></div>
        <div class="prog-stat"><div class="prog-stat-num">Online</div><div class="prog-stat-label">Interview format</div></div>
      </div>
    </div>
  </div>

  <div class="info-box"><strong>Cambridge vs Oxford at a glance:</strong> Cambridge has a marginally higher overall offer rate (21.7% vs Oxford's 16.4%), but for Chinese applicants both admit at roughly 8–10% — about half the UK student rate. Cambridge NatSci's ~22% acceptance rate is notably higher than most Oxford science programmes. However, the ESAT is harder for Chinese applicants than raw percentile bands suggest — Chinese sitters significantly outperform UK averages, meaning intra-pool competition is steeper.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Which Pathway Suits You?</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Find your best fit based on your interests and strengths</p>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">"I love biology, chemistry and want to keep my options open in Year 1"</div><div class="decision-best">→ Natural Sciences (Biological track)</div><div class="decision-also">Combine Biology + Chemistry + Maths in Year 1; specialise from Year 2</div></div>
    <div class="decision-card"><div class="decision-q">"I want to design medical devices, prosthetics or biomedical systems"</div><div class="decision-best">→ Engineering MEng (Bioengineering pathway)</div><div class="decision-also">Maths + Physics required; engineering-led approach to medicine</div></div>
    <div class="decision-card"><div class="decision-q">"I'm passionate about physics, chemistry, materials or earth sciences"</div><div class="decision-best">→ Natural Sciences (Physical track)</div><div class="decision-also">Start with Physics + Chemistry + Maths; covers materials, earth sci, astrophysics</div></div>
    <div class="decision-card"><div class="decision-q">"I want to specialise in biochemistry or neuroscience at Cambridge"</div><div class="decision-best">→ Natural Sciences (Biological track)</div><div class="decision-also">Biochemistry and Neuroscience are Part II specialisations within NST</div></div>
    <div class="decision-card"><div class="decision-q">"I'm strongest at Maths and Physics and enjoy problem-solving"</div><div class="decision-best">→ Engineering MEng</div><div class="decision-also">ESAT requires Maths 1 + Maths 2 + Physics for Engineering applicants</div></div>
    <div class="decision-card"><div class="decision-q">"I want the broadest possible science degree before specialising"</div><div class="decision-best">→ Natural Sciences</div><div class="decision-also">The only UK degree covering all experimental sciences in Year 1</div></div>
  </div>

  <div class="info-box"><strong>Cambridge vs Imperial for science students:</strong> Cambridge NatSci does not let you apply directly to Biology, Biochemistry or Biomedical Science — you enter via NST and specialise later. This breadth is its greatest strength and its key difference from Imperial, UCL or Oxford. If you want a single-subject degree from Day 1, Cambridge NatSci is not that — but it is arguably the most prestigious science pathway in the UK.</div>
</div>

<!-- TAB 2: PROGRAMMES -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">2 pathways · Faculty of Biology · Faculty of Engineering</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>

  <div class="prog-detail natsci">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Natural Sciences Tripos (NST)</div><div class="prog-detail-meta">BA · 3 years / MSci · 4 years · Faculty of Biology &amp; Physical Sciences · UCAS: C100 (Biological) / C101 (Physical)</div></div>
      <div class="ptags"><span class="ptag ns">ESAT + Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Natural Sciences at Cambridge is one of the most flexible and prestigious science degrees in the world. Students do not specialise upfront — in Year 1 they choose 3 experimental sciences plus Maths, then progressively narrow towards a specialisation in Years 2 and 3. The optional 4th year leads to an MSci. NatSci encompasses physics, chemistry, biology, earth sciences, biochemistry, neuroscience, materials science and more. It is the largest Cambridge course with ~547 places per year and the most popular course for overseas applicants.</p>
        <div class="sec-label" style="margin-top:0.75rem;">Year 1 subject combinations (Biological track)</div>
        <ul class="plist"><li>Biology of Cells + Evolution &amp; Behaviour + Chemistry</li><li>+ Maths for Natural Sciences (compulsory)</li><li>Specialise into Biochemistry, Genetics, Pathology, Pharmacology, Neuroscience from Year 2</li></ul>
        <div class="sec-label" style="margin-top:0.75rem;">Year 1 subject combinations (Physical track)</div>
        <ul class="plist"><li>Physics + Chemistry + Earth Sciences / Materials / Astrophysics</li><li>+ Maths for Natural Sciences (compulsory)</li><li>Specialise into Chemistry, Physics, Materials, Earth Sciences from Year 2</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>PhD / academic research (very common)</li><li>Pharmaceutical &amp; biotech industry</li><li>Medical school entry (post-NatSci)</li><li>Finance &amp; consulting (strong analytical base)</li><li>Science policy &amp; science communication</li></ul>
        <div class="sec-label" style="margin-top:0.75rem;">Key highlights</div>
        <ul class="plist"><li>Broadest science degree in the UK</li><li>Supervision teaching: 2–3 students per session with a leading academic</li><li>~22% acceptance rate — above Cambridge and Oxford's overall averages</li><li>Year 4 MSci (Part III) available — equivalent to an integrated Masters</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*A*A</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Maths + 2 sciences (Bio + Chem recommended for Biological track)</div></div>
      <div><div class="pf-label">ESAT Modules</div><div class="pf-val">Maths 1 + Physics + one of Chemistry / Biology</div></div>
    </div>
    <div class="prog-star">★ Most popular overseas-applicant course at Cambridge. Chinese applicants admitted at ~8–10%. ESAT required: Maths 1 (compulsory) + Physics + one of Chemistry or Biology. Interview held in December — expect scientific reasoning questions across multiple disciplines, not just your strongest subject.</div>
  </div>

  <div class="prog-detail eng">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Engineering MEng (Bioengineering Pathway)</div><div class="prog-detail-meta">MEng · 4 years · Faculty of Engineering · UCAS: H100</div></div>
      <div class="ptags"><span class="ptag en">ESAT + Interview</span><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Cambridge Engineering is a broad MEng that covers all engineering disciplines in Years 1–2 before students choose a specialisation — including a Bioengineering pathway — from Year 3. It applies mathematical and physical principles to design, analyse and create engineering systems. All Cambridge Engineering students share a common first two years, then specialise. Maths and Physics are essential at A-level; Further Maths is strongly recommended.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Years 1–2: core engineering across all disciplines (structures, fluids, electrical, information, thermodynamics)</li><li>Year 3+: Bioengineering module options — biomechanics, medical imaging, neural engineering</li><li>Year 4: MEng project with research group</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Medical device engineering &amp; R&amp;D</li><li>Clinical engineering &amp; NHS technology</li><li>Biotech / medtech startups</li><li>PhD / academic research</li><li>Management consulting &amp; finance</li></ul>
        <div class="sec-label" style="margin-top:0.75rem;">Key highlights</div>
        <ul class="plist"><li>Only way to study Bioengineering at Cambridge undergrad level</li><li>Common first two years — broad engineering foundation</li><li>Interview online; ESAT uses Maths 1 + Maths 2 + Physics</li><li>Further Maths strongly recommended</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*A*A</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Maths + Physics (Further Maths strongly recommended)</div></div>
      <div><div class="pf-label">ESAT Modules</div><div class="pf-val">Maths 1 + Maths 2 + Physics</div></div>
    </div>
    <div class="prog-star">★ Note: Oxford does not offer Bioengineering at undergraduate level. Cambridge Engineering is the premier Oxbridge route for aspiring bioengineeers. The common first two years mean you study alongside all other engineering disciplines before specialising — very different from Imperial's dedicated Biomedical Engineering degree.</div>
  </div>

  <div class="info-box"><strong>Cambridge vs Imperial for Biomedical Engineering:</strong> Imperial offers a dedicated Biomedical Engineering MEng (A*AA, no ESAT, 48.1% offer rate in 2024). Cambridge Engineering with Bioengineering pathway (A*A*A, ESAT required, more selective) provides a broader engineering foundation. If you are certain about Biomedical Engineering, Imperial may be the safer choice; if you want Cambridge's prestige and breadth, Engineering is the route.</div>
</div>

<!-- TAB 3: ESAT DEEP-DIVE -->
<div id="tab-esat" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Format · Scoring · Score bands · Chinese applicant data · Preparation strategy</p>
  <h2 class="section-title">ESAT Deep-Dive</h2>
  <div class="divider"></div>

  <div class="overview-intro">
    <p>The <strong>Engineering and Science Admissions Test (ESAT)</strong> is required for both Natural Sciences and Engineering at Cambridge. It is a computer-based multiple-choice test sat at Pearson VUE centres worldwide, with only one sitting in October. <strong>Only your first score counts — there is no resit in the same cycle.</strong></p>
    <p>The ESAT uses Item Response Theory (IRT/Rasch calibration) to convert raw marks to a 1.0–9.0 scale. The same raw mark can yield a different scaled score in different years depending on test difficulty. There is no combined aggregate score — each module is reported separately.</p>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.75rem;">Which Modules Do You Sit?</h3>
  <div class="req-table-wrap">
    <table class="req-table">
      <thead><tr><th>Programme</th><th>Compulsory</th><th>Chosen modules</th><th>Total modules</th></tr></thead>
      <tbody>
        <tr><td class="row-label">Natural Sciences (Biological)</td><td>Maths 1</td><td>Biology + Chemistry</td><td>3 modules · 120 min</td></tr>
        <tr><td class="row-label">Natural Sciences (Physical)</td><td>Maths 1</td><td>Physics + Chemistry</td><td>3 modules · 120 min</td></tr>
        <tr><td class="row-label">Engineering MEng</td><td>Maths 1</td><td>Maths 2 + Physics</td><td>3 modules · 120 min</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Format per Module</h3>
  <div class="esat-box">
    <div class="esat-row"><span>27 multiple-choice questions per module</span><span class="etag" style="background:#003a8c;">MCQ</span></div>
    <div class="esat-row"><span>40 minutes per module — no calculator allowed</span><span class="etag" style="background:#c0392b;">Timed</span></div>
    <div class="esat-row"><span>No negative marking — answer all questions</span><span class="etag" style="background:#27ae60;">No penalty</span></div>
    <div class="esat-row"><span>Scored 1.0–9.0 per module via Rasch IRT calibration</span><span class="etag" style="background:#7f8c8d;">IRT scoring</span></div>
    <div class="esat-row"><span>Scores are NOT comparable across modules — no combined total</span><span class="etag" style="background:#e67e22;">Separate</span></div>
    <div class="esat-note">The conversion table from raw marks to 1–9 is not published. P50 (median) → 4.5; P90 → 7.0. A score of 9.0 is achieved by approximately 2% of sitters.</div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.75rem;">Score Bands &amp; What They Mean</h3>
  <table class="score-band-table">
    <thead><tr><th>Score range</th><th>Approximate percentile</th><th>Cambridge admissions implication</th></tr></thead>
    <tbody>
      <tr><td><strong>1.0 – 3.5</strong></td><td>Bottom ~30%</td><td>Interview unlikely</td></tr>
      <tr><td><strong>3.6 – 4.5</strong></td><td>~40th–50th pct.</td><td>Needs strong other components to progress</td></tr>
      <tr><td><strong>4.6 – 6.9</strong></td><td>Top 25–40%</td><td>Interview possible / likely</td></tr>
      <tr><td><strong>7.0 – 7.9</strong></td><td>Top 10% (P90 threshold)</td><td>Interview very likely at Cambridge</td></tr>
      <tr><td><strong>8.0 – 9.0</strong></td><td>Top ~5% (9.0 = top 2%)</td><td>Exceptional — strong interview invitation signal</td></tr>
    </tbody>
  </table>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.75rem;margin-top:1.5rem;">Chinese Applicants — What the Data Shows</h3>
  <div class="info-box" style="border-color:#c0392b;background:#fdf3f3;">
    <strong>Official finding (UAT-UK ESAT Technical Report 2024–25):</strong> "Candidates who identified as Chinese significantly outperformed UK nationals across all modules. These differences were largest in the Mathematics modules." This means a score of 7.0 — top 10% overall — may NOT be top 10% within the Chinese applicant pool. Aim for 7.5–8.0+.
  </div>
  <div class="req-table-wrap">
    <table class="req-table">
      <thead><tr><th>Module</th><th>China mean score</th><th>UK mean score</th><th>Gap</th></tr></thead>
      <tbody>
        <tr><td>Maths 1</td><td><strong>5.22</strong></td><td>3.93</td><td>+1.29</td></tr>
        <tr><td>Maths 2</td><td><strong>5.11</strong></td><td>4.07</td><td>+1.04</td></tr>
        <tr><td>Biology</td><td><strong>4.86</strong></td><td>4.64</td><td>+0.22</td></tr>
        <tr><td>Chemistry</td><td><strong>~5.0</strong></td><td>~4.5</td><td>+0.5</td></tr>
        <tr><td>Physics</td><td><strong>~5.0</strong></td><td>~4.5</td><td>+0.5</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.75rem;margin-top:1.5rem;">What Cambridge Looks For &amp; Preparation Strategy</h3>
  <div class="flow-section">
    <div class="flow-title">5 key principles</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">1</div><div class="flow-body"><strong>Problem-solving, not recall.</strong> Questions require applying knowledge to unfamiliar contexts. Memorising facts is insufficient — you need to think under time pressure with no calculator.</div></div>
      <div class="flow-row"><div class="flow-num">2</div><div class="flow-body"><strong>Target 7.5–8.0 as a Chinese applicant.</strong> The overall P90 threshold is 7.0, but given significantly higher Chinese peer scores, aim for 7.5–8.0 to stand out in your applicant pool.</div></div>
      <div class="flow-row"><div class="flow-num">3</div><div class="flow-body"><strong>Maths 1 is the differentiator.</strong> It is the only compulsory module. The gap between Chinese and UK sitters is largest here. A strong Maths 1 score is critical for both NatSci and Engineering.</div></div>
      <div class="flow-row"><div class="flow-num">4</div><div class="flow-body"><strong>Speed and mental arithmetic.</strong> 27 questions in 40 minutes without a calculator. Practise speed from day one. Slow but accurate is not enough — you need both.</div></div>
      <div class="flow-row"><div class="flow-num">5</div><div class="flow-body"><strong>ESAT is one factor.</strong> Cambridge uses ESAT alongside predicted grades, personal statement, MyCApp course topics, and interview. A very high ESAT with a weak interview can still result in rejection.</div></div>
    </div>
  </div>

  <div class="warn-box"><strong>⚠ October sitting only.</strong> China/HK/Macau applicants must sit on 12 or 13 October only (within the 12–16 October window). Register via Pearson VUE between June and late September — registration must be completed before submitting your UCAS application. There is no resit in the same cycle.</div>
</div>

<!-- TAB 4: ADMISSIONS DATA -->
<div id="tab-admissions" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Cambridge vs Oxford · Acceptance rates · Chinese applicant data · 2024/25</p>
  <h2 class="section-title">Admissions Data</h2>
  <div class="divider"></div>

  <div class="chart-section">
    <div class="chart-lbl">Cambridge vs Oxford · Overall Admissions 2024/25</div>
    <h3 class="chart-title">Applications, Offers &amp; Key Rates</h3>
    <p class="chart-sub">Cambridge has a marginally higher overall offer rate — but Chinese applicants face similar rates at both</p>
    <div class="req-table-wrap" style="margin-bottom:0;">
      <table class="req-table">
        <thead><tr><th>Metric</th><th>Cambridge</th><th>Oxford</th></tr></thead>
        <tbody>
          <tr><td>Applications (2024/25)</td><td><strong>22,820</strong></td><td>23,061</td></tr>
          <tr><td>Offers made</td><td><strong>4,947</strong></td><td>3,793</td></tr>
          <tr><td>Overall offer rate</td><td><strong>21.7%</strong></td><td>16.4%</td></tr>
          <tr><td>Acceptance rate</td><td><strong>16.3%</strong></td><td>14.1%</td></tr>
          <tr><td>UK applicant rate</td><td>~19.7%</td><td>~19.8%</td></tr>
          <tr><td>Intl. applicant rate</td><td><strong>~10.9%</strong></td><td>~9.5%</td></tr>
          <tr><td>China admission rate</td><td><strong>~8–10%</strong></td><td>~8.0%</td></tr>
          <tr><td>Intl. students (% UG)</td><td><strong>~24%</strong></td><td>~16.3%</td></tr>
        </tbody>
      </table>
    </div>
    <div class="chart-insight">Cambridge NatSci's ~22% acceptance rate is notably above both universities' overall averages and above most Oxford science programmes. However, Chinese applicants at both universities face roughly half the UK acceptance rate (~8–10% vs ~19–20%).</div>
  </div>

  <div class="chart-section">
    <div class="chart-lbl">Acceptance Rates by Programme · 2023 Entry</div>
    <h3 class="chart-title">Cambridge NatSci vs Oxford Science Programmes</h3>
    <p class="chart-sub">NatSci is more accessible than most Oxford science programmes · International rates ~45% of overall</p>
    <canvas id="chart-rates" height="130"></canvas>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.55rem;margin-top:0.8rem;">
      <div class="callout" style="border-color:var(--natsci-color);">NatSci (22.4%) has a higher acceptance rate than all 7 Oxford science programmes — a meaningful alternative for broad-science applicants.</div>
      <div class="callout" style="border-color:#c0392b;">For Chinese applicants, effective rates are roughly: NatSci ~10%, Oxford Chemistry ~8%, Oxford Medicine ~4%.</div>
      <div class="callout" style="border-color:#8a5a00;">Oxford Chemistry (17%) and NatSci (22%) are the most comparable for strong science applicants choosing between them.</div>
      <div class="callout" style="border-color:#7f8c8d;">Oxford Medicine (9%) and Oxford BMS (8%) remain the most selective across both universities' science offerings.</div>
    </div>
  </div>

  <div class="chart-section">
    <div class="chart-lbl">Chinese Applicants · Key Statistics</div>
    <h3 class="chart-title">China Admissions at Cambridge &amp; Oxford · 2022–2024 Aggregate</h3>
    <p class="chart-sub">China is the #1 overseas applicant country at Oxford — Cambridge data follows similar patterns</p>
    <div class="cn-data-grid">
      <div class="callout" style="border-color:var(--natsci-color);text-align:center;">
        <div style="font-size:1.2rem;font-weight:700;color:var(--natsci-color);">~8–10%</div>
        <div style="font-size:0.72rem;color:var(--text-muted);">Cambridge China admission rate</div>
      </div>
      <div class="callout" style="border-color:#8a5a00;text-align:center;">
        <div style="font-size:1.2rem;font-weight:700;color:#8a5a00;">8.0%</div>
        <div style="font-size:0.72rem;color:var(--text-muted);">Oxford China admission rate (2022–24)</div>
      </div>
      <div class="callout" style="border-color:#27ae60;text-align:center;">
        <div style="font-size:1.2rem;font-weight:700;color:#27ae60;">566</div>
        <div style="font-size:0.72rem;color:var(--text-muted);">Chinese students admitted at Oxford (3-year total)</div>
      </div>
      <div class="callout" style="border-color:#c0392b;text-align:center;">
        <div style="font-size:1.2rem;font-weight:700;color:#c0392b;">~2×</div>
        <div style="font-size:0.72rem;color:var(--text-muted);">UK applicants more likely to get an offer than international</div>
      </div>
    </div>
    <div class="chart-insight">The gap between UK and international admission rates has been persistent for 5+ years but is not worsening. Chinese applicants compete within the non-UK pool. High ESAT scores and strong interviews are the main levers. Singapore (14.2%) and Hong Kong (10.5%) are the highest-performing overseas nationalities at Oxford; China (8%) and the USA (5.9%) face a harder path.</div>
  </div>

  <div class="chart-section">
    <div class="chart-lbl">Admission Rates by Country · Oxford 2021–2023</div>
    <h3 class="chart-title">How China Compares to Other Overseas Nationalities</h3>
    <p class="chart-sub">Source: Oxford Annual Admissions Statistical Report 2025 · TutorChase analysis</p>
    <canvas id="chart-country" height="130"></canvas>
  </div>
  <p style="font-size:0.67rem;color:var(--text-muted);margin-top:0.5rem;">Source: Oxford Annual Admissions Statistical Report 2025 · Cambridge Admissions Statistics 2025 · UAT-UK ESAT Technical Report 2024–25 · TutorChase analysis</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
(function(){
  const drawn = {};
  function drawAll() {
    const tab = document.getElementById('tab-admissions');
    if (!tab || getComputedStyle(tab).display === 'none') return;

    if (!drawn['chart-rates']) {
      const c = document.getElementById('chart-rates');
      if (c) {
        new Chart(c, {
          type: 'bar',
          data: {
            labels: ['Cambridge NatSci','Oxford Chemistry','Oxford Biology','Oxford Human Sci','Oxford Biochem','Oxford Materials','Oxford BMS','Oxford Medicine'],
            datasets: [
              { label: 'Overall acceptance rate (%)', data: [22.4,17,15,13,11,30,8,9], backgroundColor: ['#003a8c','#8a5a00','#8a5a00','#8a5a00','#8a5a00','#8a5a00','#8a5a00','#c0392b'] },
              { label: 'Est. intl. rate (%)', data: [10,8,7,6,5,14,4,4], backgroundColor: ['rgba(0,58,140,0.3)','rgba(138,90,0,0.3)','rgba(138,90,0,0.3)','rgba(138,90,0,0.3)','rgba(138,90,0,0.3)','rgba(138,90,0,0.3)','rgba(138,90,0,0.3)','rgba(192,57,43,0.3)'] }
            ]
          },
          options: { responsive:true, plugins:{ legend:{position:'bottom'} }, scales:{ y:{ min:0,max:35,title:{display:true,text:'Acceptance rate (%)'},ticks:{stepSize:5} } } }
        });
        drawn['chart-rates'] = true;
      }
    }

    if (!drawn['chart-country']) {
      const c = document.getElementById('chart-country');
      if (c) {
        new Chart(c, {
          type: 'bar',
          data: {
            labels: ['Singapore','Hong Kong','France','PR China','USA','Canada','India'],
            datasets: [{ label: 'Admission rate (%)', data: [14.2,10.5,8.3,8.0,5.9,5.8,3.9], backgroundColor: ['#2ecc71','#27ae60','#f39c12','#003a8c','#3498db','#16a085','#e74c3c'] }]
          },
          options: { responsive:true, plugins:{ legend:{display:false} }, scales:{ y:{ min:0,max:20,title:{display:true,text:'Admission rate (%)'},ticks:{stepSize:5} } } }
        });
        drawn['chart-country'] = true;
      }
    }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', drawAll); } else { drawAll(); }
  const tab = document.getElementById('tab-admissions');
  if (tab) { new MutationObserver(drawAll).observe(tab, { attributes:true, attributeFilter:['style','class'] }); }
  document.addEventListener('click', function(){ setTimeout(drawAll, 60); });
})();
</script>

<!-- TAB 5: HOW TO APPLY -->
<div id="tab-apply" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · MyCApp · ESAT · Interview · Personal statement · Key dates · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>

  <div class="warn-box"><strong>⚠ Cambridge requires TWO separate submissions:</strong> (1) UCAS by 15 October 6pm, and (2) My Cambridge Application (MyCApp) by 22 October 6pm — submitted via a link sent to you within 48 hours of your UCAS submission. Missing MyCApp will jeopardise your application.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Application Timeline</h3>
  <div class="tl-track">
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">May 2026</div><div class="tl-lbl">UCAS opens; ESAT registration opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jun–Sep 2026</div><div class="tl-lbl">Register ESAT; research college choices</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Sep 2026</div><div class="tl-lbl">UCAS opens for submissions; ESAT reg. closes late Sep</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">12–13 Oct</div><div class="tl-lbl">ESAT sitting (China/HK/Macau: 12–13 Oct ONLY)</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">15 Oct 6pm</div><div class="tl-lbl">UCAS deadline</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">22 Oct 6pm</div><div class="tl-lbl">MyCApp deadline</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Mid Nov</div><div class="tl-lbl">Shortlisting notifications</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">1–19 Dec</div><div class="tl-lbl">Interviews (online or in-person)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">27 Jan 2027</div><div class="tl-lbl">Cambridge results day</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Aug 2027</div><div class="tl-lbl">A-level results — confirm place</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Step-by-Step Process</h3>
  <div class="flow-section">
    <div class="flow-title">Cambridge application steps (2027 entry)</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">May–Jun 2026</div><div class="flow-body"><strong>Register for ESAT.</strong> Register via Pearson VUE for the October sitting. China/HK/Macau applicants must sit on 12 or 13 October only. Registration must be completed before the late-September deadline — and before your UCAS submission.</div></div>
      <div class="flow-row"><div class="flow-num">May–Sep 2026</div><div class="flow-body"><strong>Research college choices carefully.</strong> You apply to a specific college (or make an open application). College choice affects interview style and can affect shortlisting — research which colleges have strong Natural Sciences or Engineering traditions.</div></div>
      <div class="flow-row"><div class="flow-num">Sep–Oct 2026</div><div class="flow-body"><strong>Write your personal statement.</strong> One statement for all 5 UCAS choices. Focus on genuine subject passion — 80% academic content, 20% wider skills. For NatSci: demonstrate breadth across sciences. For Engineering: show mathematical and physical problem-solving instinct.</div></div>
      <div class="flow-row"><div class="flow-num hl">12–13 Oct</div><div class="flow-body"><strong>Sit ESAT.</strong> At a Pearson VUE test centre. China/HK/Macau: only 12 or 13 October. Only your first score counts — there is no resit in the same cycle. Prepare thoroughly.</div></div>
      <div class="flow-row"><div class="flow-num hl">15 Oct 6pm</div><div class="flow-body"><strong>Submit UCAS.</strong> Include predicted grades and school reference. Choose 'Natural Sciences' (C100 Biological / C101 Physical) or 'Engineering' (H100). You cannot apply to both Cambridge and Oxford.</div></div>
      <div class="flow-row"><div class="flow-num hl">22 Oct 6pm</div><div class="flow-body"><strong>Submit My Cambridge Application (MyCApp).</strong> Unique to Cambridge — link arrives within 48 hours of UCAS submission. Sections include: Education, Qualifications (enter ESAT registration number), and A-level topics studied per subject. The topics list directly informs your interview questions — be specific.</div></div>
      <div class="flow-row"><div class="flow-num">Nov 2026</div><div class="flow-body"><strong>Shortlisting notifications.</strong> Colleges review UCAS form, MyCApp, and ESAT scores. Shortlisted applicants contacted mid-to-late November. Not shortlisted: notified by early December.</div></div>
      <div class="flow-row"><div class="flow-num">Dec 2026</div><div class="flow-body"><strong>Interviews.</strong> 2–3 interviews, typically December 1–19. Format: scientific reasoning across multiple disciplines — not just your strongest subject. NatSci: expect questions from all sciences you listed. Engineering: mathematical problem-solving under supervision. Overseas students interview via video link.</div></div>
      <div class="flow-row"><div class="flow-num">27 Jan 2027</div><div class="flow-body"><strong>Cambridge results day.</strong> All decisions released simultaneously. Winter Pool: strong candidates not taken by their first-choice college may receive an offer from another college.</div></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">My Cambridge Application (MyCApp) — What You Must Prepare</h3>
  <div class="info-box"><strong>MyCApp is not just a data form.</strong> The course topics section of Section 6 (Qualifications) directly informs what interviewers ask you. List all topics studied in each A-level subject — including anything self-studied or covered through competitions (e.g. Physics Olympiad). Be specific and accurate. Interviewers will pick from this list.</div>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">MyCApp DO</div>
      <ul class="ddlist">
        <li>List every topic studied in each A-level subject — include chapter names if needed</li>
        <li>Include self-studied or Olympiad/competition topics</li>
        <li>Enter your ESAT registration number as soon as you register</li>
        <li>Submit within 7 days of UCAS — ideally same day</li>
        <li>Check college-specific requirements for written work (some subjects only)</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">MyCApp DON'T</div>
      <ul class="ddlist">
        <li>Leave topics vague (e.g. "Biology A-level" — list actual topics)</li>
        <li>Miss the 22 October 6pm deadline</li>
        <li>Leave ESAT registration number blank — enter it immediately after registering</li>
        <li>Repeat your UCAS personal statement — MyCApp's optional statement adds new context</li>
        <li>Forget that interviewers will have read your topic list before you enter the room</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Personal Statement Do's &amp; Don'ts</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">4,000 characters · One statement for all 5 UCAS choices · Cambridge interviewers will read it</p>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">DO</div>
      <ul class="ddlist">
        <li>Demonstrate genuine breadth — for NatSci, show excitement across multiple sciences</li>
        <li>Name specific topics, experiments, papers or books that inspired you</li>
        <li>Show you understand Cambridge's broad first-year structure and why it suits you</li>
        <li>For Engineering: demonstrate mathematical and physical problem-solving instinct</li>
        <li>Link your A-level subjects directly to your chosen track</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">DON'T</div>
      <ul class="ddlist">
        <li>Apply to both Cambridge and Oxford in the same year</li>
        <li>Apply for Natural Sciences hoping to study just Biology — you must embrace all sciences in Year 1</li>
        <li>Open with generic sentences ("Since childhood I have loved science…")</li>
        <li>Mention Cambridge or Oxford by name — the statement goes to all 5 universities</li>
        <li>List extracurriculars without connecting them to your scientific thinking</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Common Application Mistakes</h3>
  <div>
    <div class="mistake-item"><div class="mw">Applying to both Cambridge and Oxford</div><div class="mr">You can only apply to one — choose carefully based on programme fit</div></div>
    <div class="mistake-item"><div class="mw">Missing the MyCApp deadline (22 Oct)</div><div class="mr">Submit MyCApp the same day as UCAS — do not wait the full 7 days</div></div>
    <div class="mistake-item"><div class="mw">Forgetting to register for ESAT before UCAS submission</div><div class="mr">ESAT registration must be completed before you submit UCAS — register by late September</div></div>
    <div class="mistake-item"><div class="mw">Planning to resit ESAT for a better score</div><div class="mr">Only your FIRST score counts — there is no resit in the same cycle. Prepare thoroughly before October.</div></div>
    <div class="mistake-item"><div class="mw">China applicants booking any Oct date for ESAT</div><div class="mr">China/HK/Macau must sit on 12 or 13 October ONLY — book the correct date</div></div>
    <div class="mistake-item"><div class="mw">Applying to NatSci hoping to avoid all sciences</div><div class="mr">Year 1 requires 3 experimental sciences + Maths — embrace the breadth or choose a different course</div></div>
    <div class="mistake-item"><div class="mw">Leaving MyCApp topics section vague</div><div class="mr">List specific topic names per subject — interviewers use this list to select questions</div></div>
    <div class="mistake-item"><div class="mw">Forgetting IELTS (7.5 overall, 7.0 per component)</div><div class="mr">Valid for 2 years — plan well ahead; Cambridge's requirement is higher than Imperial/UCL</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:2rem;">English Language Requirements</h3>
  <div class="ielts-box">
    <div><span class="ielts-num">7.5</span><span class="ielts-lbl">IELTS overall minimum</span></div>
    <p class="ielts-desc">Cambridge requires IELTS 7.5 overall with a minimum of 7.0 in every component. This is higher than Imperial (7.0) and UCL (7.0). TOEFL iBT 110 is also accepted. Scores are valid for 2 years from the test date — plan your sitting date carefully relative to your application timeline.</p>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">Natural Sciences</div><a href="https://www.cam.ac.uk/subjects/natural-sciences" target="_blank">cam.ac.uk/subjects/natural-sciences</a></div>
    <div class="res-card"><div class="res-card-label">Engineering</div><a href="https://www.cam.ac.uk/subjects/engineering" target="_blank">cam.ac.uk/subjects/engineering</a></div>
    <div class="res-card"><div class="res-card-label">My Cambridge Application</div><a href="https://www.myapplication.cam.ac.uk" target="_blank">myapplication.cam.ac.uk</a></div>
    <div class="res-card"><div class="res-card-label">ESAT Registration</div><a href="https://uatuktest.com" target="_blank">uatuktest.com</a></div>
    <div class="res-card"><div class="res-card-label">Admissions Statistics</div><a href="https://www.undergraduate.study.cam.ac.uk/apply/statistics" target="_blank">undergraduate.study.cam.ac.uk</a></div>
    <div class="res-card"><div class="res-card-label">College Open Days</div><div style="font-size:0.77rem;color:var(--text-secondary);">Check individual college websites for 2026 open day dates</div></div>
  </div>
  <div class="info-box"><strong>All information current as of May 2026.</strong> Always verify requirements on official Cambridge course pages before submitting — offer grades, ESAT modules, and programme structures can change year to year.</div>
</div>

<script>
  function showTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.remove('active'); p.style.display='none'; });
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    var panel = document.getElementById('tab-' + id);
    if (panel) { panel.classList.add('active'); panel.style.display='block'; }
    if (btn) btn.classList.add('active');
    if (typeof Chart !== 'undefined') {
      setTimeout(function(){ if (typeof Chart.instances !== 'undefined') Chart.instances.forEach(function(c){ c.resize(); }); }, 50);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.addEventListener('DOMContentLoaded', function(){
    var f = document.getElementById('tab-overview'); if (f) f.style.display='block';
  });
</script>