import React from 'react'
import { Box, Zoom, Button, Container } from '@mui/material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import HeadCarousel from '../components/HeadCarousel'
import SecondaryCarousel from '../components/SecondaryCarousel'
import RandomMeal from '../components/RandomMeal'
import SearchRedirector from '../components/SearchRedirector'
import { HomeTitle } from '../components/HomeTitle'

export const Home = (props: any) => {
  const handleArrowClick = (event: React.MouseEvent<HTMLElement>) => {
  }
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
        <Zoom
          in={true}
          style={{ transitionDelay: '500ms' }}
        >
          <Box
            sx={{
              height: { xs: '50vh', xl: '35vh' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '20px',
              paddingTop: '10px'
            }}
          >
            <HeadCarousel />
          </Box>
        </Zoom>
      </Container>
      <Zoom
        in={true}
        style={{ transitionDelay: '500ms' }}
      >
        <Box
          sx={{
            height: '15vh',
            display: { xs: 'flex', xl: 'none' },
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <Button
            onClick={handleArrowClick}
          >
            <ArrowDropDownCircleIcon
              sx={{
                fontSize: '60px'
              }}
            />
          </Button>
        </Box>
      </Zoom>
      <Container
        id={'article'}
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
        <SearchRedirector />
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
