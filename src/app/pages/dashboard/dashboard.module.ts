import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesCommonModule } from '../../common/common.module';
import { HeroesModule } from '../heroes/heroes.module';
import { HeroGroupsModule } from '../heroGroups/heroGroups.module';
import { HeroSkillsModule } from '../heroSkills/heroSkills.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesCommonModule,
        HeroesModule,
        HeroGroupsModule,
        HeroSkillsModule,
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [],
    exports: [
        DashboardComponent
    ],
})
export class DashboardModule { }