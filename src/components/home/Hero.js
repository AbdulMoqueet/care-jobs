import React from 'react'
import { Box, Button, Container, Grid, Stack, styled, TextField, Typography } from '@mui/material'

const Hero = () => {

    const StyledButton = styled(Button)({
        color: "#000",
        border: "1px solid #000",
        borderRadius: "0",
        padding: "10px 40px",
        marginTop: "30px"
    })

    return (
        <Container>
            <Grid container spacing={2} sx={{ my: "50px", justifyContent: "center", alignItems: "center" }}>
                <Grid item md={6} xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Stack gap={1} textAlign="center">

                        <Typography
                            sx={{
                                fontSize: { xs: "50px", sm: "70px" },
                                marginTop: { xs: "30px", md: "0" },
                                fontFamily: 'Barlow Condensed'
                            }} variant='h2'>MILLIONS OF JOB</Typography>

                        <Typography sx={{
                            fontSize: { xs: "50px", sm: "70px" },
                            fontFamily: 'Barlow Condensed'
                        }} variant='h2' component='h2'>- IN ONE PLACE</Typography>

                        <Box sx={{marginBottom: "10px", marginTop:"10px"}}>
                            <Typography variant='p' component='p' color="#505050" fontSize={18}>Check out how Care Jobs can help you find your</Typography>
                            <Typography variant='p' component='p' color="#505050" fontSize={18}>perfect job in your area in healthcare industry</Typography>
                        </Box>


                        <Stack sx={{ margin: "auto", width: { xs: "100%", sm: "400px" }, gap: "20px" }}>
                            <TextField label="Job Title" variant="standard" />
                            <TextField label="City" variant="standard" />
                            <StyledButton>SEARCH JOBS</StyledButton>
                        </Stack>


                    </Stack>
                </Grid>
                <Grid item md={6} xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ position: "relative" }}>
                        <img style={{ width: "100%" }} src='./hero.png' alt="" />

                        <Box sx={{
                            position: "absolute",
                            height: "100px",
                            width: "80%",
                            bottom: "20px",
                            left: "50%",
                            transform: "translate(-50%)",
                            boxShadow: "0 50px 100px 10px #fc9841d6",
                            zIndex: "-1"
                        }}>

                        </Box>

                    </Box>


                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero