import { Box, Button, Container, Grid, Pagination, Stack, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import JobAlert from '../components/home/JobAlert'
import AppPagination from '../components/jobs/AppPagination'
import Card from '../components/jobs/Card'

const StyledButton = styled(Button)({
    color: "#fff",
    background: "#BE6C30",
    border: "1px solid #fff",
    borderRadius: "0",
    padding: "10px 30px",
    marginTop: "30px",
    ":hover": { background: "#BE6C30" }
})

const StyledTypo = styled(Button)({
    color: "#000",
    background: "#fff",
    fontSize: "10px",
    margin: "4px",
    border: "1px solid #E7E1DC"
})

const FindJob = () => {

    const [data, setData] = useState([])

    return (
        <Container>
            <Grid container>

                <Grid item xs={12} md={4}>

                    <Box sx={{ padding: {xs:"50px 0", md:"50px"} }}>

                        <Typography variant='h5'>Search Job</Typography>
                        <TextField sx={{ width: {xs:"100%", md:"250px"} }} label="Job title" variant="standard" />
                        <TextField sx={{ width: {xs:"100%", md:"250px"} }} label="City" variant="standard" />

                        <StyledButton sx={{width:{xs:"100%", md:"250px"}}}>SEARCH JOBS</StyledButton>


                        <Box mt={6} sx={{display: { xs: "none", md: "block" }}}>

                            <Typography my={3} variant='h5'>Related job searches</Typography>

                            <Box>
                                <StyledTypo>Nurse jobs</StyledTypo>
                                <StyledTypo>Travel nurse jobs</StyledTypo>
                                <StyledTypo>RN Jobs</StyledTypo>
                                <StyledTypo>Special educator teacher</StyledTypo>
                                <StyledTypo>Director jobs</StyledTypo>
                                <StyledTypo>Special nurse jobs</StyledTypo>
                            </Box>


                        </Box>


                        <Box mt={6} sx={{display: { xs: "none", md: "block" }}}>

                            <Typography my={3} variant='h5'>People also searched</Typography>

                            <Box>
                                <StyledTypo>Nurse jobs</StyledTypo>
                                <StyledTypo>Travel nurse jobs</StyledTypo>
                                <StyledTypo>RN Jobs</StyledTypo>
                                <StyledTypo>Special educator teacher</StyledTypo>
                                <StyledTypo>Director jobs</StyledTypo>
                                <StyledTypo>Special nurse jobs</StyledTypo>
                            </Box>


                        </Box>

                    </Box>




                </Grid>

                <Grid item xs={12} md={8}>

                    <Box my={7}>

                        {data.map((item,idx) => <Card key={idx} data={item} />)}

                        <Stack mt={6} alignItems="center" justifyContent="center">
                            <AppPagination setData={(d) => setData(d)}/>
                        </Stack>


                        <JobAlert/>

                    </Box>

                </Grid>

            </Grid>
        </Container>
    )
}

export default FindJob