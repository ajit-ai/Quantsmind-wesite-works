import { Component, input } from '@angular/core';

@Component({
  selector: 'qm-section-header',
  template: `
  <div class="qm-sh" [class.qm-sh--center]="center()">
    @if (eyebrow()) { <p class="qm-sh__eyebrow">{{ eyebrow() }}</p> }
    <h2 class="qm-sh__title">{{ title() }}</h2>
    @if (description()) { <p class="qm-sh__desc">{{ description() }}</p> }
  </div>
  `,
  styles: `
  .qm-sh{ max-width: 720px; margin-bottom: var(--space-7); }
  .qm-sh--center{ text-align:center; margin-inline:auto; }
  .qm-sh__eyebrow{ font-size:12px; letter-spacing:.1em; text-transform:uppercase; color: var(--color-engineering); font-weight:700; margin:0 0 var(--space-3); }
  .qm-sh__title{ font-family: var(--font-display); font-size: var(--text-h2); line-height: var(--leading-snug); letter-spacing: var(--tracking-tight); margin:0; }
  .qm-sh__desc{ color: var(--color-text-secondary); font-size: var(--text-body-lg); margin: var(--space-4) 0 0; line-height:1.6; }
  `,
})
export class SectionHeader { eyebrow = input<string>(); title = input.required<string>(); description = input<string>(); center = input(false); }
