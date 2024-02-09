import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

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
      <Button variant={'text'}>
        <MenuIcon
          sx={{
            color: (theme) => theme.palette.primary.contrastText
          }}
        />
      </Button>
      <IconButton
        onClick={onIconClick}
        sx={{
          color: (theme) => theme.palette.primary.contrastText
        }}
      >
        {siteMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default NavBar
