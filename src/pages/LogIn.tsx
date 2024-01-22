import React from 'react'
import { Box, Container } from '@mui/material'
// import Loader from '../components/Loader'
import CookiesAlert from '../components/CookiesAlert'
import LoginCard from '../components/LoginCard'

export const LogIn = () => {
  return (
    <Box
      sx={{
        minHeight: '95vh',
        minWidth: '100vw'
      }}
    >

      <Container
        maxWidth={'xs'}
        sx={{
          display: 'flex',
          minHeight: '95vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            flexGrow: 1
          }}
        >
          <LoginCard />
        </Box>
        < CookiesAlert />
      </Container >
    </Box>
  )
}

export default LogIn
