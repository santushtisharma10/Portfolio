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

const MobileNav = styled(Box)({
  '& .MuiBox-root.active' :{
    left: 0,
    backgroundColor: 'pink'
  }
})
const NavContainer = styled(Box)({
  padding: "24px 50px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  color: "#80cbe0",
  fontWeight: 600,
  zIndex: 1000,
  backgroundColor: "white",
});
const Logo = styled("img")({
  height: "50px",
});
const NavMenu = styled(Box)({
  display: "flex",
  alignItems: "center",
  zIndex: 1000,
});
const SideMenu = styled(Box)({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: '100%',
  zIndex: 1500,
  transition: '0.5s'
})
const NavLink = styled(Box)({
  padding: "0 24px",
  cursor: "pointer",
});
const DownloadButton = styled(Button)({
  fontFamily: "inherit",
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
        {isMobile && (
          <IconButton onClick={() => setMenuOpen(false)}>
            <Close fontSize="large" />
          </IconButton>
        )}

        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Work</NavLink>
        <NavLink> Experience</NavLink>
        <NavLink>Contact</NavLink>
        <DownloadButton variant="contained">Download Resume</DownloadButton>
      </NavMenu>
    );
  };
  return (
    <>
      {isMobile ? (
        <MobileNav>
          <nav>
            <NavContainer>
              <Logo src={code} alt="code navbar gif" />
              <IconButton onClick={() => setMenuOpen(true)}>
                <Menu fontSize="large" />
              </IconButton>
            </NavContainer>
          </nav>
          <SideMenu className={`${isMenuOpen ? "active" : ""}`}>
            <NavList />
          </SideMenu>
        </MobileNav>
      ) : (
        <NavContainer>
          <Logo src={code} alt="code navbar gif"></Logo>
          <NavList />
        </NavContainer>
      )}
    </>
  );

}

export default Navbar;

//Things to improve
//navlist view needs to be done for mobile view
//add shadow at bottom of nav container
