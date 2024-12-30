import { PaletteOptions } from "@mui/material"
import { blue, grey } from "@mui/material/colors"

// ----------------------------------------------------------------------

const PALETTE: PaletteOptions = {
  primary: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    contrastText: "#FFF",
  },
  secondary: {
    light: grey[50],
    main: grey[100],
    dark: grey[200],
    contrastText: grey[900],
  },
  text: {
    primary: "#FFF",
    secondary: "#b5b3b3",
  },
}

export default PALETTE
