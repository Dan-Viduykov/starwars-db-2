import React from "react";
import { IPlanet } from "../../types";

interface PlanetViewProps {
    planet: Partial<IPlanet>
}

const PlanetView = (props: PlanetViewProps) => {

    const {
        id,
        name = '. . .',
        population = '. . .',
        rotationPeriod = '. . .',
        diameter = '. . .'
    } = props.planet

    return (
        <>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt={`Planet ${name}`} />
            <div className="card-body" key={102}>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PlanetView