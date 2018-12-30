import React from "react";
import { Route } from "react-router-dom";

import { Item } from "./Item";
import { ItemsList } from "./ItemsList";

export const ItemsPage = ({ match }) => {

    return (
        <div>
            <Route path={`${match.path}/:id`} component={Item} />
            <Route
                exact
                path={match.path}
                component={ItemsList}
            />
        </div>
    );
};
