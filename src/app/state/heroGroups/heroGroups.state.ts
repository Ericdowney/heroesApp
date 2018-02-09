import HeroGroup from '../models/heroGroup.model';

export interface HeroGroupsState {
    heroGroups: HeroGroup[];
}

export const initialState: HeroGroupsState = {
    heroGroups: []
};