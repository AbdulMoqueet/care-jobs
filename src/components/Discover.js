import React from 'react'

import {Container, Grid, Typography } from '@mui/material'


const Discover = () => {
    return (
        <Container sx={{ background: "#fff", marginRight: "auto" }}>
            <Grid container pl="40px" pt="80px" textAlign="center" >
                <Grid items xs={12} md={4} >
                    <Typography variant='h4' sx={{fontSize: "34px"}}>Discover more than</Typography>
                    <Typography variant='h4' mt="15px" mb="40px"><span style={{ color: "#BE6C30" }}>2 million</span> jobs!</Typography>
                    <img width="320px" src='./discover__1.png' alt='' />
                </Grid>
                <Grid items xs={12} md={4} sx={{
                    marginTop: { md: "135px", xs: "0" },
                    paddingRight: { md: 6, xs: 0 }
                }}>
                    <Typography variant='p' component='p' color="gray" >
                        At CareJobs the perfect job is just a click away! We’ve scoured the internet to find the best healthcare organizations to work and collected all their jobs into one place. With a simple search healthcare professionals can find the job of their dreams.
                        <br />
                        <br />
                        Don’t waste time searching multiple sites. Start your job search today on CareJobs.ai
                    </Typography>
                </Grid>
                <Grid items xs={12} md={4}>
                    <img width="352px" src='./discover__2.png' alt='' />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Discover