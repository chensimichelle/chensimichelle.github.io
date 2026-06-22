---
layout: post
title: "UCL — Life Sciences & Medical Sciences Undergraduate Guide"
date: 2026-06-18
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
    --ls-color: #1a6e3c;
    --ls-light: #e8f5ee;
    --ls-mid: #a8d8bc;
    --ms-color: #8a1a2e;
    --ms-light: #faeaed;
    --ms-mid: #e8a8b4;
    --bio-color: #1a5fa8;
    --bio-light: #e8f0fb;
    --bio-mid: #b8d0f0;
    --pharm-color: #6b4a00;
    --pharm-light: #fdf3e0;
    --pharm-mid: #f0d090;
    --neuro-color: #5a3080;
    --neuro-light: #f0eaf8;
    --neuro-mid: #c8a8e8;
    --ucl-color: #002855;
    --ucl-light: #e6edf5;
    --ucl-mid: #b0c8e0;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #7a7a7a;
    --border: #e8e8e8;
    --bg: #ffffff;
    --bg-soft: #fafafa;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; color: var(--text-primary); background: var(--bg); line-height: 1.6; font-size: 15px; }

  /* ── Tab nav ── */
  .tab-nav { position: sticky; top: 0; z-index: 100; background: #fdf0fd; border-bottom: 2px solid #f0d0f0; box-shadow: 0 2px 12px rgba(204,0,204,0.06); overflow-x: auto; white-space: nowrap; scrollbar-width: none; }
  .tab-nav::-webkit-scrollbar { display: none; }
  .tab-nav-inner { display: inline-flex; gap: 0; padding: 0 1.5rem; min-width: 100%; }
  .tab-btn { font-family: 'DM Sans', sans-serif; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); background: none; border: none; border-bottom: 3px solid transparent; padding: 0.9rem 1.1rem; cursor: pointer; transition: color 0.2s, border-color 0.2s; white-space: nowrap; margin-bottom: -2px; }
  .tab-btn:hover { color: var(--blog-accent); }
  .tab-btn.active { color: var(--blog-accent); border-bottom-color: var(--blog-accent); }
  .tab-panel { display: none; padding: 2rem 1.5rem 3rem; max-width: 860px; margin: 0 auto; }
  .tab-panel.active { display: block; animation: fadeIn 0.25s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

  /* ── Typography ── */
  .section-title { font-family: 'DM Serif Display', serif; font-size: 1.65rem; font-weight: 400; color: var(--text-primary); margin-bottom: 0.35rem; }
  .divider { width: 3rem; height: 3px; background: var(--blog-accent); border-radius: 2px; margin: 0.6rem 0 2rem; }

  /* ── Overview intro box ── */
  .overview-intro { background: var(--blog-accent-light); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid var(--blog-accent-mid); }
  .overview-intro p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.75; }
  .overview-intro p + p { margin-top: 0.75rem; }

  /* ── Stat row ── */
  .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .stat-card { background: var(--ucl-light); border: 1px solid var(--ucl-mid); border-top: 3px solid var(--ucl-color); border-radius: 10px; padding: 1rem 1.25rem; text-align: center; }
  .stat-card-num { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--ucl-color); font-weight: 400; display: block; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }

  /* ── Programme cards (overview grid) ── */
  .prog-quartet { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .prog-card { border-radius: 12px; padding: 1.25rem; border: 1px solid var(--border); position: relative; overflow: hidden; }
  .prog-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-card.ls  { background:var(--ls-light);    } .prog-card.ls::before    { background:var(--ls-color);    }
  .prog-card.ms  { background:var(--ms-light);    } .prog-card.ms::before    { background:var(--ms-color);    }
  .prog-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .ls  .prog-card-label { color:var(--ls-color);   }
  .ms  .prog-card-label { color:var(--ms-color);   }
  .prog-card-name { font-family:'DM Serif Display',serif; font-size:1rem; color:var(--text-primary); margin-bottom:0.15rem; }
  .prog-card-meta { font-size:0.72rem; color:var(--text-muted); margin-bottom:0.75rem; }
  .prog-card-stats { display:grid; grid-template-columns:1fr 1fr; gap:0.35rem; }
  .prog-stat { background:white; border-radius:6px; padding:0.35rem 0.55rem; text-align:center; }
  .prog-stat-num { font-weight:700; font-size:0.9rem; }
  .ls  .prog-stat-num { color:var(--ls-color);   }
  .ms  .prog-stat-num { color:var(--ms-color);   }
  .prog-stat-label { font-size:0.6rem; color:var(--text-muted); }

  /* ── Info boxes ── */
  .info-box { background:var(--blog-accent-light); border-left:4px solid var(--blog-accent); border-radius:0 10px 10px 0; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.83rem; color:var(--text-secondary); line-height:1.65; }
  .info-box strong { color:var(--text-primary); }

  /* ── Programme detail cards ── */
  .prog-detail { border-radius:12px; border:1px solid var(--border); padding:1.4rem; margin-bottom:1.4rem; position:relative; overflow:hidden; }
  .prog-detail::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; }
  .prog-detail.bio   { background:var(--bio-light);   } .prog-detail.bio::before   { background:var(--bio-color);   }
  .prog-detail.bioms { background:var(--ms-light);    } .prog-detail.bioms::before  { background:var(--ms-color);    }
  .prog-detail.biol  { background:var(--ls-light);    } .prog-detail.biol::before   { background:var(--ls-color);    }
  .prog-detail.neuro { background:var(--neuro-light); } .prog-detail.neuro::before  { background:var(--neuro-color); }
  .prog-detail.pharm { background:var(--pharm-light); } .prog-detail.pharm::before  { background:var(--pharm-color); }
  .prog-detail.med   { background:#fff5f5;            } .prog-detail.med::before     { background:#8a1a2e;            }
  .prog-detail-hdr { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem; }
  .prog-detail-title { font-family:'DM Serif Display',serif; font-size:1.15rem; }
  .bio   .prog-detail-title { color:var(--bio-color);   }
  .bioms .prog-detail-title { color:var(--ms-color);    }
  .biol  .prog-detail-title { color:var(--ls-color);    }
  .neuro .prog-detail-title { color:var(--neuro-color); }
  .pharm .prog-detail-title { color:var(--pharm-color); }
  .med   .prog-detail-title { color:#8a1a2e;             }
  .prog-detail-meta { font-size:0.73rem; color:var(--text-muted); margin-top:0.15rem; }
  .ptags { display:flex; gap:0.4rem; flex-wrap:wrap; }
  .ptag  { font-size:0.67rem; font-weight:700; letter-spacing:0.06em; padding:0.18rem 0.55rem; border-radius:20px; color:white; }
  .ptag.high { background:#c0392b; } .ptag.mod { background:#e67e22; } .ptag.low { background:#2980b9; }
  .ptag.bio   { background:var(--bio-color);   }
  .ptag.bioms { background:var(--ms-color);    }
  .ptag.biol  { background:var(--ls-color);    }
  .ptag.neuro { background:var(--neuro-color); }
  .ptag.pharm { background:var(--pharm-color); }
  .ptag.med   { background:#8a1a2e;             }
  .prog-detail-body { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:0.85rem; }
  .sec-label { font-size:0.63rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem; }
  .prog-desc { font-size:0.8rem; color:var(--text-secondary); line-height:1.65; }
  .plist { list-style:none; }
  .plist li { font-size:0.78rem; color:var(--text-secondary); padding:0.22rem 0 0.22rem 1rem; position:relative; line-height:1.4; border-bottom:1px solid rgba(0,0,0,0.05); }
  .plist li:last-child { border-bottom:none; }
  .plist li::before { content:'›'; position:absolute; left:0; font-weight:700; }
  .bio   .plist li::before { color:var(--bio-color);   }
  .bioms .plist li::before { color:var(--ms-color);    }
  .biol  .plist li::before { color:var(--ls-color);    }
  .neuro .plist li::before { color:var(--neuro-color); }
  .pharm .plist li::before { color:var(--pharm-color); }
  .med   .plist li::before { color:#8a1a2e;             }
  .prog-detail-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:0.65rem; padding-top:0.7rem; border-top:1px solid rgba(0,0,0,0.08); }
  .pf-label { font-size:0.62rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.12rem; }
  .bio   .pf-label { color:var(--bio-color);   }
  .bioms .pf-label { color:var(--ms-color);    }
  .biol  .pf-label { color:var(--ls-color);    }
  .neuro .pf-label { color:var(--neuro-color); }
  .pharm .pf-label { color:var(--pharm-color); }
  .med   .pf-label { color:#8a1a2e;             }
  .pf-val { font-size:0.78rem; color:var(--text-primary); font-weight:600; }
  .prog-star { margin-top:0.7rem; font-size:0.75rem; font-style:italic; padding:0.45rem 0.7rem; background:rgba(255,255,255,0.7); border-radius:0 6px 6px 0; color:var(--text-muted); line-height:1.5; }
  .bio   .prog-star { border-left:2px solid var(--bio-color);   }
  .bioms .prog-star { border-left:2px solid var(--ms-color);    }
  .biol  .prog-star { border-left:2px solid var(--ls-color);    }
  .neuro .prog-star { border-left:2px solid var(--neuro-color); }
  .pharm .prog-star { border-left:2px solid var(--pharm-color); }
  .med   .prog-star { border-left:2px solid #8a1a2e;             }

  /* ── Chart sections ── */
  .chart-section { background:var(--bg-soft); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.5rem; margin-bottom:1.75rem; }
  .chart-lbl { font-size:0.63rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--ucl-color); margin-bottom:0.25rem; }
  .chart-title { font-family:'DM Serif Display',serif; font-size:1.05rem; font-weight:400; color:var(--text-primary); margin-bottom:0.18rem; }
  .chart-sub { font-size:0.77rem; font-style:italic; color:var(--text-muted); margin-bottom:0.9rem; }
  .chart-insight { margin-top:0.8rem; font-size:0.79rem; color:var(--text-secondary); background:var(--ucl-light); border-left:3px solid var(--ucl-color); padding:0.5rem 0.8rem; border-radius:0 6px 6px 0; line-height:1.55; }
  .callout { font-size:0.77rem; color:var(--text-secondary); background:white; border:1px solid var(--border); border-left:3px solid; border-radius:0 7px 7px 0; padding:0.45rem 0.7rem; line-height:1.5; }

  /* ── Chinese data table ── */
  .cn-table-wrap { overflow-x:auto; margin-bottom:1.5rem; }
  .cn-table { width:100%; border-collapse:collapse; font-size:0.81rem; }
  .cn-table th { padding:0.6rem 0.85rem; text-align:left; font-size:0.7rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; border-bottom:2px solid var(--border); background:var(--ucl-light); color:var(--ucl-color); }
  .cn-table td { padding:0.6rem 0.85rem; border-bottom:1px solid var(--border); color:var(--text-secondary); vertical-align:top; font-size:0.79rem; }
  .cn-table tr:nth-child(even) td { background:var(--bg-soft); }
  .cn-table tr:last-child td { border-bottom:none; }
  .cn-table .row-label { font-weight:600; color:var(--text-primary); }
  .cn-table .pending { color:#b0b0b0; font-style:italic; }
  .cn-note { background:#fffbea; border:1px solid #f0d800; border-left:4px solid #e0b800; border-radius:0 8px 8px 0; padding:0.85rem 1.1rem; font-size:0.8rem; color:#5a4a00; line-height:1.6; margin-bottom:1.5rem; }
  .cn-note strong { color:#3a2a00; }

  /* ── Apply tab ── */
  .flow-section { background:var(--bg-soft); border-radius:12px; padding:1.5rem; margin-bottom:2rem; border:1px solid var(--border); }
  .flow-title { font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.1rem; }
  .flow-steps { display:flex; flex-direction:column; gap:0.55rem; }
  .flow-row { display:grid; grid-template-columns:100px 1fr; gap:1rem; align-items:start; }
  .flow-num { color:white; font-weight:700; font-size:0.73rem; border-radius:6px; padding:0.32rem 0.55rem; text-align:center; white-space:normal; word-break:break-word; line-height:1.3; background:var(--ucl-color); }
  .flow-body { background:white; border:1px solid var(--border); border-left:3px solid var(--ucl-color); border-radius:7px; padding:0.5rem 0.85rem; font-size:0.81rem; color:var(--text-secondary); line-height:1.5; }
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

  /* ── Decision grid ── */
  .decision-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:2rem; }
  .decision-card { background:var(--bg-soft); border:1px solid var(--border); border-left:3px solid var(--ucl-color); border-radius:0 8px 8px 0; padding:0.85rem 1rem; }
  .decision-q { font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-bottom:0.3rem; line-height:1.4; }
  .decision-best { font-weight:700; font-size:0.85rem; color:var(--ucl-color); margin-bottom:0.12rem; }
  .decision-also { font-size:0.73rem; color:var(--text-muted); }

  /* ── Responsive ── */
  @media (max-width:680px) {
    .stat-row,.prog-quartet,.decision-grid,.do-dont { grid-template-columns:1fr; }
    .prog-detail-body,.prog-detail-footer { grid-template-columns:1fr; }
    .flow-row { grid-template-columns:80px 1fr; }
  }
</style>

<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview',this)">Overview</button>
    <button class="tab-btn" onclick="showTab('programmes',this)">Programmes</button>
    <button class="tab-btn" onclick="showTab('admissions',this)">Admissions Data</button>
    <button class="tab-btn" onclick="showTab('chinese',this)">Chinese Applicants</button>
    <button class="tab-btn" onclick="showTab('apply',this)">How to Apply</button>
  </div>
</nav>

<!-- ═══════════════════════════════════════════════════════
     TAB 1 · OVERVIEW
═══════════════════════════════════════════════════════ -->
<div id="tab-overview" class="tab-panel active" style="display:block">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UK · Life Sciences · Medical Sciences · A-Level Applicant Guide · 2026–27 Entry</p>
  <h2 class="section-title">University College London</h2>
  <div class="divider"></div>

  <div class="overview-intro">
    <p>This guide covers <strong>12 undergraduate programmes</strong> across UCL's <strong>Faculty of Life Sciences</strong> and <strong>Faculty of Medical Sciences</strong> — from Biomedical Sciences and Biological Sciences to the MBBS Medical School programme. UCL is ranked <strong>#9 in the world (QS 2026)</strong> and is a G5 university. Written for students applying with <strong>A-levels</strong> from international schools for <strong>2026–27 entry</strong>.</p>
    <p>Key facts: No specialist admissions test is required for most life science programmes (unlike Cambridge). UCL Medical School (MBBS) requires the <strong>UCAT</strong> and is among the most selective courses in the UK (3.3 apps per offer in 2025-26). All programmes share the <strong>15 January UCAS deadline</strong> and require <strong>IELTS 6.5–7.5</strong> depending on programme. The Faculty of Life Sciences saw a significant surge in offer rates in 2025-26, driven by two factors: completion of the UCL East Campus increasing physical capacity, and a deliberate financial strategy to grow enrolment revenue. Source: <a href="https://www.ucl.ac.uk/prospective-students/undergraduate/sites/prospective_students_undergraduate/files/undergraduate_application_data_2025-26.pdf" target="_blank" style="color:var(--blog-accent);">UCL UG Admissions Data 2025-26 (official PDF)</a>.</p>
  </div>

  <div class="stat-row">
    <div class="stat-card"><span class="stat-card-num">#9</span><span class="stat-card-label">QS World Rankings 2026</span></div>
    <div class="stat-card"><span class="stat-card-num">12</span><span class="stat-card-label">Programmes in this guide</span></div>
    <div class="stat-card"><span class="stat-card-num">G5</span><span class="stat-card-label">Elite UK university group</span></div>
    <div class="stat-card"><span class="stat-card-num">15 Jan</span><span class="stat-card-label">UCAS deadline (all programmes)</span></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">The 2 Faculties at a Glance</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Official UCL data · 2025–26 entry cycle</p>

  <div class="prog-quartet">
    <div class="prog-card ls">
      <div class="prog-card-label">Faculty of Life Sciences</div>
      <div class="prog-card-name">7 programmes</div>
      <div class="prog-card-meta">Biochemistry BSc · Biological Sciences BSc/MSci · Biomedical Sciences BSc · Human Sciences BSc · Neuroscience BSc · Pharmacology BSc · Pharmacy MPharm</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">7,754</div><div class="prog-stat-label">Applications 2025-26</div></div>
        <div class="prog-stat"><div class="prog-stat-num">41.2%</div><div class="prog-stat-label">Overall offer rate</div></div>
        <div class="prog-stat"><div class="prog-stat-num">820</div><div class="prog-stat-label">Places 2025-26</div></div>
        <div class="prog-stat"><div class="prog-stat-num">A*AA–AAA</div><div class="prog-stat-label">Typical offer range</div></div>
      </div>
    </div>
    <div class="prog-card ms">
      <div class="prog-card-label">Faculty of Medical Sciences</div>
      <div class="prog-card-name">5 programmes</div>
      <div class="prog-card-meta">Applied Medical Sciences BSc · Cancer Biomedicine BSc · Infection &amp; Immunity BSc · Medical Innovation &amp; Enterprise BSc · Medicine MBBS · Nutrition &amp; Medical Sciences BSc · Sport &amp; Exercise Medical Sciences BSc</div>
      <div class="prog-card-stats">
        <div class="prog-stat"><div class="prog-stat-num">4,036</div><div class="prog-stat-label">Applications 2025-26</div></div>
        <div class="prog-stat"><div class="prog-stat-num">52.5%</div><div class="prog-stat-label">Overall offer rate</div></div>
        <div class="prog-stat"><div class="prog-stat-num">624</div><div class="prog-stat-label">Places 2025-26</div></div>
        <div class="prog-stat"><div class="prog-stat-num">AAA–A*AA</div><div class="prog-stat-label">Typical offer range</div></div>
      </div>
    </div>
  </div>

  <div class="info-box"><strong>2025-26 was an exceptional year:</strong> UCL opened its East Campus and deliberately increased offers across almost all faculties. The Faculty of Life Sciences offer rate jumped from 32% (2024-25) to 41% (2025-26); Medical Sciences from 37% to 52%. These figures may not persist — treat 2024-25 as the more typical baseline for planning purposes.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Which Programme Suits You?</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Find your best fit based on your interests and strengths</p>
  <div class="decision-grid">
    <div class="decision-card"><div class="decision-q">"I want to study the molecular basis of disease and human biology"</div><div class="decision-best">→ Biomedical Sciences BSc</div><div class="decision-also">Also consider: Biochemistry BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want to become a doctor in the UK"</div><div class="decision-best">→ Medicine MBBS</div><div class="decision-also">Note: requires UCAT; extremely competitive for international applicants</div></div>
    <div class="decision-card"><div class="decision-q">"I am fascinated by genetics, ecology and the diversity of life"</div><div class="decision-best">→ Biological Sciences BSc/MSci</div><div class="decision-also">Also consider: Human Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want to work in drug discovery and pharmaceutical R&amp;D"</div><div class="decision-best">→ Pharmacology BSc</div><div class="decision-also">Also consider: Pharmacy MPharm</div></div>
    <div class="decision-card"><div class="decision-q">"I want to understand how the brain works — from molecules to behaviour"</div><div class="decision-best">→ Neuroscience BSc</div><div class="decision-also">Also consider: Biomedical Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want to pursue cancer or immunology research"</div><div class="decision-best">→ Cancer Biomedicine BSc or Infection &amp; Immunity BSc</div><div class="decision-also">Also consider: Biomedical Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want a professional pharmacy qualification"</div><div class="decision-best">→ Pharmacy MPharm</div><div class="decision-also">Also consider: Pharmacology BSc (research route)</div></div>
    <div class="decision-card"><div class="decision-q">"I'm interested in the intersection of biology, anthropology and social science"</div><div class="decision-best">→ Human Sciences BSc</div><div class="decision-also">Also consider: Biological Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want to work in health technology, startups or medical devices"</div><div class="decision-best">→ Medical Innovation &amp; Enterprise BSc</div><div class="decision-also">Also consider: Applied Medical Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I'm interested in food science, public health and human nutrition"</div><div class="decision-best">→ Nutrition &amp; Medical Sciences BSc</div><div class="decision-also">Also consider: Applied Medical Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want to work in sports medicine, physiotherapy or exercise science"</div><div class="decision-best">→ Sport &amp; Exercise Medical Sciences BSc</div><div class="decision-also">Also consider: Applied Medical Sciences BSc</div></div>
    <div class="decision-card"><div class="decision-q">"I want a broad medical sciences foundation with high offer rates"</div><div class="decision-best">→ Applied Medical Sciences BSc</div><div class="decision-also">Also consider: Nutrition &amp; Medical Sciences BSc</div></div>
  </div>

  <div class="info-box"><strong>Note on Medicine MBBS:</strong> The vast majority of MBBS places go to UK-domiciled applicants. With only 28 Chinese applications and fewer than 5 offers in 2024-25, it is not a realistic target for most international applicants. Applied Medical Sciences BSc, Cancer Biomedicine BSc, and Infection &amp; Immunity BSc are far more accessible Medical Sciences routes for international students.</div>
</div>

<!-- ═══════════════════════════════════════════════════════
     TAB 2 · PROGRAMMES
═══════════════════════════════════════════════════════ -->
<div id="tab-programmes" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">12 programmes · Faculty of Life Sciences · Faculty of Medical Sciences</p>
  <h2 class="section-title">Programme Introductions</h2>
  <div class="divider"></div>

  <!-- LIFE SCIENCES -->
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--ls-color);margin-bottom:1rem;border-left:4px solid var(--ls-color);padding-left:0.75rem;">Faculty of Life Sciences</h3>

  <div class="prog-detail bio">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biochemistry and Biotechnology</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Explores the chemical processes underpinning life — from protein structure and enzyme kinetics to gene expression and biotechnological applications. Strong laboratory and research skills emphasis. 2025-26: 1,027 applications, 541 offers, 130 places. Offer rate: 52.7%.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Protein biochemistry &amp; structural biology</li><li>Molecular genetics &amp; gene regulation</li><li>Enzymology &amp; metabolic pathways</li><li>Biotechnology &amp; industrial applications</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Pharmaceutical / biotech research</li><li>Clinical biochemist</li><li>Regulatory affairs scientist</li><li>PhD / postdoctoral research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + Biology or Maths</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">52.7% (541/1027)</div></div>
    </div>
    <div class="prog-star">★ Offer rate improved notably from 37.2% (2024-25) to 52.7% (2025-26). One of the more accessible life sciences routes at UCL. A strong route into pharma or academic research.</div>
  </div>

  <div class="prog-detail biol">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biological Sciences</div><div class="prog-detail-meta">BSc / MSci · 3–4 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A broad programme covering the full range of biological disciplines — genetics, cell biology, ecology, evolution, and physiology. The MSci variant includes a substantial research project. 2025-26: 1,305 applications, 630 offers, 131 places. Offer rate: 48.3%.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Cell biology &amp; genetics</li><li>Ecology &amp; evolutionary biology</li><li>Physiology &amp; animal behaviour</li><li>Research methods &amp; bioinformatics</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Research scientist (academia / industry)</li><li>Conservation biologist</li><li>Science communication</li><li>Graduate medicine / PhD</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology + one of Chemistry/Maths/Physics</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">48.3% (630/1305)</div></div>
    </div>
    <div class="prog-star">★ Up from 35.7% in 2024-25. The MSci option is recommended for students aiming for research careers or graduate medicine — it provides an integrated research year.</div>
  </div>

  <div class="prog-detail bioms">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Biomedical Sciences</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">One of UCL's most popular science degrees. Focuses on understanding human disease mechanisms at the molecular and cellular level — bridging biology, chemistry, and medicine. 2025-26: 1,647 applications, 726 offers, 160 places. Offer rate: 44.1%. The highest-volume Life Sciences programme by applications.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Human physiology &amp; pathology</li><li>Immunology &amp; infectious disease</li><li>Molecular cell biology</li><li>Research project (final year)</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Biomedical scientist (NHS)</li><li>Pharmaceutical research</li><li>Clinical trials coordinator</li><li>Graduate medicine / PhD</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAA–A*AA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology + Chemistry</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">44.1% (726/1647)</div></div>
    </div>
    <div class="prog-star">★ Most applied-to Life Sciences programme (1,647 apps in 2025-26). Up from 28.5% offer rate in 2024-25, though entry remains competitive. A popular gateway to graduate medicine in the UK.</div>
  </div>

  <div class="prog-detail biol">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Human Sciences</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag low">Less Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A unique interdisciplinary programme examining human biological and social diversity — combining physical anthropology, genetics, evolutionary biology, and social science. UCL is one of very few UK universities offering this subject. 2025-26: 251 applications, 206 offers, 50 places.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Human evolution &amp; genetics</li><li>Physical anthropology</li><li>Population biology</li><li>Culture, society &amp; health</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Public health researcher</li><li>Evolutionary medicine</li><li>Anthropology &amp; museum sector</li><li>PhD / academic research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">ABB–AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology recommended; flexible</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">82.1% (206/251)</div></div>
    </div>
    <div class="prog-star">★ Very high offer rate (82%) — one of the least competitive STEM programmes at UCL. Excellent for students who want a science degree with genuine interdisciplinary breadth. Small cohort means close teaching.</div>
  </div>

  <div class="prog-detail neuro">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Neuroscience</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Investigates the structure and function of the nervous system from molecules to behaviour. UCL is a world-leading neuroscience centre (home of the Sainsbury Wellcome Centre and the Francis Crick Institute nearby). 2025-26: 713 applications, 351 offers, 99 places. Offer rate: 49.2%.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Cellular &amp; molecular neuroscience</li><li>Neuroanatomy &amp; neurophysiology</li><li>Cognitive neuroscience &amp; behaviour</li><li>Computational approaches</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Neuroscience researcher (academic/industry)</li><li>Clinical neurologist (graduate medicine)</li><li>Pharmaceutical CNS research</li><li>Science communication / policy</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology + Chemistry or Maths/Physics</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">49.2% (351/713)</div></div>
    </div>
    <div class="prog-star">★ Improved from 44.6% in 2024-25. UCL's neuroscience research environment is among the best globally — a strong choice for students aiming for research careers. Note that Human Neuroscience (Faculty of Brain Sciences) is a separate programme.</div>
  </div>

  <div class="prog-detail pharm">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Pharmacology</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Studies how drugs interact with biological systems — from receptor pharmacology and drug design to clinical therapeutics. More research-focused than the MPharm. 2025-26: 588 applications, 202 offers, 50 places. Offer rate: 34.4%.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Drug receptors &amp; signalling</li><li>Drug development &amp; toxicology</li><li>Clinical pharmacology</li><li>Research methods &amp; statistics</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Drug discovery researcher</li><li>Regulatory scientist (MHRA / EMA)</li><li>Clinical research associate</li><li>PhD / graduate medicine</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + Biology</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">34.4% (202/588)</div></div>
    </div>
    <div class="prog-star">★ Despite the overall UCL offer rate increase, Pharmacology actually became more competitive in 2025-26 (down from 27.0% in 2024-25 — wait, up from 27% to 34%). BSc Pharmacology and MPharm (School of Pharmacy) have very different career destinations — confirm which fits your goals.</div>
  </div>

  <div class="prog-detail pharm">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">School of Pharmacy (MPharm)</div><div class="prog-detail-meta">MPharm · 4 years · Faculty of Life Sciences</div></div>
      <div class="ptags"><span class="ptag high">High Competition</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A professional, accredited pharmacy degree leading to registration as a pharmacist. One of the UK's most competitive pharmacy schools. 2025-26: 2,223 applications, 540 offers, 200 places. Offer rate: 24.3% — the most competitive Life Sciences programme at UCL.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Pharmaceutics &amp; drug delivery</li><li>Clinical pharmacy practice</li><li>Medicinal chemistry</li><li>Pharmacy law &amp; ethics</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Community / hospital pharmacist</li><li>Industrial pharmacist (QA/QC)</li><li>Regulatory affairs (MHRA)</li><li>Clinical trials &amp; drug development</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAB–AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry; Biology highly recommended</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">24.3% (540/2223)</div></div>
    </div>
    <div class="prog-star">★ Highest application volume of any Life Sciences programme (2,223 in 2025-26) and lowest offer rate (24.3%). A 4-year integrated Masters — graduates can register with the General Pharmaceutical Council immediately. International students should verify GPhC registration eligibility in their home country.</div>
  </div>

  <!-- MEDICAL SCIENCES -->
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--ms-color);margin:2rem 0 1rem;border-left:4px solid var(--ms-color);padding-left:0.75rem;">Faculty of Medical Sciences</h3>

  <div class="prog-detail med">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">UCL Medical School (MBBS)</div><div class="prog-detail-meta">MBBS · 6 years (incl. intercalated BSc) · Faculty of Medical Sciences</div></div>
      <div class="ptags"><span class="ptag high">Extremely Competitive</span><span class="ptag med" style="background:#8a1a2e;">UCAT Required</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">One of the UK's most prestigious medical schools, training doctors through a research-integrated curriculum. Includes a mandatory intercalated BSc year (Year 3). 2025-26: 2,092 applications, 628 offers, 337 places. Offer rate: 30.0%. Strong emphasis on scientific research and patient-centred care.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Pre-clinical sciences (Years 1–2)</li><li>Intercalated BSc in chosen subject (Year 3)</li><li>Clinical rotations in London hospitals (Years 4–6)</li><li>Specialisation &amp; prescribing skills</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Medical doctor (any specialty)</li><li>Academic medicine / research</li><li>Global health</li><li>Medical education</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">A*AA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Chemistry + Biology (both required)</div></div>
      <div><div class="pf-label">2025-26 Offer Rate</div><div class="pf-val">30.0% (628/2092)</div></div>
    </div>
    <div class="prog-star">★ UCAT is required — register at ucat.ac.uk; sitting window July–October. International applicants: the vast majority of MBBS places are reserved for home (UK) students. International applicants should check the specific overseas intake cap before applying. The intercalated BSc is compulsory and a distinctive feature.</div>
  </div>

  <div class="prog-detail bioms">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Applied Medical Sciences</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Medical Sciences · UCAS: B990</div></div>
      <div class="ptags"><span class="ptag low">Less Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">A broad, clinically oriented science degree examining how biomedical knowledge is applied in healthcare settings — covering physiology, pharmacology, diagnostics and health policy. 2024-25: 579 applications, 447 offers. Offer rate: 77.2% — one of the most accessible Medical Sciences routes at UCL.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Applied physiology &amp; anatomy</li><li>Pharmacology &amp; therapeutics</li><li>Diagnostics &amp; clinical measurement</li><li>Health systems &amp; policy</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Healthcare science (NHS)</li><li>Clinical research associate</li><li>Graduate medicine entry</li><li>Pharmaceutical / diagnostics industry</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">ABB–AAB</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology + Chemistry recommended</div></div>
      <div><div class="pf-label">2024-25 Offer Rate</div><div class="pf-val">77.2% (447/579)</div></div>
    </div>
    <div class="prog-star">★ Chinese offer rate was 92.7% (151 apps / 140 offers) in 2024-25 — the highest of any Medical Sciences programme for Chinese applicants. A very accessible route with strong clinical relevance.</div>
  </div>

  <div class="prog-detail med">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Medical Innovation and Enterprise</div><div class="prog-detail-meta">BSc / MSci · 3–4 years · Faculty of Medical Sciences · UCAS: B991</div></div>
      <div class="ptags"><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">An interdisciplinary degree at the intersection of biomedical science, engineering thinking and business — preparing students to design, develop and commercialise healthcare innovations. 2024-25: 104 applications, 78 offers. Offer rate: 75.0%. One of UCL's newer, smaller cohort programmes.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Biomedical science fundamentals</li><li>Design thinking &amp; innovation methods</li><li>Healthcare entrepreneurship &amp; IP</li><li>Regulatory affairs &amp; market access</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Health technology entrepreneur</li><li>Medical devices / digital health industry</li><li>Healthcare consulting</li><li>Clinical innovation roles (NHS)</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAB–AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology or Chemistry; Maths useful</div></div>
      <div><div class="pf-label">2024-25 Offer Rate</div><div class="pf-val">75.0% (78/104)</div></div>
    </div>
    <div class="prog-star">★ Chinese offer rate 57.7% (26 apps / 15 offers) in 2024-25. Small cohort with a distinctive entrepreneurship focus — ideal for students interested in medtech and health innovation rather than pure science research. The MSci variant adds an extended project or industry placement.</div>
  </div>

  <div class="prog-detail bioms">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Nutrition and Medical Sciences</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Medical Sciences · UCAS: B401</div></div>
      <div class="ptags"><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Examines the relationship between nutrition, metabolism and health — covering biochemistry of nutrients, clinical dietetics, public health nutrition and food policy. 2024-25: 135 applications, 71 offers. Offer rate: 52.6%. A niche but growing area given obesity, chronic disease and global nutrition challenges.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Nutritional biochemistry &amp; metabolism</li><li>Clinical nutrition &amp; dietetics</li><li>Epidemiology &amp; public health</li><li>Food science &amp; policy</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Dietitian / clinical nutritionist</li><li>Public health nutritionist</li><li>Food industry R&amp;D</li><li>Academic nutrition research</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAB–AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology + Chemistry</div></div>
      <div><div class="pf-label">2024-25 Offer Rate</div><div class="pf-val">52.6% (71/135)</div></div>
    </div>
    <div class="prog-star">★ Chinese offer rate 61.3% (31 apps / 19 offers) in 2024-25 — slightly above the overall offer rate, suggesting no systematic disadvantage for Chinese applicants. A good fit for students interested in the science behind food and metabolic health.</div>
  </div>

  <div class="prog-detail med">
    <div class="prog-detail-hdr">
      <div><div class="prog-detail-title">Sport and Exercise Medical Sciences</div><div class="prog-detail-meta">BSc · 3 years · Faculty of Medical Sciences · UCAS: B621</div></div>
      <div class="ptags"><span class="ptag mod">Moderately Competitive</span></div>
    </div>
    <div class="prog-detail-body">
      <div>
        <div class="sec-label">What is it?</div>
        <p class="prog-desc">Applies medical and biological sciences to human movement, exercise physiology and sports medicine — from elite athletic performance to clinical rehabilitation. 2024-25: 169 applications, 77 offers. Offer rate: 45.6%. Combines laboratory science with practical applied settings.</p>
        <div class="sec-label" style="margin-top:0.75rem;">What you'll study</div>
        <ul class="plist"><li>Exercise physiology &amp; biomechanics</li><li>Sports medicine &amp; injury management</li><li>Strength, conditioning &amp; performance</li><li>Rehabilitation science</li></ul>
      </div>
      <div>
        <div class="sec-label">Career paths</div>
        <ul class="plist"><li>Sports scientist / performance analyst</li><li>Physiotherapist (with postgraduate training)</li><li>Clinical exercise physiologist</li><li>Sports medicine physician (with graduate entry)</li></ul>
      </div>
    </div>
    <div class="prog-detail-footer">
      <div><div class="pf-label">Typical Offer</div><div class="pf-val">AAB–AAA</div></div>
      <div><div class="pf-label">Must Include</div><div class="pf-val">Biology; PE / Sports Science accepted</div></div>
      <div><div class="pf-label">2024-25 Offer Rate</div><div class="pf-val">45.6% (77/169)</div></div>
    </div>
    <div class="prog-star">★ Chinese offer rate 72.0% (25 apps / 18 offers) in 2024-25 — well above the overall rate, suggesting Chinese applicants are competitive here. Note: becoming a physiotherapist or sports medicine physician in the UK typically requires additional postgraduate training after this degree.</div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     TAB 3 · ADMISSIONS DATA
═══════════════════════════════════════════════════════ -->
<div id="tab-admissions" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Applications · Offer rates · 2024-25 and 2025-26 · UCL official data</p>
  <h2 class="section-title">Admissions Data</h2>
  <div class="divider"></div>

  <!-- Year-on-year offer rate chart -->
  <div class="chart-section">
    <div class="chart-lbl">Offer Rate by Programme · 2024-25 vs 2025-26</div>
    <h3 class="chart-title">How competitive is each programme?</h3>
    <p class="chart-sub">Offer rate = offers made ÷ applications received · Source: UCL official UG admissions PDFs</p>
    <canvas id="chart-offerrates" height="200"></canvas>
    <div class="chart-insight">UCL saw a broad increase in offer rates in 2025-26, driven by East Campus expansion and a financial strategy to grow enrolment — offers rose by 12,443 university-wide while places grew more modestly, creating the over-offering problem described below. Human Sciences BSc and Applied Medical Sciences BSc remain the most accessible entry points in their respective faculties. Pharmacy MPharm and Medicine MBBS remain the most competitive. Sources: <a href="https://www.ucl.ac.uk/prospective-students/undergraduate/sites/prospective_students_undergraduate/files/undergraduate_application_data_2025-26.pdf" target="_blank" style="color:var(--ucl-color);">UCL UG Admissions Data 2025-26</a> · <a href="https://www.ucl.ac.uk/prospective-students/undergraduate/sites/prospective_students_undergraduate/files/ug_apps_per_place_2024-25.pdf" target="_blank" style="color:var(--ucl-color);">UCL UG Admissions Data 2024-25</a>.</div>
  </div>

  <!-- Application volume chart -->
  <div class="chart-section">
    <div class="chart-lbl">Application Volume · 2024-25 vs 2025-26</div>
    <h3 class="chart-title">Who received the most applications?</h3>
    <p class="chart-sub">Stacked bars show total applications per programme across both cycles</p>
    <canvas id="chart-appvol" height="160"></canvas>
    <div class="chart-insight">Biomedical Sciences and UCL Medical School dominate application volume. School of Pharmacy received the highest applications in Life Sciences (2,223 in 2025-26) with the lowest offer rate — the most oversubscribed Life Sciences course.</div>
  </div>

  <!-- Full data table -->
  <div class="chart-section">
    <div class="chart-lbl">Full Data Table · 2024-25 and 2025-26</div>
    <h3 class="chart-title">Applications, Offers, Places and Offers per Place</h3>
    <p class="chart-sub">Source: UCL UG Admissions Statistics PDFs (official publications) · Offers/place = offers made ÷ enrolled places · higher = more over-offering</p>
    <div style="overflow-x:auto;">
      <table class="cn-table" style="margin-top:0.5rem;">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Places 24-25</th>
            <th>Places 25-26</th>
            <th>Places change</th>
            <th>Offers/Place 24-25</th>
            <th>Offers/Place 25-26</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colspan="7" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--ls-color);padding:0.5rem 0.85rem;background:var(--ls-light);">Faculty of Life Sciences</td></tr>
          <tr><td class="row-label">Biochemistry &amp; Biotechnology</td><td>108</td><td>130</td><td style="color:#27ae60;font-weight:700;">+22</td><td>3.5</td><td>4.2</td><td style="color:#c0392b;">+0.7 ↑</td></tr>
          <tr><td class="row-label">Biological Sciences BSc/MSci</td><td>103</td><td>131</td><td style="color:#27ae60;font-weight:700;">+28</td><td>4.0</td><td>4.8</td><td style="color:#c0392b;">+0.8 ↑</td></tr>
          <tr><td class="row-label">Biomedical Sciences BSc</td><td>134</td><td>160</td><td style="color:#27ae60;font-weight:700;">+26</td><td>4.1</td><td>4.5</td><td style="color:#c0392b;">+0.4 ↑</td></tr>
          <tr><td class="row-label">Human Sciences BSc</td><td>39</td><td>50</td><td style="color:#27ae60;font-weight:700;">+11</td><td>3.6</td><td>4.1</td><td style="color:#c0392b;">+0.5 ↑</td></tr>
          <tr><td class="row-label">Neuroscience BSc</td><td>74</td><td>99</td><td style="color:#27ae60;font-weight:700;">+25</td><td>4.0</td><td>3.5</td><td style="color:#27ae60;">−0.5 ↓</td></tr>
          <tr><td class="row-label">Pharmacology BSc</td><td>44</td><td>50</td><td style="color:#27ae60;font-weight:700;">+6</td><td>3.6</td><td>4.0</td><td style="color:#c0392b;">+0.4 ↑</td></tr>
          <tr><td class="row-label">Pharmacy MPharm</td><td>200</td><td>200</td><td style="color:var(--text-muted);">0</td><td>2.6</td><td>2.7</td><td style="color:#c0392b;">+0.1 ↑</td></tr>
          <tr style="font-weight:700;background:var(--ls-light);"><td>Life Sciences Total</td><td>702</td><td>820</td><td style="color:#27ae60;">+118</td><td>3.5</td><td>3.9</td><td style="color:#c0392b;">+0.4 ↑</td></tr>
          <tr><td colspan="7" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--ms-color);padding:0.5rem 0.85rem;background:var(--ms-light);">Faculty of Medical Sciences · division-level only — individual degree breakdowns not published</td></tr>
          <tr><td class="row-label">Cancer Biomedicine BSc</td><td>30</td><td>35</td><td style="color:#27ae60;font-weight:700;">+5</td><td>6.0</td><td>6.3</td><td style="color:#c0392b;">+0.3 ↑</td></tr>
          <tr><td class="row-label">Infection &amp; Immunity BSc</td><td>18</td><td>16</td><td style="color:#c0392b;font-weight:700;">−2</td><td>2.6</td><td>3.5</td><td style="color:#c0392b;">+0.9 ↑</td></tr>
          <tr><td class="row-label">Division of Medicine*</td><td>164</td><td>174</td><td style="color:#27ae60;font-weight:700;">+10</td><td>3.6</td><td>5.7</td><td style="color:#c0392b;font-weight:700;">+2.1 ↑</td></tr>
          <tr><td class="row-label">Medicine MBBS</td><td>334</td><td>337</td><td style="color:#27ae60;font-weight:700;">+3</td><td>1.8</td><td>1.9</td><td style="color:#c0392b;">+0.1 ↑</td></tr>
          <tr style="font-weight:700;background:var(--ms-light);"><td>Medical Sciences Total</td><td>624</td><td>624</td><td style="color:var(--text-muted);">0</td><td>2.6</td><td>3.4</td><td style="color:#c0392b;">+0.8 ↑</td></tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:0.67rem;color:var(--text-muted);margin-top:0.6rem;line-height:1.5;">* Division of Medicine row covers Applied Medical Sciences, Medical Innovation &amp; Enterprise, Nutrition &amp; Medical Sciences, Sport &amp; Exercise Medical Sciences, and Population Health Sciences combined — UCL does not publish places for these individually. Source: UCL UG Admissions Statistics PDFs 2024-25 and 2025-26. Data excludes Clearing.</p>
  </div>

  <!-- Callout grid -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-bottom:1.5rem;">
    <div class="callout" style="border-color:var(--ls-color);">Life Sciences most competitive: <strong>Pharmacy MPharm</strong> — 24.3% offer rate, unchanged despite UCL-wide expansion.</div>
    <div class="callout" style="border-color:var(--ms-color);">Medical Sciences most competitive: <strong>Medicine MBBS</strong> — 30.0% offer rate; UCAT required.</div>
    <div class="callout" style="border-color:#27ae60;">Only programme with lower offers/place in 2025-26: <strong>Neuroscience BSc</strong> — better calibrated than all other Life Sciences programmes (4.0 → 3.5).</div>
    <div class="callout" style="border-color:#c0392b;">Worst over-offering: <strong>Division of Medicine</strong> — 5.7 offers per place in 2025-26, up from 3.6. Students who met conditions still competed with 4.7 others for each seat.</div>
  </div>

  <div class="info-box" style="border-color:#c0392b;background:#fdf3f3;">
    <strong>⚠ UCL's 2025-26 over-offering problem:</strong> UCL issued far more conditional offers than it had places for in 2025-26, then rescinded offers from students who had met their grade conditions — a widely reported issue. The offers/place column above shows this directly: UCL issued 38,696 offers university-wide for approximately 9,138 enrolled places, a ratio of 4.2 offers per place. A ratio above 4.0 means UCL offered a place to more than 4 students for every 1 available seat. Students accepting a 2027-28 conditional offer from UCL should be aware this risk may persist, particularly in the Division of Medicine (5.7 in 2025-26) and Biological Sciences (4.8). Pharmacy MPharm (2.7) and Medicine MBBS (1.9) are the best-calibrated programmes by this measure. Sources: <a href="https://www.ucl.ac.uk/prospective-students/undergraduate/sites/prospective_students_undergraduate/files/undergraduate_application_data_2025-26.pdf" target="_blank" style="color:#c0392b;">UCL UG Admissions Data 2025-26 (official PDF)</a> · <a href="https://www.ucl.ac.uk/prospective-students/undergraduate/sites/prospective_students_undergraduate/files/ug_apps_per_place_2024-25.pdf" target="_blank" style="color:#c0392b;">UCL UG Admissions Data 2024-25 (official PDF)</a>.
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     TAB 4 · CHINESE APPLICANTS
═══════════════════════════════════════════════════════ -->
<div id="tab-chinese" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Chinese-domiciled applicant data · UCL FOI 024 370 · 2024-25 entry</p>
  <h2 class="section-title">Chinese Applicant Data</h2>
  <div class="divider"></div>

  <div class="cn-note">
    <strong>Data source:</strong> UCL does not publish Chinese-applicant data in its standard annual statistics. This data comes from a Freedom of Information request (Reference: FOI 024 370, released 31 May 2024) covering the <strong>2024-25 entry cycle</strong>. UCL suppresses figures of 5 or fewer per programme for privacy. "Chinese domiciled" = students whose registered home address is in mainland China — this includes students at Chinese schools as well as Chinese nationals studying in third countries. For 2025-26 Chinese-specific data, no FOI response has been publicly released as of June 2026.
  </div>

  <!-- Comparison chart -->
  <div class="chart-section">
    <div class="chart-lbl">Chinese vs Overall Offer Rate · 2024-25</div>
    <h3 class="chart-title">How do Chinese applicants compare to all applicants?</h3>
    <p class="chart-sub">Chinese offer rate = CN offers ÷ CN applications · Overall = all offers ÷ all applications · Source: UCL FOI 024 370</p>
    <canvas id="chart-cn-compare" height="200"></canvas>
    <div class="chart-insight">Chinese applicants fare <strong>better than average</strong> for Biomedical Sciences (+22pp), Neuroscience (+23pp), Pharmacology BSc (+27pp), and MPharm Pharmacy (+15pp). The single largest negative gap is <strong>Human Sciences BSc</strong>, where Chinese applicants receive offers at 36% versus 65% overall (−28pp). MBBS Medicine offers to Chinese applicants are suppressed (≤5), confirming near-zero international intake for that degree.</div>
  </div>

  <!-- Full Chinese data table -->
  <div class="chart-section">
    <div class="chart-lbl">Full Data Table · Chinese-Domiciled Applicants · 2024-25</div>
    <h3 class="chart-title">Applications and Offers by Programme</h3>
    <p class="chart-sub">Source: UCL FOI 024 370 · "&lt;5" = suppressed by UCL for privacy</p>
    <div class="cn-table-wrap">
      <table class="cn-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>CN Apps</th>
            <th>CN Offers</th>
            <th>CN Rate</th>
            <th>Overall Rate</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colspan="6" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--ls-color);padding:0.5rem 0.85rem;background:var(--ls-light);">Faculty of Life Sciences — BSc programmes</td></tr>
          <tr>
            <td class="row-label">Biomedical Sciences BSc</td>
            <td>237</td><td>120</td><td><strong>50.6%</strong></td><td>28.5%</td>
            <td style="color:#27ae60;font-weight:700;">+22pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">Biological Sciences BSc</td>
            <td>324</td><td>118</td><td><strong>36.4%</strong></td><td>35.7%</td>
            <td style="color:#888;">≈ same</td>
          </tr>
          <tr>
            <td class="row-label">Biochemistry BSc</td>
            <td>188</td><td>66</td><td><strong>35.1%</strong></td><td>37.2%</td>
            <td style="color:#c0392b;font-weight:700;">−2pp ↓</td>
          </tr>
          <tr>
            <td class="row-label">Neuroscience BSc</td>
            <td>67</td><td>45</td><td><strong>67.2%</strong></td><td>44.6%</td>
            <td style="color:#27ae60;font-weight:700;">+23pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">Pharmacology BSc</td>
            <td>65</td><td>35</td><td><strong>53.8%</strong></td><td>27.0%</td>
            <td style="color:#27ae60;font-weight:700;">+27pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">Human Sciences BSc</td>
            <td>36</td><td>13</td><td><strong>36.1%</strong></td><td>64.5%</td>
            <td style="color:#c0392b;font-weight:700;">−28pp ↓</td>
          </tr>
          <tr><td colspan="6" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--ls-color);padding:0.5rem 0.85rem;background:var(--ls-light);">Faculty of Life Sciences — MSci / MPharm programmes</td></tr>
          <tr>
            <td class="row-label">Biological Sciences MSci</td>
            <td>25</td><td>15</td><td><strong>60.0%</strong></td><td>—</td>
            <td style="color:var(--text-muted);">MSci separate in FOI</td>
          </tr>
          <tr>
            <td class="row-label">Biochemistry MSci</td>
            <td>17</td><td>9</td><td><strong>52.9%</strong></td><td>—</td>
            <td style="color:var(--text-muted);">MSci separate in FOI</td>
          </tr>
          <tr>
            <td class="row-label">Neuroscience MSci</td>
            <td>15</td><td>10</td><td><strong>66.7%</strong></td><td>—</td>
            <td style="color:var(--text-muted);">MSci separate in FOI</td>
          </tr>
          <tr>
            <td class="row-label">Pharmacology MSci</td>
            <td>9</td><td class="pending">&lt;5</td><td class="pending">suppressed</td><td>—</td>
            <td style="color:var(--text-muted);">Too few to report</td>
          </tr>
          <tr>
            <td class="row-label">School of Pharmacy MPharm</td>
            <td>25</td><td>10</td><td><strong>40.0%</strong></td><td>24.7%</td>
            <td style="color:#27ae60;font-weight:700;">+15pp ↑</td>
          </tr>
          <tr><td colspan="6" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--ms-color);padding:0.5rem 0.85rem;background:var(--ms-light);">Faculty of Medical Sciences</td></tr>
          <tr>
            <td class="row-label">MB,BS Medicine (MBBS)</td>
            <td>28</td><td class="pending">&lt;5</td><td class="pending">suppressed</td><td>20.7%</td>
            <td style="color:#c0392b;font-weight:700;">Near-zero intl intake</td>
          </tr>
          <tr>
            <td class="row-label">BSc Cancer Biomedicine</td>
            <td>54</td><td>42</td><td><strong>77.8%</strong></td><td>68.6%</td>
            <td style="color:#27ae60;font-weight:700;">+9pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">BSc Infection &amp; Immunity</td>
            <td>21</td><td>19</td><td><strong>90.5%</strong></td><td>70.1%</td>
            <td style="color:#27ae60;font-weight:700;">+20pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">Applied Medical Sciences BSc</td>
            <td>151</td><td>140</td><td><strong>92.7%</strong></td><td>77.2%</td>
            <td style="color:#27ae60;font-weight:700;">+15pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">Medical Innovation &amp; Enterprise BSc</td>
            <td>26</td><td>15</td><td><strong>57.7%</strong></td><td>75.0%</td>
            <td style="color:#c0392b;font-weight:700;">−17pp ↓</td>
          </tr>
          <tr>
            <td class="row-label">Nutrition &amp; Medical Sciences BSc</td>
            <td>31</td><td>19</td><td><strong>61.3%</strong></td><td>52.6%</td>
            <td style="color:#27ae60;font-weight:700;">+9pp ↑</td>
          </tr>
          <tr>
            <td class="row-label">Sport &amp; Exercise Medical Sciences BSc</td>
            <td>25</td><td>18</td><td><strong>72.0%</strong></td><td>45.6%</td>
            <td style="color:#27ae60;font-weight:700;">+26pp ↑</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:0.67rem;color:var(--text-muted);margin-top:0.6rem;line-height:1.5;">Source: UCL FOI 024 370 (released 31 May 2024). "—" in Overall Rate column means this programme was not separately grouped in the UCL public stats PDF. UCL suppresses figures where ≤5 individuals are involved. Division of Medicine BSc does not appear in the Chinese FOI data, suggesting very few (&lt;5 total) Chinese domiciled applicants to that programme in 2024-25.</p>
  </div>

  <!-- Key findings callout grid -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-bottom:1.5rem;">
    <div class="callout" style="border-color:var(--ls-color);">
      <strong>Most popular LS programme for Chinese applicants:</strong> Biological Sciences (324 CN apps) — more Chinese applicants than any other life science programme, despite a near-average offer rate (36%).
    </div>
    <div class="callout" style="border-color:var(--ls-color);">
      <strong>Best CN offer rate in Life Sciences:</strong> Neuroscience BSc (67%) and Pharmacology BSc (54%) — Chinese applicants are offered at significantly higher rates than the overall cohort.
    </div>
    <div class="callout" style="border-color:var(--ms-color);">
      <strong>Medicine (MBBS) is effectively closed to Chinese applicants:</strong> 28 Chinese applications but fewer than 5 offers made — international intake is near-zero. Do not plan around a UCL MBBS as a realistic route.
    </div>
    <div class="callout" style="border-color:var(--ms-color);">
      <strong>Hidden gem in Medical Sciences:</strong> BSc Applied Medical Sciences (93% CN offer rate, 151 apps) and BSc Population Health Sciences (93%, 124 apps) are highly accessible routes in the medical faculty.
    </div>
  </div>

  <div class="info-box"><strong>Note on "Human Sciences" discrepancy:</strong> Human Sciences has a 64.5% overall offer rate but only 36% for Chinese applicants — a 28pp gap, the largest negative discrepancy in this dataset. This likely reflects that UCL uses contextual admissions for Human Sciences (a small programme with high domestic demand), and that Chinese applicants may not align as well with the programme's interdisciplinary admissions profile. Students should not assume high overall offer rates translate equally for Chinese-domiciled applicants.</div>

  <div class="info-box"><strong>How to get 2025-26 data:</strong> No Chinese-specific data for 2025-26 has been publicly released. You can submit your own FOI request at <a href="https://www.whatdotheyknow.com/body/ucl" target="_blank" style="color:var(--ucl-color);">WhatDoTheyKnow · UCL</a>. Suggested wording: <em>"Please provide the number of undergraduate applications and offers made for the 2025-26 entry cycle, broken down by programme, for Chinese-domiciled applicants."</em> UCL is required to respond within 20 working days.</div>
