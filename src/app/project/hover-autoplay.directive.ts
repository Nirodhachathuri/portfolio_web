import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'video[appHoverAutoplay]'
})
export class HoverAutoplayDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    const video: HTMLVideoElement = this.el.nativeElement;
    video.play();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const video: HTMLVideoElement = this.el.nativeElement;
    video.pause();
  }
}
