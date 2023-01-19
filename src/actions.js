export const INPUT = "INPUT";
export const EVAL = "EVAL";
export const RESULT = "RESULT";
export const RESET = "RESET";

export function input1(text) {
  return {
    type: INPUT,
    payload: text,
  };
}

export function evaluate() {
  return {
    type: EVAL,
  };
}

export function result(output) {
  return {
    type: RESULT,
    payload: output,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
