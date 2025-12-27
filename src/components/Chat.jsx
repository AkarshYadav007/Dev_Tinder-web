import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const Chat = () => {
    const {targetUserId} = useParams();
    const [messages, setMessages] = useState([]);
    const [newmessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user);
    const userId = user?._id;
    const socketRef = useRef(null);

    const fetchChatMessages = async () => {
  try {
    const res = await axios.get(
      BASE_URL + "/chat/" + targetUserId,
      { withCredentials: true }
    );

    const chatMessages = (res.data.messages || []).map((msg) => ({
      senderId: msg?.senderId?._id,
      FirstName: msg?.senderId?.FirstName,
      text: msg?.text,
    }));

    setMessages(chatMessages);
  } catch (err) {
    console.error("Failed to fetch chat messages:", err);
  }
};

    useEffect(() => {
  if (!userId || !targetUserId) return;

  setMessages([]);
  fetchChatMessages();
}, [userId, targetUserId]);

    useEffect(() => 
        {
            if(!userId)
            {return}
            socketRef.current = createSocketConnection();
            socketRef.current.emit("joinChat",{userId, targetUserId});
            socketRef.current.on("messageReceived", (msg) => {
            setMessages((prev) => [...prev, {senderId: msg.senderId._id, FirstName: msg.senderId.FirstName, text: msg.text}]);
            });

            return () => {socketRef.current?.disconnect();};
        },[userId, targetUserId]);

        const sendMessage = () => 
            {
                if (!newmessage.trim() || !socketRef.current) return;
                socketRef.current.emit("sendMessage", {FirstName:user.FirstName,userId,targetUserId,text:newmessage});
                setNewMessage("");
            }

  return (
    <div className="chat-container">
        <div className="profile-container">
        <div className="profile-box">Chat</div>
      </div>
      <div className="chat-box">
      
      {/* Messages */}
      {/* Messages */}
<div className="chat-messages">
  {messages.map((msg, index) => {
    const isMine = msg.senderId === userId;

    return (
      <div
        key={`${msg.senderId}-${index}`}
        className={`message-wrapper ${isMine ? "sent" : "received"}`}
      >
        <p className="chat-messages-p">{msg.FirstName}</p>

        <div className={`message ${isMine ? "message-sent" : "message-received"}`}>
          <p className="message-text">{msg.text}</p>
        </div>
      </div>
    );
  })}
</div>

      {/* Input */}
      <div className="chat-input">
        <input value={newmessage} onChange={(e) => setNewMessage(e.target.value)} type="text" placeholder="Type a message..." />
        <button onClick={sendMessage} >Send</button>
      </div>
      </div>
    </div>
  )
}

export default Chat