/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { SearchHeader } from '../components/SearchHeader'
import { SearchInput } from '../components/SearchInput'
import { SearchContent } from '../components/SearchContent'

export const Search = () => {
    return (
        <Box>
            <SearchHeader />
            <SearchInput />
            <SearchContent>
                <Outlet />
            </SearchContent>
        </Box >

    )
}
