import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../state/app.state';
import * as HeroSkillActions from '../../state/heroSkills/heroSkills.actions';
import HeroSkill from '../../state/models/heroSkill.model';

@Component({
    selector: 'app-hero-skills',
    templateUrl: './html/heroSkills.component.html',
    styleUrls: ['./scss/heroSkills.component.scss']
})
export class HeroSkillsComponent implements OnInit {

    heroSkills$: Observable<HeroSkill[]>

    // MARK: - Constructor

    constructor(
        public store: Store<AppState>,
    ) { }

    // MARK: - Lifecycle

    ngOnInit() {
        this.heroSkills$ = this.store.select('heroSkillsState').select('heroSkills');
        this.store.dispatch(new HeroSkillActions.LoadHeroSkills());
    }
}