import React from 'react'
import { Card, CardContent, Container, Grid, Typography, Icon, Box } from '@mui/material'
import { BsCheck2Circle } from 'react-icons/bs'
import { CgBox } from 'react-icons/cg'
import { IoGiftOutline } from 'react-icons/io5'



const Cards = () => {
    return (
        <Container sx={{ padding: "80px 0", textAlign: "center" }}>
            <Typography fontFamily='Barlow Condensed' fontSize={{ xs: "40px", md: "60px" }} variant='h4'>Healthcare Career Search Made Simple</Typography>


            <Grid container spacing={6} mt={3}>
                <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
                    <Card sx={{ width: 320, minHeight: 300, paddingBottom: "40px" }} elevation={0}>
                        <CardContent>


                            {/* <BsCheck2Circle style={{ fontSize: "120px", marginTop: "30px" }} /> */}
                            <img style={{marginTop: "30px"}} src="./easy-to-use-icon.png" alt="" />

                            <Box sx={{ marginTop: "30px", padding: "0 20px" }}>
                                <Typography variant='h5' fontWeight="bold" mb={2}>Easy to use</Typography>
                                <Typography lineHeight={1.7} color="#505050" variant='p' component='p'>Search by title, skill or keyword. Select a location and we’ll find all the open positions in your area.</Typography>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
                    <Card sx={{ width: 320, minHeight: 300, paddingBottom: "40px" }} elevation={0}>
                        <CardContent>


                            {/* <CgBox style={{ fontSize: "120px", marginTop: "30px" }} /> */}

                            <img style={{marginTop: "40px"}} src="./Union.png" alt="" />

                            <Box sx={{ marginTop: "30px", padding: "0 20px" }}>
                                <Typography variant='h5' fontWeight="bold" mb={2}>1,000+ job types</Typography>
                                <Typography lineHeight={1.7} color="#505050" variant='p' component='p'>Our system has cataloged thousands of job types and can locate very specific roles.</Typography>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
                    <Card sx={{ width: 320, minHeight: 300, paddingBottom: "40px" }} elevation={0}>
                        <CardContent>


                            {/* <IoGiftOutline style={{ fontSize: "120px", marginTop: "30px" }} /> */}

                            <img style={{marginTop: "30px"}} src="./gift.png" alt="" />


                            <Box sx={{ marginTop: "30px", padding: "0 20px" }}>
                                <Typography variant='h5' fontWeight="bold" mb={2}>100% Free</Typography>
                                <Typography lineHeight={1.7} color="#505050" variant='p' component='p'>We are on a mission to make healthcare recruiting easier for job seekers and employers.</Typography>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>


            </Grid>


        </Container>
    )
}

export default Cards