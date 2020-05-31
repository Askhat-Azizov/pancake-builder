import React from 'react'
import { useDispatch } from "react-redux";
import { remove, add } from '../../../../store/actions/builder';
import classes from "./FruitControl.module.css";


export default ({ label, fruit, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.FruitControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, fruit)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button
        className={classes.more}
        onClick={() => add(dispatch, fruit)}
      >
        +
      </button>
    </div>
  );
};