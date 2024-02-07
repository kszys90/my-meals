export const getRandom = (url: string) => {
  return fetch(`${url}`)
    .then((r) => {
      return r.json()
    })
    .then((data) => {
      return data
    })
}
