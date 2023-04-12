
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo1 from '../assets/img/beerMug.png';
import icon1 from '../assets/img/nav-icon1.svg';
import icon2 from '../assets/img/nav-icon2.svg';
import icon3 from '../assets/img/nav-icon3.svg';
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    //scroll effect
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      
      //what happend when we scroll
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
      //<Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo1} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/pairing" className={activeLink === 'beermenus' ? 'active navbar-link' : 'navbar-link'}onClick= {() => onUpdateActiveLink('beermenus')}>Beer Menu</Nav.Link>
              <Nav.Link href="/beerbot" className={activeLink === 'bot' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('beerbot')}>Beer Bot</Nav.Link>
              <Nav.Link href="/breweries" className={activeLink === 'breweries' ? 'active navbar-link' : 'navbar-link'}onClick= {() => onUpdateActiveLink('breweries')}>Breweries</Nav.Link>
              <Nav.Link href="/ride" className={activeLink === 'ride' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('ride')}>Ride</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={icon1} alt="" /></a>
                    <a href="#"><img src={icon2} alt="" /></a>
                    <a href="#"><img src={icon3} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    //</Router>
    );
}
  
function CustomLink ({href, children,...props}) {
    const path = window.location.pathname
    return (
        <li className={path == href ? "active":""}>
            <a href={href} {...props}>
                {children}</a>
        </li>
    )
}
