import React from "react";
import { Link, Route } from "react-router-dom";

import { ItemCard } from "./ItemCard";

export const ItemsList = ({ match }) => {
    return (
        <div>
            {console.log(match)}
            <ul>
                <li>
                    <Link to={`${match.url}/1`}>1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2`}>2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/3`}>3</Link>
                </li>
                <li>
                    <Link to={`${match.url}/4`}>4</Link>
                </li>
                <li>
                    <Link to={`${match.url}/5`}>5</Link>
                </li>
            </ul>
            <Route path={`${match.path}/:id`} component={ItemCard} />
        </div>
    );
};
