import React, { ReactNode } from 'react'
import { Box, Container } from '@mui/material'
import HeadCarousel from '../components/HeadCarousel'
import SecondaryCarousel from '../components/SecondaryCarousel'
import RandomMeal from '../components/RandomMeal'
import { HomeTitle } from '../components/HomeTitle'
import { HomeArrowDropdown } from '../components/HomeArrorDropdown'
import { categories } from '../utils/headCategories'

export const Home = () => {
  const childRefs = React.useRef<HTMLDivElement[] | null[]>([])
  const createCarousels = (start: number, end: number): ReactNode => {
    // eslint-disable-next-line array-callback-return
    return categories.map((element, index) => {
      if (index >= start && index <= end) {
        return (
          <Box
            key={`${index}${element}`}
            ref={(el: HTMLDivElement | null) => {
              if (el && childRefs.current) {
                childRefs.current[index] = el
              }
            }}
          >
            <SecondaryCarousel
              category={element.category}
            />
          </Box >
        )
      }
    })
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
        <HeadCarousel refList={childRefs} />
        <HomeArrowDropdown />
        <RandomMeal />
        {createCarousels(0, 3)}
        <RandomMeal />
        {createCarousels(4, 7)}
      </Container>
    </Box >
  )
}

export default Home
