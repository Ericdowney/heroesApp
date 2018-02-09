
export default class HeroSkill {
    constructor(
        public uuid: string,
        public value: number,
        public parent: string,
        public description: string,
        public name: string,
        public hero: string,
    ) { }
}