import request from './request'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4abJoFocrbBp7np-AyoIqz8tAhDI1DJQ'

export const signIn = (email: string, password: string) => {
  return request(SIGN_IN_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  })
}

export default signIn

// interface RnMcharacter{
//     id: number,
//     img: string,
//     name: string,
//     number: number
// };
// export async function askForList(){
//     const res = await fetch('http://127.0.0.1:3333/applist');
//     const { data }: { data: RnMcharacter } = await res.json();
//     return data;
//   }
