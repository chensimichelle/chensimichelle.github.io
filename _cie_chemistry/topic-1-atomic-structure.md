---
layout: page
title: "Topic 1: Atomic Structure"
permalink: /cie-chemistry/topic-1-atomic-structure/
---

<style>
  :root {
    --blog-accent: #cc00cc;
    --blog-accent-light: #fdf0fd;
    --blog-accent-mid: #f0d0f0;
    --topic-color: #1a5fa8;
    --topic-light: #e8f0fb;
    --topic-mid: #b8d0f0;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #7a7a7a;
    --border: #e8e8e8;
    --bg: #ffffff;
    --bg-soft: #fafafa;
    --green: #1a7a3a;
    --green-light: #f0faf3;
    --red: #c0392b;
    --red-light: #fdf3f3;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
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
  /* ── Breadcrumb ── */
  .breadcrumb { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1.25rem; }
  .breadcrumb a { color: var(--topic-color); text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }
  /* ── Hero ── */
  .topic-hero { background: var(--topic-light); border: 1px solid var(--topic-mid); border-top: 4px solid var(--topic-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; }
  .topic-hero-eyebrow { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--topic-color); margin-bottom: 0.3rem; }
  .topic-hero-title { font-family: 'DM Serif Display', serif; font-size: 1.6rem; font-weight: 400; color: var(--text-primary); line-height: 1.2; margin-bottom: 0.2rem; }
  .topic-hero-sub { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.1rem; }
  .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.65rem; }
  .stat-card { background: white; border: 1px solid var(--topic-mid); border-radius: 8px; padding: 0.7rem 0.9rem; text-align: center; }
  .stat-num { font-family: 'DM Serif Display', serif; font-size: 1.35rem; color: var(--topic-color); display: block; line-height: 1; }
  .stat-label { font-size: 0.65rem; color: var(--text-muted); line-height: 1.35; margin-top: 0.15rem; }
  /* ── Info / callout boxes ── */
  .info-box { background: var(--topic-light); border-left: 4px solid var(--topic-color); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
  .info-box strong { color: var(--text-primary); }
  .warn-box { background: #fff8e6; border-left: 4px solid #e6a000; border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
  /* ── Definition cards ── */
  .def-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; margin-bottom: 2rem; }
  .def-card { background: white; border: 1px solid var(--border); border-left: 3px solid var(--topic-color); border-radius: 0 8px 8px 0; padding: 0.8rem 1rem; }
  .def-term { font-weight: 700; font-size: 0.85rem; color: var(--topic-color); margin-bottom: 0.25rem; }
  .def-body { font-size: 0.79rem; color: var(--text-secondary); line-height: 1.55; }
  /* ── Particle table ── */
  .ptable-wrap { overflow-x: auto; margin-bottom: 2rem; }
  .ptable { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  .ptable th { padding: 0.65rem 0.9rem; text-align: left; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; border-bottom: 2px solid var(--border); background: var(--topic-light); color: var(--topic-color); }
  .ptable td { padding: 0.65rem 0.9rem; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: top; line-height: 1.5; font-size: 0.8rem; }
  .ptable tr:nth-child(even) td { background: var(--bg-soft); }
  .ptable tr:last-child td { border-bottom: none; }
  /* ── Worked examples ── */
  .example-card { background: var(--bg-soft); border: 1px solid var(--border); border-radius: 10px; padding: 1.25rem; margin-bottom: 1.25rem; }
  .example-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--topic-color); margin-bottom: 0.5rem; }
  .example-q { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); background: var(--topic-light); border-radius: 6px; padding: 0.55rem 0.8rem; margin-bottom: 0.75rem; line-height: 1.5; }
  .example-steps { list-style: none; }
  .example-steps li { font-size: 0.81rem; color: var(--text-secondary); padding: 0.3rem 0 0.3rem 1.5rem; position: relative; line-height: 1.55; border-bottom: 1px solid var(--border); }
  .example-steps li:last-child { border-bottom: none; }
  .example-steps li::before { content: counter(step); counter-increment: step; position: absolute; left: 0; width: 1.1rem; height: 1.1rem; background: var(--topic-color); color: white; border-radius: 50%; font-size: 0.6rem; font-weight: 700; display: flex; align-items: center; justify-content: center; top: 0.38rem; }
  .example-steps { counter-reset: step; }
  .example-ans { background: var(--topic-light); border-radius: 6px; padding: 0.55rem 0.8rem; font-size: 0.83rem; font-weight: 600; color: var(--topic-color); margin-top: 0.6rem; }
  /* ── Do / Don't ── */
  .do-dont { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
  .do-card { background: var(--green-light); border-top: 3px solid var(--green); border-radius: 10px; padding: 1.1rem; }
  .dont-card { background: var(--red-light); border-top: 3px solid var(--red); border-radius: 10px; padding: 1.1rem; }
  .do-card-title { color: var(--green); font-weight: 700; font-size: 0.84rem; margin-bottom: 0.65rem; }
  .dont-card-title { color: var(--red); font-weight: 700; font-size: 0.84rem; margin-bottom: 0.65rem; }
  .ddlist { list-style: none; }
  .ddlist li { font-size: 0.79rem; color: var(--text-secondary); padding: 0.28rem 0 0.28rem 1.15rem; position: relative; line-height: 1.45; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .ddlist li:last-child { border-bottom: none; }
  .do-card .ddlist li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
  .dont-card .ddlist li::before { content: '✗'; position: absolute; left: 0; color: var(--red); font-weight: 700; }
  /* ── Outcome checklist ── */
  .outcome-list { list-style: none; margin-bottom: 2rem; }
  .outcome-list li { display: grid; grid-template-columns: 18px 1fr; gap: 0.65rem; align-items: start; padding: 0.45rem 0; border-bottom: 1px solid var(--border); font-size: 0.81rem; color: var(--text-secondary); line-height: 1.5; }
  .outcome-list li:last-child { border-bottom: none; }
  .outcome-check { width: 16px; height: 16px; border: 2px solid var(--topic-color); border-radius: 3px; margin-top: 2px; flex-shrink: 0; }
  /* ── Electron config table ── */
  .ec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 2rem; }
  .ec-card { background: white; border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.8rem; }
  .ec-element { font-weight: 700; font-size: 0.85rem; color: var(--topic-color); }
  .ec-z { font-size: 0.65rem; color: var(--text-muted); }
  .ec-config { font-size: 0.78rem; color: var(--text-primary); margin-top: 0.25rem; font-family: monospace; }
  /* ── Nav arrows ── */
  .topic-nav { display: flex; justify-content: space-between; align-items: center; padding-top: 2rem; margin-top: 1rem; border-top: 1px solid var(--border); }
  .topic-nav a { font-size: 0.8rem; color: var(--topic-color); text-decoration: none; font-weight: 600; padding: 0.45rem 0.9rem; border: 1px solid var(--topic-mid); border-radius: 6px; background: var(--topic-light); }
  .topic-nav a:hover { background: var(--topic-mid); }
  @media (max-width: 680px) {
    .stat-row, .def-grid, .do-dont { grid-template-columns: 1fr; }
    .ec-grid { grid-template-columns: 1fr 1fr; }
  }
</style>

<nav class="tab-nav">
  <div class="tab-nav-inner">
    <button class="tab-btn active" onclick="showTab('overview',this)">Overview</button>
    <button class="tab-btn" onclick="showTab('notes',this)">Notes</button>
    <button class="tab-btn" onclick="showTab('worked',this)">Worked Examples</button>
    <button class="tab-btn" onclick="showTab('exam',this)">Exam Technique</button>
    <button class="tab-btn" onclick="showTab('checklist',this)">Syllabus Checklist</button>
  </div>
</nav>

<!-- ═══════════ TAB 1: OVERVIEW ═══════════ -->
<div id="tab-overview" class="tab-panel active" style="display:block">

  <div class="breadcrumb">
    <a href="/cie-chemistry/">CIE Chemistry (9701)</a> › Topic 1
  </div>

  <p style="font-size:0.82rem;color:var(--text-muted);">AS Level · Physical Chemistry · CIE 9701 · 2025–2027 syllabus</p>
  <h2 class="section-title">Topic 1: Atomic Structure</h2>
  <div class="divider"></div>

  <div class="topic-hero">
    <div class="topic-hero-eyebrow">AS Level · Physical Chemistry · Topic 1 of 22</div>
    <div class="topic-hero-title">Atomic Structure</div>
    <p class="topic-hero-sub">The foundation of all chemistry — understanding the subatomic particles, electron arrangement, and nuclear notation that underpin every topic that follows. Tested in <strong>Paper 1 (MCQ)</strong> and <strong>Paper 2 (Structured)</strong>. Key skills: writing electron configurations, interpreting mass spectra, explaining ionisation energy trends.</p>
    <div class="stat-row">
      <div class="stat-card"><span class="stat-num">3</span><span class="stat-label">Subatomic particles</span></div>
      <div class="stat-card"><span class="stat-num">P1+P2</span><span class="stat-label">Papers assessed</span></div>
      <div class="stat-card"><span class="stat-num">~8%</span><span class="stat-label">Typical P1 share</span></div>
      <div class="stat-card"><span class="stat-num">High</span><span class="stat-label">Exam frequency</span></div>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">What this topic covers</h3>
  <div class="divider" style="margin-bottom:1rem;"></div>

  <div class="def-grid">
    <div class="def-card">
      <div class="def-term">Subatomic particles</div>
      <div class="def-body">Protons, neutrons, electrons — their relative masses, charges and locations in the atom.</div>
    </div>
    <div class="def-card">
      <div class="def-term">Isotopes</div>
      <div class="def-body">Atoms of the same element with different numbers of neutrons. Same Z, different A.</div>
    </div>
    <div class="def-card">
      <div class="def-term">Mass spectrometry</div>
      <div class="def-body">How a mass spectrometer works; interpreting spectra to find relative atomic mass (Ar).</div>
    </div>
    <div class="def-card">
      <div class="def-term">Electron configuration</div>
      <div class="def-body">Writing full and abbreviated configs using subshell notation (1s² 2s² 2p⁶…) and explaining exceptions (Cr, Cu).</div>
    </div>
    <div class="def-card">
      <div class="def-term">Ionisation energy</div>
      <div class="def-body">First and successive ionisation energies. Trends across periods and down groups. Evidence for shell structure.</div>
    </div>
    <div class="def-card">
      <div class="def-term">Atomic orbitals</div>
      <div class="def-body">Shapes of s, p and d orbitals. Aufbau principle, Hund's rule and the Pauli exclusion principle.</div>
    </div>
  </div>

  <div class="info-box"><strong>Why this topic matters:</strong> Electron configuration reappears in bonding (Topic 3), periodicity (Topic 9), transition metals (Topic 28), and throughout organic chemistry (bond polarity, lone pairs). Ionisation energy data questions appear almost every year in Paper 2.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Key particles at a glance</h3>
  <div class="ptable-wrap">
    <table class="ptable">
      <thead>
        <tr><th>Particle</th><th>Symbol</th><th>Relative Mass</th><th>Relative Charge</th><th>Location</th></tr>
      </thead>
      <tbody>
        <tr><td>Proton</td><td>p⁺</td><td>1</td><td>+1</td><td>Nucleus</td></tr>
        <tr><td>Neutron</td><td>n⁰</td><td>1</td><td>0</td><td>Nucleus</td></tr>
        <tr><td>Electron</td><td>e⁻</td><td>1/1840 (≈ 0)</td><td>−1</td><td>Shells / orbitals</td></tr>
      </tbody>
    </table>
  </div>

  <div class="warn-box"><strong>Common slip:</strong> The mass of an electron is often stated as zero in calculations (it is negligible), but never write that its charge is zero — it is −1 and defines the element's chemistry.</div>

</div>

<!-- ═══════════ TAB 2: NOTES ═══════════ -->
<div id="tab-notes" class="tab-panel">

  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Full revision notes · aligned with 9701 syllabus learning outcomes</p>
  <h2 class="section-title">Revision Notes</h2>
  <div class="divider"></div>

  <!-- Section A -->
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;color:var(--topic-color);">A. Nuclear Notation &amp; Isotopes</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:1rem;">Every atom is represented as <strong>ᴬ<sub>Z</sub>X</strong>, where <strong>A</strong> = mass number (protons + neutrons) and <strong>Z</strong> = atomic number (protons). The number of neutrons = A − Z.</p>
  <div class="info-box">
    <strong>Isotopes</strong> are atoms of the same element (same Z) with different numbers of neutrons (different A). They have identical chemical properties but different physical properties (e.g. melting point, rate of diffusion). Example: ¹²C and ¹³C and ¹⁴C are all isotopes of carbon (Z = 6).
  </div>

  <!-- Section B -->
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;color:var(--topic-color);">B. Mass Spectrometry</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:0.75rem;">A mass spectrometer separates ions by their mass-to-charge (m/z) ratio. The key steps are:</p>
  <ol style="list-style:none;margin-bottom:1rem;">
    <li style="display:grid;grid-template-columns:80px 1fr;gap:0.65rem;background:var(--topic-light);border:1px solid var(--topic-mid);border-radius:8px;padding:0.6rem 0.9rem;font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.4rem;"><span style="font-weight:700;color:var(--topic-color);">1. Vaporise</span><span>Sample is vaporised into gaseous atoms/molecules.</span></li>
    <li style="display:grid;grid-template-columns:80px 1fr;gap:0.65rem;background:var(--topic-light);border:1px solid var(--topic-mid);border-radius:8px;padding:0.6rem 0.9rem;font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.4rem;"><span style="font-weight:700;color:var(--topic-color);">2. Ionise</span><span>High-energy electrons knock out one electron from each atom → positive ions (M⁺).</span></li>
    <li style="display:grid;grid-template-columns:80px 1fr;gap:0.65rem;background:var(--topic-light);border:1px solid var(--topic-mid);border-radius:8px;padding:0.6rem 0.9rem;font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.4rem;"><span style="font-weight:700;color:var(--topic-color);">3. Accelerate</span><span>Electric field accelerates ions to the same kinetic energy.</span></li>
    <li style="display:grid;grid-template-columns:80px 1fr;gap:0.65rem;background:var(--topic-light);border:1px solid var(--topic-mid);border-radius:8px;padding:0.6rem 0.9rem;font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.4rem;"><span style="font-weight:700;color:var(--topic-color);">4. Deflect</span><span>Magnetic field deflects ions — lighter ions deflect more, heavier ions deflect less.</span></li>
    <li style="display:grid;grid-template-columns:80px 1fr;gap:0.65rem;background:var(--topic-light);border:1px solid var(--topic-mid);border-radius:8px;padding:0.6rem 0.9rem;font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.4rem;"><span style="font-weight:700;color:var(--topic-color);">5. Detect</span><span>Detector records the m/z and relative abundance of each ion.</span></li>
  </ol>
  <div class="info-box"><strong>Calculating Aᵣ from a mass spectrum:</strong> Multiply each isotope's mass by its % abundance, sum the results, divide by 100. e.g. for chlorine (75% ³⁵Cl, 25% ³⁷Cl): Aᵣ = (75 × 35 + 25 × 37) / 100 = <strong>35.5</strong></div>

  <!-- Section C -->
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;color:var(--topic-color);">C. Electron Configuration</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:0.75rem;">Electrons occupy subshells in order of increasing energy. The four rules to follow:</p>
  <div class="def-grid" style="margin-bottom:1rem;">
    <div class="def-card"><div class="def-term">Aufbau principle</div><div class="def-body">Electrons fill the lowest energy subshell first. Order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p…</div></div>
    <div class="def-card"><div class="def-term">Pauli exclusion principle</div><div class="def-body">Each orbital holds a maximum of 2 electrons with opposite spins (↑↓).</div></div>
    <div class="def-card"><div class="def-term">Hund's rule</div><div class="def-body">Electrons occupy orbitals singly before pairing. All single electrons have parallel spins.</div></div>
    <div class="def-card"><div class="def-term">Exceptions: Cr &amp; Cu</div><div class="def-body">Cr is [Ar] 3d⁵ 4s¹; Cu is [Ar] 3d¹⁰ 4s¹ — half-filled/full d subshells are extra stable.</div></div>
  </div>
  <h4 style="font-size:0.82rem;font-weight:700;color:var(--text-muted);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:0.6rem;">Common electron configurations (Period 1–3 + key exceptions)</h4>
  <div class="ec-grid">
    <div class="ec-card"><div class="ec-element">H</div><div class="ec-z">Z = 1</div><div class="ec-config">1s¹</div></div>
    <div class="ec-card"><div class="ec-element">He</div><div class="ec-z">Z = 2</div><div class="ec-config">1s²</div></div>
    <div class="ec-card"><div class="ec-element">C</div><div class="ec-z">Z = 6</div><div class="ec-config">1s² 2s² 2p²</div></div>
    <div class="ec-card"><div class="ec-element">Ne</div><div class="ec-z">Z = 10</div><div class="ec-config">1s² 2s² 2p⁶</div></div>
    <div class="ec-card"><div class="ec-element">Na</div><div class="ec-z">Z = 11</div><div class="ec-config">1s² 2s² 2p⁶ 3s¹</div></div>
    <div class="ec-card"><div class="ec-element">Cl</div><div class="ec-z">Z = 17</div><div class="ec-config">1s² 2s² 2p⁶ 3s² 3p⁵</div></div>
    <div class="ec-card"><div class="ec-element">Cr</div><div class="ec-z">Z = 24</div><div class="ec-config">[Ar] 3d⁵ 4s¹ ⚠</div></div>
    <div class="ec-card"><div class="ec-element">Cu</div><div class="ec-z">Z = 29</div><div class="ec-config">[Ar] 3d¹⁰ 4s¹ ⚠</div></div>
  </div>

  <!-- Section D -->
  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;color:var(--topic-color);">D. Ionisation Energy</h3>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:0.75rem;">The <strong>first ionisation energy (1st IE)</strong> is the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions:</p>
  <div class="info-box" style="font-family:monospace;font-size:0.85rem;">X(g) → X⁺(g) + e⁻ &nbsp;&nbsp; ΔH = 1st IE (always positive / endothermic)</div>
  <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.7;margin-bottom:0.75rem;margin-top:0.75rem;"><strong>Successive ionisation energies</strong> increase because each subsequent electron is removed from an increasingly positive ion. A large jump between successive IEs indicates that the next electron is being removed from a new (inner) shell — this is how you can deduce the group of an element.</p>
  <div class="def-grid">
    <div class="def-card"><div class="def-term">Trend across a period →</div><div class="def-body">Generally increases. More protons, same shielding, stronger nuclear attraction. Dips at group 3 (new subshell) and group 6 (paired electron repulsion).</div></div>
    <div class="def-card"><div class="def-term">Trend down a group ↓</div><div class="def-body">Decreases. Electrons are further from nucleus with more shielding from inner shells, so the outer electron is less strongly attracted.</div></div>
  </div>

</div>

<!-- ═══════════ TAB 3: WORKED EXAMPLES ═══════════ -->
<div id="tab-worked" class="tab-panel">

  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Fully worked solutions with examiner mark scheme annotations</p>
  <h2 class="section-title">Worked Examples</h2>
  <div class="divider"></div>

  <!-- Example 1 -->
  <div class="example-card">
    <div class="example-label">Example 1 · Mass spectrum calculation · Paper 1 / Paper 2 style</div>
    <div class="example-q">Boron has two naturally occurring isotopes: ¹⁰B (19.9%) and ¹¹B (80.1%). Calculate the relative atomic mass of boron to 1 decimal place.</div>
    <ol class="example-steps">
      <li>Multiply each isotope's mass by its percentage abundance: <br>¹⁰B: 10 × 19.9 = 199 &nbsp;·&nbsp; ¹¹B: 11 × 80.1 = 881.1</li>
      <li>Sum the results: 199 + 881.1 = 1080.1</li>
      <li>Divide by 100: 1080.1 ÷ 100 = 10.801</li>
      <li>Round to 1 d.p.: <strong>Aᵣ = 10.8</strong></li>
    </ol>
    <div class="example-ans">✓ Answer: Aᵣ(B) = 10.8</div>
  </div>

  <!-- Example 2 -->
  <div class="example-card">
    <div class="example-label">Example 2 · Electron configuration · AS Paper 1 style</div>
    <div class="example-q">Write the full electron configuration of a Cu²⁺ ion.</div>
    <ol class="example-steps">
      <li>Write the ground state configuration of Cu (note the exception): Cu = [Ar] 3d¹⁰ 4s¹</li>
      <li>Cu²⁺ has lost 2 electrons. Remove from the highest energy subshell first — 4s before 3d.</li>
      <li>Remove 1 electron from 4s¹ → [Ar] 3d¹⁰ (Cu⁺)</li>
      <li>Remove 1 more electron from 3d¹⁰ → [Ar] 3d⁹ (Cu²⁺)</li>
    </ol>
    <div class="example-ans">✓ Answer: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹</div>
  </div>

  <!-- Example 3 -->
  <div class="example-card">
    <div class="example-label">Example 3 · Successive ionisation energies · AS Paper 2 style</div>
    <div class="example-q">The successive ionisation energies (kJ mol⁻¹) for an element X are: 1090, 2350, 4610, 6220, 37 800, 47 300. Identify which group X belongs to and explain your reasoning.</div>
    <ol class="example-steps">
      <li>Look for the large jump in successive IEs: the jump occurs between the 4th IE (6220) and 5th IE (37 800).</li>
      <li>The large jump means the 5th electron is being removed from an inner shell (much closer to the nucleus).</li>
      <li>Therefore, there are 4 electrons in the outer shell → X is in <strong>Group 14</strong>.</li>
    </ol>
    <div class="example-ans">✓ Answer: Group 14. The large jump between the 4th and 5th ionisation energies shows the 5th electron is in a new, inner shell, confirming 4 outer shell electrons.</div>
  </div>

  <!-- Example 4 -->
  <div class="example-card">
    <div class="example-label">Example 4 · Nuclear notation · Paper 1 style</div>
    <div class="example-q">An atom of element Y has the symbol ⁵⁶₂₆Y. State the number of protons, neutrons and electrons in a neutral atom of Y.</div>
    <ol class="example-steps">
      <li>Atomic number Z = 26 → number of protons = <strong>26</strong></li>
      <li>Neutral atom → number of electrons = number of protons = <strong>26</strong></li>
      <li>Number of neutrons = A − Z = 56 − 26 = <strong>30</strong></li>
    </ol>
    <div class="example-ans">✓ Answer: Protons = 26, Neutrons = 30, Electrons = 26</div>
  </div>

</div>

<!-- ═══════════ TAB 4: EXAM TECHNIQUE ═══════════ -->
<div id="tab-exam" class="tab-panel">

  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">Paper 1 · Paper 2 · Command words · Mark scheme language</p>
  <h2 class="section-title">Exam Technique</h2>
  <div class="divider"></div>

  <div class="do-dont">
    <div class="do-card">
      <div class="do-card-title">DO — Mark scheme habits</div>
      <ul class="ddlist">
        <li>State the full equation for 1st IE: X(g) → X⁺(g) + e⁻ with state symbols</li>
        <li>Use "per mole" language when defining IE: "energy to remove one mole of electrons from one mole of gaseous atoms"</li>
        <li>Show all working in Aᵣ calculations — method marks are available even for a wrong answer</li>
        <li>Reference "greater nuclear attraction" or "less shielding" when explaining IE trends — vague answers score 0</li>
        <li>For electron config of ions, remove electrons from highest energy subshell first (4s before 3d)</li>
      </ul>
    </div>
    <div class="dont-card">
      <div class="dont-card-title">DON'T — Common errors</div>
      <ul class="ddlist">
        <li>Don't write Cu as [Ar] 3d⁹ 4s² — the exception is [Ar] 3d¹⁰ 4s¹</li>
        <li>Don't omit state symbols in ionisation energy equations</li>
        <li>Don't confuse mass number (A) with atomic mass (Aᵣ) — they are different quantities</li>
        <li>Don't say "more electrons" when explaining why IE decreases down a group — specify shielding and distance from nucleus</li>
        <li>Don't use "shells" when "subshells" or "orbitals" is needed for full marks</li>
      </ul>
    </div>
  </div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;">Key command words for this topic</h3>
  <div class="divider" style="margin-bottom:1rem;"></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;margin-bottom:2rem;">
    <div class="def-card"><div class="def-term">State</div><div class="def-body">Give a concise answer — no explanation needed. e.g. "State the number of neutrons in ⁵⁶Fe."</div></div>
    <div class="def-card"><div class="def-term">Define</div><div class="def-body">Give the precise meaning of a term. Learn the syllabus wording for 1st IE — examiners compare against it.</div></div>
    <div class="def-card"><div class="def-term">Explain</div><div class="def-body">Give a reason using chemistry. A bare trend without a cause scores 0. Always reference particles and forces.</div></div>
    <div class="def-card"><div class="def-term">Deduce</div><div class="def-body">Use the data given to reach a conclusion. In IE graphs, identify the jump and link it to shell structure.</div></div>
  </div>

  <div class="warn-box"><strong>Paper 2 data question — successive IE graphs:</strong> These appear almost every year. Practise: (1) identifying the big jump, (2) stating how many outer electrons this implies, (3) identifying the group. This earns 2–3 marks and takes under 2 minutes with practice.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:0.5rem;margin-top:1.5rem;">High-mark definition: First Ionisation Energy</h3>
  <div class="divider" style="margin-bottom:1rem;"></div>
  <div class="info-box">
    <strong>Full marks definition (memorise this):</strong> "The energy required to remove one mole of electrons from one mole of gaseous atoms of an element to form one mole of gaseous singly-charged positive ions."
    <br><br>Equation (must include state symbols): <strong>X(g) → X⁺(g) + e⁻</strong>
    <br><br>Common mark scheme catches: missing "gaseous", missing "per mole", missing state symbols, or writing it as an exothermic process (it is always endothermic — ΔH is positive).
  </div>

</div>

<!-- ═══════════ TAB 5: SYLLABUS CHECKLIST ═══════════ -->
<div id="tab-checklist" class="tab-panel">

  <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--text-muted);">All learning outcomes from the 9701 syllabus (2025–2027) · tick off as you revise</p>
  <h2 class="section-title">Syllabus Checklist</h2>
  <div class="divider"></div>

  <div class="info-box">Use this checklist against the official Cambridge 9701 syllabus document. Each item below is a learning outcome — examiners write questions to test these exact statements. If you can't do an item confidently, go back to the Notes tab.</div>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1rem;margin-bottom:0.5rem;color:var(--topic-color);">1.1 Subatomic particles &amp; nuclear notation</h3>
  <ul class="outcome-list">
    <li><div class="outcome-check"></div>Identify and describe protons, neutrons and electrons in terms of relative charge and relative mass</li>
    <li><div class="outcome-check"></div>Deduce the number of protons, neutrons and electrons in atoms and ions given the atomic number, mass number and charge</li>
    <li><div class="outcome-check"></div>Describe the distribution of mass and charge within an atom</li>
    <li><div class="outcome-check"></div>Define the term isotope</li>
  </ul>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1rem;margin-bottom:0.5rem;margin-top:1.25rem;color:var(--topic-color);">1.2 Relative atomic mass &amp; mass spectrometry</h3>
  <ul class="outcome-list">
    <li><div class="outcome-check"></div>Define the terms relative isotopic mass and relative atomic mass (in terms of ¹²C)</li>
    <li><div class="outcome-check"></div>Describe the operation of a mass spectrometer (ionisation, acceleration, deflection, detection)</li>
    <li><div class="outcome-check"></div>Interpret a simple mass spectrum to calculate relative atomic mass</li>
    <li><div class="outcome-check"></div>Calculate Aᵣ from % abundance and isotopic masses</li>
  </ul>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1rem;margin-bottom:0.5rem;margin-top:1.25rem;color:var(--topic-color);">1.3 Electron configuration</h3>
  <ul class="outcome-list">
    <li><div class="outcome-check"></div>Describe the number of electrons in s, p and d subshells and in s, p and d orbitals</li>
    <li><div class="outcome-check"></div>Describe the shapes of s and p orbitals</li>
    <li><div class="outcome-check"></div>State the Aufbau principle, Hund's rule and the Pauli exclusion principle</li>
    <li><div class="outcome-check"></div>Write full electron configurations for atoms and ions (including transition metals)</li>
    <li><div class="outcome-check"></div>Explain the anomalous configurations of Cr and Cu</li>
    <li><div class="outcome-check"></div>Write abbreviated (noble gas core) electron configurations</li>
  </ul>

  <h3 style="font-family:'DM Serif Display',serif;font-size:1rem;margin-bottom:0.5rem;margin-top:1.25rem;color:var(--topic-color);">1.4 Ionisation energy</h3>
  <ul class="outcome-list">
    <li><div class="outcome-check"></div>Define first ionisation energy; write and interpret the equation for 1st IE</li>
    <li><div class="outcome-check"></div>Explain the general trend in first ionisation energies across Period 2 and Period 3</li>
    <li><div class="outcome-check"></div>Explain the dip in 1st IE between Groups 2→3 (new subshell) and 5→6 (electron pairing)</li>
    <li><div class="outcome-check"></div>Explain the trend in first ionisation energies down a group</li>
    <li><div class="outcome-check"></div>Explain how successive ionisation energies provide evidence for shell structure</li>
    <li><div class="outcome-check"></div>Deduce the group of an element from its successive ionisation energy data</li>
  </ul>

  <div class="topic-nav">
    <a href="/cie-chemistry/">&larr; Back to all topics</a>
    <a href="/cie-chemistry/topic-2/">Topic 2: Atoms, Molecules &amp; Stoichiometry &rarr;</a>
  </div>

</div>

<script>
  function showTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.remove('active'); p.style.display = 'none'; });
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
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
