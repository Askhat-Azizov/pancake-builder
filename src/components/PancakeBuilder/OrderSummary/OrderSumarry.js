import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
  banana: "Banana",
  kiwi: "Kiwi",
  chocolate: "Chocolate",
  raspberry:"Raspberry",
  watermelon:"Watermelon",
};

export default ({ fruits, cancelOrder, finishOrder, price }) => {
  const fruitsOutput = Object.keys(fruits)
    .filter((fruit) => fruits[fruit] > 0)
    .map((fruit) => (
      <li key={fruit}>
        {LABELS[fruit]}: {fruits[fruit]}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Bon appetit!!!</p>
      <ul>{fruitsOutput}</ul>
      <p>Total price: {price.toFixed(2)} som</p>
      <p>Would you like to checkout?</p>
      <Button click={finishOrder} green>
        Checkout
      </Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};
