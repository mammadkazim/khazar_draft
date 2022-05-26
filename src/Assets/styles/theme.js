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
});
