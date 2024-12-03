import React from 'react'
import "./index.css"
import Socialproofsection from './Components/Socialproofsection'
import CTAsection from './Components/CTAsection'
import Footer from './Components/Footer'
import FeaturesSection from './Components/FeatureSection'
import TestimonialSection from './Components/TestomonialSection'
import HeaderSection from './Components/HeaderSection'
import Nav from './Components/Nav'
import Content from './Components/Content'
import FAQ from './Components/Faq'
import Blog from './Components/Blog'



const App = () => {
  return (
    <div>
      <Nav></Nav>
      <HeaderSection></HeaderSection>
      <Socialproofsection></Socialproofsection>
      <FeaturesSection></FeaturesSection>
      <TestimonialSection></TestimonialSection>
      <Content></Content>
      <FAQ></FAQ>
      <Blog></Blog>
      <CTAsection></CTAsection>
      <Footer></Footer>
    </div>
  )
}

export default App