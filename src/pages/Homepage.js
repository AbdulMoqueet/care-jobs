import React from 'react'

import { Box } from '@mui/material'
import Hero from '../components/home/Hero'
import Discover from '../components/home/old__Discover'
import Cards from '../components/home/Cards'
import Full from '../components/home/Full'
import JobAlert from '../components/home/JobAlert'


const Homepage = () => {
  return (
    <Box>
        <Hero/>
        <Discover/>
        <Cards/>
        <Full/>
        <JobAlert/>
    </Box>
  )
}

export default Homepage