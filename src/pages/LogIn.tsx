import React from 'react'
import { signIn, getToken } from '../auth'
import { NavLink } from 'react-router-dom'
// import Loader from '../components/Loader'
import CookiesAlert from '../components/CookiesAlert'

export const LogIn = (props: any) => {
  const {
    ...otherProps
  } = props

  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleLogin = () => {
    signIn(login, password)
      .then(() => {
        console.log('getToken:', getToken())
      })
  }

  return (
    <div
      {...otherProps}
    >
      <CookiesAlert />
      {/* <Loader /> */}
      <label htmlFor={'loginInput'}>
        <span>Login</span>
        <input
          name={'loginInput'}
          type={'email'}
          onChange={e => setLogin(e.target.value)}
          value={login}
        >
        </input>
      </label>
      <br />
      <label htmlFor={'passInput'}>
        <span>Password</span>
        <input
          name={'passInput'}
          type={'password'}
          onChange={e => setPassword(e.target.value)}
          value={password}

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
    </div>
  )
}

export default LogIn
