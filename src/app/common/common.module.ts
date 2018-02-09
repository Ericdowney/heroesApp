import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeroComponent } from './components/hero.component';
import { HeroGroupComponent } from './components/heroGroup.component';
import { HeroSkillComponent } from './components/heroSkill.component';
import { Page } from './components/page.component';
import { PageSection } from './components/pageSection.component';
import { Margin } from './directives/margin.directive';
import { Padding } from './directives/padding.directive';
import { HeroesService } from './services/heroes.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        Page,
        PageSection,
        Padding,
        Margin,
        HeroComponent,
        HeroGroupComponent,
        HeroSkillComponent,
    ],
    providers: [
        HeroesService,
    ],
    exports: [
        Page,
        PageSection,
        Padding,
        Margin,
        HeroComponent,
        HeroGroupComponent,
        HeroSkillComponent,
    ],
})
export class HeroesCommonModule { }