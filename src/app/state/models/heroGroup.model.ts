

export default class HeroGroup {
    constructor(
        public uuid: string,
        public location: string,
        public description: string,
        public name: string,
        public s3ImageUrl: string,
    ) { }
}