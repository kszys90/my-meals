/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { type MealData } from '../../types/types'
import { Box, Grid, Typography } from '@mui/material'

export const NavSearchItem = ({ data }: { data: MealData }) => {
    const handleClick = () => {
        console.log('click - add link to meal')
    }
    return (
        <>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={2}
                onClick={handleClick}

                sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                        boxShadow: 15
                    }
                }}
            >
                <Box
                    sx={{
                        width: '90%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: '16px'
                    }}
                >
                    <img
                        src={data.strMealThumb}
                        alt={data.strMeal}
                        loading={'lazy'}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                    <Typography sx={{ textAlign: 'center' }}>
                        {data.strMeal}
                    </Typography>
                </Box >
            </Grid>
        </>
    )
}
