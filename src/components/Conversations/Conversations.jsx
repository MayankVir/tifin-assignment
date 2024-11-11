import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MessageAvatar from "../../assets/icons/svg/message-avatar.svg";
import dayjs from "dayjs";
import { ConversationItem, ConversationListSection } from "./styles";
import { useNavigate } from "react-router-dom";

const Conversations = () => {
  const navigate = useNavigate();
  const { conversations } = useSelector((state) => state.conversation);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    if (conversations.length === 0) {
      navigate("/");
    }
  }, [conversations]);

  return (
    <ConversationListSection>
      {conversations.map((conversation) => (
        <ConversationItem key={conversation.time}>
          <img
            src={MessageAvatar}
            height={36}
            width={36}
            alt="message avatar"
          />
          <span className="message">{conversation.message}</span>
          <span className="time">
            {dayjs(conversation.time).format("HH:mm")}
          </span>
        </ConversationItem>
      ))}
      <div ref={bottomRef} />
    </ConversationListSection>
  );
};

export default Conversations;
