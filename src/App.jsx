import { useState } from 'react'

import Header from './components/Header'
import AboutMe from './components/Aboutme'
import SocialNetwork from './components/SocialNetwork'

import profileImg from './assets/profile-picture.jpeg'
import './App.css'





function App() {

  const navLinks = [
    {label: 'Projects'},
    {label: 'Contact'}
  ]

  const aboutMeText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

  return (
    <>
     <Header links={navLinks}/>
     <AboutMe profileImg={profileImg} aboutMeText={aboutMeText}/>
     <SocialNetwork/>
    </>
  )
}

export default App
