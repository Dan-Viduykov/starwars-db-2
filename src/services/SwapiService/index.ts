/* eslint-disable no-console */
import { IPerson } from "../../types/index";


export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/';

    async getResource<T>(url: string): Promise<T> {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        } 
        
        return res.json();
    }

    async getAllPeople() {
        const res = await this.getResource('people/')
        const result = res as {results: IPerson[]}
        return result.results
    }

    getPerson(id: number): Promise<IPerson> {
        return this.getResource(`people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource('planet/')
        const result = res as {results: IPerson[]}
        return result.results
    }

    getPlanet(id: number): Promise<IPerson> {
        return this.getResource(`planet/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getResource('starship/')
        const result = res as {results: IPerson[]}
        return result.results
    }

    getStarship(id: number): Promise<IPerson> {
        return this.getResource(`starship/${id}/`)
    }
}