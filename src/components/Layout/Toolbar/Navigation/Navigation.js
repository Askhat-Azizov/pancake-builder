import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

export default () => (
  <ul className={classes.Navigation}>
    <NavigationItem url="/builder">Pancake Builder</NavigationItem>
    <NavigationItem url="/orders">Orders</NavigationItem>
    <NavigationItem url="/auth">Authenticate</NavigationItem>
  </ul>
);