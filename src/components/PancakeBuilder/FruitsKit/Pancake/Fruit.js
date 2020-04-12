import React from 'react';
import classes from "./Fruit.module.css";

export default function() {
    return (
       <div className={classes.Fruit} >
          <div className={classes.Strawberry}></div>
          <div className={classes.Fruit}></div>
          <div className={classes.Kiwi}></div>
       </div>
    );
}