import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const theme = createTheme({
    palette: {
        background: {
            default: '#7a8c89',
        },
        text: {
            primary: 'rgb(230, 230, 230)',
        },
        primary: {
            main: 'rgb(230, 230, 230)',
            contrastText: '#ffffff'
        },
        secondary: {
            main: 'rgb(230, 230, 230)',
            contrastText: '#ffffff'
        },
        success: {
            main: 'rgb(230, 230, 230)'
        }
    },
    typography: {
        fontFamily: 'Roboto',
    },
    spacing: 8,
});

export default theme;