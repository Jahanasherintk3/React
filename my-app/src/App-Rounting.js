import React, { Component } from 'react'
import Navbaraxios from './Axios/Navbaraxios'
import Home from './Routing/Home'
import About from './Routing/About'
import Services from './Routing/Services'
import Contact from './Routing/Contact'
import User from './Axios/User'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
class App extends Component{
    render(){
        return(
            <div>
                
                <Router>
                    <Navbaraxios/>
                    <Routes>
                        <Route path="/users" element={<User/>}/>
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

