import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ControlPanel,
  Login,
  Register,
  Database,
  Settings,
} from "./components";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.contorlPanel}>
          <ControlPanel />
        </div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/database" exact component={Database} />
          <Route path="/settings" exact component={Settings} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
