import { Box, Button, Typography } from '@mui/material'
import React from 'react'

type RandomData = {
  title: string
  category: string
  area: string
  img: string
  id: string
}

export const RandomMeal = (props: { item: RandomData }) => {
  const { item } = props
  return (
    <Box
      sx={{
        height: { xs: '40vh', xl: '35vh' },
        maxWidth: '1200px',
        margin: '0 auto 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            variant={'h6'}
            sx={{ textAlign: 'center' }}
          >
            {item.title}
          </Typography>

          <Typography
            variant={'subtitle2'}
          >
            {`${item.category} | ${item.area}`}
          </Typography>
          <Typography
            variant={'subtitle2'}
            sx={{ textAlign: 'center' }}
          >
            Ingredients: {`${item.category} | ${item.area}...`}
          </Typography>
        </Box>
        <Button variant={'contained'}>
          Show more
        </Button>
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={item.img}
          alt={'item.title'}
          loading={'lazy'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>

    </Box >
  )
}

export default RandomMeal
