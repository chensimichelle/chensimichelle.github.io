---
layout: page
title: Titration Practical
description: CIE A-Level Chemistry 9701 · Iodometric Back-Titration & CuSO₄·xH₂O
img: assets/img/chemistrypracticalcover.jpg
permalink: /practical/titration/
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
.g-rl{font-size:11px;color:#666;text-align:left;font-family:sans-serif;font-weight:500;width:42%}
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
.rp{display:inline-flex;align-items:center;gap:5px;margin-top:0.5rem;padding:3px 10px;border-radius:14px;font-family:monospace;font-size:12px;font-weight:500}
.rpb{background:#E6F1FB;color:#0C447C}
.rpt{background:#E1F5EE;color:#085041}
.rpa{background:#FAEEDA;color:#633806}
.rpc{background:#FAECE7;color:#712B13}
.sl-row{display:flex;align-items:center;gap:10px;margin-bottom:0.9rem;background:#f7f7f7;border-radius:6px;padding:0.6rem 0.85rem}
.sl-row label{font-size:12px;color:#555;white-space:nowrap}
.sl-row input{flex:1}
.sl-val{font-family:monospace;font-size:13px;font-weight:500;color:#111;min-width:60px;text-align:right}
.fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:7px;margin-top:0.65rem}
.fc{background:#f7f7f7;border-radius:6px;padding:0.6rem;text-align:center}
.fcl{font-size:10px;color:#888;margin-bottom:3px;font-family:monospace;letter-spacing:0.05em}
.fcv{font-size:16px;font-weight:600;color:#111;font-family:monospace}
.fcu{font-size:10px;color:#888;margin-top:2px}
.pe-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-top:0.65rem}
.pe-card{background:#f7f7f7;border-radius:6px;padding:0.8rem}
.pe-head{font-size:13px;font-weight:600;color:#111;margin-bottom:0.45rem}
.pe-formula{font-family:monospace;font-size:11px;background:#fff;border:1px solid #e8e8e8;border-radius:5px;padding:4px 8px;margin:0.35rem 0;color:#111;display:block}
.pe-line{font-size:12px;color:#555;margin:3px 0;line-height:1.5}
.pe-result{font-family:monospace;font-size:12px;font-weight:600;color:#0C447C;margin-top:6px}
@media(max-width:520px){.g2,.pe-grid{grid-template-columns:1fr}.calc-rw{flex-direction:column;align-items:flex-start;gap:3px}}
</style>

<p style="font-size:14px; color:#555; line-height:1.8; margin-bottom:1.5rem;">
  In this experiment, you determine the value of <strong>x</strong> in hydrated
  copper(II) sulfate, CuSO₄·xH₂O. A known mass of the salt (32.5 g) is dissolved
  in 1.00 dm³ of solution (FA 4). Because Cu²⁺ ions cannot be titrated directly,
  an <strong>iodometric back-titration</strong> is used: excess iodide ions (FA 3)
  are added to reduce Cu²⁺ to Cu⁺, releasing a stoichiometric amount of iodine.
  This iodine is then titrated against standard sodium thiosulfate solution
  (FA 1, 0.150 mol dm⁻³) from the burette, using starch as the indicator.
  From the titre, you calculate the moles of Cu²⁺ in 25.0 cm³ of FA 4, find
  its concentration, and work backwards to determine x.
</p>

<div style="display:inline-flex;align-items:center;gap:6px;background:#E1F5EE;border:1px solid #1D9E75;border-radius:6px;padding:5px 12px;margin-bottom:0.6rem;">
  <span style="font-size:14px;">👇</span>
  <span style="font-size:12px;color:#0F6E56;font-weight:600;font-family:monospace;letter-spacing:0.04em;">Click a section below to explore</span>
</div>

<div class="guide-nav">
  <button class="on" onclick="showSec('design',this)">01 Experiment design</button>
  <button onclick="showSec('data',this)">02 Data presentation</button>
  <button onclick="showSec('mean',this)">03 Mean calculation</button>
  <button onclick="showSec('calc',this)">04 Calculations</button>
  <button onclick="showSec('error',this)">05 Error analysis</button>
</div>

<!-- ── 01 EXPERIMENT DESIGN ─────────────────────────────────── -->
<div id="sec-design" class="g-pnl on">
  <div class="sec-label">01 — experiment design</div>

  <div class="g-card ca-blue">
    <div class="g-ct">Why two reactions?</div>
    <div class="g-cb">Cu²⁺ cannot be titrated directly. An indirect (back) titration is used: Cu²⁺ reacts with I⁻ to produce I₂, which is then titrated with thiosulfate.</div>
    <code class="g-fm">2Cu²⁺(aq) + 4I⁻(aq) → 2CuI(s) + I₂(aq)</code>
    <code class="g-fm">I₂(aq) + 2S₂O₃²⁻(aq) → 2I⁻(aq) + S₄O₆²⁻(aq)</code>
    <div class="g-tip">
      <span class="g-tl">Key ratio</span>
      <span class="g-tt">Combining both equations: 2 mol Cu²⁺ : 1 mol I₂ : 2 mol S₂O₃²⁻ — so <strong>mol Cu²⁺ = mol S₂O₃²⁻</strong></span>
    </div>
  </div>

  <div class="g-card ca-teal">
    <div class="g-ct">Role of each reagent</div>
    <div class="g2">
      <div class="g-mc"><strong>FA 1 — 0.150 mol dm⁻³ Na₂S₂O₃</strong>In burette. Titrant — reacts with I₂ at endpoint.</div>
      <div class="g-mc"><strong>FA 2 — Dilute H₂SO₄</strong>Acidifies solution; prevents Cu²⁺ hydrolysis.</div>
      <div class="g-mc"><strong>FA 3 — 1.00 mol dm⁻³ KI</strong>Added in excess. Converts all Cu²⁺ to I₂. Exact volume does not matter.</div>
      <div class="g-mc"><strong>FA 4 — CuSO₄·xH₂O solution</strong>25.0 cm³ pipetted into flask. The analyte being determined.</div>
    </div>
  </div>

  <div class="g-card ca-amber">
    <div class="g-ct">Endpoint recognition</div>
    <div class="g-cb">Starch is added late — when the solution turns light brown — not at the start.</div>
    <div class="g-sr" style="margin-top:0.6rem">
      <div class="g-sn">1</div>
      <div class="g-st">High [I₂] at the start would form an insoluble starch–iodine complex, giving a sluggish, imprecise endpoint.</div>
    </div>
    <div class="g-sr">
      <div class="g-sn">2</div>
      <div class="g-st">The blue-black colour disappears at the true endpoint. Adding a drop of starch after should cause no further colour change.</div>
    </div>
  </div>
</div>

<!-- ── 02 DATA PRESENTATION ────────────────────────────────── -->
<div id="sec-data" class="g-pnl">
  <div class="sec-label">02 — data presentation (part a)</div>
  <div class="tabs">
    <button class="on" onclick="showTab('headings',this)">Headings &amp; units</button>
    <button onclick="showTab('readings',this)">Burette readings</button>
    <button onclick="showTab('concordant',this)">Concordant titres</button>
  </div>

  <div id="tp-headings" class="t-pnl on">
    <div class="vd vbad">✕ Wrong</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
        <tr><td class="g-rl">Start V</td><td>0.0</td><td>0.0</td><td>16.65</td><td>0.0</td></tr>
        <tr><td class="g-rl">End V</td><td>18.20</td><td>16.65</td><td class="g-cbad">52.80</td><td>16.70</td></tr>
        <tr><td class="g-rl">Difference</td><td>18.20</td><td>16.65</td><td class="g-cbad">—</td><td>16.70</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>"Start V / End V"</strong> — "V" alone not accepted. Must say "initial / final burette reading".</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>"Difference"</strong> — not accepted. Use "titre" or "volume of FA 1 used/added".</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>No units</strong> — cm³ or /cm³ required in every heading.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>Final reading 52.80</strong> — no burette reading may exceed 50.00 cm³.</div></div>
      </div>
    </div>
    <div class="vd vok" style="margin-top:0.75rem">✓ Correct</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
        <tr><td class="g-rl">Initial burette reading / cm³</td><td class="g-cok">0.00</td><td class="g-cok">0.00</td><td class="g-cok">16.65</td><td class="g-cok">0.00</td></tr>
        <tr><td class="g-rl">Final burette reading / cm³</td><td class="g-cok">18.20</td><td class="g-cok">16.65</td><td class="g-cok">33.30</td><td class="g-cok">16.70</td></tr>
        <tr><td class="g-rl">Titre / cm³</td><td>18.20</td><td>16.65</td><td>16.65</td><td>16.70</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">Full heading names with /cm³ units on every column.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">"Titre" used — not "difference". No reading exceeds 50.00 cm³.</div></div>
      </div>
    </div>
  </div>

  <div id="tp-readings" class="t-pnl">
    <div class="g-rb">
      <div class="g-rr"><span class="g-rd">Burette precision</span><span class="rv-ok">±0.05 cm³ per reading</span></div>
      <div class="g-rr"><span class="g-rd">Valid last digits</span><span class="rv-ok">.00  .05  .10  .15 … .95</span></div>
      <div class="g-rr"><span class="g-rd">Applies to</span><span class="rv-ok">initial AND final readings</span></div>
      <div class="g-rr"><span class="g-rd">Does NOT apply to</span><span class="rv-ok">the titre itself</span></div>
    </div>
    <div class="vd vbad" style="margin-top:0.75rem">✕ Wrong readings</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
        <tr><td class="g-rl">Initial / cm³</td><td class="g-cbad">0</td><td class="g-cbad">0.0</td><td>16.65</td><td class="g-cbad">0.1</td></tr>
        <tr><td class="g-rl">Final / cm³</td><td class="g-cbad">18.2</td><td>16.65</td><td class="g-cbad">33.3</td><td class="g-cbad">16.7</td></tr>
        <tr><td class="g-rl">Titre / cm³</td><td>18.2</td><td>16.65</td><td>16.65</td><td>16.60</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>0, 0.0, 18.2, 16.7</strong> — only 1 dp. Burette readings must have 2 dp ending in 0 or 5.</div></div>
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at"><strong>0.1</strong> — ends in 1, not 0 or 5. Cannot be read from a standard burette.</div></div>
      </div>
    </div>
    <div class="vd vok" style="margin-top:0.75rem">✓ Correct readings</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
        <tr><td class="g-rl">Initial / cm³</td><td class="g-cok">0.00</td><td class="g-cok">0.00</td><td class="g-cok">16.65</td><td class="g-cok">0.00</td></tr>
        <tr><td class="g-rl">Final / cm³</td><td class="g-cok">18.20</td><td class="g-cok">16.65</td><td class="g-cok">33.30</td><td class="g-cok">16.70</td></tr>
        <tr><td class="g-rl">Titre / cm³</td><td>18.20</td><td>16.65</td><td>16.65</td><td>16.70</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">Every burette reading: 2 dp ending in 0 or 5. Titre is a derived difference — no restriction on its last digit.</div></div>
      </div>
    </div>
  </div>

  <div id="tp-concordant" class="t-pnl">
    <div class="vd vbad">✕ Not concordant — spread 0.15 cm³</div>
    <div class="g-card ca-red">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
        <tr><td class="g-rl">Titre / cm³</td><td>18.20</td><td class="g-cbad">16.90</td><td>16.75</td><td>16.75</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aibad">✕</div><div class="g-at">II and III agree (spread 0.00) but I differs by <strong>0.15 cm³</strong> — outside the 0.10 limit. A fourth titration is needed.</div></div>
      </div>
    </div>
    <div class="vd vok" style="margin-top:0.75rem">✓ Concordant — spread ≤ 0.10 cm³</div>
    <div class="g-card ca-teal">
      <div class="g-tbl"><table class="gt">
        <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
        <tr><td class="g-rl">Titre / cm³</td><td><span class="g-cstrike">18.20</span></td><td class="g-cok">16.65 ✓</td><td class="g-cok">16.65 ✓</td><td>16.70</td></tr>
      </table></div>
      <div style="margin-top:0.65rem">
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">I and II identical (spread 0.00). Ticks indicate selection. Rough titre crossed out — never used in mean.</div></div>
        <div class="g-an"><div class="g-ai g-aiok">✓</div><div class="g-at">III (16.70) is within 0.10 of selected pair but two concordant titres are sufficient.</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ── 03 MEAN CALCULATION ─────────────────────────────────── -->
<div id="sec-mean" class="g-pnl">
  <div class="sec-label">03 — mean calculation (part b)</div>

  <div class="vd vbad">✕ Wrong approaches</div>
  <div class="g-card ca-red">
    <div class="g-an"><div class="g-ai g-aibad">A</div><div class="g-at"><strong>Rough titre included:</strong> (18.20 + 16.65 + 16.65 + 16.70) / 4 = 17.05 — the rough titre must never be averaged in.</div></div>
    <div class="g-an"><div class="g-ai g-aibad">B</div><div class="g-at"><strong>No selection shown:</strong> Writing the mean without ticks or working — the mark scheme requires evidence of which titres were chosen.</div></div>
    <div class="g-an"><div class="g-ai g-aibad">C</div><div class="g-at"><strong>Wrong decimal places:</strong> Mean written as "16.7" — must be quoted to 2 dp (nearest 0.01 cm³).</div></div>
    <div class="g-an"><div class="g-ai g-aibad">D</div><div class="g-at"><strong>All integers:</strong> If every titre used in the mean is a whole number (e.g. 17, 17), the mark is not awarded — readings are too imprecise.</div></div>
  </div>

  <div class="vd vok" style="margin-top:0.8rem">✓ Correct approach</div>
  <div class="g-card ca-teal">
    <div class="g-tbl"><table class="gt">
      <tr><th style="width:42%"></th><th>Rough</th><th>I</th><th>II</th><th>III</th></tr>
      <tr><td class="g-rl">Titre / cm³</td><td><span class="g-cstrike">18.20</span></td><td class="g-cok">16.65 ✓</td><td class="g-cok">16.65 ✓</td><td>16.70</td></tr>
    </table></div>
    <div class="g-rb" style="margin-top:0.65rem">
      <div class="g-rr"><span class="g-rd">Selected titres</span><span class="rv-ok">16.65 and 16.65</span></div>
      <div class="g-rr"><span class="g-rd">Spread</span><span class="rv-ok">16.65 − 16.65 = 0.00 ≤ 0.10 ✓</span></div>
      <div class="g-rr"><span class="g-rd">Mean</span><span class="rv-ok">(16.65 + 16.65) / 2 = 16.65 cm³</span></div>
      <div class="g-rr"><span class="g-rd">Quoted to</span><span class="rv-ok">2 decimal places ✓</span></div>
    </div>
    <div class="g-an" style="margin-top:0.6rem">
      <div class="g-ai g-aiok">✓</div>
      <div class="g-at">Working shown explicitly. Rough titre crossed out. Mean feeds directly into part (b) and all of part (c).</div>
    </div>
  </div>
</div>

<!-- ── 04 CALCULATIONS ─────────────────────────────────────── -->
<div id="sec-calc" class="g-pnl">
  <div class="sec-label">04 — calculations (part c) — interactive</div>

  <div class="sl-row">
    <label>Mean titre (cm³)</label>
    <input type="range" min="14" max="22" step="0.05" value="16.65" id="sl" oninput="updateCalc()">
    <span class="sl-val" id="sl-disp">16.65 cm³</span>
  </div>

  <div class="calc-bl">
    <div class="calc-rw"><span class="cl">c(i) — n(S₂O₃²⁻) = 0.150 × V / 1000</span><span class="cf" id="ci-out">0.150 × 16.65 / 1000 = 2.498×10⁻³ mol</span></div>
    <div class="calc-rw"><span class="cl">c(ii) — n(Cu²⁺)  [ratio 1:1 from equations]</span><span class="cf" id="cii-out">= 2.498×10⁻³ mol</span></div>
    <div class="calc-rw"><span class="cl">c(iii) — c(Cu²⁺) = n / 0.0250 dm³</span><span class="cf" id="ciii-out">0.09990 mol dm⁻³</span></div>
    <div class="calc-rw"><span class="cl">c(iv) — M(CuSO₄·xH₂O) = 32.5 / c(iii)</span><span class="cf" id="civ-mr-out">325.3 g mol⁻¹</span></div>
    <div class="calc-rw"><span class="cl">mass of H₂O per mol = M − 159.6</span><span class="cf" id="civ-w-out">165.7 g mol⁻¹</span></div>
    <div class="calc-rw"><span class="cl">x = water mass / 18  →  round to integer</span><span class="cf" id="civ-x-out">x = 9 (raw: 9.21)</span></div>
  </div>

  <div class="fg">
    <div class="fc"><div class="fcl">n(S₂O₃²⁻)</div><div class="fcv" id="s-ci">2.498×10⁻³</div><div class="fcu">mol</div></div>
    <div class="fc"><div class="fcl">n(Cu²⁺)</div><div class="fcv" id="s-cii">2.498×10⁻³</div><div class="fcu">mol</div></div>
    <div class="fc"><div class="fcl">c(Cu²⁺)</div><div class="fcv" id="s-ciii">0.09990</div><div class="fcu">mol dm⁻³</div></div>
    <div class="fc"><div class="fcl">x</div><div class="fcv" id="s-civ">9</div><div class="fcu">integer</div></div>
  </div>

  <div class="g-tip" style="margin-top:0.7rem">
    <span class="g-tl">Target</span>
    <span class="g-tt">Drag the slider to <strong>16.65 cm³</strong> to get x = 5, the expected answer for this experiment. All intermediate values should be given to 3–4 sf.</span>
  </div>
</div>

<!-- ── 05 ERROR ANALYSIS ───────────────────────────────────── -->
<div id="sec-error" class="g-pnl">
  <div class="sec-label">05 — error analysis (part d)</div>

  <div class="pe-grid">
    <div class="pe-card">
      <div class="pe-head">Titre (burette)</div>
      <div class="pe-line">Two readings per titre → uncertainty is doubled</div>
      <code class="pe-formula">uncertainty = 0.05 + 0.05 = 0.10 cm³</code>
      <code class="pe-formula">% error = (0.10 / titre) × 100</code>
      <div class="pe-line">For titre = 16.65 cm³:</div>
      <div class="pe-result">= (0.10 / 16.65) × 100 = 0.60%</div>
    </div>
    <div class="pe-card">
      <div class="pe-head">Pipette (25.0 cm³)</div>
      <div class="pe-line">One operation only → single uncertainty</div>
      <code class="pe-formula">uncertainty = 0.05 cm³ (not doubled)</code>
      <code class="pe-formula">% error = (0.05 / 25.0) × 100</code>
      <div class="pe-line">Fixed value regardless of volume delivered:</div>
      <div class="pe-result">= 0.20%</div>
    </div>
  </div>

  <div class="g-warn" style="margin-top:0.75rem">
    <span class="g-tl" style="color:#993C1D">Avoid</span>
    <span class="g-wt">Do not double the pipette uncertainty to 0.10 cm³ by analogy with the burette. The pipette has only one reading — fill to the mark and release. There is no second reading to add.</span>
  </div>

  <div class="g-card ca-blue" style="margin-top:0.85rem">
    <div class="g-ct">d(ii) — would a burette for FA 3 improve accuracy?</div>
    <div class="g-an" style="margin-top:0.4rem">
      <div class="g-ai g-aiok">✓</div>
      <div class="g-at"><strong>Why the suggestion makes sense:</strong> A burette (±0.05 cm³) is more precise than a measuring cylinder (±0.5 cm³), so the volume of FA 3 would be more precisely known.</div>
    </div>
    <div class="g-an">
      <div class="g-ai g-aibad">✕</div>
      <div class="g-at"><strong>Why it would NOT improve accuracy:</strong> FA 3 (KI) is used in excess. Its exact volume does not affect the result — any excess converts all Cu²⁺ to I₂. Precisely measuring an excess reagent is meaningless.</div>
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
function fmtSci(n) {
  if (n === 0) return '0';
  var e = Math.floor(Math.log10(Math.abs(n)));
  var c = (n / Math.pow(10, e)).toFixed(3);
  var sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  var es = String(Math.abs(e)).split('').map(function(d){ return sup[+d]; }).join('');
  return c + '×10' + (e < 0 ? '⁻' : '') + es;
}
function updateCalc() {
  var v = parseFloat(document.getElementById('sl').value);
  document.getElementById('sl-disp').textContent = v.toFixed(2) + ' cm³';
  var nS = 0.150 * v / 1000;
  var cCu = nS / 0.025;
  var Mr = 32.5 / cCu;
  var wm = Mr - 159.6;
  var xr = wm / 18;
  var xi = Math.round(xr);
  document.getElementById('ci-out').textContent  = '0.150 × ' + v.toFixed(2) + ' / 1000 = ' + fmtSci(nS) + ' mol';
  document.getElementById('cii-out').textContent  = '= ' + fmtSci(nS) + ' mol';
  document.getElementById('ciii-out').textContent = cCu.toFixed(4) + ' mol dm⁻³';
  document.getElementById('civ-mr-out').textContent = Mr.toFixed(1) + ' g mol⁻¹';
  document.getElementById('civ-w-out').textContent  = wm.toFixed(1) + ' g mol⁻¹';
  document.getElementById('civ-x-out').textContent  = 'x = ' + xi + ' (raw: ' + xr.toFixed(2) + ')';
  document.getElementById('s-ci').textContent   = fmtSci(nS);
  document.getElementById('s-cii').textContent  = fmtSci(nS);
  document.getElementById('s-ciii').textContent = cCu.toFixed(4);
  document.getElementById('s-civ').textContent  = xi;
}
updateCalc();
</script>
