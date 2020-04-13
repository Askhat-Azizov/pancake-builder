import React from "react";
import logo from "../../../assets/logo.svg";
import classes from "./Sidebar.module.css";

export default () => (
  <div className={classes.Sidebar}>
    <img src={logo} />
    <span>Pancake Builder</span>
  </div>
);
