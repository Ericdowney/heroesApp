import { Action } from '@ngrx/store';
import HeroGroup from '../models/heroGroup.model';

export const LOAD_HERO_GROUPS = '[Action] - [HeroGroup] - [Load]';
export const SET_HERO_GROUPS = '[Action] - [HeroGroup] - [Set]';

export class LoadHeroGroups implements Action {
    readonly type = LOAD_HERO_GROUPS
}

export class SetHeroGroups implements Action {
    readonly type = SET_HERO_GROUPS

    constructor(
        public payload: HeroGroup[]
    ) { }
}

export type All = LoadHeroGroups
    | SetHeroGroups;