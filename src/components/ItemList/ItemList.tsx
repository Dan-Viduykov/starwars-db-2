import React, { useEffect, useState } from "react";
import SwapiService from "../../services/SwapiService";
import { IPerson } from "../../types";
import Spinner from "../Spinner";
import './ItemList.css'

interface ItemListProps {
    onItemSelected: (id: number) => void
}

export const ItemList = (props: ItemListProps): React.ReactElement => {
    const swapiService = new SwapiService()

    const [ peopleList, setPeopleList ] = useState<Partial<IPerson[]>>([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        swapiService.getAllPeople()
            .then((people) => {
                setPeopleList(people)
                setLoading(false)
            })
    }, [])

    const renderItems = (arr: IPerson[]) => {
        return arr.map(({id, name}: IPerson) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => {props.onItemSelected(id)}}
                    onKeyDown={() => {console.log('key down')}}
                    role='menuitem' >
                    {name}
                </li>
            )
        })
    }

    const spinner = loading? <Spinner /> : null
    const content = !loading? renderItems(peopleList as IPerson[]) : null

    return (
        <ul className="item-list list-group">
            {spinner}
            {content}
        </ul>
    )
}   