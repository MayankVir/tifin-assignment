import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content";
import Drawer from "./components/Drawer";
import styled from "styled-components";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

const AppContainer = styled.div(({ isSidebarCollapsed }) => ({
  display: "flex",
  padding: "1rem",
  gap: isSidebarCollapsed ? "1rem" : "34px",
  height: "100vh",
  boxSizing: "border-box",
}));

const ContentContainer = styled.div({
  display: "flex",
  flex: 1,
  background: "white",
  borderRadius: "1rem",
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppWithRoutes />
      </Router>
    </Provider>
  );
}
export default App;

function AppWithRoutes() {
  const { isSidebarCollapsed } = useSelector((state) => state.app);
  return (
    <AppContainer isSidebarCollapsed={isSidebarCollapsed}>
      <Sidebar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
}
