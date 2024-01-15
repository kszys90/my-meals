import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

export const NavBar = () => {
  return (
    <Box
      sx={{
        height: '8vh'
      }}
    >
      <Typography>
        MyMeals
      </Typography>
      <NavLink
        to={'/'}
      >
        Home
      </NavLink>
      <NavLink
        to={'/search'}
      >
        Search
      </NavLink>
    </Box>
  )
}

export default NavBar
