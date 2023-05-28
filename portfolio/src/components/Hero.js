import React, { useState } from "react";
//mui
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
//images
import self from "../images/santushti.jpg";
import bg from "../images/hero_bg.gif";
import world from "../images/heroGif.gif";
import { Close, GitHub, LinkedIn, Mail, Twitter } from "@mui/icons-material";

const HeroSection = styled(Box)({
  padding: "120px 50px",
  border: "0.5px solid #F6F1F1",
  display: "grid",
  gridTemplateColumns: "65% auto",
  "@media screen and (max-width: 900px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});
const HeroContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  "@media screen and (max-width: 900px)": {
    textAlign: "center",
    justifyContent: "center",
  },
});
const Title = styled(Typography)({
  fontSize: "64px",
  fontWeight: 800,
  "@media screen and (max-width: 1200px)": {
    fontSize: "48px",
  },
});
const HeroImg = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
const ConnectButton = styled(Button)({
  margin: "20px 0",
  padding: "10px 30px",
  borderRadius: "20px",
  borderColor: "#80cbe0",
  color: "#80cbe0",
  fontSize: "20px",
  fontWeight: 600,
  ":hover": {
    backgroundColor: "#285cd1",
    borderColor: "#285cd1",
    color: "#fff",
  },
});

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
              <img src={world} style={{ height: "50px" }} alt="content" />
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "28px", fontWeight: 700 }}>
              Connect
            </Typography>
            <IconButton onClick={handleConnect}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers style={{ display: "flex", gap: "20px" }}>
            <IconButton color="light blue">
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton color="light blue">
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton color="light blue">
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton color="light blue">
              <Mail fontSize="large" />
            </IconButton>
          </DialogContent>
        </Dialog>
      </HeroContent>

      <HeroImg>
        <img src={self} style={{ width: "100%" }} alt="santushti sharma" />
        <img
          src={bg}
          style={{ position: "absolute", height: "15%", right: "5%" }}
          alt="effect for hero section"
        />
      </HeroImg>
    </HeroSection>
  );
}

export default Hero;

//things to do
//color scheme needs to be modified
//use the cropped version of the photo in mobile view
//change the position of connect button in mobile view