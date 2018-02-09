import { Component } from '@angular/core';
import { Input } from '@angular/core';

import HeroSkill from '../../state/models/heroSkill.model';

@Component({
    selector: 'app-hero-skill',
    template: `
        <app-page-section>
            <div page-section-title>
                {{skill?.name}} - {{skill?.uuid}}
            </div>
            <div page-section-content>
                <div>Value: {{skill?.value}}</div>
                <div>Parent: {{skill?.parent}}</div>
                <div>Description: {{skill?.description}}</div>
                <div>Hero: {{skill?.hero}}</div>
            </div>
        </app-page-section>
    `,
    styles: [`
    
    `]
})
export class HeroSkillComponent {
    @Input() skill: HeroSkill;
}