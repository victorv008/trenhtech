import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-newsletter',
  imports: [ScrollAnimateDirective],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {}
