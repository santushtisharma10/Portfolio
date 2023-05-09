import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import self from "../images/santushti.jpg";
import bg from "../images/hero_bg.gif";
import world from "../images/giphy (1).gif";
const HeroSection = styled(Box)({
  padding: "30px",
  display: "grid",
  gridTemplateColumns: "60% auto",
});
const HeroContent = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});
const Title = styled(Typography)({
  fontSize: "64px",
  fontWeight: 800,
});
const HeroImg = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
const ConnectButton = styled(Button)({});

//subheading behind intro
//button styles

function Hero() {
  const [open, setOpen] = useState(false);
  const handleConnect = () => {
    setOpen(!open);
  };

  return (
    <HeroSection>
      <HeroContent>
        <div>
        <Title>
          Hello World
          <span>
            <img src={world} style={{height: '50px'}} alt="content" />
          </span>
        </Title>
        <Title>
          I'm <span style={{ color: "#80cbe0" }}> Santushti Sharma </span>
        </Title>
        <ConnectButton variant="outlined" onClick={handleConnect}>
          Connect with me
        </ConnectButton>
        </div>
        <Dialog open={open} onClose={handleConnect}>
          <DialogTitle
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Connect with Me</Typography>
            <IconButton onClick={handleConnect}>Close me</IconButton>
          </DialogTitle>
          <DialogContent dividers style={{ display: "flex" }}>
            <h1>LinkedIn</h1>
            <h1>Github</h1>
            <h1>Twitter</h1>
            <h1>Mail</h1>
          </DialogContent>
        </Dialog>
      </HeroContent>

      <HeroImg>
        <img src={self} style={{ width: "100%" }} alt="santushti sharma" />
        <img src={bg} style={{position: 'absolute', height: '15%', right: '5%'}} alt="effect for hero section"/>
      </HeroImg>
    </HeroSection>
  );
}

export default Hero;
