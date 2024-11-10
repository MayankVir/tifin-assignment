import React, { useCallback, useEffect, useState } from "react";
import { ChatInput, MessageInputSection } from "./styles";
import SendMessageIcon from "../../assets/icons/svg/send-message.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSuggestedQuestions,
  sendMessage,
} from "../../store/slices/conversationSlice";
import { debounce } from "../../utils/common";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { conversations } = useSelector((state) => state.conversation);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dispatch(sendMessage(message));
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(fetchSuggestedQuestions(query));
    }, 300),
    [],
  );

  useEffect(() => {
    if (message && conversations.length > 0) {
      debouncedSearch(message);
    }
  }, [message, debouncedSearch, conversations]);

  return (
    <MessageInputSection>
      <ChatInput>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
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
