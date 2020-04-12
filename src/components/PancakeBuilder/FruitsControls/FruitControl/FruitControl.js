import React from 'react';
import classes from "./FruitControl.module.css";

export default function({ control, removeFruit, addFruit ,disabled }) {
    return (
       <div className={classes.FruitControl}>
           <span className={classes.label}>{control.label}</span>
           <button 
           className={classes.less} 
           onClick={() => removeFruit(control.type)}
           disabled={disabled}
            >
             less
           </button>
           <button 
           className={classes.more} 
           onClick={() => addFruit(control.type)}
            >
             more
           </button>
       </div>
    );
}