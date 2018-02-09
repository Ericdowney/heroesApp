import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';

import { HeroesService } from '../../common/services/heroes.service';
import * as HeroGroupsActions from './heroGroups.actions';

@Injectable()
export class HeroGroupsEffects {

    constructor(
        public heroesService: HeroesService,
        private actions$: Actions
    ) { }

    @Effect() loadHeroGroups$: Observable<Action> = this.actions$.pipe(
        ofType(HeroGroupsActions.LOAD_HERO_GROUPS),
        mergeMap(action =>
            this.heroesService.getHeroGroups().pipe(
                map(data => new HeroGroupsActions.SetHeroGroups(data))
            )
        )
    )

}