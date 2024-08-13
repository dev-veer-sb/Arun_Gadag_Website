import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import litigation from '../../images/litigation.png'
import nonlitigation from '../../images/nonlitigation.png'
import realestate from '../../images/realestate.png'
import './servicePage.css'


const Services = () => {
  const navigate = useNavigate();

  const handleClick = (value) => {
    navigate(value);
  };
  return (
    <div>
    <MainContentInAllPage/>
    <section className="about-advocate">
                    <h2>About Services</h2>
                    <p>
                    At our firm, we offer comprehensive legal solutions tailored to meet the unique needs of each client. With expertise across various domains, including civil and criminal litigation, corporate law, family law, and alternative dispute resolution, we are committed to delivering expert guidance and representation. Our experienced team provides strategic counsel and effective advocacy, ensuring that your rights and interests are protected. Whether you're navigating complex legal challenges or seeking advice on personal or business matters, we are here to support you every step of the way.
                     </p>     
            </section>

            <div className='our-services'>
              <div>
              <img src={litigation} alt='image1'></img>
              <div>
              <h4>Litigation</h4>
              <p>
              Litigation before varied for a such as the Supreme Court of India, High Court of Karnataka & other High Courts in India, Civil and Criminal Courts, quasi-judicial bodies such as Industrial/Labour Tribunals.
              </p>
              </div>
              <div>
              <button
                className="button"
              onClick={()=>{
                handleClick('/litigation')
              }}
              >Read More</button>
              </div>
              </div>
              <div>
              <img src={nonlitigation} alt='image1'></img>
              <div>
              <h4>Non-Litigation and corporate</h4>
              <p>All aspects of commercial and company related affairs, including advice, drafting and structuring corporate transactions and business contracts, shareholders agreements..
              </p>
              </div>
              <div>
              <button
                className="button"
                onClick={()=>{
                  handleClick('/nonlitigation')
                }}
              >Read More</button>
              </div>
              </div>
              <div>
              <img src={realestate} alt='image1'></img>
<div>
<h4>Conveyancing and Real Estate</h4>
<p>Advice and offering turnkey solutions related to for Conveyancing and real estate transactions pertaining to commercial, agricultural, industrial, residential and other properties including verification..
</p></div>
                <div>
              <button
                className="button"
                onClick={()=>{
                  handleClick('/realestate')
                }}
              >Read More</button>
              </div>
              </div>

            </div>
    </div>
  )
}

export default Services