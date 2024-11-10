import React from "react";
import { ConversationItem, ConversationListSection } from "./styles";
import { useSelector } from "react-redux";
import MessageAvatar from "../../assets/icons/svg/message-avatar.svg";
import dayjs from "dayjs";
const ConversationList = () => {
  const { conversations } = useSelector((state) => state.conversation);

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
    </ConversationListSection>
  );
};

export default ConversationList;
