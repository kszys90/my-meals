import { Box, Typography, Button } from '@mui/material'
import React from 'react'

interface CarouselImage {
  img: string,
  category: string
}

interface CarouselItemProps {
  item: CarouselImage
  onButtonClick: () => void
}

export const HeadCarouselItem = (props: CarouselItemProps) => {
  const { item, onButtonClick } = props
  return (
    <Box
      key={item.img}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }
      }}
      onClick={onButtonClick}

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
          {item.category}
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
          alt={item.category}
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
        <Button
          variant={'contained'}
          sx={{
            boxShadow: 15
          }}
        >
          Show more
        </Button>

      </Box>
    </Box >
  )
}

export default HeadCarouselItem
