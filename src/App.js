import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { AppContainer, ContentContainer } from "./styles";

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
