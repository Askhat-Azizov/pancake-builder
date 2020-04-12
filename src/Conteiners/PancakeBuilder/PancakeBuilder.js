import React from 'react';
import classes from "./PancakeBuilder.module.css";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from '../../components/PancakeBuilder/FruitsControls/FruitsControls';

export default function() {
    return (
       <div className={classes.PancakeBuilder}>
           <FruitsKit/>
           <FruitsControls/>
       </div>
    );
}