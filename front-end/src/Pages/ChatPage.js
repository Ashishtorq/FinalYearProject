import React, { useEffect } from "react";
import axios from "axios";
const ChatPage = () => {
  const fetchChat = async () => {
    const data = await axios.get('http://localhost:3000/api/chat');
    console.log(data);
  };
  useEffect(() => {
    fetchChat();
  }, []);
  return <div>
    {chats.map((chat)=><div> key={chat._id}{chat.chatName}</div>)}
  </div>;
};
export default ChatPage;