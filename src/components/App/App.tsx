import React from "react";
import './App.css'
import SwapiService from "../../services/SwapiService";
import { IPerson } from "../../types";

export const App = (): React.ReactElement => {

    const swapiService = new SwapiService()

    return (
        <div className="app">
            <header>header</header>
            <main>main</main>
            <footer>footer</footer>
        </div>
    )
}