import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            displayPic="friends3.jpg"
            image="mickey.jpg"
            username="rawahalsinan"
            timestamp="time stamp"
            message="WOW this works"
            />
        </div>
    )
}

export default Feed
