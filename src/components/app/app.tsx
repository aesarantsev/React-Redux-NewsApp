import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages";

import "./app.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
};

export default App;