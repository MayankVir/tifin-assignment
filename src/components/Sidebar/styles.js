import styled from "styled-components";

export const SidebarContainer = styled.div(({ isSidebarCollapsed }) => ({
  width: isSidebarCollapsed ? "56px" : "256px",
  transition: "all 0.5s ease",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const OptionsWrapper = styled.div(({ isSidebarCollapsed }) => ({
  display: "grid",
  gridTemplateColumns: isSidebarCollapsed ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
  gap: "16px",
}));

export const OptionContainer = styled.div(
  ({ isActive, isSidebarCollapsed }) => ({
    display: "flex",
    flexDirection: isSidebarCollapsed ? "row" : "column",
    alignItems: "start",
    justifyContent: isSidebarCollapsed ? "center" : "space-between",
    padding: "1rem",
    width: isSidebarCollapsed ? "56px" : "120px",
    height: isSidebarCollapsed ? "56px" : "125px",
    backgroundColor: isActive ? "rgba(204, 233, 250, 0.2)" : "#1e293b",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    border: isActive
      ? "2px solid rgba(174, 198, 249, 0.3)"
      : "2px solid transparent",
    "&:hover": {
      backgroundColor: isActive === false && "#334155",
    },
  }),
);

export const IconWrapper = styled.div({
  "& > img": {
    width: "24px",
    height: "24px",
  },
});

export const Label = styled.span({
  color: "white",
  fontSize: "14px",
  fontWeight: "500",
});

export const UserContainer = styled.div(({ isSidebarCollapsed }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: isSidebarCollapsed ? "center" : "space-between",
  width: "100%",
}));

export const UserActions = styled.div(({ isSidebarCollapsed }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  flexDirection: isSidebarCollapsed ? "column" : "row",
  gap: "0.5rem",
}));

export const Avatar = styled.img({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const TextContainer = styled.div(({ isSidebarCollapsed }) => ({
  display: isSidebarCollapsed ? "none" : "flex",
  flexDirection: "column",
  fontFamily: "DM Sans, sans-serif",
}));

export const UserName = styled.span({
  color: "#f3f4f6",
  fontWeight: 500,
  fontSize: "16px",
});

export const UserEmail = styled.span({
  color: "#9ca3af",
  fontSize: "12px",
  fontWeight: 400,
});

export const LogoutButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  color: "#9ca3af",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "#374151",
  },
});
