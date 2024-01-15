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
      <Box>
        <Typography>
          MyMeals
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <NavLink
          to={'/'}
        >
          Home
        </NavLink>

      </Box>
    </Box>
  )
}

export default NavBar
