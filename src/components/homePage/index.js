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
            <MainContentInAllPage/>
            <section className="about-advocate">
                    <h2>About Advocate</h2>
                    <p>
                        Anu B Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec auctor, nisl eget consectetur sagittis, nisl urna consectetur elit, eget consectetur nisi nisl eget nisi. 
                        Suspendisse potenti. Quisque at condimentum dolor. Etiam bibendum, urna eu vehicula luctus, justo erat venenatis justo, 
                        eget venenatis lacus ligula non odio. Duis ut tincidunt felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Morbi dictum nisi et enim consectetur, eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi, 
                        eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
                    </p>
                    <p>
                        A1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec auctor, nisl eget consectetur sagittis, nisl urna consectetur elit, eget consectetur nisi nisl eget nisi. 
                        Suspendisse potenti. Quisque at condimentum dolor. Etiam bibendum, urna eu vehicula luctus, justo erat venenatis justo, 
                        eget venenatis lacus ligula non odio. Duis ut tincidunt felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Morbi dictum nisi et enim consectetur, eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi, 
                        eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
                    </p>
                  
                </section>
                <section className="about-advocate">
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec auctor, nisl eget consectetur sagittis, nisl urna consectetur elit, eget consectetur nisi nisl eget nisi. 
                        Suspendisse potenti. Quisque at condimentum dolor. Etiam bibendum, urna eu vehicula luctus, justo erat venenatis justo, 
                        eget venenatis lacus ligula non odio. Duis ut tincidunt felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Morbi dictum nisi et enim consectetur, eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi, 
                        eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
                    </p>
                  </section>

                  <section className="about-services">
                  <p>
                <ul>
                      <li><b>Legal Consultation</b>
                  <ul>
                      <li>Providing advice on legal matters</li>
                      <li>Explaining rights and obligations under the law</li>
                      <li>Offering guidance on legal procedures</li>
                  </ul>
                     </li>
                     <li><b>Litigation</b>
                       <ul>
                        <li>Representing clients in court</li>
                        <li>Preparing and filing legal documents</li>
                       <li>Presenting evidence and arguments in legal proceedings</li>
                      </ul>
                    </li>
                    <li><b>Contract Drafting and Review</b>
                     <ul>
                      <li>Drafting legal contracts and agreements</li>
                     <li>Reviewing and advising on the terms of contracts</li>
                     <li>Negotiating contract terms on behalf of clients</li>
                     </ul>
                    </li>
                    <li><b>Alternative Dispute Resolution (ADR)</b>
                      <ul>
                       <li>Mediating disputes between parties</li>
                       <li>Representing clients in arbitration proceedings</li>
                       <li>Facilitating negotiations to reach settlements</li>
                     </ul>
                     </li>
                    <li><b>Corporate and Commercial Law</b>
                     <ul>
                       <li>Advising on business formation and structuring</li>
                      <li>Assisting with mergers and acquisitions</li>
                      <li>Providing counsel on compliance with corporate laws and regulations</li>
                     </ul>
                      </li>
                 </ul>

                    </p>
                  </section>
                  
                  <section className="about-advocate">
                  <h2>Gallery</h2>
                  <div >
                    <div style={{display:'flex'}}>
                  {[law1,law2,law4,law3].map((item)=>{
                    return(
                      <div className="card">
                    
                      <img src={item} alt="veer"></img>
                      </div>
                    )
                    })}
                    </div>
                    <div style={{textAlign:'center'}}>
                    <button 
                   className="button" 
                    onClick={()=>{
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