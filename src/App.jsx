import { useEffect, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Method } from './cmps/Method'
import { Services } from './cmps/Services'
import { AppFooter } from './cmps/AppFooter'
import { Team } from './cmps/Team'
import { ContactForm } from './cmps/ContactForm'
import { Contact } from './cmps/Contact'
import { Testimonials } from './cmps/Testimonials'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <>
      <section className='full-Page'>
        <AppHeader />
        <Hero />
        <Services />
        <Method />
        <Testimonials />
        <Team />
        <Contact />
        <AppFooter />
      </section>
    </>
  )
}

export default App
