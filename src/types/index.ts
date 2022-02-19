export interface IPerson {
    id: string;
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string
}

export interface IPlanet {
    id: string;
    name: string;
    population: string;
    rotationPeriod: string;
    diameter: string;
}

export interface IStarship {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: string;
    length: string;
    crew: string;
    passengers: string;
    cargoCapacity: string;
}

export interface PlanetRequest {
    id: string;
    name: string;
    population: string;
    rotation_period: string;
    diameter: string;
    url: string;
}

export interface PersonRequest {
    id: string;
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    url: string;
}

export interface StarshipRequest {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    url: string;
}