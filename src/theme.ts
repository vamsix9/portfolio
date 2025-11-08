import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
    primary: {
      main: "#ffffff",
      dark: "#333333",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    allVariants: {
      color: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000000",
          color: "#ffffff",
        },
        "*": {
          scrollbarColor: "#333 #000",
        },
      },
    },
  },
});

export default theme;
