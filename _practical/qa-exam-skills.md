---
layout: page
title: Qualitative Analysis — Exam Skills
description: CIE A-Level Chemistry 9701 · How to Answer Identification Questions
img: assets/img/chemistrypracticalcover.jpg
permalink: /practical/qualitative-analysis-exam-skills/
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Code+Pro:wght@500&display=swap');

  :root {
    --gray:   #5F5E5A; --gray-f:  #F1EFE8; --gray-b:  #B4B2A9;
    --teal:   #0F6E56; --teal-f:  #E1F5EE; --teal-b:  #5DCAA5;
    --coral:  #993C1D; --coral-f: #FAECE7; --coral-b: #F0997B;
    --blue:   #185FA5; --blue-f:  #E6F1FB; --blue-b:  #85B7EB;
    --green:  #3B6D11; --green-f: #EAF3DE; --green-b: #97C459;
    --amber:  #854F0B; --amber-f: #FAEEDA; --amber-b: #EF9F27;
    --dark:   #1F2937;
    --font: 'Source Sans 3', sans-serif;
    --mono: 'Source Code Pro', monospace;
  }

  .es-wrap {
    font-family: var(--font);
    color: var(--dark);
    padding: 24px 0 40px;
    font-size: 14px;
    line-height: 1.7;
  }

  .es-nav{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 1.4rem}
  .es-nav button{padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer;border:1px solid #ccc;background:#fff;color:#555;font-family:var(--mono);letter-spacing:0.02em;transition:all 0.15s}
  .es-nav button.on{background:#1F2937;color:#fff;font-weight:500;border-color:#1F2937}
  .es-pnl{display:none}.es-pnl.on{display:block}

  .es-wrap h2{
    font-size:15px;font-weight:700;color:#fff;
    background:var(--dark);
    padding:5px 12px;border-radius:5px;
    margin-bottom:14px;margin-top:24px;
    display:inline-block;
  }
  .es-wrap h3{
    font-size:14px;font-weight:700;color:var(--dark);
    margin:16px 0 8px;
  }
  .es-wrap p{margin-bottom:8px;font-size:13.5px;}

  .q-block{
    background:var(--gray-f);border:1px solid var(--gray-b);
    border-left:4px solid var(--dark);border-radius:0 8px 8px 0;
    padding:10px 14px;margin:12px 0;font-size:13px;
  }
  .q-block .q-label{
    font-family:var(--mono);font-size:10px;font-weight:600;
    letter-spacing:0.08em;text-transform:uppercase;
    color:var(--gray);margin-bottom:6px;display:block;
  }
  .q-block .q-text{font-size:13.5px;color:var(--dark);line-height:1.6;}
  .q-block .q-sub{font-size:12px;color:var(--gray);margin-top:4px;font-style:italic;}

  .ans-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0;}
  .ans-card{border-radius:8px;padding:10px 14px;font-size:13px;}
  .ans-bad{background:#FCEBEB;border:1px solid #F09595;border-left:3px solid #E24B4A;}
  .ans-ok{background:var(--teal-f);border:1px solid var(--teal-b);border-left:3px solid var(--teal);}
  .ans-label{
    font-family:var(--mono);font-size:10px;font-weight:600;
    letter-spacing:0.06em;text-transform:uppercase;
    margin-bottom:5px;display:block;
  }
  .ans-bad .ans-label{color:#791F1F;}
  .ans-ok .ans-label{color:var(--teal);}
  .ans-text{font-size:13px;line-height:1.6;color:var(--dark);}
  .ans-text s{color:#999;}

  .explain{
    background:var(--blue-f);border:1px solid var(--blue-b);
    border-left:3px solid var(--blue);border-radius:0 8px 8px 0;
    padding:8px 14px;margin-top:6px;font-size:12.5px;
    color:var(--blue);line-height:1.6;
  }
  .explain .ex-label{
    font-family:var(--mono);font-size:10px;font-weight:600;
    letter-spacing:0.06em;text-transform:uppercase;
    color:var(--blue);margin-bottom:4px;display:block;
  }

  .warn{
    background:var(--amber-f);border:1px solid var(--amber-b);
    border-left:3px solid var(--amber);border-radius:0 8px 8px 0;
    padding:8px 14px;margin:10px 0;font-size:12.5px;
    color:var(--amber);line-height:1.6;
  }
  .warn strong{color:var(--amber);}

  .rule-list{list-style:none;padding:0;margin:8px 0;}
  .rule-list li{
    display:flex;gap:8px;align-items:flex-start;
    padding:5px 0;border-bottom:1px solid #f0f0f0;
    font-size:13px;
  }
  .rule-list li:last-child{border-bottom:none;}
  .rule-icon{
    width:18px;height:18px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    font-size:10px;font-weight:700;flex-shrink:0;margin-top:2px;
  }
  .icon-bad{background:#FCEBEB;color:#791F1F;}
  .icon-ok{background:var(--teal-f);color:var(--teal);}
  .rule-text{line-height:1.5;color:var(--dark);}
  .rule-text strong{font-weight:700;}

  .ms-table{width:100%;border-collapse:collapse;font-size:12.5px;margin:10px 0;}
  .ms-table th{
    background:var(--dark);color:#fff;font-weight:600;
    padding:6px 10px;text-align:left;border:1px solid var(--dark);
  }
  .ms-table td{
    padding:6px 10px;border:1px solid var(--gray-b);
    vertical-align:top;line-height:1.5;
    font-size:13.5px;
  }
  .ms-table tr:nth-child(even) td{background:var(--gray-f);}
  .ms-table .ok{color:var(--teal);font-weight:600;}
  .ms-table .bad{color:#791F1F;font-weight:600;}

  .step-row{display:flex;gap:8px;align-items:flex-start;margin-bottom:8px;}
  .step-n{
    font-family:var(--mono);font-size:11px;font-weight:600;
    color:var(--teal);background:var(--teal-f);
    width:22px;height:22px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;margin-top:2px;
  }
  .step-t{font-size:13px;color:var(--dark);line-height:1.6;}

  .divider{border:none;border-top:1px solid #E5E7EB;margin:20px 0;}

  @media(max-width:560px){.ans-grid{grid-template-columns:1fr;}}
</style>

<div class="es-wrap">

<p style="font-size:13.5px;color:#555;line-height:1.8;margin-bottom:1rem;">
This guide uses a real CIE exam question (9701/34, Oct/Nov 2020, Question 3) to show exactly how to write observations, carry out further tests, write ionic equations, and avoid the most penalised mistakes. FB 4 is Zn(NO₃)₂(aq) and FB 5 is Na₂SO₃(aq).
</p>

<div style="display:inline-flex;align-items:center;gap:6px;background:var(--teal-f);border:1px solid var(--teal);border-radius:6px;padding:5px 12px;margin-bottom:0.6rem;">
  <span style="font-size:14px;">👇</span>
  <span style="font-size:12px;color:var(--teal);font-weight:600;font-family:var(--mono);letter-spacing:0.04em;">Click a section below to explore</span>
</div>

<div class="es-nav">
  <button class="on" onclick="showES('observations',this)">01 Writing observations</button>
  <button onclick="showES('further',this)">02 Further tests</button>
  <button onclick="showES('rules',this)">03 Golden rules</button>
</div>

<!-- ── 01 WRITING OBSERVATIONS ─────────────────────────────── -->
<div id="sec-observations" class="es-pnl on">
  <h2>01 — Writing observations</h2>

  <p>The mark scheme awards marks for specific, precise descriptions of what you <em>see</em> — not what you conclude. Every observation must be written at the correct stage and use the right vocabulary.</p>

  <div class="q-block">
    <span class="q-label">Question 3(a) — Test 1</span>
    <span class="q-text">Add an equal volume of aqueous sodium carbonate to FB 4 (Zn(NO₃)₂) and FB 5 (Na₂SO₃). Record your observations.</span>
  </div>

  <div class="ans-grid">
    <div class="ans-card ans-bad">
      <span class="ans-label">✕ Wrong</span>
      <div class="ans-text">
        FB 4: zinc carbonate precipitate forms<br>
        FB 5: no reaction
      </div>
    </div>
    <div class="ans-card ans-ok">
      <span class="ans-label">✓ Correct</span>
      <div class="ans-text">
        FB 4: white precipitate forms<br>
        FB 5: no reaction / no change / no ppt
      </div>
      <code style="display:block;margin-top:8px;font-size:11px;background:#fff;border-radius:4px;padding:4px 8px;color:var(--teal);">Zn²⁺(aq) + CO₃²⁻(aq) → ZnCO₃(s)</code>
    </div>
  </div>
  <div class="explain">
    <span class="ex-label">Why</span>
    "Zinc carbonate precipitate" is a conclusion, not an observation. The mark scheme awards the star (*) for "white precipitate" — the colour is the observation. "No ppt" alone is sufficient for FB 5. Note: the mark scheme rejects "white ppt soluble in excess" here because Na₂CO₃ does not dissolve precipitates.
  </div>

  <div class="divider"></div>

  <div class="q-block">
    <span class="q-label">Question 3(a) — Test 2</span>
    <span class="q-text">Add aqueous ammonia to FB 4 and FB 5.</span>
  </div>

  <div class="ans-grid">
    <div class="ans-card ans-bad">
      <span class="ans-label">✕ Wrong</span>
      <div class="ans-text">
        FB 4: white precipitate<br>
        FB 5: no change
      </div>
    </div>
    <div class="ans-card ans-ok">
      <span class="ans-label">✓ Correct</span>
      <div class="ans-text">
        FB 4: white precipitate forms <strong>and</strong> dissolves / is soluble in excess NH₃<br>
        FB 5: no reaction / no change / no ppt
      </div>
      <code style="display:block;margin-top:8px;font-size:11px;background:#fff;border-radius:4px;padding:4px 8px;color:var(--teal);">Zn²⁺(aq) + 2NH₃(aq) + 2H₂O(l) → Zn(OH)₂(s) + 2NH₄⁺(aq)</code>
      <code style="display:block;margin-top:4px;font-size:11px;background:#fff;border-radius:4px;padding:4px 8px;color:var(--teal);">Zn(OH)₂(s) + 4NH₃(aq) → [Zn(NH₃)₄]²⁺(aq) + 2OH⁻(aq) &nbsp;(dissolves in excess)</code>
    </div>
  </div>
  <div class="explain">
    <span class="ex-label">Why</span>
    The mark scheme requires <strong>both</strong> — "white precipitate" AND "soluble in excess" — for the full mark. Writing only "white precipitate" misses what makes Zn²⁺ distinctive. The solubility in excess NH₃ is the key distinguishing feature here. Both observations carry a star (*) and two * = 1 mark (round down).
  </div>

  <div class="divider"></div>

  <div class="q-block">
    <span class="q-label">Question 3(b) — NaOH then heat then Al foil</span>
    <span class="q-text">Add aqueous sodium hydroxide, warm gently, then add aluminium foil. Record observations at each stage for FB 4 and FB 5.</span>
    <span class="q-sub">This is a 3-stage test — you must report observations at each stage separately.</span>
  </div>

<table class="ms-table">
    <tr><th>Stage</th><th>FB 4 (Zn²⁺) — correct observation</th><th>FB 5 (SO₃²⁻) — correct observation</th></tr>
    <tr>
      <td>Add NaOH</td>
      <td class="ok">
        White precipitate, soluble in excess
        <code style="display:block;margin-top:6px;font-size:11px;background:#E1F5EE;border-radius:4px;padding:4px 8px;color:var(--teal);font-weight:500;">Zn²⁺(aq) + 2OH⁻(aq) → Zn(OH)₂(s)</code>
        <code style="display:block;margin-top:3px;font-size:11px;background:#E1F5EE;border-radius:4px;padding:4px 8px;color:var(--teal);font-weight:500;">Zn(OH)₂(s) + 2OH⁻(aq) → [Zn(OH)₄]²⁻(aq) &nbsp;(excess)</code>
      </td>
      <td>No change / no ppt</td>
    </tr>
    <tr>
      <td>Warm</td>
      <td colspan="2" style="color:var(--gray);font-style:italic;">Ignore — mark not available for heating stage alone</td>
    </tr>
    <tr>
      <td>Add Al foil</td>
      <td class="ok">
        Effervescence / fizzing — gas turns red litmus blue (NH₃)
        <code style="display:block;margin-top:6px;font-size:11px;background:#E1F5EE;border-radius:4px;padding:4px 8px;color:var(--teal);font-weight:500;">8Al(s) + 3NO₃⁻(aq) + 5OH⁻(aq) + 2H₂O(l) → 8AlO₂⁻(aq) + 3NH₃(g)</code>
        <code style="display:block;margin-top:3px;font-size:11px;background:#E1F5EE;border-radius:4px;padding:4px 8px;color:var(--teal);font-weight:500;">NH₃ turns damp red litmus blue ✓</code>
      </td>
      <td class="ok">
        Effervescence / fizzing / bubbling — gas pops with lighted splint (H₂)
        <code style="display:block;margin-top:6px;font-size:11px;background:#E1F5EE;border-radius:4px;padding:4px 8px;color:var(--teal);font-weight:500;">2Al(s) + 2OH⁻(aq) + 2H₂O(l) → 2AlO₂⁻(aq) + 3H₂(g)</code>
        <code style="display:block;margin-top:3px;font-size:11px;background:#E1F5EE;border-radius:4px;padding:4px 8px;color:var(--teal);font-weight:500;">H₂ gives squeaky pop with lighted splint ✓</code>
      </td>
    </tr>
  </table>

  <div class="explain">
    <span class="ex-label">Why different gases?</span>
    The anion determines the gas — not the cation. FB 4 contains NO₃⁻, which is reduced by Al in alkaline solution to produce NH₃. FB 5 contains SO₃²⁻, which is not reduced under these conditions — instead Al simply reacts with the excess NaOH to produce H₂. This is why the Al foil test can distinguish NO₃⁻ from SO₃²⁻.
  </div>

  <div class="warn">
    <strong>Critical:</strong> If you reported gas (NH₃ or any other gas) during the heating stage alone, the gas test observation in the Al foil stage is rejected. Always say "more effervescence" when adding Al foil if you already noted bubbling on heating.
  </div>

  <div class="warn">
    <strong>Common mistake:</strong> Writing "gas turns litmus blue" for FB 5. FB 5 contains SO₃²⁻ (no nitrogen), so it cannot produce NH₃. The gas from FB 5 + NaOH + Al is H₂ — tested with a lighted splint (squeaky pop), not litmus.
  </div>
</div>

<!-- ── 02 FURTHER TESTS ─────────────────────────────────────── -->
<div id="sec-further" class="es-pnl">
  <h2>02 — Further tests (part c)</h2>

  <p>Part (c) asks you to select <strong>one further test</strong> that distinguishes the anions in FB 4 and FB 5, explain why it works, and record your observations. This is a 3-mark question requiring a reagent, an explanation, and observations.</p>

  <div class="q-block">
    <span class="q-label">Question 3(c)</span>
    <span class="q-text">Using the information given (nitrite/sulfite easily oxidised; nitrate/sulfate cannot be oxidised), select one further test to identify the anions in FB 4 and FB 5. State the reagent, explain why it works, and record observations.</span>
  </div>

  <div class="warn">
    <strong>What the redox table tells you:</strong> From tests 3(a) and 3(b) you already know FB 4 contains Zn²⁺ (white ppt with NH₃, soluble in excess) and FB 5 contains SO₃²⁻ or SO₄²⁻ (white ppt with Ba²⁺). The redox table is the key — sulfite is easily oxidised, sulfate cannot be.
  </div>

<h3>Approach A — acidified KMnO₄</h3>

  <div class="ans-grid">
    <div class="ans-card ans-bad">
      <span class="ans-label">✕ Wrong</span>
      <div class="ans-text">
        Reagent: KMnO₄<br>
        Explanation: it oxidises sulfite<br>
        Observation: colour changes in FB 5
      </div>
    </div>
    <div class="ans-card ans-ok">
      <span class="ans-label">✓ Correct</span>
      <div class="ans-text">
        Reagent: acidified potassium manganate(VII) / acidified KMnO₄<br>
        Explanation: SO₃²⁻ is easily oxidised and decolourises KMnO₄; NO₃⁻ cannot be oxidised so causes no colour change — this distinguishes the two anions<br>
        Observation: FB 5 decolourises the purple KMnO₄; FB 4 no change
      </div>
      <code style="display:block;margin-top:8px;font-size:11px;background:#fff;border-radius:4px;padding:4px 8px;color:var(--teal);">5SO₃²⁻(aq) + 2MnO₄⁻(aq) + 6H⁺(aq) → 5SO₄²⁻(aq) + 2Mn²⁺(aq) + 3H₂O(l)</code>
    </div>
  </div>
  <div class="explain">
    <span class="ex-label">Why the wrong answer fails</span>
    "KMnO₄" alone is not accepted — it must be <strong>acidified</strong>. The explanation must link the observation to the redox property in the table: SO₃²⁻ is easily oxidised (decolourises KMnO₄); NO₃⁻ cannot be oxidised (no change). You must describe the contrast between both solutions, not just the positive result for FB 5.
  </div>

  <h3>Approach B — acidified K₂Cr₂O₇</h3>

  <div class="ans-grid">
    <div class="ans-card ans-bad">
      <span class="ans-label">✕ Wrong</span>
      <div class="ans-text">
        Reagent: K₂Cr₂O₇<br>
        Explanation: dichromate oxidises sulfite<br>
        Observation: turns green in FB 5
      </div>
    </div>
    <div class="ans-card ans-ok">
      <span class="ans-label">✓ Correct</span>
      <div class="ans-text">
        Reagent: acidified potassium dichromate(VI) / acidified K₂Cr₂O₇<br>
        Explanation: SO₃²⁻ is easily oxidised and reduces Cr₂O₇²⁻ from orange to green; NO₃⁻ cannot be oxidised so no colour change<br>
        Observation: FB 5 turns orange solution green; FB 4 no change
      </div>
      <code style="display:block;margin-top:8px;font-size:11px;background:#fff;border-radius:4px;padding:4px 8px;color:var(--teal);">3SO₃²⁻(aq) + Cr₂O₇²⁻(aq) + 8H⁺(aq) → 3SO₄²⁻(aq) + 2Cr³⁺(aq) + 4H₂O(l)</code>
    </div>
  </div>
  <div class="explain">
    <span class="ex-label">Why the wrong answer fails</span>
    Same issue as KMnO₄ — must specify <strong>acidified</strong>. The colour change must be stated precisely: orange → green (Cr⁶⁺ → Cr³⁺). Writing "colour changes" without specifying the colours scores no mark for the observation.
  </div>

  <div class="warn">
    <strong>Both approaches are accepted by the mark scheme.</strong> KMnO₄ and K₂Cr₂O₇ are equally valid. In both cases the key word is <strong>acidified</strong> — the oxidising power of both reagents depends on H⁺ ions being present.
  </div>
  </div>
  </div>
<!-- ── 03 GOLDEN RULES ──────────────────────────────────────── -->
<div id="sec-rules" class="es-pnl">
  <h2>03 — Golden rules</h2>

  <p>These are the recurring reasons students lose marks in qualitative analysis questions, drawn directly from mark scheme reject notes.</p>

  <h3>Observations</h3>
  <ul class="rule-list">
    <li>
      <div class="rule-icon icon-bad">✕</div>
      <div class="rule-text"><strong>Never write conclusions as observations.</strong> "Zinc ions present" is a conclusion. "White precipitate forms" is an observation. The mark is for what you see, not what you deduce.</div>
    </li>
    <li>
      <div class="rule-icon icon-bad">✕</div>
      <div class="rule-text"><strong>Never omit the solubility in excess.</strong> When a precipitate dissolves in excess reagent, you must say so. "White precipitate" alone misses half the observation for many cation tests.</div>
    </li>
    <li>
      <div class="rule-icon icon-bad">✕</div>
      <div class="rule-text"><strong>Never report gas during heating if you use it to identify the ion.</strong> Gas identity must be confirmed by a separate test (litmus, splint).</div>
    </li>
    <li>
      <div class="rule-icon icon-ok">✓</div>
      <div class="rule-text"><strong>Always write "more" effervescence</strong> when adding Al foil if bubbling was already seen on heating. The mark scheme requires "more" to distinguish the two stages.</div>
    </li>
    <li>
      <div class="rule-icon icon-ok">✓</div>
      <div class="rule-text"><strong>Write observations for both solutions.</strong> Even if one shows no change, "no reaction / no change / no ppt" must be stated — it carries a mark star (*) just like a positive result.</div>
    </li>
  </ul>

  <div class="divider"></div>

  <h3>Reagents and tests</h3>
  <ul class="rule-list">
    <li>
      <div class="rule-icon icon-bad">✕</div>
      <div class="rule-text"><strong>Never use H₂SO₄ to distinguish SO₄²⁻ from SO₃²⁻.</strong> Sulfuric acid introduces SO₄²⁻ ions, creating a false result. Always use HCl or HNO₃.</div>
    </li>
    <li>
      <div class="rule-icon icon-bad">✕</div>
      <div class="rule-text"><strong>Never use KMnO₄ without specifying acidified.</strong> Acidified potassium manganate(VII) is the correct reagent. Unacidified KMnO₄ is not accepted.</div>
    </li>
    <li>
      <div class="rule-icon icon-ok">✓</div>
      <div class="rule-text"><strong>Always give the full reagent name or correct formula</strong> including its state — "BaCl₂(aq)" not just "barium" or "Ba²⁺" alone.</div>
    </li>
  </ul>


  <div class="divider"></div>

  <h3>Mark scheme vocabulary — words that cost marks</h3>
  <table class="ms-table">
    <tr><th>If you write...</th><th>Mark scheme says...</th><th>Fix</th></tr>
    <tr>
      <td>"zinc ions present"</td>
      <td class="bad">Reject — conclusion not observation</td>
      <td>"white precipitate forms"</td>
    </tr>
    <tr>
      <td>"white precipitate" (for NH₃ test, no more)</td>
      <td class="bad">Only half credit — solubility missing</td>
      <td>"white precipitate, soluble in excess"</td>
    </tr>
    <tr>
      <td>"soluble in excess" for Na₂CO₃ test</td>
      <td class="bad">Reject — Na₂CO₃ doesn't dissolve ppt</td>
      <td>Just "white precipitate"</td>
    </tr>
    <tr>
      <td>"add H₂SO₄" to distinguish sulfate/sulfite</td>
      <td class="bad">Reject — introduces SO₄²⁻</td>
      <td>"add dilute HCl or dilute HNO₃"</td>
    </tr>
    <tr>
      <td>Ionic equation without state symbols</td>
      <td class="bad">Zero marks for state symbol component</td>
      <td>Add (aq) and (s) to every species</td>
    </tr>
  </table>
</div>
<script>
function showES(name, btn) {
  document.querySelectorAll('.es-pnl').forEach(function(p){ p.classList.remove('on'); });
  document.querySelectorAll('.es-nav button').forEach(function(b){ b.classList.remove('on'); });
  document.getElementById('sec-' + name).classList.add('on');
  if (btn) btn.classList.add('on');
}
</script>
