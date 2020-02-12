// import {
//   FETCH_ARTICLE_REQUEST,
//   FETCH_ARTICLE_SUCCESS,
//   FETCH_ARTICLE_FAILURE,
//   FETCH_ARTICLE_SUCCESS_EMPTY_RESULT,
//   SET_ARTICLE_QUERTY_PARAMS,
//   QUERTY_INPUT_CHANGE,
//   FROM_DATE_CHANGE,
//   TO_DATE_CHANGE,
//   PAGE_SIZE_CHANGE
// } from "../actions/actions";
import * as actions from "../actions/actions";
import { StoreStructure, articleListType } from "../entities/StoreStructure";
import { ActionType } from "../entities/Actions";
import moment from "moment";
import { DatepickerDateToISOformat } from "../utils/date-service";

let fromDate: string = moment()
  .day(0)
  .toISOString();
let toDate: string = moment().toISOString();

console.log("fromDate", fromDate);
const initialState: articleListType = {
  articles: [],
  totalArticles: 0,
  articlesQuertyParams: {
    q: "bitcoin",
    pageSize: 5,
    page: 1,
    from: fromDate,
    to: toDate
  },
  loading: true,
  error: null
};
console.log("From: ", initialState.articlesQuertyParams.from);
console.log("To: ", initialState.articlesQuertyParams.to);
export const upateArticle = (
  state: StoreStructure,
  action: ActionType
): articleListType => {
  if (state === undefined) return initialState;

  switch (action.type) {
    case actions.FETCH_ARTICLE_REQUEST:
      console.log(actions.FETCH_ARTICLE_REQUEST);
      return {
        ...state.articleList,
        articlesQuertyParams: {
          page: 1,
          q: action.payload.q,
          ...state.articleList.articlesQuertyParams
        },
        loading: true,
        error: null
      };

    case actions.FETCH_ARTICLE_SUCCESS:
      console.log(actions.FETCH_ARTICLE_SUCCESS);
      console.log(action.payload);
      return {
        ...state.articleList,
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          page: state.articleList.articlesQuertyParams.page + 1
        },
        articles: state.articleList.articles.concat(action.payload.articles),
        totalArticles: action.payload.totalArticles,
        loading: false,
        error: null
      };

    case actions.FETCH_ARTICLE_SUCCESS_EMPTY_RESULT:
      console.log(actions.FETCH_ARTICLE_SUCCESS_EMPTY_RESULT);
      return {
        ...state.articleList,
        articles: [],
        loading: false,
        error: null
      };

    case actions.FETCH_ARTICLE_FAILURE:
      console.log(actions.FETCH_ARTICLE_FAILURE);
      return {
        ...state.articleList,
        articles: [],
        loading: false,
        error: action.payload
      };

    case actions.SET_ARTICLE_QUERTY_PARAMS:
      console.log(actions.SET_ARTICLE_QUERTY_PARAMS);
      return {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...action.payload
        }
      };

    case actions.QUERTY_INPUT_CHANGE:
      console.log(actions.QUERTY_INPUT_CHANGE);
      return {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          q: action.payload
        }
      };

    case actions.FROM_DATE_CHANGE:
      console.log(actions.FROM_DATE_CHANGE);
      return {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          page: 1,
          from: DatepickerDateToISOformat(action.payload)
        }
      };

    case actions.TO_DATE_CHANGE:
      console.log(actions.TO_DATE_CHANGE);
      return {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          page: 1,
          to: DatepickerDateToISOformat(action.payload)
        }
      };

    case actions.PAGE_SIZE_CHANGE:
      console.log(actions.PAGE_SIZE_CHANGE);
      return {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          page: 1,
          pageSize: action.payload
        }
      };

    default:
      return state.articleList;
  }
};
