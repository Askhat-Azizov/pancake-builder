import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";
import { useSelector } from "react-redux";

export default () => {
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  return (
    <ul className={classes.Navigation}>
      <NavigationItem url="/builder">Pancake Builder</NavigationItem>
      {isAuthenticated ? <NavigationItem url="/orders">Orders</NavigationItem> : null}
      {!isAuthenticated ? <NavigationItem url="/auth">Authenticate</NavigationItem> : null}
      {isAuthenticated ? <NavigationItem url="/logout">Logout</NavigationItem> : null}
    </ul>
  );
}