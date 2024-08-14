import Banner from '@/components/myui/Banner'
import Discuss from '@/components/myui/Discuss'
import Expertise from '@/components/myui/Expertise'
import Footer from '@/components/myui/Footer'
import Grow from '@/components/myui/Grow'
import Intro from '@/components/myui/Intro'
import RollingTab from '@/components/myui/RollingTab'
import Testimonials from '@/components/myui/Testimonials'
import React from 'react'



const App = () => {
  return (
    <>

    <Banner/>
    <RollingTab/>
    <Expertise/>
     <Intro/>
     <Grow/>
     <Testimonials/>
     <Discuss/>
     <Footer/>
    </>
  )
}

export default App