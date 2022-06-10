import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/job-details')
        window.scrollTo(0, 0)
    }

    return (
        <Box mt={7}>


            <Stack sx={{ background: "#fff", padding: "20px 30px" }}>
                <Typography fontFamily='Barlow Condensed' fontSize="30px" variant='h5'>{props.data.title}</Typography>
                <Typography my={3} variant='p' component='p'>{props.data.hospital}</Typography>
                <Typography lineHeight={1.8} color="#6B6B6B" variant='p' component='p'>{props.data.desc}</Typography>

                <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "30px",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography color="#6B6B6B" variant='p' component='p'>{props.data.postedOn}</Typography>
                    <Button onClick={handleClick} sx={{ color: "#BE6C30" }}>Apply</Button>
                </Stack>

            </Stack>


        </Box>
    )
}

export default Card