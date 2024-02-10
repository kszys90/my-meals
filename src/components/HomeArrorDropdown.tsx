/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import { Box, Zoom, Button } from '@mui/material'

interface Props {
    onArrowClick: any
}

export const HomeArrowDropdown = ({ onArrowClick }: Props) => {
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
                    onClick={onArrowClick}
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
