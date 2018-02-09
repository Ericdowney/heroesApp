import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../state/app.state';
import * as HeroGroupActions from '../../state/heroGroups/heroGroups.actions';
import HeroGroup from '../../state/models/heroGroup.model';

@Component({
    selector: 'app-hero-groups',
    templateUrl: './html/heroGroups.component.html',
    styleUrls: ['./scss/heroGroups.component.scss']
})
export class HeroGroupsComponent implements OnInit {

    heroGroups$: Observable<HeroGroup[]>

    // MARK: - Constructor

    constructor(
        public store: Store<AppState>,
    ) { }

    // MARK: - Lifecycle

    ngOnInit() {
        this.heroGroups$ = this.store.select('heroGroupsState').select('heroGroups');
        this.store.dispatch(new HeroGroupActions.LoadHeroGroups());
    }
}