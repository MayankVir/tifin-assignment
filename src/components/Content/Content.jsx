import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/svg/logo.svg";
import homeIllustration from "../../assets/icons/svg/logo-illustration.svg";
import {
  OuterContainer,
  Header,
  HomeSection,
  InnerContainer,
  HomeIllustration,
  HomeTextContainer,
} from "./styles";
import SendMessage from "./SendMessage";
import ConversationList from "./ConversationList";
import SideToggler from "./SideToggler";
import Drawer from "../SugggestedQuestions/Drawer";

const Content = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { conversations, suggestedQuestionsDrawer, suggestedQuestions } =
    useSelector((state) => state.conversation);

  const handleSend = () => {
    if (message.trim()) {
      // dispatch(
      //   sendMessage({ text: message, time: new Date().toLocaleTimeString() }),
      // );
      setMessage("");
      navigate("/conversations");
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  console.log({ suggestedQuestionsDrawer });

  return (
    <OuterContainer>
      <InnerContainer suggestedQuestionsDrawer={!!suggestedQuestionsDrawer}>
        <Header suggestedQuestionsDrawer={suggestedQuestionsDrawer}>
          <img src={logo} alt="logo" />
        </Header>

        <HomeSection>
          <SideToggler type="sidebar" />
          <div className="home-container">
            {conversations.length === 0 ? (
              <>
                <HomeTextContainer isVisible={isVisible}>
                  <div className="welcome">Welcome to Helix by HL,</div>
                  <div className="tour">Time for a quick tour!</div>
                </HomeTextContainer>
                <HomeIllustration
                  isVisible={isVisible}
                  src={homeIllustration}
                  alt="home illustration"
                />
              </>
            ) : (
              <ConversationList />
            )}
          </div>
          <SideToggler
            type="suggestedQuestions"
            show={!!conversations.length}
          />
        </HomeSection>

        <SendMessage />
      </InnerContainer>
      <Drawer />
    </OuterContainer>
  );
};

export default Content;
