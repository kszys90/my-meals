import { Box, Button, Grow, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { getToken, signUp } from '../auth'

export const RegisterCard = () => {
  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [password2, setPassword2] = React.useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    login && login.length > 0 && password && password.length > 0 && password === password2 ?
      signUp(login, password)
        .then(() => console.log(getToken()))
      :
      console.log('PASSWORDS ARE NOT THE SAME')
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
              fontSize: { xs: '2 rem', sm: '3.5rem' },
              color: theme => theme.palette.primary.main
            }}
          >
            MyMeals
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
              fontSize: '2rem'
            }}
          >
            Create Account
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
            backgroundColor: theme => theme.palette.grey[100],
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
            onSubmit={(e) => { handleSubmit(e) }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%'
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
              SIGN UP
            </Typography>
            <TextField
              id={'email-input'}
              label={'E-mail'}
              type={'email'}
              variant={'standard'}
              size={'small'}
              autoFocus
              value={login}
              onChange={e => { setLogin(e.target.value) }}
              sx={{
                paddingBottom: '8px',
                fontSize: '5px',
                width: { xs: '80%', sm: '60%' }
              }
              }
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
                paddingBottom: '8px',
                width: { xs: '80%', sm: '60%' }
              }}
            />
            <TextField
              id={'password-input2'}
              label={'Confirm password'}
              type={'password'}
              variant={'standard'}
              size={'small'}
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              sx={{
                paddingBottom: '24px',
                width: { xs: '80%', sm: '60%' }
              }}
            />
            <Button
              variant={'contained'}
              type={'submit'}
            >
              SIGN UP
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <NavLink
              to={'/sign-in'}
              style={{
                paddingBottom: '16px',
                color: 'black',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              <Button variant={'text'}>To login page</Button>
            </NavLink>
          </Box>
        </Paper>
      </Grow >
    </>
  )
}

export default RegisterCard
