/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import { Box, CircularProgress, Modal, Typography } from '@mui/material'
import React from 'react'
import { MealData } from './SecondaryCarousel'
import { getByID } from '../../api/getById'
import { useAsyncFn } from 'react-use'
import RecipeWindow from '../Other/RecipeWindow'

export const SecondaryCarouselItem = ({ meal }: { meal: MealData }) => {
  function truncate(str: string, maxLength: number) {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str
  }
  const [state, doFetch] = useAsyncFn(getByID)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
    doFetch(meal.idMeal)
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <Box
        key={meal.idMeal}
        onClick={handleOpen}
        sx={{
          cursor: 'pointer',
          width: '100%',
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '60%', sm: '70%' }
          }}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            loading={'lazy'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box >
        <Box
          sx={{
            textAlign: 'center',
            height: '30%'
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', sm: '16px' }
            }}
          >
            {truncate(meal.strMeal, 40)}
          </Typography>
        </Box>
      </Box >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={'modal-modal-title'}
        aria-describedby={'modal-modal-description'}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '100%', md: '80%' },
            height: { xs: '90%', md: '80%' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: '16px', md: '32px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {state.loading ?
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              <CircularProgress size={100} />
            </Box>
            : state.error ?
              <Box>
                Error: {state.error.message}
              </Box>
              : !state.value ?
                'No data'
                :
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                  {state.value.meals
                    ? (
                      <RecipeWindow
                        onClose={handleClose}
                        state={state.value.meals[0]}
                      />
                    )
                    : (
                      <Typography>
                        Oops! No data found
                      </Typography>
                    )}
                </Box>

          }
        </Box>
      </Modal>
    </>
  )
}

export default SecondaryCarouselItem
