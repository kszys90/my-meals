// eslint-disable-next-line no-undef
export const request = (url: string, options: RequestInit) => {
  return fetch(url, options)
    .then(resp => {
      if (!resp.ok) {
        throw resp
      }
      return resp.json()
    })
    .catch(error => {
      throw error.json()
    })
}

export default request
