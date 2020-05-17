import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

export default withErrorHandler(() => {
  const history = useHistory();
  const location = useLocation();
  const [fruits, setFruits] = useState({});
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const newFruits = {};
    query.forEach((value, key) => {
      if (key === "price") {
        setPrice(+value);
      } else {
        newFruits[key] = +value;
      }
    });
    setFruits(newFruits);
  }, []);

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  function checkoutFinish(data) {
    setLoading(true);
    axios
      .post("/order.json", {
        fruits,
        price,
        details: data,
      })
      .then((response) => {
        setLoading(false);
        history.replace("/");
      });
  }

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = <CheckoutForm checkoutFinish={checkoutFinish} />;
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route path="/checkout/form">{formOutput}</Route>
    </div>
  );
}, axios);