import { Box, Typography } from "@mui/material";
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography sx={{fontFamily:"fantasy"}} varient="h2">
        This is a CURD application
      </Typography>
      <Typography varient="h2">
        By MERN stack
      </Typography>

      </Box>
    </div>
  )
}

export default About