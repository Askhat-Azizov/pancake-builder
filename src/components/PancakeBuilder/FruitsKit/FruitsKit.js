import React from 'react';
import classes from "./FruitsKit.module.css";
import Fruit from "./Pancake/Fruit";

export default function() {
    return (
       <div className={classes.FruitsKit}>
           <Fruit />
       </div>
    );
}