import React from "react";

import Container from "@material-ui/core/Container";
import ArticleList from "../article-list";
import ArticleFilter from "../article-filter";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ArticleFilter />
        <ArticleList />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
