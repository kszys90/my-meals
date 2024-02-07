const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

export const getRecipes = (category: string) => {
  return fetch(`${url}${category}`)
    .then((r) => {
      return r.json()
    })
    .then((data) => {
      return data
    })
}
