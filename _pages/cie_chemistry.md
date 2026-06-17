---
layout: page
title: CIE Chemistry
permalink: /cie-chemistry/
description: CIE A-Level chemistry notes and resources.
nav: true
nav_order: 3
---

## Topic Notes

<div class="card-grid">
  <a href="{{ '/cie-chemistry/topic-1-atomic-structure/' | relative_url }}" class="resource-card">
    <div class="card-body">
      <p class="card-sub">Topic 1 · Physical Chemistry · AS Level</p>
      <h3>Atomic Structure</h3>
      <p class="card-desc">Subatomic particles, isotopes, mass spectrometry, electron configuration, and ionisation energy trends.</p>
      <span class="card-tag">Notes · Worked Examples · Exam Technique · Checklist</span>
    </div>
  </a>

  <a href="{{ '/cie-chemistry/topic-13-organic-synthesis/' | relative_url }}" class="resource-card">
    <div class="card-body">
      <p class="card-sub">Topic 13 · Organic Chemistry · AS Level</p>
      <h3>Introduction to Organic Chemistry</h3>
      <p class="card-desc">Key terms, bond fission, and all six reaction types — substitution, addition, elimination, condensation, hydrolysis, oxidation and reduction.</p>
      <span class="card-tag">Key Terms · Reactions · Reagent Summary · Exam Technique</span>
    </div>
  </a>
</div>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.resource-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;
  background: var(--global-bg-color);
}

.resource-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border-color: var(--global-theme-color);
  text-decoration: none;
  color: inherit;
}

.card-body {
  padding: 16px;
}

.card-body h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--global-text-color);
}

.card-sub {
  font-size: 12px;
  color: var(--global-theme-color);
  font-weight: 500;
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-desc {
  font-size: 13.5px;
  color: var(--global-text-color-light);
  margin: 0 0 12px;
  line-height: 1.5;
}

.card-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--global-code-bg-color);
  color: var(--global-text-color-light);
}
</style>