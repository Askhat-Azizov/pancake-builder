import React from "react";
import classes from "./Drower.module.css";
import Logo from "../../UI/Logo/Logo";
import Navigation from "../Todbar/Navigation/Navigation"

export default () => (
  <div className={classes.Drower}>
    <Logo />
    <Navigation/>
  </div>
);
