import React, { useState, useEffect } from "react";
import { HomeTextContainer, HomeIllustration } from "./styles";
import homeIllustration from "../../assets/icons/svg/logo-illustration.svg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      <HomeTextContainer isVisible={isVisible}>
        <div className="welcome">Welcome to Helix by HL,</div>
        <div className="tour">Time for a quick tour!</div>
      </HomeTextContainer>
      <HomeIllustration
        isVisible={isVisible}
        src={homeIllustration}
        alt="home illustration"
      />
    </div>
  );
};

export default Home;
