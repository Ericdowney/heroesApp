import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesCommonModule } from '../../common/common.module';
import { HeroGroupsComponent } from './heroGroups.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesCommonModule,
    ],
    declarations: [
        HeroGroupsComponent
    ],
    providers: [],
    exports: [
        HeroGroupsComponent
    ],
})
export class HeroGroupsModule { }