---
layout: post
title: "University of Manchester - Life Sciences, Medical Sciences & Psychology Programmes Guide"
date: 2026-07-25
tags: [uk, program introduction]
categories: []
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;
    --manc-color: #6d2077;
    --manc-light: #f5eef8;
    --manc-mid: #d9bce6;
    --med-color: #6d2077;
    --med-light: #f5eef8;
    --med-mid: #d9bce6;
    --biosci-color: #0d7a6e;
    --biosci-light: #e6f5f3;
    --biosci-mid: #a8d8d0;
    --psych-color: #b5651d;
    --psych-light: #fdf1e6;
    --psych-mid: #f0c898;
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
  .tab-panel { display: none; padding: 2rem 1.5rem 3rem; max-width: 900px; margin: 0 auto; }
  .tab-panel.active { display: block; animation: fadeIn 0.25s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
  .section-title { font-family: 'DM Serif Display', serif; font-size: 1.65rem; font-weight: 400; color: var(--text-primary); margin-bottom: 0.35rem; }
  .divider { width: 3rem; height: 3px; background: var(--blog-accent); border-radius: 2px; margin: 0.6rem 0 2rem; }
  .overview-intro { background: var(--blog-accent-light); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid var(--blog-accent-mid); }
  .overview-intro p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.75; }
  .overview-intro p + p { margin-top: 0.75rem; }
  .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .stat-card { background: var(--manc-light); border: 1px solid var(--manc-mid); border-top: 3px solid var(--manc-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--manc-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }
  .info-box { background: var(--blog-accent-light); border-left: 4px solid var(--blog-accent); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
  .info-box strong { color: var(--text-primary); }
  .group-legend { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.1rem; }
  .glegend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.73rem; color: var(--text-secondary); background: var(--bg-soft); border: 1px solid var(--border); border-radius: 20px; padding: 0.25rem 0.7rem 0.25rem 0.5rem; }
  .glegend-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
  .glance-table-wrap { overflow-x: auto; margin-bottom: 1rem; border-radius: 10px; border: 1px solid var(--border); }
  .glance-table { width: 100%; border-collapse: collapse; font-size: 0.92rem; min-width: 720px; }
  .glance-table th { padding: 0.75rem 0.85rem; text-align: left; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; background: var(--bg-soft); color: var(--text-muted); border-bottom: 2px solid var(--border); white-space: nowrap; }
  .glance-table td { padding: 0.85rem 0.85rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; line-height: 1.5; }
  .glance-table tr:last-child td { border-bottom: none; }
  .glance-row { border-left: 4px solid transparent; }
  .glance-row.med { border-left-color: var(--med-color); }
  .glance-row.biosci { border-left-color: var(--biosci-color); }
  .glance-row.psych { border-left-color: var(--psych-color); }
  .gname { font-weight: 700; color: var(--text-primary); font-size: 0.98rem; }
  .gcode { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; }
  .ggrade { font-weight: 700; font-size: 1.05rem; display: block; }
  .med .ggrade { color: var(--med-color); } .biosci .ggrade { color: var(--biosci-color); } .psych .ggrade { color: var(--psych-color); }
  .gsub { font-size: 0.7rem; color: var(--text-muted); display: block; margin-top: 0.2rem; }
  .gdash { color: var(--text-muted) !important; font-style: italic !important; font-weight: 400 !important; font-size: 0.92rem !important; }
  .gval { font-family: 'DM Sans', sans-serif !important; font-size: 0.95rem !important; font-weight: 500 !important; color: var(--text-secondary) !important; }
  .test-note { margin-top: 0.9rem; font-size: 0.76rem; color: var(--text-secondary); background: var(--bg-soft); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 1rem; line-height: 1.6; }
  .test-note strong { color: var(--text-primary); }
  .prog-detail { border-radius: 12px; border: 1px solid var(--border); padding: 1.4rem; margin-bottom: 1.4rem; position: relative; overflow: hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.med { background:var(--med-light); } .prog-detail.med::before { background:var(--med-color); }
  .prog-detail.biosci { background:var(--biosci-light); } .prog-detail.biosci::before { background:var(--biosci-color); }
  .prog-detail.psych { background:var(--psych-light); } .prog-detail.psych::before { background:var(--psych-color); }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.1rem; }
  .med .prog-detail-title { color:var(--med-color); } .biosci .prog-detail-title { color:var(--biosci-color); } .psych .prog-detail-title { color:var(--psych-color); }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag { font-size:0.65rem; font-weight:700; letter-spacing:0.05em; padding:0.16rem 0.5rem; border-radius:20px; color:white; }
  .ptag.test { background:#c0392b; } .ptag.none { background:#7a7a7a; }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:0.65rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); margin-top:0.85rem; }
  .pf-label { font-size:0.6rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; margin-bottom:0.12rem; }
  .med .pf-label { color:var(--med-color); } .biosci .pf-label { color:var(--biosci-color); } .psych .pf-label { color:var(--psych-color); }
  .pf-val { font-size:0.77rem; color:var(--text-primary); font-weight:600; }
  .prog-desc { font-size:0.81rem; color:var(--text-secondary); line-height:1.65; }
  .prog-note { margin-top:0.7rem; font-size:0.74rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .med .prog-note { border-left:2px solid var(--med-color); } .biosci .prog-note { border-left:2px solid var(--biosci-color); } .psych .prog-note { border-left:2px solid var(--psych-color); }
  .group-header { display:flex; align-items:center; gap:0.6rem; margin: 2rem 0 0.9rem; }
  .group-header:first-of-type { margin-top: 0; }
  .group-dot { width: 13px; height: 13px; border-radius: 50%; flex-shrink:0; }
  .group-header h3 { font-family:'DM Serif Display',serif; font-size:1.05rem; font-weight:400; }
  .group-sub { font-size:0.76rem; color:var(--text-muted); margin: -0.6rem 0 1rem 1.2rem; }
  .pcard { border-radius: 14px; padding: 1.75rem; margin-bottom: 1.75rem; border-top: 4px solid transparent; }
  .pcard.med { background: var(--med-light); border-top-color: var(--med-color); }
  .pcard.biosci { background: var(--biosci-light); border-top-color: var(--biosci-color); }
  .pcard.psych { background: var(--psych-light); border-top-color: var(--psych-color); }
  .pcard-hdr { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.4rem; }
  .pcard-title { font-family: 'DM Serif Display', serif; font-size: 1.5rem; font-weight: 400; line-height: 1.15; }
  .med .pcard-title { color: var(--med-color); } .biosci .pcard-title { color: var(--biosci-color); } .psych .pcard-title { color: var(--psych-color); }
  .pcard-meta { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.3rem; }
  .pbadges { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .pbadge { font-family: 'DM Sans', sans-serif !important; font-size: 0.72rem !important; font-weight: 700 !important; color: white !important; padding: 0.4rem 0.85rem; border-radius: 20px; white-space: nowrap; }
  .med .pbadge.primary { background: var(--med-color); } .biosci .pbadge.primary { background: var(--biosci-color); } .psych .pbadge.primary { background: var(--psych-color); }
  .pbadge.comp-high { background: #c0392b; } .pbadge.comp-mod { background: #e67e22; } .pbadge.comp-open { background: #27ae60; }
  .pcard-body { display: grid; grid-template-columns: 1.15fr 1fr; gap: 2rem; }
  .pcol-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem; }
  .pcard-desc { font-size: 0.86rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.3rem; }
  .pnote-list { list-style: none; }
  .pnote-list li { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.55; padding: 0.5rem 0 0.5rem 1.15rem; position: relative; border-bottom: 1px solid rgba(0,0,0,0.06); }
  .pnote-list li:last-child { border-bottom: none; }
  .pnote-list li::before { content: '›'; position: absolute; left: 0; font-weight: 700; }
  .med .pnote-list li::before { color: var(--med-color); } .biosci .pnote-list li::before { color: var(--biosci-color); } .psych .pnote-list li::before { color: var(--psych-color); }
  .pcard-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1.5rem; padding-top: 1.2rem; border-top: 1px solid rgba(0,0,0,0.08); }
  .pstat-label { font-size: 0.68rem !important; font-weight: 700 !important; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 0.3rem; font-family: 'DM Sans', sans-serif !important; }
  .med .pstat-label { color: var(--med-color); } .biosci .pstat-label { color: var(--biosci-color); } .psych .pstat-label { color: var(--psych-color); }
  .pstat-val { font-family: 'DM Sans', sans-serif !important; font-size: 1.05rem !important; font-weight: 700 !important; color: var(--text-primary) !important; }
  .pstat-val.pdash { color: var(--text-muted) !important; font-style: italic !important; font-weight: 400 !important; font-size: 0.85rem !important; }
  .pcard-caveat { margin-top: 1.4rem; background: rgba(255,255,255,0.75); border-radius: 8px; padding: 0.8rem 1rem; font-size: 0.78rem; color: var(--text-muted); font-style: italic; line-height: 1.6; border-left: 3px solid; }
  .med .pcard-caveat { border-left-color: var(--med-color); } .biosci .pcard-caveat { border-left-color: var(--biosci-color); } .psych .pcard-caveat { border-left-color: var(--psych-color); }
  @media (max-width:680px) { .pcard-body, .pcard-stats { grid-template-columns: 1fr; } }
  .bio-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.85rem; margin-bottom:1.5rem; }
  .bio-item { background:var(--biosci-light); border:1px solid var(--biosci-mid); border-left:3px solid var(--biosci-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .bio-item-name { font-weight:700; font-size:0.86rem; color:var(--text-primary); margin-bottom:0.25rem; }
  .bio-item-desc { font-size:0.76rem; color:var(--text-secondary); line-height:1.5; }
  .bio-item-flag { display:inline-block; margin-top:0.35rem; font-size:0.63rem; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:var(--biosci-color); background:white; border:1px solid var(--biosci-mid); border-radius:20px; padding:0.1rem 0.5rem; }
  .band-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.9rem; margin-bottom:2rem; }
  .band-card { background:var(--bg-soft); border:1px solid var(--border); border-radius:10px; padding:1rem 1.2rem; }
  .band-card-title { font-weight:700; font-size:0.85rem; color:var(--manc-color); margin-bottom:0.4rem; }
  .band-card p { font-size:0.79rem; color:var(--text-secondary); line-height:1.55; }
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:110px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.72rem; border-radius:6px; padding:0.32rem 0.5rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--manc-color); }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--manc-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
  .flow-body strong { color:var(--text-primary); }
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
  .res-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:0.7rem; margin-bottom:2rem; }
  .res-card { background:var(--manc-light); border:1px solid var(--manc-mid); border-radius:8px; padding:0.8rem 1rem; }
  .res-card-label { font-weight:700; color:var(--manc-color); font-size:0.79rem; margin-bottom:0.22rem; }
  .res-card a { color:var(--manc-color); font-size:0.73rem; word-break:break-all; }
  @media (max-width:680px) {
    .stat-row,.do-dont,.band-grid,.bio-grid { grid-template-columns:1fr; }
    .prog-detail-footer,.mistake-item { grid-template-columns:1fr; }
  }
