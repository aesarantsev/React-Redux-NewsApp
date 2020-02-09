import { Article } from "./Article";

export interface StoreStructure {
  articleList: articleListType;
}

export interface articleListType {
  articles: Article[];
  articlesQuery:string;
  loading: boolean;
  error: string | null;
}

