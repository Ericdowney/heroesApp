import { Action } from '@ngrx/store';

import HeroSkill from '../models/heroSkill.model';

export const LOAD_HERO_SKILLS = '[Action] - [HeroSkill] - [Load]';
export const SET_HERO_SKILLS = '[Action] - [HeroSkill] - [Set]';

export class LoadHeroSkills implements Action {
    readonly type = LOAD_HERO_SKILLS;
}

export class SetHeroSkills implements Action {
    readonly type = SET_HERO_SKILLS;

    constructor(
        public payload: HeroSkill[]
    ) { }
}

export type All = LoadHeroSkills
    | SetHeroSkills;