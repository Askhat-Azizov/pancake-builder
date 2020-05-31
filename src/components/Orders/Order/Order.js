import React from "react";
import classes from "./Order.module.css";

export default ({ price, fruits, details }) => {
  const fruitsOutput = Object.keys(fruits)
  .filter(fruit => fruits[fruit].quantity > 0)
  .map(fruit => (
    <span key={fruit} className={classes.fruit}>
      {fruits[fruit].label} ({fruits[fruit].quantity})
    </span>
  ));
   
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
