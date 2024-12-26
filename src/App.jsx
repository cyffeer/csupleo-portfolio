import React from "react";
import Navbar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Internship from "./Components/Services/Internship";
import Education from "./Components/Services/Education";
import Experience from "./Components/Services/Experience";
import MyProject from "./Components/MyWork/MyProject";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import MyAward from "./Components/MyWork/MyAward";
import MyCertification from "./Components/MyWork/MyCertification";


const App = () => {
  return (
    <div>   
      <Navbar/>
      <Hero/>
      <About/>
      <Internship/>
      <Education/>
      <Experience/>
      <MyProject/>
      <MyCertification/>
      <MyAward/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;