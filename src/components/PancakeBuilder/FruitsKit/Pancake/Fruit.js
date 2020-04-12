import React from "react";
import classes from "./Fruit.module.css";

export default function ({ type }) {
  const fruitClasses = [classes.Fruit];

  switch (type) {
    case "banana":
      fruitClasses.push(classes.Banana);
      break;
    case "strawberry":
      fruitClasses.push(classes.Strawberry);
      break;
    case "kiwi":
      fruitClasses.push(classes.Kiwi);
      break;
    case "chocolate":
      fruitClasses.push(classes.Chocolate);
      break;
  }

  return <div className={fruitClasses.join(" ")}></div>;
}
