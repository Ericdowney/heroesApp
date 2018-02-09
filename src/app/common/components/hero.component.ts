import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import Hero from '../../state/models/hero.model';

@Component({
    selector: 'app-hero',
    template: `
        <app-page-section>
            <div page-section-title>
                {{hero?.heroName}} - {{hero?.uuid}}
            </div>
            <div page-section-content>
                <div>Real Name: {{hero?.realName}}</div>
                <div>Powers: {{hero?.powers}}</div>
                <div>Signed Accords: {{hero?.signedAccords}}</div>
            </div>
        </app-page-section>
    `,
    styles: [`
    
    `]
})
export class HeroComponent {
    @Input() hero: Hero;
}