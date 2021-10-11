import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input () type?: string;


  constructor(private elm: ElementRef) {
  }

    @HostListener('mouseover')
    onMouseOver(){
    this.onTypeHover(this.type)
    }
    @HostListener('mouseout')
    onMouseOut(){
        this.onTypeHoverExit(this.type)
    }

   onTypeHover(input?: string): void {
      if(input == "true"){
        this.elm.nativeElement.style.fontWeight = "bold";
      }else {
          this.elm.nativeElement.style.textDecoration = 'underline';
      }
    }

    onTypeHoverExit(input?: string): void {
        if(input == "true"){
            this.elm.nativeElement.style.fontWeight = "";
        }else {
            this.elm.nativeElement.style.textDecoration = '';
        }
    }

}
