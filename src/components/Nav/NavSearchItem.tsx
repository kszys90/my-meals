/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { type MealData } from '../../types/types'
import { Box, Grid, Modal, Typography } from '@mui/material'
import RecipeWindow from '../Other/RecipeWindow'

export const NavSearchItem = ({ state }: { state: MealData }) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false)
    return (
        <>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={2}
                onClick={handleOpen}

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
                        src={state.strMealThumb}
                        alt={state.strMeal}
                        loading={'lazy'}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                    <Typography sx={{ textAlign: 'center' }}>
                        {state.strMeal}
                    </Typography>
                </Box >
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={'modal-modal-title'}
                aria-describedby={'modal-modal-description'}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '100%', md: '80%' },
                        height: { xs: '90%', md: '80%' },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: { xs: '16px', md: '32px' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                        <RecipeWindow
                            onClose={handleClose}
                            state={state}
                        />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
