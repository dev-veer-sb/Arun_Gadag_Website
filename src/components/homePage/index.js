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