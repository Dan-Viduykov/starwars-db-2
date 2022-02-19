import React from "react";
import './PersonDetails.css'

export const PersonDetails = (): React.ReactElement => {
    return (
        <article className="person-details card">
            <img
                className="person-details__image"
                src="https://starwars-visualguide.com/assets/img/characters/4.jpg"
                alt="planetName" />
            <div className="card-body">
                <h4>Darth Vader</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>42</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>Yellow</span>
                    </li>
                </ul>
            </div>
        </article>
    )
}