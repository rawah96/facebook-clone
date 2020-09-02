import React from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="message-sender">
            <div className="message-top">
                <Avatar/>
                <form>
                    <input className="message-input"
                    placeholder="What's on your mind?" type="text"/>
                    <input className="image-input"
                    placeholder="image url - optional"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="message-bottom">
                <div className="sender-option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="sender-option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="sender-option">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
