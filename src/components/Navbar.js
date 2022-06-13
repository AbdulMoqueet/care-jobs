import React, { useState } from 'react'
import { AppBar, Box, Container, Stack, Toolbar, styled, Icon, Typography } from '@mui/material'
import { FiMenu } from "react-icons/fi"
import { GrClose } from "react-icons/gr"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)({
    color: "#000",
    textDecoration: "none",
    padding: "10px",
    fontWeight: 700,
    display: "inline-block",
    "&:hover": {
        color: "#BE6C30"
    }
})

const StyledBox = styled(Box)({
    width: "30px",
    height: "30px",
    border: "solid 1px #000",
    display: "grid",
    placeItems: "center"
})

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)

    const closeNav = () => {
        setNavOpen(false)
        document.body.style.overflowY = 'auto'
        window.scrollTo(0,0)
    }

    return (
        <AppBar position='sticky' sx={{ boxShadow: "none" }}>
            <Toolbar sx={{ background: "#F1EDEA", color: "#000" }}>
                <Container>
                    <Stack flexDirection="row" justifyContent="space-between" alignItems="center">

                        <Link style={{ textDecoration: "none", color: "#000" }} to="/" onClick={() => window.scrollTo(0, 0)}>
                            <Box fontSize="28px" letterSpacing={5}><span style={{ color: "#BE6C30", fontWeight: "bold" }}>CARE</span> JOBS</Box>
                        </Link>

                        <Icon sx={{ display: { xxs: "block", md: "none" } }}>
                            <FiMenu onClick={() => {
                                setNavOpen(true)
                                document.body.style.overflowY = 'hidden'
                            }} />
                        </Icon>

                        <Stack sx={{ display: { xxs: "none", md: "block" } }} flexDirection="row" gap="40px">
                            <StyledLink onClick={() => window.scrollTo(0, 0)} sx={{ marginLeft: "30px" }} to="/about">About</StyledLink>
                            <StyledLink onClick={() => window.scrollTo(0, 0)} sx={{ marginLeft: "30px" }} to="/find-jobs?page=1">Find Job</StyledLink>
                            <StyledLink onClick={() => window.scrollTo(0, 0)} sx={{ marginLeft: "30px" }} to="/contact">Contact</StyledLink>
                        </Stack>

                        <Box sx={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            background: "#fff",
                            width: "100%",
                            height: "100vh",
                            padding: "20px 25px",
                            display: navOpen ? "block" : "none"
                        }}>
                            <Container>
                                <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant='h5'>Care Jobs</Typography>
                                    <GrClose fontSize={20} onClick={closeNav} />
                                </Stack>

                                <Box sx={{ 
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)"
                                 }}>
                                    <Stack gap="20px" fontSize="30px">

                                        <StyledLink to="/" onClick={closeNav}>Home</StyledLink>

                                        <StyledLink to="/about" onClick={closeNav}>About</StyledLink>

                                        <StyledLink to="/find-jobs?page=1" onClick={closeNav}>Find Job</StyledLink>

                                        <StyledLink to="/contact" onClick={closeNav}>Contact</StyledLink>

                                    </Stack>

                                </Box>


                                <Box sx={{
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "50%",
                                    transform: "translate(-50%)",
                                    fontSize: "20px"
                                }}>
                                    <Stack justifyContent="center" alignItems="center" flexDirection="row" gap="30px">

                                        <StyledBox>
                                            <BsFacebook />
                                        </StyledBox>

                                        <StyledBox>
                                            <FaLinkedinIn />
                                        </StyledBox>

                                        <StyledBox>
                                            <BsTwitter />
                                        </StyledBox>

                                    </Stack>
                                </Box>
                            </Container>
                        </Box>

                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar