import React from 'react'
import { Box, Button, Grid, Stack, styled, TextField, Typography } from '@mui/material'

const StyledButton = styled(Button)({
    color: "#fff",
    background: "#BE6C30",
    border: "1px solid #fff",
    borderRadius: "0",
    padding: "10px 40px",
    marginTop: "30px",
    width:"230px",
    ":hover": {background: "#BE6C30"}
})

const JobAlert = () => {
    return (
        <Box mb={14}>

            <Grid container spacing={2} sx={{background:"#fff", padding:"40px", maxWidth: "700px", margin: "60px auto"}}>

                <Grid pl={0} item xs={12} md={6} order={{xs:2, md:1}}>
                    <Stack gap="20px">
                        <Typography variant='h5'>New jobs posted daily, sign up for alerts</Typography>
                        <Typography color="#6B6B6B" fontSize='14px' variant='p' component='p'>Create an email alert to get the latest jobs delivered right to your inbox</Typography>
                        <Typography color="#6B6B6B" fontSize='14px' variant='p' component='p'>By creating an email alert, you agree to our <span style={{ color: "#BE6C30", textDecoration: "underline" }}>Terms of Service</span> and <span style={{ color: "#BE6C30", textDecoration: "underline" }}>Privacy Statement</span>. You can cancel email alerts at any time.</Typography>
                    </Stack>
                </Grid>


                <Grid pl={0} item xs={12} md={6} order={{xs:1, md:2}}>
                    <Stack gap="10px">
                        <TextField label="Job title" variant="standard" />
                        <TextField label="Zip code" variant="standard" />
                        <TextField label="Email" variant="standard" />
                        <StyledButton>CREATE JOB ALERT</StyledButton>
                    </Stack>
                </Grid>

            </Grid>

        </Box>
    )
}

export default JobAlert