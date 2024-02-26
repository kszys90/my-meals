/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

export const getByID = (id: string) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((r) => {
            return r.json()
        })
        .then((data) => {
            return data
        })
}
