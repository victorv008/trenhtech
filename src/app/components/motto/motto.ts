import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/content';

@Component({
  selector: 'app-motto',
  imports: [],
  templateUrl: './motto.html',
  styleUrl: './motto.scss',
})
export class Motto {
  readonly motto = SITE_CONTENT.motto;
}
