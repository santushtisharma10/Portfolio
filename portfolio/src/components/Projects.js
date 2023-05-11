import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import img from "../images/projects1.gif"
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSection = styled(Box)({
  padding: '20px 50px',
})
const Title = styled(Typography)({
  fontSize: "56px",
  fontWeight: 800,
  color: "#80cbe0"

})
const Header = styled(Box)({
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center'
})
function Projects() {
 //USE SWIPER OF CARDS
 //CARDS SHOULD USE NEUROMORPHISM
 const projects = [
  {id: '1', text: '', tech: '', description: "", imgSrc: ""}
 ]
  return (
    <ProjectSection>
      {/* display in flex */}
      <Header>
      <Title align='center'>Projects</Title>
      <h1>I have been working on</h1>
      <img src={img} style={{height: '100px'}} />
      </Header>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
      >
        {projects.map((item) => (
          <SwiperSlide id={item.id}>
            <div className="card" style={{height: '200px', margin : '20px', padding: '10px'}} >
              {item.id}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectSection>
  )
}

export default Projects