import React from 'react'

import { Box } from '@mui/material'
import Hero from '../components/home/Hero'
import Discover from '../components/home/Discover'
import Cards from '../components/home/Cards'
import New from '../components/home/New'
import JobAlert from '../components/home/JobAlert'


const Homepage = () => {
  return (
    <Box>
        <Hero/>
        <Discover/>
        <Cards/>
        <New/>
        <JobAlert/>
    </Box>
  )
}

export default Homepage