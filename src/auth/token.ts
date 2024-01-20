let token: string | null = null
// można go zapisać w local storage żeby się nie kasowało po reloadach

export const getToken = () => token

export const setToken = (newToken: string | null) => {
  token = newToken
}
