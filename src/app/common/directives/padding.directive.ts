import { Directive, ElementRef } from '@angular/core'

@Directive({
    selector: '[padding]',

})
export class Padding {
    constructor(
        public eref: ElementRef,
    ) {
        this.eref.nativeElement.style.padding = '10px';
    }
}