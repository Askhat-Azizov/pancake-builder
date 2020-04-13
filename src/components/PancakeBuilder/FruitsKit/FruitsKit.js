import React from "react";
import classes from "./Fruitskit.module.css";
import Fruit from "./Pancake/Fruit";

export default function ({ price, fruit }) {
  let fruitOutput = [];

  Object.keys(fruit).forEach((type) => {
    for (let i = 0; i < fruit[type]; i++) {
      fruitOutput.push(<Fruit key={type + i} type={type} />);
    }
  });
  return (
    <div className={classes.Fruitskit}>
      <div className={classes.bento}>{fruitOutput}</div>
      <div className={classes.price}>Total price:{price} som</div>
    </div>
  );
}
