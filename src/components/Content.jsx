import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/slices/conversationSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggleSidebar } from "../store/slices/appSlice";

const MainContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ChatInput = styled.input({
  width: "100%",
  padding: "10px",
});

const Content = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({ text: message, time: new Date().toLocaleTimeString() }),
      );
      setMessage("");
      navigate("/conversations");
    }
  };

  const handleToggleSidebar = () => dispatch(toggleSidebar());

  return (
    <MainContainer>
      <div>
        <h2>Welcome to Helix by HL, Time for a quick tour!</h2>
      </div>
      <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
      <ChatInput
        type="text"
        style={{ width: "50%" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend} disabled={!message.trim()}>
        Send
      </button>
    </MainContainer>
  );
};

export default Content;
