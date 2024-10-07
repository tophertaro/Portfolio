import { useState } from 'react'
import Header from './components/Header'
import './App.css'




function App() {

  const navLinks = [
    {label: 'Projects'},
    {label: 'Contact'}
  ]

  return (
    <>
     <Header links={navLinks}/>
    </>
  )
}

export default App
