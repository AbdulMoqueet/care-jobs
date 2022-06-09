import React from 'react'
import { Box, Button, Container, Grid, Pagination, Stack, styled, TextField, Typography } from '@mui/material'
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
    margin: "4px"
})

const JobDetails = () => {
    return (
        <Container>
            <Grid container>

                <Grid item xs={12} md={4}>

                    <Box sx={{ padding: { xs: "50px 0", md: "50px" } }}>

                        <Typography variant='h5'>Search Job</Typography>
                        <TextField sx={{ width: { xs: "100%", md: "250px" } }} label="Job title" variant="standard" />
                        <TextField sx={{ width: { xs: "100%", md: "250px" } }} label="City" variant="standard" />

                        <StyledButton sx={{ width: { xs: "100%", md: "250px" } }}>SEARCH JOBS</StyledButton>


                        <Box mt={6} sx={{ display: { xs: "none", md: "block" } }}>

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


                        <Box mt={6} sx={{ display: { xs: "none", md: "block" } }}>

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

                    <Box my={7} sx={{ background: "#fff", padding: "25px 30px" }}>

                        <Stack flexDirection="row" justifyContent='space-between' alignItems='center'>
                            <Box>
                                <Typography variant='h5'>Registered Nurse (RN)</Typography>
                                <Typography variant='p' component='p'>Hospital Name - New York, NY</Typography>
                            </Box>

                            <Box>
                                <Typography color="gray" fontSize='14px' variant='p' component='p'>POSTED ON</Typography>
                                <Typography fontSize='14px' variant='p' component='p'>April 21, 2022 at 3:30 PM</Typography>
                            </Box>

                        </Stack>

                        <Typography mb={2} mt={1} variant='p' component='p'>Job Type</Typography>
                        <Typography mt={3} fontWeight='700' variant='p' component='p'>RESPONSIBILITIES</Typography>

                        <Typography sx={{ margin: "5px 0", lineHeight: "1.7", color: "#6B6B6B" }} variant='p' component='p'>London Wellness Academy provides all the training for you to become a successful Medi-Spa physician at sea prior to joining your ship. The training takes place in Miami, Florida (USA) under the direction of Dr. Brad Herman, Medical Director at OneSpaWorld and a licensed Florida physician.

                            During training and once on board, you will be expected to have excellent communication skills and be able to provide esthetic medical treatments safely and effectively to address the concerns of your patients. This is an exciting opportunity to meet new people every day and to learn new cultures, all whilst managing your very own aesthetic medical clinic at sea.</Typography>

                        <Typography mt={3} fontWeight='700' variant='p' component='p'>Position Requirements</Typography>

                        <ul className='list'>
                            <li>Must hold a medical degree from a college or university listed in the International Medical Education Directory (IMED)</li>

                            <li>Must have a current, valid medical license to practise medicine in your country or the country where you completed medical school (does not have to be a US license)</li>

                            <li>Minimum 6 months hands-on clinical experience</li>

                            <li>Ability to successfully provide Medi-Spa treatments</li>

                            <li>Comfortable working in a sales-oriented job (sales training will be provided)</li>

                            <li>Basic computer knowledge</li>

                            <li>Fluency in English required</li>

                        </ul>

                        <Typography mt={4} fontWeight='700' variant='p' component='p'>Summary of Responsibilities:</Typography>

                        <ul className='list'>
                            <li>Conducting consultations whereby you effectively inform and educate your patients about specific concerns</li>
                            <li>Having strong, friendly follow up necessary post treatment with patients to ensure desired results</li>
                            <li>Understanding the problems and concerns of your patients</li>
                            <li>Maintaining inventory and keeping waste to a minimum</li>
                            <li>Maintaining complete and accurate medical records</li>
                            <li>Being a patient, sympathetic listener</li>
                            <li>Being on time for work, prompt for each appointment</li>
                        </ul>

                        <StyledButton>Apply Now</StyledButton>

                    </Box>

                    <Typography mb={3} variant='h5'>Similar Jobs</Typography>

                    <Box mb={15}>
                        <Card data={{
                            title: "Registered Nurse",
                            hospital: "Hospital Name - New York, NY",
                            desc: "Responsible for coordination of care to meet identified needs of the patient/family. Supervises the management of patient care utilizing critical thinking and nursing process, discharge planning, resource identification, linking and scheduling patients...",
                            postedOn: "3 day ago"
                        }} />

                        <Card data={{
                            title: "Registered Nurse",
                            hospital: "Hospital Name - New York, NY",
                            desc: "Responsible for coordination of care to meet identified needs of the patient/family. Supervises the management of patient care utilizing critical thinking and nursing process, discharge planning, resource identification, linking and scheduling patients...",
                            postedOn: "3 day ago"
                        }} />

                        <Card data={{
                            title: "Registered Nurse",
                            hospital: "Hospital Name - New York, NY",
                            desc: "Responsible for coordination of care to meet identified needs of the patient/family. Supervises the management of patient care utilizing critical thinking and nursing process, discharge planning, resource identification, linking and scheduling patients...",
                            postedOn: "3 day ago"
                        }} />
                    </Box>

                </Grid>

            </Grid>
        </Container>
    )
}

export default JobDetails