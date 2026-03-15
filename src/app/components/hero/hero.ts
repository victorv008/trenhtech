import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/content';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly hero = SITE_CONTENT.hero;
}
