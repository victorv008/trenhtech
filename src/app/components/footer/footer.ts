import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/content';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly footer = SITE_CONTENT.footer;
}
