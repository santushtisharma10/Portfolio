import { Typography, styled, Box } from "@mui/material";
import React from "react";
import line from "../images/line.gif"
import img2 from "../images/6579900.jpg";

const AboutSection = styled(Box)({
  padding: "30px 50px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});
const AboutTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "800",
});
const AboutContent = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "30px",
  padding: "0 100px",
});

const Text = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
});
const ImgBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
function About() {
  return (
    <AboutSection>
      <AboutTitle align="center">
        About <span style={{ color: "#29b2cb" }}>ME ...</span>
      </AboutTitle>
      <img style={{height: '20px', width: '40%'}} src={line} />
      <AboutContent>
        <Text align="center">
          Innovative individual with a passion for coding, exploring
          technologies and problem solving. Commited to learning and development
          to achieve better results. Loves to take on new challenges and connect
          with new people. Innovative individual with a passion for coding,
          exploring technologies and problem solving. Commited to learning and
          development to achieve better results. Loves to take on new challenges
          and connect with new people.
        </Text>
        <ImgBox>
          <img style={{ width: "80%" }} src={img2} alt="coder" />
        </ImgBox>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
