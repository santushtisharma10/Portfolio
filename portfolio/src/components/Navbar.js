import React from "react";
import { styled, Button, Box } from "@mui/material";
import code from "../images/giphy.gif";

const NavContainer = styled(Box)({
  padding: "24px 50px",
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  color: "#80cbe0",
  fontWeight: 600,
  zIndex: 1000,
  backgroundColor: 'white'
});
//add shadow at bottom of nav container
//mobile view of navbar to be added
const Logo = styled('img')({
  height: "50px",
});
const NavMenu = styled(Box)({
  display: "flex",
  alignItems: "center",
});
const NavLink = styled(Box)({
  padding: "0 24px",
  cursor: 'pointer'
});
const DownloadButton = styled(Button)({
  fontFamily: 'inherit'
});

function Navbar() {
  return (
    <NavContainer>
       <Logo src={code}
          alt="code navbar gif">
       
      </Logo>
      <NavMenu>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Work</NavLink>
        <NavLink> Experience</NavLink>
        <NavLink>Contact</NavLink>
        <DownloadButton variant="contained">Download Resume</DownloadButton> 
      </NavMenu>
    </NavContainer>
  );
}

export default Navbar;
