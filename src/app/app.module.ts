import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component/app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeroesCommonModule } from './common/common.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { HeroGroupsModule } from './pages/heroGroups/heroGroups.module';
import { HeroSkillsModule } from './pages/heroSkills/heroSkills.module';
import * as AppReducer from './state/app.reducers';
import { HeroEffects } from './state/heroes/heroes.effects';
import { HeroGroupsEffects } from './state/heroGroups/heroGroups.effects';
import { HeroSkillsEffects } from './state/heroSkills/heroSkills.effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesCommonModule,
        DashboardModule,
        HeroSkillsModule,
        HeroGroupsModule,
        HeroesModule,
        HeroGroupsModule,
        HeroSkillsModule,
        StoreModule.forRoot(AppReducer.reducers),
        EffectsModule.forRoot([
            HeroEffects,
            HeroGroupsEffects,
            HeroSkillsEffects,
        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