</style>

<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview',this)">Overview</button>
    <button class="tab-btn" onclick="showTab('programmes',this)">Programmes</button>
    <button class="tab-btn" onclick="showTab('requirements',this)">Entry Requirements</button>
    <button class="tab-btn" onclick="showTab('apply',this)">How to Apply</button>
  </div>
</nav>

<!-- TAB 1 OVERVIEW -->
<div id="tab-overview" class="tab-panel active" style="display:block">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Life Sciences &amp; Medical Sciences · A-Level Applicant Guide · 2026–27 Entry</p>
  <h2 class="section-title">University of Manchester</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>21 undergraduate programmes</strong> across Medicine, Dentistry, Pharmacy, the 15-course Biosciences group (Faculty of Biology, Medicine and Health), and Psychology at the University of Manchester. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2026–27 entry</strong> (i.e. courses starting September 2027).</p>
    <p>Requirements below are checked directly against official Manchester course pages (<code>manchester.ac.uk/study/undergraduate/courses/2027/</code>), the Faculty of Biology, Medicine and Health's Biosciences international entry requirements page, and UCAS course listings, all fetched July 2026. Grades shown are the <strong>standard offer</strong> — most courses also publish a lower contextual offer for widening-participation applicants. <strong>Manchester does not publish course-level offer/success rates for individual undergraduate programmes</strong> (it treats this as commercially sensitive information and has consistently refused FOI requests for it since 2020), so unlike our KCL and Imperial guides, this guide's tables do not include an offer-rate column. Where any other figure isn't published, it's shown as <span class="gdash">—</span> rather than estimated.</p>
  </div>
  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">21</span><span class="stat-card-label">Programmes in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">3</span><span class="stat-card-label">Subject groups</span></div>
    <div class="stat-card"><span class="stat-card-num">AAA</span><span class="stat-card-label">Standard offer (Medicine, Dentistry, Psychology)</span></div>
    <div class="stat-card"><span class="stat-card-num">15 Oct</span><span class="stat-card-label">Medicine/Dentistry UCAS deadline</span></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Programmes at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.9rem;">All entry requirements sourced from official Manchester course and English-language pages, and UCAS course listings, July 2026. No offer-rate column — Manchester doesn't publish this at course level (see note below).</p>
  <div class="group-legend">
    <div class="glegend-item"><span class="glegend-dot" style="background:var(--med-color);"></span>Medicine, Dentistry &amp; Pharmacy</div>
    <div class="glegend-item"><span class="glegend-dot" style="background:var(--biosci-color);"></span>Biosciences (Common Year One)</div>
    <div class="glegend-item"><span class="glegend-dot" style="background:var(--psych-color);"></span>Psychology</div>
  </div>

  <div class="glance-table-wrap">
    <table class="glance-table">
      <thead>
        <tr>
          <th>Programme</th>
          <th>A-Level</th>
          <th>IELTS</th>
        </tr>
      </thead>
      <tbody>
        <tr class="glance-row med">
          <td><span class="gname">Medicine MBChB</span><br><span class="gcode">A106</span></td>
          <td><span class="ggrade">AAA</span><span class="gsub">Chem or Bio, + 1 more from Chem/Bio/Physics/Psych/Maths/F.Maths · UCAT + interview</span></td>
          <td><span class="gval">7.0 / 6.5</span></td>
        </tr>
        <tr class="glance-row med">
          <td><span class="gname">Dentistry BDS</span><br><span class="gcode">A206</span></td>
          <td><span class="ggrade">AAA</span><span class="gsub">Chemistry + Biology/Human Biology · UCAT + interview</span></td>
          <td><span class="gval">7.0 / 6.5</span></td>
        </tr>
        <tr class="glance-row med">
          <td><span class="gname">Dental Hygiene &amp; Therapy BSc</span><br><span class="gcode">B840</span></td>
          <td><span class="gdash">— not independently confirmed</span><span class="gsub">Casper SJT + interview required</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row med">
          <td><span class="gname">Pharmacy MPharm</span><br><span class="gcode">B230</span></td>
          <td><span class="ggrade">AAB</span><span class="gsub">Chemistry + (Maths or Biology) + 1 rigorous academic subject · interview, no UCAT</span></td>
          <td><span class="gval">7.0 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Biology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths, min AB in both</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Biochemistry BSc</span><br><span class="gcode">C700</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">Must include Chemistry + 1 more Core Science</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Biology with Science and Society BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Biomedical Sciences BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths · not IBMS-accredited</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Biotechnology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Genetics BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Immunology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Life Sciences BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths · undecided-specialism route</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Medical Biochemistry BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">Must include Chemistry + 1 more Core Science</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Medical Physiology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Microbiology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Molecular Biology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">Must include Chemistry + 1 more Core Science</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Neuroscience BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Pharmacology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row biosci">
          <td><span class="gname">Zoology BSc</span><br><span class="gcode">— check UCAS</span></td>
          <td><span class="ggrade">AAA–AAB</span><span class="gsub">2 of Bio/Chem/Physics/Maths</span></td>
          <td><span class="gval">6.5 / 6.5</span></td>
        </tr>
        <tr class="glance-row psych">
          <td><span class="gname">Psychology BSc</span><br><span class="gcode">C800</span></td>
          <td><span class="ggrade">AAA</span><span class="gsub">1+ of Psych/Bio/HumanBio/Chem/Physics/Statistics/Maths/F.Maths/AppliedSci</span></td>
          <td><span class="gval">7.0 / 6.5</span></td>
        </tr>
        <tr class="glance-row psych">
          <td><span class="gname">Psychology of Education BSc</span><br><span class="gcode">— formerly "Educational Psychology"</span></td>
          <td><span class="gdash">— standard grade not confirmed (contextual: BBB)</span></td>
          <td><span class="gval">6.5 (writing 6.5, no skill &lt;6.0)</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="test-note"><strong>Admission test / interview:</strong> Medicine and Dentistry require the <strong>UCAT</strong> plus interview. Pharmacy and Dental Hygiene &amp; Therapy require an interview (Dental Hygiene &amp; Therapy also requires the Casper situational-judgement test) but not the UCAT. Every Biosciences and Psychology course in this guide makes offers on academic record alone, with no admissions test or interview.</div>
  <p style="font-size:0.68rem;color:var(--text-muted);line-height:1.5;margin:0.9rem 0 1.5rem;">IELTS shown as overall / minimum per component. All 15 Biosciences courses share an identical AAA–AAB offer with a minimum of grade AB in at least two of the "Core Sciences" (Biology, Chemistry, Physics, Mathematics) — Biochemistry, Medical Biochemistry and Molecular Biology additionally require Chemistry specifically. UCAS codes for individual Biosciences courses were not independently re-verified in this pass and are marked "check UCAS" — confirm the exact code on the relevant course page before applying. Blank/dash cells mean the figure isn't published or wasn't independently confirmed, not that it's zero.</p>

  <div class="info-box"><strong>Manchester doesn't publish course-level offer rates.</strong> Since at least 2020, Manchester has stated a University-wide policy of refusing undergraduate application/offer/intake data at individual-course level under FOI Section 43(2) (Commercial Interests) — it argues that per-course figures would reveal "market sensitive information" to competitor universities. The one confirmed exception is Medicine and Dentistry, where Manchester proactively publishes detailed cycle-by-cycle statistics because of the high public interest in these professionally regulated courses (see the Programmes tab for those figures). For everything else in this guide, there simply isn't a published number to show — this isn't a gap in our research, it's Manchester's standing policy.</div>
  <div class="info-box"><strong>The big pattern:</strong> AAA-AAB with two Core Sciences (minimum AB in both) is Manchester's baseline for all 15 Biosciences degrees — they share a genuinely common first year, so entry requirements, IELTS band and structure are identical across the group except for the Chemistry requirement on Biochemistry, Medical Biochemistry and Molecular Biology. Medicine, Dentistry and Psychology all require the full A* -free AAA; Pharmacy sits one grade lower at AAB. Admissions tests are reserved for the two GDC-regulated dental routes and Medicine — the GMC-regulated MBChB.</div>
  <div class="info-box"><strong>English language bands:</strong> Manchester sets IELTS by subject area rather than per-course. Medicine, Dentistry, Pharmacy and Psychology (BSc) all sit at <strong>7.0 overall / 6.5 minimum per component</strong>. Biosciences and Dental Hygiene &amp; Therapy sit at <strong>6.5 overall / 6.5 minimum per component</strong>. Psychology of Education is the outlier at 6.5 overall but with a specific 6.5 writing requirement and no individual skill below 6.0 — check this one directly if you're borderline.</div>
