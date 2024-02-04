import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const NavBar = () => {
  return (
    <Box
      sx={{
        height: '8vh'
      }}
    >
      <Button variant={'text'}>
        <MenuIcon />
        <Typography
          sx={{ fontWeight: 900 }}
        >
          MyMeals
        </Typography>
      </Button>
    </Box>
  )
}

export default NavBar
