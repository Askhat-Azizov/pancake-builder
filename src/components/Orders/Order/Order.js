import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  banana: "Banana",
  strawberry: "Strawberry",
  kiwi: "Kiwi",
  chocolate: "Chocolate",
  raspberry:"Raspberry",
  mango:"Mango",
  whippedcream:"Whippedcream"
};

export default ({ price, fruits, details }) => {
  const fruitsOutput = Object.keys(fruits).map((key) => (
    <span key={key} className={classes.fruit}>
      {CONTROLS[key]} ({fruits[key]})
    </span>
  ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + ", " + details.phone + ", " + details.address
        : "No details available"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price.toFixed(2)} som</div>
      <div className={classes.fruits}>{fruitsOutput}</div>
    </div>
  );
};