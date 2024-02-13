import React, { ReactNode } from 'react'
import { Box, Container } from '@mui/material'
import HeadCarousel from '../components/Home/HeadCarousel'
import SecondaryCarousel from '../components/Home/SecondaryCarousel'
import RandomMeal from '../components/Home/RandomMeal'
import { HomeTitle } from '../components/Home/HomeTitle'
import { HomeArrowDropdown } from '../components/Home/HomeArrorDropdown'
import { categories } from '../utils/headCategories'
import { scrollToElement } from '../utils/scrollToElement'

export const Home = () => {
  const childRefs = React.useRef<HTMLDivElement[] | null[]>([])
  const arrowRef = React.useRef<HTMLDivElement | null>(null)
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
  const scrollToArrowRef = () => {
    if (arrowRef.current) {
      scrollToElement(arrowRef.current)
    }
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
        <HomeArrowDropdown onArrowClick={arrowRef ? () => scrollToArrowRef() : null} />
        <Box
          ref={(el: HTMLDivElement | null) => {
            arrowRef.current = el
          }}
        >
          <RandomMeal />
        </Box>
        {createCarousels(0, 3)}
        <RandomMeal />
        {createCarousels(4, 7)}
      </Container>
    </Box >
  )
}

export default Home
