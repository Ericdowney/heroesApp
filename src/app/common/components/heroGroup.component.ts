import { Component } from '@angular/core';
import { Input } from '@angular/core';

import HeroGroup from '../../state/models/heroGroup.model';

@Component({
    selector: 'app-hero-group',
    template: `
        <app-page-section>
            <div page-section-title>
                {{group?.name}} - {{group?.uuid}}
            </div>
            <div page-section-content>
                <div>Description: {{group?.description}}</div>
                <div>Location: {{group?.location}}</div>
            </div>
        </app-page-section>
    `,
    styles: [`
    
    `]
})
export class HeroGroupComponent {
    @Input() group: HeroGroup;
}