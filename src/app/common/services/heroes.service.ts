import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import Hero from '../../state/models/hero.model';
import HeroGroup from '../../state/models/heroGroup.model';
import HeroSkill from '../../state/models/heroSkill.model';

@Injectable()
export class HeroesService {

    get heroesPath(): string {
        return environment.heroesUrl;
    }

    get heroGroupsPath(): string {
        return environment.heroGroupsUrl;
    }
    
    get heroSkillsPath(): string {
        return environment.heroSkillsUrl;
    }

    constructor(
        public http: Http,
    ) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesPath).map(res => res.json());
    }

    getHeroGroups(): Observable<HeroGroup[]> {
        return this.http.get(this.heroGroupsPath).map(res => res.json());
    }

    getHeroSkills(): Observable<HeroSkill[]> {
        return this.http.get(this.heroSkillsPath).map(res => res.json());
    }
}