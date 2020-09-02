import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">

            <Chat 
                name="Zari"
                message="Hey, What's up??"
                timestamp="5 minutes ago"
                profilePic="https://i.pinimg.com/originals/13/0a/37/130a37233e44f3ab01ae0a52b3c900e2.jpg"
            />

        </div>
    )
}

export default Chats
