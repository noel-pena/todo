import {Divider, Grid2} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <>
            <Divider style={{
                    borderTop: "1px",
                    borderColor: "rgba(212, 212, 212, 0.558)",
                    marginTop: "50px"
                }}
            />
            <Grid2
                container
                sx={{ p:4, justifyContent: "center", alignItems: "center" }}
                spacing={1}
            >
                <Grid2
                    sx={{
                        xs: 6,
                        color: "rgb(232, 232, 232)",
                        fontWeight: 300,
                        fontSize: "10px",
                        textAlign: "left",
                    }}
                >
                    NPX | Copyright © {year}
                </Grid2>
                <Grid2 sx={{ xs: 6, textAlign: "right" }}>
                    <a href="https://github.com/noel-pena">
                        <GitHubIcon sx={{color: 'rgba(220, 220, 220, 0.726)'}} />
                    </a>
                    <a href="https://www.instagram.com/i_am_omen/">
                        <InstagramIcon sx={{color: 'rgba(220, 220, 220, 0.726)'}} />
                    </a>
                    <a href="https://linkedin.com/in/noel-pena-1138aa167">
                        <LinkedInIcon sx={{color: 'rgba(220, 220, 220, 0.726)'}} />
                    </a>
                    <a href="mailto:noel.pena@hotmail.com">
                        <EmailIcon sx={{color: 'rgba(220, 220, 220, 0.726)'}} />
                    </a>
                </Grid2>
            </Grid2>
        </>
    );
};
