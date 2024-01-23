import { Box } from '@mui/material'
import React from 'react'

// interface Meal {
//   name: string,
//   img: string
// }

// https://www.youtube.com/watch?v=GvFyIgsGDrc

export const SliderComponent = (props: any) => {
  const { name } = props
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'red',
            height: '100%'
          }}
        >

        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '5px',
            width: '100%',
            textAlign: 'center'
          }}
        >
          {name}
        </Box>
      </Box>
    </>
  )
}

export default SliderComponent
