import { Box, Button, Container, styled, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "0",
    padding: "10px 40px",
    marginTop: "30px"
})

const Full = () => {
    return (
        <Box sx={{ position: "relative", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./new.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: "100vh", marginRight: { lg: "80px",  xl:"200px" } }}>

            <Container sx={{ position: "relative", marginRight: { lg: "80px",  xl:"200px" }  }}>

                <Box sx={{
                    color: "#fff",
                    position: "absolute",
                    right: { xxs: "auto", sm: "0" },
                    top: { xxs:"10vh", xs: "30vh", sm:"50vh", md: "45vh", xl: "60vh" },
                    left: { xxs: "50%", sm: "50%", md:"auto" },
                    transform: { xxs: "translate(-50%)", sm: "translate(-50%, -50%)", md:"translate(0)" },
                    width: { xxs:"260px", xs: "300px", sm: "500px" }
                }}>
                    <Typography variant='h4'>We know you care, and we
                        do too</Typography>

                    <Typography mt={2} lineHeight={1.6} variant='p' component='p'>
                        We want to live in a world where people who work hard and do the right thing get rewarded. Healthcare work is complex, emotionally draining, and incredibly demanding. We created CareJobs because we know that when our healthcare workers are happy, the quality of care increases!
                    </Typography>

                    <StyledButton>ABOUT US</StyledButton>

                </Box>


            </Container>
        </Box>
    )
}

export default Full