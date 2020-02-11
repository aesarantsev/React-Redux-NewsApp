import { Article } from "./Article";

export interface StoreStructure {
  articleList: articleListType;
  uiParams: uiParamsType;
}

export interface articleListType {
  articles: Article[];
  totalArticles: number;
  articlesQuertyParams: articlesQuertyParamsType;
  loading: boolean;
  error: string | null;
}

export interface uiParamsType {
  darkTheme: boolean;
  fontSize: number;
}

export interface articlesQuertyParamsType {
  q: string;
  pageSize: number;
  page: number;
  from: string;
  to: string;
}
