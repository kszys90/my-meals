/* eslint-disable indent */
import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAsyncFn } from 'react-use'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import SecondaryCarouselItem from './SecondaryCarouselItem'
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
                      maxWidth: '1200px',
                      height: '20%',
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
                      height: '100%',
                      width: '95%',
                      maxWidth: '1200px'
                    }}
                  >
                    <Swiper
                      modules={[Navigation, Scrollbar]}
                      grabCursor={true}
                      loop={true}
                      navigation
                      scrollbar={{ draggable: true }}
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
