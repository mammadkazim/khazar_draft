import React from 'react'
import {Box, Typography} from "@mui/material"
const Header = () => {
  return (
    <Box
    component="header"
    sx={{
      backgroundColor: "#fff",
      px: 3,
      py: 2,
      borderTop: "1.5px solid #e8cccc",
      width:"100vw"
    }}
  >
    <Typography variant="h1">Əsas səhifə</Typography>
  </Box>
  )
}

export default Header