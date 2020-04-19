import React from "react";
import classes from "./FruitControl.module.css";

export default function ({ control, removeFruit, addFruit, disabled }) {
  return (
    <div className={classes.FruitControl}>
      <button
        className={classes.less}
        onClick={() => removeFruit(control.type)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button className={classes.more} onClick={() => addFruit(control.type)}>
        +
      </button>
    </div>
  );
}
