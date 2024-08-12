import React from 'react'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import ImageGallery from "react-image-gallery";
import iggg from '../../images/ArunG.jpg'; 
import law1 from '../../images/law1.jpg'; 
import law2 from '../../images/law2.jpg'; 
import law3 from '../../images/law3.jpg'; 
import law5 from '../../images/law5.jpg';  
import './galleryPage.css'


const Gallery = () => {



const images = [
  
  {
    original: law1,
    thumbnail: law1,
  },
  {
    original: law2,
    thumbnail: law2,
  },
  {
    original: law3,
    thumbnail: law3,
  },

  {
    original: law5,
    thumbnail: law5,
  },
  {
    original: iggg,
    thumbnail: iggg,
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
  return (
    <div>
    <MainContentInAllPage/>
    <section className="about-advocate">
    <h2>Gallery</h2>
    <p>
    Explore our gallery to see highlights of our legal practice in action. Here, you’ll find images and snapshots from various events, legal seminars, and community engagements that showcase our commitment to legal excellence and client advocacy. This gallery reflects our dedication to providing high-quality legal services and our active involvement in the legal community.
                       </p>
    </section>
    <section className="about-advocate">
      <div >
    <ImageGallery items={images}  autoPlay={true} thumbnailPosition={'top'} showFullscreenButton={false} showPlayButton={false} disableKeyDown={true} showIndex={true} disableThumbnailScroll={true} disableSwipe={true} showNav={false} />;
    </div>
    </section>

    <div className='galleryBody'>
                {images.map((value)=>{
                  return (<div className="galleryContainers">
<img src={value.thumbnail} alt='img' className='imges'/>
                </div>)})}
                </div>
    </div>
  )
}

export default Gallery