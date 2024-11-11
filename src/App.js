import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { AppContainer, ContentContainer } from "./styles";
import Home from "./components/Home/Home";
import Conversations from "./components/Conversations/Conversations";
import Layout from "./components/Layout/layout";

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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conversations" element={<Conversations />} />
          </Routes>
        </Layout>
      </ContentContainer>
    </AppContainer>
  );
}
