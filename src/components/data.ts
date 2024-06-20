import raytracer from '/code/raytracer.jpg';
import productionplan from '/code/productionplanner.jpg';
import bakeryapp from '/code/bakeapp.jpg';
import plantgen from '/code/plantGen.jpg';
import plugin1 from '/code/plugin1.jpg';
import plugin2 from '/code/plugin2.jpg';
import plugin3 from '/code/plugin3.jpg';
import portfolio from '/code/portfolio.jpg';
import raytracer2 from '/code/rb.jpg';
import raytracer3 from '/code/rc.jpg';
import raytracer4 from '/code/rd.jpg';
import bakeapp from '/code/bakeapp.jpg';
import photoeditor from '/code/photoeditor.jpg';
import photoeditor2 from '/code/re.jpg';
import photoeditor3 from '/code/rf.jpg';
import photoeditor4 from '/code/rg.jpg';
import productionplan2 from '/code/rh.jpg';
import productionplan3 from '/code/ri.jpg';
import opengl from '/code/opengl.mp4';
import blank from '/code/blank.jpg';
import spirograph from '/code/spirograph.mp4'

export default [
  { blank: blank,
    css: raytracer, 
    hoverImages: [raytracer2, raytracer3, raytracer4, raytracer], 
    height: 1500, description: "Raytracer",
     skills: "C++ | OpenGL | Graphics Programming", 
     link:"https://github.com/nMDaas/raytracer",
     details: [
      "Used vector calculations to determine ray-object intersections for boxes, spheres, cylinders and cones",
      "Applied Object Oriented and Model-View-Controller concepts in C++ to develop a hierarchical node system to build custom scenes",
      "Allows materials with reflection, refraction and refractive index. Accounts for total internal reflection and infinite refraction",
      "Includes ability to create spotlights, point lights, and area lights",
      "Allows creation of hard and soft shadows by adjusting number of samples for lights",
      "Implemented sphere and box texturing using texture mapping",
     ],
    video: '' },
  { css: plugin3, 
    hoverImages: [plugin3],
    height: 1500,
    description: "Maya Plugin for Rapid Plant Generation", 
    skills: "Maya Tools | Python | Qt | MEL ", 
    link:"https://github.com/nMDaas/MyPlugins",
    details: [
      "A Maya Tool to enable rapid generation of stylized and customizable plants",
      "Used Python and MEL scripting to quickly generate variations of a leaf using distortion, tilting and scaling",
      "Allows swift distribution of leaves around an object (like a stem) or in a concentrated location",
      "An ongoing project"
    ],
    video: ''  },
  { css: blank, 
    hoverImages: [blank], 
    height: 1500, 
    description: "Trackball, Lighting, Texturing and Animation in OpenGL",
    skills: "C++ | OpenGL | GLSL | Graphics Programming",
    details: [
      "Developed in collaboration with Natalie Potapov using Git",
      "Implemented trackball effect as seen in applications like Maya and Blender",
      "Programmed movements of a global camera, helicopter camera and first person camera",
      "Applied the visitor pattern in C++ to implement hierarchical rendering of nodes in scene",
      "Allows specification of ambient, diffuse and specular properties for lights and materials",
      "Developed ability to create spotlights and texture objects"
    ],
  video: opengl,
  vidHeight: "400px",
  vidWidth: "400px",
},
  { css: portfolio, 
    hoverImages: [portfolio], 
    height: 1500, 
    description: "Personal Website", 
    skills: "Typescript | React | GSAP | Three.js | MUI", link: "https://github.com/nMDaas/natasha-daas-website",
    details: [
      "Website to showcase my interests in and projects related to programming, computer graphics, 3D animation and modeling",
      "Built using Vite and Typescript and deployed using Github Pages",
      "Utilized React, GSAP, Three.js and the MUI library to implement animations and aesthetics for a more comfortable and seamless user experience",
      "Debugged using DevTools and Web Inspector to resolve bugs and improve the website's performance, speed and loading time"
    ],
    video: '' 
  },
  { css: photoeditor, hoverImages: [photoeditor2, photoeditor3, photoeditor4, photoeditor], height: 1500, description: "Photo Editor", skills: "Java | Object-Oriented Programming | MVC Pattern", link: "https://github.com/nMDaas/Photo-Editor",
    details: [
      "Used the model-view-controller pattern and Java to build GUI and backend of a photo editor application",
      "Implemented blurring, sharpening, brightening and flipping of images",
      "Includes ability to edit image using various greyscale, sepia and RGB filters",
      "Supports upload, saving, and conversion between jpeg, ppm and png file formats",
    ],
    video: '' 
  },
  { css: productionplan, hoverImages: [productionplan2, productionplan3, productionplan], height: 1500, description: "Animation Production Plan Generator", 
    skills: "Javascript | Typescript | Generative AI | React", link: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
    details: [
      "Web application developed in collaboration with Abigail Dennin, Meredith Scott and Sophia Allen using Git",
      "Uses OpenAI to generate a production plan for animators based on user provided project details",
      "Used Typescript and Javascript to manage user's various production plans, task completion and keep track of production progress",
      "Implemented capability for user customization, styling and csv export"
    ],
    video: '' 
  },
  { css: blank,
    hoverImages: [blank], 
    height: 1500, 
    description: "Spirograph Animation", 
    skills: "C++ | OpenGL | 2D Animation | Graphics Programming",
    link:"https://github.com/nMDaas/Spirograph/tree/main", 
    details: [
      "A fun animation developed using openGL and C++ to visualize a spirograph and how its pattern changes with changes in circle size",
    ],
    video: spirograph,
    vidHeight: "400px",
    vidWidth: "400px", },
  { css: bakeapp, hoverImages: [bakeryapp], height: 1500, description: "Bakery App", skills: "mySQL | Java", link: "https://github.com/nMDaas/BakeryApp",
    details: [
      "Developed in collaboration Caroline Southard-Smith using Git",
      "Console based application allowing users to find recipes, post recipes, and manage their ingredient inventory",
      "Backend controller logic of the application was written in Java",
      "Used the JDBC connector to connect Java code to the database, queries and triggers written in SQL",
      "Wrote queries in SQL to allow filtering based on recipe types and user interests and informs user of missing ingredients",
    ],
    video: '' 
  },
]
