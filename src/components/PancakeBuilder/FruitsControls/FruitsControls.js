import React from 'react';
import classes from "./FruitsControls.module.css";
import FruitControl from './FruitControl/FruitControl';

export default function() {
    const controls = [
        {label:"Banana", type:"banana"},
        {label:"Strowbery", type:"strowbery"},
        {label:"Kiwi", type:"kiwi"}
    ]
    const controlsOutput = controls.map(control => <FruitControl label={control.label} />)

    return (
       <div className={classes.FruitsControls}>
           {controlsOutput}
       </div>
    );
}