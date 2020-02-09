import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from "../actions/actions";
import { StoreStructure, articleListType } from "../entities/StoreStructure";
import { ActionType } from "../entities/Actions";

const initialState: articleListType = {
  articles: [],
  articlesQuertyParams: {
    q: "bitcoin",
    pageSize: 5,
    page: 1
  },
  loading: true,
  error: null
};

export const upateArticle = (
  state: StoreStructure,
  action: ActionType
): articleListType => {
  if (state === undefined) return initialState;

  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      console.log(FETCH_ARTICLE_REQUEST);
      return {
        ...state.articleList,
        articlesQuertyParams: {
          q: action.payload.q,
          ...state.articleList.articlesQuertyParams
        },
        loading: true,
        error: null
      };

    case FETCH_ARTICLE_SUCCESS:
      console.log(FETCH_ARTICLE_SUCCESS);
      console.log(action.payload);
      return {
        ...state.articleList,
        articles: state.articleList.articles.concat(action.payload),
        loading: false,
        error: null
      };

    case FETCH_ARTICLE_FAILURE:
      console.log(FETCH_ARTICLE_FAILURE);
      return {
        ...state.articleList,
        articles: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.articleList;
  }
};
