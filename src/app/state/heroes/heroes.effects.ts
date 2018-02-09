import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';

import { HeroesService } from '../../common/services/heroes.service';
import * as HeroesActions from './heroes.actions';

@Injectable()
export class HeroEffects {

    constructor(
        public heroesService: HeroesService,
        private actions$: Actions
    ) { }

    @Effect() loadHeroes$: Observable<Action> = this.actions$.pipe(
        ofType(HeroesActions.LOAD_HEROES),
        mergeMap(action =>
            this.heroesService.getHeroes().pipe(
                map(data => new HeroesActions.SetHeroes(data))
            )
        )
    )

}