import * as HeroSkillsActions from './heroSkills.actions';
import { HeroSkillsState, initialState } from './heroSkills.state';

export type Action = HeroSkillsActions.All;

export function reducer(state: HeroSkillsState = initialState, action: Action): HeroSkillsState {
    switch (action.type) {
        case HeroSkillsActions.SET_HERO_SKILLS:
            return { ...state, heroSkills: action.payload };
    }
    return state;
}