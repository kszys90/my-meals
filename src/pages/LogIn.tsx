import React from 'react'
import { signIn } from '../auth'
import { NavLink } from 'react-router-dom'

export const LogIn = (props: any) => {
  const {
    ...otherProps
  } = props

  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleLogin = () => {
    signIn(login, password)
      .then(data => console.log(data))
  }

  return (
    <div
      {...otherProps}
    >
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
        SIGN IN
      </NavLink>
    </div>
  )
}

export default LogIn
