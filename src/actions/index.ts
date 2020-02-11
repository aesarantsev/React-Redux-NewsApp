import ArticleService from "../services/article-service";

import { articlesQuertyParamsType } from "../entities/StoreStructure";
import {
  articleRequested,
  articleLoaded,
  articleLoadedEmptyResult,
  articleError,
  setArticlesQuertyParams,
  fromDateChange,
  toDateChange,
  setQuerty,
  pageSizeChange
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
    .then(data => {
      //if (data.articles.length) 
      dispatch(articleLoaded(data));
      //else dispatch(articleLoadedEmptyResult());
    })
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

export const setPageSizeToState = (dispatch: any) => (pageSize: number) => {
  console.log("setPageSizeToState", pageSize);
  dispatch(pageSizeChange(pageSize));
};

export const setQuertyToState = (dispatch: any) => (q: string) => {
  console.log("setQuertyToState");
  dispatch(setQuerty(q));
};
