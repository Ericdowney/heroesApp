import { Component } from '@angular/core';

@Component({
    selector: 'app-page',
    template: `
        <div class="page" margin>
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
    
    `]
})
export class Page { }