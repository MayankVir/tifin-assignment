import React, { useState, useEffect } from "react";
import { HomeTextContainer, HomeIllustration, HomeContainer } from "./styles";
import homeIllustration from "../../assets/icons/svg/logo-illustration.svg";
import MessageAvatar from "../../assets/icons/svg/message-avatar.svg";
import dayjs from "dayjs";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSection, setShowSection] = useState("");

  useEffect(() => {
    setIsVisible(true);
    setShowSection("illustration");
    setTimeout(() => {
      setShowSection("conversation");
    }, 3800);
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
        <div
          className={`conversation-item ${showConversation ? "bounce-up" : ""}`}
        >
          <img src={MessageAvatar} alt="user avatar" />
          <span className="message">
            Let's begin with where were at now, Home. Here we can chat about
            anything regarding wealth and private market investing.
          </span>
          <span className="time">{dayjs(new Date()).format("HH:mm")}</span>
        </div>
      </HomeContainer>
    );
  }
};

export default Home;
