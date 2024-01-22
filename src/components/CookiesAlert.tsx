import { IconButton, Snackbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'

export const CookiesAlert = () => {
  const [open, setOpen] = React.useState(true)
  const handleClose = () => {
    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <Typography variant={'body2'}>This website uses cookies and similar technologies.</Typography>
      <IconButton
        size={'small'}
        aria-label={'close'}
        color={'inherit'}
        onClick={handleClose}

      >
        <CloseIcon fontSize={'small'} />
      </IconButton>
    </React.Fragment >
  )

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        action={action}
      />
    </>
  )
}

export default CookiesAlert
