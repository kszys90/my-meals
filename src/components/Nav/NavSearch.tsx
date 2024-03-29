/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { Box, Button, CircularProgress, IconButton, InputBase, Modal, Paper, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { getRecipesByName } from '../../api/getRecipesByName'
import { useAsyncFn } from 'react-use'
import { NavSearchItem } from './NavSearchItem'
import { type MealData } from '../../types/types'

export const NavSearch = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [isSearched, setIsSearched] = React.useState(false)

    const [state, doFetch] = useAsyncFn(getRecipesByName)
    const [searchVal, setSearchVal] = React.useState<string>('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        if (searchVal !== '') {
            event.preventDefault()
            doFetch(searchVal)
            setIsSearched(true)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(event.target.value)
    }
    return (
        <>
            <Button
                variant={'contained'}
                startIcon={<SearchIcon />}
                onClick={handleOpen}
                sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.dark,
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }
                }}
            >
                Search...
            </Button>
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
                        width: { xs: '80%', md: '70%' },
                        height: '50%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: { xs: '16px', md: '32px' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Paper
                        component={'form'}
                        onSubmit={handleSubmit}
                        sx={{
                            padding: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: { xs: '80%', xl: '800px' },
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main,
                            marginBottom: '20px'
                        }}
                    >
                        <InputBase
                            onChange={handleInputChange}
                            value={searchVal}
                            sx={{
                                marginLeft: '8px',
                                flex: 1,
                                color: (theme) => theme.palette.primary.contrastText
                            }}
                            placeholder={'Search by meal name'}
                            inputProps={{ 'aria-label': 'Search by meal name' }}
                        />
                        <IconButton
                            type={'button'}
                            onClick={handleSubmit}
                            sx={{ padding: '10px', color: (theme) => theme.palette.primary.contrastText }}
                            aria-label={'search'}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                    {isSearched === false
                        ? null :
                        state.loading ?
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                }}
                            >
                                <CircularProgress size={100} />
                            </Box>
                            : state.error ?
                                <Box>
                                    Error: {state.error.message}
                                </Box>
                                : !state.value ?
                                    searchVal === '' ? null : 'No data'
                                    :
                                    <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                                        {state.value.meals
                                            ? (
                                                <Grid
                                                    container
                                                    spacing={0}
                                                >
                                                    {state.value.meals.map((meal: MealData) => (
                                                        <NavSearchItem
                                                            key={meal.idMeal}
                                                            state={meal}
                                                        />
                                                    ))}
                                                </Grid>
                                            )
                                            : (
                                                <Typography>
                                                    Oops! No data found
                                                </Typography>
                                            )}
                                    </Box>
                    }
                </Box>
            </Modal>
        </>
    )
}
