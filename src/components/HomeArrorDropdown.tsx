/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import { Box, Zoom, Button } from '@mui/material'

export const HomeArrowDropdown = () => {
    const handleArrowClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log('clicked!')
    }
    return (
        <Zoom
            in={true}
            style={{ transitionDelay: '500ms' }}
        >
            <Box
                sx={{
                    height: '15vh',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}
            >
                <Button
                    onClick={handleArrowClick}
                >
                    <ArrowDropDownCircleIcon
                        sx={{
                            fontSize: '60px'
                        }}
                    />
                </Button>
            </Box>
        </Zoom>
    )
}
