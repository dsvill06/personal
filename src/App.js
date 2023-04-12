import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate,SearchDashboard, useLocation} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Navigation} from './Components/Navbar'
import {Footer} from './Components/Footer'
import {Jumbotron} from './Components/Jumbotron'
import {MDBContainer} from 'mdb-react-ui-kit'
import './App.css'
import {AnimatePresence, motion} from 'framer-motion'

export default function App() {
  
    return (
      <div>
        <Navigation/>
          <Router>
            <AnimatePresence>
              <Routes>
                    <Route path="" element={<Navigate to="/home" />} />
                    <Route path="/personal" element={<Navigate to="/home" />} />
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='*' element={<NoMatch/>}/>
                  </Routes>
            </AnimatePresence>
            </Router>
          <Footer/>
      </div>
    );
  }
