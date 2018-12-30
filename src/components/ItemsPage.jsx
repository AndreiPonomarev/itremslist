import React from "react";
import { Route } from "react-router-dom";

import { ItemCard } from "./ItemCard";
import { ItemsList } from "./ItemsList";

export const ItemsPage = ({ match }) => {

    return (
        <div>
            <Route path={`${match.path}/:id`} component={ItemCard} />
            <Route
                exact
                path={match.path}
                component={ItemsList}
            />
        </div>
    );
};
