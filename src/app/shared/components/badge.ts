import { Component, input } from '@angular/core';
import { ProductStatus } from '../models';

@Component({
  selector: 'qm-status-badge',
  template: `<span class="qm-badge" [attr.data-status]="status()">{{ label() }}</span>`,
  styles: `
  .qm-badge{ display:inline-flex; align-items:center; padding:4px 10px; border-radius: var(--radius-pill); font-size:11px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; border:1px solid transparent; line-height:1; }
  .qm-badge[data-status="available"]{ background:#ecfdf5; color:#065f46; border-color:#a7f3d0; }
  .qm-badge[data-status="beta"]{ background:#fffbeb; color:#92400e; border-color:#fde68a; }
  .qm-badge[data-status="in-development"]{ background:#eef2ff; color:#3730a3; border-color:#c7d2fe; }
  .qm-badge[data-status="research"]{ background:#f5f3ff; color:#5b21b6; border-color:#ddd6fe; }
  .qm-badge[data-status="experimental"]{ background:#fff1f2; color:#9f1239; border-color:#fecdd3; }
  .qm-badge[data-status="open-source"]{ background:#ecfdf5; color:#0f766e; border-color:#99f6e4; }
  .qm-badge[data-status="archived"]{ background:#f7f8fa; color:var(--color-text-muted); border-color:var(--color-border-subtle); }
  `,
})
export class StatusBadge {
  status = input<ProductStatus>('research');
  label = input<string>('');
}
