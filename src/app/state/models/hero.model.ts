import Group from './heroGroup.model';

export class Abilities {
    constructor(
        public energyProjection: number,
        public strength: number,
        public fightingSkills: number,
        public speed: number,
        public intelligence: number,
        public durability: number,
    ) { }
}

export default class Hero {
    constructor(
        public uuid: string,
        public groups: Array<Group>,
        public abilities: Abilities,
        public realName: string,
        public s3ImageUrl: string,
        public powers: string,
        public heroName: string,
        public signedAccords: boolean,
    ) { }
}