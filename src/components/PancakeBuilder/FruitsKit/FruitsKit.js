import React from "react";
import classes from "./Fruitskit.module.css";
import Fruit from "./Pancake/Fruit";

export default function ({ price, fruits }) {
  let fruitOutput = [];

  Object.keys(fruits).forEach((type) => {
    for (let i = 0; i < fruits[type]; i++) {
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
