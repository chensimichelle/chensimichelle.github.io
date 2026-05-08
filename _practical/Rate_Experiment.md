---
layout: page
title: Rate Determination Practical
description: CIE A-Level Chemistry 9701 · Thiosulfate Clock Reaction
img: assets/img/chemistrypracticalcover.jpg
permalink: /practical/rate-experiment/
---

<style>
.guide-nav{display:flex;gap:6px;flex-wrap:wrap;margin:1.5rem 0 0.4rem}
.guide-nav button{padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer;border:1px solid #ccc;background:#fff;color:#555;font-family:monospace;letter-spacing:0.02em;transition:all 0.15s}
.guide-nav button.on{background:#1D9E75;color:#fff;font-weight:500;border-color:#1D9E75}
.g-pnl{display:none}.g-pnl.on{display:block}
.sec-label{font-family:monospace;font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#888;margin-bottom:0.85rem;padding-bottom:0.4rem;border-bottom:1px solid #e8e8e8}
.g-card{background:#fff;border:1px solid #e8e8e8;border-radius:10px;padding:1rem 1.3rem;margin-bottom:0.85rem}
.g-card.ca-teal{border-left:3px solid #1D9E75;border-radius:0 10px 10px 0}
.g-card.ca-amber{border-left:3px solid #EF9F27;border-radius:0 10px 10px 0}
.g-card.ca-blue{border-left:3px solid #378ADD;border-radius:0 10px 10px 0}
.g-card.ca-coral{border-left:3px solid #D85A30;border-radius:0 10px 10px 0}
.g-card.ca-red{border-left:3px solid #E24B4A;border-radius:0 10px 10px 0}
.g-ct{font-size:14px;font-weight:600;color:#111;margin-bottom:0.3rem}
.g-cb{font-size:13px;color:#555;line-height:1.7}
.g-fm{font-family:monospace;font-size:12px;background:#f7f7f7;border:1px solid #e8e8e8;border-radius:6px;padding:0.5rem 0.9rem;margin:0.5rem 0;color:#111;display:block}
.g-sr{display:flex;gap:0.6rem;align-items:flex-start;margin-bottom:0.6rem}
.g-sn{font-family:monospace;font-size:11px;font-weight:500;color:#0F6E56;background:#E1F5EE;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.g-st{font-size:13px;color:#555;line-height:1.6}
.g-tip{background:#fafafa;border-radius:6px;padding:0.55rem 0.85rem;margin-top:0.55rem;display:flex;gap:8px;align-items:flex-start}
.g-tl{font-family:monospace;font-size:10px;font-weight:500;letter-spacing:0.08em;color:#854F0B;text-transform:uppercase;flex-shrink:0;margin-top:2px}
.g-tt{font-size:12px;color:#555;line-height:1.6}
.g-warn{background:#FAEEDA;border-radius:6px;padding:0.55rem 0.85rem;margin-top:0.55rem;display:flex;gap:8px;align-items:flex-start}
.g-wt{font-size:12px;color:#633806;line-height:1.6}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;margin-top:0.65rem}
.g-mc{background:#f7f7f7;border-radius:6px;padding:0.65rem;font-size:12px;color:#555;line-height:1.5}
.g-mc strong{color:#111;font-weight:600;display:block;margin-bottom:3px;font-size:12px}
.tabs{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:1rem}
.tabs button{padding:5px 13px;border-radius:6px;font-size:12px;cursor:pointer;border:1px solid #ccc;background:#fff;color:#555;font-family:monospace;letter-spacing:0.02em}
.tabs button.on{background:#E1F5EE;color:#0F6E56;font-weight:600;border-color:#1D9E75}
.t-pnl{display:none}.t-pnl.on{display:block}
.g-tbl{overflow-x:auto;margin:0.5rem 0}
table.gt{width:100%;border-collapse:collapse;font-size:12px;font-family:monospace;table-layout:fixed}
table.gt th{background:#f7f7f7;color:#666;font-weight:500;font-size:11px;letter-spacing:0.05em;padding:6px 8px;border:1px solid #e8e8e8;text-align:center}
table.gt td{padding:6px 8px;border:1px solid #e8e8e8;text-align:center;color:#111}
table.gt td.g-rl{font-size:11px;color:#666;text-align:left;font-family:sans-serif;font-weight:500;width:40%}
.g-cbad{background:#FCEBEB;color:#791F1F}
.g-cok{background:#E1F5EE;color:#085041}
.g-an{display:flex;gap:7px;align-items:flex-start;margin:5px 0}
.g-ai{width:17px;height:17px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;flex-shrink:0;margin-top:2px}
.g-aibad{background:#FCEBEB;color:#791F1F}
.g-aiok{background:#E1F5EE;color:#085041}
.g-at{font-size:12px;color:#555;line-height:1.6}
.g-at strong{color:#111;font-weight:600}
.vd{display:inline-flex;align-items:center;gap:5px;font-family:monospace;font-size:11px;font-weight:500;padding:2px 9px;border-radius:4px;letter-spacing:0.04em;margin-bottom:0.55rem}
.vbad{background:#FCEBEB;color:#791F1F}
.vok{background:#E1F5EE;color:#085041}
.g-rb{background:#f7f7f7;border-radius:6px;padding:0.6rem 0.85rem;margin:0.55rem 0}
.g-rr{display:flex;justify-content:space-between;align-items:center;padding:3px 0;border-bottom:1px solid #ececec;gap:10px}
.g-rr:last-child{border-bottom:none}
.g-rd{font-size:12px;color:#555;flex:1}
.rv-bad{font-family:monospace;font-size:11px;color:#791F1F;background:#FCEBEB;padding:2px 6px;border-radius:4px;white-space:nowrap}
.rv-ok{font-family:monospace;font-size:11px;color:#085041;background:#E1F5EE;padding:2px 6px;border-radius:4px;white-space:nowrap}
.ex-block{background:#f7f7f7;border:1px solid #e8e8e8;border-radius:6px;padding:0.65rem 0.9rem;margin-top:0.6rem}
.ex-title{font-size:12px;font-weight:600;color:#111;margin-bottom:0.4rem}
.checklist{list-style:none;padding:0;margin:0}
.checklist li{display:flex;align-items:flex-start;gap:8px;padding:5px 8px;border-bottom:1px solid #f3f4f6;font-size:13px;color:#555}
.checklist li:last-child{border-bottom:none}
.checklist li:nth-child(even){background:#f7f7f7}
.checklist .cb{width:14px;height:14px;border:1.5px solid #ccc;border-radius:3px;flex-shrink:0;margin-top:2px}
@media(max-width:520px){.g2{grid-template-columns:1fr}}
</style>

<p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:1rem;">
In this experiment, you investigate how the rate of reaction between sodium thiosulfate and hydrochloric acid depends on the concentration of thiosulfate ions. The reaction produces a fine suspension of sulfur, which gradually turns the solution cloudy. By timing how long it takes for a cross beneath the flask to disappear, you obtain a measure of the reaction rate (1/t) at each concentration. You then plot log(1/t) against log(volume) to find the order of reaction from the gradient.
</p>

<div style="display:inline-flex;align-items:center;gap:6px;background:#E1F5EE;border:1px solid #1D9E75;border-radius:6px;padding:5px 12px;margin-bottom:0.6rem;">
  <span style="font-size:14px;">👇</span>
  <span style="font-size:12px;color:#0F6E56;font-weight:600;font-family:monospace;letter-spacing:0.04em;">Click a section below to explore</span>
</div>

<div class="guide-nav">
  <button class="on" onclick="showSec('chemistry',this)">01 The chemistry</button>
  <button onclick="showSec('table',this)">02 Results table</button>
  <button onclick="showSec('graph',this)">03 Graph &amp; gradient</button>
  <button onclick="showSec('uncertainty',this)">04 Uncertainty</button>
  <button onclick="showSec('checklist',this)">05 Checklist</button>
</div>

<!-- ── 01 THE CHEMISTRY ─────────────────────────────────────── -->
<div id="sec-chemistry" class="g-pnl on">
  <div class="sec-label">01 — the chemistry</div>

  <div class="g-card ca-blue">
    <div class="g-ct">The reaction</div>
    <code class="g-fm">S₂O₃²⁻(aq) + 2H⁺(aq) → S(s) + SO₂(g) + H₂O(l)</code>
    <div class="g-cb">Thiosulfate ions decompose in acid to form a fine suspension of sulfur. The sulfur makes the solution cloudy — the reaction is timed until the cross beneath the flask is <strong>just no longer visible</strong>.</div>
  </div>

  <div class="g-card ca-teal">
    <div class="g-ct">Why use 1/t as a measure of rate?</div>
    <div class="g-cb">A faster reaction produces the fixed amount of sulfur in less time. So <strong>rate ∝ 1/t</strong> — the shorter the time, the faster the rate.</div>
    <div class="g-tip"><span class="g-tl">Key point</span><span class="g-tt">You are not measuring the actual rate in mol dm⁻³ s⁻¹ — you are using 1/t as a proportional measure. This is valid as long as the endpoint (same amount of sulfur) is consistent across all experiments.</span></div>
  </div>

  <div class="g-card ca-teal">
    <div class="g-ct">Why use volume as a measure of concentration?</div>
    <div class="g-cb">Concentration ∝ volume of solution used, <strong>provided the total volume is kept constant</strong> in every experiment. This is why you add water to make the total up to 55 cm³ each time.</div>
    <div class="g-warn"><span class="g-tl" style="color:#993C1D">Critical</span><span class="g-wt">Total volume must be exactly the same in every experiment. Only ONE variable (e.g. volume of FA 1) should change at a time. All other volumes must be adjusted accordingly.</span></div>
  </div>

  <div class="g-card ca-amber">
    <div class="g-ct">Why plot log(1/t) vs log(V)?</div>
    <div class="g-cb">The rate equation is <strong>rate = k[S₂O₃²⁻]ⁿ</strong>, which gives <strong>1/t = k·Vⁿ</strong>. Taking logs of both sides:</div>
    <code class="g-fm">log(1/t) = n·log(V) + log(k)</code>
    <div class="g-cb">This is y = mx + c — a straight line where the <strong>gradient = n = order of reaction</strong>. Plotting 1/t vs V directly gives a curve, which is much harder to interpret.</div>
    <div class="g-tbl"><table class="gt">
      <tr><th>Plot</th><th>Graph shape</th><th>Can find order?</th></tr>
      <tr><td>1/t vs V</td><td>Curve</td><td class="g-cbad">✕ Not easily</td></tr>
      <tr><td>log(1/t) vs log(V)</td><td>Straight line</td><td class="g-cok">✓ Gradient = order</td></tr>
    </table></div>
  </div>

  <div class="g-card ca-coral">
    <div class="g-ct">Investigating H⁺ concentration</div>
    <div class="g-cb">To test the effect of acid concentration, keep the volume of FA 1 constant (same thiosulfate concentration) and change the volume of FA 2 (acid) only.</div>
    <div class="g-rb" style="margin-top:0.6rem">
      <div class="g-rr"><span class="g-rd">FA 1 volume</span><span class="rv-ok">constant — same as Expt 2</span></div>
      <div class="g-rr"><span class="g-rd">FA 2 volume</span><span class="rv-ok">changes between experiments</span></div>
      <div class="g-rr"><span class="g-rd">Water top-up</span><span class="rv-ok">55 − V(FA1) − V(FA2)</span></div>
    </div>
    <div class="g-tip"><span class="g-tl">Expected result</span><span class="g-tt">Little change in reaction time as acid concentration is doubled — rate is approximately zero order with respect to H⁺.</span></div>
  </div>
</div>

<!-- ── 02 RESULTS TABLE ────────────────────────────────────── -->
<div id="sec-table" class="g-pnl">
  <div class="sec-label">02 — results table (headings &amp; layout)</div>

  <div class="tabs">
    <button class="on" onclick="showTab('thead',this)">Headings</button>
    <button onclick="showTab('tconc',this)">Concentration range</button>
    <button onclick="showTab('tvt',this)">Vt accuracy check</button>
  </div>

  <div id="tp-thead" class="t-pnl on">
    <div class="vd vbad">✕ Wrong headings</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th>Vol FA1</th><th>Water</th><th class="g-cbad">T</th><th class="g-cbad">1/T</th><th>log V</th></tr>
        <tr><td>50</td><td>5</td><td class="g-cbad">35</td><td class="g-cbad">0.029</td><td>1.70</td></tr>
        <tr><td>10</td><td>45</td><td class="g-cbad">180</td><td class="g-cbad">0.006</td><td>1.00</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>No units</strong> — every heading needs a unit. "Vol FA1" should be "Volume of FA 1 / cm³".</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>"T" for time</strong> — must use lowercase <strong>t</strong>. Capital T conventionally means temperature.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>1/T has no unit</strong> — should be "1/t / s⁻¹" or "log(1/t)".</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Time not to nearest second</strong> — 35 and 180 are fine here, but values like 35.4 suggest false precision from a stopwatch.</div></div>
      </div>
    </div>

    <div class="vd vok" style="margin-top:0.8rem">✓ Correct headings</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th>Volume of FA 1 / cm³</th><th>Volume of water / cm³</th><th class="g-cok">t / s</th><th class="g-cok">1/t / s⁻¹</th><th>log(V / cm³)</th><th>log(1/t / s⁻¹)</th></tr>
        <tr><td>50</td><td>5</td><td class="g-cok">35</td><td class="g-cok">0.0286</td><td>1.699</td><td>−1.544</td></tr>
        <tr><td>10</td><td>45</td><td class="g-cok">180</td><td class="g-cok">0.00556</td><td>1.000</td><td>−2.255</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">Full column names with /unit notation. Lowercase t for time.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">1/t given as s⁻¹. Log values given to 3 dp.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">Table drawn in advance with all columns before experiments begin.</div></div>
      </div>
    </div>
  </div>

  <div id="tp-tconc" class="t-pnl">
    <div class="g-card ca-blue">
      <div class="g-ct">Choosing your concentration range</div>
      <div class="g-cb">You need a minimum of 5 experiments total (Expts 1 &amp; 2 plus at least 3 additional). Volumes of FA 1 should be spread evenly across the full range.</div>
    </div>

    <div class="vd vbad">✕ Bunched volumes — loses graph mark</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th>Experiment</th><th>Volume of FA 1 / cm³</th></tr>
        <tr><td>1</td><td>50</td></tr>
        <tr><td>2</td><td>10</td></tr>
        <tr><td class="g-cbad">3</td><td class="g-cbad">40</td></tr>
        <tr><td class="g-cbad">4</td><td class="g-cbad">42</td></tr>
        <tr><td class="g-cbad">5</td><td class="g-cbad">46</td></tr>
      </table></div>
      <div class="g-an" style="margin-top:0.65rem"><div class="g-ai g-aibad">✕</div><div class="g-at">Experiments 3–5 are bunched between 40 and 46. Points on the graph will be too close together — the line spans less than 20×20 small squares and the gradient mark is lost.</div></div>
    </div>

    <div class="vd vok" style="margin-top:0.8rem">✓ Evenly spread volumes</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th>Experiment</th><th>Volume of FA 1 / cm³</th></tr>
        <tr><td>1</td><td>50</td></tr>
        <tr><td>2</td><td>10</td></tr>
        <tr><td class="g-cok">3</td><td class="g-cok">20</td></tr>
        <tr><td class="g-cok">4</td><td class="g-cok">30</td></tr>
        <tr><td class="g-cok">5</td><td class="g-cok">40</td></tr>
      </table></div>
      <div class="g-an" style="margin-top:0.65rem"><div class="g-ai g-aiok">✓</div><div class="g-at">Volumes spread evenly across 10–50 cm³. Points on the log–log graph will span the full axis range, giving a reliable gradient.</div></div>
    </div>
  </div>

  <div id="tp-tvt" class="t-pnl">
    <div class="g-card ca-blue">
      <div class="g-ct">The Vt accuracy check</div>
      <div class="g-cb">If the reaction is first order, then concentration × time = constant. Since volume ∝ concentration, <strong>V × t should be approximately constant</strong> across experiments. The examiner checks Vt for Expt 1 and your two largest-volume additional experiments.</div>
    </div>
    <div class="g-tbl"><table class="gt" style="margin-top:0.5rem">
      <tr><th>Vt difference</th><th>Marks awarded</th></tr>
      <tr><td>Both within 10% of the larger of the closest pair</td><td class="g-cok">2 marks ✓</td></tr>
      <tr><td>Difference between 10% and 20%</td><td>1 mark</td></tr>
      <tr><td>Difference greater than 20%</td><td class="g-cbad">0 marks ✕</td></tr>
    </table></div>
    <div class="ex-block" style="margin-top:0.75rem">
      <div class="ex-title">Worked example</div>
      <div class="g-rb">
        <div class="g-rr"><span class="g-rd">V = 50, t = 35 s</span><span class="rv-ok">Vt = 1750</span></div>
        <div class="g-rr"><span class="g-rd">V = 40, t = 55 s</span><span class="rv-ok">Vt = 2200</span></div>
        <div class="g-rr"><span class="g-rd">V = 30, t = 69 s</span><span class="rv-ok">Vt = 2070</span></div>
      </div>
      <div class="g-cb" style="margin-top:0.5rem;font-size:12px;">Closest pair: 2200 and 2070. Difference = 130. 10% of 2200 = 220. Since 130 &lt; 220 → <strong>full marks ✓</strong></div>
    </div>
  </div>
</div>

<!-- ── 03 GRAPH & GRADIENT ─────────────────────────────────── -->
<div id="sec-graph" class="g-pnl">
  <div class="sec-label">03 — graph &amp; gradient</div>

  <div class="tabs">
    <button class="on" onclick="showTab('gplot',this)">Plotting</button>
    <button onclick="showTab('ggrad',this)">Gradient</button>
  </div>

  <div id="tp-gplot" class="t-pnl on">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:0.85rem">

      <div class="g-card ca-red" style="padding:0.75rem">
        <div class="vd vbad">✕ Wrong</div>
        <svg width="100%" viewBox="0 0 280 230" role="img">
          <title>Wrong graph: axes swapped, bunched points, dot-to-dot, forced through origin</title>
          <desc>Log-log graph with common mistakes: axes swapped, points bunched in top-right, dots connected directly, and line forced through origin</desc>
          <defs><marker id="aw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
          <rect x="36" y="14" width="230" height="188" fill="#fff" stroke="#e8e8e8" stroke-width="0.5"/>
          <line x1="36" y1="202" x2="266" y2="202" stroke="#555" stroke-width="1" marker-end="url(#aw)"/>
          <line x1="36" y1="202" x2="36" y2="14" stroke="#555" stroke-width="1" marker-end="url(#aw)"/>
          <text x="151" y="220" text-anchor="middle" font-size="10" fill="#791F1F" font-family="monospace" font-weight="600">log(1/t)</text>
          <text x="12" y="115" text-anchor="middle" font-size="10" fill="#791F1F" font-family="monospace" font-weight="600" transform="rotate(-90,12,115)">log(V)</text>
          <text x="20" y="55"  text-anchor="end" font-size="8" fill="#888" font-family="monospace">1.5</text>
          <text x="20" y="105" text-anchor="end" font-size="8" fill="#888" font-family="monospace">1.0</text>
          <text x="20" y="155" text-anchor="end" font-size="8" fill="#888" font-family="monospace">0.5</text>
          <text x="20" y="205" text-anchor="end" font-size="8" fill="#888" font-family="monospace">0</text>
          <line x1="36" y1="202" x2="266" y2="14" stroke="#E24B4A" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
          <polyline points="185,112 200,97 215,83 225,74 240,61" fill="none" stroke="#E24B4A" stroke-width="1.2"/>
          <circle cx="185" cy="112" r="3.5" fill="#E24B4A" stroke="#fff" stroke-width="0.5"/>
          <circle cx="200" cy="97"  r="3.5" fill="#E24B4A" stroke="#fff" stroke-width="0.5"/>
          <circle cx="215" cy="83"  r="3.5" fill="#E24B4A" stroke="#fff" stroke-width="0.5"/>
          <circle cx="225" cy="74"  r="3.5" fill="#E24B4A" stroke="#fff" stroke-width="0.5"/>
          <circle cx="240" cy="61"  r="3.5" fill="#E24B4A" stroke="#fff" stroke-width="0.5"/>
          <rect x="148" y="55" width="10" height="8" fill="#FAEEDA" stroke="#EF9F27" stroke-width="0.5" rx="1"/>
          <text x="160" y="62" font-size="8" fill="#854F0B" font-family="monospace">bunched!</text>
          <line x1="158" y1="59" x2="220" y2="72" stroke="#EF9F27" stroke-width="0.5" stroke-dasharray="2 2"/>
          <text x="40" y="40" font-size="8" fill="#791F1F" font-family="monospace">axes swapped</text>
          <circle cx="36" cy="202" r="3" fill="none" stroke="#791F1F" stroke-width="1"/>
          <text x="38" y="192" font-size="7" fill="#791F1F" font-family="monospace">forced through 0</text>
        </svg>
        <div class="g-an" style="margin-top:0.5rem"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Axes swapped</strong> — log(V) must be on the x-axis, log(1/t) on the y-axis.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Points bunched</strong> — cover less than half the axis range.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Dot-to-dot</strong> — points joined directly instead of a single best-fit line.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Forced through origin</strong> — line drawn to (0,0) regardless of data.</div></div>
      </div>

      <div class="g-card ca-teal" style="padding:0.75rem">
        <div class="vd vok">✓ Correct</div>
        <svg width="100%" viewBox="0 0 280 230" role="img">
          <title>Correct graph: log(1/t) on y-axis, log(V) on x-axis, evenly spread points, best-fit line, construction triangle</title>
          <desc>A correctly drawn log-log graph with five evenly spread data points, a best-fit straight line, and a large construction triangle for the gradient</desc>
          <defs><marker id="ag" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
          <rect x="36" y="14" width="230" height="188" fill="#fff" stroke="#e8e8e8" stroke-width="0.5"/>
          <line x1="36"  y1="14" x2="36"  y2="202" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="86"  y1="14" x2="86"  y2="202" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="136" y1="14" x2="136" y2="202" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="186" y1="14" x2="186" y2="202" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="236" y1="14" x2="236" y2="202" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="36" y1="52"  x2="266" y2="52"  stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="36" y1="102" x2="266" y2="102" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="36" y1="152" x2="266" y2="152" stroke="#e8e8e8" stroke-width="0.3" stroke-dasharray="3 3"/>
          <line x1="36" y1="202" x2="266" y2="202" stroke="#555" stroke-width="1" marker-end="url(#ag)"/>
          <line x1="36" y1="202" x2="36"  y2="14"  stroke="#555" stroke-width="1" marker-end="url(#ag)"/>
          <text x="151" y="220" text-anchor="middle" font-size="10" fill="#085041" font-family="monospace" font-weight="600">log(V / cm³)</text>
          <text x="12" y="115" text-anchor="middle" font-size="10" fill="#085041" font-family="monospace" font-weight="600" transform="rotate(-90,12,115)">log(1/t / s⁻¹)</text>
          <text x="20" y="55"  text-anchor="end" font-size="8" fill="#888" font-family="monospace">1.6</text>
          <text x="20" y="105" text-anchor="end" font-size="8" fill="#888" font-family="monospace">1.4</text>
          <text x="20" y="155" text-anchor="end" font-size="8" fill="#888" font-family="monospace">1.2</text>
          <text x="20" y="205" text-anchor="end" font-size="8" fill="#888" font-family="monospace">1.0</text>
          <text x="36"  y="210" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">-2.5</text>
          <text x="86"  y="210" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">-2.0</text>
          <text x="136" y="210" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">-1.7</text>
          <text x="186" y="210" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">-1.5</text>
          <text x="236" y="210" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">-1.2</text>
          <line x1="55" y1="192" x2="248" y2="28" stroke="#1D9E75" stroke-width="1.5"/>
          <circle cx="64"  cy="184" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
          <circle cx="106" cy="152" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
          <circle cx="148" cy="120" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
          <circle cx="192" cy="85"  r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
          <circle cx="236" cy="50"  r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
          <line x1="80" y1="170" x2="220" y2="170" stroke="#378ADD" stroke-width="0.8" stroke-dasharray="3 2"/>
          <line x1="220" y1="170" x2="220" y2="62"  stroke="#378ADD" stroke-width="0.8" stroke-dasharray="3 2"/>
          <text x="150" y="182" text-anchor="middle" font-size="8" fill="#185FA5" font-family="monospace">Δx</text>
          <text x="228" y="118" text-anchor="start"  font-size="8" fill="#185FA5" font-family="monospace">Δy</text>
          <rect x="95" y="72" width="62" height="22" rx="3" fill="#E6F1FB" stroke="#378ADD" stroke-width="0.5"/>
          <text x="126" y="87" text-anchor="middle" font-size="8" fill="#0C447C" font-family="monospace">grad ≈ 1.0</text>
        </svg>
        <div class="g-an" style="margin-top:0.5rem"><div class="g-ai g-aiok">✓</div><div class="g-at"><strong>Correct axes</strong> — log(1/t) on y, log(V) on x, with units.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at"><strong>Evenly spread</strong> — five points spanning the full axis range.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at"><strong>Best-fit line</strong> — single straight line through the data.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at"><strong>Construction triangle</strong> — large Δx and Δy for accurate gradient.</div></div>
      </div>

    </div>
  </div>

  <div id="tp-ggrad" class="t-pnl">
    <div class="vd vbad">✕ Wrong gradient method</div>
    <div class="g-card ca-red">
      <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Using two data points</strong> — always use two points on the best-fit line, not original data points.</div></div>
      <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Small triangle</strong> — construction lines must span at least half the length of the line. A small triangle gives an inaccurate gradient.</div></div>
      <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Answer given as integer</strong> — gradient must be given to at least 1 decimal place (e.g. 1.0, not just 1).</div></div>
    </div>

    <div class="vd vok" style="margin-top:0.8rem">✓ How to draw construction lines</div>
    <div class="g-card ca-teal">
      <svg width="100%" viewBox="0 0 560 260" role="img">
        <title>How to draw construction lines for gradient calculation on a log-log graph</title>
        <desc>Step-by-step illustration showing two points chosen far apart on the best-fit line, horizontal and vertical construction lines drawn to form a right-angle triangle, and the gradient calculated as delta-y over delta-x</desc>
        <defs>
          <marker id="agd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </marker>
        </defs>

        <rect x="48" y="14" width="280" height="220" fill="#fff" stroke="#e8e8e8" stroke-width="0.5"/>
        <line x1="48" y1="34"  x2="328" y2="34"  stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="48" y1="64"  x2="328" y2="64"  stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="48" y1="94"  x2="328" y2="94"  stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="48" y1="124" x2="328" y2="124" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="48" y1="154" x2="328" y2="154" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="48" y1="184" x2="328" y2="184" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="88"  y1="14" x2="88"  y2="234" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="128" y1="14" x2="128" y2="234" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="168" y1="14" x2="168" y2="234" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="208" y1="14" x2="208" y2="234" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="248" y1="14" x2="248" y2="234" stroke="#f0f0f0" stroke-width="0.5"/>
        <line x1="288" y1="14" x2="288" y2="234" stroke="#f0f0f0" stroke-width="0.5"/>

        <line x1="48" y1="234" x2="330" y2="234" stroke="#555" stroke-width="1" marker-end="url(#agd)"/>
        <line x1="48" y1="234" x2="48"  y2="12"  stroke="#555" stroke-width="1" marker-end="url(#agd)"/>

        <text x="188" y="248" text-anchor="middle" font-size="9" fill="#444" font-family="monospace">log(V / cm³)</text>
        <text x="16" y="124" text-anchor="middle" font-size="9" fill="#444" font-family="monospace" transform="rotate(-90,16,124)">log(1/t / s⁻¹)</text>

        <text x="42" y="238" text-anchor="end" font-size="7" fill="#888" font-family="monospace">1.0</text>
        <text x="42" y="188" text-anchor="end" font-size="7" fill="#888" font-family="monospace">1.2</text>
        <text x="42" y="138" text-anchor="end" font-size="7" fill="#888" font-family="monospace">1.4</text>
        <text x="42" y="88"  text-anchor="end" font-size="7" fill="#888" font-family="monospace">1.6</text>
        <text x="42" y="38"  text-anchor="end" font-size="7" fill="#888" font-family="monospace">1.8</text>
        <text x="88"  y="243" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">1.0</text>
        <text x="128" y="243" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">1.2</text>
        <text x="168" y="243" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">1.4</text>
        <text x="208" y="243" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">1.6</text>
        <text x="248" y="243" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">1.8</text>
        <text x="288" y="243" text-anchor="middle" font-size="7" fill="#888" font-family="monospace">2.0</text>

        <line x1="72" y1="220" x2="308" y2="28" stroke="#1D9E75" stroke-width="1.5"/>

        <circle cx="88"  cy="206" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
        <circle cx="128" cy="174" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
        <circle cx="168" cy="142" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
        <circle cx="208" cy="110" r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>
        <circle cx="248" cy="78"  r="3.5" fill="#1D9E75" stroke="#fff" stroke-width="1"/>

        <circle cx="84"  cy="209" r="5" fill="none" stroke="#378ADD" stroke-width="1.5"/>
        <circle cx="300" cy="38"  r="5" fill="none" stroke="#378ADD" stroke-width="1.5"/>

        <line x1="84" y1="209" x2="300" y2="209" stroke="#378ADD" stroke-width="1" stroke-dasharray="5 3"/>
        <line x1="300" y1="209" x2="300" y2="38"  stroke="#D85A30" stroke-width="1" stroke-dasharray="5 3"/>

        <rect x="158" y="213" width="34" height="14" rx="3" fill="#E6F1FB"/>
        <text x="175" y="223" text-anchor="middle" font-size="8" fill="#0C447C" font-family="monospace" font-weight="600">Δx = 1.08</text>

        <rect x="304" y="116" width="34" height="14" rx="3" fill="#FAECE7"/>
        <text x="321" y="126" text-anchor="middle" font-size="8" fill="#712B13" font-family="monospace" font-weight="600">Δy = 1.08</text>

        <polygon points="295,209 300,209 300,214" fill="none" stroke="#888" stroke-width="0.8"/>

        <text x="175" y="202" text-anchor="middle" font-size="8" fill="#185FA5" font-family="monospace">① pick point on line</text>
        <text x="175" y="191" text-anchor="middle" font-size="7" fill="#185FA5" font-family="monospace">(1.02, −2.10)</text>

        <text x="318" y="30" text-anchor="start" font-size="8" fill="#185FA5" font-family="monospace">② pick point on line</text>
        <text x="318" y="40" text-anchor="start" font-size="7" fill="#185FA5" font-family="monospace">(2.10, −1.02)</text>

        <rect x="348" y="95" width="200" height="130" rx="8" fill="#f7f7f7" stroke="#e8e8e8" stroke-width="0.5"/>
        <text x="448" y="115" text-anchor="middle" font-size="9" fill="#111" font-family="monospace" font-weight="600">gradient calculation</text>
        <line x1="358" y1="121" x2="538" y2="121" stroke="#e8e8e8" stroke-width="0.5"/>
        <text x="358" y="136" font-size="8" fill="#555" font-family="monospace">Δx = 2.10 − 1.02 = 1.08</text>
        <text x="358" y="152" font-size="8" fill="#555" font-family="monospace">Δy = −1.02 − (−2.10)</text>
        <text x="358" y="164" font-size="8" fill="#555" font-family="monospace">   = 1.08</text>
        <line x1="358" y1="172" x2="538" y2="172" stroke="#e8e8e8" stroke-width="0.5"/>
        <text x="358" y="186" font-size="9" fill="#111" font-family="monospace" font-weight="600">grad = Δy/Δx</text>
        <text x="358" y="200" font-size="9" fill="#111" font-family="monospace" font-weight="600">     = 1.08/1.08 = 1.0</text>
        <rect x="348" y="207" width="200" height="14" rx="0 0 8 8" fill="#E1F5EE" stroke="#5DCAA5" stroke-width="0.5"/>
        <text x="448" y="218" text-anchor="middle" font-size="8" fill="#085041" font-family="monospace" font-weight="600">order of reaction = 1.0 ✓</text>

        <text x="348" y="72" font-size="8" fill="#444" font-family="monospace">③ draw horizontal line from ①</text>
        <text x="348" y="84" font-size="8" fill="#444" font-family="monospace">④ draw vertical line from ②</text>
        <text x="348" y="96" font-size="8" fill="#444" font-family="monospace">⑤ read off Δx and Δy</text>
      </svg>
      <div class="g-sr" style="margin-top:0.75rem">
        <div class="g-sn">1</div>
        <div class="g-st">Choose two points <strong>on the best-fit line</strong> (not data points), as far apart as possible — ideally spanning more than half the line length.</div>
      </div>
      <div class="g-sr">
        <div class="g-sn">2</div>
        <div class="g-st">From the left point, draw a <strong>horizontal dashed line</strong> to the right. From the right point, draw a <strong>vertical dashed line</strong> downward. They meet at a right angle.</div>
      </div>
      <div class="g-sr">
        <div class="g-sn">3</div>
        <div class="g-st">Read Δx and Δy from the axis scale — not by measuring the page in cm. Calculate <strong>gradient = Δy / Δx</strong> and give to at least 1 decimal place.</div>
      </div>
      <div class="ex-block">
        <div class="ex-title">Worked example</div>
        <div class="g-rb">
          <div class="g-rr"><span class="g-rd">Point 1 on line</span><span class="rv-ok">log V = 1.02,  log(1/t) = −2.10</span></div>
          <div class="g-rr"><span class="g-rd">Point 2 on line</span><span class="rv-ok">log V = 2.10,  log(1/t) = −1.02</span></div>
          <div class="g-rr"><span class="g-rd">Δx</span><span class="rv-ok">2.10 − 1.02 = 1.08</span></div>
          <div class="g-rr"><span class="g-rd">Δy</span><span class="rv-ok">−1.02 − (−2.10) = 1.08</span></div>
          <div class="g-rr"><span class="g-rd">Gradient = order</span><span class="rv-ok">1.08 / 1.08 = 1.0 → first order ✓</span></div>
    </div>
  </div>
</div>
</div>
</div>

<!-- ── 04 UNCERTAINTY ──────────────────────────────────────── -->
<div id="sec-uncertainty" class="g-pnl"> 
  <div class="sec-label">04 — uncertainty &amp; percentage error</div>

  <div class="g-card ca-blue">
    <div class="g-ct">Source of uncertainty in this experiment</div>
    <div class="g-cb">The endpoint — when the cross just disappears — is a judgment call. Different observers may stop the clock at slightly different moments, introducing a human reaction time uncertainty.</div>
  </div>

  <div class="vd vbad">✕ Common mistake</div>
  <div class="g-card ca-red">
    <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Same uncertainty for both experiments:</strong> Writing "uncertainty = ±3 s for all experiments." The uncertainty in seconds may be similar, but the <em>percentage</em> uncertainty is very different.</div></div>
    <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Saying Expt 1 has larger uncertainty</strong> — Expt 1 (large volume, fast reaction) has a smaller percentage uncertainty, not larger.</div></div>
  </div>

  <div class="vd vok" style="margin-top:0.8rem">✓ Correct analysis</div>
  <div class="g-card ca-teal">
    <div class="g-tbl"><table class="gt">
      <tr><th>Experiment</th><th>Reaction speed</th><th>Absolute uncertainty</th><th>% uncertainty</th></tr>
      <tr><td>Expt 1 (large V)</td><td>Fast — clear endpoint</td><td>≤ 3 s</td><td class="g-cok">Smaller</td></tr>
      <tr><td>Expt 2 (small V)</td><td>Slow — gradual endpoint</td><td>≥ 3 s</td><td class="g-cbad">Larger</td></tr>
    </table></div>
    <code class="g-fm">% uncertainty = (uncertainty in seconds / reaction time) × 100</code>
    <div class="g-tip"><span class="g-tl">Why</span><span class="g-tt">Expt 2 has a longer reaction time (e.g. 180 s) so even ±5 s gives only ~2.8%. But if that same ±5 s applies to Expt 1 (t = 35 s), it would be ~14%. The key point is that Expt 2 has a <em>larger</em> percentage uncertainty because the change in cloudiness is more gradual and harder to judge.</span></div>
  </div>
</div>

<!-- ── 05 CHECKLIST ────────────────────────────────────────── -->
<div id="sec-checklist" class="g-pnl">
  <div class="sec-label">05 — quick reference checklist</div>

  <div class="g-card ca-teal">
    <div class="g-ct">Before and during experiments</div>
    <ul class="checklist" style="margin-top:0.5rem">
      <li><span class="cb"></span>Total volume is the same in every experiment (e.g. 55 cm³)</li>
      <li><span class="cb"></span>Table drawn in advance with correct headings and units</li>
      <li><span class="cb"></span>Lowercase t used for time, not T</li>
      <li><span class="cb"></span>Times recorded to the nearest second</li>
      <li><span class="cb"></span>At least 3 extra experiments beyond Expts 1 &amp; 2</li>
      <li><span class="cb"></span>Volumes of FA 1 spread evenly across the full range</li>
    </ul>
  </div>

  <div class="g-card ca-amber">
    <div class="g-ct">Graph and gradient</div>
    <ul class="checklist" style="margin-top:0.5rem">
      <li><span class="cb"></span>log(1/t) on y-axis, log(V) on x-axis</li>
      <li><span class="cb"></span>Points cover more than half of each axis</li>
      <li><span class="cb"></span>All experiments plotted (including Expts 1 &amp; 2)</li>
      <li><span class="cb"></span>Single best-fit straight line drawn, not dot-to-dot</li>
      <li><span class="cb"></span>Construction lines span at least half the line length</li>
      <li><span class="cb"></span>Gradient calculated to ≥ 1 decimal place</li>
    </ul>
  </div>

  <div class="g-card ca-blue">
    <div class="g-ct">Uncertainty and H⁺ investigation</div>
    <ul class="checklist" style="margin-top:0.5rem">
      <li><span class="cb"></span>Uncertainty for Expt 2 stated as larger than for Expt 1</li>
      <li><span class="cb"></span>For H⁺ investigation: only acid volume changes, FA 1 volume constant</li>
      <li><span class="cb"></span>Water adjusted so total volume stays at 55 cm³</li>
      <li><span class="cb"></span>Expected conclusion: rate approximately zero order with respect to H⁺</li>
    </ul>
  </div>
</div>

<script>
function showSec(name, btn) {
  document.querySelectorAll('.g-pnl').forEach(function(p){ p.classList.remove('on'); });
  document.querySelectorAll('.guide-nav button').forEach(function(b){ b.classList.remove('on'); });
  document.getElementById('sec-' + name).classList.add('on');
  if (btn) btn.classList.add('on');
}
function showTab(name, btn) {
  var parentSec = btn.closest('.g-pnl');
  parentSec.querySelectorAll('.t-pnl').forEach(function(p){ p.classList.remove('on'); });
  parentSec.querySelectorAll('.tabs button').forEach(function(b){ b.classList.remove('on'); });
  document.getElementById('tp-' + name).classList.add('on');
  if (btn) btn.classList.add('on');
}
</script>