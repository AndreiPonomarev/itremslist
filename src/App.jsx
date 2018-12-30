import React from "react";
import { Route } from "react-router-dom";

import { Header, Home, ItemsPage } from "./components";
import { MDBContainer } from "mdbreact";

const App = () => (
    <div>
        <Route path="/" component={Header} />
        <MDBContainer className="mt-5 pt-5">
            <Route exact path="/" component={Home} />
            <Route path="/items" component={ItemsPage} />
        </MDBContainer>
    </div>
);

export default App;
