import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Hamburger from '../../commoncomp/Hamburger';
import './navigationMenu.css'
import logo from '../../images/download.png';


const Navigation = () => {
const [showNavbar, setShowNavbar] = useState(false);
const [ setDropdownOpen] = useState(false);
const [timerId, setTimerId] = useState(null);
const navigate = useNavigate();

// const handleMouseEnter = () => {
//   setDropdownOpen(true);
// };

// const handleMouseLeave = () => {
//   clearTimeout(timerId); // Clear any existing timer
//   const id = setTimeout(() => {
//     setDropdownOpen(false);
//   }, 200); // 300ms delay before closing
//   setTimerId(id);
// };


const handleClick = () => {
  navigate('/home');
};

const handleShowNavbar = () => {
  setShowNavbar(!showNavbar);
};

return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" onClick={()=>{
          handleClick()
        }}>
        <img src={logo} alt="Logo" className="App-logo" data-aos="fade-up" />

        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <b>
              <i class="fas fa-home"></i>&nbsp;
              <NavLink to="/home">HOME</NavLink>
              </b>
            </li>
            <li>
            <b>
            <i class="fa-solid fa-address-card"></i> &nbsp;
              <NavLink to="/about">ABOUT US</NavLink>
              </b>
            </li>
            <li 
          className="dropdown" 
          // onMouseEnter={handleMouseEnter} 
        >
          <b> 
          <i class="fa-solid fa-gavel"></i> &nbsp;
          <NavLink to="/service">SERVICES</NavLink>
          </b>
          {/* {isDropdownOpen && (
            <div className="dropdown-content"  onMouseLeave={handleMouseLeave}    >
              <div className='dropdown-pages'>
              <NavLink to="/litigation">Litigation</NavLink>
              </div>
              <div className='dropdown-pages'>
              <NavLink to="/nonlitigation">Non Litigation</NavLink>
              </div>
              <div className='dropdown-pages'>
              <NavLink to="/realestate">Conveyancing & Real Estate</NavLink>
              </div>
            </div>
          )} */}
        </li>
            <li>
              <b>
              <i class="fa-solid fa-scale-balanced"></i>&nbsp;
              <NavLink to="/practice">AREA OF PRACTICE</NavLink>
              </b>
            </li>
            <li>
              <b>
              <i class="fa-brands fa-envira"></i>&nbsp;
              <NavLink to="/gallery">GALLERY</NavLink>
              </b>
            </li>
            <li>
              <b>
              <i class="fa-solid fa-address-book"></i>&nbsp;
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