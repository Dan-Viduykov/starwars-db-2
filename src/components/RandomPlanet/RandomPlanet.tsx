import React, { useEffect, useState } from "react";
import SwapiService from "../../services/SwapiService";
import { IPlanet } from "../../types";
import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";
import './RandomPlanet.css'

export const RandomPlanet = (): React.ReactElement => {
    const swapiService = new SwapiService()
    const [ planet, setPlanet ] = useState<Partial<IPlanet>>({})
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    const onPlanetLoaded = (planetData: IPlanet) => {
        setPlanet(planetData);
        setLoading(false)
    }

    const onError = (err: Error) => {
        // eslint-disable-next-line no-console
        // console.log(err.status);
        setError(true);
        setLoading(false)
    }
    
    const updatePlanet = (): void => {
        swapiService.getPlanet(Math.round(Math.random()*25) + 2)
            .then(onPlanetLoaded)
            .catch(onError)
    }

    useEffect(() => updatePlanet, [])
    useEffect(() => {
        const interval = window.setInterval(updatePlanet, 5000);

        return () => {
            clearInterval(interval);
        }
    },)

    const hasData = !(loading || error)
    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <PlanetView planet={planet} /> : null

    return (
        <article className="random-planet jumbotron rounded card">
            {spinner}
            {content}
            {errorMessage}
        </article>
    )
}