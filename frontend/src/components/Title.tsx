import { Grid2, Typography } from "@mui/material";
import React from "react";

interface TitleProps {
    titlePage: string;
}

export const Title: React.FC<TitleProps> = ({ titlePage }) => {
    return (
        <Grid2
            container
            sx={{
                pt: 2,
                pb: 4,
                flexDirection: "column",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: 200,
                lineHeight: "0",
            }}
        >
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: "2.5rem",
                    letterSpacing: "0.5rem",
                    paddingLeft: "12px",
                    color: "rgb(230, 230, 230)",
                }}
            >
                {titlePage}
            </Typography>
            <Typography sx={{ fontWeight: 200, color: "rgb(230, 230, 230)" }}>
                Write <span style={{ fontWeight: 600 }}>down</span>, Check{" "}
                <span style={{ fontWeight: 600 }}>off</span>
            </Typography>
        </Grid2>
    );
};