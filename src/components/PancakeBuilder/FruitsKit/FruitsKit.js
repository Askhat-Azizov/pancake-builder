import React from 'react';
import classes from "./FruitsKit.module.css";
import Fruit from "./Pancake/Fruit";

export default function({ fruit }) {
    let fruitOutput = [];

    Object.keys(fruit).forEach(type => {
        for (let i = 0; i < fruit[type]; i++) {
            fruitOutput.push(<Fruit key={type + i} type={type} />);
        }
    })
    return (
       <div className={classes.FruitsKit}>
           {fruitOutput}
       </div>
    );
}