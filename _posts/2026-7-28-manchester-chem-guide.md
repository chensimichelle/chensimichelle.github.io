---
layout: post
title: "University of Manchester - Chemistry, Chemical Engineering & Materials Guide"
date: 2026-07-28
tags: [uk, program introduction]
categories: []
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
    --mcr-color: #6b2c91;
    --mcr-light: #f1e8f7;
    --mcr-mid: #d4b8e8;
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
  .stat-card { background: var(--mcr-light); border: 1px solid var(--mcr-mid); border-top: 3px solid var(--mcr-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--mcr-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }
  .mcr-req-table-wrap { overflow-x: auto; margin-bottom: 2rem; }
  .mcr-req-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  .mcr-req-table th { padding: 0.65rem 0.75rem; text-align: left; font-size: 0.68rem; font-weight: 700 !important; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 2px solid var(--border); background: var(--mcr-light); color: var(--mcr-color) !important; font-family: 'DM Sans', sans-serif !important; }
  .mcr-req-table td { padding: 0.65rem 0.75rem; border-bottom: 1px solid var(--border); color: var(--text-secondary) !important; vertical-align: top; line-height: 1.5; font-size: 0.8rem !important; font-weight: 400 !important; font-family: 'DM Sans', sans-serif !important; }
  .mcr-req-table tr { border-left: 4px solid transparent; }
  .mcr-req-table tr.grp-chem { border-left-color: var(--chem-color); }
  .mcr-req-table tr.grp-chemeng { border-left-color: var(--chemeng-color); }
  .mcr-req-table tr.grp-mat { border-left-color: var(--mat-color); }
  .mcr-req-table tr:nth-child(even) td { background: var(--bg-soft); }
  .mcr-req-table tr:last-child td { border-bottom: none; }
  .mcr-row-label { font-weight: 700 !important; color: var(--text-primary) !important; }
  .mcr-row-sub { display: block; font-size: 0.68rem !important; color: var(--text-muted) !important; margin-top: 0.1rem; font-weight: 400 !important; }
  .mcr-dash { color: var(--text-muted); font-style: italic; }
  .legend-row { display: flex; gap: 1.1rem; flex-wrap: wrap; margin-bottom: 1.2rem; }
  .legend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.76rem; color: var(--text-secondary); }
  .legend-swatch { width: 12px; height: 12px; border-radius: 3px; display: inline-block; }
  .info-box { background: var(--blog-accent-light); border-left: 4px solid var(--blog-accent); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
  .info-box strong { color: var(--text-primary); }
  .prog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .prog-card { border-radius: 12px; padding: 1.1rem; border: 1px solid var(--border); position: relative; overflow: hidden; }
  .prog-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-card.chem { background:var(--chem-light); } .prog-card.chem::before { background:var(--chem-color); }
  .prog-card.chemeng { background:var(--chemeng-light); } .prog-card.chemeng::before { background:var(--chemeng-color); }
  .prog-card.mat { background:var(--mat-light); } .prog-card.mat::before { background:var(--mat-color); }
  .prog-card-label { font-size: 0.63rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .chem .prog-card-label { color:var(--chem-color); } .chemeng .prog-card-label { color:var(--chemeng-color); }
  .mat .prog-card-label { color:var(--mat-color); }
  .prog-card-name { font-family:'DM Serif Display',serif; font-size:0.98rem; color:var(--text-primary); margin-bottom:0.15rem; }
  .prog-card-meta { font-size:0.68rem; color:var(--text-muted); margin-bottom:0.75rem; }
  .prog-card-stats { display:grid; grid-template-columns:1fr 1fr; gap:0.35rem; }
  .prog-stat { background:white; border-radius:6px; padding:0.35rem 0.5rem; text-align:center; }
  .prog-stat-num { font-weight:700; font-size:0.85rem; }
  .chem .prog-stat-num { color:var(--chem-color); } .chemeng .prog-stat-num { color:var(--chemeng-color); }
  .mat .prog-stat-num { color:var(--mat-color); }
  .prog-stat-label { font-size:0.58rem; color:var(--text-muted); }
  .decision-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:2rem; }
  .decision-card { background:var(--bg-soft); border:1px solid var(--border); border-left:3px solid var(--mcr-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .decision-q { font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-bottom:0.3rem; line-height:1.4; }
  .decision-best { font-weight:700; font-size:0.85rem; color:var(--mcr-color); margin-bottom:0.12rem; }
  .decision-also { font-size:0.73rem; color:var(--text-muted); }
  .prog-detail { border-radius:12px; border:1px solid var(--border); padding:1.4rem; margin-bottom:1.4rem; position:relative; overflow:hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.chem { background:var(--chem-light); } .prog-detail.chem::before { background:var(--chem-color); }
  .prog-detail.chemeng { background:var(--chemeng-light); } .prog-detail.chemeng::before { background:var(--chemeng-color); }
  .prog-detail.mat { background:var(--mat-light); } .prog-detail.mat::before { background:var(--mat-color); }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.15rem; }
  .chem .prog-detail-title { color:var(--chem-color); } .chemeng .prog-detail-title { color:var(--chemeng-color); }
  .mat .prog-detail-title { color:var(--mat-color); }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag { font-size:0.65rem; font-weight:700; letter-spacing:0.05em; padding:0.18rem 0.55rem; border-radius:20px; color:white; }
  .ptag.c { background:var(--chem-color); } .ptag.ce { background:var(--chemeng-color); } .ptag.m { background:var(--mat-color); }
  .ptag.interview { background:#c0392b; } .ptag.noint { background:#27ae60; }
  .prog-detail-body { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:0.85rem; }
  .sec-label { font-size:0.63rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem; }
  .prog-desc { font-size:0.8rem; color:var(--text-secondary); line-height:1.65; }
  .plist { list-style:none; }
  .plist li { font-size:0.78rem; color:var(--text-secondary); padding:0.22rem 0 0.22rem 1rem; position:relative; line-height:1.4; border-bottom:1px solid rgba(0,0,0,0.05); }
  .plist li:last-child { border-bottom:none; }
  .plist li::before { content:'›'; position:absolute; left:0; font-weight:700; }
  .chem .plist li::before { color:var(--chem-color); } .chemeng .plist li::before { color:var(--chemeng-color); }
  .mat .plist li::before { color:var(--mat-color); }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(4,1fr); gap:0.6rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); }
  .pf-label { font-size:0.6rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; margin-bottom:0.12rem; }
  .chem .pf-label { color:var(--chem-color); } .chemeng .pf-label { color:var(--chemeng-color); }
  .mat .pf-label { color:var(--mat-color); }
  .pf-val { font-size:0.76rem; color:var(--text-primary); font-weight:600; }
  .prog-star { margin-top:0.7rem; font-size:0.75rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .chem .prog-star { border-left:2px solid var(--chem-color); } .chemeng .prog-star { border-left:2px solid var(--chemeng-color); }
  .mat .prog-star { border-left:2px solid var(--mat-color); }
  .callout { font-size:0.77rem; color:var(--text-secondary); background:white; border:1px solid var(--border); border-left:3px solid; border-radius:0 7px 7px 0; padding:0.55rem 0.75rem; line-height:1.5; }
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:110px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.73rem; border-radius:6px; padding:0.32rem 0.55rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--mcr-color); }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--mcr-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
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
  .tl-track { display:flex; overflow-x:auto; padding-bottom:0.5rem; margin-bottom:2rem; }
  .tl-item { flex:0 0 auto; display:flex; flex-direction:column; align-items:center; width:110px; position:relative; }
  .tl-item:not(:last-child)::after { content:''; position:absolute; top:10px; left:55px; width:110px; height:2px; background:var(--mcr-color); opacity:0.22; }
  .tl-dot { width:20px; height:20px; border-radius:50%; background:var(--mcr-color); border:2px solid white; margin-bottom:0.45rem; flex-shrink:0; z-index:1; }
  .tl-item.hl .tl-dot { background:var(--blog-accent); }
  .tl-date { font-size:0.7rem; font-weight:700; color:var(--mcr-color); margin-bottom:0.18rem; text-align:center; }
  .tl-item.hl .tl-date { color:var(--blog-accent); }
  .tl-lbl { font-size:0.66rem; color:var(--text-primary); text-align:center; line-height:1.3; }
  .res-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:0.7rem; margin-bottom:2rem; }
  .res-card { background:var(--mcr-light); border:1px solid var(--mcr-mid); border-radius:8px; padding:0.8rem 1rem; }
  .res-card-label { font-weight:700; color:var(--mcr-color); font-size:0.79rem; margin-bottom:0.22rem; }
  .res-card a { color:var(--mcr-color); font-size:0.73rem; word-break:break-all; }
  @media (max-width:680px) {
    .stat-row,.do-dont,.decision-grid { grid-template-columns:1fr; }
    .prog-grid { grid-template-columns:1fr; }
    .prog-detail-body,.mistake-item { grid-template-columns:1fr; }
    .prog-detail-footer { grid-template-columns:1fr 1fr; }
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
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Chemistry · Chemical Engineering · Materials Science &amp; Engineering · A-Level Applicant Guide · 2027 Entry</p>
  <h2 class="section-title">University of Manchester</h2>
  <div class="divider"></div>
  <div class="overview-intro">
    <p>This guide covers <strong>6 undergraduate programmes</strong> across <strong>3 departments</strong> — Chemistry (BSc/MChem), Chemical Engineering (BEng/MEng) and Materials Science &amp; Engineering (BSc/MEng) — at the University of Manchester. Manchester is the historic birthplace of chemical engineering as a discipline and one of Europe's largest centres for materials research. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2027 entry</strong>.</p>
    <p>Key differentiators: <strong>Chemistry</strong> is not routinely interviewed; <strong>Chemical Engineering</strong> invites every eligible UK-based applicant to a UCAS Interview Day; <strong>Materials</strong> invites eligible applicants to a Virtual Visit Day that includes an interview. Entry grades range from AAB (Materials BSc) up to A*AA (MChem Chemistry). All three departments sit within the Faculty of Science and Engineering.</p>
  </div>
  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">6</span><span class="stat-card-label">Programmes in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">3</span><span class="stat-card-label">Departments</span></div>
    <div class="stat-card"><span class="stat-card-num">Top 5</span><span class="stat-card-label">UK for Materials Science (QS)</span></div>
    <div class="stat-card"><span class="stat-card-num">6.5</span><span class="stat-card-label">IELTS overall (all six)</span></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">The 6 Programmes at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Faculty of Science and Engineering · A-level and IELTS requirements verified against live 2027-entry course pages, July 2026</p>
  <div class="legend-row">
    <div class="legend-item"><span class="legend-swatch" style="background:var(--chem-color);"></span>Department of Chemistry</div>
    <div class="legend-item"><span class="legend-swatch" style="background:var(--chemeng-color);"></span>Department of Chemical Engineering</div>
    <div class="legend-item"><span class="legend-swatch" style="background:var(--mat-color);"></span>Department of Materials</div>
  </div>
  <div class="mcr-req-table-wrap">
    <table class="mcr-req-table">
      <thead>
        <tr>
          <th>Programme</th>
          <th>UCAS Code</th>
          <th>A-Level Offer</th>
          <th>IELTS</th>
          <th>Admission Test / Interview</th>
          <th>Success Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr class="grp-chem">
          <td class="mcr-row-label">BSc Chemistry<span class="mcr-row-sub">3 yrs · Dept of Chemistry</span></td>
          <td>F100</td>
          <td>AAA<span class="mcr-row-sub">Chemistry + 1 other science/maths</span></td>
          <td>6.5 / 6.0</td>
          <td>None routinely</td>
          <td class="mcr-dash">— not published</td>
        </tr>
        <tr class="grp-chem">
          <td class="mcr-row-label">MChem Chemistry<span class="mcr-row-sub">4 yrs · Dept of Chemistry</span></td>
          <td>F109</td>
          <td>A*AA<span class="mcr-row-sub">Chemistry + 1 other science/maths</span></td>
          <td>6.5 / 6.0</td>
          <td>None routinely</td>
          <td class="mcr-dash">— not published</td>
        </tr>
        <tr class="grp-chemeng">
          <td class="mcr-row-label">BEng Chemical Engineering<span class="mcr-row-sub">3 yrs · Dept of Chemical Engineering</span></td>
          <td>H800</td>
          <td>AAA<span class="mcr-row-sub">Mathematics + Chemistry or Physics</span></td>
          <td>6.5 / 6.5</td>
          <td>UCAS Interview Day</td>
          <td class="mcr-dash">— not published</td>
        </tr>
        <tr class="grp-chemeng">
          <td class="mcr-row-label">MEng Chemical Engineering<span class="mcr-row-sub">4 yrs · Dept of Chemical Engineering</span></td>
          <td>H801</td>
          <td>AAA<span class="mcr-row-sub">Mathematics + Chemistry or Physics</span></td>
          <td>6.5 / 6.5</td>
          <td>UCAS Interview Day</td>
          <td class="mcr-dash">— not published</td>
        </tr>
        <tr class="grp-mat">
          <td class="mcr-row-label">BSc Materials Science &amp; Eng.<span class="mcr-row-sub">3 yrs · Dept of Materials</span></td>
          <td>J500</td>
          <td>AAB<span class="mcr-row-sub">2 of Mathematics, Physics, Chemistry</span></td>
          <td>6.5 / 6.0</td>
          <td>Virtual Visit Day + interview</td>
          <td class="mcr-dash">— not published</td>
        </tr>
        <tr class="grp-mat">
          <td class="mcr-row-label">MEng Materials Science &amp; Eng.<span class="mcr-row-sub">4 yrs · Dept of Materials</span></td>
          <td>J501</td>
          <td>AAA<span class="mcr-row-sub">2 of Mathematics, Physics, Chemistry</span></td>
          <td>6.5 / 6.0</td>
          <td>Virtual Visit Day + interview</td>
          <td class="mcr-dash">— not published</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="info-box"><strong>Why there's no success-rate column filled in:</strong> Since at least 2020, Manchester has maintained a University-wide policy of refusing to release undergraduate application/offer/intake figures at individual-course level under FOI Section 43(2) (Commercial Interests), on the grounds that per-course figures would reveal "market sensitive information" to competitor universities. The only confirmed exceptions are Medicine and Dentistry, which fall outside this guide. For Chemistry, Chemical Engineering and Materials there simply isn't a published number to show — this reflects Manchester's standing policy, not a gap in research.</div>
  <div class="info-box"><strong>IELTS reading tip:</strong> the two numbers in the table are "overall / minimum per component." Chemical Engineering is the strictest — it requires 6.5 in every sub-skill, not just overall, while Chemistry and Materials only require 6.0 in each sub-skill alongside a 6.5 overall.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Which Programme Suits You?</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Find your best fit based on your interests and strengths</p>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">"I love atoms, molecules and chemical reactions for their own sake"</div><div class="decision-best">→ Chemistry (BSc/MChem)</div><div class="decision-also">Also consider: Chemical Engineering (applied, process-scale)</div></div>
    <div class="decision-card"><div class="decision-q">"I want to design industrial or pharmaceutical manufacturing processes"</div><div class="decision-best">→ Chemical Engineering</div><div class="decision-also">Also consider: Chemistry (if fundamentals-first)</div></div>
    <div class="decision-card"><div class="decision-q">"I'm fascinated by metals, polymers, ceramics or nanomaterials like graphene"</div><div class="decision-best">→ Materials Science &amp; Engineering</div><div class="decision-also">Also consider: Chemistry (materials chemistry option unit)</div></div>
    <div class="decision-card"><div class="decision-q">"I want a research career or PhD in the chemical sciences"</div><div class="decision-best">→ MChem Chemistry</div><div class="decision-also">Also consider: MEng Chemical Engineering</div></div>
    <div class="decision-card"><div class="decision-q">"I want professional accreditation and a fast route into industry"</div><div class="decision-best">→ BEng Chemical Engineering or BSc Materials</div><div class="decision-also">Also consider: the 4-year MEng/MChem if aiming for Chartered status</div></div>
    <div class="decision-card"><div class="decision-q">"I don't have Chemistry at A-level but do have Maths and Physics"</div><div class="decision-best">→ Materials Science &amp; Engineering</div><div class="decision-also">Also consider: Chemical Engineering (Maths + Physics also accepted)</div></div>
  </div>
  <div class="info-box"><strong>Important:</strong> Chemistry offers a common BSc/MChem pathway — you can transfer between the two up to Year 3, so applying for the MChem keeps both routes open. Chemical Engineering and Materials both offer a direct BEng/BSc route and a 4-year MEng route with the same first-year grade requirement in Chemical Engineering's case, so choose based on whether you want the extra specialisation year, not just entry difficulty.</div>
</div>

<!-- TAB 2 PROGRAMMES -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">6 programmes · Department of Chemistry · Department of Chemical Engineering · Department of Materials</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>

  <div class="prog-detail chem">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">BSc Chemistry</div><div class="prog-detail-meta">BSc (Hons) · 3 years · Department of Chemistry · UCAS: F100</div></div>
      <div class="ptags"><span class="ptag c">Chemistry</span><span class="ptag noint">Not Routinely Interviewed</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A three-year degree following a common core structure across the first two years, giving flexibility in the final year to specialise. Students share a pathway with the MChem and can transfer onto the four-year Master's route up to Year 3, subject to academic performance. Accredited by the Royal Society of Chemistry, partially fulfilling the academic requirements for Chartered Chemist (CChem).</div>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Organic, inorganic &amp; physical chemistry core</li><li>Analytical chemistry &amp; spectroscopy</li><li>Practical laboratory chemistry every year</li><li>Advanced Practical Training research project (Year 3)</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Analytical / research chemist</li><li>Biotechnology</li><li>Science communication</li><li>Finance, management, computing, IT</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + 1 other science/maths</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 / 6.0</div></div>
      <div><div class="pf-label">Department</div><div class="pf-val">Chemistry</div></div>
    </div>
    <div class="prog-star">★ "Other science/maths" means Biology, Physics, Mathematics or Further Mathematics. Applicants are not routinely interviewed — in the majority of cases, decisions are made on the application information alone, though some may be invited to an interview online or in person depending on qualifications held.</div>
  </div>

  <div class="prog-detail chem">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">MChem Chemistry</div><div class="prog-detail-meta">MChem · 4 years · Department of Chemistry · UCAS: F109</div></div>
      <div class="ptags"><span class="ptag c">Chemistry</span><span class="ptag noint">Not Routinely Interviewed</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">The four-year integrated Master's in Chemistry. The first two years mirror the BSc; the final year is an extended individual research project within one of the department's research groups. Fully accredited by the Royal Society of Chemistry, satisfying the academic requirements for Chartered Chemist (CChem) status for graduates with a first or second class honours degree.</div>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Core BSc curriculum in Years 1–2</li><li>Advanced synthesis, catalysis &amp; computational chemistry (Year 3)</li><li>Extended individual research project (Year 4)</li><li>Optional units in nanoscience, medicinal &amp; nuclear chemistry</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>PhD / postdoctoral research</li><li>Industrial R&amp;D chemist</li><li>Pharmaceutical &amp; medicinal chemistry</li><li>Patent law, consultancy</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">A*AA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + 1 other science/maths</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 / 6.0</div></div>
      <div><div class="pf-label">Department</div><div class="pf-val">Chemistry</div></div>
    </div>
    <div class="prog-star">★ If you miss the MChem grades but meet the BSc grades (AAA), you're automatically considered for the BSc — no need to reapply. It's possible to transfer between Manchester's chemistry degrees in Years 1–3, subject to satisfactory academic performance.</div>
  </div>

  <div class="prog-detail chemeng">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">BEng Chemical Engineering</div><div class="prog-detail-meta">BEng (Hons) · 3 years · Department of Chemical Engineering · UCAS: H800</div></div>
      <div class="ptags"><span class="ptag ce">Chemical Eng.</span><span class="ptag interview">UCAS Interview Day</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A three-year degree at the birthplace of chemical engineering as a discipline. Covers the design and management of processes that transform materials and energy at scale — from pharmaceuticals to sustainable energy. Accredited by the Institution of Chemical Engineers (IChemE). Teaching uses one of the largest pilot-scale laboratories of any UK university, in the £12m James Chadwick Building.</div>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Process fluid flow, heat transfer &amp; thermodynamics</li><li>Chemical reactor design &amp; process control</li><li>Multi-part design project across all three years</li><li>Process safety &amp; sustainable development</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Process / site engineer</li><li>Oil, gas &amp; petrochemicals</li><li>Pharmaceuticals &amp; FMCG</li><li>Energy generation &amp; waste treatment</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Mathematics + Chemistry or Physics</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 / 6.5</div></div>
      <div><div class="pf-label">Department</div><div class="pf-val">Chemical Engineering</div></div>
    </div>
    <div class="prog-star">★ UK-mainland applicants meeting the application criteria are invited to a UCAS Interview Day (online, November–April) — an academic interview plus a chance to meet staff and current students. Design teams here have won more IChemE Macnab-Lacey Prizes than any other university.</div>
  </div>

  <div class="prog-detail chemeng">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">MEng Chemical Engineering</div><div class="prog-detail-meta">MEng · 4 years · Department of Chemical Engineering · UCAS: H801</div></div>
      <div class="ptags"><span class="ptag ce">Chemical Eng.</span><span class="ptag interview">UCAS Interview Day</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">The four-year integrated Master's. Years 1–3 mirror the BEng; Year 4 adds specialisation in an advanced area of your choosing — energy, separations or modelling — plus a research project and dissertation. Also IChemE-accredited, and the standard route toward Chartered Engineer (CEng) status.</div>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Core BEng curriculum in Years 1–3</li><li>Specialisation: energy, bioengineering, catalysis or systems modelling</li><li>MEng dissertation &amp; poster presentation (Year 4)</li><li>Machine learning &amp; AI in chemical engineering (optional)</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Chartered chemical engineer (CEng route)</li><li>R&amp;D &amp; product design</li><li>Low-carbon technologies</li><li>Management consulting</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Mathematics + Chemistry or Physics</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 / 6.5</div></div>
      <div><div class="pf-label">Department</div><div class="pf-val">Chemical Engineering</div></div>
    </div>
    <div class="prog-star">★ Entry grades for the MEng and BEng are identical (AAA) — Manchester lets you enter the four-year route directly rather than reserving the MEng for higher grades, so choose based on whether you want the extra specialisation year, not entry difficulty.</div>
  </div>

  <div class="prog-detail mat">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">BSc Materials Science &amp; Engineering</div><div class="prog-detail-meta">BSc (Hons) · 3 years · Department of Materials · UCAS: J500</div></div>
      <div class="ptags"><span class="ptag m">Materials</span><span class="ptag interview">Virtual Visit + Interview</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A three-year degree covering the physical, chemical and mechanical properties of all solid materials — metals, ceramics, polymers, biomaterials and nanomaterials such as graphene. Part of Europe's largest and most diverse materials science activity. Accredited by the Institute of Materials, Minerals and Mining (IOM3), fully meeting the academic requirements for Incorporated Engineer (IEng) status.</div>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Structure of crystalline solids &amp; microstructures</li><li>Materials processing &amp; sustainability</li><li>Team Research Project (Year 3)</li><li>Options: biomaterials, nanomaterials, corrosion, textiles</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Materials scientist / engineer</li><li>Development scientist</li><li>Aerospace, automotive &amp; defence</li><li>Patent law, technical consultancy</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAB</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">2 of Maths, Physics, Chemistry</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 / 6.0</div></div>
      <div><div class="pf-label">Department</div><div class="pf-val">Materials</div></div>
    </div>
    <div class="prog-star">★ If not taking A-level Mathematics, Grade 7/A at GCSE Mathematics is required instead. Graduates have gone on to Rolls-Royce, Jaguar Land Rover, BP, Airbus and BAE Systems. Recent graduates' average salary six months after graduating exceeds the sector average.</div>
  </div>

  <div class="prog-detail mat">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">MEng Materials Science &amp; Engineering</div><div class="prog-detail-meta">MEng · 4 years · Department of Materials · UCAS: J501</div></div>
      <div class="ptags"><span class="ptag m">Materials</span><span class="ptag interview">Virtual Visit + Interview</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">The four-year integrated Master's. Years 1–3 mirror the BSc; Year 4 is built around eight research-level modules and a six-month individual research or industrial project. Fully accredited by IOM3 for Chartered Engineer (CEng) / Chartered Scientist (CSci) status — the strongest professional recognition of the two Materials routes.</div>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Core BSc curriculum in Years 1–3</li><li>Six-month individual research or industrial project (Year 4)</li><li>Advanced options: graphene, superalloys, corrosion for sustainability</li><li>Team Business Project</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Chartered materials engineer / scientist</li><li>PhD / advanced research</li><li>Advanced manufacturing &amp; R&amp;D leadership</li><li>Nanomaterials &amp; graphene technologies</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">A-Level Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">2 of Maths, Physics, Chemistry</div></div>
      <div><div class="pf-label">IELTS</div><div class="pf-val">6.5 / 6.0</div></div>
      <div><div class="pf-label">Department</div><div class="pf-val">Materials</div></div>
    </div>
    <div class="prog-star">★ The MEng requires one grade higher overall than the BSc (AAA vs AAB). If you apply for the MEng and don't quite meet the grades, you may still be considered for the BSc if places remain. Close ties to leading centres including the National Graphene Institute and the Henry Royce Institute.</div>
  </div>
</div>

<!-- TAB 3 ENTRY REQUIREMENTS -->
<div id="tab-requirements" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">A-level grades · Required subjects · IELTS · Admission tests · 2027 entry</p>
  <h2 class="section-title">Entry Requirements</h2>
  <div class="divider"></div>

  <div class="info-box"><strong>How to read this tab:</strong> figures below are the <em>standard</em> (non-contextual) A-level offer taken directly from each course's live 2027-entry page. Manchester also publishes separate contextual and UK refugee/care-experienced offers on every course page — this guide doesn't reproduce those, so check the official course page if either might apply to you.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Chemistry (Department of Chemistry)</h3>
  <div class="mcr-req-table-wrap">
    <table class="mcr-req-table">
      <thead><tr><th>Programme</th><th>A-Level</th><th>Required Subjects</th><th>IELTS</th><th>Interview?</th></tr></thead>
      <tbody>
        <tr class="grp-chem"><td class="mcr-row-label">BSc Chemistry (F100)</td><td>AAA</td><td>Chemistry + 1 of Biology, Physics, Maths, Further Maths</td><td>6.5 overall / 6.0 each</td><td>Not routine</td></tr>
        <tr class="grp-chem"><td class="mcr-row-label">MChem Chemistry (F109)</td><td>A*AA</td><td>Chemistry + 1 of Biology, Physics, Maths, Further Maths</td><td>6.5 overall / 6.0 each</td><td>Not routine</td></tr>
      </tbody>
    </table>
  </div>
  <div class="callout" style="border-color:var(--chem-color);margin-bottom:2rem;">GCSE requirement: grade 4/C in English Language, grade 6/B in Mathematics. Practical science element must be passed alongside the written A-level.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Chemical Engineering (Department of Chemical Engineering)</h3>
  <div class="mcr-req-table-wrap">
    <table class="mcr-req-table">
      <thead><tr><th>Programme</th><th>A-Level</th><th>Required Subjects</th><th>IELTS</th><th>Interview?</th></tr></thead>
      <tbody>
        <tr class="grp-chemeng"><td class="mcr-row-label">BEng Chemical Engineering (H800)</td><td>AAA</td><td>Mathematics + Chemistry or Physics</td><td>6.5 overall / 6.5 each</td><td>UCAS Interview Day</td></tr>
        <tr class="grp-chemeng"><td class="mcr-row-label">MEng Chemical Engineering (H801)</td><td>AAA</td><td>Mathematics + Chemistry or Physics</td><td>6.5 overall / 6.5 each</td><td>UCAS Interview Day</td></tr>
      </tbody>
    </table>
  </div>
  <div class="callout" style="border-color:var(--chemeng-color);margin-bottom:2rem;">GCSE requirement: grade 4/C in English Language and Mathematics. IELTS here is stricter than Chemistry or Materials — every sub-skill must clear 6.5, not 6.0.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Materials (Department of Materials)</h3>
  <div class="mcr-req-table-wrap">
    <table class="mcr-req-table">
      <thead><tr><th>Programme</th><th>A-Level</th><th>Required Subjects</th><th>IELTS</th><th>Interview?</th></tr></thead>
      <tbody>
        <tr class="grp-mat"><td class="mcr-row-label">BSc Materials Sci. &amp; Eng. (J500)</td><td>AAB</td><td>2 of Mathematics, Physics, Chemistry</td><td>6.5 overall / 6.0 each</td><td>Virtual Visit + interview</td></tr>
        <tr class="grp-mat"><td class="mcr-row-label">MEng Materials Sci. &amp; Eng. (J501)</td><td>AAA</td><td>2 of Mathematics, Physics, Chemistry</td><td>6.5 overall / 6.0 each</td><td>Virtual Visit + interview</td></tr>
      </tbody>
    </table>
  </div>
  <div class="callout" style="border-color:var(--mat-color);margin-bottom:2rem;">If Mathematics isn't one of your two chosen science/maths A-levels, Grade 7/A at GCSE Mathematics is required instead. GCSE requirement: grade 4/C in English Language, Mathematics and Science.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Interview &amp; Selection Formats</h3>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">Chemistry (BSc/MChem)</div><div class="decision-best">No routine interview</div><div class="decision-also">Decisions usually made on the UCAS application alone; some applicants may be invited to interview depending on qualifications held.</div></div>
    <div class="decision-card"><div class="decision-q">Chemical Engineering (BEng/MEng)</div><div class="decision-best">UCAS Interview Day</div><div class="decision-also">All UK-mainland applicants meeting the criteria are invited; runs online, November–April; academic interview + meet staff/students.</div></div>
    <div class="decision-card"><div class="decision-q">Materials (BSc/MEng)</div><div class="decision-best">Virtual Visit Day</div><div class="decision-also">Includes an informal interview with no specific preparation required; parents/guardians are welcome to attend.</div></div>
    <div class="decision-card"><div class="decision-q">International Baccalaureate equivalents</div><div class="decision-best">36–37 points</div><div class="decision-also">Chemistry needs 37 (7,6,6 HL); Chemical Engineering &amp; Materials MEng need 36 (6,6,6 HL); Materials BSc needs 35 (6,6,5 HL).</div></div>
  </div>
</div>

<!-- TAB 4 HOW TO APPLY -->
<div id="tab-apply" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · Interviews · Personal statement · Key dates · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">UCAS Application Process</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Step-by-step for 2027 entry · All six programmes share the January UCAS equal-consideration deadline</p>
  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">2026</div><div class="flow-body"><strong>Register on UCAS Hub</strong> — Create your account at ucas.com. You may apply to more than one Manchester course, but not normally more than one first-year course within the same department.</div></div>
      <div class="flow-row"><div class="flow-num">2026</div><div class="flow-body"><strong>Write your personal statement</strong> — One statement for all UCAS choices. Name specific topics, reactions, materials or processes that excite you and link them to your A-level subjects.</div></div>
      <div class="flow-row"><div class="flow-num">Jan 2027</div><div class="flow-body"><strong>Submit UCAS application</strong> — Equal consideration deadline. Include school-submitted predicted grades; non-UK schools without a predicted-grades policy should have this explained by the referee.</div></div>
      <div class="flow-row"><div class="flow-num">Nov 2026 – Mar/Apr 2027</div><div class="flow-body"><strong>Interviews where applicable</strong> — Chemical Engineering (UCAS Interview Day) and Materials (Virtual Visit Day) applicants are invited during this window. Chemistry applicants are not routinely interviewed.</div></div>
      <div class="flow-row"><div class="flow-num">Jan–Apr 2027</div><div class="flow-body"><strong>Decisions issued</strong> — Offers are conditional on final A-level grades and subjects specified in your offer letter.</div></div>
      <div class="flow-row"><div class="flow-num">Aug 2027</div><div class="flow-body"><strong>A-level results &amp; confirmation</strong> — Meet your conditional offer to secure your place. Grades from resits are considered but may need extra supporting information.</div></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Personal Statement Do's &amp; Don'ts</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">One statement for all UCAS choices · Interviewers (ChemEng/Materials) will read it before your interview</p>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">DO</div>
      <ul class="ddlist">
        <li>Name specific reactions, materials, or processes that excite you</li>
        <li>Show realistic understanding of what the course involves day-to-day</li>
        <li>Link your A-level subjects directly to the degree content</li>
        <li>Mention any relevant projects, reading, or lab experience</li>
        <li>Prepare for interview if applying to Chemical Engineering or Materials</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">DON'T</div>
      <ul class="ddlist">
        <li>Apply to more than one first-year course in the same department</li>
        <li>Open with generic sentences ("Since childhood I have loved science…")</li>
        <li>Assume Chemistry will interview you the way Chemical Engineering does</li>
        <li>Forget the GCSE Maths grade 6/B requirement for Chemistry</li>
        <li>Confuse the BSc and MEng/MChem grade requirements when self-predicting</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Common Application Mistakes</h3>
  <div>
    <div class="mistake-item"><div class="mw">Applying to more than one Chemistry course in the same first year</div><div class="mr">Pick one — internal transfer between BSc and MChem is possible up to Year 3</div></div>
    <div class="mistake-item"><div class="mw">Assuming Materials only needs Chemistry</div><div class="mr">It needs any 2 of Maths, Physics, Chemistry — check which two you hold</div></div>
    <div class="mistake-item"><div class="mw">Not preparing at all for the Chemical Engineering UCAS Interview Day</div><div class="mr">It's informal, but be ready to discuss your personal statement in depth</div></div>
    <div class="mistake-item"><div class="mw">Overlooking the Chemical Engineering IELTS sub-skill rule</div><div class="mr">Every sub-skill must be 6.5+ here, unlike Chemistry or Materials (6.0 each)</div></div>
    <div class="mistake-item"><div class="mw">Missing the GCSE Maths grade 7/A rule for Materials applicants without A-level Maths</div><div class="mr">Check this early if you're not taking A-level Mathematics</div></div>
    <div class="mistake-item"><div class="mw">Letting IELTS expire before the course start date</div><div class="mr">Valid 2 years only — plan your test date well ahead</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:2rem;">Application Timeline</h3>
  <div class="tl-track">
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">2026</div><div class="tl-lbl">UCAS Hub opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">2026</div><div class="tl-lbl">Write personal statement</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">Jan 2027</div><div class="tl-lbl">UCAS Deadline</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Nov–Apr</div><div class="tl-lbl">ChemEng / Materials interviews</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jan–Apr</div><div class="tl-lbl">Offers issued</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Aug 2027</div><div class="tl-lbl">Results — confirm place</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">BSc Chemistry</div><a href="https://www.manchester.ac.uk/study/undergraduate/courses/2027/00544/bsc-chemistry/" target="_blank">manchester.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">MChem Chemistry</div><a href="https://www.manchester.ac.uk/study/undergraduate/courses/2027/01449/mchem-chemistry/" target="_blank">manchester.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">BEng Chemical Engineering</div><a href="https://www.manchester.ac.uk/study/undergraduate/courses/2027/03340/beng-chemical-engineering/" target="_blank">manchester.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">MEng Chemical Engineering</div><a href="https://www.manchester.ac.uk/study/undergraduate/courses/2027/03848/meng-chemical-engineering/" target="_blank">manchester.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">BSc Materials Sci. &amp; Eng.</div><a href="https://www.manchester.ac.uk/study/undergraduate/courses/2027/09894/bsc-materials-science-and-engineering/" target="_blank">manchester.ac.uk/study/courses</a></div>
    <div class="res-card"><div class="res-card-label">MEng Materials Sci. &amp; Eng.</div><a href="https://www.manchester.ac.uk/study/undergraduate/courses/2027/09895/meng-materials-science-and-engineering/" target="_blank">manchester.ac.uk/study/courses</a></div>
  </div>
  <div class="info-box"><strong>All information current as of July 2026, sourced from live 2027-entry course pages.</strong> Always verify requirements on official Manchester course pages before submitting — offer grades, IELTS bands and interview formats can change year to year. Contextual and refugee/care-experienced offers are published on each official course page but are not reproduced in this guide.</div>
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
