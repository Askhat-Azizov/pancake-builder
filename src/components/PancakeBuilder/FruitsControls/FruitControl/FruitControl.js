import React from 'react';
import classes from "./FruitControl.module.css";

export default function({ label }) {
    return (
       <div className={classes.FruitControl}>
           <span className={classes.label}>{label}</span>
           <button className={classes.less}>less</button>
           <button className={classes.more}>more</button>
       </div>
    );
}