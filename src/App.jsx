import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

import Topnav from './components/topnav/topnav'
import Services from  './components/services/services'
import Mywork from './components/mywork/mywork'
import Resume from './components/resume/resume'
import Contact from './components/contact/contact'
import './app.css'

const App = () => {
  return (
    <div className='layout'>
      <Header/>
      <div className="content">
        <Topnav/>
        <Hero />
        
        <Services/>
        <Mywork/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  )
}

export default App