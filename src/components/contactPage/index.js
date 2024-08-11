


import React from 'react';
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo';
import './contactPage.css';
import contactImage from '../../images/contact.png';
import locationImage from '../../images/location.png';
import mailImage from '../../images/maillogo.png';
import contactUs from '../../images/Contact Us.gif';




const Contact = () => {
  // Define an array of objects with the unique data for each card
  const cardData = [
    {
      title: <b>Location</b>,
      Address: `Arun A. Gadag, Advocate
      #14. SNS Plaza.
      No. 45. 4th Floor.
      Kumara Krupa Road.
      Bangalore 560 001`,
        image:locationImage,
    },
    {
      title: <b>Gmail</b>,
      mail: <a href="mailto:arungadagassociates@gmail.com">arungadagassociates@gmail.com</a>,
 image:mailImage,
    },
    {
      title: <b>Contact Us</b>,
      office: '08040900228',
      mobile: '9945482525',
   image:contactImage,
    }
  ];

  return (
    <div>
      <MainContentInAllPage />

      {/* About Contact Section */}
      <section className="about-advocate">
        <h2>Contact Us</h2>
        <p>
        Get in touch with us for expert legal advice and representation. Whether you have a question about your case, need assistance with legal documentation, or are seeking professional guidance, we are here to help. Please use the contact form below, or reach out to us directly through the provided phone number or email address. We look forward to assisting you with your legal needs and ensuring your rights are effectively protected.
         </p>
      </section>

      {/* Contact Cards Section */}
      <section className="about-advocate">
        <div style={{ display: 'flex' }}>
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <div className="iconDiv">
                <img src={card.image} alt="icon" className="icons" style={{width:'60%'}}/>
              </div>

              <div className="card-body">
              <div>{card.title}</div>
                {card.office && (
                  <div>
                    Office : {card.office}
                    <br />
                    Mobile : {card.mobile}
                  </div>
                )}
                {card.mail && (
                  <div>
                    Email : {card.mail}
                  </div>
                )}
                {card.Address && (
                  <div>
                    Address : {card.Address}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-advocate">
        <div style={{display:'flex'}}>
          <div  className='contactContentdiv'>
<div className='bodyDiv'>
    <div className="containerContact">
        <h1>Contact Us</h1>
      <form action="https://fabform.io/f/{insert-form-id-here}" method="post"/>
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="phone">Phone No:</label>
                <input type="phone" id="phone" name="phone" required/>
            </div>
            <div className="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
     </div>
</div>
          </div>
          <div className='contactGifdiv'>
          <img src={contactUs} alt="icon" className='contactGif'/>
          </div>
        </div>
        </section>

      {/* Google Map Section */}
      <section className="about-advocate">
        <div className="responsivemap">
<iframe title="This is a google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.767114986225!2d77.5775234738105!3d12.986741814548699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1615ceb83cfb%3A0xcc860d96d18a6c2a!2sSNS%20Plaza%2C%20Kumarakrupa%20Rd%2C%20Kumara%20Park%20East%2C%20Seshadripuram%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1723207085116!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
