import React from 'react'
import { Box } from '@mui/material'
import SliderComponent from '../components/SliderComponent'
import CustomSlider from '../components/CustomSlider'

export const Home = (props: any) => {
  const meal = () => {
    return (
      <SliderComponent />)
  }
  const meals = [meal, meal, meal, meal, meal, meal, meal, meal, meal, meal]

  return (
    <Box
      sx={{
        height: '90vh',
        width: '100vw'
      }}
    >
      <Box
        sx={{
          height: { xs: '40vh', sm: '30vh' }
        }}
      >
        <CustomSlider items={meals} />
      </Box>
    </Box>
  )
}

export default Home
