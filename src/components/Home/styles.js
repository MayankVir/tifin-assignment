import styled from "styled-components";

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
