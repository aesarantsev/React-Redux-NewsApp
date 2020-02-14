import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../pages/layout";
import { HomePage, AboutPage, SettingsPage, HelpPage } from "../pages";

import ArticleFull from "../article-full";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} component={HomePage} exact />
        <Route
          path={process.env.PUBLIC_URL + "/articles/:id"}
          component={ArticleFull}
        />
        <Route
          path={process.env.PUBLIC_URL + "/settings"}
          component={SettingsPage}
          exact
        />
        <Route
          path={process.env.PUBLIC_URL + "/help"}
          component={HelpPage}
          exact
        />
        <Route
          path={process.env.PUBLIC_URL + "/about"}
          component={AboutPage}
          exact
        />
      </Switch>
    </Layout>
  );
};

export default App;
