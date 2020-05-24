import React from "react";
import classes from "./FruitsControls.module.css";
import FruitControl from "./FruitControl/FruitControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Banana", type: "banana" },
  { label: "Kiwi", type: "kiwi" },
  { label: "Chocolate", type: "chocolate" },
  {label: "Raspberry", type:"raspberry"},
  {label: "Watermelon", type:"watermelon"},
];

export default function ({ startOrder, canOrder, fruits }) {
  const controlsOutput = CONTROLS.map((control) => (
    <FruitControl
      key={control.type}
      control={control}
      disabled={fruits[control.type] === 0}
    />
  ));

  return (
    <div className={classes.FruitsControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
}
