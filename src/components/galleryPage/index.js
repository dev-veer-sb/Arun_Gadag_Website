import React from 'react'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import ImageGallery from "react-image-gallery";
import iggg from '../../images/ArunG.jpg';  

const Gallery = () => {



const images = [
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