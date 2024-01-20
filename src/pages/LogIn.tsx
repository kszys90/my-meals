import React from 'react'
import { signIn } from '../auth'

export const LogIn = (props: any) => {
  const {
    ...otherProps
  } = props

  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleClick = () => {
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
        onClick={handleClick}
      >
        LOG IN
      </button>
    </div>
  )
}

export default LogIn
