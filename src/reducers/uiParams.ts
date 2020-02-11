import { THEME_CHANGE, FONT_SIZE_CHANGE } from "../actions/actions";

import { uiParamsType, StoreStructure } from "../entities/StoreStructure";
import { ActionType } from "../entities/Actions";
const initialState: uiParamsType = {
  darkTheme: false,
  fontSize: 12
};

export const upateUIparams = (
  state: StoreStructure,
  action: ActionType
): uiParamsType => {
  if (state === undefined) return initialState;

  switch (action.type) {
    case THEME_CHANGE:
      console.log(THEME_CHANGE);

      return {
        ...state.uiParams,
        darkTheme: !state.uiParams.darkTheme
      };

    case FONT_SIZE_CHANGE:
      console.log(FONT_SIZE_CHANGE);

      return {
        ...state.uiParams,
        fontSize: action.payload
      };

    default:
      return state.uiParams;
  }
};
