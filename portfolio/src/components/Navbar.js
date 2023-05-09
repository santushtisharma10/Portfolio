import React from "react";
import { styled, Button } from "@mui/material";
import code from "../images/giphy.gif";

const NavContainer = styled("div")({
  padding: "24px 20px 12px",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: '700'
});
const Logo = styled("div")({
  height: "50px",
});
const NavMenu = styled("div")({
  display: "flex",
  alignItems: "center",
});
const NavLink = styled("div")({
  padding: "0 32px",
  cursor: "pointer",
  ":hover": {},

});
const DownloadButton = styled(Button)({
  marginLeft: "16px",
  fontFamily: 'inherit'
});

function Navbar() {
  return (
    <NavContainer>
      <Logo>
        <img
          style={{ height: "100%" }}
          src={code}
          alt="code navbar gif"
        />
        {/* <img style={{ height: "100%" }} src={code1} alt="code navbar gif" /> */}
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
