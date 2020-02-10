import React from "react";

import Container from "@material-ui/core/Container";
import ArticleList from "../article-list";
import ArticleFilter from "../article-filter";
import Menu from "../menu";
import Drawer from "@material-ui/core/Drawer";
const HomePage = () => {
  return (
    <React.Fragment>
      <Menu />
      <Container maxWidth="md">
        <ArticleFilter />
        <ArticleList />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
