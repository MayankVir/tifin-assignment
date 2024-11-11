import { Header, HomeSection, InnerContainer, OuterContainer } from "./styles";
import SideToggler from "./SideToggler";
import SendMessage from "./SendMessage";
import SuggestedQuestionsDrawer from "../SuggestedQuestions/SuggestedQuestionsDrawer";
import { useSelector } from "react-redux";
import logo from "../../assets/icons/svg/logo.svg";

const Layout = ({ children }) => {
  const { suggestedQuestionsDrawer, showSuggestedQuestionsToggle } =
    useSelector((state) => state.conversation);

  return (
    <OuterContainer>
      <InnerContainer suggestedQuestionsDrawer={!!suggestedQuestionsDrawer}>
        <Header suggestedQuestionsDrawer={suggestedQuestionsDrawer}>
          <img src={logo} alt="logo" />
        </Header>

        <HomeSection>
          <SideToggler type="sidebar" />
          {children}
          {showSuggestedQuestionsToggle && (
            <SideToggler type="suggestedQuestions" />
          )}
        </HomeSection>

        <SendMessage />
      </InnerContainer>
      <SuggestedQuestionsDrawer />
    </OuterContainer>
  );
};

export default Layout;
