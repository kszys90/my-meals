/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
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
                        color={'inherit'}
                        to={'/'}
                    >
                        Home
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        color={'inherit'}
                        to={'/search'}
                    >
                        Search
                    </NavLink>
                </MenuItem>
            </Menu>
        </>
    )
}
