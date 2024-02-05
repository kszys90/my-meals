import React from 'react'
import SecondaryCarousel from './SecondaryCarousel'
import { Box, Typography } from '@mui/material'

export const CategoryItem = (props: any) => {
  return (
    <Box
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
          Category name
        </Typography>
      </Box>
      <SecondaryCarousel />
    </Box>
  )
}

export default CategoryItem
