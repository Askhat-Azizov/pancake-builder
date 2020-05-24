import React from "react";
import { Route } from "react-router-dom";
import FruitsKit from "../../PancakeBuilder/FruitsKit/FruitsKit"
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, fruits, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <FruitsKit price={price} fruits={fruits} />

      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
      </Route>
    </div>
  );
};