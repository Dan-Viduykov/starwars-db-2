import React from "react";
import './App.css'

import Header from "../Header";
import RandomPlanet from "../RandomPlanet copy 5";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

export const App = (): React.ReactElement => {
    return (
        <div className="app">
            <Header />
            <RandomPlanet />

            <main className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </main>
        </div>
    )
}