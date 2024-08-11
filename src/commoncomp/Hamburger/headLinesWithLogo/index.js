import React,{useEffect,useState} from 'react'
import './headLinesWithLogo.css';
import image from '../../../images/download.png'

const MainContentInAllPage = () => {
const [pageSlogan, setPageSlogan] = useState({
  slogan:'',
  color:''
})

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
                <img src={image} alt="Logo" className="image" />
                <h1 className="centered-text">ARUN GADAG ASSOCIATES</h1>
<h2 style={{
  color:pageSlogan.color,
}} >{pageSlogan.slogan}</h2>
            </div>
  )
}

export default MainContentInAllPage