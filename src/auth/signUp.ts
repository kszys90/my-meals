import request from './request'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4abJoFocrbBp7np-AyoIqz8tAhDI1DJQ'

export const signUp = (email: string, password: string) => {
  return request(SIGN_IN_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  })
}

export default signUp
