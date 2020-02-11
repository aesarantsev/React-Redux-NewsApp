import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  SET_ARTICLE_QUERTY_PARAMS,
  QUERTY_INPUT_CHANGE,
  FROM_DATE_CHANGE,
  TO_DATE_CHANGE,
  FETCH_ARTICLE_SUCCESS_EMPTY_RESULT,
  PAGE_SIZE_CHANGE
} from "./actions";
import { articlesQuertyParamsType } from "../entities/StoreStructure";

export const articleRequested = (query: string): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    payload: { q: query }
  };
};

export const articleLoaded = (newArticles: any): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: newArticles
  };
};

export const articleLoadedEmptyResult = (): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_SUCCESS_EMPTY_RESULT
  };
};

export const articleError = (error: any): ArticleActionType => {
  return {
    type: FETCH_ARTICLE_FAILURE,
    payload: error
  };
};

export const setArticlesQuertyParams = (
  params: articlesQuertyParamsType
): ArticleActionType => {
  return {
    type: SET_ARTICLE_QUERTY_PARAMS,
    payload: params
  };
};

export const setQuerty = (querty: string): ArticleActionType => {
  return {
    type: QUERTY_INPUT_CHANGE,
    payload: querty
  };
};

export const fromDateChange = (fromDate: string): ArticleActionType => {
  return {
    type: FROM_DATE_CHANGE,
    payload: fromDate
  };
};

export const toDateChange = (toDate: string): ArticleActionType => {
  return {
    type: TO_DATE_CHANGE,
    payload: toDate
  };
};

export const pageSizeChange = (pageSize: number): ArticleActionType => {
  return {
    type: PAGE_SIZE_CHANGE,
    payload: pageSize
  };
};

interface ActionTypeBase {
  type: string;
}

interface ArticleActionType extends ActionTypeBase {
  payload?: any;
}
