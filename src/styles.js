import styled from "styled-components";

export const AppContainer = styled.div(({ isSidebarCollapsed }) => ({
  display: "flex",
  padding: "1rem",
  gap: isSidebarCollapsed ? "1rem" : "34px",
  height: "100vh",
  boxSizing: "border-box",
}));

export const ContentContainer = styled.div({
  display: "flex",
  flex: 1,
  background: "white",
  borderRadius: "1rem",
});
