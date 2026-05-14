---
layout: post
title: Canada Life Sciences Guide — UBC · McGill · U of T
date: 2025-10-15
tags: [canada, program introduction]
categories: []
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;

    /* University colors — tuned to look good with magenta */
    --ubc-color: #1a5fa8;       /* UBC blue */
    --ubc-light: #e8f0fb;
    --ubc-mid: #b8d0f0;
    --mcgill-color: #5a2d8c;    /* McGill purple */
    --mcgill-light: #f0eaf8;
    --mcgill-mid: #d0b8ee;
    --uoft-color: #a05c10;      /* U of T warm brown */
    --uoft-light: #fdf3e8;
    --uoft-mid: #e8c898;

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

  /* ── UNIVERSITY HEADER CARDS ──────────────────────── */
  .uni-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }

  .uni-card {
    border-radius: 12px;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
  }
  .uni-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
  }
  .uni-card.ubc { background: var(--ubc-light); }
  .uni-card.ubc::before { background: var(--ubc-color); }
  .uni-card.mcgill { background: var(--mcgill-light); }
  .uni-card.mcgill::before { background: var(--mcgill-color); }
  .uni-card.uoft { background: var(--uoft-light); }
  .uni-card.uoft::before { background: var(--uoft-color); }

  .uni-card-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .uni-card.ubc .uni-card-label { color: var(--ubc-color); }
  .uni-card.mcgill .uni-card-label { color: var(--mcgill-color); }
  .uni-card.uoft .uni-card-label { color: var(--uoft-color); }

  .uni-card-name {
    font-family: 'DM Serif Display', serif;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
  }
  .uni-card-sub {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .uni-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  .uni-stat {
    background: white;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    text-align: center;
  }
  .uni-stat-num {
    font-weight: 700;
    font-size: 1rem;
    color: var(--text-primary);
  }
  .uni-card.ubc .uni-stat-num { color: var(--ubc-color); }
  .uni-card.mcgill .uni-stat-num { color: var(--mcgill-color); }
  .uni-card.uoft .uni-stat-num { color: var(--uoft-color); }
  .uni-stat-label { font-size: 0.65rem; color: var(--text-muted); }

  /* ── FEATURE LISTS ────────────────────────────────── */
  .feature-list { list-style: none; margin-top: 1rem; }
  .feature-list li {
    font-size: 0.84rem;
    color: var(--text-secondary);
    padding: 0.35rem 0 0.35rem 1.2rem;
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    line-height: 1.5;
  }
  .feature-list li:last-child { border-bottom: none; }
  .feature-list li::before {
    content: '·';
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 1rem;
  }
  .uni-card.ubc .feature-list li::before { color: var(--ubc-color); }
  .uni-card.mcgill .feature-list li::before { color: var(--mcgill-color); }
  .uni-card.uoft .feature-list li::before { color: var(--uoft-color); }
  .feature-list strong { color: var(--text-primary); font-weight: 600; }

  /* ── FLOW DIAGRAM ─────────────────────────────────── */
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
  .flow-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .flow-col-head {
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .flow-col-head.ubc { background: var(--ubc-color); color: white; }
  .flow-col-head.mcgill { background: var(--mcgill-color); color: white; }
  .flow-col-head.uoft { background: var(--uoft-color); color: white; }

  .flow-step {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.6rem 0.75rem;
    font-size: 0.78rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    line-height: 1.45;
    position: relative;
  }
  .flow-step::after { display: none; }
  .flow-step:last-child::after { display: none; }
  .flow-step.highlight {
    font-weight: 600;
    color: var(--text-primary);
  }
  .flow-step.ubc-hl { border-left: 3px solid var(--ubc-color); }
  .flow-step.mcgill-hl { border-left: 3px solid var(--mcgill-color); }
  .flow-step.uoft-hl { border-left: 3px solid var(--uoft-color); }

  /* ── PROGRAM CARDS ────────────────────────────────── */
  .program-group { margin-bottom: 2.5rem; }
  .program-group-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
  }
  .program-group-sub {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }
  .program-cols {
    display: grid;
    gap: 1rem;
  }
  .program-cols.cols-3 { grid-template-columns: repeat(3, 1fr); }
  .program-cols.cols-2 { grid-template-columns: repeat(2, 1fr); }
  .program-cols.cols-1 { grid-template-columns: 1fr; }

  .program-card {
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid var(--border);
  }
  .program-card.ubc { border-top: 3px solid var(--ubc-color); background: var(--ubc-light); }
  .program-card.mcgill { border-top: 3px solid var(--mcgill-color); background: var(--mcgill-light); }
  .program-card.uoft { border-top: 3px solid var(--uoft-color); background: var(--uoft-light); }

  .program-uni-tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }
  .program-card.ubc .program-uni-tag { color: var(--ubc-color); }
  .program-card.mcgill .program-uni-tag { color: var(--mcgill-color); }
  .program-card.uoft .program-uni-tag { color: var(--uoft-color); }

  .program-name {
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    color: var(--text-primary);
    line-height: 1.35;
  }
  .program-desc {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }
  .program-star {
    font-size: 0.75rem;
    font-style: italic;
    padding: 0.4rem 0.6rem;
    border-radius: 5px;
    background: rgba(255,255,255,0.7);
    color: var(--text-muted);
    line-height: 1.4;
  }
  .program-card.ubc .program-star { border-left: 2px solid var(--ubc-color); }
  .program-card.mcgill .program-star { border-left: 2px solid var(--mcgill-color); }
  .program-card.uoft .program-star { border-left: 2px solid var(--uoft-color); }

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
  }
  .req-table th.ubc-h { color: var(--ubc-color); background: var(--ubc-light); }
  .req-table th.mcgill-h { color: var(--mcgill-color); background: var(--mcgill-light); }
  .req-table th.uoft-h { color: var(--uoft-color); background: var(--uoft-light); }
  .req-table td {
    padding: 0.65rem 0.9rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    vertical-align: top;
    line-height: 1.5;
  }
  .req-table tr:last-child td { border-bottom: none; }
  .req-table .row-label {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.8rem;
    width: 140px;
  }
  .req-table .req { font-weight: 600; color: var(--text-primary); }
  .req-table .rec { color: var(--text-muted); }

  /* ── GRADE CARDS ──────────────────────────────────── */
  .grade-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
  .grade-card {
    border-radius: 10px;
    padding: 1.25rem;
  }
  .grade-card.ubc { background: var(--ubc-light); border: 1px solid var(--ubc-mid); }
  .grade-card.mcgill { background: var(--mcgill-light); border: 1px solid var(--mcgill-mid); }
  .grade-card.uoft { background: var(--uoft-light); border: 1px solid var(--uoft-mid); }
  .grade-card-title {
    font-weight: 700;
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }
  .grade-card.ubc .grade-card-title { color: var(--ubc-color); }
  .grade-card.mcgill .grade-card-title { color: var(--mcgill-color); }
  .grade-card.uoft .grade-card-title { color: var(--uoft-color); }
  .grade-card-sys {
    font-size: 0.72rem;
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 0.9rem;
  }
  .grade-item {
    background: white;
    border-radius: 6px;
    padding: 0.5rem 0.7rem;
    margin-bottom: 0.4rem;
    font-size: 0.79rem;
    color: var(--text-secondary);
    line-height: 1.45;
  }
  .grade-item strong { color: var(--text-primary); }
  .grade-badge {
    display: inline-block;
    font-weight: 700;
    font-size: 0.9rem;
    margin-left: 0.25rem;
  }
  .grade-card.ubc .grade-badge { color: var(--ubc-color); }
  .grade-card.mcgill .grade-badge { color: var(--mcgill-color); }
  .grade-card.uoft .grade-badge { color: var(--uoft-color); }

  /* ── APPLICATION MATERIAL CARDS ──────────────────── */
  .app-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
  .app-card {
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid var(--border);
  }
  .app-card.ubc { background: var(--ubc-light); border-top: 3px solid var(--ubc-color); }
  .app-card.mcgill { background: var(--mcgill-light); border-top: 3px solid var(--mcgill-color); }
  .app-card.uoft { background: var(--uoft-light); border-top: 3px solid var(--uoft-color); }

  .app-card-title {
    font-weight: 700;
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  .app-card.ubc .app-card-title { color: var(--ubc-color); }
  .app-card.mcgill .app-card-title { color: var(--mcgill-color); }
  .app-card.uoft .app-card-title { color: var(--uoft-color); }

  .app-section-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 0.9rem 0 0.4rem;
  }
  .app-section-label:first-of-type { margin-top: 0; }

  .app-list { list-style: none; }
  .app-list li {
    font-size: 0.79rem;
    color: var(--text-secondary);
    padding: 0.3rem 0 0.3rem 1rem;
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    line-height: 1.45;
  }
  .app-list li:last-child { border-bottom: none; }
  .app-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    font-size: 0.7rem;
  }
  .app-card.ubc .app-list li::before { color: var(--ubc-color); }
  .app-card.mcgill .app-list li::before { color: var(--mcgill-color); }
  .app-card.uoft .app-list li::before { color: var(--uoft-color); }

  .app-note {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    font-style: italic;
    padding: 0.5rem 0.6rem;
    border-radius: 5px;
    background: rgba(255,255,255,0.6);
    color: var(--text-muted);
    line-height: 1.45;
  }
  .app-card.ubc .app-note { border-left: 2px solid var(--ubc-color); }
  .app-card.mcgill .app-note { border-left: 2px solid var(--mcgill-color); }
  .app-card.uoft .app-note { border-left: 2px solid var(--uoft-color); }

  /* ── TIMELINE ─────────────────────────────────────── */
  .timeline-uni { margin-bottom: 2.5rem; }
  .timeline-uni-label {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    color: white;
    margin-bottom: 1rem;
  }
  .timeline-uni-label.ubc { background: var(--ubc-color); }
  .timeline-uni-label.mcgill { background: var(--mcgill-color); }
  .timeline-uni-label.uoft { background: var(--uoft-color); }

  .timeline-track {
    display: flex;
    gap: 0;
    position: relative;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  .timeline-item {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 110px;
    position: relative;
  }
  .timeline-item:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 55px;
    width: 110px;
    height: 2px;
  }
  .timeline-uni:nth-child(1) .timeline-item::after { background: var(--ubc-color); opacity: 0.3; }
  .timeline-uni:nth-child(2) .timeline-item::after { background: var(--mcgill-color); opacity: 0.3; }
  .timeline-uni:nth-child(3) .timeline-item::after { background: var(--uoft-color); opacity: 0.3; }

  .timeline-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
    z-index: 1;
  }
  .timeline-uni:nth-child(1) .timeline-dot { background: var(--ubc-color); }
  .timeline-uni:nth-child(2) .timeline-dot { background: var(--mcgill-color); }
  .timeline-uni:nth-child(3) .timeline-dot { background: var(--uoft-color); }

  .timeline-date {
    font-size: 0.72rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    text-align: center;
  }
  .timeline-uni:nth-child(1) .timeline-date { color: var(--ubc-color); }
  .timeline-uni:nth-child(2) .timeline-date { color: var(--mcgill-color); }
  .timeline-uni:nth-child(3) .timeline-date { color: var(--uoft-color); }

