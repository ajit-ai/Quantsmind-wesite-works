import { Component, input, OnInit, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'qm-coming-soon',
  imports: [RouterLink],
  template: `
  <section class="qm-cs">
    <div class="qm-container qm-cs__inner">
      <span class="qm-cs__badge">{{ resolvedBadge() }}</span>
      <h1 class="qm-cs__title">{{ resolvedTitle() }}</h1>
      <p class="qm-cs__desc">{{ resolvedDesc() }}</p>
      <div class="qm-cs__visual" aria-hidden="true">
        <div class="qm-cs__grid"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="qm-cs__actions">
        <a routerLink="/" class="qm-btn qm-btn--primary">Back to home</a>
        <a routerLink="/company/contact" class="qm-btn qm-btn--ghost">Contact us</a>
      </div>
    </div>
  </section>
  `,
  styles: `
  .qm-cs{ padding: var(--section-gap-lg) 0; text-align:center; }
  .qm-cs__badge{ display:inline-flex; padding:6px 12px; border-radius: var(--radius-pill); background: var(--color-bg-surface); border:1px solid var(--color-border-subtle); font-size:11px; letter-spacing:.08em; text-transform:uppercase; font-weight:700; color: var(--color-text-muted); }
  .qm-cs__title{ font-family: var(--font-display); font-size: var(--text-h1); line-height:1.05; margin: var(--space-5) auto 0; max-width: 18ch; }
  .qm-cs__desc{ color: var(--color-text-secondary); font-size: var(--text-body-lg); max-width: 56ch; margin: var(--space-4) auto 0; line-height:1.6; }
  .qm-cs__visual{ margin: var(--space-7) auto; max-width: 520px; }
  .qm-cs__grid{ display:grid; grid-template-columns: repeat(3,1fr); gap:12px; }
  .qm-cs__grid span{ height:72px; border-radius: var(--radius-md); background: linear-gradient(135deg, #eef2ff, #f5f3ff); border:1px solid var(--color-border-subtle); display:block; }
  .qm-cs__actions{ display:flex; gap: var(--space-4); justify-content:center; flex-wrap:wrap; margin-top: var(--space-6); }
  .qm-btn{ display:inline-flex; padding:12px 22px; border-radius: var(--radius-pill); font-weight:700; font-size:14px; border:1px solid transparent; }
  .qm-btn--primary{ background: var(--color-engineering); color:#fff; }
  .qm-btn--ghost{ background:#fff; border-color: var(--color-border-strong); color: var(--color-text-primary); }
  `,
})
export class ComingSoon implements OnInit {
  title = input<string>('In Development');
  description = input<string>('This section is being crafted with the same precision we bring to our systems. Check back soon — or get in touch if you need it now.');
  badge = input<string>('Coming Soon');
  seoTitle = input<string>('');
  seoDesc = input<string>('');
  private seo = inject(SeoService);
  private route = inject(ActivatedRoute);
  // Prefer route data when present (covers all lazy placeholder routes)
  resolvedTitle = computed(() => this.route.snapshot.data['title'] ?? this.title());
  resolvedDesc = computed(() => this.route.snapshot.data['desc'] ?? this.description());
  resolvedBadge = computed(() => this.route.snapshot.data['badge'] ?? this.badge());
  ngOnInit(): void {
    const t = this.route.snapshot.data['seoTitle'] ?? this.seoTitle() ?? this.resolvedTitle();
    const d = this.route.snapshot.data['seoDesc'] ?? this.seoDesc() ?? this.resolvedDesc();
    this.seo.set({ title: String(t), description: String(d), canonical: typeof location !== 'undefined' ? location.href : undefined });
  }
}
