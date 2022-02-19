/* eslint-disable no-console */
import { IPerson, PersonRequest, PlanetRequest, IPlanet, StarshipRequest, IStarship } from "../../types/index";

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/';    

    async getResource<T>(url: string): Promise<T> {
        const response = await fetch(`${this._apiBase}${url}`)

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return response.json()
    }

    async getAllPeople<T extends {results: PersonRequest[]}>(): Promise<IPerson[]> {
        const people: T = await this.getResource('people/');
        return people.results.map(this._transformPerson);
    }

    async getAllPlanets<T extends {results: PlanetRequest[]}>(): Promise<IPlanet[]> {
        const planets: T = await this.getResource('planet/')
        return planets.results.map(this._transformPlanet);
    }

    async getAllStarships<T extends {results: StarshipRequest[]}>(): Promise<IStarship[]> {
        const starships: T = await this.getResource('starship/')
        return starships.results.map(this._transformStarship)
    }

    async getPerson<T extends PersonRequest>(id: number): Promise<IPerson> {
        const person: T = await this.getResource(`people/${id}/`)
        return this._transformPerson(person);
    }

    async getPlanet<T extends PlanetRequest>(id: number): Promise<IPlanet> {
        const planet: T =  await this.getResource(`planets/${id}/`)
        return this._transformPlanet(planet);
    }

    async getStarship<T extends StarshipRequest>(id: number): Promise<IStarship> {
        const starship: T = await this.getResource(`starships/${id}/`)
        return this._transformStarship(starship);
    }

    _extractId<T extends { url: string }>(planet: T): string {
        const idRegExp = /\/([0-9]*)\/$/;
        return planet.url.match(idRegExp)![1];
    }

    _transformPerson<T extends PersonRequest>(person: T): IPerson {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
        }
    }
    
    _transformPlanet<T extends PlanetRequest>(planet: T): IPlanet {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship<T extends StarshipRequest>(starship: T): IStarship {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        }
    }    
}