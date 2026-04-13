import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-newsletter',
  imports: [ScrollAnimateDirective],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter implements AfterViewInit, OnDestroy {
  @ViewChild('cardsTrack') cardsTrack!: ElementRef<HTMLElement>;

  articles = [
    {
      image: 'assets/images/newsletter-1.png',
      alt: 'Kommer AI att ta över?',
      title: 'Kommer AI att ta över?',
    },
    {
      image: 'assets/images/newsletter-2.png',
      alt: 'När teknik blir affär',
      title: 'När teknik blir affär',
    },
    {
      image: 'assets/images/newsletter-1.png',
      alt: 'Cybersäkerhet 2025',
      title: 'Cybersäkerhet 2025',
    },
    {
      image: 'assets/images/newsletter-2.png',
      alt: 'Molnet som drivkraft',
      title: 'Molnet som drivkraft',
    },
    {
      image: 'assets/images/newsletter-1.png',
      alt: 'Framtidens mjukvara',
      title: 'Framtidens mjukvara',
    },
  ];

  private intersectionObserver: IntersectionObserver | null = null;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    // Small delay to let the DOM settle
    setTimeout(() => {
      this.setupCardAnimations();
    }, 200);
  }

  private setupCardAnimations() {
    if (!this.cardsTrack?.nativeElement) return;

    const cards = this.cardsTrack.nativeElement.querySelectorAll('.card');

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          entries.forEach((entry) => {
            const card = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              card.classList.add('card-visible');
              card.classList.remove('card-hidden-left', 'card-hidden-right');
            } else {
              // Determine direction based on bounding rect
              const rect = entry.boundingClientRect;
              if (rect.left < 0) {
                card.classList.add('card-hidden-left');
              } else {
                card.classList.add('card-hidden-right');
              }
              card.classList.remove('card-visible');
            }
          });
        });
      },
      {
        root: this.cardsTrack.nativeElement,
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    cards.forEach((card) => {
      this.intersectionObserver!.observe(card);
    });
  }

  ngOnDestroy() {
    this.intersectionObserver?.disconnect();
  }
}
