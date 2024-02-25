import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { NavSearch } from './NavSearch'
import Logo from '../../imgs/_52acb34a-6182-465d-ae8c-c95e54c8d242.jpg'

interface NavBarProps {
  siteMode: 'light' | 'dark'
  onIconClick: React.MouseEventHandler<HTMLButtonElement>
}

export const NavBar = (props: NavBarProps) => {
  const { siteMode, onIconClick } = props

  return (
    <Box
      sx={{
        height: '6vh',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0.01,
        zIndex: 4,
        backgroundColor: theme => theme.palette.primary.main,
        boxShadow: 5
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          marginLeft: '20px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >

          <img
            src={Logo}
            alt={'logo'}
            loading={'lazy'}
            style={{
              height: '90%',
              objectFit: 'contain',
              borderRadius: '50%'
            }}
          />
        </Box>
        <Typography sx={{ color: (theme) => theme.palette.primary.contrastText, fontWeight: 700, fontSize: 30, display: { xs: 'none', sm: 'block' }, marginLeft: '16px' }}>
          MyMeals
        </Typography>
      </ Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <NavSearch />
        <IconButton
          onClick={onIconClick}
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }
          }}
        >
          {siteMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box >
  )
}

export default NavBar
