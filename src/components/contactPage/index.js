import React from 'react'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import './contactPage.css'
import iggg from '../../images/ArunG.jpg';

const Contact = () => {



  
  return (
    <div>
    <MainContentInAllPage/>
    <section className="about-advocate">
    <h2>About Contact</h2>
    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi, 
                        eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
                    </p>
    </section>

    <section className="about-advocate">
      <div style={{display:'flex'}}>
      {[1,2,3,4].map(() => {
return (
  <div className="card">
  <img src={iggg} alt="veer"></img>
  <div className="card-body">
    <h2>Contact Us</h2>
    <p>Lorem ipt dolore magna aliqua. Ut enim ad minim veniam.</p>
    <h5>Veeresh</h5>
  </div>
</div>
)
      })}
      </div>
    </section>
    </div>
  )
}

export default Contact