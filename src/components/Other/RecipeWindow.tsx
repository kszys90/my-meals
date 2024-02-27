/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { MealData } from '../../types/types'
import { Box, Grid, Typography, Link } from '@mui/material'

type Meal = {
    ingredient: string,
    measure: string
}

export default function RecipeWindow({ state, onClose }: { state: MealData, onClose: () => void }) {
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

    const embedLink = state.strYoutube.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
    return (
        <>
            <Typography
                sx={{
                    position: 'sticky',
                    left: { xs: '90%', md: '95%' },
                    top: 0,
                    background: 'white',
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.2)',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }
                }}
                onClick={onClose}
            >
                X
            </Typography>
            <Grid
                container
                spacing={0}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: '10px',
                            paddingRight: '10px'
                        }}
                    >

                        <img
                            src={state.strMealThumb}
                            alt={state.strMeal}
                            loading={'lazy'}
                            style={{
                                width: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </ Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <Box
                        sx={{
                            color: theme => theme.palette.primary.contrastText,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            marginLeft: '50px'

                        }}
                    >

                        <Typography
                            variant={'h4'}
                            sx={{
                                fontSize: { xs: '25px', sm: '32px', xl: '40px' },
                                textAlign: 'center',
                                padding: '30px'
                            }}
                        >{state.strMeal}
                        </Typography >
                        <Typography
                            sx={{
                                fontSize: { xs: '18px', md: '24px', xl: '30px' },
                                paddingBottom: '10px'
                            }}
                        >Category: {state.strCategory}
                        </Typography>
                        {state.strTags === '' || !state.strTags
                            ? null :
                            <Typography>
                                Tags: {state.strTags}
                            </Typography >
                        }
                        {state.strSource === '' || !state.strSource
                            ? null :
                            <Link
                                href={state.strSource}
                            >
                                <Typography sx={{ marginTop: '10px' }}>
                                    Recipe source link
                                </Typography>
                            </Link>
                        }
                    </Box>
                </ Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Box
                        sx={{
                            backgroundColor: theme => theme.palette.primary.dark,
                            marginTop: '20px',
                            marginRight: { xs: '0px', sm: '10px' },
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}
                    >
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: { xs: '20px', md: '25px', xl: '35px' } }}>Ingredients:</Typography>
                        <ul>
                            {
                                ingredients ?
                                    // eslint-disable-next-line array-callback-return
                                    ingredients.map((meal: Meal, index: number) => {
                                        if (meal && meal.ingredient !== '' && meal.ingredient) {
                                            return (
                                                <li key={`${state.idMeal}${index}`}>
                                                    <Typography sx={{ color: theme => theme.palette.primary.contrastText }}>
                                                        {`${meal.ingredient} ${meal.measure}`}
                                                    </Typography>
                                                </li>
                                            )
                                        }
                                    }) :
                                    null
                            }
                        </ul>
                    </Box>
                </ Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                >
                    <Typography
                        sx={{
                            height: '100%',
                            padding: '10px',
                            marginTop: '20px'
                        }}
                    >
                        {state.strInstructions}
                    </Typography>
                </ Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Box
                        sx={{
                            paddingBottom: 'calc(315 / 560 * 100%)',
                            position: 'relative',
                            width: '90%',
                            margin: '10px auto 10px auto'
                        }}
                    >
                        <iframe
                            width={'560'}
                            height={'315'}
                            src={embedLink}
                            title={'YouTube video player'}
                            frameBorder={'0'}
                            allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                height: '100%',
                                width: '100%'
                            }}
                        >
                        </iframe>
                    </Box>
                </Grid >
            </ Grid >
        </>
    )
}
