import HeroSkill from '../models/heroSkill.model';

export interface HeroSkillsState {
    heroSkills: HeroSkill[];
}

export const initialState: HeroSkillsState = {
    heroSkills: []
};