import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About';
import Contact from './pages/Contact';
import FindJobs from './pages/FindJobs';
import Homepage from './pages/Homepage'
import JobDetails from './pages/JobDetails';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App