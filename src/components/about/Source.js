import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    color: "#000",
    border: "1px solid #000",
    borderRadius: "0",
    padding: "8px 60px",
    marginTop: "30px",
    "&:hover": { background: "#000", color: "#fff" }
})

const Source = () => {
    return (
        <Box sx={{ background: "#fff", marginRight: { lg: "80px",  xl:"200px" } }}>
            <Container sx={{ mb: "100px", background: "#fff", paddingTop: { xxs: "50px", md: "80px" }, paddingBottom: "80px" }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">

                    <Grid item xxs={12} md={6}>
                        <Box sx={{ width: { xxs: "auto", md: "450px" }, paddingLeft: { xs: "0", md: "0" } }}>
                            <Box sx={{ width: "auto" }}>
                                <Typography fontFamily='Barlow Condensed' variant='h3' sx={{ fontSize: { xxs: "30px", md: "60px" }, textAlign: { xxs: "center", md: "right" } }}>Need Help Sourcing </Typography>

                                <Typography fontFamily='Barlow Condensed' variant='h3' sx={{ fontSize: { xxs: "30px", md: "60px" }, textAlign: { xxs: "center", md: "right" } }}>- Candidates? </Typography>
                            </Box>

                            <Typography lineHeight={1.7} sx={{ my: "20px", color: "#505050" }} variant='p' component='p'>

                                Do you have a lot of open positions needing to be filled? We have lots of traffic and can help you get in front of highly qualified candidates today! Our vast network of healthcare recruiting tools can help you increase applications submissions four times the number you receive now (and sometimes more). <br /><br />

                                Contact us today and we'll explain everything.
                            </Typography>


                            <StyledButton>SUBMIT</StyledButton>

                        </Box>

                    </Grid>
                    <Grid item xxs={12} md={6} textAlign={{ xxs: "left", md: "right" }}>
                        <Box component="img" width={{ xxs: "100%", md: "500px" }} src="./sourcing.png" alt=""></Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Source