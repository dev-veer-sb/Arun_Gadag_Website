import React,{useEffect,useState} from 'react'
import './headLinesWithLogo.css';
import image from '../../../images/download.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainContentInAllPage = () => {
const [pageSlogan, setPageSlogan] = useState({
  slogan:'',
  color:''
})

useEffect(() => {
  AOS.init({
    // Global settings:
    duration: 1600, // Animation duration
    once: false, 
    mirror:true,
    mobile:false// Whether animation should happen only once - while scrolling down
  });
  const paragraphs = document.querySelectorAll('p');
  const section = document.querySelectorAll('section');

  paragraphs.forEach((p) => {
    p.setAttribute('data-aos', 'fade-up');

  });
  section.forEach((s) => {
    s.setAttribute('data-aos', 'fade-up');
  });

}, []);

useEffect(() => {
  const currentPath = window.location.pathname;
  console.log(currentPath.includes('/home'));
  if(currentPath.includes('home')){
    setPageSlogan({
      slogan:'Your Trusted Partner in Legal Solutions',
    color:'#8a471c'
  });
  }else if(currentPath.includes('about')){
    setPageSlogan({
      slogan:'Your Advocate for Justice and Fair Representation.',
    color:'#154c79'
  });
  }
  else if(currentPath.includes('service')){
    setPageSlogan({
      slogan:'Offering Professional Legal Services with Precision and Care.',
    color:'#e28743'
  });
  }
  else if(currentPath.includes('practice')){
    setPageSlogan({
      slogan:'Focused Practice Areas to Address Your Legal Needs.',
    color:'#d9b956'
  });
  }
  else if(currentPath.includes('gallery')){
    setPageSlogan({
      slogan:'Showcasing Our Commitment to Legal Excellence and Community Engagement',
    color:'#053859'
  });
  }else {
    setPageSlogan({
      slogan:'We’re Here to Answer Your Legal Questions and Concerns',
    color:'#949049'
  });
  }

  
}, [])


  return (
    <div className="content">
                <img src={image} alt="Logo" className="image" data-aos="flip-left" />
                <h1 className="centered-text" data-aos="fade-up">ARUN GADAG ASSOCIATES</h1>
<h2 style={{
  color:pageSlogan.color,
}} data-aos="fade-up" >{pageSlogan.slogan}</h2>
            </div>
  )
}

export default MainContentInAllPage