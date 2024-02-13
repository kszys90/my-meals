/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { FormControl, InputBase, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface NavSearchInputProps {
    handleBlur: () => void
    handleFocus: () => void
    matches: boolean
    isFocused: boolean
}

export const NavSearchInput = ({ handleBlur, handleFocus, matches, isFocused }: NavSearchInputProps) => {
    return (
        <>
            <FormControl
                sx={{
                    marginRight: { xs: '0', sm: '8px' }
                }}
            >
                <InputBase
                    id={'input-with-icon-adornment'}
                    size={matches ? 'medium' : 'small'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={'Search...'}
                    sx={{
                        color: (theme) => theme.palette.primary.contrastText,
                        width: isFocused ? { xs: '12rem', sm: '20rem', md: '30rem' } : '6.2rem',
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.dark,
                        padding: '3px',
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
        </>
    )
}
