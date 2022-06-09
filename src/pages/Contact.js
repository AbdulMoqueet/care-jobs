import { Button, Container, Grid, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    color: "#000",
    border: "1px solid #000",
    borderRadius: "0",
    padding: "8px 80px",
    marginTop: "30px",
    width: "100px"
})

const Contact = () => {
    return (
        <Container sx={{ paddingTop: "80px", paddingBottom: "80px" }}>

            <Grid container>

                <Grid item xs={12} md={6}>
                    <img style={{boxShadow: "-0 50px 80px 0px #fc98416f"}} width="100%" src="./contact.png" alt="" />
                </Grid>

                <Grid item xs={12} md={6} sx={{marginTop:{xs:"40px", md:"0"}}}>

                    <Stack sx={{ gap:"20px", paddingLeft: {xs:"0", md:"100px"}, paddingRight:{xs:"0", md:"100px"} }}>
                        <Typography sx={{fontSize:{xs:"25px", md:"45px"}}} variant='h2'>CONTACT US</Typography>
                        <Typography variant='p' component='p'>
                            100 Summit Dr.<br />
                            Burlington, MA 01803 <br />
                            <br />
                            617-938-3498</Typography>

                        <Stack gap={2}>
                            <TextField label="Full name" variant="standard" />
                            <TextField label="Email" variant="standard" />
                            <TextField label="Message" variant="standard" />
                        </Stack>
                        <StyledButton>SUBMIT</StyledButton>

                    </Stack>

                </Grid>

            </Grid>

        </Container>
    )
}

export default Contact