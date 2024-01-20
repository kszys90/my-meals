import React from 'react'
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import { Button } from '@mui/material'
// import theme from './theme'
import SearchResults from './pages/SearchResults'
import LogIn from './pages/LogIn'

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
      <NavBar />
      <Routes>
        <Route
          path={'/'}
          element={<LogIn />}
        />
        {/* <Route
          path={'/'}
          element={<Home
            value={searchPhrase || ''}
            onChange={(event: any) => console.log(searchPhrase)}
          />}
        /> */}
        <Route
          path={'/search/:searchPhrase'}
          element={<SearchResults />}
        />

      </Routes>
    </Box>
  )
}

export default App
