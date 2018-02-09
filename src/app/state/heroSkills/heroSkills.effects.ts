import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';

import { HeroesService } from '../../common/services/heroes.service';
import * as HeroSkillsActions from './heroSkills.actions';

@Injectable()
export class HeroSkillsEffects {

    constructor(
        public heroesService: HeroesService,
        private actions$: Actions
    ) { }

    @Effect() loadHeroSkills$: Observable<Action> = this.actions$.pipe(
        ofType(HeroSkillsActions.LOAD_HERO_SKILLS),
        mergeMap(action =>
            this.heroesService.getHeroSkills().pipe(
                map(data => new HeroSkillsActions.SetHeroSkills(data))
            )
        )
    )

}