import { background, useEditable } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chat,setChat] = useState([]);
  const fetchChat = async () => {
    const {data} = await axios.get('/api/chat');
    setChat(data);
  };
  useEffect(() => {
    fetchChat();
  });
  return (
    <Fragment>
     
    </Fragment>
  );
};

export default ChatPage;
