/* @flow */
import { ADD_TODO, FETCH_TODOS } from "../actions/todos";

type State = Array<string>;

const INITIAL_STATE: State = [];

export default (state: State = INITIAL_STATE, action: { type: string, payload?: any, value?: any }) => {
  switch (action.type) {
    case FETCH_TODOS:
      if (!action.value) {
        return state;
      }

      return action.value.data || [];
    case ADD_TODO:
      if (!action.value) {
        return state;
      }

      return [...state, action.value.data];
    default:
      return state;
  }
};
