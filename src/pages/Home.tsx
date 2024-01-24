import React from 'react'
import { Box, Typography } from '@mui/material'
import Carousel from '../components/Carousel'

export const Home = (props: any) => {
  return (
    <Box
      sx={{
        height: '90vh',
        width: '100vw'
      }}
    >
      <Typography variant={'h1'}>My Meals</Typography>
      <Box
        sx={{
          height: { xs: '25vh', sm: '20vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '2000px'
        }}
      >
        <Carousel />
      </Box>
      <Box
        sx={{
          height: '100px'
        }}
      >

      </Box>
      <Box
        sx={{
          height: { xs: '25vh', sm: '20vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '2000px'
        }}
      >
        <Carousel />
      </Box>

    </Box>
  )
}

export default Home
