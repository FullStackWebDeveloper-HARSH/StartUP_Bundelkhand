import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Page2 from '../components/Page2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import CategoryGrid from '../components/CategoryGrid'
import Testimonial from '../components/Testimonial'
import NetworkingSection from '../components/NetworkSection'
import MasterclassSection from '../components/MasterclassSection'
import CustomerSection from '../components/CustomerSection'
import FundingSection from '../components/FundingSection'

import Footer from '../components/Footer'

const App = () => {
  return (
    <div className='parent'>
      <Navbar/>
      <LandingPage/>
      <Page2/>
     <Section3/>
     <Section4/>
     <CategoryGrid/>
     <Testimonial/>
     <NetworkingSection/>
     <MasterclassSection/>
     <CustomerSection/>
     <FundingSection/>
  
     <Footer/>
    </div>
  )
}

export default App