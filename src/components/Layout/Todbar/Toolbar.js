import React from 'react';
import classes from './Toolbar.module.css';
import Nav from './Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';

export default () =>  (
  <div className={classes.Toolbar}>
    <Sidebar />
    <Nav />
  </div>
);