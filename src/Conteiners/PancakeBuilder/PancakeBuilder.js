import React from 'react';
import classes from "./PancakeBuilder.module.css";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";

export default function() {
    return (
       <div className={classes.PancakeBuilder}>
           <FruitsKit/>
       </div>
    );
}