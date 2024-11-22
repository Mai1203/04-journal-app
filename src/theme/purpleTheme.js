import { createTheme } from "@mui/material";
import { red, blue, green } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: green[400],
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#f4f6f8",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
});