import React from 'react'
// import { signUp } from '../auth'
// import { getToken } from '../auth/token'
import { Box, Container } from '@mui/material'
import RegisterCard from '../components/RegisterCard'

export const RegisterPage = () => {
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
          <RegisterCard />
        </Box>
      </Container >
    </Box>

  )
}

export default RegisterPage
