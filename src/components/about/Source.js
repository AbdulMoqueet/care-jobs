import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    color: "#000",
    border: "1px solid #000",
    borderRadius: "0",
    padding: "8px 60px",
    marginTop: "30px"
})

const Source = () => {
    return (
        <Container sx={{ mb: "100px", marginLeft:"0", background: "#fff", paddingTop: "80px", paddingBottom: "80px" }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">

                <Grid item xs={12} md={6}>
                    <Box sx={{ width: { xs: "auto", md: "450px" }, paddingLeft: { xs: "0", md: "70px" } }}>
                        <Box sx={{width:"fit-content"}}>
                            <Typography fontFamily='Barlow Condensed' variant='h3' sx={{ fontSize: { xs: "30px", md: "50px" }, textAlign: { xs: "left", md: "left" } }}>Need Help Sourcing </Typography>

                            <Typography fontFamily='Barlow Condensed' variant='h3' sx={{ fontSize: { xs: "30px", md: "50px" }, textAlign: "right" }}>- Candidates? </Typography>
                        </Box>

                        <Typography lineHeight={1.7} sx={{ my: "20px", color: "#505050" }} variant='p' component='p'>

                            Do you have a lot of open positions needing to be filled? We have lots of traffic and can help you get in front of highly qualified candidates today! Our vast network of healthcare recruiting tools can help you increase applications submissions four times the number you recieve now (and sometimes more). <br/><br/>

                            Contact us today and we'll explain everything.
                        </Typography>


                        <StyledButton>SUBMIT</StyledButton>

                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img width="100%" src="./sourcing.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Source