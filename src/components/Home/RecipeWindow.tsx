/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { MealData } from '../../types/types'
import { Grid } from '@mui/material'

type Meal = {
    ingredient: string,
    measure: string
}

export default function RecipeWindow({ state }: { state: MealData }) {
    const ingredients = [
        { ingredient: state.strIngredient1, measure: state.strMeasure1 },
        { ingredient: state.strIngredient2, measure: state.strMeasure2 },
        { ingredient: state.strIngredient3, measure: state.strMeasure3 },
        { ingredient: state.strIngredient4, measure: state.strMeasure4 },
        { ingredient: state.strIngredient5, measure: state.strMeasure5 },
        { ingredient: state.strIngredient6, measure: state.strMeasure6 },
        { ingredient: state.strIngredient7, measure: state.strMeasure7 },
        { ingredient: state.strIngredient8, measure: state.strMeasure8 },
        { ingredient: state.strIngredient9, measure: state.strMeasure9 },
        { ingredient: state.strIngredient1, measure: state.strMeasure1 },
        { ingredient: state.strIngredient11, measure: state.strMeasure11 },
        { ingredient: state.strIngredient12, measure: state.strMeasure12 },
        { ingredient: state.strIngredient13, measure: state.strMeasure13 },
        { ingredient: state.strIngredient14, measure: state.strMeasure14 },
        { ingredient: state.strIngredient15, measure: state.strMeasure15 },
        { ingredient: state.strIngredient16, measure: state.strMeasure16 },
        { ingredient: state.strIngredient17, measure: state.strMeasure17 },
        { ingredient: state.strIngredient18, measure: state.strMeasure18 },
        { ingredient: state.strIngredient19, measure: state.strMeasure19 },
        { ingredient: state.strIngredient20, measure: state.strMeasure20 }
    ]
    return (
        <>
            <Grid
                container
                spacing={0}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <p>{state.strMeal}</p>
                    <p>{state.strCategory}</p>
                    <p>{state.strTags}</p>
                    <p>{state.strYoutube}</p>
                    <p>{state.strSource}</p>
                </ Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <p>{state.strMealThumb}</p>
                </ Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <ul>
                        {
                            ingredients ?
                                // eslint-disable-next-line array-callback-return
                                ingredients.map((meal: Meal) => {
                                    if (meal && meal.ingredient !== '') {
                                        return (
                                            <li key={state.idMeal}>{`${meal.measure} - ${meal.ingredient}`}</li>
                                        )
                                    }
                                }) :
                                null
                        }
                    </ul>
                </ Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <p>{state.strInstructions}</p>
                </ Grid>
            </ Grid>
        </>
    )
}
