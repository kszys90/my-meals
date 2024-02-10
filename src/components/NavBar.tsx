import React from 'react'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SearchIcon from '@mui/icons-material/Search'

interface NavBarProps {
  siteMode: 'light' | 'dark'
  onIconClick: React.MouseEventHandler<HTMLButtonElement>
}

export const NavBar = (props: NavBarProps) => {
  const { siteMode, onIconClick } = props
  const [isFocused, setIsFocused] = React.useState(false)
  const handleFocus = () => {
    setIsFocused(true)
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
      <Button variant={'text'}>
        <MenuIcon
          sx={{
            color: (theme) => theme.palette.primary.contrastText
          }}
        />
      </Button>
      <Box>
        <FormControl>
          <InputLabel
            htmlFor={'input-with-icon-adornment'}
            sx={{
              color: (theme) => theme.palette.primary.contrastText
            }}
          >
            Search...
          </InputLabel>
          <Input
            id={'input-with-icon-adornment'}
            onFocus={handleFocus}
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
              width: isFocused ? { xs: '12rem', sm: '20rem', md: '30rem' } : '7rem'
            }}
            endAdornment={
              <InputAdornment position={'end'} >
                <SearchIcon
                  sx={{
                    color: (theme) => theme.palette.primary.contrastText
                  }}
                />
              </InputAdornment>}
          />
        </FormControl>

        <IconButton
          onClick={onIconClick}
          sx={{
            color: (theme) => theme.palette.primary.contrastText
          }}
        >
          {siteMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  )
}

export default NavBar
