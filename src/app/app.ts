import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Motto } from './components/motto/motto';
import { Newsletter } from './components/newsletter/newsletter';
import { CtaBanner } from './components/cta-banner/cta-banner';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Motto, Newsletter, CtaBanner, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
