


import React from 'react';
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo';
import './contactPage.css';
import contactImage from '../../images/contact.png';
import locationImage from '../../images/location.png';
import mailImage from '../../images/maillogo.png';



const Contact = () => {
  // Define an array of objects with the unique data for each card
  const cardData = [
    {
      title: 'Location',
      location: `Arun A. Gadag, Advocate
      #14. SNS Plaza.
      No. 45. 4th Floor.
      Kumara Krupa Road.
      Bangalore 560 001`,
        image:locationImage,
    },
    {
      title: 'Gmail',
      mail: 'arungadagassociates@gmail.com',
 image:mailImage,
    },
    {
      title: 'Contact Us',
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
        <h2>About Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi,
          eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
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
                    office: {card.office}
                    <br />
                    mobile: {card.mobile}
                  </div>
                )}
                {card.mail && (
                  <div>
                    email: {card.mail}
                  </div>
                )}
                {card.location && (
                  <div>
                    Location: {card.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Map Section */}
      <section className="about-advocate">
        <div className="responsivemap">
          <iframe
            title="This is a google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.955197686978!2d77.6205417738092!3d12.910601116215288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ee581ee555%3A0xe961ec4fb498d9ef!2sEbenezer%20Brethren%20Assembly!5e0!3m2!1sen!2sin!4v1722516622147!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
