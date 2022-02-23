import React, { useState } from "react";
import './App.css'

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

export const App = (): React.ReactElement => {

    const [ selectedPerson, setSelectedPerson ] = useState<number | null>(null)

    const onPersonSelected = (id: number) => {
        setSelectedPerson(id)    
    }

    return (
        <div className="app">
            <Header />
            <RandomPlanet />

            <main className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson} />
                </div>
            </main>
        </div>
    )
}