import React from 'react'
import { Box, Typography, Zoom, Button } from '@mui/material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import HeadCarousel from '../components/HeadCarousel'
import SecondaryCarousel from '../components/SecondaryCarousel'
import RandomMeal from '../components/RandomMeal'

export const Home = (props: any) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          width: '99%'
        }}
      >
        <Zoom
          in={true}
          style={{ transitionDelay: '100ms' }}
        >
          <Box
            sx={{
              height: '25vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
              color: (theme) => theme.palette.primary.dark
            }}
          >
            <Typography
              variant={'h1'}
              sx={{ fontSize: { xs: '60px', md: '65px', xl: '70px' }, fontWeight: 900, paddingBottom: '15px' }}
            >My Meals
            </Typography>
            <Typography
              variant={'subtitle1'}
              sx={{ fontSize: { xs: '15px', md: '25px' }, fontWeight: 600 }}
            >Explore Culinary Excellence at Every Recipe!
            </Typography>
          </Box>
        </Zoom>
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
      </Box>
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
          <Button>
            <ArrowDropDownCircleIcon
              sx={{
                fontSize: '60px'
              }}
            />
          </Button>
        </Box>
      </Zoom>
      <SecondaryCarousel />
      {/* <SecondaryCarousel /> */}
      <RandomMeal />
      {/* <SecondaryCarousel />
      <SecondaryCarousel />
      <RandomMeal />
      <SecondaryCarousel />
      <SecondaryCarousel />
      <RandomMeal />
      <SecondaryCarousel />
      <SecondaryCarousel /> */}
    </Box >
  )
}

export default Home
