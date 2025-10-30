import React from 'react'
import Hero from '../../components/home/Hero'
import OurServices from '../../components/home/OurServices'
import About from '../../components/home/About'
import Process from '../../components/home/Process'
import WhyChoose from '../../components/home/WhyChoose'
import Industries from '../../components/home/Industries'
import Team from '../../components/home/Team'
import Work from '../../components/home/Work'
import Pricing from '../../components/home/Pricing'
import Blog from '../../components/home/Blog'

function Home() {
  return (
    <>
    <Hero/>
    <OurServices/>
    <About/>
    <Process/>
    <WhyChoose/>
    {/* <Industries/> */}
    <Team/>
    <Work/>
    <Pricing/>
    <Blog/>
    </>
  )
}

export default Home