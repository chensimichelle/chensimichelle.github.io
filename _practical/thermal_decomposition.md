---
layout: page
title: Thermal Decomposition Practical
description: CIE A-Level Chemistry 9701 · Hydrated Aluminium Sulfate Al₂(SO₄)₃·xH₂O
img: assets/img/chemistrypracticalcover.jpg
permalink: /practical/thermal-decomposition/
---

<style>
.guide-nav{display:flex;gap:6px;flex-wrap:wrap;margin:1.5rem 0 1.2rem}
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
.tabs button.on{background:#f0f0f0;color:#111;font-weight:500;border-color:#999}
.t-pnl{display:none}.t-pnl.on{display:block}
.g-tbl{overflow-x:auto;margin:0.5rem 0}
table.gt{width:100%;border-collapse:collapse;font-size:12px;font-family:monospace;table-layout:fixed}
table.gt th{background:#f7f7f7;color:#666;font-weight:500;font-size:11px;letter-spacing:0.05em;padding:6px 8px;border:1px solid #e8e8e8;text-align:center}
table.gt td{padding:6px 8px;border:1px solid #e8e8e8;text-align:center;color:#111}
.g-rl{font-size:11px;color:#666;text-align:left!important;font-family:sans-serif;font-weight:500;width:72%}
.g-cbad{background:#FCEBEB;color:#791F1F}
.g-cok{background:#E1F5EE;color:#085041}
.g-cstrike{text-decoration:line-through;opacity:0.5}
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
.calc-bl{border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;margin-top:0.6rem}
.calc-rw{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;border-bottom:1px solid #e8e8e8;font-size:12px}
.calc-rw:last-child{border-bottom:none}
.calc-rw .cl{color:#666}
.calc-rw .cf{font-family:monospace;color:#111;font-size:11px}
.sl-row{display:flex;align-items:center;gap:10px;margin-bottom:0.9rem;background:#f7f7f7;border-radius:6px;padding:0.6rem 0.85rem}
.sl-row label{font-size:12px;color:#555;white-space:nowrap}
.sl-row input{flex:1}
.sl-val{font-family:monospace;font-size:13px;font-weight:500;color:#111;min-width:60px;text-align:right}
.fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:7px;margin-top:0.65rem}
.fc{background:#f7f7f7;border-radius:6px;padding:0.6rem;text-align:center}
.fcl{font-size:10px;color:#888;margin-bottom:3px;font-family:monospace;letter-spacing:0.05em}
.fcv{font-size:15px;font-weight:600;color:#111;font-family:monospace}
.fcu{font-size:10px;color:#888;margin-top:2px}
.pe-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-top:0.65rem}
.pe-card{background:#f7f7f7;border-radius:6px;padding:0.8rem}
.pe-head{font-size:13px;font-weight:600;color:#111;margin-bottom:0.45rem}
.pe-formula{font-family:monospace;font-size:11px;background:#fff;border:1px solid #e8e8e8;border-radius:5px;padding:4px 8px;margin:0.35rem 0;color:#111;display:block}
.pe-line{font-size:12px;color:#555;margin:3px 0;line-height:1.5}
.pe-result{font-family:monospace;font-size:12px;font-weight:600;color:#0C447C;margin-top:6px}
.acc-band{border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;margin-top:0.65rem}
.acc-hd{background:#f7f7f7;padding:6px 12px;font-size:11px;font-weight:600;font-family:monospace;letter-spacing:0.05em;color:#666;border-bottom:1px solid #e8e8e8}
.acc-row{display:flex;align-items:center;padding:6px 12px;border-bottom:1px solid #e8e8e8;gap:10px;font-size:12px}
.acc-row:last-child{border-bottom:none}
.acc-mk{font-family:monospace;font-weight:600;width:24px;text-align:center}
.acc-desc{color:#555;flex:1}
.acc-range{font-family:monospace;font-size:11px;padding:2px 7px;border-radius:4px}
.acc-iv{background:#E6F1FB;color:#0C447C}
.acc-v{background:#E1F5EE;color:#085041}
@media(max-width:520px){.g2,.pe-grid{grid-template-columns:1fr}.calc-rw{flex-direction:column;align-items:flex-start;gap:3px}}
</style>

<p style="font-size:14px; color:#555; line-height:1.8; margin-bottom:1.5rem;">
  In this experiment, you determine the value of <strong>x</strong> in hydrated aluminium sulfate,
  Al₂(SO₄)₃·xH₂O (<strong>FB 1</strong>). A known mass of the salt (1.80–2.00 g) is placed in a
  crucible and heated until <strong>constant mass</strong> is achieved, driving off all water of
  crystallisation as steam. The mass of water lost and the mass of anhydrous residue are each
  converted to moles, and their ratio gives x as the nearest integer. Two separate heatings
  confirm that constant mass has been reached.
</p>

<div style="display:inline-flex;align-items:center;gap:6px;background:#E1F5EE;border:1px solid #1D9E75;border-radius:6px;padding:5px 12px;margin-bottom:0.6rem;">
  <span style="font-size:14px;">👇</span>
  <span style="font-size:12px;color:#0F6E56;font-weight:600;font-family:monospace;letter-spacing:0.04em;">Click a section below to explore</span>
</div>

<div class="guide-nav">
  <button class="on" onclick="showSec('design',this)">01 Experiment design</button>
  <button onclick="showSec('data',this)">02 Data presentation</button>
  <button onclick="showSec('calc',this)">03 Calculations</button>
  <button onclick="showSec('error',this)">04 Error analysis</button>
  <button onclick="showSec('questions',this)">05 Short-answer Q&amp;A</button>
</div>

<!-- ── 01 EXPERIMENT DESIGN ─────────────────────────────────── -->
<div id="sec-design" class="g-pnl on">
  <div class="sec-label">01 — experiment design</div>

  <div class="g-card ca-blue">
    <div class="g-ct">The core reaction</div>
    <div class="g-cb">Heating drives off water of crystallisation, leaving the anhydrous salt.</div>
    <code class="g-fm">Al₂(SO₄)₃·xH₂O(s) → Al₂(SO₄)₃(s) + xH₂O(g)</code>
    <div class="g-tip">
      <span class="g-tl">Key ratio</span>
      <span class="g-tt">x = mol H₂O lost ÷ mol Al₂(SO₄)₃ produced — both calculated from masses recorded during the experiment.</span>
    </div>
  </div>

  <div class="g-card ca-teal">
    <div class="g-ct">Why heat twice?</div>
    <div class="g-cb">Heating to <strong>constant mass</strong> confirms all water has been expelled. After the second heating, the mass must be within ±0.05 g of the reading after the first heating.</div>
    <div class="g-sr" style="margin-top:0.6rem">
      <div class="g-sn">1</div>
      <div class="g-st">First strong heating (≈5 min, lid removed after 2 min) — removes most water of crystallisation.</div>
    </div>
    <div class="g-sr">
      <div class="g-sn">2</div>
      <div class="g-st">Cool, reweigh. Then a second 2-min heating, cool, reweigh. Compare the two "after" masses.</div>
    </div>
    <div class="g-sr">
      <div class="g-sn">3</div>
      <div class="g-st">If the two residue masses agree within +0.02 and −0.05 g, constant mass is confirmed and the lower value is used.</div>
    </div>
  </div>

  <div class="g-card ca-amber">
    <div class="g-ct">Procedural details to know</div>
    <div class="g2">
      <div class="g-mc"><strong>Crucible + lid (first 2 min)</strong>Prevents the solid spitting or frothing out of the crucible as water is released rapidly. Lid is removed after 2 min so steam can escape.</div>
      <div class="g-mc"><strong>Pipeclay triangle</strong>Supports the crucible over a Bunsen flame, allowing direct high-temperature heating.</div>
      <div class="g-mc"><strong>Mass range 1.80–2.00 g</strong>Too little → large percentage error in mass lost. Too much → incomplete decomposition in the time allowed.</div>
      <div class="g-mc"><strong>Cool before weighing</strong>A hot crucible causes convection currents above the balance pan, producing a falsely low mass reading.</div>
    </div>
  </div>

  <div class="g-card ca-coral">
    <div class="g-ct">Appearance before vs after heating</div>
    <div class="g-cb">The hydrated salt (FB 1) is <strong>crystalline / finely divided</strong>. After complete dehydration, the residue becomes <strong>lumpy / crusty</strong> or develops a hard "skin" — it is no longer free-flowing powder.</div>
  </div>
</div>

<!-- ── 02 DATA PRESENTATION ────────────────────────────────── -->
<div id="sec-data" class="g-pnl">
  <div class="sec-label">02 — data presentation (part a)</div>
  <div class="tabs">
    <button class="on" onclick="showTab('headings',this)">Headings &amp; layout</button>
    <button onclick="showTab('readings',this)">Recording masses</button>
    <button onclick="showTab('constant',this)">Constant mass check</button>
  </div>

  <div id="tp-headings" class="t-pnl on">
    <div class="vd vbad">✕ Incomplete headings</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:72%">Measurement</th><th>Value</th></tr>
        <tr><td class="g-rl">Crucible mass</td><td class="g-cbad">18.4</td></tr>
        <tr><td class="g-rl">Mass with FB1</td><td class="g-cbad">20.3</td></tr>
        <tr><td class="g-rl">After 1st heating</td><td class="g-cbad">19.96</td></tr>
        <tr><td class="g-rl">After 2nd heating</td><td class="g-cbad">19.95</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>No units</strong> — every heading must include / g.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Vague labels</strong> — "Crucible mass" must be "(mass of) empty crucible". Lid must be mentioned where applicable.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Inconsistent dp</strong> — 18.4 and 20.3 have only 1 dp. All four raw weighings must share the same number of decimal places.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Derived masses absent</strong> — mass of FB 1 used, mass of residue, and mass of water lost must be explicitly calculated and shown.</div></div>
      </div>
    </div>
    <div class="vd vok" style="margin-top:0.75rem">✓ All seven mark-scheme headings</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:72%">Measurement</th><th>Value</th></tr>
        <tr><td class="g-rl">(mass of) empty crucible / g</td><td class="g-cok">18.40</td></tr>
        <tr><td class="g-rl">(mass of) crucible + FB 1 (hydrated aluminium sulfate) / g</td><td class="g-cok">20.32</td></tr>
        <tr><td class="g-rl">(mass of) crucible and residue / contents, after 1st heating / g</td><td class="g-cok">19.96</td></tr>
        <tr><td class="g-rl">(mass of) crucible and residue / contents, after 2nd heating / g</td><td class="g-cok">19.95</td></tr>
        <tr><td class="g-rl">(mass of) FB 1 used / g</td><td class="g-cok">1.92</td></tr>
        <tr><td class="g-rl">(mass of) residue / g</td><td class="g-cok">1.55</td></tr>
        <tr><td class="g-rl">(mass of) water / mass loss / g</td><td class="g-cok">0.37</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">Seven unambiguous headings, all with / g units. Derived masses explicitly stated.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">All four raw weighings to the same number of decimal places (2 dp shown; 3 dp equally accepted).</div></div>
      </div>
    </div>
  </div>

  <div id="tp-readings" class="t-pnl">
    <div class="g-rb">
      <div class="g-rr"><span class="g-rd">Balance precision</span><span class="rv-ok">±0.01 g (2 dp) or ±0.001 g (3 dp)</span></div>
      <div class="g-rr"><span class="g-rd">All four weighings must share</span><span class="rv-ok">the same number of dp</span></div>
      <div class="g-rr"><span class="g-rd">Mass of FB 1 must be in range</span><span class="rv-ok">1.80 g – 2.00 g</span></div>
      <div class="g-rr"><span class="g-rd">2nd heating must be within</span><span class="rv-ok">+0.02 and −0.05 g of 1st heating</span></div>
    </div>
    <div class="vd vbad" style="margin-top:0.75rem">✕ Inconsistent decimal places</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:72%">Measurement</th><th>Value</th></tr>
        <tr><td class="g-rl">Empty crucible / g</td><td class="g-cbad">18.4</td></tr>
        <tr><td class="g-rl">Crucible + FB 1 / g</td><td class="g-cbad">20.324</td></tr>
        <tr><td class="g-rl">After 1st heating / g</td><td class="g-cbad">19.96</td></tr>
        <tr><td class="g-rl">After 2nd heating / g</td><td class="g-cbad">19.95</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at">18.4 is 1 dp; 20.324 is 3 dp; the others 2 dp — inconsistent. All four must match.</div></div>
      </div>
    </div>
    <div class="vd vok" style="margin-top:0.75rem">✓ Consistent 2 dp throughout</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:72%">Measurement</th><th>Value</th></tr>
        <tr><td class="g-rl">Empty crucible / g</td><td class="g-cok">18.40</td></tr>
        <tr><td class="g-rl">Crucible + FB 1 / g</td><td class="g-cok">20.32</td></tr>
        <tr><td class="g-rl">After 1st heating / g</td><td class="g-cok">19.96</td></tr>
        <tr><td class="g-rl">After 2nd heating / g</td><td class="g-cok">19.95</td></tr>
      </table></div>
    </div>
  </div>

  <div id="tp-constant" class="t-pnl">
    <div class="g-cb" style="margin-bottom:0.7rem;font-size:13px;color:#555;">
      The second heating result must fall within the tolerance band of the first heating. This confirms all water of crystallisation has been expelled.
    </div>
    <div class="vd vbad">✕ Outside tolerance — further heating needed</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:72%">Measurement</th><th>Value</th></tr>
        <tr><td class="g-rl">After 1st heating / g</td><td>19.96</td></tr>
        <tr><td class="g-rl">After 2nd heating / g</td><td class="g-cbad">19.83</td></tr>
        <tr><td class="g-rl">Difference</td><td class="g-cbad">0.13 g</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at">0.13 g exceeds the −0.05 g tolerance. Constant mass is not yet reached — heat again.</div></div>
      </div>
    </div>
    <div class="vd vok" style="margin-top:0.75rem">✓ Within tolerance — constant mass confirmed</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:72%">Measurement</th><th>Value</th></tr>
        <tr><td class="g-rl">After 1st heating / g</td><td class="g-cok">19.96</td></tr>
        <tr><td class="g-rl">After 2nd heating / g</td><td class="g-cok">19.95</td></tr>
        <tr><td class="g-rl">Difference</td><td class="g-cok">0.01 g ✓</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">0.01 g is well within tolerance. Use the <strong>lower (2nd heating)</strong> value as the final residue mass for calculation.</div></div>
      </div>
    </div>
    <div class="g-tip" style="margin-top:0.5rem">
      <span class="g-tl">Which value?</span>
      <span class="g-tt">Always use the reading after the <strong>final</strong> heating as the residue mass — it is the closest approximation to the true anhydrous mass.</span>
    </div>
  </div>
</div>

<!-- ── 03 CALCULATIONS ─────────────────────────────────────── -->
<div id="sec-calc" class="g-pnl">
  <div class="sec-label">03 — calculations (part b) — interactive</div>

  <div class="sl-row">
    <label>Mass of FB 1 used (g)</label>
    <input type="range" min="1.80" max="2.00" step="0.01" value="1.92" id="sl-fb1" oninput="updateCalc()">
    <span class="sl-val" id="disp-fb1">1.92 g</span>
  </div>
  <div class="sl-row">
    <label>Mass of residue (g)</label>
    <input type="range" min="1.35" max="1.70" step="0.01" value="1.55" id="sl-res" oninput="updateCalc()">
    <span class="sl-val" id="disp-res">1.55 g</span>
  </div>

  <div class="calc-bl">
    <div class="calc-rw"><span class="cl">Mass of water lost = mass FB 1 − mass residue</span><span class="cf" id="c-water">= 0.37 g</span></div>
    <div class="calc-rw"><span class="cl">b(i) — n(H₂O) = mass lost / 18.0</span><span class="cf" id="c-nwater">= 0.02056 mol</span></div>
    <div class="calc-rw"><span class="cl">b(ii) — n(Al₂(SO₄)₃) = mass residue / 342.3</span><span class="cf" id="c-nresid">= 0.004529 mol</span></div>
    <div class="calc-rw"><span class="cl">b(iii) — x = n(H₂O) / n(Al₂(SO₄)₃) → round to integer</span><span class="cf" id="c-xraw">= 4.54 → x = 5</span></div>
  </div>

  <div class="fg">
    <div class="fc"><div class="fcl">water lost</div><div class="fcv" id="s-wl">0.37</div><div class="fcu">g</div></div>
    <div class="fc"><div class="fcl">n(H₂O)</div><div class="fcv" id="s-nw">0.0206</div><div class="fcu">mol</div></div>
    <div class="fc"><div class="fcl">n(Al₂(SO₄)₃)</div><div class="fcv" id="s-nr">0.00453</div><div class="fcu">mol</div></div>
    <div class="fc"><div class="fcl">x (raw)</div><div class="fcv" id="s-xr">4.54</div><div class="fcu">ratio</div></div>
    <div class="fc"><div class="fcl">x (integer)</div><div class="fcv" id="s-xi">5</div><div class="fcu">answer</div></div>
  </div>

  <div class="g-tip" style="margin-top:0.7rem">
    <span class="g-tl">Sig figs</span>
    <span class="g-tt">Give all intermediate values to <strong>2–4 sf</strong>. The final answer for x must be the <strong>nearest integer</strong>. Show all steps — each sub-part carries its own mark.</span>
  </div>

  <div class="g-card ca-blue" style="margin-top:0.85rem">
    <div class="g-ct">Molar masses used</div>
    <div class="g2">
      <div class="g-mc"><strong>H₂O = 18.0 g mol⁻¹</strong>Used in b(i) to convert mass lost into moles of water.</div>
      <div class="g-mc"><strong>Al₂(SO₄)₃ = 342.3 g mol⁻¹</strong>Al: 2×27 = 54 · S: 3×32 = 96 · O: 12×16 = 192 → total 342</div>
    </div>
  </div>

  <div class="acc-band" style="margin-top:0.85rem">
    <div class="acc-hd">Accuracy (Q) marks — mass ratio test: mass FB 1 / mass residue (to 2 d.p.)</div>
    <div class="acc-row">
      <span class="acc-mk" style="color:#0C447C">IV</span>
      <span class="acc-desc">Broader band — awarded if ratio is in range</span>
      <span class="acc-range acc-iv">1.56 – 2.12 inclusive</span>
    </div>
    <div class="acc-row">
      <span class="acc-mk" style="color:#085041">V</span>
      <span class="acc-desc">Tighter band — awarded if ratio is in range</span>
      <span class="acc-range acc-v">1.66 – 2.02 inclusive</span>
    </div>
  </div>
  <div class="g-tip" style="margin-top:0.6rem">
    <span class="g-tl">How to check</span>
    <span class="g-tt">Divide <strong>mass of FB 1 ÷ mass of residue</strong> to 2 dp from your data. If it falls in the V band you earn both Q marks; if only in the IV band, one mark.</span>
  </div>
</div>

<!-- ── 04 ERROR ANALYSIS ───────────────────────────────────── -->
<div id="sec-error" class="g-pnl">
  <div class="sec-label">04 — error analysis (part d)</div>

  <div class="pe-grid">
    <div class="pe-card">
      <div class="pe-head">Balance (per weighing)</div>
      <div class="pe-line">Each balance reading carries an uncertainty of ±0.01 g.</div>
      <code class="pe-formula">uncertainty = ±0.01 g per reading</code>
      <code class="pe-formula">% error = (0.01 / mass) × 100</code>
      <div class="pe-line">For residue mass ≈ 1.55 g:</div>
      <div class="pe-result">= (0.01 / 1.55) × 100 ≈ 0.65%</div>
    </div>
    <div class="pe-card">
      <div class="pe-head">Mass of water lost</div>
      <div class="pe-line">Mass lost is derived from two readings — uncertainty doubles.</div>
      <code class="pe-formula">combined uncertainty = 0.01 + 0.01 = 0.02 g</code>
      <code class="pe-formula">% error = (0.02 / mass loss) × 100</code>
      <div class="pe-line">For mass loss ≈ 0.37 g:</div>
      <div class="pe-result">= (0.02 / 0.37) × 100 ≈ 5.4%</div>
    </div>
  </div>

  <div class="g-warn" style="margin-top:0.75rem">
    <span class="g-tl" style="color:#993C1D">Avoid</span>
    <span class="g-wt">Do not use the total mass of FB 1 (≈1.92 g) as the denominator when calculating % error in mass lost. The uncertain quantity is the <strong>small mass of water lost</strong> (≈0.37 g) — using the larger denominator gives an artificially small % error.</span>
  </div>

  <div class="g-card ca-blue" style="margin-top:0.85rem">
    <div class="g-ct">Why is the % error here larger than in a titration?</div>
    <div class="g-an" style="margin-top:0.4rem">
      <div class="g-ai g-aiok">✓</div>
      <div class="g-at">The mass of water lost is small (≈0.37 g) relative to the balance uncertainty (±0.01 g), giving a large % error. In a titration the titre is much larger (≈16 cm³) relative to the burette uncertainty (±0.05 cm³), so the % contribution is far smaller.</div>
    </div>
    <div class="g-an">
      <div class="g-ai g-aiok">✓</div>
      <div class="g-at">Using a more precise balance (e.g., 4 dp, ±0.0001 g) would substantially reduce the % error in mass measurement.</div>
    </div>
  </div>

  <div class="g-card ca-amber" style="margin-top:0.85rem">
    <div class="g-ct">Incomplete decomposition — effect on x</div>
    <div class="g-an" style="margin-top:0.4rem">
      <div class="g-ai g-aibad">✕</div>
      <div class="g-at"><strong>If not all water is driven off:</strong> mass of residue recorded is too high → mass of water lost calculated is too low → n(H₂O) too low → x calculated is too low (not too high).</div>
    </div>
    <div class="g-tip" style="margin-top:0.5rem">
      <span class="g-tl">Note</span>
      <span class="g-tt">This is precisely why the two-heating procedure exists — if the second mass is noticeably lower than the first, more heating is required before recording the final residue mass.</span>
    </div>
  </div>
</div>

<!-- ── 05 SHORT-ANSWER Q&A ─────────────────────────────────── -->
<div id="sec-questions" class="g-pnl">
  <div class="sec-label">05 — short-answer Q&amp;A (part c)</div>

  <div class="g-card ca-teal">
    <div class="g-ct">c(i) — How does the residue compare in appearance to the starting solid?</div>
    <div class="g-rb" style="margin-top:0.5rem">
      <div class="g-rr"><span class="g-rd">Before heating — FB 1</span><span class="rv-ok">crystalline / finely divided</span></div>
      <div class="g-rr"><span class="g-rd">After heating — residue</span><span class="rv-ok">lumpy / crusty / has a 'skin'</span></div>
    </div>
    <div class="g-tip">
      <span class="g-tl">Mark</span>
      <span class="g-tt">Both descriptions are needed for the mark. The answer must contrast the state before AND after. "White powder becomes a hard lump" is acceptable phrasing.</span>
    </div>
  </div>

  <div class="g-card ca-blue">
    <div class="g-ct">c(ii) — Why is the crucible lid kept on for the first two minutes?</div>
    <div class="g-an" style="margin-top:0.4rem">
      <div class="g-ai g-aiok">✓</div>
      <div class="g-at">To prevent the solid <strong>spitting / frothing out</strong> of the crucible. As the crystal structure breaks down rapidly, water is released quickly and can eject solid particles if the crucible is uncovered too soon.</div>
    </div>
    <div class="g-warn" style="margin-top:0.5rem">
      <span class="g-tl">Common error</span>
      <span class="g-wt">"To prevent water escaping" — this is wrong. Water must escape as steam; the lid prevents loss of solid. The lid is removed after 2 min precisely to allow steam to escape freely.</span>
    </div>
  </div>

  <div class="g-card ca-amber">
    <div class="g-ct">c(iii) — Anhydrous contamination causing x to be too high: is the student correct?</div>
    <div class="g-an" style="margin-top:0.4rem">
      <div class="g-ai g-aibad">✕</div>
      <div class="g-at"><strong>The student is NOT correct.</strong></div>
    </div>
    <div class="g-rb" style="margin-top:0.5rem">
      <div class="g-rr"><span class="g-rd">Effect of anhydrous contamination</span><span class="rv-ok">Less water present → mass lost is too low</span></div>
      <div class="g-rr"><span class="g-rd">n(H₂O) calculated</span><span class="rv-ok">Too low</span></div>
      <div class="g-rr"><span class="g-rd">Residue mass</span><span class="rv-ok">Higher than pure hydrate would give</span></div>
      <div class="g-rr"><span class="g-rd">Ratio mol water / mol residue</span><span class="rv-ok">Lower than true x</span></div>
      <div class="g-rr"><span class="g-rd">Calculated x</span><span class="rv-ok">Too LOW — not too high</span></div>
    </div>
    <div class="g-tip" style="margin-top:0.5rem">
      <span class="g-tl">Full mark answer</span>
      <span class="g-tt">State the verdict AND give the reasoning: anhydrous salt contributes no water to the mass lost, so n(H₂O) is lower, and the ratio (= x) is lower — the opposite of what the student claimed.</span>
    </div>
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
  document.querySelectorAll('#sec-data .t-pnl').forEach(function(p){ p.classList.remove('on'); });
  document.querySelectorAll('#sec-data .tabs button').forEach(function(b){ b.classList.remove('on'); });
  document.getElementById('tp-' + name).classList.add('on');
  if (btn) btn.classList.add('on');
}
function updateCalc() {
  var fb1 = parseFloat(document.getElementById('sl-fb1').value);
  var res  = parseFloat(document.getElementById('sl-res').value);
  document.getElementById('disp-fb1').textContent = fb1.toFixed(2) + ' g';
  document.getElementById('disp-res').textContent  = res.toFixed(2) + ' g';
  var water = fb1 - res;
  var nw = water / 18.0;
  var nr = res / 342.3;
  var xr = nw / nr;
  var xi = Math.round(xr);
  document.getElementById('c-water').textContent  = '= ' + water.toFixed(2) + ' g';
  document.getElementById('c-nwater').textContent = '= ' + nw.toFixed(4) + ' mol';
  document.getElementById('c-nresid').textContent = '= ' + nr.toFixed(5) + ' mol';
  document.getElementById('c-xraw').textContent   = '= ' + xr.toFixed(2) + ' → x = ' + xi;
  document.getElementById('s-wl').textContent = water.toFixed(2);
  document.getElementById('s-nw').textContent = nw.toFixed(4);
  document.getElementById('s-nr').textContent = nr.toFixed(5);
  document.getElementById('s-xr').textContent = xr.toFixed(2);
  document.getElementById('s-xi').textContent = xi;
}
updateCalc();
</script>
