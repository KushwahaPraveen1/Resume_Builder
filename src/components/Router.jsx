import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Education from "./Education";
import Experience from "./Experience";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from "./Footer";
import Skills from "./Skills"
import Verify from "./Verify";
import Personal from "./Personal";
// import { Footer } from "./Footer";

function Routers() {
  return (
   <>
     <Router>
      <Nav></Nav>
    <Routes>
    <Route  exact path='/'element = {<Home />} /> 
    <Route  path='/login'element = {<Login />} />   
    <Route path='/education' element = {<Education/>}/>   
    <Route path='/experience' element = {<Experience/>}/>   
    <Route path='/personal-details' element = {<Personal/>}/>
    <Route path='/skills' element = {<Skills/>}/>
    <Route path='/languages' element = {<Sidebar/>}/>
    <Route path='/verify' element = {<Verify/>}/>
    <Route path='/skills' element = {<Skills/>}/>
    <Route path='/verify' element = {<Verify/>}/>
    <Route path='/verify' element = {<Verify/>}/>
    

    </Routes>
     </Router>
   <Footer/>
   </>
  );
}

export default Routers;