import React from "react";
import classes from "./Button.module.css";

export default ({ children, click, enabled }) => {
  return (
    <button disabled={!enabled} onClick={click} className={classes.Button}>
      {children}
    </button>
  );
};
