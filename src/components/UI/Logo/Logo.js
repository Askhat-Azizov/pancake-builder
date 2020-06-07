import React from "react";
import logo from "../../../assets/logo2.png";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} />
    <span>Pancake Builder</span>
  </div>
);
