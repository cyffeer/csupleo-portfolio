import React from "react";
import Navbar from "./Components/Navbar/NavBar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Internship from "./Components/Services/Internship.jsx";
import Education from "./Components/Services/Education.jsx";
import Experience from "./Components/Services/Experience.jsx";
import MyProject from "./Components/MyWork/MyProject.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MyAward from "./Components/MyWork/MyAward.jsx";
import MyCertification from "./Components/MyWork/MyCertification.jsx";

//hello
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