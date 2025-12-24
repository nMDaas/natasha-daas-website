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
import vehicleVideo from '/animation/vehiclePreview.mp4';
import v01 from '/animation/v01.png';
import v02 from '/animation/v02.png';
import v1 from '/animation/v1.jpg';
import v2 from '/animation/v2.jpg';
import v3 from '/animation/v3.jpg';
import v6 from '/animation/v6.png';
import v7 from '/animation/v7.png';
import vRig from '/animation/vRig.png';
import animationWork from '/animation/animationWork.mp4'
// "Give Me The Britney" files
import britney1 from '/animation/DudeBritney/BritneyTurnaround.mp4'
import britney2 from '/animation/DudeBritney/BritneyBack.png'
import britney3 from '/animation/DudeBritney/BritneyFront.png'
import britney4 from '/animation/DudeBritney/BritneyPosed.png'
// "To: Jasmine From: Stitch" files
import stitch1 from '/animation/StitchesForStitch/StitchesForStitch_Portfolio.mp4'
import stitch2 from '/animation/StitchesForStitch/StitchModelWithGarment.png'
import stitch3 from '/animation/StitchesForStitch/GarmentSideView.png'
import stitch4 from '/animation/StitchesForStitch/StitchWithTurban.png'
import stitch5 from '/animation/StitchesForStitch/Turban.png'
import stitch6 from '/animation/StitchesForStitch/AnimationStill1.png'
import stitch7 from '/animation/StitchesForStitch/AnimationStill2.png'
import stitch8 from '/animation/StitchesForStitch/AnimationStill3.png'

import TaskBar from "./TaskBar2";
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
  paddingTop: any;
  images: { src: string, alt: string, width: string, height: string, description: string}[];
}

const slides: Slide[] = [
  {
    src: stitch1,
    alt: 'To: Jasmine From: Stitch',
    caption: 'To: Jasmine From: Stitch',
    credit: '',
    thumbnail: stitch2,
    details: [
      "Individual project using Maya and Marvelous Designer",
      "Responsible for garment design and simulation, animation, lighting, composition and compositing",
      "Stitch model, rig and textures by Gaethan Bracke"
    ],
    skills: 'Maya | Marvelous Designer | Adobe After Effects',
    link: 'https://youtu.be/LesIvR-Zvjk',
    paddingTop: 140,
    images: [
      { src: stitch2, alt: 'Stitch Model With Garment', width: '220px', height: '112px', description: "Stitch model with garment."},
      { src: stitch3, alt: 'Garment Side View', width: '220px', height: '112px', description: "Stitch garment side view."},
      { src: stitch4, alt: 'Stitch With Turban', width: '220px', height: '112px', description: "Stitch with turban."},
      { src: stitch5, alt: 'Turban', width: '220px', height: '112px', description: "Rendered still of Turban." },
      { src: stitch6, alt: 'Animation Still 1', width: '220px', height: '112px', description: "Still from animated short." },
      { src: stitch8, alt: 'Animation Still 3', width: '220px', height: '112px', description: "Still from animated short." },
      
    ] 
  },
  {
    src: vehicleVideo,
    alt: 'Carriage Cart',
    caption: 'Carriage Cart',
    credit: '',
    thumbnail: v6,
    details: [
      "Responsible for concept art and vehicle profiles",
      "Vehicle modeled in Maya and textured in Adobe Substance Painter",
      "Lighting and Rigging done in Maya"
    ],
    skills: 'Maya | Vehicle | Adobe Substance Painter',
    link: '',
    paddingTop: 140,
    images: [
      { src: v01, alt: 'Carriage Cart', width: '220px', height: '112px', description: "front and side profile concept art"},
      { src: v02, alt: 'Carriage Cart', width: '220px', height: '112px', description: "rough perspective concept art"},
      { src: v1, alt: 'Carriage Cart', width: '220px', height: '112px', description: "modeling, texturing and lighting in progress"},
      { src: v2, alt: 'Carriage Cart', width: '220px', height: '112px', description: "modeling, texturing and lighting in progress" },
      { src: v3, alt: 'Carriage Cart', width: '220px', height: '112px', description: "close up of modeling, texturing and lighting in progress" },
      { src: v6, alt: 'Carriage Cart', width: '220px', height: '112px', description: "modeling and texturing in progress, test with darker lighting" },
      { src: v7, alt: 'Carriage Cart', width: '220px', height: '112px', description: "close up of modeling, texturing and lighting in progress" },
      { src: vRig, alt: 'Carriage Cart', width: '220px', height: '112px', description: "rig and lighting set up in Maya" },
      
    ] 
  },
  {
    src: flythrough,
    alt: 'Room Environment',
    caption: 'Room Environment',
    credit: '',
    thumbnail: flythroughtn,
    details: [
      "Room Environment created for 'Todd vs Can' short",
      "Modeled all environment assets in scene in Maya",
      "Textured assets using Adobe Substance Painter",
    ],
    skills: 'Maya | Prop Modeling | Environments | Adobe Substance Painter',
    link: 'https://youtu.be/FACYoF7FNbU',
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
    src: britney1,
    alt: '"Give Me The Britney"',
    caption: '"Give Me The Britney"',
    credit: '',
    thumbnail: britney3,
    details: [
      "Individual hair grooming project using Maya's XGen",
      "Responsible for hair grooming and lighting",
      "'Dude' character model, textures and rig by Shalaby Rigs",
    ],
    skills: 'Maya | XGen | Adobe After Effects',
    link: '',
    paddingTop: 140,
    images: [
      { src: britney3, alt: 'BritneyBack.png', width: '220px', height: '112px', description: "Front view of hair groom with three-point lighting."},
      { src: britney2, alt: 'BritneyBack.png', width: '220px', height: '112px', description: "Back view of hair groom with backlighting and wind."},
      { src: britney4, alt: 'BritneyBack.png', width: '220px', height: '112px', description: "Posed character with hair groom and wind."},
    ] 
  },
  {
    src: animationWork,
    alt: '3D Animation Exercises',
    caption: '3D Animation Exercises',
    credit: '',
    thumbnail: toast3,
    details: [
      "Animated idle, walk and run cycle animation exercises for export into Unity",
      "Model and textures from Mixamo",
      "\"Remy\" model rigged by Professor William Stout using Advanced Skeleton",
      "\"Space Girl\" model rigged by Milo Lin using Advanced Skeleton",
    ],
    skills: 'Maya | Unity | 3D Animation | Character Animation',
    link: '',
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
      "2D animation created using Adobe Animate",
      "Compositing and editing done using Adobe After Effects and Adobe Premiere Pro"
    ],
    skills: '2D Animation | Adobe Animate | Adobe After Effects | Adobe Premiere Pro',
    link: 'https://www.youtube.com/watch?v=xH2mZjapZUA',
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
    <div>
      <TaskBar currentPage="Animation" />
      <section className="animsec">
        {slides.map((slide, idx) => (
          <div key={idx} className="container">
            
            <div className="video-container">
              <video className="anim_slide" autoPlay={isDesktop()} loop muted controls={!isDesktop()}>
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
                <div className="animationInstruction">Click to View Image Renders Below!</div>
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
                  <a href={slide.link} target="_blank" rel="noopener noreferrer">watch here!</a>
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
