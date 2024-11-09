import React, { useState } from "react";
import styled from "styled-components";

const DrawerContainer = styled.div(({ collapsed }) => ({
  width: collapsed ? "0" : "250px",
  transition: "width 0.3s ease",
  backgroundColor: "#f5f5f5",
  borderRadius: "0 1rem 1rem 0",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
}));

const ToggleButton = styled.button({
  alignSelf: "flex-end",
  margin: "10px",
});

const Drawer = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <DrawerContainer collapsed={collapsed}>
      <ToggleButton onClick={() => setCollapsed(!collapsed)}>
        Toggle
      </ToggleButton>
      {/* Add suggested questions here */}
    </DrawerContainer>
  );
};

export default Drawer;
