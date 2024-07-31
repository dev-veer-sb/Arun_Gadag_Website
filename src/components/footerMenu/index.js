import React from 'react'
import './footerMenu.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
        </div>

        {/* <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
            <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
            <li><a href="http://scanfcode.com/category/android/">Android</a></li>
            <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
          </ul>
        </div> */}

        <div className="col-xs-6 col-md-3">
          <div className='Link'>Quick Links</div>
          <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="www.facebook.com"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a className="twitter" href="www.twitter.com"><i class="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="www.dribbble.com"><i class="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer