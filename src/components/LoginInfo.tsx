import { Grid, Typography } from '@mui/material'
import React from 'react'

export const LoginInfo = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={3}
        />
        <Grid
          item
          xs={6}
        >
          <Typography variant={'h4'}>
            Welcome
          </Typography>
          <Typography variant={'h5'}>
            To MyMeals
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
        />
      </Grid>
      <Grid
        container
        sx={{ paddingTop: 3 }}
      >
        <Grid
          item
          xs={3}
        />
        <Grid
          item
          xs={6}
        >
          <Typography variant={'body1'}>
            This is educational web, using firebase auth...
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
        />
      </Grid>
    </>
  )
}

export default LoginInfo