</div>

<!-- ═══════════════════════════════════════════════════════
     TAB 5 · HOW TO APPLY
═══════════════════════════════════════════════════════ -->
<div id="tab-apply" class="tab-panel">
  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">UCAS · Personal statement · UCAT · Key dates · Common mistakes</p>
  <h2 class="section-title">How to Apply</h2>
  <div class="divider"></div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Application Process</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1rem;">Step-by-step for 2026–27 entry · All programmes share the 15 January UCAS deadline</p>

  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
    <div class="flow-steps">
      <div class="flow-row"><div class="flow-num">May–Jun 2026</div><div class="flow-body"><strong>Register on UCAS Hub</strong> — Create your account at ucas.com. Choose up to 5 programmes total. Note: UCL strongly discourages applying to more than 2 UCL programmes on the same UCAS form.</div></div>
      <div class="flow-row"><div class="flow-num">May–Sep 2026</div><div class="flow-body"><strong>Register for UCAT</strong> (Medical School only) — Registration opens May; sitting window July–October. Required for MBBS only. All other Life Sciences and Medical Sciences programmes do NOT require UCAT.</div></div>
      <div class="flow-row"><div class="flow-num">Jun–Oct 2026</div><div class="flow-body"><strong>Sit IELTS</strong> (international applicants) — Minimum 6.5 overall for most programmes; 7.0–7.5 for Medicine and Pharmacy. Allow time for results (typically 2 weeks). IELTS is valid for 2 years.</div></div>
      <div class="flow-row"><div class="flow-num">Sep–Jan 2027</div><div class="flow-body"><strong>Write personal statement</strong> — 4,000 characters; one statement serves all 5 UCAS choices. Focus on academic subject passion. Medical School applicants: discuss clinical exposure; Science applicants: discuss research interest and lab experience.</div></div>
      <div class="flow-row"><div class="flow-num">15 Jan 2027</div><div class="flow-body"><strong>Submit UCAS application</strong> — Equal consideration deadline. No late applications considered. Ensure predicted grades are accurate and submitted by your school.</div></div>
      <div class="flow-row"><div class="flow-num">Jan–Apr 2027</div><div class="flow-body"><strong>Decisions and interviews</strong> — UCL Medical School holds interviews (MMI format). Most Life Sciences programmes are non-interview: decisions made on UCAS form, personal statement, and predicted grades alone.</div></div>
      <div class="flow-row"><div class="flow-num">Aug 2027</div><div class="flow-body"><strong>A-level results and confirm</strong> — Meet your conditional offer. UCL does not typically accept resit qualifications for first-entry undergraduate places.</div></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Personal Statement Do's &amp; Don'ts</h3>
  <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;">4,000 characters · One statement for all 5 UCAS choices</p>
  <div class="do-dont">
    <div class="do-card"><div class="do-card-title">DO</div>
      <ul class="ddlist">
        <li>Name specific topics, papers or discoveries that genuinely interest you</li>
        <li>Discuss any relevant lab, research, or work experience concretely</li>
        <li>Link your A-level subjects directly to what you'll study on the programme</li>
        <li>Show awareness of what UCL specifically offers (research institutes, location, curriculum)</li>
        <li>For Medicine: demonstrate clinical exposure and reflect on it meaningfully</li>
      </ul>
    </div>
    <div class="dont-card"><div class="dont-card-title">DON'T</div>
      <ul class="ddlist">
        <li>Apply to MBBS and a non-medicine programme at UCL on the same form (conflicting statements)</li>
        <li>Open with a generic childhood story or uncited quote</li>
        <li>List extracurriculars without linking them to academic interest</li>
        <li>Confuse the MPharm (professional pharmacy) with Pharmacology BSc (research degree)</li>
        <li>Forget to register for UCAT if applying to Medical School — the deadline cannot be missed</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Application Timeline</h3>
  <div class="tl-track">
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">May 2026</div><div class="tl-lbl">UCAS Hub opens; UCAT registration opens</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jul–Oct 2026</div><div class="tl-lbl">UCAT sitting window (Medicine only)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jun–Oct 2026</div><div class="tl-lbl">Sit IELTS (allow time for results)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Sep 2026</div><div class="tl-lbl">UCL Open Day (check ucl.ac.uk)</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Sep–Oct 2026</div><div class="tl-lbl">Write personal statement</div></div>
    <div class="tl-item hl"><div class="tl-dot"></div><div class="tl-date">15 Jan 2027</div><div class="tl-lbl">UCAS Deadline</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Jan–Apr 2027</div><div class="tl-lbl">Decisions + Medicine interviews</div></div>
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-date">Aug 2027</div><div class="tl-lbl">Results — confirm place</div></div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Useful Resources</h3>
  <div class="res-grid">
    <div class="res-card"><div class="res-card-label">UCL Life Sciences</div><a href="https://www.ucl.ac.uk/life-sciences/" target="_blank">ucl.ac.uk/life-sciences</a></div>
    <div class="res-card"><div class="res-card-label">UCL Medical School</div><a href="https://www.ucl.ac.uk/medical-school/" target="_blank">ucl.ac.uk/medical-school</a></div>
    <div class="res-card"><div class="res-card-label">UCL Admissions Stats</div><a href="https://www.ucl.ac.uk/prospective-students/undergraduate/download-prospectus" target="_blank">ucl.ac.uk UG stats PDFs</a></div>
    <div class="res-card"><div class="res-card-label">UCAT Registration</div><a href="https://www.ucat.ac.uk" target="_blank">ucat.ac.uk</a></div>
    <div class="res-card"><div class="res-card-label">Chinese FOI Data (2024-25)</div><a href="https://www.whatdotheyknow.com/request/2024_ug_admission_statistics_4" target="_blank">WhatDoTheyKnow · FOI 024 370</a></div>
    <div class="res-card"><div class="res-card-label">Submit Your Own FOI</div><a href="https://www.whatdotheyknow.com/body/ucl" target="_blank">WhatDoTheyKnow · UCL</a></div>
  </div>

  <div class="info-box"><strong>All information current as of June 2026.</strong> Always verify requirements on official UCL course pages before submitting — offer grades, IELTS thresholds, and programme structures can change year to year. For the most current Chinese applicant data, download the FOI PDF or submit a new FOI request for 2025-26 data.</div>
