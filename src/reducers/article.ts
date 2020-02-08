import { Article } from "../entities/Article";
import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from "../actions/actions";
import { StoreStructure, articleListType } from "../entities/StoreStructure";
import { ActionType } from "../entities/Actions";

export const upateArticle = (
  state: StoreStructure,
  action: ActionType
): articleListType => {
  if (state === undefined)
    return {
      articles: [],
      loading: true,
      error: null
    };
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      console.log(FETCH_ARTICLE_REQUEST);
      return {
        articles: [],
        loading: true,
        error: null
      };

    case FETCH_ARTICLE_SUCCESS:
      console.log(FETCH_ARTICLE_SUCCESS);
      return {
        articles: action.payload,
        loading: false,
        error: null
      };

    case FETCH_ARTICLE_FAILURE:
      console.log(FETCH_ARTICLE_FAILURE);
      return {
        articles: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.articleList;
  }
};
