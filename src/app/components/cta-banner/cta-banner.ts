import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/content';

@Component({
  selector: 'app-cta-banner',
  imports: [],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.scss',
})
export class CtaBanner {
  readonly ctaBanner = SITE_CONTENT.ctaBanner;
}
