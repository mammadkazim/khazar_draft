import { createTheme } from "@mui/material";

export const themeCustom = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#9B5AE1",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    body1: {
      fontSize: "14px"
    },
    h1: {
      color: "#424242",
      fontSize: "14px",
      fontWeight: 500
    },
    h2: {
      color: "#424242",
      fontSize: "14px"
    },
  },
  shadows:"none"

});
