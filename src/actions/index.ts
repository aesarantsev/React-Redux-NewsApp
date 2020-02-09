import ArticleService from "../services/article-service";
import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from "./actions";

export const articleRequested = (query:string): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    payload:{articlesQuerty:query}
  };
};

export const articleLoaded = (newArticles: any): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: newArticles
  };
};

export const articleError = (error: any): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_FAILURE,
    payload: error
  };
};

export const fetchArticles = (
  articleService: ArticleService,
  dispatch: any
) => (query:string) => {
  dispatch(articleRequested(query));
  
  articleService
    .getArticles(query)
    .then(data => dispatch(articleLoaded(data)))
    .catch(err => dispatch(articleError(err)));
};

interface ActionTypeBase {
  type: string;
}

interface ArticleActionType extends ActionTypeBase {
  payload?: any;
}