</div>

<!-- TAB 2 PROGRAMMES -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">21 programmes · Faculty of Biology, Medicine and Health</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>
  <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Structure and career details below are drawn from Manchester's official course pages. Offer-rate and places figures are only published for Medicine and Dentistry, the two proactively-reported courses — every other course in this guide leaves those cells blank rather than estimating.</p>

  <div class="group-header"><span class="group-dot" style="background:var(--med-color);"></span><h3>Medicine, Dentistry &amp; Pharmacy</h3></div>
  <p class="group-sub">Professional, regulated entry — Medicine and Dentistry require the UCAT; Pharmacy and Dental Hygiene &amp; Therapy require an interview</p>

  <div class="pcard med">
    <div class="pcard-hdr">
      <div><div class="pcard-title">Medicine MBChB</div><div class="pcard-meta">School of Medical Sciences · Faculty of Biology, Medicine and Health · UCAS: A106</div></div>
      <div class="pbadges"><span class="pbadge primary">5 years</span><span class="pbadge comp-high">High Competition</span></div>
    </div>
    <div class="pcard-body">
      <div>
        <div class="pcol-label">What is it?</div>
        <p class="pcard-desc">Manchester's standard-entry medical degree — one of the UK's largest medical schools, with over 401 funded places a year. Problem-based learning has been central to the curriculum for decades, with patient and clinical contact built in from the early years, across hospitals and GP practices throughout Greater Manchester and the North West.</p>
        <div class="pcol-label">Structure Notes</div>
        <ul class="pnote-list">
          <li>Highly integrated, PBL-based curriculum across five years</li>
          <li>Early clinical exposure alongside biomedical science teaching</li>
          <li>Clinical placements across Greater Manchester and the North West</li>
          <li>Graduates and final-year undergraduates from a small number of named institutions (e.g. St Andrews, IMU Malaysia) can enter directly to Year 3</li>
        </ul>
      </div>
      <div>
        <div class="pcol-label">Entry &amp; Contact</div>
        <ul class="pnote-list">
          <li>AAA including Chemistry or Biology, plus one further subject from Chemistry/Biology/Physics/Psychology/Maths/Further Maths</li>
          <li>UCAT required (all applicants must sit it in the year they apply) + Multiple Mini Interview; SJT Band 1–2 strongly preferred</li>
          <li>7 GCSEs at grade A(7)/A*(8+); English, Maths and 2 sciences at minimum grade B(6)</li>
          <li>No A-level resits accepted for standard entry (A106)</li>
          <li>IELTS: 7.0 overall / 6.5 each component</li>
          <li>Contact: <a href="https://www.bmh.manchester.ac.uk/study/medicine/apply/" target="_blank" style="color:var(--med-color);">Manchester Medicine Admissions</a></li>
        </ul>
      </div>
    </div>
    <div class="pcard-stats">
      <div><div class="pstat-label">2026-cycle Home Applications</div><div class="pstat-val">2,607</div></div>
      <div><div class="pstat-label">Offer Rate (of shortlisted)</div><div class="pstat-val">59% <span style="font-size:0.7rem;font-weight:500;color:var(--text-muted);">≈38% of all applicants</span></div></div>
    </div>
    <div class="pcard-caveat">★ One of the few programmes in this guide where Manchester proactively publishes multi-year cycle statistics, because of Medicine's high public interest and professional regulation. See the Entry Requirements tab for the full Home vs Overseas table back to 2020.</div>
  </div>

  <div class="pcard med">
    <div class="pcard-hdr">
      <div><div class="pcard-title">Dentistry BDS</div><div class="pcard-meta">School of Medical Sciences · Faculty of Biology, Medicine and Health · UCAS: A206</div></div>
      <div class="pbadges"><span class="pbadge primary">5 years</span><span class="pbadge comp-high">High Competition</span></div>
    </div>
    <div class="pcard-body">
      <div>
        <div class="pcol-label">What is it?</div>
        <p class="pcard-desc">Combines basic and advanced dental sciences with extensive early clinical experience at the University Dental Hospital of Manchester and outreach clinics across Greater Manchester. Manchester's former pre-dental entry route has been discontinued — this five-year BDS is now the only first-year entry point.</p>
        <div class="pcol-label">Structure Notes</div>
        <ul class="pnote-list">
          <li>Five years, PBL-based, with early and extensive clinical placement exposure</li>
          <li>Optional intercalated BSc/MRes year available</li>
          <li>Applications first screened academically before UCAT-ranked interview shortlisting</li>
          <li>Health screening (HEOPS standards) required of all offer-holders</li>
        </ul>
      </div>
      <div>
        <div class="pcol-label">Entry &amp; Contact</div>
        <ul class="pnote-list">
          <li>AAA including Chemistry and Biology/Human Biology (a combination of three sciences is also acceptable)</li>
          <li>Contextual offer: AAB including a non-science subject</li>
          <li>UCAT required + Multiple Mini Interview; SJT Band 3–4 not considered</li>
          <li>One resit permitted only under specific conditions (B at first attempt, resit A*AA with A* in a science)</li>
          <li>IELTS: 7.0 overall / 6.5 each component</li>
          <li>Contact: <a href="https://www.bmh.manchester.ac.uk/study/dentistry/apply/" target="_blank" style="color:var(--med-color);">Manchester Dentistry Admissions</a></li>
        </ul>
      </div>
    </div>
    <div class="pcard-stats">
      <div><div class="pstat-label">Places Available</div><div class="pstat-val">67 home + 4 international</div></div>
      <div><div class="pstat-label">2025-cycle Home Offer Rate (of shortlisted)</div><div class="pstat-val">36%</div></div>
    </div>
    <div class="pcard-caveat">★ Like Medicine, Manchester proactively publishes Dentistry cycle statistics — see the Entry Requirements tab for the full Home vs Overseas table back to 2020.</div>
  </div>

  <div class="pcard med">
    <div class="pcard-hdr">
      <div><div class="pcard-title">Dental Hygiene and Therapy BSc</div><div class="pcard-meta">School of Medical Sciences · Faculty of Biology, Medicine and Health · UCAS: B840</div></div>
      <div class="pbadges"><span class="pbadge primary">3 years</span><span class="pbadge comp-mod">Moderate Competition</span></div>
    </div>
    <div class="pcard-body">
      <div>
        <div class="pcol-label">What is it?</div>
        <p class="pcard-desc">Trains students to register with the General Dental Council as a dental therapist or dental hygienist, taking a holistic approach to primary dental care — periodontal treatment, simple fillings, dental radiographs, extraction of primary teeth, and patient education on oral health.</p>
        <div class="pcol-label">Structure Notes</div>
        <ul class="pnote-list">
          <li>Three years, up to 14 places available per year</li>
          <li>Students who perform exceptionally well are guaranteed an interview for the BDS course</li>
          <li>Casper situational-judgement test required in the year of application</li>
        </ul>
      </div>
      <div>
        <div class="pcol-label">Entry &amp; Contact</div>
        <ul class="pnote-list">
          <li>A-level grade profile not independently confirmed in this research pass — check the official course page directly</li>
          <li>Casper SJT + interview required; no UCAT</li>
          <li>IELTS: 6.5 overall / 6.5 each component</li>
          <li>Deadline: UCAS equal-consideration deadline in January (not the earlier Medicine/Dentistry October deadline)</li>
          <li>Contact: <a href="https://www.bmh.manchester.ac.uk/study/dentistry/apply-dental-hygiene-and-therapy/" target="_blank" style="color:var(--med-color);">Dental Hygiene &amp; Therapy Admissions</a></li>
        </ul>
      </div>
    </div>
    <div class="pcard-stats">
      <div><div class="pstat-label">Places Available</div><div class="pstat-val">Up to 14</div></div>
      <div><div class="pstat-label">Offer Rate</div><div class="pstat-val pdash">— not published</div></div>
    </div>
  </div>

  <div class="pcard med">
    <div class="pcard-hdr">
      <div><div class="pcard-title">Pharmacy MPharm</div><div class="pcard-meta">School of Health Sciences · Faculty of Biology, Medicine and Health · UCAS: B230</div></div>
      <div class="pbadges"><span class="pbadge primary">4 years</span><span class="pbadge comp-mod">GPhC Accredited</span></div>
    </div>
    <div class="pcard-body">
      <div>
        <div class="pcol-label">What is it?</div>
        <p class="pcard-desc">A four-year, GPhC-accredited master's-level integrated degree combining pharmaceutical science with the practice of pharmacy, giving graduates the knowledge and skills to enter the pharmacy profession after completing a pre-registration year and the GPhC's registration exam.</p>
        <div class="pcol-label">Structure Notes</div>
        <ul class="pnote-list">
          <li>Learn from practising community and hospital pharmacists throughout your studies</li>
          <li>A pass in the practical element of any science A-level taken is required</li>
          <li>A five-year route with an additional Foundation Year exists for eligible UK-resident applicants at CCC–BBC</li>
          <li>Resits considered if BBB obtained at first attempt</li>
        </ul>
      </div>
      <div>
        <div class="pcol-label">Entry &amp; Contact</div>
        <ul class="pnote-list">
          <li>AAB including Chemistry, either Mathematics or Biology, and one further "rigorous academic" subject (General Studies and Critical Thinking not accepted)</li>
          <li>Interview required (20 minutes); no UCAT</li>
          <li>IELTS: 7.0 overall / 6.5 each component</li>
          <li>Contact: <a href="https://www.bmh.manchester.ac.uk/study/pharmacy/apply/" target="_blank" style="color:var(--med-color);">Manchester Pharmacy Admissions</a></li>
        </ul>
      </div>
    </div>
    <div class="pcard-stats">
      <div><div class="pstat-label">Places Available</div><div class="pstat-val pdash">— not published</div></div>
      <div><div class="pstat-label">Offer Rate</div><div class="pstat-val pdash">— not published</div></div>
    </div>
  </div>

  <div class="group-header"><span class="group-dot" style="background:var(--biosci-color);"></span><h3>Biosciences — Common Year One</h3></div>
  <p class="group-sub">All 15 courses below share a genuinely common first year, allowing students to transfer between them before Year 2 — entry requirements and IELTS are identical across the group except where Chemistry is specifically required.</p>

  <div class="bio-grid">
    <div class="bio-item"><div class="bio-item-name">Biochemistry</div><div class="bio-item-desc">Molecular basis of life — proteins, metabolism, gene expression.</div><span class="bio-item-flag">Requires Chemistry</span></div>
    <div class="bio-item"><div class="bio-item-name">Biology</div><div class="bio-item-desc">Broad study of living organisms; flexible specialisation from Year 2.</div></div>
    <div class="bio-item"><div class="bio-item-name">Biology with Science and Society</div><div class="bio-item-desc">Core biology plus the social, ethical and policy dimensions of science.</div></div>
    <div class="bio-item"><div class="bio-item-name">Biomedical Sciences</div><div class="bio-item-desc">Physiology, pharmacology, neuroscience, microbiology, genetics — not IBMS-accredited.</div></div>
    <div class="bio-item"><div class="bio-item-name">Biotechnology</div><div class="bio-item-desc">Applying biological systems to develop products and technologies.</div></div>
    <div class="bio-item"><div class="bio-item-name">Genetics</div><div class="bio-item-desc">Heredity, gene function and genomics across organisms.</div></div>
    <div class="bio-item"><div class="bio-item-name">Immunology</div><div class="bio-item-desc">How the immune system defends the body and underlies disease.</div></div>
    <div class="bio-item"><div class="bio-item-name">Life Sciences</div><div class="bio-item-desc">Undecided-specialism route — transfers into most other Biosciences degrees after Year 1.</div></div>
    <div class="bio-item"><div class="bio-item-name">Medical Biochemistry</div><div class="bio-item-desc">Biochemistry with a clinical/medical application focus.</div><span class="bio-item-flag">Requires Chemistry</span></div>
    <div class="bio-item"><div class="bio-item-name">Medical Physiology</div><div class="bio-item-desc">How organ systems function in health and disease.</div></div>
    <div class="bio-item"><div class="bio-item-name">Microbiology</div><div class="bio-item-desc">Bacteria, viruses, fungi and their roles in health, disease and industry.</div></div>
    <div class="bio-item"><div class="bio-item-name">Molecular Biology</div><div class="bio-item-desc">Molecular mechanisms underlying cell structure and function.</div><span class="bio-item-flag">Requires Chemistry</span></div>
    <div class="bio-item"><div class="bio-item-name">Neuroscience</div><div class="bio-item-desc">Structure and function of the nervous system, from molecules to behaviour.</div></div>
    <div class="bio-item"><div class="bio-item-name">Pharmacology</div><div class="bio-item-desc">How drugs interact with biological systems to treat disease.</div></div>
    <div class="bio-item"><div class="bio-item-name">Zoology</div><div class="bio-item-desc">Animal biology, behaviour, evolution and conservation.</div></div>
  </div>

  <div class="prog-detail biosci">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Shared Structure Across All 15 Biosciences Courses</div><div class="prog-detail-meta">School of Biological Sciences · Faculty of Biology, Medicine and Health</div></div>
      <div class="ptags"><span class="ptag none">No test or interview</span></div>
    </div>
    <p class="prog-desc" style="margin-bottom:0.7rem;">Every course above is also offered as an <strong>MSci</strong> (4-year integrated master's), <strong>With Industrial/Professional Experience</strong> (4-year sandwich placement), <strong>With a Modern Language</strong> (French, German, Italian, Spanish, Japanese or Mandarin), and select courses offer <strong>With Entrepreneurship</strong>. A <strong>Foundation Year</strong> route exists for applicants without standard entry qualifications.</p>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA–AAB</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">2 of Bio/Chem/Physics/Maths, min AB in both</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 overall / 6.5 each component</div></div>
    </div>
    <div class="prog-star" style="margin-top:0.7rem;font-size:0.75rem;font-style:italic;padding:0.45rem 0.7rem;background:rgba(255,255,255,0.7);border-radius:0 6px 6px 0;color:var(--text-muted);line-height:1.5;border-left:2px solid var(--biosci-color);">★ If you're only taking one Core Science, Manchester will still consider you for an AAA offer provided you're also sitting at least one of Geography, Psychology, Environmental Studies or a similar related subject alongside it — check the specific course page for the accepted list. Applicants to Biochemistry, Medical Biochemistry and Molecular Biology must include Chemistry specifically as one of their two Core Sciences.</div>
  </div>

  <div class="group-header"><span class="group-dot" style="background:var(--psych-color);"></span><h3>Psychology</h3></div>
  <p class="group-sub">BPS-accredited standard Psychology, and the education-focused variant formerly called "Educational Psychology"</p>

  <div class="pcard psych">
    <div class="pcard-hdr">
      <div><div class="pcard-title">Psychology BSc</div><div class="pcard-meta">Division of Psychology and Mental Health · Faculty of Biology, Medicine and Health · UCAS: C800</div></div>
      <div class="pbadges"><span class="pbadge primary">3 years</span><span class="pbadge comp-high">High Competition</span></div>
    </div>
    <div class="pcard-body">
      <div>
        <div class="pcol-label">What is it?</div>
        <p class="pcard-desc">A flexible, BPS-accredited degree covering four themes: mind and brain, evolution and development, adaptability and wellbeing, and psychology in society. Graduates are highly employable across a wide range of sectors beyond clinical psychology itself.</p>
        <div class="pcol-label">Structure Notes</div>
        <ul class="pnote-list">
          <li>3 years standard, 4 years with Study Abroad or a Placement Year</li>
          <li>Optional 30-hour placement in Year 2, or a full year-long placement in Year 3</li>
          <li>Only one performance-based A-level accepted (e.g. Photography, Drama, Art/Design, Music, Media Studies)</li>
        </ul>
      </div>
      <div>
        <div class="pcol-label">Entry &amp; Contact</div>
        <ul class="pnote-list">
          <li>AAA including one or more of: Psychology, Biology, Human Biology, Chemistry, Physics, Statistics, Mathematics, Further Maths, Applied Science</li>
          <li>Contextual offer: AAB, same subject requirement</li>
          <li>No admission test or interview</li>
          <li>Resits reconsidered if minimum BBB obtained at first attempt</li>
          <li>IELTS: 7.0 overall / 6.5 each component</li>
          <li>Contact: <a href="https://www.bmh.manchester.ac.uk/study/psychology/" target="_blank" style="color:var(--psych-color);">Manchester Psychology Admissions</a></li>
        </ul>
      </div>
    </div>
    <div class="pcard-stats">
      <div><div class="pstat-label">Places Available</div><div class="pstat-val pdash">— not published</div></div>
      <div><div class="pstat-label">Offer Rate</div><div class="pstat-val pdash">— not published</div></div>
    </div>
  </div>

  <div class="pcard psych">
    <div class="pcard-hdr">
      <div><div class="pcard-title">Psychology of Education BSc</div><div class="pcard-meta">Division of Psychology and Mental Health · Faculty of Biology, Medicine and Health · formerly "Educational Psychology"</div></div>
      <div class="pbadges"><span class="pbadge primary">3 years</span><span class="pbadge comp-mod">Moderate Competition</span></div>
    </div>
    <div class="pcard-body">
      <div>
        <div class="pcol-label">What is it?</div>
        <p class="pcard-desc">Applies psychological theories and principles to the context of education, covering biological, cognitive, social and developmental psychology with a particular lens on learning and individual differences. Course was renamed from "Educational Psychology" to "Psychology of Education" for recent entry cycles.</p>
        <div class="pcol-label">Structure Notes</div>
        <ul class="pnote-list">
          <li>Mandatory work placements — a DBS check is required upon entry</li>
          <li>No interview conducted as standard, though tutors reserve the right to request one</li>
          <li>Preferred (not strictly required) subjects include Biology, Chemistry, Psychology, Maths, Sociology, Statistics and several others</li>
        </ul>
      </div>
      <div>
        <div class="pcol-label">Entry &amp; Contact</div>
        <ul class="pnote-list">
          <li>Standard A-level grade requirement not independently confirmed in this pass</li>
          <li>Contextual offer confirmed at BBB including subject-specific requirements (implies the standard offer sits above this)</li>
          <li>No admission test; interview not conducted as standard</li>
          <li>IELTS: 6.5 overall, with 6.5 in writing and no individual skill below 6.0</li>
          <li>Contact: <a href="https://www.bmh.manchester.ac.uk/study/psychology/" target="_blank" style="color:var(--psych-color);">Manchester Psychology Admissions</a></li>
        </ul>
      </div>
    </div>
    <div class="pcard-stats">
      <div><div class="pstat-label">Places Available</div><div class="pstat-val pdash">— not published</div></div>
      <div><div class="pstat-label">Offer Rate</div><div class="pstat-val pdash">— not published</div></div>
    </div>
    <div class="pcard-caveat">★ Verify the current standard (non-contextual) grade requirement directly on the official course page before applying — this figure could not be independently confirmed at time of writing.</div>
  </div>
</div>

<!-- TAB 3 ENTRY REQUIREMENTS -->
<div id="tab-requirements" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">English language bands · Admission tests · Medicine &amp; Dentistry cycle data · Contextual offers</p>
  <h2 class="section-title">Entry Requirements in Detail</h2>
  <div class="divider"></div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.6rem;">English Language Bands</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:1.2rem;">Manchester sets IELTS requirements by subject area rather than a single University-wide figure. The Faculty's general baseline (for subjects not listed here) is IELTS 6.0 overall with no component below 5.0–5.5, but every subject covered in this guide sits above that baseline.</p>
  <div class="band-grid">
    <div class="band-card">
      <div class="band-card-title">7.0 overall / 6.5 each component</div>
      <p>Medicine MBChB, Dentistry BDS, Pharmacy MPharm, and Psychology BSc. Manchester's Faculty page explicitly flags Medicine (and, separately, Law) as requiring the higher band.</p>
    </div>
    <div class="band-card">
      <div class="band-card-title">6.5 overall / 6.5 each component</div>
      <p>All 15 Biosciences courses, and Dental Hygiene &amp; Therapy BSc.</p>
    </div>
    <div class="band-card">
      <div class="band-card-title">6.5 overall / 6.5 writing / no skill below 6.0</div>
      <p>Psychology of Education BSc — a slightly different sub-score structure from the standard Biosciences band, so check this one directly if you're borderline on writing.</p>
    </div>
    <div class="band-card">
      <div class="band-card-title">GCSE/IGCSE alternative</div>
      <p>Most courses also accept GCSE/IGCSE English Language at grade B/6 (Dental Hygiene &amp; Therapy accepts grade C/4) in place of IELTS — check the specific course page for your qualification's equivalence.</p>
    </div>
  </div>
  <div class="info-box">Test validity: IELTS results are generally only valid for two years and must be valid on the course start date. Manchester does not accept AS-level results as part of standard admissions, and generally does not grant subject exemptions for Medicine given the highly integrated nature of the course.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.6rem;margin-top:2rem;">Medicine &amp; Dentistry — Published Application Statistics</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:1rem;">Medicine and Dentistry are the only two programmes in this guide where Manchester proactively publishes course-level cycle data — because of their high public interest and professional regulation, FOI officers now redirect requesters to these official statistics pages rather than answering FOI requests directly.</p>

  <div class="glance-table-wrap" style="margin-bottom:1.5rem;">
    <table class="glance-table" style="min-width:600px;">
      <thead>
        <tr><th>MBChB Medicine (A106) · Home</th><th>2026</th><th>2025</th><th>2024</th><th>2023</th></tr>
      </thead>
      <tbody>
        <tr class="glance-row med"><td class="gname">Applications</td><td class="gval">2,607</td><td class="gval">1,601</td><td class="gval">1,689</td><td class="gval">2,181</td></tr>
        <tr class="glance-row med"><td class="gname">Shortlisted %</td><td class="gval">63%</td><td class="gval">80%</td><td class="gval">76%</td><td class="gval">57%</td></tr>
        <tr class="glance-row med"><td class="gname">Offer % (of shortlisted)</td><td class="gval">59%</td><td class="gval">70%</td><td class="gval">70%</td><td class="gval">58%</td></tr>
      </tbody>
    </table>
  </div>
  <div class="glance-table-wrap" style="margin-bottom:1rem;">
    <table class="glance-table" style="min-width:600px;">
      <thead>
        <tr><th>BDS Dentistry (A206) · Home</th><th>2025</th><th>2024</th><th>2023</th><th>2022</th></tr>
      </thead>
      <tbody>
        <tr class="glance-row med"><td class="gname">Applications</td><td class="gval">730</td><td class="gval">780</td><td class="gval">858</td><td class="gval">869</td></tr>
        <tr class="glance-row med"><td class="gname">Offer % (of shortlisted)</td><td class="gval">36%</td><td class="gval">29%</td><td class="gval">26%</td><td class="gval">48%</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.68rem;color:var(--text-muted);line-height:1.5;margin-bottom:1.5rem;">Source: Manchester's own published application-statistics pages (bmh.manchester.ac.uk/study/medicine/apply/data/ and .../dentistry/apply/statistics/), fetched July 2026. "Offer % of shortlisted" is not the same as offer rate ÷ all applicants — e.g. the 2026 Medicine figure of 985 offers ÷ 1,667 shortlisted = 59%, but 985 ÷ 2,607 total applications ≈ 38%. Both are legitimate readings; specify which denominator you mean when comparing to other universities' figures.</p>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.6rem;">Contextual Offers</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:1.5rem;">Manchester operates contextual admissions for UK-domiciled applicants who meet specific socioeconomic or school-performance criteria — most published contextual offers sit one to two grades below the standard offer (for example, Dentistry's AAA drops to AAC/AAB depending on route, and Psychology's AAA drops to AAB). Contextual offers are generally not available to international applicants — check current eligibility on Manchester's contextual admissions page before assuming one applies to you.</p>
</div>

<!-- TAB 4 HOW TO APPLY -->
<div id="tab-apply" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · Personal statement · Key dates · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">UCAS Application Process</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Step-by-step for 2026–27 entry (starting September 2027). Medicine and Dentistry have an earlier deadline than every other programme in this guide.</p>
  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">12 May 2026</div><div class="flow-body"><strong>UCAS Hub opens for 2027 entry</strong> — register and start researching your programme choices.</div></div>
      <div class="flow-row"><div class="flow-num">Jul–Sep 2026</div><div class="flow-body"><strong>Register for &amp; sit the UCAT</strong> (Medicine and Dentistry applicants only) — check the UCAT website for the exact 2026 registration and test-date window.</div></div>
      <div class="flow-row"><div class="flow-num">1 Sep 2026</div><div class="flow-body"><strong>Applications open for submission</strong> — completed UCAS applications can now be sent once references and fees are in place.</div></div>
      <div class="flow-row"><div class="flow-num">15 Oct 2026</div><div class="flow-body"><strong>UCAS deadline — Medicine &amp; Dentistry</strong> — A106 and A206 applicants must submit by 18:00 UK time. Late applications are not given equal consideration.</div></div>
      <div class="flow-row"><div class="flow-num">14 Jan 2027</div><div class="flow-body"><strong>UCAS deadline — all other programmes</strong> — equal-consideration deadline for Pharmacy, Dental Hygiene &amp; Therapy, all 15 Biosciences courses, and both Psychology programmes.</div></div>
      <div class="flow-row"><div class="flow-num">Late 2026–Early 2027</div><div class="flow-body"><strong>Interview invitations</strong> — Medicine, Dentistry, Dental Hygiene &amp; Therapy and Pharmacy applicants who meet the academic/UCAT threshold are invited to interview.</div></div>
      <div class="flow-row"><div class="flow-num">Aug 2027</div><div class="flow-body"><strong>A-level results &amp; confirm</strong> — meet the conditions of your offer to secure your place.</div></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Personal Statement Do's &amp; Don'ts</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">4,000 characters · One statement serves all five UCAS choices</p>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">DO</div>
      <ul class="ddlist">
        <li>Show genuine, specific interest in your chosen subject, not just science in general</li>
        <li>For Medicine/Dentistry: reflect on work experience or shadowing rather than just listing it</li>
        <li>For Biosciences applicants: show you understand you'll pick your final specialisation after a shared Year 1</li>
        <li>Link your A-level subjects directly to the degree content</li>
        <li>Avoid writing a statement geared to a different discipline — Manchester explicitly screens out mismatched Psychology and Pharmacy statements</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">DON'T</div>
      <ul class="ddlist">
        <li>Open with generic sentences ("Since childhood I have loved science…")</li>
        <li>Miss the earlier 15 October deadline if applying to Medicine or Dentistry</li>
        <li>Assume a contextual offer applies to you without checking current eligibility (it generally doesn't for international applicants)</li>
        <li>Confuse Biomedical Sciences (not IBMS-accredited) with a professionally accredited biomedical science route elsewhere</li>
        <li>List extracurriculars without connecting them to your subject</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Common Application Mistakes</h3>
  <div>
    <div class="mistake-item"><div class="mw">Applying to Medicine or Dentistry after the 15 October deadline</div><div class="mr">These two close a full 3 months earlier than every other course in this guide — diarise it now</div></div>
    <div class="mistake-item"><div class="mw">Forgetting to register for the UCAT in time</div><div class="mr">Check the current UCAT registration and test-date windows well before autumn 2026</div></div>
    <div class="mistake-item"><div class="mw">Assuming all Biosciences courses need Chemistry</div><div class="mr">Only Biochemistry, Medical Biochemistry and Molecular Biology specifically require it — most others accept any two Core Sciences</div></div>
    <div class="mistake-item"><div class="mw">Letting an IELTS score go stale</div><div class="mr">Results are generally valid for two years only — plan your test date around your September 2027 start</div></div>
    <div class="mistake-item"><div class="mw">Expecting a published offer rate for most Manchester courses</div><div class="mr">Only Medicine and Dentistry publish this — for everything else, Manchester's Section 43(2) FOI policy means it simply isn't public</div></div>
    <div class="mistake-item"><div class="mw">Applying to Psychology or Pharmacy with a statement geared to a different course</div><div class="mr">Manchester explicitly deprioritises mismatched personal statements on high-volume courses</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:2rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">Medicine MBChB</div><a href="https://www.bmh.manchester.ac.uk/study/medicine/" target="_blank">bmh.manchester.ac.uk/study/medicine</a></div>
    <div class="res-card"><div class="res-card-label">Dentistry BDS</div><a href="https://www.bmh.manchester.ac.uk/study/dentistry/" target="_blank">bmh.manchester.ac.uk/study/dentistry</a></div>
    <div class="res-card"><div class="res-card-label">Pharmacy MPharm</div><a href="https://www.bmh.manchester.ac.uk/study/pharmacy/" target="_blank">bmh.manchester.ac.uk/study/pharmacy</a></div>
    <div class="res-card"><div class="res-card-label">Biosciences Hub</div><a href="https://www.bmh.manchester.ac.uk/study/biosciences/" target="_blank">bmh.manchester.ac.uk/study/biosciences</a></div>
    <div class="res-card"><div class="res-card-label">Biosciences International Entry Requirements</div><a href="https://www.bmh.manchester.ac.uk/study/biosciences/international/" target="_blank">bmh.manchester.ac.uk/study/biosciences/international</a></div>
    <div class="res-card"><div class="res-card-label">Psychology</div><a href="https://www.bmh.manchester.ac.uk/study/psychology/" target="_blank">bmh.manchester.ac.uk/study/psychology</a></div>
    <div class="res-card"><div class="res-card-label">UCAS Deadlines 2026–27</div><div style="font-size:0.77rem;color:var(--text-secondary);">15 Oct 2026 (Medicine/Dentistry) · 14 Jan 2027 (all else)</div></div>
  </div>
  <div class="info-box"><strong>All information current as of July 2026.</strong> Always verify requirements on official Manchester course pages before submitting — offer grades, test requirements and English language bands can change year to year, and this guide leaves fields blank rather than guessing wherever Manchester hasn't published a figure or a detail could not be independently confirmed.</div>
</div>

<script>
  function showTab(id,btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active');p.style.display='none';});
    document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
    var panel=document.getElementById('tab-'+id);
    if(panel){panel.classList.add('active');panel.style.display='block';}
    if(btn) btn.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  }
  document.addEventListener('DOMContentLoaded',function(){
    var f=document.getElementById('tab-overview');if(f)f.style.display='block';
  });
</script>
