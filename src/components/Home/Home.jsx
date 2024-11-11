import React, { useState, useEffect } from "react";
import { HomeTextContainer, HomeIllustration, HomeContainer } from "./styles";
import homeIllustration from "../../assets/icons/svg/logo-illustration.svg";
import MessageAvatar from "../../assets/icons/svg/message-avatar.svg";
import dayjs from "dayjs";
import { fetchSuggestedQuestions } from "../../store/slices/conversationSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const messages = [
    "Let's begin with where we're at now, Home. Here we can chat about anything regarding wealth and private market investing.",
    "To get an idea of the questions I could answer, let's click the green button down to the right.",
    "Clicking this button opens Suggested Questions. There are quite a few questions you may click here, across several categories! They might also give you ideas about questions you could formulate on your own.",
  ];
  const dispatch = useDispatch();
  const [showSection, setShowSection] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setShowSection("illustration");
    const conversationTimer = setTimeout(() => {
      setShowSection("conversation");
    }, 3800);

    const firstAnimationTimer = setTimeout(() => {
      dispatch(fetchSuggestedQuestions(""));
      setMessageIndex(1);
    }, 8800);

    const secondAnimationTimer = setTimeout(() => {
      setMessageIndex(2);
    }, 13800);

    return () => {
      clearTimeout(conversationTimer);
      clearTimeout(firstAnimationTimer);
      clearTimeout(secondAnimationTimer);
    };
  }, []);

  if (showSection === "illustration") {
    const showIllustration = showSection === "illustration";
    return (
      <HomeContainer>
        <div className="home-container">
          <HomeTextContainer isVisible={showIllustration}>
            <div className="welcome">Welcome to Helix by HL,</div>
            <div className="tour">Time for a quick tour!</div>
          </HomeTextContainer>
          <HomeIllustration
            isVisible={showIllustration}
            src={homeIllustration}
            alt="home illustration"
          />
        </div>
      </HomeContainer>
    );
  }

  if (showSection === "conversation") {
    const showConversation = showSection === "conversation";
    return (
      <HomeContainer showConversation={showConversation}>
        {messages.map(
          (message, index) =>
            index === messageIndex && (
              <div
                className={`conversation-item ${
                  showConversation ? "bounce-up" : ""
                }`}
              >
                <img src={MessageAvatar} alt="user avatar" />
                <span className="message fade-text">{message}</span>
                <span className="time">
                  {dayjs(new Date()).format("HH:mm")}
                </span>
              </div>
            ),
        )}
      </HomeContainer>
    );
  }
};

export default Home;
