// eslint-disable-next-line no-undef
export const request = (url: string, options: RequestInit) => {
  return fetch(url, options)
    .then(resp => {
      return resp.json()
        .then(data => {
          if (!resp.ok) { throw data }
          return data
        })
    })
}

export default request
