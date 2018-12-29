import React from "react";
import { Route } from "react-router-dom";

import { ItemsList, Home } from './components'

import styles from "./style.css";

const  App = () => {
  const [team, setTeam] = useState([]);
  const addMember = member => {
    setTeam(team.push(member));
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>{"Logo here"}</header>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ItemsList} />
    </div>
  );
}

export default App;
