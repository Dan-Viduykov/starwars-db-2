import React from "react";
import './App.css'

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ErrorBoundary from "../ErrorBoundary";

export const App = (): React.ReactElement => {
    return (
        <ErrorBoundary>
            <div className="app">
                <Header />
                <RandomPlanet />
    
                <PeoplePage />
            </div>
        </ErrorBoundary>
    )
}