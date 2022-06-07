import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "0",
    padding: "10px 40px",
    marginTop: "30px"
})

const New = () => {
    return (
        <Box sx={{ position: "relative", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./new.jpg)", minHeight: "100vh" }}>

            <Box sx={{color: "#fff", position: "absolute", right: {xs:"auto", sm:"50px"}, bottom: "60px", left:{xs:"50%", sm:"auto"}, transform:{xs:"translate(-50%)", sm:"translate(0)"} , width: {xs:"300px", sm:"500px"}}}>
                <Typography variant='h4'>We know you care, and we
                    do too</Typography>

                <Typography variant='p' component='p'>
                We want to live in a world where people who work hard and do the right thing get rewarded. Healthcare work is complex, emotionally draining, and incredibly demanding. We created CareJobs because we know that when our healthcare workers are happy, the quality of care increases! 
                </Typography>

                <StyledButton>ABOUT US</StyledButton>

            </Box>

        </Box>
    )
}

export default New