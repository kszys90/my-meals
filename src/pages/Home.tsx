import React from 'react'
import { Box, TextField } from '@mui/material'
export const Home = (props: any) => {
  const { value, onChange } = props
  return (
    <Box >
      <TextField
        id={'outlined-basic'}
        label={'Outlined'}
        variant={'outlined'}
        value={value}
        onChange={onChange}
      />
    </Box>
  )
}

export default Home
