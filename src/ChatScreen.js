import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Zari",
            image: "https://i.pinimg.com/originals/13/0a/37/130a37233e44f3ab01ae0a52b3c900e2.jpg",
            message: "Hey, What's up??"
        },
        {
            message: "Hey Zari!!"
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className="chat-screen">
            <p className="chat-screen__timestamp">You matched with Zari on 31/08/2020</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chat-screen__message">
                        <Avatar className="chat-screen__image" src={message.image} alt={message.name} />
                        <p className="chat-screen__text">{message.message}</p>
                    </div>
                ): (
                    <div className="chat-screen__message">
                        <p className="chat-screen__text-user">{message.message}</p>
                    </div>
                )
            ))}

            <form className="chat-screen__input">
                <input value={input} onChange={e => setInput(e.target.value)} className="chat-screen__input-field" placeholder="Type a message..." />
                <button onClick={handleSend} className="chat-screen__input-button" type="submit">SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen
