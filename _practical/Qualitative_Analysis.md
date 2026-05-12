---
layout: page
title: Qualitative Analysis
description: CIE A-Level Chemistry 9701 · Cation, Anion & Gas Tests
img: assets/img/chemistrypracticalcover.jpg
permalink: /practical/qualitative-analysis/
---
{% raw %}
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Code+Pro:wght@500&display=swap');

  :root {
    --gray:   #5F5E5A; --gray-f:  #F1EFE8; --gray-b:  #B4B2A9;
    --teal:   #0F6E56; --teal-f:  #E1F5EE; --teal-b:  #5DCAA5;
    --coral:  #993C1D; --coral-f: #FAECE7; --coral-b: #F0997B;
    --blue:   #185FA5; --blue-f:  #E6F1FB; --blue-b:  #85B7EB;
    --green:  #3B6D11; --green-f: #EAF3DE; --green-b: #97C459;
    --amber:  #854F0B; --amber-f: #FAEEDA; --amber-b: #EF9F27;
    --purple: #534AB7; --purple-f:#EEEDFE; --purple-b:#AFA9EC;
    --pink:   #993556; --pink-f:  #FBEAF0; --pink-b:  #ED93B1;
    --dark:   #1F2937;
    --arr:    #9CA3AF;
    --font: 'Source Sans 3', sans-serif;
    --mono: 'Source Code Pro', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .qa-wrap {
    font-family: var(--font);
    color: var(--dark);
    padding: 24px 0 40px;
    font-size: 10px;
  }

  @media print {
    .qa-wrap { padding: 10px 0 16px; }
    .section { page-break-inside: avoid; }
  }

  .qa-wrap h2 {
    font-size: 13px; font-weight: 700; color: #fff;
    background: var(--dark);
    padding: 5px 10px; border-radius: 5px;
    margin-bottom: 12px; margin-top: 22px;
    display: inline-block;
  }

  .box {
    border: 1px solid; border-radius: 6px;
    padding: 4px 7px; text-align: center; line-height: 1.3;
    flex-shrink: 0;
  }
  .b-dark   { background: var(--dark);     color: #fff;           border-color: var(--dark);    border-radius: 18px; }
  .b-gray   { background: var(--gray-f);   color: var(--gray);    border-color: var(--gray-b);  }
  .b-teal   { background: var(--teal-f);   color: var(--teal);    border-color: var(--teal-b);  }
  .b-coral  { background: var(--coral-f);  color: var(--coral);   border-color: var(--coral-b); }
  .b-blue   { background: var(--blue-f);   color: var(--blue);    border-color: var(--blue-b);  }
  .b-green  { background: var(--green-f);  color: var(--green);   border-color: var(--green-b); }
  .b-amber  { background: var(--amber-f);  color: var(--amber);   border-color: var(--amber-b); }
  .b-purple { background: var(--purple-f); color: var(--purple);  border-color: var(--purple-b);}
  .b-pink   { background: var(--pink-f);   color: var(--pink);    border-color: var(--pink-b);  }

  .bname { font-weight: 700; font-size: 10.5px; display: block; }
  .bion  { font-family: var(--mono); font-weight: 600; font-size: 11px; display: block; }
  .bsub  { font-size: 8.5px; opacity: 0.85; display: block; margin-top: 1px; }
  .bobs  { font-size: 9px; display: block; margin-top: 2px; font-style: italic; }

  .col { display: flex; flex-direction: column; align-items: center; }
  .vline { width: 1.5px; background: var(--arr); }
  .vline.arr::after {
    content: ''; display: block; width: 0; height: 0;
    border-left: 4px solid transparent; border-right: 4px solid transparent;
    border-top: 5px solid var(--arr); margin-left: -3.25px;
  }
  .hline { height: 1.5px; background: var(--arr); flex-shrink: 0; }
  .hline.arr-r::after {
    content: ''; display: block; width: 0; height: 0;
    border-top: 4px solid transparent; border-bottom: 4px solid transparent;
    border-left: 5px solid var(--arr);
  }
  .hline.arr-l::after {
    content: ''; display: block; width: 0; height: 0;
    border-top: 4px solid transparent; border-bottom: 4px solid transparent;
    border-right: 5px solid var(--arr); margin-left: -5px;
  }
  .alabel { font-size: 8px; color: var(--arr); white-space: nowrap; padding: 0 3px; }

  .note {
    background: #FFFBEB; border: 1px solid var(--amber-b);
    border-left: 3px solid var(--amber); border-radius: 4px;
    padding: 5px 8px; font-size: 8.5px; color: var(--amber);
    margin-top: 6px; margin-bottom: 2px; line-height: 1.6;
  }

  .anion-row { display: flex; align-items: flex-start; gap: 0; margin-bottom: 7px; }
  .ion-badge {
    width: 72px; flex-shrink: 0; border: 1px solid; border-radius: 6px;
    padding: 5px 5px; text-align: center;
    font-family: var(--mono); font-weight: 600; font-size: 12px;
    line-height: 1.2; align-self: center;
  }
  .chain { display: flex; align-items: center; flex-wrap: wrap; gap: 0; flex: 1; justify-content: space-between; }

  .gas-grid {
    display: grid; grid-template-columns: 80px 1fr 1fr;
    border: 1px solid var(--gray-b); border-radius: 8px; overflow: hidden;
  }
  .gas-hdr { background: var(--dark); color: #fff; font-weight: 700; font-size: 9.5px; padding: 5px 8px; }
  .gas-cell { padding: 5px 8px; font-size: 9.5px; border-top: 1px solid var(--gray-b); line-height: 1.4; }
  .gas-cell.gas-name { font-family: var(--mono); font-weight: 600; font-size: 10.5px; }
  .gas-row-even { background: var(--gray-f); }

  .divider { border: none; border-top: 1px solid #E5E7EB; margin: 24px 0 0; }

  .legend { display: flex; flex-wrap: wrap; gap: 7px 16px; margin-top: 16px; padding-top: 10px; border-top: 1px solid #E5E7EB; }
  .li { display: flex; align-items: center; gap: 4px; font-size: 8.5px; color: var(--gray); }
  .ls { width: 12px; height: 12px; border-radius: 3px; border: 1px solid; flex-shrink: 0; }

  .qa-nav{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 1.2rem}
  .qa-nav button{padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer;border:1px solid #ccc;background:#fff;color:#555;font-family:var(--mono);letter-spacing:0.02em;transition:all 0.15s}
  .qa-nav button.on{background:#1F2937;color:#fff;font-weight:500;border-color:#1F2937}
  .qa-pnl{display:none}.qa-pnl.on{display:block}
</style>

<div class="qa-wrap">

<!-- ═══════════════════════════════════════════════════
     SECTION 1: CATION TESTS
═══════════════════════════════════════════════════ -->
<div class="qa-nav">
  <button class="on" onclick="showQA('cation',this)">01 Cation tests</button>
  <button onclick="showQA('anion',this)">02 Anion tests</button>
  <button onclick="showQA('gas',this)">03 Gas tests</button>
</div>

<div id="qa-cation" class="qa-pnl on">
<!-- ═══ SECTION 1: CATION TESTS ═══ -->
<h2>1 — Cation identification</h2>

<div class="col" style="align-items:center;">
  <div class="box b-dark" style="width:165px;font-size:11px;font-weight:700;padding:7px 14px;">Aqueous salt sample</div>
  <div class="vline arr" style="height:16px;"></div>
  <div class="box b-gray" style="width:165px;">
    <span class="bname">Add NaOH(aq) in excess</span>
    <span class="bsub">observe precipitate and colour</span>
  </div>
</div>

<div style="display:grid;grid-template-columns:180px 1fr auto;gap:0;width:100%;align-items:start;margin-top:0;">

  <!-- LEFT: no ppt -->
  <div class="col" style="align-items:flex-end;padding-top:10px;">
    <div style="display:flex;align-items:center;width:100%;justify-content:flex-end;">
      <div class="hline arr-l" style="width:50px;"></div>
      <span class="alabel">no ppt</span>
    </div>
    <div class="col" style="align-items:center;width:155px;margin-top:3px;">
      <div class="box b-pink" style="width:145px;">
        <span class="bname">No ppt</span>
        <span class="bsub">NH₄⁺ (or very dilute Ba²⁺/Ca²⁺)</span>
      </div>
      <div class="vline arr" style="height:12px;"></div>
      <div class="box b-gray" style="width:145px;">
        <span class="bname">Warm with NaOH</span>
        <span class="bsub">gas produced?</span>
      </div>
      <div style="display:flex;width:145px;align-items:flex-start;">
        <div class="col" style="flex:1;align-items:center;">
          <div class="vline arr" style="height:12px;"></div>
          <span class="alabel" style="color:var(--pink);">NH₃ gas</span>
          <div class="box b-pink" style="width:68px;"><span class="bion">NH₄⁺</span><span class="bsub">litmus→blue</span></div>
        </div>
        <div class="col" style="flex:1;align-items:center;">
          <div style="display:flex;align-items:center;height:12px;"><div class="hline arr-r" style="width:50px;"></div></div>
          <span class="alabel">no gas</span>
          <div class="box b-pink" style="width:68px;"><span class="bion">Ba²⁺/Ca²⁺</span><span class="bsub">confirm by anion tests</span></div>
        </div>
      </div>
    </div>
  </div>

<!-- CENTRE: white ppt -->
  <div class="col" style="align-items:center;padding-top:10px;">
    <div style="display:flex;align-items:center;margin-bottom:3px;">
      <div class="hline arr-r" style="width:30px;"></div>
      <span class="alabel">white ppt</span>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    </div>
    <div class="box b-teal" style="width:155px;"><span class="bname">White ppt in NaOH</span></div>
    <div class="vline arr" style="height:12px;"></div>
    <div class="box b-gray" style="width:170px;">
      <span class="bname">Soluble in excess NaOH?</span>
      <span class="bsub">add more NaOH, observe</span>
    </div>

    <!-- GREEN: unchanged -->
    <div style="display:flex;width:310px;align-items:flex-start;">

      <!-- YES branch -->
      <div class="col" style="flex:1;align-items:center;">
        <div class="vline arr" style="height:12px;"></div>
        <span class="alabel" style="color:var(--teal);">yes — soluble</span>
        <div class="box b-teal" style="width:145px;"><span class="bname">Soluble → colourless</span><span class="bsub">Al³⁺, Pb²⁺ or Zn²⁺</span></div>
        <div class="vline arr" style="height:10px;"></div>
        <div class="box b-gray" style="width:145px;"><span class="bname">+ NH₃(aq) excess</span><span class="bsub">ppt dissolve?</span></div>

        <!-- BLUE BOX -->
        <div style="position:relative;left:-40px;">
          <div style="display:flex;width:145px;">
            <div class="col" style="flex:1;align-items:center;">
              <div class="vline arr" style="height:10px;"></div>
              <span class="alabel" style="color:var(--teal);">yes</span>
              <div class="box b-teal" style="width:68px;"><span class="bion">Zn²⁺</span><span class="bsub">sol. in NH₃</span></div>
            </div>
            <div class="col" style="flex:1;align-items:center;">
              <div class="vline arr" style="height:10px;"></div>
              <span class="alabel" style="color:var(--coral);">no</span>
              <div class="box b-coral" style="width:68px;"><span class="bion">Pb²⁺/Al³⁺</span><span class="bsub">insol. in NH₃</span></div>
            </div>
          </div>
        </div>
        <!-- END BLUE BOX -->

      </div>

      <!-- NO branch -->
      <div class="col" style="flex:1;align-items:center;">
        <div class="vline arr" style="height:12px;"></div>
        <span class="alabel" style="color:var(--coral);">no — insol.</span>
        <div class="box b-coral" style="width:145px;"><span class="bname">Insoluble in excess</span><span class="bsub">Mg²⁺ or Ca²⁺</span></div>
        <div class="vline arr" style="height:10px;"></div>
        <div class="box b-gray" style="width:145px;"><span class="bname">+ NH₃(aq)</span><span class="bsub">ppt form?</span></div>

        <!-- YELLOW BOX -->
        <div style="position:relative;left:-40px;">
          <div style="display:flex;width:145px;">
            <div class="col" style="flex:1;align-items:center;">
              <div class="vline arr" style="height:10px;"></div>
              <span class="alabel" style="color:var(--teal);">white ppt</span>
              <div class="box b-teal" style="width:68px;"><span class="bion">Mg²⁺</span><span class="bsub">insol. NH₃</span></div>
            </div>
            <div class="col" style="flex:1;align-items:center;">
              <div class="vline arr" style="height:10px;"></div>
              <span class="alabel" style="color:var(--coral);">no ppt</span>
              <div class="box b-coral" style="width:68px;"><span class="bion">Ca²⁺</span><span class="bsub">no ppt NH₃</span></div>
            </div>
          </div>
        </div>
        <!-- END YELLOW BOX -->

      </div>

    </div>
    <!-- END GREEN -->
  </div>

  <!-- RIGHT: coloured ppt -->
  <div style="padding-top:10px;display:flex;flex-direction:column;gap:6px;padding-left:8px;">
    <div style="display:flex;align-items:center;margin-bottom:2px;">
      <div class="hline arr-r" style="width:28px;"></div>
      <span class="alabel">coloured ppt</span>
    </div>
    <div style="display:flex;align-items:center;">
      <!-- CHANGED: added "turning brown on contact with air" for Fe³⁺ — data booklet says red-brown ppt insol. in excess; no oxidation note for Fe³⁺ as it is already oxidised -->
      <div class="box b-coral" style="width:135px;"><span class="bname">Red-brown ppt</span><span class="bion">Fe³⁺</span><span class="bsub">insol. in excess — done</span></div>
    </div>
    <div style="display:flex;align-items:center;">
      <!-- CHANGED: added "turning brown on contact with air" for Fe²⁺ -->
      <div class="box b-green" style="width:135px;"><span class="bname">Green ppt → brown</span><span class="bion">Fe²⁺</span><span class="bsub">turns brown in air; insol. excess</span></div>
    </div>
    <div style="display:flex;align-items:center;gap:0;">
      <div class="box b-gray" style="width:135px;"><span class="bname">Grey-green ppt</span><span class="bsub">sol. in NaOH→dark green</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-gray" style="width:115px;"><span class="bname">+ NH₃ excess</span><span class="bsub">grey-green insol.</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-gray" style="width:80px;"><span class="bion">Cr³⁺</span><span class="bsub">confirmed</span></div>
    </div>
    <div style="display:flex;align-items:center;gap:0;">
      <div class="box b-blue" style="width:135px;"><span class="bname">Pale blue ppt</span><span class="bsub">insol. in NaOH</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <!-- CHANGED: Cu²⁺ with NH₃ excess → pale blue ppt dissolves giving dark blue solution -->
      <div class="box b-gray" style="width:115px;"><span class="bname">+ NH₃ excess</span><span class="bsub">ppt dissolves</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-blue" style="width:80px;"><span class="bion">Cu²⁺</span><span class="bsub">dark blue soln</span></div>
    </div>
    <!-- CHANGED: Mn²⁺ — added "rapidly turning brown on contact with air" -->
    <div style="display:flex;align-items:center;">
      <div class="box b-amber" style="width:135px;"><span class="bname">Off-white ppt → brown</span><span class="bion">Mn²⁺</span><span class="bsub">rapidly turns brown in air; insol.</span></div>
    </div>
  </div>
</div>

<!-- NOTE: Ba²⁺ and Ca²⁺ clarification -->
<div class="note" style="margin-top:10px;"><b>Note — Ba²⁺ and Ca²⁺ with NaOH:</b> The data booklet states Ba²⁺ gives a <em>faint</em> white ppt unless [Ba²⁺] is very low, and Ca²⁺ gives a white ppt unless [Ca²⁺] is very low. At typical concentrations a faint white ppt may form. These cations give <b>no ppt with NH₃(aq)</b> and are distinguished from other white-ppt cations by this and their anion tests.</div>

<div class="legend">
  <div class="li"><div class="ls" style="background:var(--teal-f);border-color:var(--teal-b);"></div>Identified / soluble</div>
  <div class="li"><div class="ls" style="background:var(--coral-f);border-color:var(--coral-b);"></div>Insoluble / elimination</div>
  <div class="li"><div class="ls" style="background:var(--gray-f);border-color:var(--gray-b);"></div>Decision / test step</div>
  <div class="li"><div class="ls" style="background:var(--blue-f);border-color:var(--blue-b);"></div>Cu²⁺ pale blue ppt</div>
  <div class="li"><div class="ls" style="background:var(--green-f);border-color:var(--green-b);"></div>Fe²⁺ green ppt (→ brown in air)</div>
  <div class="li"><div class="ls" style="background:var(--amber-f);border-color:var(--amber-b);"></div>Mn²⁺ off-white ppt (→ brown in air)</div>
  <div class="li"><div class="ls" style="background:var(--pink-f);border-color:var(--pink-b);"></div>No ppt branch</div>
</div>
<hr class="divider">
</div>


<!-- ═══════════════════════════════════════════════════
     SECTION 2: ANION TESTS
═══════════════════════════════════════════════════ -->
<div id="qa-anion" class="qa-pnl">
<!-- ═══ SECTION 2: ANION TESTS ═══ -->
<h2>2 — Anion identification</h2>

<div style="font-size:8.5px;color:var(--gray);margin-bottom:10px;display:flex;align-items:center;gap:6px;">
  <div class="ion-badge b-gray" style="font-size:9px;width:auto;padding:2px 6px;font-family:var(--font);">Ion</div>
  <div class="hline arr-r" style="width:20px;"></div>
  <div class="box b-gray" style="font-size:8.5px;padding:2px 6px;">Reagent</div>
  <div class="hline arr-r" style="width:20px;"></div>
  <div class="box b-teal" style="font-size:8.5px;padding:2px 6px;">Observation</div>
  <div class="hline arr-r" style="width:20px;"></div>
  <div class="box b-green" style="font-size:8.5px;padding:2px 6px;">Confirmed</div>
  <span style="margin-left:8px;">Read each row left → right</span>
</div>

<!-- CO3 2- -->
<div class="anion-row">
  <div class="ion-badge b-gray">CO₃²⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain">
    <div class="box b-gray" style="width:120px;"><span class="bname">Dilute acid</span><span class="bsub">(HCl or HNO₃)</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-teal" style="width:165px;"><span class="bname">Colourless gas evolved</span><span class="bsub">CO₂ — test with limewater</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-teal" style="width:160px;"><span class="bobs">White ppt in limewater</span><span class="bsub">(dissolves with excess CO₂)</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-green" style="width:70px;"><span class="bion">CO₃²⁻</span><span class="bsub">confirmed</span></div>
  </div>
</div>

<!-- SO4 2- -->
<!-- CHANGED: added "gives white ppt with high [Ca²⁺(aq)]" as second test per data booklet -->
<div class="anion-row">
  <div class="ion-badge b-blue">SO₄²⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain" style="flex-wrap:wrap;">
    <div class="box b-gray" style="width:120px;"><span class="bname">Ba²⁺(aq)</span><span class="bsub">e.g. BaCl₂ solution</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-blue" style="width:130px;"><span class="bname">White ppt forms</span><span class="bsub">BaSO₄</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:175px;"><span class="bname">Add dilute HCl / HNO₃</span><span class="bsub">ppt insoluble in excess acid</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-blue" style="width:70px;"><span class="bion">SO₄²⁻</span><span class="bsub">confirmed</span></div>
    <div style="display:flex;align-items:center;width:100%;margin-top:4px;">
      <span class="alabel" style="color:var(--blue);">or:</span>
      <div class="hline arr-r" style="width:6px;"></div>
      <div class="box b-gray" style="width:120px;"><span class="bname">High [Ca²⁺(aq)]</span><span class="bsub">e.g. CaCl₂ solution</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-blue" style="width:200px;"><span class="bname">White ppt CaSO₄ forms</span><span class="bsub">only at high Ca²⁺ concentration</span></div>
    </div>
  </div>
</div>

<!-- SO3 2- -->
<!-- CHANGED: replaced K₂Cr₂O₇ paper with "decolourises acidified aqueous KMnO₄" per data booklet -->
<div class="anion-row">
  <div class="ion-badge b-amber">SO₃²⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain" style="flex-wrap:wrap;">
    <div class="box b-gray" style="width:120px;"><span class="bname">Ba²⁺(aq)</span><span class="bsub">e.g. BaCl₂ solution</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-amber" style="width:130px;"><span class="bname">White ppt forms</span><span class="bsub">BaSO₃</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:175px;"><span class="bname">Add dilute HCl / HNO₃</span><span class="bsub">ppt dissolves in excess acid</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-amber" style="width:70px;"><span class="bion">SO₃²⁻</span><span class="bsub">confirmed</span></div>
    <div style="display:flex;align-items:center;width:100%;margin-top:4px;">
      <span class="alabel" style="color:var(--amber);">or:</span>
      <div class="hline arr-r" style="width:6px;"></div>
      <div class="box b-gray" style="width:120px;"><span class="bname">Acidified KMnO₄(aq)</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-amber" style="width:200px;"><span class="bname">Purple → colourless</span><span class="bsub">decolourises acidified aq. KMnO₄</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-amber" style="width:70px;"><span class="bion">SO₃²⁻</span><span class="bsub">confirmed</span></div>
    </div>
  </div>
</div>

<div class="note"><b>Key distinction — SO₄²⁻ vs SO₃²⁻:</b> Both give white ppt with Ba²⁺(aq). Add dilute HCl or HNO₃ — BaSO₄ stays (SO₄²⁻); BaSO₃ dissolves (SO₃²⁻). Never use H₂SO₄ as the acid. SO₃²⁻ also decolourises acidified aqueous KMnO₄.</div>

<!-- NO3- -->
<div class="anion-row" style="margin-top:8px;">
  <div class="ion-badge b-gray">NO₃⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain">
    <div class="box b-gray" style="width:155px;"><span class="bname">OH⁻(aq) + Al foil</span><span class="bsub">heat gently</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-teal" style="width:175px;"><span class="bname">NH₃ gas evolved</span><span class="bsub">test with damp red litmus</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-teal" style="width:120px;"><span class="bobs">Litmus turns blue</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-green" style="width:70px;"><span class="bion">NO₃⁻</span><span class="bsub">confirmed</span></div>
  </div>
</div>

<!-- NO2- -->
<!-- CHANGED: replaced K₂Cr₂O₇ paper with "decolourises acidified aqueous KMnO₄" per data booklet -->
<div class="anion-row">
  <div class="ion-badge b-coral">NO₂⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain" style="flex-wrap:wrap;">
    <div class="box b-gray" style="width:155px;"><span class="bname">OH⁻(aq) + Al foil</span><span class="bsub">heat gently</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-teal" style="width:175px;"><span class="bname">NH₃ gas evolved</span><span class="bsub">same as NO₃⁻</span></div>
    <div style="display:flex;align-items:center;width:100%;margin-top:4px;">
      <span class="alabel" style="color:var(--coral);">also:</span>
      <div class="hline arr-r" style="width:6px;"></div>
      <div class="box b-gray" style="width:155px;"><span class="bname">Acidified KMnO₄(aq)</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-coral" style="width:195px;"><span class="bname">Purple → colourless</span><span class="bsub">decolourises acidified aq. KMnO₄</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-coral" style="width:90px;"><span class="bion">NO₂⁻</span><span class="bsub">confirmed</span></div>
    </div>
  </div>
</div>

<div class="note"><b>Key distinction — NO₃⁻ vs NO₂⁻:</b> Both produce NH₃ with OH⁻ + Al foil. Only NO₂⁻ also decolourises acidified aqueous KMnO₄. Use the KMnO₄ test to distinguish.</div>

<!-- Cl- -->
<div class="anion-row" style="margin-top:8px;">
  <div class="ion-badge b-gray">Cl⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain">
    <div class="box b-gray" style="width:120px;"><span class="bname">Ag⁺(aq)</span><span class="bsub">AgNO₃ solution</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:120px;"><span class="bname">White ppt</span><span class="bsub">AgCl forms</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:140px;"><span class="bname">Add NH₃(aq)</span><span class="bsub">ppt dissolves fully</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-green" style="width:70px;"><span class="bion">Cl⁻</span><span class="bsub">confirmed</span></div>
  </div>
</div>

<!-- Br- -->
<div class="anion-row">
  <div class="ion-badge b-amber">Br⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain">
    <div class="box b-gray" style="width:120px;"><span class="bname">Ag⁺(aq)</span><span class="bsub">AgNO₃ solution</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <!-- CHANGED: data booklet says "cream/off-white ppt" -->
    <div class="box b-amber" style="width:120px;"><span class="bname">Cream/off-white ppt</span><span class="bsub">AgBr forms</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:160px;"><span class="bname">Add NH₃(aq)</span><span class="bsub">ppt partially soluble</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-amber" style="width:70px;"><span class="bion">Br⁻</span><span class="bsub">confirmed</span></div>
  </div>
</div>

<!-- I- -->
<!-- CHANGED: data booklet says "pale yellow ppt" not just "yellow ppt" -->
<div class="anion-row">
  <div class="ion-badge b-purple">I⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain">
    <div class="box b-gray" style="width:120px;"><span class="bname">Ag⁺(aq)</span><span class="bsub">AgNO₃ solution</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-purple" style="width:120px;"><span class="bname">Pale yellow ppt</span><span class="bsub">AgI forms</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:160px;"><span class="bname">Add NH₃(aq)</span><span class="bsub">ppt insoluble</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-purple" style="width:70px;"><span class="bion">I⁻</span><span class="bsub">confirmed</span></div>
  </div>
</div>

<div class="note"><b>Key distinction — Cl⁻ vs Br⁻ vs I⁻:</b> All give ppt with Ag⁺(aq). Distinguish by colour (white / cream-off-white / pale yellow) and NH₃ solubility: AgCl dissolves fully, AgBr partially, AgI insoluble.</div>

<!-- CrO4 2- -->
<div class="anion-row" style="margin-top:8px;">
  <div class="ion-badge b-amber" style="font-size:10px;">CrO₄²⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain" style="flex-wrap:wrap;gap:4px 0;">
    <div class="box b-amber" style="width:150px;"><span class="bname">Yellow solution</span><span class="bsub">characteristic colour</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:95px;"><span class="bname">Add H⁺(aq)</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-amber" style="width:130px;"><span class="bname">Turns orange</span><span class="bsub">(→ Cr₂O₇²⁻)</span></div>
    <div style="display:flex;align-items:center;width:100%;margin-top:2px;">
      <span class="alabel" style="color:var(--amber);">or:</span>
      <div class="hline arr-r" style="width:6px;"></div>
      <div class="box b-gray" style="width:95px;"><span class="bname">Add Ba²⁺(aq)</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-amber" style="width:120px;"><span class="bname">Yellow ppt BaCrO₄</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-gray" style="width:95px;"><span class="bname">Add Pb²⁺(aq)</span></div>
      <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
      <div class="box b-amber" style="width:140px;"><span class="bname">Bright yellow ppt PbCrO₄</span></div>
    </div>
  </div>
</div>

<!-- S2O3 2- NEW -->
<!-- CHANGED: added thiosulfate — present in data booklet, was missing entirely -->
<div class="anion-row" style="margin-top:8px;">
  <div class="ion-badge b-gray" style="font-size:10px;">S₂O₃²⁻</div>
  <div class="hline arr-r" style="width:10px;align-self:center;"></div>
  <div class="chain">
    <div class="box b-gray" style="width:120px;"><span class="bname">Dilute acid H⁺(aq)</span><span class="bsub">(HCl or HNO₃)</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-gray" style="width:200px;"><span class="bname">Off-white / pale yellow ppt — slowly</span><span class="bsub">sulfur precipitate forms over time</span></div>
    <div class="hline arr-r" style="flex:1;min-width:10px;"></div>
    <div class="box b-green" style="width:70px;"><span class="bion">S₂O₃²⁻</span><span class="bsub">confirmed</span></div>
  </div>
</div>

<div class="legend">
  <div class="li"><div class="ls" style="background:var(--gray-f);border-color:var(--gray-b);"></div>Reagent / test step</div>
  <div class="li"><div class="ls" style="background:var(--teal-f);border-color:var(--teal-b);"></div>Observation (positive)</div>
  <div class="li"><div class="ls" style="background:var(--green-f);border-color:var(--green-b);"></div>Confirmed / identified</div>
  <div class="li"><div class="ls" style="background:var(--blue-f);border-color:var(--blue-b);"></div>SO₄²⁻</div>
  <div class="li"><div class="ls" style="background:var(--amber-f);border-color:var(--amber-b);"></div>SO₃²⁻ / Br⁻ / CrO₄²⁻</div>
  <div class="li"><div class="ls" style="background:var(--coral-f);border-color:var(--coral-b);"></div>NO₂⁻</div>
  <div class="li"><div class="ls" style="background:var(--purple-f);border-color:var(--purple-b);"></div>I⁻</div>
</div>

<hr class="divider">
</div>


<!-- ═══════════════════════════════════════════════════
     SECTION 3: GAS TESTS
═══════════════════════════════════════════════════ -->
<div id="qa-gas" class="qa-pnl">
<!-- ═══ SECTION 3: GAS TESTS ═══ -->
<h2>3 — Gas tests</h2>

<!-- CHANGED: removed Cl₂ and SO₂ (not in data booklet gas table); kept as note below -->
<div class="gas-grid">
  <div class="gas-hdr">Gas</div>
  <div class="gas-hdr">Test</div>
  <div class="gas-hdr">Positive result</div>

  <div class="gas-cell gas-name">NH₃</div>
  <div class="gas-cell">Hold damp red litmus paper in the gas</div>
  <div class="gas-cell b-teal" style="color:var(--teal);">Paper turns <b>blue</b></div>

  <div class="gas-cell gas-name gas-row-even">CO₂</div>
  <div class="gas-cell gas-row-even">Bubble gas through limewater (Ca(OH)₂ solution)</div>
  <div class="gas-cell gas-row-even" style="color:var(--gray);"><b>White ppt</b> forms (CaCO₃) — dissolves with excess CO₂</div>

  <div class="gas-cell gas-name">H₂</div>
  <div class="gas-cell">Hold a lighted splint at the mouth of the tube</div>
  <div class="gas-cell b-amber" style="color:var(--amber);"><b>"Pop"</b> sound heard</div>

  <div class="gas-cell gas-name gas-row-even">O₂</div>
  <div class="gas-cell gas-row-even">Insert a glowing splint into the gas</div>
  <div class="gas-cell gas-row-even b-coral" style="color:var(--coral);">Splint <b>relights</b></div>
</div>

<!-- CHANGED: Cl₂ and SO₂ moved here as supplementary note; not in official data booklet gas table -->
<div class="note" style="margin-top:10px;"><b>Additional gas tests (not in official data booklet gas table — for reference only):</b><br>
• <b>Cl₂:</b> Hold damp litmus paper in gas → paper is bleached / decolourised.<br>
• <b>SO₂:</b> Hold damp potassium dichromate(VI) paper in gas → paper turns orange to green (Cr³⁺ formed). Note: SO₂ also decolourises acidified aqueous KMnO₄.
</div>

<!-- CHANGED: added Tests for elements section — present in data booklet, was entirely missing -->
<h2 style="margin-top:20px;">4 — Tests for elements</h2>

<div class="gas-grid">
  <div class="gas-hdr">Element</div>
  <div class="gas-hdr">Test</div>
  <div class="gas-hdr">Positive result</div>

  <div class="gas-cell gas-name">I₂</div>
  <div class="gas-cell">Add starch solution to the sample</div>
  <div class="gas-cell b-purple" style="color:var(--purple);">Solution turns <b>blue-black</b></div>
</div>

<div class="legend">
  <div class="li"><div class="ls" style="background:var(--teal-f);border-color:var(--teal-b);"></div>NH₃ (alkaline)</div>
  <div class="li"><div class="ls" style="background:var(--amber-f);border-color:var(--amber-b);"></div>H₂ (pop)</div>
  <div class="li"><div class="ls" style="background:var(--coral-f);border-color:var(--coral-b);"></div>O₂ (oxidising)</div>
  <div class="li"><div class="ls" style="background:var(--purple-f);border-color:var(--purple-b);"></div>I₂ (starch test)</div>
</div>
</div>
</div>
<script>
function showQA(name, btn) {
  document.querySelectorAll('.qa-pnl').forEach(function(p){ p.classList.remove('on'); });
  document.querySelectorAll('.qa-nav button').forEach(function(b){ b.classList.remove('on'); });
  document.getElementById('qa-' + name).classList.add('on');
  if (btn) btn.classList.add('on');
}
</script>
{% endraw %}