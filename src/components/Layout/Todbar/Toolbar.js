import React from "react";
import classes from "./Toolbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";

export default () => (
  <div className={classes.Toolbar}>
    <Sidebar />
    <ul>
      <Navigation>Pancake-builder</Navigation>
      <Navigation>Checkout</Navigation>
    </ul>
  </div>
);
