import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/content';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly contact = SITE_CONTENT.contact;
}
