import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";

export default ({ url }) => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Navigation />
    </nav>
  </div>
);
