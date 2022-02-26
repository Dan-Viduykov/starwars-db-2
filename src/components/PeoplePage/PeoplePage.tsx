/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import SwapiService from "../../services/SwapiService";
import { IPerson } from "../../types";
import ErrorBoundary from "../ErrorBoundary";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import './PeoplePage.css'

interface RowProps {
    left: React.ReactElement;
    right: React.ReactElement;
}

const Row = ({ left, right }: RowProps) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

export const PeoplePage = (): React.ReactElement => {
    const swapiService = new SwapiService();
    const [ selectedItem, setSelectedItem ] = useState<number | null>(null);

    const onItemSelected = (id: number) => {
        setSelectedItem(id);
    }

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={swapiService.getAllPeople} >

            {(item: Partial<IPerson>) => `${item.name} (${item.birthYear})`}
        </ItemList>
    )
    const personDetails = (
        <PersonDetails personId={selectedItem} />
    )

    return (
        <ErrorBoundary>
            <Row left={itemList} right={personDetails}/>
        </ErrorBoundary>
    )
}