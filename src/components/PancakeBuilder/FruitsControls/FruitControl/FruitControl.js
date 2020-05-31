import React from 'react'
import { useDispatch } from "react-redux";
import { REMOVE_FRUIT, ADD_FRUIT } from "../../../../store/actions/types";
import classes from "./FruitControl.module.css";


export default ({ control, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.FruitControl}>
      <button
        className={classes.less}
        onClick={() =>
          dispatch({ type: REMOVE_FRUIT, fruit: control.type })
        }
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() =>
          dispatch({ type: ADD_FRUIT, fruit: control.type })
        }
      >
        +
      </button>
    </div>
  );
};