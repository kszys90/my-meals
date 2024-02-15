/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { Box, Button, CircularProgress, IconButton, InputBase, Link, Modal, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { getRecipeByName } from '../../api/getRecipeByName'
import { useAsyncFn } from 'react-use'

export const NavSearch = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [state, doFetch] = useAsyncFn(getRecipeByName)
    const [searchVal, setSearchVal] = React.useState<string>('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        doFetch(searchVal)
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
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.dark
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
                        border: '2px solid #000',
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
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main
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
                            sx={{ padding: '10px', color: (theme) => theme.palette.primary.contrastText }}
                            aria-label={'search'}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <Link
                        underline={'hover'}
                        href={'/search'}
                        sx={{
                            color: (theme) => theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.dark
                        }}
                    >
                        Explore Advanced Search Options
                    </Link>
                    <ul>
                        {
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
                                        'No data'
                                        :
                                        <><li>{state.value.meals[0].idMeal}</li><li>to działa!</li></>
                        }
                    </ul>
                </Box>
            </Modal>
        </>
    )
}
