import * as React from "react";
import * as renderer from "react-test-renderer";
import ArticleListItem from "./";
import { BrowserRouter as Router } from "react-router-dom";

it("SubjectToBeTested renders correctly", () => {
  const props = {
    article: {
      id: "123123",
      title: "Test news title",
      description: "Test description",
      urlToImage: "https://cdn.vox-cdn.com/thumbor/SLLGigPOOcRWZOVySx01jGGI2sI=/0x109:1520x905/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19719342/vbucks.0__1_.png",
      publishedAt: "2020-02-14T03:15:11Z",
      content: "test content"
    }
  };
  const tree = renderer
    .create(
      <Router>
        <ArticleListItem {...props} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
