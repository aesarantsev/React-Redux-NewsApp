import { Article } from "./Article";

export interface StoreStructure {
  articleList: articleListType;
}

export interface articleListType {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

