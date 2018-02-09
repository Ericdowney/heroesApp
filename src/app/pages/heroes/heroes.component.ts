import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../state/app.state';
import * as HeroActions from '../../state/heroes/heroes.actions';
import Hero from '../../state/models/hero.model';

@Component({
    selector: 'app-heroes',
    templateUrl: './html/heroes.component.html',
    styleUrls: ['./scss/heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    heroes$: Observable<Hero[]>

    // MARK: - Constructor

    constructor(
        public store: Store<AppState>,
    ) { }

    // MARK: - Lifecycle

    ngOnInit() {
        this.heroes$ = this.store.select('heroesState').select('heroes');
        this.store.dispatch(new HeroActions.LoadHeroes());
    }
}