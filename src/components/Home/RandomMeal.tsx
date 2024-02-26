/* eslint-disable indent */
import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { getRandom } from '../../api/getRandom'
import { useAsyncFn } from 'react-use'
import CircularProgress from '@mui/material/CircularProgress'
import RecipeWindow from './RecipeWindow'

export const RandomMeal = () => {
  const [state, doFetch] = useAsyncFn(getRandom)
  React.useEffect(() => {
    doFetch('https://www.themealdb.com/api/json/v1/1/random.php')
  }, [doFetch])

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  return (
    <Box
      sx={{
        height: { xs: '40vh', xl: '35vh' },
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        marginY: '30px',
        paddingY: '10px',
        backgroundColor: theme => theme.palette.background.paper,
        boxShadow: 5
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
            <>
              <Box
                sx={{
                  width: { xs: '100%', sm: '50%' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    variant={'h6'}
                    sx={{
                      textAlign: 'center',
                      paddingY: { xs: '2px', sm: '10px' }
                    }}
                  >
                    {state.value.meals[0].strMeal}
                  </Typography>

                  <Typography
                    variant={'subtitle2'}
                    sx={{
                      textAlign: 'center',
                      paddingY: { xs: '2px', sm: '10px' }
                    }}
                  >
                    {`${state.value.meals[0].strCategory} | ${state.value.meals[0].strArea}`}
                  </Typography>
                  <Typography
                    variant={'caption'}
                    sx={{
                      textAlign: 'center',
                      paddingY: { xs: '2px', sm: '10px' }
                    }}
                  >
                    Ingredients: {`${state.value.meals[0].strIngredient1}, ${state.value.meals[0].strIngredient2}, ${state.value.meals[0].strIngredient3}, ${state.value.meals[0].strIngredient4}, ${state.value.meals[0].strIngredient5}...`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    height: { xs: '50%', sm: '100%' },
                    display: { xs: 'flex', sm: 'none' },
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={state.value.meals[0].strMealThumb}
                    alt={state.value.meals[0].strMeal}
                    loading={'lazy'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <Button
                  variant={'contained'}
                  sx={{
                    boxShadow: 15
                  }}
                  onClick={handleOpen}
                >
                  Show more
                </Button>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={state.value.meals[0].strMealThumb}
                  alt={state.value.meals[0].strMeal}
                  loading={'lazy'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
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
                  <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <RecipeWindow
                      onClose={handleClose}
                      state={state.value.meals[0]}
                    />
                  </Box>
                </Box>
              </Modal>
            </>
      }
    </Box >
  )
}

export default RandomMeal