</div>

<!-- ═══════════════════════════════════════════════════════
     CHART.JS (single load)
═══════════════════════════════════════════════════════ -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
(function() {
  const programmes = [
    'Biochemistry\nBSc',
    'Biological\nSciences BSc',
    'Biomedical\nSciences BSc',
    'Human\nSciences BSc',
    'Neuroscience\nBSc',
    'Pharmacology\nBSc',
    'Pharmacy\nMPharm',
    'Cancer\nBiomedicine BSc',
    'Infection &\nImmunity BSc',
    'Applied Medical\nSciences BSc',
    'Medical Innovation\n& Enterprise BSc',
    'Nutrition &\nMedical Sci BSc',
    'Sport & Exercise\nMedical Sci BSc',
    'Medicine\nMBBS'
  ];

  // Offer rates — 2024-25 for all; 2025-26 only available for Life Sciences + Cancer Biomed + MBBS
  const rates2425 = [37.2, 35.7, 28.5, 64.5, 44.6, 27.0, 24.7, 68.6, 70.1, 77.2, 75.0, 52.6, 45.6, 20.7];
  const rates2526 = [52.7, 48.3, 44.1, 82.1, 49.2, 34.4, 24.3, 71.7, 78.9, null, null, null, null, 30.0];

  // Application volumes — 2024-25 for all; 2025-26 where available
  const apps2425 = [1027, 1147, 1940, 217, 657, 581, 2092, 273, 67, 579, 104, 135, 169, 2885];
  const apps2526 = [1027, 1305, 1647, 251, 713, 588, 2223, 307, 71, null, null, null, null, 2092];

  // Life Sciences green, Medical Sciences red
  const bgColors = [
    'rgba(26,110,60,0.75)','rgba(26,110,60,0.75)','rgba(26,110,60,0.75)',
    'rgba(26,110,60,0.75)','rgba(26,110,60,0.75)','rgba(26,110,60,0.75)',
    'rgba(26,110,60,0.75)',
    'rgba(138,26,46,0.75)','rgba(138,26,46,0.75)','rgba(138,26,46,0.75)',
    'rgba(138,26,46,0.75)','rgba(138,26,46,0.75)','rgba(138,26,46,0.75)','rgba(138,26,46,0.75)'
  ];
  const bgColors2 = bgColors.map(c => c.replace('0.75','0.4'));

  const drawn = {};

  function drawCharts() {
    const tab = document.getElementById('tab-admissions');
    if (!tab || getComputedStyle(tab).display === 'none') return;

    if (!drawn['offerrates']) {
      const ctx = document.getElementById('chart-offerrates');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: programmes,
            datasets: [
              { label: '2024-25 Offer Rate (%)', data: rates2425, backgroundColor: bgColors2, borderColor: bgColors, borderWidth: 1 },
              { label: '2025-26 Offer Rate (%)', data: rates2526, backgroundColor: bgColors, borderColor: bgColors.map(c=>c.replace('0.75','1')), borderWidth: 1 }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'bottom' },
              tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + '%' } }
            },
            scales: {
              x: { ticks: { font: { size: 10 } } },
              y: { min: 0, max: 100, title: { display: true, text: 'Offer rate (%)' }, ticks: { stepSize: 20 } }
            }
          }
        });
        drawn['offerrates'] = true;
      }
    }

    if (!drawn['appvol']) {
      const ctx2 = document.getElementById('chart-appvol');
      if (ctx2) {
        new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: programmes,
            datasets: [
              { label: '2024-25 Applications', data: apps2425, backgroundColor: bgColors2 },
              { label: '2025-26 Applications', data: apps2526, backgroundColor: bgColors }
            ]
          },
          options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
            scales: {
              x: { ticks: { font: { size: 10 } } },
              y: { title: { display: true, text: 'Applications' }, ticks: { stepSize: 500 } }
            }
          }
        });
        drawn['appvol'] = true;
      }
    }
  }

  // ── Chinese vs Overall comparison chart ──
  function drawCNChart() {
    const cnTab = document.getElementById('tab-chinese');
    if (!cnTab || getComputedStyle(cnTab).display === 'none') return;
    if (drawn['cn-compare']) return;
    const ctx = document.getElementById('chart-cn-compare');
    if (!ctx) return;

    const cnLabels = [
      'Biomed\nSciences BSc', 'Biological\nSciences BSc', 'Biochemistry\nBSc', 'Neuroscience\nBSc',
      'Pharmacology\nBSc', 'Human\nSciences BSc', 'Pharmacy\nMPharm',
      'Cancer\nBiomedicine BSc', 'Infection &\nImmunity BSc',
      'Applied Medical\nSci BSc', 'Medical Innovation\n& Enterprise BSc',
      'Nutrition &\nMedical Sci BSc', 'Sport & Exercise\nMedical Sci BSc'
    ];
    const cnRates    = [50.6, 36.4, 35.1, 67.2, 53.8, 36.1, 40.0, 77.8, 90.5, 92.7, 57.7, 61.3, 72.0];
    const overallRates = [28.5, 35.7, 37.2, 44.6, 27.0, 64.5, 24.7, 68.6, 70.1, 77.2, 75.0, 52.6, 45.6];
    const barColors = [
      '#1a6e3c','#1a6e3c','#1a6e3c','#5a3080','#6b4a00','#1a6e3c','#6b4a00',
      '#8a1a2e','#8a1a2e','#8a1a2e','#8a1a2e','#8a1a2e','#8a1a2e'
    ];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: cnLabels,
        datasets: [
          {
            label: 'Chinese applicants (2024-25)',
            data: cnRates,
            backgroundColor: barColors.map(c => c + 'cc'),
            borderColor: barColors,
            borderWidth: 1.5
          },
          {
            label: 'All applicants (2024-25)',
            data: overallRates,
            backgroundColor: 'rgba(180,180,180,0.35)',
            borderColor: 'rgba(120,120,120,0.8)',
            borderWidth: 1.5
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + '%' } }
        },
        scales: {
          x: { ticks: { font: { size: 10 } } },
          y: { min: 0, max: 100, title: { display: true, text: 'Offer rate (%)' }, ticks: { stepSize: 20 } }
        }
      }
    });
    drawn['cn-compare'] = true;
  }

  const cnTab = document.getElementById('tab-chinese');
  if (cnTab) {
    new MutationObserver(drawCNChart).observe(cnTab, { attributes: true, attributeFilter: ['style','class'] });
  }

  const admissionsTab = document.getElementById('tab-admissions');
  if (admissionsTab) {
    new MutationObserver(drawCharts).observe(admissionsTab, { attributes: true, attributeFilter: ['style','class'] });
  }

  document.addEventListener('click', function() { setTimeout(drawCharts, 60); setTimeout(drawCNChart, 60); });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { drawCharts(); drawCNChart(); });
  } else {
    drawCharts();
    drawCNChart();
  }
})();
</script>

<script>
  function showTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p) {
      p.classList.remove('active');
      p.style.display = 'none';
    });
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
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