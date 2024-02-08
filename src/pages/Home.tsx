import React from 'react'
import { Box, Container } from '@mui/material'
import HeadCarousel from '../components/HeadCarousel'
import SecondaryCarousel from '../components/SecondaryCarousel'
import RandomMeal from '../components/RandomMeal'
import { HomeTitle } from '../components/HomeTitle'
import { HomeArrowDropdown } from '../components/HomeArrorDropdown'

export const Home = (props: any) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <HomeTitle />
        <HeadCarousel />
        <HomeArrowDropdown />
        <RandomMeal />
        <SecondaryCarousel category={'Seafood'} />
        <SecondaryCarousel category={'Pork'} />
        <SecondaryCarousel category={'Dessert'} />
        <SecondaryCarousel category={'Chicken'} />
        <RandomMeal />
        <SecondaryCarousel category={'Breakfast'} />
        <SecondaryCarousel category={'Lamb'} />
        <SecondaryCarousel category={'Pasta'} />
        <SecondaryCarousel category={'Beef'} />
      </Container>
    </Box >
  )
}

export default Home
