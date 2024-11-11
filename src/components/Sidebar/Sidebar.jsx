import React from "react";
import SidebarOption from "./SidebarOption";
import { sidebarOptions } from "./constants";
import UserDetails from "./UserDetails";
import { useSelector } from "react-redux";
import { OptionsWrapper, SidebarContainer } from "./styles";

const Sidebar = () => {
  const { isSidebarCollapsed } = useSelector((state) => state.app);

  return (
    <SidebarContainer isSidebarCollapsed={isSidebarCollapsed}>
      <OptionsWrapper isSidebarCollapsed={isSidebarCollapsed}>
        {sidebarOptions.map((option) => (
          <SidebarOption key={option.label} {...option} />
        ))}
      </OptionsWrapper>
      <UserDetails />
    </SidebarContainer>
  );
};

export default Sidebar;
