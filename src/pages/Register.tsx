import React from 'react'
import { signUp } from '../auth'
import { getToken } from '../auth/token'

export const RegisterPage = (props: any) => {
  const {
    ...otherProps
  } = props

  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [password2, setPassword2] = React.useState<string>('')

  const handleClick = () => {
    password === password2 ?
      signUp(login, password)
        .then(() => console.log(getToken()))
      :
      console.log('PASSWORDS ARE NOT THE SAME')
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
      <label htmlFor={'passInput2'}>
        <span>Password</span>
        <input
          name={'passInput2'}
          type={'password'}
          onChange={e => setPassword2(e.target.value)}
          value={password2}
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

export default RegisterPage
