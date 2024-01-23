import React from 'react'
import { Box } from '@mui/material'
// import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import { Button } from '@mui/material'
// import theme from './theme'
import SearchResults from './pages/SearchResults'
import LogIn from './pages/LogIn'
import RegisterPage from './pages/Register'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  // {
  //   backgroundColor: theme.palette.secondary.main, height: '50vh'
  // const [searchVal, setSearchVal] = useState('')
  // const { searchPhrase } = useParams()
  // const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          height: '5vh'
        }}
      >

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
      <Footer />
    </Box>
  )
}

export default App
