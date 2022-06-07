import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Testimonial = () => {
    return (
        <Container sx={{ paddingTop: "40px", paddingBottom: "100px" }}>
            <Typography sx={{ fontSize: { xs: "25px", md: "32px" } }} variant='h3' textAlign="center">Few words from our clients</Typography>


            <Grid container mt={6}>

                <Grid item xs={12} md={6} sx={{ display: "flex", padding: { xs: "40px 0", md: "15px" } }} >

                    <Stack gap={2} sx={{ background: "#fff", padding: "30px" }}>
                        <Typography variant='h6'>The best platform for job search!</Typography>
                        <Typography variant='p' component='p'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </Typography>

                        <Stack mt={3} flexDirection='row' gap={1}>
                            <img width="40px" src='./testimonial__1.png' alt="" />

                            <Box>
                                <Typography fontSize="15px" variant='p' component='p'>Courtney Henry</Typography>
                                <Typography fontSize="15px" variant='p' component='p'>ophthalmologist</Typography>
                            </Box>

                        </Stack>

                    </Stack>

                </Grid>

                <Grid item xs={12} md={6} sx={{ display: "flex", padding: { xs: "40px 0", md: "15px" } }} >

                    <Stack gap={2} sx={{ background: "#fff", padding: "30px" }}>
                        <Typography variant='h6'>Finding a right job has never been easier!</Typography>
                        <Typography variant='p' component='p'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </Typography>

                        <Stack mt={3} flexDirection='row' gap={1}>
                            <img width="40px" src='./testimonial__2.png' alt="" />

                            <Box>
                                <Typography fontSize="15px" variant='p' component='p'>Cody Fisher</Typography>
                                <Typography fontSize="15px" variant='p' component='p'>orthopedist</Typography>
                            </Box>

                        </Stack>

                    </Stack>

                </Grid>


                <Grid item xs={12} md={6} sx={{ display: "flex", padding: { xs: "40px 0", md: "15px" } }} >

                    <Stack gap={2} sx={{ background: "#fff", padding: "30px" }}>
                        <Typography variant='h6'>I have finally found the right job for me!</Typography>
                        <Typography variant='p' component='p'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </Typography>

                        <Stack mt={3} flexDirection='row' gap={1}>
                            <img width="40px" src='./testimonial__3.png' alt="" />

                            <Box>
                                <Typography fontSize="15px" variant='p' component='p'>Devon Lane</Typography>
                                <Typography fontSize="15px" variant='p' component='p'>cardiologist</Typography>
                            </Box>

                        </Stack>

                    </Stack>

                </Grid>


                <Grid item xs={12} md={6} sx={{ display: "flex", padding: { xs: "40px 0", md: "15px" } }} >

                    <Stack gap={2} sx={{ background: "#fff", padding: "30px" }}>
                        <Typography variant='h6'>Working conditions of my dreams! </Typography>
                        <Typography variant='p' component='p'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </Typography>

                        <Stack mt={3} flexDirection='row' gap={1}>
                            <img width="40px" src='./testimonial__4.png' alt="" />

                            <Box>
                                <Typography fontSize="15px" variant='p' component='p'>Albert Flores</Typography>
                                <Typography fontSize="15px" variant='p' component='p'>surgeon</Typography>
                            </Box>

                        </Stack>

                    </Stack>

                </Grid>



            </Grid>

        </Container>
    )
}

export default Testimonial