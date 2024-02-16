const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export const getRecipesByName = (meal: string) => {
  return fetch(`${url}${meal}`)
    .then((r) => {
      return r.json()
    })
    .then((data) => {
      return data
    })
}
