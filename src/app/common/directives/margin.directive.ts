import { Directive, ElementRef } from '@angular/core'

@Directive({
    selector: '[margin]',

})
export class Margin {
    constructor(
        public eref: ElementRef,
    ) {
        this.eref.nativeElement.style.margin = '10px';
    }
}