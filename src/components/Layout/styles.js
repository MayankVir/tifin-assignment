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

export const MessageInputSection = styled.div(
  ({ suggestedQuestionsDrawer }) => ({
    padding: "2rem",
    background: "#F9FAFB",
    borderRadius: suggestedQuestionsDrawer ? "0 0 0 1rem" : "0 0 1rem 1rem",
    border: "1px solid #E4E7EC",
  }),
);

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

export const ToggleWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
