/* eslint-disable indent */
import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAsyncFn } from 'react-use'
import 'swiper/css'
import 'swiper/css/navigation'
import { SecondaryCarouselItem } from './SecondaryCarouselItem'
import { getRecipes } from '../api/getRecipes'

export interface MealData {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export const SecondaryCarousel = ({ category }: { category: string }) => {
  const [state, doFetch] = useAsyncFn(getRecipes)
  React.useEffect(() => {
    doFetch(category)
  }, [doFetch])
  return (
    <>
      {
        state.loading ?
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
                  id={category}
                  sx={{
                    minHeight: { xs: '22vh', xl: '14vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '10px',
                    paddingTop: '10px'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                      width: '100%',
                      height: '15%',
                      paddingBottom: '10px',
                      paddingTop: '10px'
                    }}
                  >
                    <Typography
                      variant={'h6'}
                      sx={{
                        paddingLeft: '25px'
                      }}
                    >
                      {category}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      minHeight: '75%',
                      width: '98%',
                      maxWidth: '1200px'
                    }}
                  >
                    <Swiper
                      modules={[Navigation]}
                      grabCursor={true}
                      loop={true}
                      navigation
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                          spaceBetween: 1
                        },
                        550: {
                          slidesPerView: 3,
                          spaceBetween: 1
                        },
                        650: {
                          slidesPerView: 4,
                          spaceBetween: 1
                        },
                        1000: {
                          slidesPerView: 5,
                          spaceBetween: 1
                        },
                        1500: {
                          slidesPerView: 6,
                          spaceBetween: 1
                        }
                      }
                      }
                    >
                      {
                        state.value.meals.map((meal: MealData) => (
                          <SwiperSlide
                            key={meal.idMeal}
                          >
                            <SecondaryCarouselItem
                              meal={meal}
                              key={meal.idMeal}
                            />
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                  </Box >
                </Box>
              </>
      }
    </>
  )
}

export default SecondaryCarousel
