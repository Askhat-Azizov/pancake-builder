import React from "react";
import classes from "./Sidebar.module.css";
import logo from "../../../assets/logo.svg";

export default () => (
  <div className={classes.Sidebar}>
    <img srs={logo} />
    <span>Pancake Builder</span>
  </div>
);
