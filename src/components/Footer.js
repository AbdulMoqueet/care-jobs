import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const StyledLink = styled(Link)({
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",
    "&:hover": { color: "#000" }
})

const StyledBox = styled(Box)({
    width: "30px",
    height: "30px",
    border: "solid 1px #fff",
    display: "grid",
    placeItems: "center",
    color: "#fff"
})

const Footer = () => {
    return (
        <Box sx={{ background: "#BE6C30", padding: "50px 0" }}>
            <Container >
                <Grid container sx={{ padding: "20px", color: "#fff", letterSpacing: "1px" }}>

                    <Grid item sx={12} md={3}>
                        <Typography variant='h4' sx={{ letterSpacing: "5px" }}><span style={{ fontWeight: 700 }}>CARE</span> JOBS</Typography>
                    </Grid>

                    <Grid item sx={12} md={3} mt={{ xs: "30px", md: 0 }}>
                        <Stack gap={4}>
                            <StyledLink to="/about">About</StyledLink>
                            <StyledLink to="/find-jobs?page=1">Find Job</StyledLink>
                            <StyledLink to="/contact">Contact</StyledLink>
                        </Stack>
                    </Grid>
                    <Grid item sx={12} md={3} mt={{ xs: "30px", md: 0 }}>
                        <Typography variant='h6' mb={{ xs: 0, md: 2 }} sx={{ letterSpacing: "1px" }}>Visit Us</Typography>
                        <Typography variant='p' component='p' sx={{ color: "#E5C4AC", letterSpacing: "1px" }}>123 Alberta St, San Francisco, California 94114</Typography>
                    </Grid>
                    <Grid item sx={12} md={3} mt={{ xs: "30px", md: 0 }}>
                        <Typography variant='h6' mb={{ xs: 0, md: 2 }} sx={{ letterSpacing: "1px" }}>Legal</Typography>
                        <Typography variant='p' component='p' sx={{ color: "#E5C4AC", letterSpacing: "1px" }}>Privacy Policy</Typography>
                        <Typography variant='p' component='p' sx={{ color: "#E5C4AC", letterSpacing: "1px" }}>Term &amp; Conditions</Typography>
                    </Grid>
                </Grid>

                <Box sx={{ my: 3, height: "1px", background: "#fff" }}></Box>

                <Grid container>

                    <Grid item xs={12} md={6} order={{xs:2, md:1}} >
                        <Typography color="#fff" variant='p' component='p'>© 2022 Care Jobs. All rights reserved</Typography>
                    </Grid>

                    <Grid item xs={12} md={6} order={{xs:1,md:2}} mb={{xs:2, md:0}}>
                        <Stack flexDirection='row' justifyContent={{md:'flex-end'}}>
                        <Box>
                           <Stack flexDirection='row' gap={3}>
                            <StyledBox>
                                <BsFacebook />
                            </StyledBox>

                            <StyledBox>
                                <FaLinkedinIn />
                            </StyledBox>

                            <StyledBox>
                                <BsTwitter />
                            </StyledBox>
                        </Stack> 
                        </Box>
                        </Stack>
                    </Grid>


                </Grid>


            </Container>
        </Box>
    )
}

export default Footer