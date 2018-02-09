import { Action } from '@ngrx/store';

import Hero from '../models/hero.model';

export const LOAD_HEROES = '[Action] - [Hero] - [Load]';
export const SET_HEROES = '[Action] - [Hero] - [Set]';

export class LoadHeroes implements Action {
    readonly type = LOAD_HEROES
}

export class SetHeroes implements Action {
    readonly type = SET_HEROES

    constructor(
        public payload: Hero[]
    ) { }
}

export type All = LoadHeroes
    | SetHeroes;