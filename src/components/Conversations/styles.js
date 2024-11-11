import styled from "styled-components";

export const ConversationListSection = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "1.5rem",
  overflowY: "auto",
  width: "100%",
  paddingTop: "1rem",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#D1D5DB",
    borderRadius: "3px",
  },
});

export const ConversationItem = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "0 1rem",
  borderRadius: "0.5rem",
  width: "100%",
  "& .message": {
    fontSize: "14px",
    fontWeight: 500,
    color: "rgba(51, 51, 51, 1)",
    wordBreak: "break-word",
    wordWrap: "break-word",
    width: "100%",
  },
  "& .time": {
    minWidth: "54px",
    textAlign: "right",
    fontSize: "12px",
    fontWeight: 400,
    color: "rgba(129, 129, 129, 1)",
  },
});
