import React, { useState } from 'react';
import './AnimationPage.css';
import PopUpImage from './PopUpImage'; 
import flythrough from '/animation/flythrough.mp4';
import flythroughtn from '/animation/flythroughpic.jpg';
import "react-multi-carousel/lib/styles.css";
import basics from '/animation/basics.mp4';
import ft1 from '/animation/ft1.jpg';
import ft2 from '/animation/ft2.jpg';
import ft3 from '/animation/ft3.jpg';
import ft4 from '/animation/ft4.jpg';
import ft5 from '/animation/ft5.jpg';
import ft6 from '/animation/ft6.jpg';
import toast1 from '/animation/toast1.jpg';
import toast2 from '/animation/toast2.jpg';
import toast3 from '/animation/toast3.jpg';
import toast4 from '/animation/toast4.jpg';
import toast5 from '/animation/toast5.jpg';
/* Merchant Cart */
import MerchantCart from '/animation/merchantCart/Portfolio_COMP.mp4';
import MC_profiles from '/animation/merchantCart/profiles.png';
import MC_conceptArt from '/animation/merchantCart/conceptArt.png';
import MC_1 from '/animation/merchantCart/MC_1.jpg';
import MC_2 from '/animation/merchantCart/MC_2.jpg';
import MC_3 from '/animation/merchantCart/MC_3.jpg';
import MC_4 from '/animation/merchantCart/MC_4.png';
import MC_5 from '/animation/merchantCart/MC_5.jpeg';
import animationWork from '/animation/AnimationExercises/Portfolio_COMP.mp4'
/* Give Me The Britney */
import britney1 from '/animation/DudeBritney/BritneyTurnaround.mp4'
import britney2 from '/animation/DudeBritney/BritneyBack.png'
import britney3 from '/animation/DudeBritney/BritneyFront.png'
import britney4 from '/animation/DudeBritney/BritneyPosed.png'
/* To: Jasmine From: Stitch */
import stitch1 from '/animation/StitchesForStitch/Portfolio_COMP.mp4'
import stitch2 from '/animation/StitchesForStitch/StitchModelWithGarment.png'
import stitch3 from '/animation/StitchesForStitch/GarmentSideView.png'
import stitch4 from '/animation/StitchesForStitch/StitchWithTurban.png'
import stitch5 from '/animation/StitchesForStitch/Turban.png'
import stitch6 from '/animation/StitchesForStitch/AnimationStill1.png'
import stitch7 from '/animation/StitchesForStitch/AnimationStill2.png'
import stitch8 from '/animation/StitchesForStitch/AnimationStill3.png'

import TaskBar from "./TaskBar";
import { Slide } from 'react-slideshow-image';

interface Slide {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  thumbnail: string;
  details: string[];
  skills: string;
  link: string;
  linkDescription: string;
  paddingTop: any;
  images: { src: string, alt: string, width: string, height: string, description: string}[];
}

