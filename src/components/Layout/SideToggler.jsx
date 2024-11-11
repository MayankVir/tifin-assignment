import React from "react";
import toggle from "../../assets/icons/svg/toggle.svg";

import { toggleSidebar } from "../../store/slices/appSlice";
import { useDispatch } from "react-redux";
import { toggleSuggestedQuestionsDrawer } from "../../store/slices/conversationSlice";
import { ToggleWrapper } from "./styles";

const SideToggler = ({ type, show = true }) => {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    if (type === "sidebar") {
      dispatch(toggleSidebar());
    } else if (type === "suggestedQuestions") {
      dispatch(toggleSuggestedQuestionsDrawer());
    }
  };

  if (!show) return null;

  return (
    <ToggleWrapper onClick={handleToggleSidebar}>
      <img src={toggle} alt="toggle" />
    </ToggleWrapper>
  );
};

export default SideToggler;
