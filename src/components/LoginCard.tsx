import React from 'react'
// import { getToken, signIn } from '../auth'
import { NavLink } from 'react-router-dom'
import { Box, Grow, Paper, Typography, Button, TextField } from '@mui/material'

export const LoginCard = () => {
  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  // const handleLogin = () => {
  //   signIn(login, password)
  //     .then(() => {
  //       console.log('getToken:', getToken())
  //     })
  // }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('submit')
    // signIn(login, password)
    // .then(() => {
    //   console.log('getToken:', getToken())
    // })
  }
  return (
    <>
      <Box
        sx={{
          minHeight: { xs: '25vh', sm: '20vh' },
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
              fontSize: { xs: '2 rem', sm: '3.5rem' },
              color: theme => theme.palette.primary.main
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
            minHeight: '60vh',
            backgroundColor: theme => theme.palette.secondary.main,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '15px',
            width: { xs: '85%', sm: '100%' }
          }}
        >
          <Box
            component={'form'}
            onSubmit={(e) => handleSubmit(e)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              variant={'h5'}
              sx={{
                fontWeight: 550,
                color: theme => theme.palette.primary.main,
                fontSize: { xs: '1.6rem', sm: '2.0rem' },
                paddingTop: { xs: '16px', sm: '48px' },
                paddingBottom: { xs: '8px', sm: '24px' }
              }}
            >
              Login
            </Typography>
            <TextField
              id={'email-input'}
              label={'E-mail'}
              type={'email'}
              variant={'standard'}
              size={'small'}
              autoFocus
              value={login}
              onChange={e => setLogin(e.target.value)}
              sx={{
                paddingBottom: '8px',
                fontSize: '5px'
              }}
            />
            <TextField
              id={'password-input'}
              label={'Password'}
              type={'password'}
              variant={'standard'}
              size={'small'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              sx={{
                paddingBottom: '24px'
              }}
            />
            <Button
              variant={'contained'}
              type={'submit'}
            >
              LOG IN
            </Button>
            <Box sx={{ paddingTop: { xs: '16px', sm: '48px' } }}>
              <Button variant={'text'}>
                Continue as Guest
              </Button>
            </Box>

          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography variant={'subtitle2'}>
              or Sign Up using
            </Typography>
            <NavLink
              to={'/sign-up'}
              style={{
                paddingBottom: '16px',
                color: 'black',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              <Button variant={'text'}>SIGN UP</Button>
            </NavLink>
          </Box>
        </Paper>
      </Grow >
    </>
  )
}

export default LoginCard
