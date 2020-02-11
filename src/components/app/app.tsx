import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../pages/layout";
import { HomePage, AboutPage,SettingsPage } from "../pages";

import "./app.css";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/settings" component={SettingsPage} exact />
          <Route path="/help" component={AboutPage} exact />
          <Route path="/about" component={AboutPage} exact />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
