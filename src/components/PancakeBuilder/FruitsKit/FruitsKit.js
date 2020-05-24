import React from "react";
import classes from "./Fruitskit.module.css";
import Fruit from "./Pancake/Fruit";

export default function ({ price, fruits }) {
  let fruitsOutput = [];

  Object.keys(fruits).forEach((type) => {
    for (let i = 0; i < fruits[type]; i++) {
      fruitsOutput.push(<Fruit key={type + i} type={type} />);
    }
  });
  return (
    <div className={classes.Fruitskit}>
      <div className={classes.bento}>{fruitsOutput}</div>
      <div className={classes.price}>Total price:{price.toFixed(2)} som</div>
    </div>
  );
}
