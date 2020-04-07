import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Toolbar from './Todbar/Toolbar';

export default function({ children }) {
    return (
       <div className="Layout">
           <Sidebar/>
           <Toolbar/>
           {children}
       </div>
    );
}