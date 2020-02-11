import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../pages/layout";
import { HomePage, AboutPage, SettingsPage, HelpPage } from "../pages";

import "./app.css";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/settings" component={SettingsPage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route path="/about" component={AboutPage} exact />
      </Switch>
    </Layout>
  );
};

export default App;
