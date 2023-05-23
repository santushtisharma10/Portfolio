import React, { useEffect, useState } from "react";
//mui
import {
  styled,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
//images and icons
import code from "../images/giphy.gif";
import { Menu, Close } from "@mui/icons-material";

const NavContainer = styled(Box)({
  fontWeight: 600,
  "& .MuiBox-root.active": {
    left: 0,
  },
});
const NavHeader = styled(Box)({
  padding: "24px 50px",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  color: "#80cbe0",
  zIndex: 1000,
  width: "100%",
  backgroundColor: "white",
  "@media screen and (max-width: 900px)": {
    padding: "24px",
  },
});
const Logo = styled("img")({
  height: "50px",
});
const NavMenu = styled(Box)({
  display: "flex",
  alignItems: "center",
  "@media screen and (max-width: 900px)": {
    flexDirection: "column",
    textAlign: "left",
  },
});
const SideMenu = styled(Box)({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: "100%",
  zIndex: 1100,
  transition: "0.5s",
  padding: "36px",
  backgroundColor: "#80cbe0",
  color: "#fff !important",
  textAlign: "right",
  fontSize: '30px'
});
const NavLink = styled(Box)({
  padding: "0 24px",
  cursor: "pointer",
  "@media screen and (max-width: 900px)": {
    padding: "24px",
    width: "100%",
    borderBottom: "1px solid #fff",
  },
});
const NavButton = styled(Box)({
  "@media screen and (max-width: 900px)": {
    position: "absolute",
    bottom: 0,
    padding: "24px",
  },
});
const DownloadButton = styled(Button)({
  fontFamily: "inherit",
  fontSize: "inherit",
});

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [isMobile]);

  const NavList = () => {
    return (
      <NavMenu>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Work</NavLink>
        <NavLink> Experience</NavLink>
        <NavLink>Contact</NavLink>
        <NavButton>
          <DownloadButton variant="contained">Download Resume</DownloadButton>
        </NavButton>
      </NavMenu>
    );
  };
  return (
    <NavContainer>
      <NavHeader>
        <Logo src={code} alt="code navbar gif" />
        {isMobile ? (
          <IconButton onClick={() => setMenuOpen(true)}>
            <Menu fontSize="large" />
          </IconButton>
        ) : (
          <NavList />
        )}
      </NavHeader>
      <SideMenu className={`${isMenuOpen === true ? "active" : ""}`}>
        <IconButton
          onClick={() => setMenuOpen(false)}
          style={{ color: "white" }}
          alignItems="right"
        >
          <Close fontSize="large" />
        </IconButton>
        <NavList />
      </SideMenu>
    </NavContainer>
  );
}

export default Navbar;

//Things to improve
//add shadow at bottom of nav container
//add hover effects on nav link
