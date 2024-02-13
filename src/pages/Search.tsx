/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { SearchHeader } from '../components/Home/SearchHeader'
import { SearchContent } from '../components/Home/SearchContent'

export const Search = () => {
    return (
        <Box>
            <SearchHeader />
            <SearchContent>
                <Outlet />
            </SearchContent>
        </Box >

    )
}
