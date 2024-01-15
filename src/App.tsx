import React from 'react'
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import { Button } from '@mui/material'
import theme from './theme'
import Search from './components/Search'

function App() {
  console.log(theme.palette)
  // {
  //   backgroundColor: theme.palette.secondary.main, height: '50vh'

  return (
    <Box
      sx={{
        minHeight: '100vh'
      }}
    >
      <NavBar />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        />
        <Route
          path={'/search'}
          element={<Search />}
        />

      </Routes>
    </Box>
  )
}

export default App
