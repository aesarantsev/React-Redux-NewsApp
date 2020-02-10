import ArticleService from "../services/article-service";

import { articlesQuertyParamsType } from "../entities/StoreStructure";
import {
  articleRequested,
  articleLoaded,
  articleError,
  setArticlesQuertyParams,
  fromDateChange,
  toDateChange,
  setQuerty
} from "./action-creators";

export const fetchArticles = (
  articleService: ArticleService,
  dispatch: any
) => (
  query: string,
  pageSize: number,
  page: number,
  from: string,
  to: string
) => {
  dispatch(articleRequested(query));

  articleService
    .getArticles(query, pageSize, page, from, to)
    .then(data => dispatch(articleLoaded(data)))
    .catch(err => dispatch(articleError(err)));
};

export const setArticlesQuertyParamsFunc = (dispatch: any) => (
  params: articlesQuertyParamsType
) => {
  console.log("setArticlesQuertyParamsFunc");
  dispatch(setArticlesQuertyParams(params));
};

export const setFromDateToState = (dispatch: any) => (fromDate: string) => {
  console.log("setFromDateToState");
  dispatch(fromDateChange(fromDate));
};

export const setToDateToState = (dispatch: any) => (toDate: string) => {
  console.log("setToDateToState");
  dispatch(toDateChange(toDate));
};

export const setQuertyToState = (dispatch: any) => (q: string) => {
  console.log("setQuertyToState");
  dispatch(setQuerty(q));
};
