import { Box, Button, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {

    return (
        <Container>
            <Grid container spacing={1} sx={{ marginBottom: "100px", minHeight: "100vh", justifyContent: "center", alignItems: "center" }}>

                <Grid item xs={12} md={6}>


                <Box sx={{ position: "relative" }}>
                <img width="100%" src="about__hero.png" />

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

                <Grid item xs={12} md={6} mt={{ xs: "30px", md: "0" }}>
                    <Stack justifyContent="center" alignItems="center">

                        <Box sx={{ maxWidth: { xs: "300px", md: "500px" }, paddingLeft: { xs: "0", md: "100px" } }}  >

                            <Typography variant='h4' sx={{
                                textAlign: "right",
                                fontSize: { xs: "30px", md: "50px" },
                                fontFamily: 'Barlow Condensed'
                            }}>FIND YOUR DREAM JOB </Typography>

                            <Typography sx={{
                                textAlign: "right",
                                fontSize: { xs: "30px", md: "50px" },
                                fontFamily: 'Barlow Condensed'
                            }} variant='h4' textAlign="right">- @CARE JOBS </Typography>


                            <Typography lineHeight={1.7} color="#505050" variant='p' component='p' mt={5}>
                                We want to live in a world where people who work hard and do the right thing get rewarded. Healthcare work is complex, emotionally draining, and incredibly demanding. We created CareJobs because we know that when our healthcare workers are happy, the quality of care increases!

                                Using the power of machine learning and hundreds of analysts we set out to find every healthcare job in the United States and organized them by job title, desired skills, location, and over 100 other data points. The result is an easily searchable database of healthcare jobs waiting for qualified professionals like you to apply.

                            </Typography>




                        </Box>



                    </Stack>

                </Grid>

            </Grid>
        </Container>
    )
}

export default Hero