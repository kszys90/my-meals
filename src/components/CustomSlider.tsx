import React from 'react'
import { Box } from '@mui/material'
import SliderComponent from './SliderComponent'

export const CustomSlider = (props: any) => {
  const { items } = props
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          overflowX: 'scroll'
        }}
      >
        {items.map((el: string, index: number) => {
          return (
            <SliderComponent
              // key będzie id
              key={index}
              name={'Meal Name'}
            // dodać img i id
            />
          )
        })}
      </Box>
    </>
  )
}

export default CustomSlider
