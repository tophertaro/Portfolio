import { useState } from 'react'

import Header from './components/Header'
import AboutMe from './components/Aboutme'
import SocialNetwork from './components/SocialNetwork'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import profileImg from './assets/profile-picture.jpeg'
import './App.css'





function App() {
  return (
    <>
     <Header />
     <AboutMe profileImg={profileImg}/>
     <SocialNetwork/>
     <Skills />
     <Tools />
     <section id='projects'>
      <Projects />
     </section>
     
     <section id='contact'>
      <ContactForm />
     </section>
     
     <Footer />
    </>
  )
}

export default App
