import { Box } from '@mui/material'
import React from 'react'
// import theme from '../theme'

interface CarouselImage {
  img: string,
  title: string
}

interface CarouselItemProps {
  item: CarouselImage
}

export const CarouselItem = (props: CarouselItemProps) => {
  const { item } = props
  return (
    <Box
      key={item.img}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgrey'
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
  )
}

export default CarouselItem
