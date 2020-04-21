import React from 'react';
import Toolbar from './Todbar/Toolbar';
import classes from "./Layout.module.css";

export default function({ children }) {
    return (
       <div className={classes.Layout}>
           <Toolbar/>
           {children}
       </div>
    );
}