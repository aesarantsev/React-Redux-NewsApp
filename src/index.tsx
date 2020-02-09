import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import App from "./components/app";
import store from "./store";
import ArticleService from "./services/article-service";
import { ArticleServiceProvider } from "./services/article-service-context";

import "./index.css";




const articleService = new ArticleService();

ReactDOM.render(
  <Provider store={store}>
    <ArticleServiceProvider value={{articleService}}>
      <Router>
        <App />
      </Router>
    </ArticleServiceProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
