import { upateArticle } from "./article";
import { upateUIparams } from "./uiParams";
import { StoreStructure } from "../entities/StoreStructure";
import { ActionType } from "../entities/Actions";

const reducer = (state: any, action: ActionType): StoreStructure => {
  return {
    articleList: upateArticle(state, action),
    uiParams: upateUIparams(state, action)
  };
};

export { reducer };
