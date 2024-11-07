import { useState } from 'react'

import projectsData from './datas/projects.json'

import Header from './components/Header'
import AboutMe from './components/Aboutme'
import SocialNetwork from './components/SocialNetwork'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import './App.css'
import './App-mobile.css'





function App() {
  return (
    <>
     <Header />
     <AboutMe profileImg={'assets/profile-picture.jpeg'}/>
     <SocialNetwork/>
     <Skills />
     <Tools />
     <section id='projects' >
      <Projects projects={projectsData}/>
     </section>
     
     <section id='contact'>
      <ContactForm />
     </section>
     
     <Footer />
    </>
  )
}

export default App
