import * as React from "react";
import ArticleService from "./article-service";

interface AppContextInterface {
  articleService: ArticleService;
}

const {
  Provider: ArticleServiceProvider,
  Consumer: ArticleServiceConsumer
} = React.createContext<AppContextInterface | null>({articleService: new ArticleService()});

export { ArticleServiceProvider, ArticleServiceConsumer };
