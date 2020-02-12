import ArticleService from "../services/article-service";
import { articlesQuertyParamsType } from "../entities/StoreStructure";
import * as actionCreators from "./action-creators";

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
  dispatch(actionCreators.articleRequested(query));

  articleService
    .getArticles(query, pageSize, page, from, to)
    .then(data => {
      dispatch(actionCreators.articleLoaded(data));
    })
    .catch(err => dispatch(actionCreators.articleError(err)));
};

export const setArticlesQuertyParamsFunc = (dispatch: any) => (
  params: articlesQuertyParamsType
) => {
  dispatch(actionCreators.setArticlesQuertyParams(params));
};

export const setFromDateToState = (dispatch: any) => (fromDate: string) => {
  dispatch(actionCreators.fromDateChange(fromDate));
};

export const setToDateToState = (dispatch: any) => (toDate: string) => {
  dispatch(actionCreators.toDateChange(toDate));
};

export const setPageSizeToState = (dispatch: any) => (pageSize: number) => {
  dispatch(actionCreators.pageSizeChange(pageSize));
};

export const setQuertyToState = (dispatch: any) => (q: string) => {
  dispatch(actionCreators.setQuerty(q));
};

export const changeTheme = (dispatch: any) => () => {
  dispatch(actionCreators.themeChange());
};

export const changeFontSize = (dispatch: any) => (fontSize: number) => {
  dispatch(actionCreators.fontSizeChange(fontSize));
};
