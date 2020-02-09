import { Article } from "./Article";

export interface StoreStructure {
  articleList: articleListType;
}

export interface articleListType {
  articles: Article[];
  articlesQuertyParams: {
    q: string;
    pageSize: number;
    page: number;
  };
  loading: boolean;
  error: string | null;
}
