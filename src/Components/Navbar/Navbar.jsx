import React, { useRef, useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.png";
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true); // Set menu open state to true
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false); // Set menu open state to false
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Cyfer" />
      
      {/* Conditionally render menu icons based on isMenuOpen state */}
      {isMenuOpen ? (
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
      ) : (
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      )}
      
      <ul ref={menuRef} className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Leadership and Experiences</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Latest Projects</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#certifications">
            <p onClick={() => setMenu("certifications")}>Certifications</p>
          </AnchorLink>
          {menu === "certifications" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
          {menu === "education" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#awards">
            <p onClick={() => setMenu("awards")}>Awards</p>
          </AnchorLink>
          {menu === "awards" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
