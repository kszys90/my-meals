import { Box, Typography, Button } from '@mui/material'
import React from 'react'
// import theme from '../theme'

interface CarouselImage {
  img: string,
  title: string
}

interface CarouselItemProps {
  item: CarouselImage
}

export const HeadCarouselItem = (props: CarouselItemProps) => {
  const { item } = props
  return (
    <Box
      key={item.img}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          minHeight: '15%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant={'subtitle1'}
          sx={{
            textAlign: 'center',
            fontSize: { xs: '22px', xl: '25px' }
          }}
        >
          Meal category
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '65%'
        }}
      >
        <img
          src={item.img}
          alt={item.title}
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
          minHeight: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button variant={'contained'}>
          Show more
        </Button>

      </Box>
    </Box >
  )
}

export default HeadCarouselItem
