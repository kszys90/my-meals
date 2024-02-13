/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { FormControl, InputBase, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const NavSearchModal = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '80%', sm: '50%' },
                height: '40vh',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                borderRadius: '15px',
                boxShadow: 15,
                p: { xs: '16px', sm: '32px' }
            }}
        >
            <FormControl >
                <InputBase
                    id={'input-with-icon-adornment'}
                    placeholder={'Search...'}
                    sx={{
                        color: (theme) => theme.palette.primary.contrastText,
                        width: '8rem',
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.dark,
                        paddingY: '3px',
                        paddingX: '10px',
                        borderRadius: '5px',
                        boxShadow: 1
                    }}
                    endAdornment={
                        <InputAdornment position={'end'} >
                            <SearchIcon
                                sx={{
                                    color: (theme) => theme.palette.primary.contrastText
                                }}
                            />
                        </InputAdornment>}
                />
            </FormControl>
        </Box>
    )
}
