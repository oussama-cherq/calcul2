// reducer.js

import { INPUT, EVAL, RESULT, RESET } from "./actions";

const initialState = {
  input: "",
  result: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        input: state.input + action.payload,
      };
    case EVAL:
      try {
        return {
          ...state,
          result: eval(state.input),
        };
      } catch (error) {
        return {
          ...state,
          result: "Error",
        };
      }
    case RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case RESET:
      return {
        input: "",
        result: "",
      };
    default:
      return state;
  }
}
