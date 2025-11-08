import { createTheme } from '@mui/material';

// Font import
import '@fontsource/manrope/variable.css'; // Variable font

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1976d2' },
    background: {
      default: '#0a0f12',
      paper: '#071014',
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Manrope, sans-serif',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Manrope, sans-serif',
        },
      },
    },
  },
});