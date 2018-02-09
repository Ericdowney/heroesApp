import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesCommonModule } from '../../common/common.module';
import { HeroSkillsComponent } from './heroSkills.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesCommonModule,
    ],
    declarations: [
        HeroSkillsComponent
    ],
    providers: [],
    exports: [
        HeroSkillsComponent
    ],
})
export class HeroSkillsModule { }