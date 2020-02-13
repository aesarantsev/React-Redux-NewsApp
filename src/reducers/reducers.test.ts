import { reducer } from "./index";
import { StoreStructure } from "../entities/StoreStructure";
import { DatepickerDateToISOformat } from "../utils/date-service";

let initialState: StoreStructure;

beforeEach(() => {
  initialState = {
    articleList: {
      articles: [
        {
          id: "testId",
          title: "testTitle",
          description: "testDescriptrion",
          urlToImage: "testUrltoImage",
          publishedAt: "testDatePub",
          content: "testContent"
        }
      ],
      totalArticles: 0,
      articlesQuertyParams: {
        q: "bitcoin",
        pageSize: 5,
        page: 1,
        from: "string",
        to: "string"
      },
      loading: true,
      error: null
    },
    uiParams: {
      darkTheme: false,
      fontSize: 12
    }
  };
});

it("reducer should return the passed state with an unknown action ", () => {
  let state: StoreStructure = initialState;
  let payload = { testKey: "test" };

  let receivedState: StoreStructure = reducer(state, {
    type: "UNKNOWN_ACTION",
    payload
  });

  expect(receivedState).toEqual(state);
});

describe(">>>REDUCER --- articleList tests", () => {
  it("+++ reducer for FETCH_ARTICLE_REQUEST", () => {
    let state: StoreStructure = initialState;
    let payload = { q: "test" };

    let receivedState: StoreStructure = reducer(state, {
      type: "FETCH_ARTICLE_REQUEST",
      payload
    });

    let expectedState: StoreStructure = initialState;
    expectedState.articleList.articlesQuertyParams.q = payload.q;
    expect(expectedState).toEqual(receivedState);
  });

  it("+++ reducer for FETCH_ARTICLE_SUCCESS", () => {
    let state: StoreStructure = initialState;
    let payload = {
      totalArticles: 200,
      articles: [
        {
          id: "testId2",
          title: "testTitle2",
          description: "testDescriptrion2",
          urlToImage: "testUrltoImage2",
          publishedAt: "testDatePub2",
          content: "testContent2"
        }
      ]
    };

    let receivedState: StoreStructure = reducer(state, {
      type: "FETCH_ARTICLE_SUCCESS",
      payload
    });

    let expectedState: StoreStructure = initialState;

    expectedState.articleList.totalArticles = payload.totalArticles;
    expectedState.articleList.articles = expectedState.articleList.articles.concat(
      payload.articles
    );
    expectedState.articleList.articlesQuertyParams.page++;
    expectedState.articleList.loading = false;
    expectedState.articleList.error = null;
    expect(expectedState).toEqual(receivedState);
  });

  it("+++ reducer for FETCH_ARTICLE_SUCCESS_EMPTY_RESULT", () => {
    let state: StoreStructure = initialState;

    let receivedState: StoreStructure = reducer(state, {
      type: "FETCH_ARTICLE_SUCCESS_EMPTY_RESULT"
    });

    let expectedState: StoreStructure = {
      ...state,
      articleList: {
        articles: [],
        loading: false,
        error: null,
        ...state.articleList
      }
    };

    expect(expectedState).toEqual(receivedState);
  });

  it("+++ reducer for FETCH_ARTICLE_FAILURE", () => {
    let state: StoreStructure = initialState;
    let payload = "error details";

    let receivedState: StoreStructure = reducer(state, {
      type: "FETCH_ARTICLE_FAILURE",
      payload
    });

    let expectedState: StoreStructure = {
      ...state,
      articleList: {
        ...state.articleList,
        articles: [],
        loading: false,
        error: payload
      }
    };

    expect(expectedState).toEqual(receivedState);
  });

  it("+++ reducer for FROM_DATE_CHANGE", () => {
    let state: StoreStructure = initialState;
    let payload = "2020-02-01";

    let receivedState: StoreStructure = reducer(state, {
      type: "FROM_DATE_CHANGE",
      payload
    });

    let expectedState: StoreStructure = {
      ...state,
      articleList: {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          page: 1,
          from: DatepickerDateToISOformat(payload)
        }
      }
    };

    expect(expectedState).toEqual(receivedState);
  });

  it("+++ reducer for FROM_DATE_CTO_DATE_CHANGEHANGE", () => {
    let state: StoreStructure = initialState;
    let payload = "2020-02-01";

    let receivedState: StoreStructure = reducer(state, {
      type: "TO_DATE_CHANGE",
      payload
    });

    let expectedState: StoreStructure = {
      ...state,
      articleList: {
        ...state.articleList,
        articles: [],
        articlesQuertyParams: {
          ...state.articleList.articlesQuertyParams,
          page: 1,
          to: DatepickerDateToISOformat(payload)
        }
      }
    };

    expect(expectedState).toEqual(receivedState);
  });
});

describe(">>>REDUCER --- upateUIparams tests", () => {
  it("+++ reducer for THEME_CHANGE", () => {
    let state: StoreStructure = initialState;

    let receivedState: StoreStructure = reducer(state, {
      type: "THEME_CHANGE"
    });

    let expectedState: StoreStructure = {
      ...state,
      uiParams: {
        ...state.uiParams,
        darkTheme: !state.uiParams.darkTheme
      }
    };

    expect(expectedState).toEqual(receivedState);
  });

  it("+++ reducer for FONT_SIZE_CHANGE", () => {
    let state: StoreStructure = initialState;
    let payload = 5;

    let receivedState: StoreStructure = reducer(state, {
      type: "FONT_SIZE_CHANGE",
      payload
    });

    let expectedState: StoreStructure = {
      ...state,
      uiParams: {
        ...state.uiParams,
        fontSize: payload
      }
    };

    expect(expectedState).toEqual(receivedState);
  });
});
