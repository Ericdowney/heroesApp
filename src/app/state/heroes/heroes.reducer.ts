import * as HeroActions from './heroes.actions';
import { HeroesState, initialState } from './heroes.state';

type Action = HeroActions.All;

export function reducer(state: HeroesState = initialState, action: Action): HeroesState {
    switch (action.type) {
        case HeroActions.SET_HEROES: {
            return { ...state, heroes: action.payload };
        }
    }
    return state;
}