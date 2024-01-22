import { Box } from '@mui/material'
import theme from '../theme'
import React from 'react'

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        bottom: 0
      }}
    >
      CREATED BY KRZYŚ
    </Box>
  )
}

export default Footer
