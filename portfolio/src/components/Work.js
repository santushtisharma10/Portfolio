import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import workIMG from "../images/work.gif"
const WorkSection = styled(Box)({
  padding: "50px 100px",
  backgroundColor: '#285cd1'
})
const Header = styled(Box)({
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center'
})
const Title = styled(Typography)({
  fontSize: "56px",
  fontWeight: 800,
  
})
function Work() {
  return (
    <WorkSection>
      <Header>
        <Title>
          Work <br/ > <span style={{color: "#80cbe0"}}>Experience</span>
        </Title>
        <img style={{height: '200px'}} src={workIMG} />
      </Header>
      add 2 cards looking in 1 row, they should like somewhat like horizontal product card
    </WorkSection>
  )
}

export default Work