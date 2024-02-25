/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'

interface HamburgerProps {
    handleClose: () => void
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    open: boolean
    state: null | HTMLElement
}

export const HamburgerButton = ({ handleClose, onClick, open, state }: HamburgerProps) => {
    return (
        <>
            <Button
                variant={'text'}
                id={'hamb-button'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup={'true'}
                aria-expanded={open ? 'true' : undefined}
                onClick={onClick}
            >
                <MenuIcon
                    sx={{
                        color: (theme) => theme.palette.primary.contrastText
                    }}
                />
            </Button>
            <Menu
                id={'hamb-menu'}
                anchorEl={state}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'hamb-button'
                }}
            >
                <MenuItem>
                    <NavLink
                        to={'/'}
                        onClick={handleClose}
                    >
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.dark,
                                textDecoration: 'none',
                                '&:hover': {
                                    fontWeight: 700,
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            Home
                        </Typography>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to={'/search'}
                        onClick={handleClose}
                    >
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.dark,
                                textDecoration: 'none',
                                '&:hover': {
                                    fontWeight: 700,
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            Search
                        </Typography>
                    </NavLink>
                </MenuItem>
            </Menu>
        </>
    )
}
