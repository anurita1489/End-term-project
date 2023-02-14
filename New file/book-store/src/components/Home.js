import { Box, Button, Typography } from "@mui/material";
import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography  sx={{fontFamily:"fantasy"}} variant="h2">
        Welcome to Book Storage
      </Typography>
      <Button LinkComponent={Link} to="/books" 
      sx={{marginTop:15,background:'orangered'}}
      variant="contained">
        <Typography variant="h2">
          View all products
        </Typography>
      </Button>
      

      </Box>
    </div>
  )
}

export default Home