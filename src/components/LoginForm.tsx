import React from 'react'
import { getToken, signIn } from '../auth'
import { NavLink } from 'react-router-dom'

export const LoginForm = () => {
  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleLogin = () => {
    signIn(login, password)
      .then(() => {
        console.log('getToken:', getToken())
      })
  }
  return (
    <>
      < label htmlFor={'loginInput'} >
        <span>Login</span>
        <input
          name={'loginInput'}
          type={'email'}
          onChange={e => setLogin(e.target.value)}
          value={login}
          placeholder={'email'}
          autoFocus
        >
        </input>
      </label >
      <br />
      <label htmlFor={'passInput'}>
        <span>Password</span>
        <input
          name={'passInput'}
          type={'password'}
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder={'password'}
        >
        </input>
      </label>
      <br />
      <button
        onClick={handleLogin}
      >
        LOG IN
      </button>
      <br />
      <NavLink
        to={'/register'}
      >
        SIGN UP
      </NavLink>
    </>
  )
}

export default LoginForm
