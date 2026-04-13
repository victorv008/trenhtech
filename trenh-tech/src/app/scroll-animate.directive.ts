import {
  Directive,
  ElementRef,
  Input,
  afterNextRender,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnDestroy {
  @Input('appScrollAnimate') animationClass = 'scroll-visible';
  @Input() animationDelay = '0ms';
  @Input() animationThreshold = 0.15;

  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    afterNextRender(() => {
      this.setupAnimation();
    });
  }

  private setupAnimation() {
    const element = this.el.nativeElement;

    // Set delay custom property
    if (this.animationDelay !== '0ms') {
      this.renderer.setStyle(element, '--anim-delay', this.animationDelay);
    }

    // Add the initial hidden state class
    this.renderer.addClass(element, 'scroll-hidden');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(element, this.animationClass);
            this.renderer.removeClass(element, 'scroll-hidden');
            // Only trigger once
            this.observer?.unobserve(element);
          }
        });
      },
      {
        threshold: this.animationThreshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
