import React from "react";
import classes from "./FruitsControls.module.css";
import FruitControl from "./FruitControl/FruitControl";
import Button from "../../UI/Button/Button";


export default function ({ startOrder, canOrder, fruits }) {
  const controlsOutput = Object.keys(fruits).map((fruit) => (
    <FruitControl
      key={fruit}
      fruit={fruit}
      label={fruits[fruit].label}
      disabled={fruits[fruit].quantity === 0}
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
