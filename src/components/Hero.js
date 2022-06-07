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
            <Grid container spacing={2} sx={{ minHeight: "100vh", justifyContent: "center", alignItems: "center" }}>
                <Grid item md={6} xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Stack gap={3} textAlign="center">
                        <Typography sx={{fontSize: {xs:"30px", sm:"50px"}, marginTop:{xs:"30px", md:"0"}}} variant='h2' component='h2'>MILLIONS OF JOB</Typography>
                        <Typography sx={{fontSize: {xs:"30px", sm:"50px"}}} variant='h2' component='h2'>- IN ONE PLACE</Typography>

                        <Box>
                            <Typography variant='p' component='p' color="gray" fontSize={18}>Check out how Care Jobs can help you find your</Typography>
                            <Typography variant='p' component='p' color="gray" fontSize={18}>perfect job in your area in healthcare industry</Typography>
                        </Box>


                        <Stack sx={{ margin: "auto", width: {xs:"100%", sm:"400px"}, gap: "20px" }}>
                            <TextField label="Job Title" variant="standard" />
                            <TextField label="City" variant="standard" />
                            <StyledButton>SEARCH JOBS</StyledButton>
                        </Stack>


                    </Stack>
                </Grid>
                <Grid item md={6} xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: "100%" }} src='./hero.png' alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero