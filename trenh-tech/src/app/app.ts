import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Motto } from './motto/motto';
import { Newsletter } from './newsletter/newsletter';
import { CtaBanner } from './cta-banner/cta-banner';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Motto, Newsletter, CtaBanner, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'trenh-tech';
}
