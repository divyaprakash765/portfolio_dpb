import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/contact"
import Portfolio from "./components/portfolio"
import Resume from "./components/Resume"
import Testimonials from "./components/testimonial"
import { Route,Routes } from "react-router-dom";
import All from "./template/All"
import Dsa from "./template/Dsa"
import Web_design from "./template/web_design"

function App(){
  return(
    <div className="w-full min-h-screen bg-[#D8B8B8] text-white">
     <Routes>

      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/resume" element = {<Resume/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/portfolio" element = {<Portfolio/>}>
      <Route index element = {<All/>} />
      <Route path = "web_design" element = {<Web_design/>} />
      <Route path = "dsa" element = {<Dsa/>} />
      </Route>
      <Route path = "/testimonials" element = {<Testimonials/>}/>

      </Routes>
    </div>
  )
}

export default App;