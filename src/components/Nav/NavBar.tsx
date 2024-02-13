import React from 'react'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { HamburgerButton } from './HamburgerButton'
import { NavSearchInput } from './NavSearchInput'

interface NavBarProps {
  siteMode: 'light' | 'dark'
  onIconClick: React.MouseEventHandler<HTMLButtonElement>
}

export const NavBar = (props: NavBarProps) => {
  const { siteMode, onIconClick } = props
  const matches = useMediaQuery('(min-width:600px)')
  const [isFocused, setIsFocused] = React.useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  const [hambMenu, setHambMenu] = React.useState<null | HTMLElement>(null)
  const hambOpen = Boolean(hambMenu)
  const handleHambClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHambMenu(event.currentTarget)
  }
  const handleHambClose = () => {
    setHambMenu(null)
  }
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
      <HamburgerButton
        handleClose={handleHambClose}
        onClick={handleHambClick}
        open={hambOpen}
        state={hambMenu}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <NavSearchInput
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          matches={matches}
          isFocused={isFocused}
        />
        <IconButton
          onClick={onIconClick}
          sx={{
            color: (theme) => theme.palette.primary.contrastText
          }}
        >
          {siteMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box >
  )
}

export default NavBar