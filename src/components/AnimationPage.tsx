import React, { useState } from 'react';
import './AnimationPage.css';
import PopUpImage from './PopUpImage'; 
import anim1 from '/animation/anim1.mp4';
import anim1tn from '/animation/anim1pic.jpeg';
import flythrough from '/animation/flythrough.mp4';
import flythroughtn from '/animation/flythroughpic.jpg';
import basics from '/animation/basics.mp4';
import basicstn from '/animation/basicpic.jpeg';
import ft1 from '/animation/ft1.jpg';
import ft2 from '/animation/ft2.jpg';
import ft3 from '/animation/ft3.jpg';
import ft4 from '/animation/ft4.jpg';
import ft5 from '/animation/ft5.jpg';
import ft6 from '/animation/ft6.jpg';
import anim1a from '/animation/anim1a.jpg';
import anim1b from '/animation/anim1b.jpg';
import anim1c from '/animation/anim1c.jpg';
import anim1d from '/animation/anim1d.jpg';
import anim1e from '/animation/anim1e.jpg';
import anim1f from '/animation/anim1f.jpg';
import toast1 from '/animation/toast1.jpg';
import toast2 from '/animation/toast2.jpg';
import toast3 from '/animation/toast3.jpg';
import toast4 from '/animation/toast4.jpg';
import toast5 from '/animation/toast5.jpg';

interface Slide {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  thumbnail: string;
  details: string[];
  skills: string;
  link: string;
  paddingTop: any;
  images: { src: string, alt: string, width: string, height: string }[];
}

const slides: Slide[] = [
  {
    src: anim1,
    alt: 'Todd vs Can',
    caption: 'Todd vs Can',
    credit: '',
    thumbnail: anim1tn,
    details: [
      "3D short created and animated in Maya and rendered using Arnold",
      "Designed and modeled original character",
      "Body rigged using Advanced Skeleton",
      "Facial rigs created using Maya rigging tools",
      "Used UV unwrapping and Adobe Substance painter for texturing"
    ],
    skills: 'Maya | Rigging | Character Design & Modeling | Adobe Substance Painter | Character Animation',
    link: 'https://www.youtube.com/watch?v=zBDn8izuEAc',
    paddingTop: 60,
    images: [
      { src: anim1c, alt: 'Image 1', width: '220px', height: '130px' },
      { src: anim1e, alt: 'Image 3', width: '220px', height: '130px' },
      { src: anim1b, alt: 'Image 2', width: '220px', height: '130px' },
      { src: anim1a, alt: 'Image 3', width: '220px', height: '130px' },
    ]
  },
  {
    src: flythrough,
    alt: 'Room Environment',
    caption: 'Room Environment',
    credit: '',
    thumbnail: flythroughtn,
    details: [
      "Environment created for 'Todd vs Can' short",
      "Modeled all environment assets in scene in Maya",
      "Textured assets using Adobe Substance Painter",
    ],
    skills: 'Maya | Prop Modeling | Environments | Adobe Substance Painter',
    link: 'https://www.youtube.com/watch?v=zBDn8izuEAc',
    paddingTop: 140,
    images: [
      { src: ft1, alt: 'Image 1', width: '220px', height: '112px' },
      { src: ft2, alt: 'Image 2', width: '220px', height: '112px' },
      { src: ft3, alt: 'Image 3', width: '220px', height: '112px' },
      { src: ft4, alt: 'Image 4', width: '220px', height: '112px' },
      { src: ft5, alt: 'Image 5', width: '220px', height: '112px' },
      { src: ft6, alt: 'Image 6', width: '220px', height: '112px' },
    ] 
  },
  {
    src: basics,
    alt: 'Good Morning, I\'m Toast',
    caption: 'Good Morning, I\'m Toast',
    credit: '',
    thumbnail: basicstn,
    details: [
      "2D animation created using Adobe Animate",
      "Compositing and editing done using Adobe After Effects and Adobe Premiere Pro"
    ],
    skills: '2D Animation | Adobe Animate | Adobe After Effects | Adobe Premiere Pro',
    link: 'https://www.youtube.com/watch?v=xH2mZjapZUA',
    paddingTop: 170,
    images: [
      { src: toast1, alt: 'Image 1', width: '220px', height: '121px' },
      { src: toast2, alt: 'Image 2', width: '220px', height: '121px' },
      { src: toast3, alt: 'Image 3', width: '220px', height: '121px' },
      { src: toast4, alt: 'Image 4', width: '220px', height: '121px' },
      { src: toast5, alt: 'Image 5', width: '220px', height: '121px' },
    ]
  },
];

const AnimationPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageOpen, setImageOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });
  
    const handleThumbnailClick = (index: number) => {
      setCurrentIndex(index);
    };
  
    const handleImageClick = (image: { src: string, alt: string }) => {
      setCurrentImage(image);
      setImageOpen(true);
    };
  
    const closeModal = () => {
      setImageOpen(false);
    };
  
    return (
      <section className="animsec">
        <div className="container">
          <div className="carousel">
            <ul className="carousel__slides">
              {slides.map((slide, index) => (
                <li key={index} className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}>
                    <video width="850" height="478" autoPlay loop muted>
                      <source src={slide.src} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                </li>
              ))}
            </ul>
            <ul className="carousel__thumbnails">
              {slides.map((slide, index) => (
                <li key={index}>
                  <img
                    src={slide.thumbnail}
                    alt={slide.alt}
                    onClick={() => handleThumbnailClick(index)}
                    className={index === currentIndex ? 'active' : ''}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="text">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}>
                <figure>
                  <figcaption className="title">
                    {slide.caption}
                  </figcaption>
                  <figcaption className="skills">
                    {slide.skills}
                  </figcaption>
                  <ul>
                    {slide.details.map((details, index) => (
                      <li key={index}>{details}</li>
                    ))}
                  </ul>
                  <div className="slide-images">
                    {slide.images.map((image, i) => (
                      <img
                        key={i}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="slide-image"
                        onClick={() => handleImageClick(image)}
                      />
                    ))}
                  </div>
                </figure>
                <div className="link">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer">watch here!</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PopUpImage show={imageOpen} onClose={closeModal} imageSrc={currentImage.src} imageAlt={currentImage.alt} customSize={true} />
      </section>
      
    );
  };
  
  export default AnimationPage;