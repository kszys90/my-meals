import React from 'react'
// import { getToken, signIn } from '../auth'
import { NavLink } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
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
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant={'h3'}
          sx={{
            fontWeight: 550
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant={'h3'}
          sx={{
            fontWeight: 550,
            color: theme.palette.primary.main
          }}
        >
          MyMeals
        </Typography>
      </Box>
      <Box
        sx={{
          height: '50vh'
        }}
      >

        <NavLink
          to={'/register'}
        >
          SIGN UP
        </NavLink>
      </Box>
    </>
  )
}

export default LoginCard
