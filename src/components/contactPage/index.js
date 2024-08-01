import React from 'react'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import './contactPage.css'
import iggg from '../../images/AG LOGO.jpg';


const Contact = () => {




  return (
    <div>
      <MainContentInAllPage />
      <section className="about-advocate">
        <h2>About Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi,
          eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
        </p>
      </section>

      <section className="about-advocate">
        <div style={{ display: 'flex' }}>
          {[1, 2, 3].map(() => {
            return (
              <div className="card">
                <div className='iconDiv'>
                <img src={iggg} alt="veer" className='icons'></img>
                </div>

                <div className="card-body">
                  <div>Contact Us</div>
                  <div>69586654745</div>
                  <div>demopoc.website.com</div>

                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="about-advocate">
        <div className='responsivemap'>
          <iframe title="This is a google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.955197686978!2d77.6205417738092!3d12.910601116215288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ee581ee555%3A0xe961ec4fb498d9ef!2sEbenezer%20Brethren%20Assembly!5e0!3m2!1sen!2sin!4v1722516622147!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact