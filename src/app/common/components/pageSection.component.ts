import { Component, Input } from '@angular/core';

import Hero from '../../state/models/hero.model';

@Component({
    selector: 'app-page-section',
    template: `
        <div class="page-section">
            <div class="title" padding [style.backgroundColor]="backgroundColor">
                <ng-content select="[page-section-title]"></ng-content>
            </div>
            <div class="content" padding>
                <ng-content select="[page-section-content]"></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .page-section {
            border: 1px solid lightgray;
            border-radius: 10px;
        }
        .page-section .title {
            border-bottom: 1px solid lightgray;
            padding: 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    `]
})
export class PageSection {
    @Input() backgroundColor: string = '#EEEEEE';
}