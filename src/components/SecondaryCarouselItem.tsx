import { Box } from '@mui/material'
import React from 'react'

interface CarouselImage {
  img: string,
  title: string
}

interface CarouselItemProps {
  item: CarouselImage
}

export const HeadCarouselItem = (props: CarouselItemProps) => {
  const { item } = props
  const imgHover = (bool: boolean) => {
    bool ? console.log('enter') : console.log('left')
  }
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
          width: '100%',
          height: '80%'
        }}
      >
        <img
          src={item.img}
          alt={item.title}
          loading={'lazy'}
          onMouseEnter={() => imgHover(true)}
          onMouseLeave={() => imgHover(false)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Box >
    </Box >
  )
}

export default HeadCarouselItem
