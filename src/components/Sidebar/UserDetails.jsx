import React from "react";
import {
  UserContainer,
  UserActions,
  Avatar,
  TextContainer,
  UserName,
  UserEmail,
  LogoutButton,
} from "./styles";
import LogoutIcon from "../../assets/icons/svg/logout.svg";
import UserAvatar from "../../assets/icons/svg/avatar.svg";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { isSidebarCollapsed } = useSelector((state) => state.app);

  return (
    <UserContainer isSidebarCollapsed={isSidebarCollapsed}>
      <TextContainer isSidebarCollapsed={isSidebarCollapsed}>
        <UserName>Jacob Smith</UserName>
        <UserEmail>jacobsmith@email.com</UserEmail>
      </TextContainer>
      <UserActions isSidebarCollapsed={isSidebarCollapsed}>
        <LogoutButton>
          <img src={LogoutIcon} alt="Logout" />
        </LogoutButton>
        <Avatar src={UserAvatar} alt="User avatar" />
      </UserActions>
    </UserContainer>
  );
};

export default UserDetails;
