import React from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from '../../commoncomp/Hamburger';
import './navigationMenu.css'
import logo from '../../images/download.png';


const Navigation = () => {
const [showNavbar, setShowNavbar] = React.useState(false);

const handleShowNavbar = () => {
  setShowNavbar(!showNavbar);
};

return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={logo} alt="Logo" className="App-logo" />

        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <b>
              <NavLink to="/home">HOME</NavLink>
              </b>
            </li>
            <li>
            <b>
              <NavLink to="/about">ABOUT US</NavLink>
              </b>
            </li>
            <li>
              <b>
              <NavLink to="/service">SERVICES</NavLink>
              </b>
            </li>
            <li>
              <b>
              <NavLink to="/practice">AREA OF PRACTICE</NavLink>
              </b>
            </li>
            <li>
              <b>
              <NavLink to="/gallery">GALLERY</NavLink>
              </b>
            </li>
            <li>
              <b>
              <NavLink to="/contact">CONTACT US</NavLink>
              </b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Navigation