import React from 'react'
import { Box, Grid, Container } from '@mui/material'

// import Loader from '../components/Loader'
import CookiesAlert from '../components/CookiesAlert'
import LoginForm from '../components/LoginForm'
import LoginInfo from '../components/LoginInfo'

export const LogIn = () => {
  return (
    <Container
      maxWidth={'md'}
    >
      <Box
        sx={{
          flexGrow: 1
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, md: 2 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              // display: { xs: 'none', sm: 'block' }
              backgroundColor: 'lightblue'
            }}
          >
            <LoginInfo />

          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <LoginForm />
          </Grid>
        </Grid>
        {/* <Loader /> */}

      </Box >
      < CookiesAlert />

    </Container>
  )
}

export default LogIn
