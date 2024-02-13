/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react'
import { Button, Modal } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { NavSearchModal } from './NavSearchModal'

export const NavSearch = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
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
                <NavSearchModal />
            </Modal >
        </>
    )
}
