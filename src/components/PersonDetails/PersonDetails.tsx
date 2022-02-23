import React, { useEffect, useState } from "react";
import SwapiService from "../../services/SwapiService";
import { IPerson } from "../../types";
import Spinner from "../Spinner";
import './PersonDetails.css'
import { PersonDetailsView } from "./PersonDetailsView";

interface PersonDetailsProps {
    personId: number | null
}

export const PersonDetails = (props: PersonDetailsProps) => {
    const { personId } = props

    const swapiService = new SwapiService()
    const [ person, setPerson ] = useState<Partial<IPerson> | null>(null)
    const [ loading, setLoading ] = useState(true)
    

    const updatePerson = (): void => {
        if (!personId) return;
        setLoading(true)

        swapiService
            .getPerson(personId)
            .then((res) => {
                setPerson(res);
                setLoading(false);
            })
    }

    useEffect(() => updatePerson(), []);
    useEffect(() => updatePerson(), [personId])

    if (!person) {
        return <span>Select a person from a list</span>
    }

    return (
        <article className="person-details card">
            {loading ? <Spinner /> : <PersonDetailsView person={person} />}
        </article>
    )
}