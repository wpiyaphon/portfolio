"use client"
import { createTheme } from "@mui/material/styles"
import PALETTE from "./palette"

// ----------------------------------------------------------------------

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto) var(--font-roboto-condensed)",
  },
  palette: PALETTE,
})

export default theme
