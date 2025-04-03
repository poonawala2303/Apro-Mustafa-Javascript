import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective implements OnInit {

  constructor(private element:ElementRef , private renderer:Renderer2) 
  { }

  ngOnInit() {
    // this.element.nativeElement.style.color = 'black';

    // renderer2 is used to set the styles in a more Angular way
    // instead of directly manipulating the DOM with nativeElement.
    // This is the preferred way in Angular to ensure better compatibility
    // and to avoid direct DOM manipulation which can lead to issues in server-side rendering.

    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    // this.renderer.setStyle(this.element.nativeElement, 'textAlign', 'center');
  }

  // @HostListener('mouseenter') onMouseEnter() 
  // {
  //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
  // }

  // @HostListener('mouseleave') onMouseLeave()
  // {
  //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'hotpink');

  // }

  defaultcolor = 'red';
  @HostBinding('style.color') colortext: string = this.defaultcolor;
  @HostBinding('style.border') bordertext: string = 'none';

  @HostListener('mouseenter') onMouseEnter() {
    this.colortext = 'blue';
    this.bordertext = '2px solid black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colortext = this.defaultcolor;
    this.bordertext = 'none';
  }

}
