import React from 'react'

import { Box } from '@mui/material'
import Hero from '../components/Hero'
import Discover from '../components/Discover'
import Cards from '../components/Cards'
import New from '../components/New'
import JobAlert from '../components/JobAlert'


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