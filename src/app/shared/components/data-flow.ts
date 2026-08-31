import { Component } from '@angular/core';

@Component({
  selector: 'qm-data-flow',
  template: `
  <div class="qm-flow" aria-hidden="true">
    <svg viewBox="0 0 640 360" role="img" class="qm-flow__svg">
      <!-- connections -->
      <path class="qm-flow__line qm-flow__line--1" d="M 90 180 C 170 180, 190 120, 270 120" fill="none" stroke="#4361EE" stroke-width="2.5" stroke-dasharray="8 6" />
      <path class="qm-flow__line qm-flow__line--2" d="M 270 120 C 350 120, 370 180, 450 180" fill="none" stroke="#7C5CFF" stroke-width="2.5" stroke-dasharray="8 6" />
      <path class="qm-flow__line qm-flow__line--3" d="M 450 180 C 530 180, 550 240, 630 120" fill="none" stroke="#00C9A7" stroke-width="2.5" stroke-dasharray="8 6" style="opacity:.9" />
      <!-- nodes -->
      <g class="qm-node qm-node--1"><circle cx="90" cy="180" r="28" fill="#4361EE"/><text x="90" y="185" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">DATA</text></g>
      <g class="qm-node qm-node--2"><rect x="230" y="92" width="80" height="56" rx="12" fill="#fff" stroke="#7C5CFF" stroke-width="2"/><text x="270" y="114" text-anchor="middle" font-size="9" font-weight="700" fill="#0D111A">STRUCTURE</text><text x="270" y="128" text-anchor="middle" font-size="7" fill="#8A94A6">schema · lake</text></g>
      <g class="qm-node qm-node--3"><circle cx="450" cy="180" r="32" fill="#7C5CFF"/><text x="450" y="176" text-anchor="middle" fill="#fff" font-size="9" font-weight="700">KNOWLEDGE</text><text x="450" y="188" text-anchor="middle" fill="#fff" font-size="7" opacity=".9">graph</text></g>
      <g class="qm-node qm-node--4"><rect x="550" y="92" width="84" height="56" rx="12" fill="#0E1117" stroke="#00C9A7" stroke-width="2"/><text x="592" y="114" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">INTELLIGENCE</text><text x="592" y="128" text-anchor="middle" font-size="7" fill="#8A94A6">agents · models</text></g>
      <g class="qm-node qm-node--5"><circle cx="610" cy="250" r="26" fill="#00C9A7"/><text x="610" y="254" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">SYSTEM</text></g>
    </svg>
    <div class="qm-flow__chips">
      <span class="qm-chip qm-chip--1">Model Trained: 99.2%</span>
      <span class="qm-chip qm-chip--2">AI System Deployed</span>
      <span class="qm-chip qm-chip--3">Lineage verified ✓</span>
    </div>
  </div>
  `,
  styles: `
  .qm-flow{ position:relative; }
  .qm-flow__svg{ width:100%; height:auto; filter: drop-shadow(0 12px 32px rgba(0,0,0,.35)); }
  .qm-flow__line{ stroke-dashoffset: 0; animation: qmDash 2.8s linear infinite; }
  .qm-flow__line--2{ animation-delay:.4s; } .qm-flow__line--3{ animation-delay:.8s; }
  .qm-node{ animation: qmPop .6s var(--ease-spring) both; }
  .qm-node--1{ animation-delay: 1.1s; } .qm-node--2{ animation-delay: 1.35s; } .qm-node--3{ animation-delay: 1.6s; } .qm-node--4{ animation-delay: 1.85s; } .qm-node--5{ animation-delay: 2.1s; }
  .qm-flow__chips{ position:absolute; left: 50%; bottom: -8px; transform: translateX(-50%); display:flex; gap:8px; flex-wrap:wrap; justify-content:center; width:100%; }
  .qm-chip{ font-size:11px; font-weight:600; padding:6px 10px; border-radius: var(--radius-pill); background: rgba(255,255,255,.92); color: var(--color-text-primary); border:1px solid rgba(255,255,255,.6); box-shadow: var(--shadow-md); backdrop-filter: blur(6px); animation: qmChip .5s var(--ease-out) both; }
  .qm-chip--1{ animation-delay: 2.4s; } .qm-chip--2{ animation-delay: 2.6s; } .qm-chip--3{ animation-delay: 2.8s; }
  @keyframes qmDash{ to{ stroke-dashoffset: -56; } }
  @keyframes qmPop{ from{ opacity:0; transform: scale(.85);} to{ opacity:1; transform:none; } }
  @keyframes qmChip{ from{ opacity:0; transform: translateY(8px);} to{ opacity:1; transform:none; } }
  @media(prefers-reduced-motion:reduce){ .qm-flow__line, .qm-node, .qm-chip{ animation:none !important; } }
  `,
})
export class DataFlow {}
