import {
  articleRequested,
  articleLoaded,
  articleLoadedEmptyResult,
  articleError,
  setArticlesQuertyParams,
  setQuerty,
  fromDateChange,
  toDateChange,
  pageSizeChange,
  themeChange,
  fontSizeChange
} from "./action-creators";
import * as actions from "./actions";
import { articlesQuertyParamsType } from "../entities/StoreStructure";

describe(">>> ACTION CREATORS --- Tests", () => {
  it("+++ action articleRequested", () => {
    let payload: string = "test phraze";
    let action = articleRequested(payload);

    expect(action).toEqual({
      type: actions.FETCH_ARTICLE_REQUEST,
      payload: { q: payload }
    });
  });

  it("+++ action articleLoaded", () => {
    let payload = { testObject: { testKey: "testValue" } };
    let action = articleLoaded(payload);

    expect(action).toEqual({
      type: actions.FETCH_ARTICLE_SUCCESS,
      payload: payload
    });
  });

  it("+++ action articleLoadedEmptyResult", () => {
    let action = articleLoadedEmptyResult();

    expect(action).toEqual({
      type: actions.FETCH_ARTICLE_SUCCESS_EMPTY_RESULT
    });
  });

  it("+++ action articleError", () => {
    let payload = "error massage";
    let action = articleError(payload);

    expect(action).toEqual({
      type: actions.FETCH_ARTICLE_FAILURE,
      payload: payload
    });
  });

  it("+++ action setArticlesQuertyParams", () => {
    let payload: articlesQuertyParamsType = {
      q: "bitcoin",
      pageSize: 1,
      page: 2,
      from: "22-05-2020",
      to: "23-05-2020"
    };
    let action = setArticlesQuertyParams(payload);

    expect(action).toEqual({
      type: actions.SET_ARTICLE_QUERTY_PARAMS,
      payload: payload
    });
  });

  it("+++ action setQuerty", () => {
    let payload: string = "test string";
    let action = setQuerty(payload);

    expect(action).toEqual({
      type: actions.QUERTY_INPUT_CHANGE,
      payload: payload
    });
  });

  it("+++ action fromDateChange", () => {
    let payload: string = "test string";
    let action = fromDateChange(payload);

    expect(action).toEqual({
      type: actions.FROM_DATE_CHANGE,
      payload: payload
    });
  });

  it("+++ action toDateChange", () => {
    let payload: string = "test string";
    let action = toDateChange(payload);

    expect(action).toEqual({
      type: actions.TO_DATE_CHANGE,
      payload: payload
    });
  });

  it("+++ action pageSizeChange", () => {
    let payload: number = 2;
    let action = pageSizeChange(payload);

    expect(action).toEqual({
      type: actions.PAGE_SIZE_CHANGE,
      payload: payload
    });
  });

  it("+++ action themeChange", () => {
    let action = themeChange();

    expect(action).toEqual({
      type: actions.THEME_CHANGE
    });
  });

  it("+++ action fontSizeChange", () => {
    let payload: number = 3;
    let action = fontSizeChange(payload);

    expect(action).toEqual({
      type: actions.FONT_SIZE_CHANGE,
      payload: payload
    });
  });
});
