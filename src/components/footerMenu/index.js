import React from 'react'
import './footerMenu.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div style={{width:'100%'}}>
          <h6 style={{textAlign:'center',margin:'0',padding:'2px',}}>Arun Gadag Associates</h6>
            <li>Expert legal representation and strategic counsel for your peace of mind.</li>
            <li>Dedicated to defending your rights and navigating legal challenges with expertise.</li>
            <li>Providing professional legal advice and robust advocacy to achieve the best outcomes.</li>
            <li>Committed to protecting your interests with skilled legal representation and advice.</li>
            <li>Your trusted advocate for comprehensive legal solutions and effective defense.</li>
        </div>

        
      </div>
      <hr/>
    </div>
    <div style={{width:'100%', textAlign:'center'}}>
          <ul className="footer-links">
          <Link to="/home">Home</Link>&nbsp;&nbsp;
          <Link to="/gallery">Gallery</Link>&nbsp;&nbsp;
            <Link to="/about">About Us</Link>&nbsp;&nbsp;
            <Link to="/contact">Contact Us</Link>&nbsp;&nbsp;
            
          </ul>
        </div>
    <div >
    
    </div>
</footer>
  )
}

export default Footer