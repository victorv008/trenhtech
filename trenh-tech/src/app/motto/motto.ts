import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-motto',
  imports: [ScrollAnimateDirective],
  templateUrl: './motto.html',
  styleUrl: './motto.css',
})
export class Motto {}
