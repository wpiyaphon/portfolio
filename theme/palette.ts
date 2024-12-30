import { PaletteOptions } from "@mui/material"
import { blue, purple } from "@mui/material/colors"

// ----------------------------------------------------------------------

const PALETTE: PaletteOptions = {
  primary: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    contrastText: "#FFF",
  },
  secondary: {
    light: purple[300],
    main: purple[500],
    dark: purple[700],
    contrastText: "#FFF",
  },
  text: {
    primary: "#FFF",
    secondary: "#b5b3b3",
  },
}

export default PALETTE
