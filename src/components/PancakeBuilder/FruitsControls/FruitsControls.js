import React from "react";
import classes from "./FruitsControls.module.css";
import FruitControl from "./FruitControl/FruitControl";
const CONTROLS = [
  { label: "Banana", type: "banana" },
  { label: "Strawberry", type: "strawberry" },
  { label: "Kiwi", type: "kiwi" },
  { label: "Chocolate", type: "chocolate" },
];

export default function ({ addFruit, removeFruit }) {
  const controlsOutput = CONTROLS.map((control) => (
    <FruitControl
      control={control}
      addFruit={addFruit}
      removeFruit={removeFruit}
    />
  ));

  return <div className={classes.FruitsControls}>{controlsOutput}</div>;
}
