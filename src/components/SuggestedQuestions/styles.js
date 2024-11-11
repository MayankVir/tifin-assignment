import styled from "styled-components";

export const DrawerContainer = styled.div(({ suggestedQuestionsDrawer }) => ({
  width: suggestedQuestionsDrawer ? "0" : "350px",
  backgroundColor: "rgba(242, 244, 247, 1)",
  borderWidth: suggestedQuestionsDrawer ? 0 : "1px 1px 1px 0px",
  borderStyle: "solid",
  borderColor: "rgba(228, 231, 236, 1)",
  borderRadius: "0 1rem 1rem 0",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  opacity: suggestedQuestionsDrawer ? 0 : 1,
}));

export const Heading = styled.h1({
  fontSize: "1.25rem",
  fontWeight: 500,
  color: "rgba(16, 24, 40, 1)",
  padding: "1.5rem",
  minWidth: "286px",
});

export const QuestionList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "0 1.5rem 1.5rem",
  overflowY: "auto",
  height: "100%",
  flex: 1,
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
});

export const QuestionItem = styled.div({
  padding: "1rem",
  color: "rgba(16, 24, 40, 1)",
  border: "1px solid rgba(228, 231, 236, 1)",
  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.12)",
  backgroundColor: "#fff",
  borderRadius: "0.75rem",
  transition: "all 0.2s ease",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  minWidth: "286px",
  "& .category": {
    color: "rgba(0, 177, 134, 1)",
    fontSize: "12px",
    fontWeight: 500,
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    transform: "translateX(4px)",
  },
});