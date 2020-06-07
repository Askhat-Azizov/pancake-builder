import React from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";
import withAxios from "../../hoc/withAxios/withAxios";
import Spinner from "../UI/Spinner/Spinner";
import { useSelector } from "react-redux";

export default withAxios(({ loading }) => {
  const history = useHistory();
  const { fruits, price } = useSelector(state => state.builder);
  const { token, id } = useSelector(state => state.auth);


  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  function checkoutFinish(data) {
    axios
     .post("/order.json?auth=" + token, {
        fruits,
        price,
        details: data,
        userId: id
    })
      .then(() => history.replace("/"));
  }

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = <CheckoutForm checkoutFinish={checkoutFinish} />;
  }

  let summaryOutput = <Redirect to="/" />
  if (fruits) {
    summaryOutput = (
      <CheckoutSummary
        fruits={fruits}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    )
  }

  return (
    <div className={classes.Checkout}>
      {summaryOutput}
      <Route path="/checkout/form">{formOutput}</Route>
    </div>
  );
}, axios);