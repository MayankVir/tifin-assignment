import { useLocation } from "react-router-dom";
import { Header, HomeSection, InnerContainer, OuterContainer } from "./styles";
import SideToggler from "./SideToggler";
import SendMessage from "./SendMessage";
import SuggestedQuestionsDrawer from "../SuggestedQuestions/SuggestedQuestionsDrawer";
import { useSelector } from "react-redux";
import logo from "../../assets/icons/svg/logo.svg";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { conversations, suggestedQuestionsDrawer } = useSelector(
    (state) => state.conversation,
  );

  return (
    <OuterContainer>
      <InnerContainer suggestedQuestionsDrawer={!!suggestedQuestionsDrawer}>
        <Header suggestedQuestionsDrawer={suggestedQuestionsDrawer}>
          <img src={logo} alt="logo" />
        </Header>

        <HomeSection>
          <SideToggler type="sidebar" />
          {children}
          <SideToggler
            type="suggestedQuestions"
            show={!!conversations.length}
          />
        </HomeSection>

        <SendMessage />
      </InnerContainer>
      {pathname === "/conversations" && <SuggestedQuestionsDrawer />}
    </OuterContainer>
  );
};

export default Layout;
