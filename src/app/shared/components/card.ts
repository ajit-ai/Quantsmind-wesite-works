import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pillar } from '../models';
import { StatusBadge } from './badge';

@Component({
  selector: 'qm-card',
  imports: [RouterLink, StatusBadge],
  template: `
  <article class="qm-card" [attr.data-pillar]="pillar()" [class.qm-card--feature]="featured()">
    <div class="qm-card__top"></div>
    @if (icon()) { <div class="qm-card__icon" [attr.data-pillar]="pillar()" aria-hidden="true">{{ icon() }}</div> }
    @if (eyebrow()) { <p class="qm-card__eyebrow">{{ eyebrow() }}</p> }
    <h3 class="qm-card__title">{{ title() }}</h3>
    <p class="qm-card__desc">{{ description() }}</p>
    @if (tags().length) {
      <div class="qm-card__tags">
        @for (t of tags(); track t) { <span class="qm-card__tag">{{ t }}</span> }
      </div>
    }
    @if (status()) { <qm-status-badge [status]="status()!" [label]="statusLabel()" /> }
    @if (href()) { <a [routerLink]="href()!" class="qm-card__cta">Learn more →</a> }
  </article>
  `,
  styles: `
  .qm-card{ position:relative; background: var(--color-bg-surface); border:1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: 28px; display:flex; flex-direction:column; gap: 12px; transition: transform var(--motion-base) var(--ease-out), box-shadow var(--motion-base) var(--ease-out), border-color var(--motion-base) var(--ease-out); overflow:hidden; }
  .qm-card:hover{ transform: translateY(-4px); box-shadow: var(--shadow-card-hover); }
  .qm-card__top{ position:absolute; top:0; left:0; right:0; height:3px; background: var(--color-border-subtle); transition: background var(--motion-base) var(--ease-out); }
  .qm-card[data-pillar="engineering"] .qm-card__top{ background: var(--color-engineering); }
  .qm-card[data-pillar="intelligence"] .qm-card__top{ background: var(--color-intelligence); }
  .qm-card[data-pillar="labs"] .qm-card__top{ background: var(--color-labs); }
  .qm-card:hover[data-pillar="engineering"]{ border-color: rgba(67,97,238,.3); }
  .qm-card:hover[data-pillar="intelligence"]{ border-color: rgba(124,92,255,.3); }
  .qm-card:hover[data-pillar="labs"]{ border-color: rgba(0,201,167,.3); }
  .qm-card__icon{ width:40px; height:40px; border-radius:12px; display:grid; place-items:center; font-size:18px; background:#fff; border:1px solid var(--color-border-subtle); }
  .qm-card__icon[data-pillar="engineering"]{ color: var(--color-engineering); }
  .qm-card__icon[data-pillar="intelligence"]{ color: var(--color-intelligence); }
  .qm-card__icon[data-pillar="labs"]{ color: var(--color-labs); }
  .qm-card__eyebrow{ font-size:11px; letter-spacing:.08em; text-transform:uppercase; font-weight:700; color: var(--color-text-muted); margin:0; }
  .qm-card__title{ font-size: var(--text-h4); line-height:1.25; margin:0; letter-spacing:-.02em; }
  .qm-card__desc{ color: var(--color-text-secondary); font-size: var(--text-small); line-height:1.6; margin:0; flex:1; }
  .qm-card__tags{ display:flex; flex-wrap:wrap; gap:6px; margin-top:4px; }
  .qm-card__tag{ font-size:11px; font-weight:600; padding:4px 8px; background:#fff; border:1px solid var(--color-border-subtle); border-radius: var(--radius-pill); color: var(--color-text-muted); }
  .qm-card__cta{ margin-top:8px; font-size:14px; font-weight:700; color: var(--color-engineering); }
  .qm-card[data-pillar="intelligence"] .qm-card__cta{ color: var(--color-intelligence); }
  .qm-card[data-pillar="labs"] .qm-card__cta{ color: var(--color-labs); }
  .qm-card--feature{ padding:32px; @media(min-width:1024px){ padding:36px; } }
  `,
})
export class Card {
  pillar = input<Pillar>('engineering');
  title = input.required<string>();
  description = input<string>('');
  icon = input<string>('');
  eyebrow = input<string>('');
  tags = input<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status = input<any>(null);
  statusLabel = input<string>('');
  href = input<string | null>(null);
  featured = input(false);
}
