import { upateArticle } from "./article";
import { StoreStructure } from "../entities/StoreStructure";
import {ActionType} from '../entities/Actions'

const reducer = (state: any, action: ActionType): StoreStructure => {
  return {
    articleList: upateArticle(state, action)
  };
};

export { reducer };


