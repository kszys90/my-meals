import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const NavBar = (props: any) => {
  const { mode, onIconClick } = props
  return (
    <Box
      sx={{
        height: '6vh',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Button variant={'text'}>
        <MenuIcon />
      </Button>
      <IconButton
        onClick={onIconClick}
        sx={{
          color: (theme) => theme.palette.primary.dark,
          position: 'fixed',
          right: 0,
          zIndex: 4
        }}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default NavBar
