import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
//css
import "swiper/css";
import Bg from "../images/skills_Bg.jpg";
import line from "../images/line.gif"

const SkillsSection = styled(Box)({
  backgroundColor: "pink",
  backgroundImage: `url(${Bg})`,
  backgroundSize: '100% 100%',
  padding: '50px 0',
  textAlign: 'center',
  margin: '100px 0'
});

const Title = styled(Typography)({
  fontSize: "48px",
  fontWeight: 800,
  color: "#80cbe0"
})

//add skills images 
//modify skills array

function Skills() {
  const skills = [
    { id: "1"},
    { id: "2"},
    { id: "3" },
    { id: "4"},
    { id: "5"},
    { id: "6" },

  ];
  return (
    <SkillsSection>
      <Title align="center">
        Skills
      </Title>
      <img style={{height: '20px', width: '30%'}} src={line} />
      <Swiper
        spaceBetween={30}
        loop={true}
        slidesPerView={3}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {skills.map((item) => (
          <SwiperSlide id={item.id}>
            <div className="card" style={{height: '200px', margin : '20px', padding: '10px'}} >
              {item.id}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
        loop={true}
        slidesPerView={3}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
      >
        {skills.map((item) => (
          <SwiperSlide id={item.id}>
            <div className="card" style={{height: '200px', margin : '20px', padding: '10px'}} >
              {item.id}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SkillsSection>
  );
}

export default Skills;
