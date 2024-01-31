import React from 'react'
import { Box, Typography } from '@mui/material'
import Carousel from '../components/Carousel'

export const Home = (props: any) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw'

      }}
    >
      <Box
        sx={{
          height: '5vh',
          backgroundColor: 'black'
        }}
      >

      </Box>

      <Box>
        <Box
          sx={{
            height: '30vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          <Typography
            variant={'h1'}
            sx={{ fontSize: '60px' }}
          >My Meals
          </Typography>
          <Typography variant={'h5'}>Best recipes...</Typography>
        </Box>
        <Box
          sx={{
            height: { xs: '30vh', sm: '30vh' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '2000px'
          }}
        >
          <Carousel />
        </Box>
      </Box>
      <Box
        sx={{
          height: '100px'
        }}
      >

      </Box>
    </Box>
  )
}

export default Home