const slides: Slide[] = [
  {
    src: stitch1,
    alt: 'To Jasmine, From Stitch',
    caption: 'To Jasmine, From Stitch',
    credit: '',
    thumbnail: stitch2,
    details: [
      "Responsible for garment design and simulation, character animation, lighting, and compositing",
      "See project YouTube link below for the complete list of credits, including models, rigs, textures, sound design, and other assets"
    ],
    skills: 'Maya | Marvelous Designer | Adobe After Effects | Garment Design & Dynamics | Compositing',
    link: 'https://youtu.be/LesIvR-Zvjk',
    linkDescription: 'WATCH HERE ON YOUTUBE',
    paddingTop: 140,
    images: [
      { src: stitch2, alt: 'Stitch Model With Garment', width: '220px', height: '112px', description: "Stitch model with garment."},
      { src: stitch3, alt: 'Garment Side View', width: '220px', height: '112px', description: "Stitch garment side view."},
      { src: stitch4, alt: 'Stitch With Turban', width: '220px', height: '112px', description: "Stitch with turban."},
      { src: stitch5, alt: 'Turban', width: '220px', height: '112px', description: "Rendered still of Turban." },
      { src: stitch6, alt: 'Animation Still 1', width: '220px', height: '112px', description: "Still from animated short." },
      { src: stitch7, alt: 'Animation Still 1', width: '220px', height: '112px', description: "Still from animated short." },
      { src: stitch8, alt: 'Animation Still 3', width: '220px', height: '112px', description: "Still from animated short." },
      
    ] 
  },
  {
    src: flythrough,
    alt: 'Bedroom Interior',
    caption: 'Bedroom Interior',
    credit: '',
    thumbnail: flythroughtn,
    details: [
      "Responsible for all aspects"
    ],
    skills: 'Maya | Adobe Substance Painter | Modeling | Texturing | Lighting | Composition',
    link: '',
    linkDescription: '',
    paddingTop: 140,
    images: [
      { src: ft1, alt: 'Image 1', width: '220px', height: '112px', description: "final close up shot of whiteboard"},
      { src: ft2, alt: 'Image 2', width: '220px', height: '112px', description: "final shot of work desk" },
      { src: ft3, alt: 'Image 3', width: '220px', height: '112px', description: "final shot of side table" },
      { src: ft4, alt: 'Image 4', width: '220px', height: '112px', description: "final close up shot of whiteboard" },
      { src: ft5, alt: 'Image 5', width: '220px', height: '112px', description: "desk modeling and texturing in progress" },
      { src: ft6, alt: 'Image 6', width: '220px', height: '112px', description: "desk modeling and texturing in progress" },
    ] 
  },
  {
    src: MerchantCart,
    alt: 'Merchant Cart',
    caption: 'Merchant Cart',
    credit: '',
    thumbnail: MC_4,
    details: [
      "Responsible for all aspects",
    ],
    skills: 'Maya | Adobe Substance Painter | Modeling | Texturing',
    link: '',
    linkDescription: '',
    paddingTop: 140,
    images: [
      { src: MC_profiles, alt: 'Carriage Cart', width: '220px', height: '112px', description: "front and side profile concept art"},
      { src: MC_conceptArt, alt: 'Carriage Cart', width: '220px', height: '112px', description: "rough perspective concept art"},
      { src: MC_1, alt: 'Carriage Cart', width: '220px', height: '112px', description: "modeling, texturing and lighting in progress"},
      { src: MC_2, alt: 'Carriage Cart', width: '220px', height: '112px', description: "modeling, texturing and lighting in progress" },
      { src: MC_3, alt: 'Carriage Cart', width: '220px', height: '112px', description: "close up of modeling, texturing and lighting in progress" },
      { src: MC_4, alt: 'Carriage Cart', width: '220px', height: '112px', description: "modeling and texturing in progress, test with darker lighting" },
      { src: MC_5, alt: 'Carriage Cart', width: '220px', height: '112px', description: "close up of modeling, texturing and lighting in progress" },      
    ] 
  },
  {
    src: britney1,
    alt: '"Give Me The Britney"',
    caption: '"Give Me The Britney"',
    credit: '',
    thumbnail: britney3,
    details: [
      "Responsible for hair grooming and lighting",
      "'Dude' character model, textures and rig by Shalaby Rigs",
    ],
    skills: 'Maya | XGen | Hair Grooming',
    link: '',
    linkDescription: '',
    paddingTop: 140,
    images: [
      { src: britney3, alt: 'BritneyBack.png', width: '220px', height: '112px', description: "Front view of hair groom with three-point lighting."},
      { src: britney2, alt: 'BritneyBack.png', width: '220px', height: '112px', description: "Back view of hair groom with backlighting and wind."},
      { src: britney4, alt: 'BritneyBack.png', width: '220px', height: '112px', description: "Posed character with hair groom and wind."},
    ] 
  },
  {
    src: animationWork,
    alt: 'Idle/Walk/Run Cycle Exercises',
    caption: 'Idle/Walk/Run Cycle Exercises',
    credit: '',
    thumbnail: toast3,
    details: [
      "Responsible for character animation, including export and integration into Unity environment",
      "Model and textures from Mixamo",
      "\"Remy\" model rigged by Professor William Stout using Advanced Skeleton",
      "\"Space Girl\" model rigged by Milo Lin using Advanced Skeleton",
    ],
    skills: 'Maya | Unity | Character Animation',
    link: '',
    linkDescription: '',
    paddingTop: 60,
    images: [
    ]
  },
  {
    src: basics,
    alt: 'Good Morning, I\'m Toast',
    caption: 'Good Morning, I\'m Toast',
    credit: '',
    thumbnail: toast3,
    details: [
      "Responsible for all aspects"
    ],
    skills: 'Adobe Animate | Adobe After Effects | Adobe Premiere Pro',
    link: '',
    linkDescription: '',
    paddingTop: 170,
    images: [
      { src: toast1, alt: 'Image 1', width: '220px', height: '121px', description: "still from closing scene of animation" },
      { src: toast2, alt: 'Image 2', width: '220px', height: '121px', description: "still from final animation"  },
      { src: toast3, alt: 'Image 3', width: '220px', height: '121px', description: "still from final animation"  },
      { src: toast4, alt: 'Image 4', width: '220px', height: '121px', description: "still from final animation"  },
      { src: toast5, alt: 'Image 5', width: '220px', height: '121px', description: "still from animation - kitchen environment"  },
    ]
  }
];

const isDesktop = () => {
  console.log("window.innerWidth: ", window.innerWidth)
  return window.innerWidth >= 768; // Autoplay if window width is 768px or greater
};

const AnimationPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: '', alt: '', description: ''});

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (image: { src: string, alt: string, description: string}) => {
    setCurrentImage(image);
    setImageOpen(true);
  };

  const closeModal = () => {
    setImageOpen(false);
  };

  return (
    <div className="animation-page">
      <TaskBar currentPage="Animation" />
      <section className="animsec">
        {slides.map((slide, idx) => (
          <div key={idx} className="container">
            
            <div className="video-container">
              <video className="anim_slide" loop muted controls>
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-container">
              <div className='titleAndSkills'>
                <div className='animationTitle'>{slide.caption}</div>
                <div className='animationSkills'>{slide.skills}</div>
              </div>
              <ul className='animationDetail'>
              {slide.details.map((detail, idx) => (
                 <li>{detail}</li>
              ))}
              </ul>

              {slide.images.length > 0 && (
                <div className="animationInstruction">Click to View Featured Stills Below!</div>
              )}

             
              <div className='animationStillImages'>
              {slide.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className='slideImg'
                    
                    onClick={() => handleImageClick({ src: image.src, alt: image.alt, description: image.description})}
                  />
                ))}
              </div>
            
              {slide.link && (
                <div className="link">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer">{slide.linkDescription}</a>
                </div>
              )}
            
              </div>
           
          </div>
        ))}
        <PopUpImage show={imageOpen} onClose={closeModal} imageSrc={currentImage.src} imageAlt={currentImage.alt} customSize={true} theCustomSize='800px' imageDescription={currentImage.description}/>
      </section>
    </div>
  );
};

export default AnimationPage;
