import React from "react";
import { useLocation } from "react-router-dom";
import { IconWrapper, Label, OptionContainer } from "./styles";
import { useSelector } from "react-redux";

const SidebarOption = ({ label, icon, path }) => {
  const pathname = useLocation();
  const { isSidebarCollapsed } = useSelector((state) => state.app);

  const isActive = pathname.pathname === path;

  return (
    <OptionContainer
      isActive={isActive}
      isSidebarCollapsed={isSidebarCollapsed}
    >
      <IconWrapper>
        <img src={icon} alt={`${label}-icon`} />
      </IconWrapper>
      {isSidebarCollapsed === false && <Label>{label}</Label>}
    </OptionContainer>
  );
};

export default SidebarOption;
