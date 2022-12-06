import React, { Component } from 'react'
//import Navbar from './Navbar/Navbar'
//import Message from './Sample/Message'
//import Movie from './Sample/Movie'
//import Student from './Sample/Student'
//import Students2 from './Sample/Students2'
//import Prop1 from './Props/Prop1'
//import Prop2 from './Props/Prop2'
//import CompA from './Props/CompA'
//import CompB from './Props/CompB'
//import React, { Component } from 'react'
import Navbar from './Routing/Navbarrouting'
import Home from './Routing/Home'
import About from './Routing/About'
import Services from './Routing/Services'
import Contact from './Routing/Contact'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
class App extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}
   
export default App;

