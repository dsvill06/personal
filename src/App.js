import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Navigation} from './Components/Navbar'
import {Footer} from './Components/Footer'
import {Jumbotron} from './Components/Jumbotron'
import {MDBContainer} from 'mdb-react-ui-kit'

class App extends Component{
  render() {
    return (
      <>
        <Navigation/>
        <Jumbotron/>
        <MDBContainer className='text-center text-md-start mt-5'>
          <Router>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<NoMatch/>}/>
              </Routes>
            </Router>
        </MDBContainer>
        <Footer/>
      </>
    );
  }
}

export default App;
