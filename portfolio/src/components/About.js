import React from "react";
//mui
import { Typography, styled, Box } from "@mui/material";
//images
import line from "../images/line.gif";
import about from "../images/aboutImg.jpg";

const AboutSection = styled(Box)({
  padding: "30px 50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const AboutTitle = styled(Typography)({
  fontSize: "56px",
  fontWeight: "800",
});
const AboutContent = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "50px",
  padding: '50px',
  "@media screen and (max-width: 900px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});
const Text = styled(Typography)({
  fontSize: "24px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  "@media screen and (max-width: 1100px)": {
    fontSize: '20px'
  }
});
const ImgBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  "@media screen and (max-width: 900px)": {
    display: "none",
  },
});
function About() {
  return (
    <AboutSection>
      <AboutTitle align="center">
        About <span style={{ color: "#29b2cb" }}>ME ...</span>
      </AboutTitle>
      <img style={{ height: "20px", width: "40%" }} src={line} alt="line" />
      <AboutContent>
        <Text align="center">
          Innovative individual with a passion for coding, exploring
          technologies and problem solving. Commited to learning and development
          to achieve better results. Loves to take on new challenges and connect
          with new people. 
        </Text>
        <ImgBox>
          <img width="100%" src={about} alt="coder" />
        </ImgBox>
      </AboutContent>
    </AboutSection>
  );
}

export default About;

//things to do
// content needs to be modified