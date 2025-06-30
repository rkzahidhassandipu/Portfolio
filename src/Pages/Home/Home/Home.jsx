import React from 'react'
import Banner from '../Banner/Banner'
import About from '../AboutMe/About'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import GetInTouch from '../GetInTouch/GetInTouch'
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience'

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Skills />
      
      {/* <ProfessionalExperience /> */}
      <GetInTouch />
    </div>
  )
}

export default Home
