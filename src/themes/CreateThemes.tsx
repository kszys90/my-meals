import { PaletteMode } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'

export const CreateThemes = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#008080' : '#1976d2',
      dark: mode === 'dark' ? '#cccccc' : '#1565c0',
      light: mode === 'dark' ? '#00a3a3' : '#42a5f5'
    },
    secondary: {
      main: mode === 'dark' ? '#010101' : grey[100],
      dark: mode === 'dark' ? '#FFFFFF' : blueGrey[300],
      light: mode === 'dark' ? '#121111' : blueGrey[100]
    },
    background: {
      default: mode === 'dark' ? '#1a1a1a' : '#fff',
      paper: mode === 'dark' ? '#222222' : blueGrey[100]
    }

  },
  typography: {
    allVariants: { ...(mode === 'dark' ? { color: '#cccccc' } : { color: '#01579b' }) }
  }
})

export default CreateThemes
