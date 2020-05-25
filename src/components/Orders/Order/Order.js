import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  banana: "Banana",
  kiwi: "Kiwi",
  chocolate: "Chocolate",
  raspberry: "Raspberry",
  watermelon: "Watermelon",
};

export default ({ price, fruits, details }) => {
  let fruitsOutput = null;
   if (fruits) {
     fruitsOutput = Object.keys(fruits).map((key) => (
    <span key={key} className={classes.fruit}>
      {CONTROLS[key]} ({fruits[key]})
    </span>
  ));
   }

  

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + "," + details.phone + "," + details.address
        : "No details available"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>
        {price ? price.toFixed(2) : 0} som</div>
      <div className={classes.fruits}>{fruitsOutput}</div>
    </div>
  );
};
