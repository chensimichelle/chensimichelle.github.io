---
layout: page
title: CIE Biology
permalink: /cie-biology/
description: CIE A-Level Biology notes and resources.
nav: true
nav_order: 2
---

## Study Guides

<div class="card-grid">
  <a href="{{ '/cie-biology/9700-study-guide/' | relative_url }}" class="resource-card" target="_blank">
    <img src="{{ '/assets/img/cie_bio_cover.jpg' | relative_url }}" class="card-cover" alt="AS Level Biology 9700">
    <div class="card-body">
      <h3>AS Level Biology 9700</h3>
      <p class="card-sub">2025 Exam Study Guide</p>
      <p class="card-desc">Every question from the s25, w25, and m25 papers — with exact references, what was asked, and mark scheme points across all 8 topics.</p>
      <span class="card-tag">9 Topics · 60+ Questions</span>
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

.card-cover {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 16px;
}

.card-body h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 2px;
  color: var(--global-text-color);
}

.card-sub {
  font-size: 12px;
  color: var(--global-theme-color);
  font-weight: 500;
  margin: 0 0 8px;
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