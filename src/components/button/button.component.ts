import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-market-button',
  template: `
    <button
      [disabled]="disabled"
      (click)="onClick()"
      [ngClass]="getButtonClasses()"
    >
      <i *ngIf="iconClass" [class]="iconClass" class="mr-2"></i>
      <span>{{ label }}</span>
    </button>
  `,
  styleUrls: [],
  standalone: true,
  imports: [NgClass, NgIf]
})
export class ButtonComponent {
  @Input() label: string = 'Add to cart';
  @Input() disabled: boolean = false;
  @Input() iconClass: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary'; // Added variant

  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clickEvent.emit();
    }
  }

  getButtonClasses() {
    // Base classes for both variants
    let classes =
      'flex items-center justify-center ' +
      'px-7 py-3 rounded-xl font-semibold text-lg ' +
      'transition-all duration-200 ease-in-out ' +
      'shadow-md hover:shadow-lg active:shadow-sm ' +
      'focus:outline-none focus:ring-4 focus:ring-offset-2';

    if (this.disabled) {
      // Disabled state
      classes += ' cursor-not-allowed bg-gray-400 text-gray-700 shadow-none opacity-70';
    } else if (this.variant === 'primary') {
      // PRIMARY: Warm Orange/Yellow
      classes += ' text-white ' +
        // Custom Gradient for a premium look (you may need to configure custom colors in tailwind.config.js)
        'bg-gradient-to-r from-orange-500 to-amber-500 ' +
        // Subtle lift on hover
        'hover:translate-y-[-2px] hover:scale-[1.01] ' +
        'shadow-orange-500/50 ' +
        'focus:ring-orange-500/50';
    }
    // You can add 'secondary' variant here if needed

    return classes;
  }
}