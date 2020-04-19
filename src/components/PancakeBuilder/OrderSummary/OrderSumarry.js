import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
    banana:"Banana",
    strawberry:"Strawberry",
    kiwi:"Kiwi",
    chocolate:"Chocolate"
};

export default function ({ fruits, cancelOrder, finishOrder }) {
  const fruitsOutput = Object.keys(fruits)
    .filter((fruit) => fruits[fruit] > 0)
    .map((fruit) => (
      <li>
        {LABELS[fruit]}: {fruits[fruit]}
      </li>
    ));
  return (
    <div className={classes.orderSummary}>
      <h2>to eat</h2>
      <p>and you will eat it ???</p>
      <ul>{fruitsOutput}</ul>
      <p>Would you like to checkout?</p>
      <Button green click={finishOrder}>Checkout</Button>
      <Button red click={cancelOrder}>Cancel</Button>
    </div>
  );
}
