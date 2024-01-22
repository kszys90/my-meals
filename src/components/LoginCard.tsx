import React from 'react'
// import { getToken, signIn } from '../auth'
import { NavLink } from 'react-router-dom'
import { Box, Grow, Paper, Typography } from '@mui/material'
import theme from '../theme'

export const LoginCard = () => {
  // const [login, setLogin] = React.useState<string>('')
  // const [password, setPassword] = React.useState<string>('')

  // const handleLogin = () => {
  //   signIn(login, password)
  //     .then(() => {
  //       console.log('getToken:', getToken())
  //     })
  // }
  console.log(theme)
  return (
    <>
      <Box
        sx={{
          minHeight: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grow
          style={{ transformOrigin: '0 0 0' }}
          in={true}
          timeout={1000}
        >
          <Typography
            variant={'h3'}
            sx={{
              fontWeight: 550,
              fontSize: '2rem'
            }}
          >
            Welcome to
          </Typography>
        </Grow>
        <Grow
          style={{ transformOrigin: '0 0 0' }}
          in={true}
          timeout={1000}
        >
          <Typography
            variant={'h3'}
            sx={{
              fontWeight: 550,
              fontSize: { xs: '2.5 rem', md: '3.5rem' },
              color: theme.palette.primary.main
            }}
          >
            MyMeals
          </Typography>
        </Grow>

      </Box>
      <Grow
        style={{ transformOrigin: '0 0 0' }}
        in={true}
        timeout={3000}
      >
        <Paper
          elevation={20}
          sx={{
            minHeight: '55vh',
            backgroundColor: theme.palette.grey[100],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography
            variant={'h5'}
            sx={{
              fontWeight: 550,
              color: theme.palette.primary.main
            }}
          >
            Login
          </Typography>
          <NavLink
            to={'/register'}
          >
            SIGN UP
          </NavLink>
        </Paper>
      </Grow>
    </>
  )
}

export default LoginCard
