import React from 'react'
import { Box } from '@mui/material'
import Carousel from '../components/Carousel'

export const Home = (props: any) => {
  return (
    <Box
      sx={{
        height: '90vh',
        width: '100vw'
      }}
    >
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
