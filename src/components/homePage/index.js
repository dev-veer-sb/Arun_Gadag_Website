import React from 'react'
import './homePage.css'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import law1 from '../../images/law1.jpg';
import law2 from '../../images/law2.jpg';

import law3 from '../../images/law3.jpg';
import law4 from '../../images/law5.jpg';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/gallery');
  };
  return (
    <div >
      <div>
        <MainContentInAllPage />
        <section className="about-advocate" data-aos="fade-up">
          <div style={{color:'black',fontFamily:'sans-serif',}}>
          <h2 style={{fontWeight:'800'}}>About Advocate</h2>
          <p style={{fontWeight:'600'}}  >
            Established Expertise:
          </p>
          <p>
            Founded by Arun A. Gadag in 2014, our firm benefits from the invaluable guidance of Sri. Ashok. S. Gadag, a retired District & Sessions Judge with over 30 years of experience in the judiciary. His profound understanding of the legal system enhances our practice's effectiveness.
          </p>
          <p style={{fontWeight:'600'}}>
            Comprehensive Experience:
          </p>
          <p>
            With a wealth of experience in both civil and criminal litigation, our firm adeptly handles a broad spectrum of legal matters. This includes complex cases involving banking, insurance, land disputes, matrimonial issues, commercial transactions, international trade, construction, environmental law, employment, debt collection, criminal law, arbitration, and mediation.
</p>
<p style={{fontWeight:'600'}}>
            Track Record of Success:
            <p/>
            <p style={{fontWeight:'400'}}>
            Our practice is distinguished by a proven track record of success in representing clients before various trial courts, consumer forums, and preliminary courts across Bangalore. We pride ourselves on our ability to deliver favorable outcomes through diligent representation and strategic legal approaches.
            </p>
<p style={{fontWeight:'600'}}>
            Core Values:
            </p>
            <p style={{fontWeight:'400'}}>
            We believe in the principles that hard work is never in vain and that time is a critical ingredient in the recipe for success. Our commitment is to provide timely and effective legal solutions, always balancing rigorous effort with strategic wit and eloquence.
            </p>
          </p>
          <p>
          Dedicated Service:
          </p>
          <p>
Our firm is dedicated to addressing client grievances promptly and providing expert legal guidance. We combine a deep understanding of litigation intricacies with a client-focused approach to ensure comprehensive and effective legal solutions.
</p><p style={{fontWeight:'600'}}>
Client-Centric Approach:
</p><p>

We prioritize building strong relationships with our clients, offering personalized attention and tailored legal strategies. Our goal is to navigate complex legal landscapes with clarity and precision, ensuring that each client receives the highest standard of legal service.
</p><p style={{fontWeight:'600'}}>
Commitment to Excellence:
</p><p>
Our dedication to excellence drives us to continuously improve our legal practices and stay updated with the latest legal developments. We are committed to upholding the highest ethical standards and delivering results that exceed our clients' expectations.

          </p>
          </div>
        </section>


      <div>
        
          <div style={{padding:'2%'}} >
          <h1>Our Partners</h1>
            <div style={{ display: 'flex' }}>
              {[law3, law2, law4].map((item) => {
                return (
                  <div className='partner-img'>
                    <img src={item} alt="veer" className='homePageImgone'></img>
                    <h4>Name : Veeresh S B</h4>
                    <h4>Designation : Senior Software Developer</h4>

                    </div>
                )
              })}
            </div>
          </div>
        </div>

        <section className="about-advocate">
          <h2>Gallery</h2>
          <div >
            <div style={{ display: 'flex' }}>
              {[law1, law2, law4, law3].map((item) => {
                return (
                  <div className="card">

                    <img src={item} alt="veer" className='homePageImg'></img>
                  </div>
                )
              })}
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                className="button"
                onClick={() => {
                  handleClick()
                }}
              >View More</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home