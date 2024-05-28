import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary:{
            main: purple[500],
            light: purple[100]
        },
        text:{
            main: '#000000',
            light: purple[50],
        }
    }
})

export default theme;