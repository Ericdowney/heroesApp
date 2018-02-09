import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesCommonModule } from '../../common/common.module';
import { HeroesComponent } from './heroes.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesCommonModule,
    ],
    declarations: [
        HeroesComponent,
    ],
    providers: [],
    exports: [
        HeroesComponent,
    ],
})
export class HeroesModule { }