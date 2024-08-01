import React from 'react'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import ImageGallery from "react-image-gallery";
import iggg from '../../images/ArunG.jpg'; 
import law1 from '../../images/law1.jpg'; 
import law2 from '../../images/law2.jpg'; 
import law3 from '../../images/law3.jpg'; 
import law5 from '../../images/law5.jpg';  



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
    <h2>About Gallery</h2>
    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec auctor, nisl eget consectetur sagittis, nisl urna consectetur elit, eget consectetur nisi nisl eget nisi. 
                         dictum nisi et enim consectetur, eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi, 
                        eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
                    </p>
    </section>
    <section className="about-advocate">
    <ImageGallery items={images} />;
    </section>
    </div>
  )
}

export default Gallery