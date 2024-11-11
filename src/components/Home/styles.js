import styled from "styled-components";

export const HomeContainer = styled.div(() => ({
  flex: 1,
  position: "relative",
  display: "flex",
  width: "100%",
  "& .home-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    animation: "moveUp 0.8s forwards 3s",
  },
  "& .conversation-item": {
    opacity: 0,
    position: "relative",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "fit-content",
    justifyContent: "flex-start",
    width: "100%",
    gap: "0.5rem",
    "& .message": {
      fontSize: "14px",
      fontWeight: 500,
      color: "rgba(51, 51, 51, 1)",
      wordBreak: "break-word",
      wordWrap: "break-word",
      width: "100%",
      animation: "textFade 0.5s ease-in-out",
    },
    "& .fade-text": {
      transition: "opacity 0.3s ease-in-out",
    },
    "& .time": {
      minWidth: "54px",
      textAlign: "right",
      fontSize: "12px",
      fontWeight: 400,
      color: "rgba(129, 129, 129, 1)",
    },
  },

  "& .bounce-up": {
    animation: "bounceUp 0.5s ease forwards",
    animationDelay: "0",
  },
}));

export const HomeTextContainer = styled.div(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  transition: "opacity 0.8s ease-in 1s",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "65%",
  left: "3rem",
  transform: "translateY(-65%)",
  gap: "10px",
  "& .welcome": {
    color: "#333333",
    fontSize: "22px",
    fontWeight: 400,
  },
  "& .tour": {
    fontSize: "56px",
    fontWeight: 600,
    color: "#012E4C",
  },
}));

export const HomeIllustration = styled.img(({ isVisible }) => ({
  opacity: isVisible ? 1 : 0,
  transition: "opacity 0.8s ease-in 0s",
  width: "500px",
  height: "500px",
  position: "absolute",
  right: "2rem",
  transform: "translateY(-50%)",
  top: "50%",
}));
