import React, {useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from '../../StateProvider'
function MessageSender() {
    const [message, setMessage] = useState(''); 
    const [imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch] = useStateValue();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // DB stuff

        // reset value
        setMessage('');
        setImageUrl('');
    }
    
    
    return (
        <div className="message-sender">
            <div className="message-top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="message-input"
                    placeholder={`What's on your mind? ${user.displayName}`}
                    />
                    <input className="image-input"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="image url - optional"
                    />
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
