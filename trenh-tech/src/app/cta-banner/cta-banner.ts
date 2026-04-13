import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-cta-banner',
  imports: [ScrollAnimateDirective],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.css',
})
export class CtaBanner {}
