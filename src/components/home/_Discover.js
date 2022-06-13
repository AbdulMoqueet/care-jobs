import React from 'react'

import { Box, Container, Grid, Typography } from '@mui/material'


const Discover = () => {
    return (
        <Container sx={{background: "#fff", paddingRight: "0 !important" }}>
            
            <Grid container pl={{ xxs: "0", md: "40px" }} pt="80px" >
                <Grid items xs={12} md={4} display="flex" justifyContent="center" >
                    <Box>
                        <Typography variant='h4' sx={{ fontSize: {xxs:"28px", xs:"34px"} }}>Discover more than</Typography>
                        <Typography sx={{ fontSize: {xxs:"28px", xs:"34px"} }} variant='h4' mt="15px" mb="40px"><span style={{ color: "#BE6C30" }}>2 million</span> jobs!</Typography>
                        <img width="320px" src='./discover__1.png' alt='' />
                    </Box>

                </Grid>
                <Grid items xxs={12} md={4} sx={{
                    marginTop: { md: "135px", xs: "60px" },
                    marginBottom: "60px",
                    paddingRight: { md: 6, xxs: 0 },
                    paddingLeft: { md: 6, xxs: 0 }
                }}>
                    <Typography lineHeight={1.7} variant='p' component='p' color="gray" >
                        At CareJobs the perfect job is just a click away! We’ve scoured the internet to find the best healthcare organizations to work and collected all their jobs into one place. With a simple search healthcare professionals can find the job of their dreams.
                        <br />
                        <br />
                        Don’t waste time searching multiple sites. Start your job search today on CareJobs.ai
                    </Typography>
                </Grid>
                <Grid items xxs={12} md={4} display="flex" justifyContent="center">
                    <Box component='img' sx={{ width: { xs: "100%", sm: "400px", md: "100%" } }} src='./discover__2.png' alt='' />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Discover