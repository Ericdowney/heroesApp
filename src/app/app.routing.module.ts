import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroGroupsComponent } from './pages/heroGroups/heroGroups.component';
import { HeroSkillsComponent } from './pages/heroSkills/heroSkills.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent,
    },
    {
        path: 'hero-groups',
        component: HeroGroupsComponent,
    },
    {
        path: 'hero-skills',
        component: HeroSkillsComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    providers: [],
    exports: [RouterModule],
})
export class AppRoutingModule { }