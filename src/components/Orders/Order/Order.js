import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
    banana: "Banana",
    strawberry: "Strawberry",
    kiwi: "Kiwi",
    chocolate: "Chocolate",
    raspberry: "Raspberry",
    mango: "Mango",
    whippedcream: "Whippedcream",
};

export default ({ price, fruits, details }) => {
  const fruitsOutput = Object.keys(fruits).map((key) => (
    <span key={key} className={classes.ingredient}>
      {CONTROLS[key]} ({fruits[key]})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.fruits}>{fruitsOutput}</div>
    </div>
  );
};