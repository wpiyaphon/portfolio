"use client"
import { createTheme } from "@mui/material/styles"
import PALETTE from "./palette"

// ----------------------------------------------------------------------

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto) var(--font-roboto-condensed)",
  },
  palette: PALETTE,
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          textTransform: "none",
          ...(ownerState.size === "medium" && {
            ...theme.typography.body1,
          }),
        }),
      },
    },
  },
})

export default theme
