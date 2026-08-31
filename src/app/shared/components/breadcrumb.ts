import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'qm-breadcrumb',
  imports: [RouterLink],
  template: `
  <nav class="qm-bc" aria-label="Breadcrumb">
    <a routerLink="/">Home</a>
    @for (c of crumbs(); track c.label) { <span aria-hidden="true">/</span> <a [routerLink]="c.href">{{ c.label }}</a> }
  </nav>
  `,
  styles: `.qm-bc{ display:flex; gap:8px; align-items:center; font-size:13px; color: var(--color-text-muted); } .qm-bc a{ color:inherit; } .qm-bc a:hover{ color: var(--color-text-primary); }`,
})
export class Breadcrumb { crumbs = input<{label:string; href:string}[]>([]); }
