import * as actions from './actions'
import { articlesQuertyParamsType } from "../entities/StoreStructure";
import { Article } from '../entities/Article';

export const articleRequested = (query: string): ArticleActionType => {
  return {
    type: actions.FETCH_ARTICLE_REQUEST,
    payload: { q: query }
  };
};

export const articleLoaded = (newArticles: any): ArticleActionType => {
  return {
    type: actions.FETCH_ARTICLE_SUCCESS,
    payload: newArticles
  };
};

export const articleLoadedEmptyResult = (): ArticleActionType => {
  return {
    type: actions.FETCH_ARTICLE_SUCCESS_EMPTY_RESULT
  };
};

export const articleError = (error: string): ArticleActionType => {
  return {
    type: actions.FETCH_ARTICLE_FAILURE,
    payload: error
  };
};

export const setArticlesQuertyParams = (
  params: articlesQuertyParamsType
): ArticleActionType => {
  return {
    type: actions.SET_ARTICLE_QUERTY_PARAMS,
    payload: params
  };
};

export const setQuerty = (querty: string): ArticleActionType => {
  return {
    type: actions.QUERTY_INPUT_CHANGE,
    payload: querty
  };
};

export const fromDateChange = (fromDate: string): ArticleActionType => {
  return {
    type: actions.FROM_DATE_CHANGE,
    payload: fromDate
  };
};

export const toDateChange = (toDate: string): ArticleActionType => {
  return {
    type: actions.TO_DATE_CHANGE,
    payload: toDate
  };
};

export const pageSizeChange = (pageSize: number): ArticleActionType => {
  return {
    type: actions.PAGE_SIZE_CHANGE,
    payload: pageSize
  };
};

export const themeChange = (): ArticleActionType => {
  return {
    type: actions.THEME_CHANGE
  };
};

export const fontSizeChange = (fontSize: number): ArticleActionType => {
  return {
    type: actions.FONT_SIZE_CHANGE,
    payload: fontSize
  };
};

interface ActionTypeBase {
  type: string;
}

interface ArticleActionType extends ActionTypeBase {
  payload?: any;
}
