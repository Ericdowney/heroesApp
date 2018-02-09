import { ActionReducerMap } from '@ngrx/store/src/models';

import { AppState } from './app.state';
import * as HeroesReducer from './heroes/heroes.reducer';
import * as HeroGroupsReducer from './heroGroups/heroGroups.reducer';
import * as HeroSkillsReducer from './heroSkills/heroSkills.reducer';

export const reducers: ActionReducerMap<AppState> = {
    heroesState: HeroesReducer.reducer,
    heroGroupsState: HeroGroupsReducer.reducer,
    heroSkillsState: HeroSkillsReducer.reducer,
}