import React from "react";
import { Route } from "react-router-dom";

import { Header, Home, ItemsPage } from "./components";

import styles from "./style.css";

const App = () => (
    <div className={styles.app}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/items" component={ItemsPage} />
    </div>
);

export default App;
