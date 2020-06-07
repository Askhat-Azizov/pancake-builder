import React, { memo } from "react";
import classes from "./Fruit.module.css";

export default memo( function ({ type }) {
  const fruitClasses = [classes.Fruit, classes[type]];

  let style = null;
  const getPosition = (ir) => {
    const pd = 450;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance =
      Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;

    return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
  };

  switch (type) { 
    case "peach":
      fruitClasses.push(classes.Peach);
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
    case "raspberry":
      fruitClasses.push(classes.Raspberry);
    break;
    case "starwberry":
        fruitClasses.push(classes.Strawberry);
      break;
    case "watermelon":
        fruitClasses.push(classes.Watermelon);
        break;      
  }

   const position = getPosition(50 / 2);

  style= {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
  };

  return <div  style={style} className={fruitClasses.join(" ")}></div>;
});