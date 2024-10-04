import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Items } from "../components/Items";
import { Footer } from "../components/Footer";
import { AddItem } from "../util/AddItem.tsx";
import {CssBaseline, Container, Stack, ThemeProvider} from "@mui/material";
import theme from "../theme/theme.ts";

export const WeekNotes = () => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Stack sx={{height: "85vh"}}>
                    <Title titlePage="Week" />
                    <Items getRequest="week/items" />
                    <AddItem getRequest="week/items" />
                </Stack>
                <Footer />
            </ThemeProvider>
        </Container>
    );
}