import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  onSubmit() {
    console.log('Form submitted');
  }
}
