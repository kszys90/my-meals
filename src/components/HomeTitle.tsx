/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react'
import { Box, Typography, Zoom } from '@mui/material'

export const HomeTitle = () => {
    return (
        <Zoom
            in={true}
            style={{ transitionDelay: '100ms' }}
        >
            <Box
                sx={{
                    height: { xs: '25vh', xl: '40vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    color: (theme) => theme.palette.primary.dark
                }}
            >
                <Typography
                    variant={'h1'}
                    sx={{ fontSize: { xs: '60px', md: '65px', xl: '120px' }, fontWeight: 900, paddingBottom: '15px' }}
                >My Meals
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    sx={{ fontSize: { xs: '15px', md: '25px' }, fontWeight: 600 }}
                >Explore Culinary Excellence at Every Recipe!
                </Typography>
            </Box>
        </ Zoom>
    )
}
