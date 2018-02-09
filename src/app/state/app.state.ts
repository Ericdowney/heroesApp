import { HeroesState } from './heroes/heroes.state';
import { HeroGroupsState } from './heroGroups/heroGroups.state';
import { HeroSkillsState } from './heroSkills/heroSkills.state';

export interface AppState {
    heroesState: HeroesState;
    heroGroupsState: HeroGroupsState;
    heroSkillsState: HeroSkillsState;
}