import React from "react";
import { Route } from "react-router-dom";

import { Header, ItemsList, Home } from "./components";

import styles from "./style.css";

const App = () => (
    <div className={styles.app}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={ItemsList} />
    </div>
);

export default App;
