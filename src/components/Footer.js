import { Box, Container, Grid, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const StyledLink = styled(Link)({
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px"
})

const Footer = () => {
    return (
        <Box sx={{ background: "#BE6C30" }}>
            <Container >
                <Grid container spacing={6} sx={{ padding: "20px", color: "#fff", letterSpacing: "1px" }}>
                    
                    <Grid item sx={12} md={3}>
                        <Typography variant='h4' sx={{ letterSpacing: "5px" }}><span style={{ fontWeight: 700 }}>CARE</span> JOBS</Typography>
                    </Grid>

                    <Grid item sx={12} md={3}>
                        <Stack gap={2}>
                            <StyledLink>About</StyledLink>
                            <StyledLink>Find Job</StyledLink>
                            <StyledLink>Contact</StyledLink>
                        </Stack>
                    </Grid>
                    <Grid item sx={12} md={3}>
                        <Typography variant='h6' mb={2} sx={{ letterSpacing: "1px" }}>Visit Us</Typography>
                        <Typography variant='p' component='p' sx={{ color: "#E5C4AC", letterSpacing: "1px" }}>123 Alberta St, San Francisco, California 94114</Typography>
                    </Grid>
                    <Grid item sx={12} md={3}>
                        <Typography variant='h6' mb={2} sx={{ letterSpacing: "1px" }}>Legal</Typography>
                        <Typography variant='p' component='p' sx={{ color: "#E5C4AC", letterSpacing: "1px" }}>Privacy Policy</Typography>
                        <Typography variant='p' component='p' sx={{ color: "#E5C4AC", letterSpacing: "1px" }}>Term &amp; Conditions</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer