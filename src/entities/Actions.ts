interface ActionBase {
  type: string;
}

export interface ActionType extends ActionBase {
  payload?: any;
}