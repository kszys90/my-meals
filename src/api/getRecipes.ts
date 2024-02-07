export const getRecipes = (url: string) => {
  return fetch(`${url}`)
    .then((r) => {
      return r.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
}
