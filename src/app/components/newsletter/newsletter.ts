import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/content';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {
  readonly newsletter = SITE_CONTENT.newsletter;
}
