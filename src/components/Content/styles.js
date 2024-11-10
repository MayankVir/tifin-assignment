import styled from "styled-components";

export const InnerContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const OuterContainer = styled.div({
  position: "relative",
  width: "100%",

  display: "flex",
});

export const ChatInput = styled.div({
  width: "100%",
  padding: "10px 16px",
  background: "#FFFFFF",
  border: "1px solid #E4E7EC",
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  justifyContent: "space-between",
  "& .message-input": {
    border: "none",
    width: "100%",
    outline: "none",
  },
  "& .message-send-button": {
    border: "none",
    outline: "none",
    background: "none",
    cursor: "pointer",
  },
});

export const Header = styled.div(({ suggestedQuestionsDrawer }) => ({
  height: "100px",
  width: "100%",
  background: "#F9FAFB",
  padding: "0 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: suggestedQuestionsDrawer ? "1rem 0 0 0" : "1rem 1rem 0 0",
  border: "1px solid #E4E7EC",
}));

export const HomeSection = styled.div({
  flex: 1,
  padding: "0 1rem",
  position: "relative",
  display: "flex",
  width: "100%",
  "& .home-container": {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    width: "100%",
  },
});

export const MessageInputSection = styled.div({
  padding: "2rem",
  background: "#F9FAFB",
  borderRadius: "0 0 1rem 1rem",
  border: "1px solid #E4E7EC",
});

export const ToggleWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const ConversationListSection = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0.5rem",
  overflowY: "auto",
  width: "100%",
});

export const ConversationItem = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  width: "100%",
  flex: 1,
  "& .message": {
    fontSize: "14px",
    fontWeight: 500,
    color: "rgba(51, 51, 51, 1)",
    wordBreak: "break-word",
    wordWrap: "break-word",
  },
  "& .time": {
    minWidth: "54px",
    textAlign: "right",
    fontSize: "12px",
    fontWeight: 400,
    color: "rgba(129, 129, 129, 1)",
  },
});

export const HomeTextContainer = styled.div(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  transition: "opacity 0.8s ease-in 1s",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "65%",
  left: "3rem",
  transform: "translateY(-65%)",
  gap: "10px",
  "& .welcome": {
    color: "#333333",
    fontSize: "22px",
    fontWeight: 400,
  },
  "& .tour": {
    fontSize: "56px",
    fontWeight: 600,
    color: "#012E4C",
  },
}));

export const HomeIllustration = styled.img(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  transition: "opacity 0.8s ease-in 0s",
  width: "500px",
  height: "500px",
  position: "absolute",
  right: "2rem",
  transform: "translateY(-50%)",
  top: "50%",
}));
