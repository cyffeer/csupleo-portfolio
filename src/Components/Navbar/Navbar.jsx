import React, { useRef, useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.png";
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [hasClickedNav, setHasClickedNav] = useState(false);
  const menuRef = useRef();
  const navbarRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
    setIsMenuOpen(false);
  };

  const handleNavClick = (section, event) => {
    setMenu(section);
    closeMenu(); // Close mobile menu if open
    
    // Hide navbar immediately
    setTimeout(() => {
      setIsNavbarVisible(false);
      setHasClickedNav(true);
    }, 500); // Small delay to allow scroll to start
  };

  // Show navbar only when at top of page (after user has clicked a nav item)
  useEffect(() => {
    const handleScroll = () => {
      if (hasClickedNav && window.scrollY === 0) {
        setIsNavbarVisible(true);
        setHasClickedNav(false); // Reset the flag
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasClickedNav]);

  return (
    <div ref={navbarRef} className={`navbar ${!isNavbarVisible ? 'hidden' : ''}`}>
      <img src={logo} alt="Cyfer" onClick={() => handleNavClick("home")} />
      
      {isMenuOpen ? (
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
      ) : (
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      )}
      
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink 
            className="anchor-link" 
            href="#home"
            onClick={() => handleNavClick("home")}
          >
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#about"
            onClick={() => handleNavClick("about")}
          >
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
         <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#intern"
            onClick={() => handleNavClick("experiences")}
          >
            <p>Experiences</p>
          </AnchorLink>
          {menu === "experiences" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#services"
            onClick={() => handleNavClick("services")}
          >
            <p>Leadership</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#work"
            onClick={() => handleNavClick("work")}
          >
            <p>Latest Projects</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#certifications"
            onClick={() => handleNavClick("certifications")}
          >
            <p>Certifications</p>
          </AnchorLink>
          {menu === "certifications" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#education"
            onClick={() => handleNavClick("education")}
          >
            <p>Education</p>
          </AnchorLink>
          {menu === "education" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#awards"
            onClick={() => handleNavClick("awards")}
          >
            <p>Awards</p>
          </AnchorLink>
          {menu === "awards" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink 
          className="anchor-link" 
          offset={50} 
          href="#contact" 
          onClick={() => handleNavClick("contact")}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;