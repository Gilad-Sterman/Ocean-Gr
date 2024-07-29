import { useEffect, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Method } from './cmps/Method'
import { Services } from './cmps/Services'
import { About } from './cmps/About'
import { AppFooter } from './cmps/AppFooter'
import { Team } from './cmps/Team'
import { ContactForm } from './cmps/ContactForm'
import { Contact } from './cmps/Contact'


function App() {
  const [showForm, setShowForm] = useState(false)

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
        <AppHeader showForm={showForm} setShowForm={setShowForm}/>
        <Hero showForm={showForm} setShowForm={setShowForm}/>
        <Services />
        <Method />
        <Team />
        <Contact />
        <AppFooter showForm={showForm} setShowForm={setShowForm}/>
        {showForm && <ContactForm showForm={showForm} setShowForm={setShowForm} />}
      </section>
    </>
  )
}

export default App
