import { Article } from "./Article";

export interface StoreStructure {
  articleList: articleListType;
}

export interface articleListType {
  articles: Article[];
  articlesQuertyParams: articlesQuertyParamsType;
  loading: boolean;
  error: string | null;
}

export interface articlesQuertyParamsType {
  q: string;
  pageSize: number;
  page: number;
  from: string;
  to: string;
}
