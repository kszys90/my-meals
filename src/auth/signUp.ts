import request from './request'
import { setToken } from './token'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4abJoFocrbBp7np-AyoIqz8tAhDI1DJQ'

export const signUp = (email: string, password: string) => {
  return request(SIGN_IN_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  }).then(data => {
    setToken(data.idToken)
    return data
  })
}

export default signUp
