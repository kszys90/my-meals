import React from 'react'
import { ThemeProvider, Box, createTheme, IconButton, Button, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import createThemes from './themes/CreateThemes'
// import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import SearchResults from './pages/SearchResults'
import LogIn from './pages/LogIn'
import RegisterPage from './pages/Register'
import Home from './pages/Home'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = React.useMemo(() => createTheme(createThemes(mode)), [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            height: '100%',
            backgroundColor: (theme) => theme.palette.background.default
          }}
        >
          <Box
            sx={{
              height: '5vh',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button variant={'text'}>
              <Typography
                sx={{ fontWeight: 900 }}
              >
                MyMeals
              </Typography>
            </Button>
            <IconButton
              sx={{ marginLeft: 2 }}
              onClick={colorMode.toggleColorMode}
              color={'inherit'}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          {/* <NavBar /> */}
          <Routes>
            <Route
              path={'/sign-in'}
              element={<LogIn />}
            />
            <Route
              path={'/sign-up'}
              element={<RegisterPage />}
            />
            <Route
              path={'/'}
              element={<Home />}
            />
            <Route
              path={'/search/:searchPhrase'}
              element={<SearchResults />}
            />

          </Routes>
          {/* <Footer /> */}
        </Box>
      </ThemeProvider >
    </ColorModeContext.Provider >
  )
}

export default App
