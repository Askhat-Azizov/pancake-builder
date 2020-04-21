import React from 'react';
import Toolbar from './Todbar/Toolbar';
import classes from "./Layout.module.css";
import Drower from "../Layout/Drower/Drower";

export default function({ children }) {
    return (
       <div className={classes.Layout}>
           <Toolbar/>
           <Drower/>
           {children}
           
       </div>
    );
}