import { Box } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box
      sx={{
        height: '6vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 4,
        backgroundColor: theme => theme.palette.primary.dark,
        boxShadow: 5,
        color: theme => theme.palette.primary.contrastText
      }}
    >
      CREATED BY KSZYS90 GITHUB
    </Box>
  )
}

export default Footer
