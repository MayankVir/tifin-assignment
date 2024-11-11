import React, { useCallback, useEffect, useState } from "react";

import SendMessageIcon from "../../assets/icons/svg/send-message.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSuggestedQuestions,
  sendMessage,
} from "../../store/slices/conversationSlice";
import { debounce } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import { ChatInput, MessageInputSection } from "./styles";

const SendMessage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { conversations, suggestedQuestionsDrawer } = useSelector(
    (state) => state.conversation,
  );
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      const currentMessage = message;
      setMessage("");
      Promise.resolve().then(() => {
        dispatch(sendMessage(currentMessage));
        navigate("/conversations");
      });
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(fetchSuggestedQuestions(query));
    }, 300),
    [],
  );

  useEffect(() => {
    if (message.trim().length > 0) {
      debouncedSearch(message);
    }
  }, [message, debouncedSearch, conversations]);

  return (
    <MessageInputSection suggestedQuestionsDrawer={suggestedQuestionsDrawer}>
      <ChatInput>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
          onKeyDown={(e) => {
            if (e.key === "Enter" && message.trim()) {
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={handleSendMessage}
          disabled={!message.trim()}
          className="message-send-button"
        >
          <img
            src={SendMessageIcon}
            height={24}
            width={24}
            alt="send message"
          />
        </button>
      </ChatInput>
    </MessageInputSection>
  );
};

export default SendMessage;
