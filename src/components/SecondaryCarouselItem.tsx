import { Box, Typography } from '@mui/material'
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
          textAlign: 'center',
          minHeight: '15%'
        }}
      >
        <Typography>
          {item.title}
        </Typography>
      </Box>
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
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Box >
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Box>

        </Box>
        <Box>

        </Box>

      </Box>
    </Box >
  )
}

export default HeadCarouselItem
