import React from 'react';
import classes from './Modal.module.css';

export default function({ children }) {
    return(
        <div className={classes.Modal}>
            {children}
        </div>
    )
};