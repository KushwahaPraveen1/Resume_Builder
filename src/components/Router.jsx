import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Education from "./Education";
import Experience from "./Experience";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from "./Footer";
import Personal from "./Personal";
import Verify from "./Verify";
// import { Footer } from "./Footer";

function Routers() {
  return (
   <>
     <Router>
      <Nav></Nav>
    <Routes>
    <Route  exact path='/'element = {<Home />} /> 
    <Route  path='/login'element = {<Login />} />   
    <Route path = '/verify' element = {<Verify/>}/>
    <Route path='/education' element = {<Education/>}/>   
    <Route path='/experience' element = {<Experience/>}/>   
    <Route path='/sidebar' element = {<Sidebar/>}/>
    <Route path='/personal' element = {<Personal/>}/>
    <Route path='/skills' element = {<Skills/>}/>
    </Routes>
     </Router>
   <Footer/>
   </>
  );
}

export default Routers;