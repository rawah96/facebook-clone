import React from 'react'
import './Story.css'
import {Avatar} from '@material-ui/core'
function Story({image, avatar, name}) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar src={avatar} className="story-avatar"/>
            <h4>{name}</h4>
        </div>
    )
}

export default Story
