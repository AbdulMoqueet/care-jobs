import React from 'react'

import { Box, Container, Grid, Typography } from '@mui/material'


const Discover = () => {
    return (
        <Box sx={{ width: "100%" }}>

            <Container sx={{ width: { lg: "calc(100% - 80px)", maxWidth: "calc(580px + 50%) !important" }, background: "#fff", paddingRight: {md:"0 !important"}, marginRight: "0" }}>

                <Grid container pl={{ xxs: "0", md: "40px" }} pt="40px">

                    <Grid items xxs={12} md={4} mt={{xl:"-50px", lg:"-15px" }} display="flex" justifyContent="center" alignItems="center" >
                        <Box>
                            <Typography variant='h4' sx={{ fontSize: { xxs: "28px", xs: "34px" } }}>Discover more than</Typography>
                            <Typography sx={{ fontSize: { xxs: "28px", xs: "34px" } }} variant='h4' mt="15px" mb="40px"><span style={{ color: "#BE6C30" }}>2 million</span> jobs!</Typography>
                            <Box component='img' sx={{textAlign:"center", width:{xxs: "320px", md:"100%"}}}  src='./discover__1.png' alt='' />
                        </Box>

                    </Grid>

                    <Grid items xxs={12} md={4} sx={{
                        marginTop: { md: "165px", xl:"180px", xs: "60px" },
                        marginBottom: "60px",
                        paddingRight: { xxs: 0, md: 6  },
                        paddingLeft: { xxs: 0, md: 6  }
                    }}>
                        <Typography lineHeight={1.7} variant='p' component='p' color="gray" >
                            At CareJobs the perfect job is just a click away! We’ve scoured the internet to find the best healthcare organizations to work and collected all their jobs into one place. With a simple search healthcare professionals can find the job of their dreams.
                            <br />
                            <br />
                            Don’t waste time searching multiple sites. Start your job search today on CareJobs.ai
                        </Typography>
                    </Grid>

                    <Grid item xxs={12} md={4} display='flex' alignItems='center' justifyContent='center'>
                        <Box pt={{xl:6, lg:4, sm:0}} component='img' sx={{ width: { xs: "100%", sm: "400px", md: "100%" } }} src='./discover__2.png' alt='' />
                    </Grid>


                </Grid>

            </Container>

        </Box>
    )
}

export default Discover