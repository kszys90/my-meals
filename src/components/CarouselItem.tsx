import { Box } from '@mui/material'
import React from 'react'

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
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        loading={'lazy'}
        style={{
          maxWidth: '100%',
          aspectRatio: '16/9',
          padding: '.25rem',
          height: '100%'
        }}
      />
    </Box >
  )
}

export default CarouselItem
