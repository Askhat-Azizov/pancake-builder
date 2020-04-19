import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
    banana:"Banana",
    strowberry:"Strowberry",
    kiwi:"Kiwi",
    chocolate:"Chocolate"
};

export default function ({ fruits }) {
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
      <ul>
        {fruitsOutput}
      </ul>
    </div>
  );
}
