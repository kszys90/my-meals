import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loader = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: 'rgba(255,255,255, 0.75)'
      }}
    >
      <CircularProgress />
    </Box >
  )
}

export default Loader
