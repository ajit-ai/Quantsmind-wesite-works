import { Component, input, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'qm-animated-counter',
  template: `<span class="qm-counter">{{ display() }}</span>`,
  styles: `.qm-counter{ font-family: var(--font-display); font-weight:800; letter-spacing: var(--tracking-tight); }`,
})
export class AnimatedCounter {
  value = input.required<number>();
  suffix = input<string>('');
  prefix = input<string>('');
  display = signal('0');
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  constructor() {
    effect(() => {
      const target = this.value();
      if (!this.isBrowser) { this.display.set(`${this.prefix()}${target}${this.suffix()}`); return; }
      let current = 0; const steps = 24; const inc = target / steps; let n = 0;
      const id = setInterval(() => {
        n++; current += inc;
        if (n >= steps) { this.display.set(`${this.prefix()}${target}${this.suffix()}`); clearInterval(id); }
        else this.display.set(`${this.prefix()}${Math.round(current)}${this.suffix()}`);
      }, 28);
    });
  }
}
