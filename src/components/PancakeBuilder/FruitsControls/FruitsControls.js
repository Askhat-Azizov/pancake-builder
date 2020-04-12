import React from 'react';
import classes from "./FruitsControls.module.css";
import FruitControl from './FruitControl/FruitControl';

export default function({ addFruit, removeFruit }) {
    const controls = [
        {label:"Banana", type:"banana"},
        {label:"Strawberry", type:"strawberry"},
        {label:"Kiwi", type:"kiwi"}
    ]
    const controlsOutput = controls.map((control) => ( 
       <FruitControl 
       control={control} 
       addFruit={addFruit} 
       removeFruit={removeFruit}
       />
    ));

    return (
       <div className={classes.FruitsControls}>
           {controlsOutput}
       </div>
    );
}