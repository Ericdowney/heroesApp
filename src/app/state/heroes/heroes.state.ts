import Hero from "../models/hero.model";

export interface HeroesState {
    heroes: Hero[]
}

export const initialState: HeroesState = {
    heroes: []
};