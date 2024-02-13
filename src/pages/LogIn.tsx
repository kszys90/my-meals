import React from 'react'
import { Box, Container } from '@mui/material'
// import Loader from '../components/Loader'
import LoginCard from '../components/Home/LoginCard'

export const LogIn = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        minWidth: '100vw'
      }}
    >

      <Container
        maxWidth={'xs'}
        sx={{
          minHeight: '90vh'
        }}
      >
        <Box
          sx={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LoginCard />
        </Box>
      </Container >
    </Box>
  )
}

export default LogIn
