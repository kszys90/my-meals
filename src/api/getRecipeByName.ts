const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export const getRecipeByName = (meal: string) => {
  return fetch(`${url}${meal}`)
    .then((r) => {
      return r.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
}
