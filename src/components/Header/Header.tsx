import React from "react";
import './Header.css'

export const Header = (): React.ReactElement => {
    return (
        <header className="header d-flex">
            <h3><a href="#">Starwars DB</a></h3>
            <ul className="header__list d-flex">
                <li className="header__list-item"><a href="#">People</a></li>
                <li className="header__list-item"><a href="#">Planets</a></li>
                <li className="header__list-item"><a href="#">Starships</a></li>
            </ul>
        </header>
    )
}