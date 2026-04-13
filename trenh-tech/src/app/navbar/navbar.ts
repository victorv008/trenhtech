import { Component, afterNextRender, ElementRef, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnDestroy {
  private scrollHandler: (() => void) | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    afterNextRender(() => {
      this.setupScrollEffect();
    });
  }

  private setupScrollEffect() {
    const navbar = this.el.nativeElement.querySelector('.navbar');
    if (!navbar) return;

    this.scrollHandler = () => {
      if (window.scrollY > 60) {
        this.renderer.addClass(navbar, 'navbar-scrolled');
      } else {
        this.renderer.removeClass(navbar, 'navbar-scrolled');
      }
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
