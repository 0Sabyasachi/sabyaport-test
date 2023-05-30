import React from 'react'
import { Route , Routes , Navigate } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'

const App = () => {

  const date = new Date()

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/service' Component={Services} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/contact' Component={Contact} />
        <Route path='*' Component= {() => <Navigate to="/" />} />
      </Routes>
      <footer className='footer'>©{date.getFullYear()} Sabyasachi PortFolio . All Rights reserved | Terms and Conditions</footer>
    </>
  )
}

export default App