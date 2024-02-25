import React from 'react'
import { ThemeProvider, Box, createTheme } from '@mui/material'
import createThemes from './themes/CreateThemes'
// import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn'
import RegisterPage from './pages/Register'
import Home from './pages/Home'
import NavBar from './components/Nav/NavBar'
import Footer from './components/Other/Footer'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
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
          <NavBar
            siteMode={mode}
            onIconClick={colorMode.toggleColorMode}
          />
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

          </Routes>
          <Footer />
        </Box>
      </ThemeProvider >
    </ColorModeContext.Provider >
  )
}

export default App
