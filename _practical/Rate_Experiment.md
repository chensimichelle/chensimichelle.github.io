---
layout: page
title: Rate Determination Practical
description: CIE A-Level Chemistry 9701 · Thiosulfate Clock Reaction
img: assets/img/chemistrypracticalcover.jpg
permalink: /practical/rate-experiment/
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Code+Pro:wght@500&display=swap');

  :root {
    --dark:   #1F2937;
    --blue:   #1F4E79;
    --blue-f: #DEEAF1;
    --teal:   #0F6E56; --teal-f: #E1F5EE; --teal-b: #5DCAA5;
    --amber:  #854F0B; --amber-f:#FAEEDA; --amber-b:#EF9F27;
    --coral:  #993C1D; --coral-f:#FAECE7; --coral-b:#F0997B;
    --green:  #3B6D11; --green-f:#EAF3DE; --green-b:#97C459;
    --gray:   #5F5E5A; --gray-f: #F1EFE8; --gray-b: #B4B2A9;
    --font: 'Source Sans 3', sans-serif;
    --mono: 'Source Code Pro', monospace;
  }

  div.rate-wrap, div.rate-wrap p, div.rate-wrap li,
  div.rate-wrap td, div.rate-wrap th, div.rate-wrap span,
  div.rate-wrap div, div.rate-wrap strong, div.rate-wrap em {
    font-size: 10.5px !important;
    font-family: 'Source Sans 3', sans-serif !important;
  }
  div.rate-wrap h2 { font-size: 13px !important; }
  div.rate-wrap h3 { font-size: 11px !important; }

  div.rate-wrap {
    color: var(--dark);
    padding: 28px 0 44px;
    line-height: 1.6;
  }

  @media print {
    div.rate-wrap { padding: 12px 0 20px; }
    .section { page-break-inside: avoid; }
  }

  div.rate-wrap h2 {
    font-weight: 700; color: var(--blue);
    border-bottom: 2px solid var(--blue);
    padding-bottom: 4px; margin: 20px 0 10px;
    display: flex; align-items: center; gap: 7px;
  }
  div.rate-wrap h2 .num {
    background: var(--blue); color: #fff !important;
    border-radius: 50%; width: 20px; height: 20px;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px !important; flex-shrink: 0;
  }

  div.rate-wrap h3 {
    font-weight: 700; color: var(--blue);
    margin: 12px 0 6px;
  }

  div.rate-wrap p { margin-bottom: 6px; }

  div.rate-wrap ul { list-style: none; padding: 0; margin: 0 0 8px 0; }
  div.rate-wrap ul li {
    padding-left: 16px; position: relative; margin-bottom: 4px;
  }
  div.rate-wrap ul li::before {
    content: '•'; position: absolute; left: 0;
    color: var(--blue); font-weight: 700;
  }

  div.rate-wrap .equation {
    font-family: var(--mono) !important;
    font-size: 11px !important; font-weight: 600;
    background: var(--gray-f);
    border-left: 3px solid var(--blue);
    padding: 6px 12px; border-radius: 0 5px 5px 0;
    margin: 8px 0; color: var(--dark);
    display: inline-block;
  }

  div.rate-wrap .warn {
    background: var(--amber-f);
    border: 1px solid var(--amber-b);
    border-left: 4px solid var(--amber);
    border-radius: 0 5px 5px 0;
    padding: 7px 10px; margin: 8px 0;
    color: var(--amber); line-height: 1.6;
  }
  div.rate-wrap .warn .warn-title {
    font-weight: 700; display: block; margin-bottom: 3px;
  }
  div.rate-wrap .warn ul li::before { color: var(--amber); }

  div.rate-wrap .info {
    background: var(--blue-f);
    border: 1px solid #9BBFD8;
    border-left: 4px solid var(--blue);
    border-radius: 0 5px 5px 0;
    padding: 7px 10px; margin: 8px 0;
    color: var(--blue); line-height: 1.6;
  }
  div.rate-wrap .info .info-title {
    font-weight: 700; display: block; margin-bottom: 3px;
  }
  div.rate-wrap .info ul li::before { color: var(--blue); }

  div.rate-wrap .success {
    background: var(--teal-f);
    border: 1px solid var(--teal-b);
    border-left: 4px solid var(--teal);
    border-radius: 0 5px 5px 0;
    padding: 7px 10px; margin: 8px 0;
    color: var(--teal); line-height: 1.6;
  }
  div.rate-wrap .success .success-title {
    font-weight: 700; display: block; margin-bottom: 3px;
  }
  div.rate-wrap .success ul li::before { color: var(--teal); }

  div.rate-wrap table {
    width: 100%; border-collapse: collapse; margin: 8px 0;
  }
  div.rate-wrap thead th {
    background: var(--blue); color: #fff !important;
    padding: 5px 8px; font-weight: 700; text-align: left;
    border: 1px solid var(--blue);
  }
  div.rate-wrap tbody td {
    padding: 5px 8px;
    border: 1px solid var(--gray-b);
    vertical-align: top; line-height: 1.5;
  }
  div.rate-wrap tbody tr:nth-child(even) td { background: var(--gray-f); }
  div.rate-wrap .tick { color: var(--green); font-weight: 700; }
  div.rate-wrap .cross { color: var(--coral); font-weight: 700; }
  div.rate-wrap .cmp-table thead th { background: var(--dark); border-color: var(--dark); }

  div.rate-wrap .checklist { list-style: none; padding: 0; margin: 0; }
  div.rate-wrap .checklist li {
    display: flex; align-items: flex-start; gap: 8px;
    padding: 4px 8px; border-bottom: 1px solid #F3F4F6;
  }
  div.rate-wrap .checklist li::before { display: none; }
  div.rate-wrap .checklist li:last-child { border-bottom: none; }
  div.rate-wrap .checklist li:nth-child(even) { background: var(--gray-f); }
  div.rate-wrap .checklist .cb {
    width: 14px; height: 14px; border: 1.5px solid var(--gray-b);
    border-radius: 3px; flex-shrink: 0; margin-top: 1px;
  }

  div.rate-wrap .note-blue {
    color: var(--blue); font-style: italic;
    margin: 6px 0; padding-left: 10px;
    border-left: 2px solid var(--blue);
  }

  div.rate-wrap .example {
    background: var(--gray-f); border: 1px solid var(--gray-b);
    border-radius: 5px; padding: 7px 10px; margin: 8px 0;
  }
  div.rate-wrap .example .ex-title { font-weight: 700; margin-bottom: 4px; }

  div.rate-wrap .footer {
    text-align: center; color: var(--gray);
    margin-top: 24px; padding-top: 10px;
    border-top: 1px solid #E5E7EB;
  }

  div.rate-wrap hr { border: none; border-top: 1px solid #E5E7EB; margin: 18px 0; }
</style>

<div class="rate-wrap">

<!-- 1. THE CHEMISTRY -->
<div class="section">
<h2><span class="num">1</span> The Chemistry</h2>
<div class="equation">S₂O₃²⁻(aq) + 2H⁺(aq) → S(s) + SO₂(g) + H₂O(l)</div>
<ul>
  <li>Thiosulfate ions decompose in acid to form a fine suspension of sulfur (S).</li>
  <li>The sulfur makes the solution cloudy — used to time the reaction.</li>
  <li>Reaction is stopped (timed) when the cross/print beneath the beaker is <strong>JUST no longer visible</strong>.</li>
</ul>
</div>

<hr>

<!-- 2. KEY PRINCIPLES -->
<div class="section">
<h2><span class="num">2</span> Key Principles</h2>

<h3>2.1 &nbsp; Why use 1/t as a measure of rate?</h3>
<ul>
  <li>A faster reaction produces the fixed amount of sulfur in less time.</li>
  <li>So: &nbsp;<strong>rate ∝ 1/t</strong> &nbsp;(the shorter the time, the faster the rate).</li>
</ul>

<h3>2.2 &nbsp; Why use volume as a measure of concentration?</h3>
<ul>
  <li>Concentration ∝ volume of solution used, <strong>PROVIDED</strong> the total volume is kept constant in every experiment.</li>
  <li>This is why you add water to make up the total volume to <strong>55 cm³</strong> in each experiment.</li>
</ul>

<div class="warn">
  <span class="warn-title">⚠️ Critical Rule</span>
  <ul>
    <li>TOTAL VOLUME must be exactly the same in every experiment (e.g. 55 cm³).</li>
    <li>Only ONE variable (e.g. volume of FA1) should change at a time.</li>
    <li>All other volumes (acid, water top-up) must be adjusted accordingly.</li>
  </ul>
</div>

<h3>2.3 &nbsp; Why plot log(1/t) vs log(V)?</h3>
<ul>
  <li>The rate equation is: <strong>rate = k[S₂O₃²⁻]ⁿ</strong>, which gives: <strong>1/t = k·Vⁿ</strong></li>
  <li>Taking logs of both sides: <strong>log(1/t) = n·log(V) + log(k)</strong></li>
  <li>This is y = mx + c — a straight line where the <strong>GRADIENT = n = order of reaction</strong>.</li>
  <li>Plotting 1/t vs V directly gives a curve, which is harder to interpret.</li>
</ul>

<table class="cmp-table">
  <thead><tr><th>Plot</th><th>Graph shape</th><th>Can find order?</th></tr></thead>
  <tbody>
    <tr><td>1/t &nbsp;vs&nbsp; V</td><td>Curve</td><td><span class="cross">❌ Not easily</span></td></tr>
    <tr><td>log(1/t) &nbsp;vs&nbsp; log(V)</td><td>Straight line</td><td><span class="tick">✅ Gradient = order</span></td></tr>
  </tbody>
</table>
</div>

<hr>

<!-- 3. RESULTS TABLE -->
<div class="section">
<h2><span class="num">3</span> Setting Up Your Results Table</h2>

<div class="info">
  <span class="info-title">Your table MUST include these columns:</span>
  <ul>
    <li>Volume of FA 1 / cm³</li>
    <li>Volume of water / cm³ &nbsp;(to keep total constant)</li>
    <li>Time / s &nbsp;(recorded to nearest second)</li>
    <li>1/t &nbsp;or&nbsp; log(1/t)</li>
    <li>log(volume of FA 1) &nbsp;(if required by question)</li>
  </ul>
</div>

<div class="warn">
  <span class="warn-title">⚠️ Common Table Mistakes to Avoid</span>
  <ul>
    <li>Missing units in column headings — every column needs a unit.</li>
    <li>Forgetting to include Experiments 1 &amp; 2 in the same table.</li>
    <li>Not drawing the table in advance (before doing experiments).</li>
    <li>Using <strong>T</strong> instead of <strong>t</strong> for time.</li>
    <li>Not recording times to the nearest second.</li>
    <li>Total volume is not constant across experiments.</li>
  </ul>
</div>

<p><strong>✅ Correct heading format examples:</strong></p>
<ul>
  <li>Volume of FA 1 / cm³ &nbsp;&nbsp;OR&nbsp;&nbsp; Volume of FA 1 (cm³)</li>
  <li>Time / s &nbsp;&nbsp;OR&nbsp;&nbsp; t / s</li>
  <li>1/t / s⁻¹ &nbsp;&nbsp;OR&nbsp;&nbsp; log(1/t)</li>
</ul>
</div>

<hr>

<!-- 4. CHOOSING CONCENTRATIONS -->
<div class="section">
<h2><span class="num">4</span> Choosing Your Concentrations</h2>

<ul>
  <li>You need a <strong>MINIMUM of 5 experiments</strong> total (Expts 1 &amp; 2 + at least 3 additional).</li>
  <li>Volumes of FA 1 should be spread <strong>evenly</strong> across the full range (e.g. 10, 20, 30, 40, 50 cm³).</li>
  <li>More points = more reliable graph and more tolerance for anomalous results.</li>
</ul>

<div class="warn">
  <span class="warn-title">⚠️ Why spread your volumes evenly?</span>
  <ul>
    <li>Bunched points (e.g. 40, 42, 44, 46, 50) give a graph covering less than 20×20 small squares — you <strong>LOSE</strong> the straight line mark.</li>
    <li>Evenly spaced volumes give a line that spans the full graph area, making the gradient easier to calculate accurately.</li>
  </ul>
</div>
</div>

<hr>

<!-- 5. Vt TEST -->
<div class="section">
<h2><span class="num">5</span> Checking Accuracy — The Vt Test</h2>

<p>The examiner checks your accuracy using the <strong>Vt product</strong>:</p>

<div class="info">
  <span class="info-title">The Vt Constant</span>
  <ul>
    <li>If the reaction is first order, then: concentration × time = constant</li>
    <li>Since volume ∝ concentration: <strong>V × t should be approximately constant</strong> across experiments.</li>
    <li>Examiners calculate Vt for Experiment 1 and your two largest-volume additional experiments.</li>
  </ul>
</div>

<table>
  <thead><tr><th>Vt difference</th><th>Marks awarded</th></tr></thead>
  <tbody>
    <tr><td>Both values within 10% of the larger of the closest pair</td><td><span class="tick">2 marks (full)</span></td></tr>
    <tr><td>Difference between 10% and 20%</td><td>1 mark (partial)</td></tr>
    <tr><td>Difference greater than 20%</td><td><span class="cross">0 marks</span></td></tr>
  </tbody>
</table>

<div class="example">
  <div class="ex-title">Example check:</div>
  <ul>
    <li>V=50, t=35 → Vt = 1750</li>
    <li>V=40, t=55 → Vt = 2200</li>
    <li>V=30, t=69 → Vt = 2070</li>
    <li>Closest pair: 2200 and 2070. Difference = 130. 10% of 2200 = 220. 130 &lt; 220 ✅ → Full marks.</li>
  </ul>
</div>
</div>

<hr>

<!-- 6. PLOTTING THE GRAPH -->
<div class="section">
<h2><span class="num">6</span> Plotting the Graph</h2>

<ul>
  <li>Plot <strong>log(1/t)</strong> on the y-axis and <strong>log(volume of FA 1)</strong> on the x-axis.</li>
  <li>Choose scales so that points cover <strong>MORE than half</strong> of each axis.</li>
  <li>Plot ALL experiments (including Expts 1 &amp; 2).</li>
  <li>Draw a single best-fit straight line through the points.</li>
</ul>

<div class="warn">
  <span class="warn-title">⚠️ Graph Rules</span>
  <ul>
    <li>Points must be plotted to within ½ small square.</li>
    <li>If you only have <strong>3 points</strong>, NONE can be anomalous.</li>
    <li>If you have <strong>4+ points</strong>, ONE anomalous point is acceptable.</li>
    <li>The best-fit line must span at least <strong>20×20 small squares</strong> — do not bunch your points.</li>
    <li>Use construction lines covering at least half the line length to calculate the gradient.</li>
  </ul>
</div>
</div>

<hr>

<!-- 7. GRADIENT -->
<div class="section">
<h2><span class="num">7</span> Calculating the Gradient (Order of Reaction)</h2>

<ul>
  <li>Draw a large triangle using construction lines on your graph.</li>
  <li>The triangle hypotenuse should cover at least <strong>HALF</strong> the length of your line.</li>
  <li>Read coordinates carefully (to nearest ½ small square).</li>
  <li><strong>Gradient = Δy / Δx = change in log(1/t) / change in log(V)</strong></li>
  <li>The gradient = order of reaction with respect to thiosulfate.</li>
  <li>Give the answer to at least <strong>1 decimal place</strong>.</li>
</ul>
</div>

<hr>

<!-- 8. UNCERTAINTY -->
<div class="section">
<h2><span class="num">8</span> Uncertainty &amp; Percentage Error</h2>

<p>The endpoint (when print just disappears) is a judgment call — it introduces uncertainty.</p>

<table>
  <thead><tr><th>Experiment</th><th>Why?</th><th>Uncertainty</th></tr></thead>
  <tbody>
    <tr>
      <td>Expt 1 (fast reaction, large V)</td>
      <td>Change is rapid — easier to judge the exact moment</td>
      <td><span class="tick">Smaller (≤ 3 s)</span></td>
    </tr>
    <tr>
      <td>Expt 2 (slow reaction, small V)</td>
      <td>Change is gradual — harder to judge, more variable</td>
      <td><span class="cross">Larger (≥ 3 s, up to 10 s)</span></td>
    </tr>
  </tbody>
</table>

<ul>
  <li>Percentage uncertainty = (uncertainty in seconds / reaction time) × 100%</li>
  <li>Faster reactions have <strong>SMALLER</strong> percentage uncertainty, even if the absolute uncertainty (seconds) is similar.</li>
</ul>
</div>

<hr>

<!-- 9. H+ INVESTIGATION -->
<div class="section">
<h2><span class="num">9</span> Investigating H⁺ Concentration (Part f)</h2>

<ul>
  <li>Keep the volume of FA 1 <strong>CONSTANT</strong> (same thiosulfate concentration).</li>
  <li>Change the volume of FA 2 (acid) — this changes [H⁺].</li>
  <li>Add water to keep the TOTAL volume constant at 55 cm³.</li>
</ul>

<div class="warn">
  <span class="warn-title">⚠️ Remember</span>
  <ul>
    <li>Only the volume of FA 2 (acid) should change.</li>
    <li>Volume of FA 1 must stay the same as in Experiment 2.</li>
    <li>Adjust water accordingly: water = 55 − V(FA1) − V(FA2).</li>
  </ul>
</div>

<div class="note-blue">Expected result: Little change in reaction time as acid concentration is doubled → rate is approximately zero order with respect to H⁺.</div>
</div>

<hr>

<!-- 10. CHECKLIST -->
<div class="section">
<h2><span class="num">10</span> Quick Reference Checklist</h2>

<ul class="checklist">
  <li><span class="cb"></span> Total volume is the same in every experiment</li>
  <li><span class="cb"></span> Table drawn up in advance with correct headings and units</li>
  <li><span class="cb"></span> Times recorded to nearest second (use <strong>t</strong> not T)</li>
  <li><span class="cb"></span> At least 3 extra experiments beyond Expts 1 &amp; 2</li>
  <li><span class="cb"></span> Volumes of FA 1 spread evenly across the full range</li>
  <li><span class="cb"></span> log(1/t) plotted on y-axis, log(V) on x-axis</li>
  <li><span class="cb"></span> Points cover more than half of each axis</li>
  <li><span class="cb"></span> Best-fit straight line drawn</li>
  <li><span class="cb"></span> Construction lines cover at least half the line</li>
  <li><span class="cb"></span> Gradient calculated correctly to ≥ 1 d.p.</li>
  <li><span class="cb"></span> Uncertainty for Expt 2 &gt; Uncertainty for Expt 1</li>
  <li><span class="cb"></span> For H⁺ investigation: only acid volume changes, FA 1 constant</li>
</ul>
</div>

<div class="footer">Cambridge International Examinations &nbsp;·&nbsp; Chemistry 9701 &nbsp;·&nbsp; Paper 31</div>

</div>
