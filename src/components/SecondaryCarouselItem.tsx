import { Box, Typography } from '@mui/material'
import React from 'react'
import { MealData } from './SecondaryCarousel'

export const SecondaryCarouselItem = ({ meal }: { meal: MealData }) => {
  function truncate(str: string, maxLength: number) {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str
  }
  return (
    <Box
      key={meal.idMeal}
      sx={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { xs: '65%', sm: '75%' }
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
          minHeight: '25%'
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
  )
}

export default SecondaryCarouselItem