.timeline-label {
    font-size: 0.68rem;
    color: var(--text-primary);
    text-align: center;
    line-height: 1.35;
  }

  /* ── ENGLISH TABLE ────────────────────────────────── */
  .english-table-wrap { overflow-x: auto; margin-bottom: 2rem; }
  .english-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }
  .english-table th {
    padding: 0.65rem 0.9rem;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 2px solid var(--border);
  }
  .english-table th:nth-child(2) { background: var(--ubc-light); color: var(--ubc-color); }
  .english-table th:nth-child(3) { background: var(--mcgill-light); color: var(--mcgill-color); }
  .english-table th:nth-child(4) { background: var(--uoft-light); color: var(--uoft-color); }
  .english-table td {
    padding: 0.65rem 0.9rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    vertical-align: top;
    line-height: 1.5;
    font-size: 0.8rem;
  }
  .english-table tr:last-child td { border-bottom: none; }
  .english-table .row-label { font-weight: 600; color: var(--text-primary); width: 160px; }
  .english-table tr:nth-child(even) td { background: var(--bg-soft); }

  /* ── PERSONAL PROFILE SECTION ─────────────────────── */
  .ubc-profile-callout {
    background: var(--ubc-light);
    border: 1px solid var(--ubc-mid);
    border-left: 4px solid var(--ubc-color);
    border-radius: 0 10px 10px 0;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
  }
  .ubc-profile-callout-title {
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--ubc-color);
    margin-bottom: 0.3rem;
  }
  .ubc-profile-callout p {
    font-size: 0.82rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
  .profile-questions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
    margin-top: 1rem;
  }
  .profile-q {
    background: white;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    border: 1px solid var(--ubc-mid);
  }
  .profile-q-num {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--ubc-color);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
  .profile-q-text {
    font-weight: 600;
    font-size: 0.82rem;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
  }
  .profile-q-sub { font-size: 0.75rem; color: var(--text-muted); line-height: 1.4; }

  /* ── INFO BOXES ───────────────────────────────────── */
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

  /* ── GCSE SECTION ─────────────────────────────────── */
  .gcse-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
  .gcse-card {
    border-radius: 10px;
    padding: 1.25rem;
  }
  .gcse-card.ubc { background: var(--ubc-light); border: 1px solid var(--ubc-mid); }
  .gcse-card.mcgill { background: var(--mcgill-light); border: 1px solid var(--mcgill-mid); }
  .gcse-card.uoft { background: var(--uoft-light); border: 1px solid var(--uoft-mid); }
  .gcse-card-title {
    font-weight: 700;
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  .gcse-card.ubc .gcse-card-title { color: var(--ubc-color); }
  .gcse-card.mcgill .gcse-card-title { color: var(--mcgill-color); }
  .gcse-card.uoft .gcse-card-title { color: var(--uoft-color); }
  .required-subjects {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
  }
  .subj-tag {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.25rem 0.6rem;
    border-radius: 20px;
    color: white;
  }
  .ubc .subj-tag { background: var(--ubc-color); }
  .mcgill .subj-tag { background: var(--mcgill-color); }
  .uoft .subj-tag { background: var(--uoft-color); }

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

  /* ── RESPONSIVE ───────────────────────────────────── */
  @media (max-width: 680px) {
    .program-cols.cols-3,
    .grade-grid,
    .app-grid,
    .gcse-grid { grid-template-columns: 1fr; }
    .flow-grid { grid-template-columns: 1fr; }
    .program-cols.cols-2 { grid-template-columns: 1fr; }
  }
</style>


<!-- ── TAB NAV ────────────────────────────────────────────── -->
<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview')">Overview</button>
    <button class="tab-btn" onclick="showTab('application')">Application</button>
    <button class="tab-btn" onclick="showTab('requirements')">Requirements</button>
    <button class="tab-btn" onclick="showTab('programs')">Programs</button>
  </div>
</nav>

<!-- ══════════════════════════════════════════════════════════
     TAB 1 · OVERVIEW
═══════════════════════════════════════════════════════════ -->
<div id="tab-overview" class="tab-panel active">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">Canada · Life Sciences &amp; Medicinal Chemistry · A-Level Applicant Guide</p>
  <h2 class="section-title">UBC · McGill · University of Toronto</h2>
  <div class="divider"></div>

  <div class="overview-intro">
    <p>This guide covers <strong>29 undergraduate programmes</strong> in Life Sciences and Medicinal Chemistry across three of Canada's top research universities — UBC (#34 QS), McGill (#29 QS), and University of Toronto (#21 QS) — written specifically for students applying with <strong>A-levels</strong> from international schools.</p>
    <p>All three universities accept predicted A-level grades and make conditional offers. Key differences: <strong>UBC</strong> requires a mandatory Personal Profile essay; <strong>McGill</strong> publishes hard grade cut-offs; <strong>U of T</strong> uses a competitive first-year gateway (POSt) to determine which programme you enter.</p>
  </div>

  <!-- University Cards -->
  <div class="uni-overview">
    <div class="uni-card ubc">
      <div class="uni-card-label">UBC</div>
      <div class="uni-card-name">University of British Columbia</div>
      <div class="uni-card-sub">Vancouver, Canada · Founded 1908</div>
      <div class="uni-stats">
        <div class="uni-stat"><div class="uni-stat-num">#34</div><div class="uni-stat-label">QS World 2025</div></div>
        <div class="uni-stat"><div class="uni-stat-num">#3</div><div class="uni-stat-label">in Canada</div></div>
        <div class="uni-stat"><div class="uni-stat-num">50K+</div><div class="uni-stat-label">Students</div></div>
        <div class="uni-stat"><div class="uni-stat-num">200+</div><div class="uni-stat-label">UG Programs</div></div>
      </div>
      <ul class="feature-list">
        <li><strong>Specialisation in Year 2</strong> — apply broadly to Faculty of Science first</li>
        <li><strong>Personal Profile mandatory</strong> for all applicants</li>
        <li><strong>Typical offer:</strong> AAB–AAA; no fixed cut-off</li>
        <li><strong>Grade A/B</strong> earns first-year transfer credit</li>
        <li>Strong co-op culture; Science Co-op available</li>
      </ul>
    </div>

    <div class="uni-card mcgill">
      <div class="uni-card-label">McGill</div>
      <div class="uni-card-name">McGill University</div>
      <div class="uni-card-sub">Montréal, Canada · Founded 1821</div>
      <div class="uni-stats">
        <div class="uni-stat"><div class="uni-stat-num">#29</div><div class="uni-stat-label">QS World 2025</div></div>
        <div class="uni-stat"><div class="uni-stat-num">#2</div><div class="uni-stat-label">in Canada</div></div>
        <div class="uni-stat"><div class="uni-stat-num">40K+</div><div class="uni-stat-label">Students</div></div>
        <div class="uni-stat"><div class="uni-stat-num">300+</div><div class="uni-stat-label">UG Programs</div></div>
      </div>
      <ul class="feature-list">
        <li><strong>Three streams:</strong> Liberal, Major, Honours</li>
        <li><strong>Published cut-offs:</strong> AAB predicted/final for Life Sciences</li>
        <li><strong>No personal statement</strong> for BSc Science applicants</li>
        <li><strong>Up to 30 credits</strong> advanced standing for strong A-levels</li>
        <li><strong>4 GCSE subjects</strong> required: <strong>Bio</strong>, Chem, Math, Physics</li>
      </ul>
    </div>

    <div class="uni-card uoft">
      <div class="uni-card-label">U of T</div>
      <div class="uni-card-name">University of Toronto</div>
      <div class="uni-card-sub">Toronto, Canada · Founded 1827</div>
      <div class="uni-stats">
        <div class="uni-stat"><div class="uni-stat-num">#21</div><div class="uni-stat-label">QS World 2026</div></div>
        <div class="uni-stat"><div class="uni-stat-num">#1</div><div class="uni-stat-label">in Canada</div></div>
        <div class="uni-stat"><div class="uni-stat-num">97K+</div><div class="uni-stat-label">Students</div></div>
        <div class="uni-stat"><div class="uni-stat-num">700+</div><div class="uni-stat-label">UG Programs</div></div>
      </div>
      <ul class="feature-list">
        <li><strong>POSt system:</strong> apply to 'Life Sciences', choose program at end of Year 1</li>
        <li><strong>Typical offer:</strong> AAB–AAA; Pharm Chem AAA–A*AA</li>
        <li><strong>No personal statement</strong> for life sciences</li>
        <li><strong>Math AS/A-level</strong> required for all science programs</li>
        <li><strong>O-level English grade</strong> may substitute for IELTS</li>
      </ul>
    </div>
  </div>

<div style="margin-bottom:2rem; padding:1.25rem 1.5rem; background:#f0eaf8; border-left:4px solid var(--mcgill-color); border-radius:0 10px 10px 0;">
  <div style="font-size:0.7rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--mcgill-color); margin-bottom:0.75rem;">McGill · Program Streams Explained</div>
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
    <div style="background:white; border-radius:8px; padding:0.75rem 1rem; border:1px solid var(--mcgill-mid);">
      <div style="font-weight:700; font-size:0.85rem; color:var(--mcgill-color); margin-bottom:0.3rem;">Liberal</div>
      <div style="font-size:0.79rem; color:var(--text-secondary); line-height:1.6;">Broad and flexible — students take courses across multiple science disciplines without committing to a single focus. Best for those still exploring their interests.</div>
    </div>
    <div style="background:white; border-radius:8px; padding:0.75rem 1rem; border:1px solid var(--mcgill-mid);">
      <div style="font-weight:700; font-size:0.85rem; color:var(--mcgill-color); margin-bottom:0.3rem;">Major</div>
      <div style="font-size:0.79rem; color:var(--text-secondary); line-height:1.6;">Focused on one subject area while allowing room for electives. The most common stream — balances depth with flexibility. No thesis required.</div>
    </div>
    <div style="background:white; border-radius:8px; padding:0.75rem 1rem; border:1px solid var(--mcgill-mid);">
      <div style="font-weight:700; font-size:0.85rem; color:var(--mcgill-color); margin-bottom:0.3rem;">Honours</div>
      <div style="font-size:0.79rem; color:var(--text-secondary); line-height:1.6;">Research-intensive with a supervised thesis project. Higher GPA threshold to enter — designed for students aiming for graduate or medical school.</div>
    </div>
  </div>
</div>

  <!-- Application Workflow -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem;">First-Year Application Workflow</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">How students enter their programme — the paths diverge after Year 1</p>

  <div class="flow-section">
    <div class="flow-title">A-Level student applies →</div>
  <!-- Column headers -->
   <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.75rem 1rem; margin-bottom:0.5rem;">
    <div class="flow-col-head ubc">UBC</div>
    <div class="flow-col-head mcgill">McGill</div>
    <div class="flow-col-head uoft">U of T</div>
  </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto auto auto; gap:0.75rem 1rem;">

  <!-- Row 1 — Entry point -->
  <div class="flow-step ubc-hl highlight">Faculty of Science<br><small style="font-weight:400">(or Faculty of Medicine for CAPS)</small></div>
  <div class="flow-step mcgill-hl highlight">BSc Faculty of Science<br><small style="font-weight:400">indicate subject interest (not binding)</small></div>
  <div class="flow-step uoft-hl highlight">'Life Sciences' category <br><small style="font-weight:400">no specific program selected at entry</small></div>

  <!-- Row 2 — Year 1 -->
  <div class="flow-step">Year 1 core courses<br><small>Chemistry · Biology · Math · Physics</small></div>
  <div class="flow-step">Year 1 core courses<br><small>Biology · Chemistry · Calculus · Physics</small></div>
  <div class="flow-step">Year 1 core courses<br><small>Biology · Chemistry · Math (Calculus required)</small></div>

  <!-- Row 3 — End of Year 1 -->
  <div class="flow-step ubc-hl">End of Year 1 — internal application<br><small>competitive minimum average is between 65–70%</small></div>
  <div class="flow-step mcgill-hl">End of Year 1 — declare Major/Honours<br><small>cut-offs vary by program</small></div>
  <div class="flow-step uoft-hl">End of Year 1 (April) — POSt application<br><small>competitive average score is between high 70s to low 80s</small></div>

  <!-- Row 4 — Year 2 -->
  <div class="flow-step highlight" style="border-left:3px solid var(--ubc-color);">Start Year 2 — declare program<br><small>Biochemistry · Pharmacology · CAPS · Neuroscience…</small></div>
  <div class="flow-step highlight" style="border-left:3px solid var(--mcgill-color);">Year 2 specific program begins<br><small>Biochemistry · Pharmacology · Physiology…</small></div>
  <div class="flow-step highlight" style="border-left:3px solid var(--uoft-color);">Year 2 specific program begins<br><small>Biochemistry · Pharmacology · Immunology…</small></div>

</div>
  </div>

</div>

<!-- ══════════════════════════════════════════════════════════
     TAB 2 · APPLICATION
═══════════════════════════════════════════════════════════ -->
<div id="tab-application" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">What to prepare · When to submit · Key deadlines</p>
  <h2 class="section-title">Application Materials &amp; Timelines</h2>
  <div class="divider"></div>

  <!-- Application Materials -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem;">Documents Required</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">For A-level students applying from international schools</p>

  <div class="app-grid">
    <div class="app-card ubc">
      <div class="app-card-title">UBC</div>

      <div class="app-section-label">Academic Documents</div>
      <ul class="app-list">
        <li>Predicted / in-progress A-level grades (submitted by school)</li>
        <li>O-level / IGCSE / GCSE certificates (upload to Applicant Service Centre)</li>
        <li>Interim Year 13 transcripts</li>
        <li>Final A-level results when available (Aug/Sep)</li>
        <li>School profile letter if linear A-level (no AS results)</li>
      </ul>

      <div class="app-section-label">Supporting Documents</div>
      <ul class="app-list">
        <li>IELTS / TOEFL / Duolingo score (if required)</li>
        <li><strong>Personal Profile</strong> — mandatory: short essay questions</li>
        <li>Passport copy</li>
        <li>Self-reported grades in Applicant Service Centre</li>
      </ul>

      <div class="app-note">⚠ Offer may be reviewed if final grades drop 2+ letter grades vs prediction.</div>
    </div>

    <div class="app-card mcgill">
      <div class="app-card-title">McGill</div>

      <div class="app-section-label">Academic Documents</div>
      <ul class="app-list">
        <li>All GCSE / IGCSE / O-level certificates</li>
        <li>Year 12 progress reports and school results</li>
        <li>Year 13 in-progress results / progress report</li>
        <li>AS-level results (if written)</li>
        <li>Predicted A-level grades (from school)</li>
        <li>Final A-level results when available</li>
      </ul>

      <div class="app-section-label">Supporting Documents</div>
      <ul class="app-list">
        <li>IELTS / TOEFL / Duolingo score (if required)</li>
        <li>School profile letter if linear A-level school</li>
        <li>No personal statement required</li>
        <li>Upload all docs via McGill Applicant Portal</li>
      </ul>

      <div class="app-note">★ Students with 4 A-levels: lowest grade may be excluded. Up to 30 credits advanced standing for strong finals.</div>
    </div>

    <div class="app-card uoft">
      <div class="app-card-title">U of T</div>

      <div class="app-section-label">Academic Documents</div>
      <ul class="app-list">
        <li>Predicted / in-term A-level grades (from school)</li>
        <li>Previous year's academic results (Year 12)</li>
        <li>O-level / IGCSE / GCSE certificates (min 5 subjects)</li>
        <li>Final A-level results when available</li>
        <li>Self-Reported Grades Form (mandatory on JOIN U of T portal)</li>
      </ul>

      <div class="app-section-label">Supporting Documents</div>
      <ul class="app-list">
        <li>IELTS / TOEFL / Duolingo — or English exemption proof</li>
        <li>No personal statement required for life sciences</li>
        <li>Apply via OUAC 105 (international students)</li>
        <li>Application fee: CAD $180</li>
        <li>Passport copy</li>
      </ul>

      <div class="app-note">★ POSt program selection happens at end of Year 1 — first-year grades are critical.</div>
    </div>
  </div>

  <!-- UBC Personal Profile Callout -->
  <div class="ubc-profile-callout">
    <div class="ubc-profile-callout-title">★ UBC Personal Profile — Unique to UBC</div>
    <p>McGill and U of T do <em>not</em> require a personal statement for life science programs. UBC's Personal Profile is completed inside the online application and directly affects entrance scholarship eligibility. Start drafting in Oct/Nov — well before the Jan 15 deadline.</p>
    <div class="profile-questions">
      <div class="profile-q">
        <div class="profile-q-num">Q1</div>
        <div class="profile-q-text">Who are you?</div>
        <div class="profile-q-sub">How would family/friends describe you? Include something you're most proud of.</div>
      </div>
      <div class="profile-q">
        <div class="profile-q-num">Q2</div>
        <div class="profile-q-text">What is important to you?</div>
        <div class="profile-q-sub">And why?</div>
      </div>
      <div class="profile-q">
        <div class="profile-q-num">Q3</div>
        <div class="profile-q-text">Up to 5 activities</div>
        <div class="profile-q-sub">Clubs, arts, work, athletics, volunteering — describe your responsibilities.</div>
      </div>
      <div class="profile-q">
        <div class="profile-q-num">Q4</div>
        <div class="profile-q-text">Tell us more about 1–2</div>
        <div class="profile-q-sub">Explain your role and what you learned. A reference must be named.</div>
      </div>
      <div class="profile-q">
        <div class="profile-q-num">Q5</div>
        <div class="profile-q-text">Additional info (optional)</div>
        <div class="profile-q-sub">Academic history, personal circumstances, or anything else UBC should know.</div>
      </div>
    </div>
  </div>

  <!-- Timelines -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem; margin-top:2rem;">Application Timelines</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1.5rem;">Key dates for international A-level applicants</p>

  <div class="timeline-uni">
    <div class="timeline-uni-label ubc">UBC</div>
    <div class="timeline-track">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Oct</div>
        <div class="timeline-label">Application opens</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Dec 1</div>
        <div class="timeline-label">Scholarship deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jan 15</div>
        <div class="timeline-label">Application deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Feb</div>
        <div class="timeline-label">IELTS/TOEFL deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Mar 15</div>
        <div class="timeline-label">Supporting docs deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Mar–Apr</div>
        <div class="timeline-label">Conditional offers sent</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">May</div>
        <div class="timeline-label">Accept offer</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Aug</div>
        <div class="timeline-label">Final results submitted</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Sep</div>
        <div class="timeline-label">Start at UBC</div>
      </div>
    </div>
  </div>

  <div class="timeline-uni">
    <div class="timeline-uni-label mcgill">McGill</div>
    <div class="timeline-track">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Oct 1</div>
        <div class="timeline-label">Application opens</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jan 15</div>
        <div class="timeline-label">Application deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jan 21</div>
        <div class="timeline-label">Scholarship deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Mar 1</div>
        <div class="timeline-label">Supporting docs deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Mar–May</div>
        <div class="timeline-label">Admission decisions</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jun</div>
        <div class="timeline-label">Confirm enrolment</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jul</div>
        <div class="timeline-label">Final results submitted</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Sep</div>
        <div class="timeline-label">Start at McGill</div>
      </div>
    </div>
  </div>

  <div class="timeline-uni">
    <div class="timeline-uni-label uoft">U of T</div>
    <div class="timeline-track">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Oct</div>
        <div class="timeline-label">Application opens (OUAC 105)</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Early Nov</div>
        <div class="timeline-label">Scholarship deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jan 15</div>
        <div class="timeline-label">Application deadline</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jan–Apr</div>
        <div class="timeline-label">Conditional offers</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Jun</div>
        <div class="timeline-label">Accept offer + deposit</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Aug</div>
        <div class="timeline-label">Final results submitted</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Sep</div>
        <div class="timeline-label">Year 1 begins</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Apr (Yr 1)</div>
        <div class="timeline-label">POSt — choose program</div>
      </div>
    </div>
  </div>

</div>

<!-- ══════════════════════════════════════════════════════════
     TAB 3 · REQUIREMENTS
═══════════════════════════════════════════════════════════ -->
<div id="tab-requirements" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">A-levels · GCSE/O-levels · English Proficiency</p>
  <h2 class="section-title">Entry Requirements</h2>
  <div class="divider"></div>

  <!-- A-Level Subjects -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem;">A-Level Subjects Required</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">For life sciences and medicinal chemistry programs</p>

  <div class="req-table-wrap">
    <table class="req-table">
      <thead>
        <tr>
          <th>Program</th>
          <th class="ubc-h">Chemistry</th>
          <th class="ubc-h">Biology</th>
          <th class="ubc-h">Math/Calc</th>
          <th class="ubc-h">Physics</th>
        </tr>
      </thead>
      <tbody>
        <tr><td colspan="5" style="background:var(--ubc-light); font-weight:700; font-size:0.75rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ubc-color); padding:0.5rem 0.9rem;">UBC</td></tr>
        <tr>
          <td class="row-label">Biochemistry / Pharmacology / CAPS / Neuroscience</td>
          <td><span class="req">Required</span></td>
          <td><span class="rec">Recommended</span></td>
          <td><span class="req">Required</span></td>
          <td><span class="rec">Recommended</span></td>
        </tr>
        <tr>
          <td class="row-label">Pharmaceutical Sciences</td>
          <td><span class="req">Required</span></td>
          <td><span class="req">Required</span></td>
          <td><span class="req">Required</span></td>
          <td><span class="rec">Recommended</span></td>
        </tr>
        <tr><td colspan="5" style="background:var(--mcgill-light); font-weight:700; font-size:0.75rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--mcgill-color); padding:0.5rem 0.9rem;">McGill</td></tr>
        <tr>
          <td class="row-label">All life science programs</td>
          <td><span class="req">Required (A-level)</span></td>
          <td><span class="req">Required (A-level)</span></td>
          <td><span class="req">Required (A-level)</span></td>
          <td><span class="rec">GCSE req'd / A-level rec.</span></td>
        </tr>
        <tr><td colspan="5" style="background:var(--uoft-light); font-weight:700; font-size:0.75rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--uoft-color); padding:0.5rem 0.9rem;">U of T</td></tr>
        <tr>
          <td class="row-label">Biochemistry / Pharmacology / Immunology / Physiology / etc.</td>
          <td><span class="req">Required</span></td>
          <td><span class="rec">Strongly rec.</span></td>
          <td><span class="req">AS or A-level req'd</span></td>
          <td><span class="rec">Recommended</span></td>
        </tr>
        <tr>
          <td class="row-label">Pharmaceutical Chemistry (Specialist)</td>
          <td><span class="req">Required</span></td>
          <td><span class="rec">Strongly rec.</span></td>
          <td><span class="req">AS or A-level req'd</span></td>
          <td><span class="rec">Recommended</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Grade Standards -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem; margin-top:2rem;">A-Level Grade Standards</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">How each university processes A-level grades</p>

  <div class="grade-grid">
    <div class="grade-card mcgill">
      <div class="grade-card-title">McGill</div>
      <div class="grade-card-sys">Official published cut-offs (Sept 2025 entry)</div>
      <div class="grade-item"><strong>Biological &amp; Life Sciences</strong><br>Predicted: <span class="grade-badge">AAB</span> · Final: <span class="grade-badge">AAB</span></div>
      <div class="grade-item"><strong>Bio-Physical-Computational</strong><br>Predicted: <span class="grade-badge">AAA</span> · Final: <span class="grade-badge">AAB</span></div>
      <div class="grade-item"><strong>Physical / Math / CS</strong><br>Predicted: <span class="grade-badge">AAA</span> · Final: <span class="grade-badge">AAB</span></div>
      <div class="grade-item" style="font-style:italic; font-size:0.75rem; color:var(--text-muted);">Note: cut-offs vary year to year. Maths + Further Maths = 1 subject.</div>
    </div>
    <div class="grade-card ubc">
      <div class="grade-card-title">UBC</div>
      <div class="grade-card-sys">Competitive conversion — no fixed grade offer</div>
      <div class="grade-item">A-level grades converted to % using UBC's internal scale</div>
      <div class="grade-item"><strong>Typical competitive range:</strong> <span class="grade-badge">AAB–AAA</span></div>
      <div class="grade-item">Both predicted &amp; in-progress grades used for conditional offers</div>
      <div class="grade-item">Grade A or B → first-year transfer credit awarded</div>
      <div class="grade-item"><strong>Personal Profile is mandatory</strong> for all applicants</div>
    </div>
    <div class="grade-card uoft">
      <div class="grade-card-title">U of T</div>
      <div class="grade-card-sys">Conditional offer system — no fixed offer published</div>
      <div class="grade-item"><strong>Life sciences typical:</strong> <span class="grade-badge">AAB–AAA</span></div>
      <div class="grade-item"><strong>Pharmaceutical Chemistry:</strong> <span class="grade-badge">AAA–A*AA</span> (highly competitive)</div>
      <div class="grade-item">Grade A or B → first-year transfer credit awarded</div>
      <div class="grade-item">No personal statement required for life sciences</div>
      <div class="grade-item"><strong>POSt entry at end of Year 1</strong> is a separate grade hurdle</div>
    </div>
  </div>

  <!-- GCSE Requirements -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem; margin-top:2rem;">GCSE / O-Level Requirements</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">What each university requires at GCSE / O-level level</p>

  <div class="gcse-grid">
    <div class="gcse-card ubc">
      <div class="gcse-card-title">UBC</div>
      <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem; line-height:1.55;">Treated as Grade 11 equivalents. No fixed list, but Chemistry, Biology, Math, and Physics strongly relevant. Min 70% (or equiv) in English-medium Grade 11 course required. A subject cannot be counted at both A-level and GCSE level.</p>
      <div class="required-subjects ubc">
        <span class="subj-tag">Biology</span>
        <span class="subj-tag">Chemistry</span>
        <span class="subj-tag">Mathematics</span>
        <span class="subj-tag">Physics</span>
        <span class="subj-tag" style="background:var(--text-muted);">strongly relevant</span>
      </div>
    </div>
    <div class="gcse-card mcgill">
      <div class="gcse-card-title">McGill</div>
      <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem; line-height:1.55;">Four specific subjects required at GCSE level for all BSc Science programs. All grades taken into consideration including failed or repeated courses. Students without GCSEs must submit pre-A-level transcripts.</p>
      <div class="required-subjects mcgill">
        <span class="subj-tag">Biology</span>
        <span class="subj-tag">Chemistry</span>
        <span class="subj-tag">Mathematics</span>
        <span class="subj-tag">Physics</span>
      </div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem; font-style:italic;">All four must be at GCSE / IGCSE / O-level (or equiv)</p>
    </div>
    <div class="gcse-card uoft">
      <div class="gcse-card-title">U of T</div>
      <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem; line-height:1.55;">Minimum 5 different academic subjects required. English and Mathematics must be included. BTEC, Cambridge Technical (Level 3), and T-Level qualifications are NOT accepted in lieu of A-level subjects.</p>
      <div class="required-subjects uoft">
        <span class="subj-tag">English</span>
        <span class="subj-tag">Mathematics</span>
        <span class="subj-tag">+ 3 more</span>
      </div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem; font-style:italic;">Bio/Chem/Physics preferably at AS or A-level for science programs</p>
    </div>
  </div>

  <!-- English Proficiency -->
  <h3 style="font-family:'DM Serif Display',serif; font-size:1.1rem; margin-bottom:0.5rem; margin-top:2rem;">English Proficiency Requirements</h3>
  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">IELTS · TOEFL · Duolingo · Exemptions</p>

  <div class="info-box">
    <strong>Tip for A-level students:</strong> A good grade in O-level or A-level English may exempt you entirely from IELTS/TOEFL at U of T. Check with your school and the university before registering for a test.
  </div>

  <div class="english-table-wrap">
    <table class="english-table">
      <thead>
        <tr>
          <th>Test</th>
          <th>UBC</th>
          <th>McGill</th>
          <th>U of T</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">IELTS Academic</td>
          <td>6.5 overall (min 6.0 each band)</td>
          <td>6.5 overall (min 6.0 each band)</td>
          <td>6.5 overall (min 6.0 each band)</td>
        </tr>
        <tr>
          <td class="row-label">TOEFL iBT</td>
          <td>90 total (min 22R, 21W, 18L, 18S)</td>
          <td>90 total (min 20 each section)</td>
          <td>89 total (min 22 speaking &amp; writing; 100+ recommended)</td>
        </tr>
        <tr>
          <td class="row-label">Duolingo</td>
          <td>125 overall</td>
          <td>120 overall</td>
          <td>120 overall (120 in Production for tests after Jul 2024)</td>
        </tr>
        <tr>
          <td class="row-label">Cambridge C1/C2</td>
          <td>Accepted (contact UBC for score)</td>
          <td>Accepted (C1 minimum)</td>
          <td>185 overall (min 176 each component)</td>
        </tr>
        <tr>
          <td class="row-label">Exemption</td>
          <td>4+ years full-time at an English-medium school</td>
          <td>4+ years study in a country where English is the primary language</td>
          <td>Grade B in O-level English, Grade C in AS/A-level English, or IB English A score ≥ 4</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

<!-- ══════════════════════════════════════════════════════════
     TAB 4 · PROGRAMS
═══════════════════════════════════════════════════════════ -->
<div id="tab-programs" class="tab-panel">

  <p class="section-subtitle" style="margin-top:1.5rem; font-size:0.82rem; color:var(--text-muted);">29 programs · UBC · McGill · University of Toronto</p>
  <h2 class="section-title">Program Introductions</h2>
  <div class="divider"></div>

  <!-- Biochemistry -->
  <div class="program-group">
    <div class="program-group-title">Biochemistry</div>
    <div class="program-group-sub">UBC · McGill · U of T</div>
    <div class="program-cols cols-3">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Biochemistry (BSc)</div>
        <div class="program-desc"><strong>Molecular basis of life:</strong> enzyme kinetics, metabolism, gene regulation, protein structure, cell signalling. <br>Two Year-2 options: Biochemistry OR Medical &amp; Molecular Biology. Faculty of Medicine.</div>
        <div class="program-star">★ Science Co-op + Honours thesis available</div>
      </div>
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Biochemistry (BSc)</div>
        <div class="program-desc"><strong>Molecular basis of cellular function:</strong> proteins, enzymes, nucleic acids, metabolism, signal transduction.<br> Major (flexible) or Honours (research-intensive, thesis required). Faculty of Science.</div>
        <div class="program-star">★ Up to 30 credits advanced standing for strong A-levels</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Biochemistry (HBSc Major or Specialist)</div>
        <div class="program-desc">Molecular biochemistry, gene regulation, structural biology, molecular medicine. Specialist: standalone research-intensive.<br> Major: pair with Pharmacology, Immunology, or Mol. Genetics. 65+ faculty.</div>
        <div class="program-star">★ ASIP paid internship + ROP research available</div>
      </div>
    </div>
  </div>

  <!-- Pharmacology -->
  <div class="program-group">
    <div class="program-group-title">Pharmacology</div>
    <div class="program-group-sub">UBC · McGill · U of T</div>
    <div class="program-cols cols-3">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Pharmacology (BSc Major or Honours)</div>
        <div class="program-desc">Drug action mechanisms, pharmacokinetics, toxicology, CNS pharmacology.<br> Year 2 labs include animal-based techniques.<br> Honours requires thesis research.<br> Faculty of Medicine. ~24 seats per year.</div>
        <div class="program-star">★ One of Canada's only UG pharmacology programs with live animal lab experience</div>
      </div>
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Pharmacology (BSc Major or Honours)</div>
        <div class="program-desc">Drug mechanisms, pharmacokinetics, CNS &amp; cardiovascular pharmacology. <br>Major: flexible, can combine with Biochemistry. </br>Honours: research-intensive with thesis.<br> Dept of Pharmacology &amp; Therapeutics.</div>
        <div class="program-star">★ Bio-organic Chemistry component links pharmacology to drug synthesis</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Pharmacology (HBSc Major or Specialist)</div>
        <div class="program-desc">Four Specialist streams: Pharmacology; Biomedical Toxicology; Pharmacology &amp; Toxicology; Pharmacology &amp; Neuroscience.<br> Supervisor research project in Years 3–4 for Specialist students.</div>
        <div class="program-star">★ ASIP paid co-op (12–16 months) — one of only 2 programs at U of T with this</div>
      </div>
    </div>
  </div>

  <!-- Microbiology & Immunology -->
  <div class="program-group">
    <div class="program-group-title">Microbiology &amp; Immunology</div>
    <div class="program-group-sub">UBC · McGill · U of T (as separate programs)</div>
    <div class="program-cols cols-2">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Microbiology &amp; Immunology (BSc)</div>
        <div class="program-desc">Virology, bacteriology, mycology, immunology, host-pathogen interactions.<br> Concentrations: Medical Microbiology, Virology &amp; Immunology, or Environmental Microbiology.<br> Faculty of Medicine/Science.</div>
        <div class="program-star">★ Science Co-op; strong links to BC Centre for Disease Control</div>
      </div>
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Microbiology &amp; Immunology (BSc Major or Honours)</div>
        <div class="program-desc">Molecular microbiology, bacterial physiology, virology, cellular immunology, pathogenesis.<br> Honours requires research thesis (MICR 396). Dept of Microbiology &amp; Immunology.</div>
        <div class="program-star">★ Research linked to McGill Infectious Disease Research Institute</div>
      </div>
    </div>
  </div>

  <!-- Immunology (standalone) -->
  <div class="program-group">
    <div class="program-group-title">Immunology</div>
    <div class="program-group-sub">McGill · U of T</div>
    <div class="program-cols cols-2">
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Honours Immunology — Interdepartmental (BSc Honours)</div>
        <div class="program-desc">Unique 3-department program covering cellular and molecular basis of immune response, autoimmunity, tumour immunology, transplantation, and vaccine science. 75 credits.<br> Mandatory honours research project.</div>
        <div class="program-star">★ Interdepartmental — draws from Microbiology &amp; Immunology, Biochemistry, Medicine simultaneously</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Immunology (HBSc Major or Specialist)</div>
        <div class="program-desc">Innate &amp; adaptive immunity, T/B cell biology, cytokines, immunopathology, autoimmunity, cancer immunology, transplantation, and vaccine science. <br>Specialist: IMM450Y1 supervised thesis.<br> Affiliated with Trinity College.</div>
        <div class="program-star">★ One of very few dedicated undergraduate Immunology programs in Canada</div>
      </div>
    </div>
  </div>

  <!-- Physiology -->
  <div class="program-group">
    <div class="program-group-title">Physiology</div>
    <div class="program-group-sub">UBC (CAPS) · McGill · U of T</div>
    <div class="program-cols cols-3">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">CAPS — Cellular, Anatomical &amp; Physiological Sciences (BSc)</div>
        <div class="program-desc">Human anatomy, physiology, and cell biology integrated. Gross anatomy labs, organ system physiology, cellular &amp; molecular biology. Faculty of Medicine. ~80% of graduates pursue medicine, dentistry, or pharmacy.</div>
        <div class="program-star">★ Anatomy dissection labs — rare at undergraduate level</div>
      </div>
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Physiology (BSc Major or Honours)</div>
        <div class="program-desc">Cardiovascular, respiratory, renal, endocrine, and nervous systems. </br>PHGY 209/210 core + upper-year PHGY 311+. <br>Honours: research project PHGY 396/490. Can combine with Pharmacology or Biochemistry.</div>
        <div class="program-star">★ Strong pre-medicine pathway; MCAT-aligned course content</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Physiology (HBSc Major or Specialist)</div>
        <div class="program-desc">Cardiovascular, respiratory, renal, endocrine, and CNS physiology at organ and molecular levels. <br>Specialist includes PSL481Y1 supervised research project. <br>ASIP paid internship available. Temerty Faculty of Medicine.</div>
        <div class="program-star">★ ASIP internship available alongside Physiology Specialist</div>
      </div>
    </div>
  </div>

  <!-- Pharmaceutical Sciences & Chemistry -->
  <div class="program-group">
    <div class="program-group-title">Pharmaceutical Sciences &amp; Chemistry</div>
    <div class="program-group-sub">UBC · McGill · U of T (McGill has no equivalent undergraduate program)</div>
    <div class="program-cols cols-2">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Pharmaceutical Sciences (BSc)</div>
        <div class="program-desc">Drug design, delivery systems, pharmacokinetics, nanomedicine, biopharmaceutics, regulatory science. <br>Direct Year 1 entry — no need for competitive Year 2 application. <br>Lab-intensive: UHPLC, NMR, cell culture, drug formulation.</div>
        <div class="program-star">★ Direct entry from Year 1 — no need to wait for Year 2 specialisation</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Pharmaceutical Chemistry (HBSc Specialist)</div>
        <div class="program-desc">Drug synthesis, formulation, molecular pharmacology, drug discovery, pharmaceutics, clinical trial design. <br>Jointly offered by Dept of Chemistry + Leslie Dan Faculty of Pharmacy. <br>CSC accredited. Optional 12–16 month ASIP co-op.</div>
        <div class="program-star">★ Only undergraduate Pharm Chem Specialist at a top research university in Canada</div>
      </div>
    </div>
  </div>

  <!-- Chemistry: Bio-organic & Medicinal -->
  <div class="program-group">
    <div class="program-group-title">Chemistry: Bio-organic &amp; Medicinal</div>
    <div class="program-group-sub">UBC · McGill</div>
    <div class="program-cols cols-2">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Chemical Biology (BSc Combined Honours) &amp; Chemistry BSc — Bio/Medicinal Focus</div>
        <div class="program-desc">Chemical Biology: joint Chemistry + Biochemistry/Microbiology Honours. Natural product synthesis, bioorganic mechanisms, chemical probes. Chemistry BSc Bio/Med: organic, physical, analytical and biological chemistry with medicinal electives.</div>
        <div class="program-star">★ Combined Honours allows deep cross-disciplinary training in both chemistry and biology</div>
      </div>
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Chemistry — Bio-organic (BSc Major or Honours)</div>
        <div class="program-desc">Biosynthesis of natural products, anticancer drug synthesis, NMR structural determination, medicinal chemistry, enzyme mechanisms. Major: suitable for pre-medicine. Honours: research thesis, suitable for PhD pathway.</div>
        <div class="program-star">★ Bio-organic Honours: one of the most direct medicinal chemistry pathways at McGill</div>
      </div>
    </div>
  </div>

  <!-- Molecular Genetics & Cell Biology -->
  <div class="program-group">
    <div class="program-group-title">Molecular Genetics, Cell &amp; Molecular Biology</div>
    <div class="program-group-sub">U of T — St. George Campus</div>
    <div class="program-cols cols-2">
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Molecular Genetics &amp; Microbiology (HBSc Major or Specialist)</div>
        <div class="program-desc">Two streams from Year 3: Genetics (gene regulation, cancer genetics, bioinformatics) or Microbiology (bacterial physiology, virology, antibiotic resistance). Specialist: MGY479Y1 research project. Strong PhD pipeline.</div>
        <div class="program-star">★ Research retreat: Specialist students attend annual faculty-student retreat</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Cell &amp; Molecular Biology (HBSc Major or Specialist)</div>
        <div class="program-desc">Cell structure, molecular signalling, gene regulation, cell cycle control, developmental biology, and cancer biology. Dept of Cell &amp; Systems Biology. Specialist: CSB470Y1 research project (Year 4). ROP + UTORIP research access.</div>
        <div class="program-star">★ Dept of Cell &amp; Systems Biology — cross-disciplinary research hub</div>
      </div>
    </div>
  </div>

  <!-- Human Biology, Pathobiology, Neuroscience, Anatomy, Biotech, Integrated Sci -->
  <div class="program-group">
    <div class="program-group-title">Interdisciplinary &amp; Specialist Programs</div>
    <div class="program-group-sub">UBC · McGill · U of T</div>
    <div class="program-cols cols-3">
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Human Biology — Health &amp; Disease (HBSc)</div>
        <div class="program-desc">Molecular biology, biochemistry, physiology, and social sciences through the lens of human health and disease. Covers cancer, CVD, diabetes, neurological disorders. Specialist: HMB490Y1 capstone. Strong MCAT preparation.</div>
        <div class="program-star">★ One of U of T's most popular pre-medicine programs</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Pathobiology (HBSc Major or Specialist)</div>
        <div class="program-desc">Molecular pathology, cancer biology, immunopathology, clinical biochemistry, infectious disease. Affiliated with UHN — one of the world's largest hospital-based research networks. Specialist: LMP481Y1 research project.</div>
        <div class="program-star">★ Direct access to UHN hospital research infrastructure</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T · UTSC</div>
        <div class="program-name">Medicinal &amp; Biological Chemistry (HBSc — UTSC)</div>
        <div class="program-desc">Analytical, inorganic, organic chemistry, biochemistry, biology, calculus, and physics — all applied to chemistry of living systems and drug development. Health Sciences stream → Certificate in Pathways to Health Professions.</div>
        <div class="program-star">★ Only program named 'Medicinal Chemistry' at U of T — UTSC Co-op available</div>
      </div>
    </div>
    <div class="program-cols cols-3" style="margin-top:1rem;">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Neuroscience (BSc Major)</div>
        <div class="program-desc">Tri-faculty program covering neural basis of behaviour, cognition, and disease. Two streams: Cellular &amp; Molecular Neuroscience (pharmacology, ion channels, CNS drug targets) or Behavioural &amp; Cognitive Neuroscience.</div>
        <div class="program-star">★ Cellular &amp; Molecular stream directly relevant to CNS drug development</div>
      </div>
      <div class="program-card uoft">
        <div class="program-uni-tag">U of T</div>
        <div class="program-name">Neuroscience — Human Biology (HBSc)</div>
        <div class="program-desc">Molecular, cellular, and systems neuroscience with applications to neurological disease and CNS drug development. Specialist: HMB490Y1 research project. Linked to Krembil Research Institute and Donnelly Centre.</div>
        <div class="program-star">★ Connected to Krembil Research Institute — world-class CNS research</div>
      </div>
      <div class="program-card mcgill">
        <div class="program-uni-tag">McGill</div>
        <div class="program-name">Anatomy &amp; Cell Biology (BSc Major or Honours)</div>
        <div class="program-desc">Cell structure, tissue biology, stem cell biology, regenerative medicine, cancer biology, developmental biology. One of McGill's five official Biomedical BSc programs. Honours: ANAT 396 research project.</div>
        <div class="program-star">★ One of McGill's five official Biomedical BSc programs — Faculty of Medicine affiliated</div>
      </div>
    </div>
    <div class="program-cols cols-2" style="margin-top:1rem;">
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Biotechnology Honours (BSc — UBC/BCIT Joint)</div>
        <div class="program-desc">5-year joint degree between UBC and BCIT. Molecular genetics, bioprocessing, fermentation, bioinformatics, biomanufacturing, regulatory affairs, IP. Includes 16 months mandatory co-op. Dual credential: UBC BSc + BCIT.</div>
        <div class="program-star">★ 16 months mandatory co-op — most industry-ready program in this guide</div>
      </div>
      <div class="program-card ubc">
        <div class="program-uni-tag">UBC</div>
        <div class="program-name">Integrated Sciences (BSc)</div>
        <div class="program-desc">UBC's most flexible science degree — students design their own specialisation combining 2+ disciplines with faculty approval. Requires written proposal and faculty advisor interview. Best for students with a specific interdisciplinary research focus.</div>
        <div class="program-star">★ Most flexible BSc at UBC — student-designed specialisation</div>
      </div>
    </div>
  </div>

</div>

<!-- ── SCRIPT ───────────────────────────────────────────────── -->
<script>
  function showTab(id) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    event.currentTarget.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
