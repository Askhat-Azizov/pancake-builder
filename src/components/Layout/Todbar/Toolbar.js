import React from "react";
import classes from "./Toolbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";

export default ({ url }) => (
  <div className={classes.Toolbar}>
    <Sidebar />
    <ul>
      <Navigation url="/">Pancake-builder</Navigation>
      <Navigation url="/checkout">Checkout</Navigation>
    </ul>
  </div>
);
