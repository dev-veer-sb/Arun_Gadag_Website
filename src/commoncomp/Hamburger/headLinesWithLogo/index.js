import React from 'react'
import './headLinesWithLogo.css';
import image from '../../../images/AG LOGO.jpg'

const MainContentInAllPage = () => {
  return (
    <div className="content">
                <img src={image} alt="Logo" className="image" />
                <h1 className="centered-text">ARUN GADAG ASSOCIATES</h1>

            </div>
  )
}

export default MainContentInAllPage