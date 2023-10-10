import { background, useEditable } from "@chakra-ui/react";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
const ChatPage = () => {
  const fetchChat = async () => {
    const data = await axios.get('/api/chat');
   // console.log(data);
  };
  useEffect(() => {
    fetchChat();
  });
  return (
    <Fragment>
      <h1>Hello I am chat</h1>
    </Fragment>
  );
};

export default ChatPage;
