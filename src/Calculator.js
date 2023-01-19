import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { input1, evaluate, reset } from "./actions";

function Calculator() {
  const input = useSelector((state) => state.input);
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(input1(event.target.value));
  };

  const handleEval = () => {
    dispatch(evaluate());
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => dispatch(input1(e.target.value))}
      />
      <br />
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="+" onClick={handleClick}>
        +
      </button>
      <br />
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="-" onClick={handleClick}>
        -
      </button>
      <br />
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="*" onClick={handleClick}>
        *
      </button>
      <br />
      <button onClick={() => dispatch(reset())}>C</button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button value="=" onClick={handleEval}>
        =
      </button>
      <button value="/" onClick={handleClick}>
        /
      </button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
