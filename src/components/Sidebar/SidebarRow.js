import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'
function SidebarRow({src, Icon, title}) {
    return (
        // if there's a src, render out an avatar with the src passed
        <div className="sidebar-row">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}
export default SidebarRow
