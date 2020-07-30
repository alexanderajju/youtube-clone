import React from 'react';
import './SidebarRow.css'
import { Icon } from '@material-ui/core';


function SidebarRow({Icon,title}) {
    return (
        <div className="sidebarRow">
            <Icon/>
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarRow
