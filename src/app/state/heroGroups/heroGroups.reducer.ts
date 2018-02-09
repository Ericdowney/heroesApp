import * as HeroGroupsActions from './heroGroups.actions';
import { HeroGroupsState, initialState } from './heroGroups.state';

export type Action = HeroGroupsActions.All;

export function reducer(state: HeroGroupsState = initialState, action: Action): HeroGroupsState {
    switch (action.type) {
        case HeroGroupsActions.SET_HERO_GROUPS:
            return { ...state, heroGroups: action.payload };
    }
    return state;
}