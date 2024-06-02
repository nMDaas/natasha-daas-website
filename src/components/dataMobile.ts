import raytracer from '/code/raytracer.jpg';
import productionplan from '/code/productionplanner.jpg';
import bakeryapp from '/code/bakeapp.jpg';
import plantgen from '/code/plantGen.jpg';
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
    height: 1800, description: "Raytracer",
     skills: "C++ | OpenGL | Graphics Programming | Vector Math", 
     link:"https://github.com/nMDaas/raytracer",
     details: [
      "Used vector calculations to determine ray-object intersections for boxes, spheres, and cylinders",
      "Implement sphere and box texturing using texture mapping",
      "Allows for objects to have reflective and refractive properties using refractive index. Accounts for total internal reflection and infinite refraction",
      "Includes ability to create spotlights, point lights, and area lights in the scene",
      "Able to create hard and soft shadows by adjusting sampling of cells on lights"
     ],
    video: '' },
  { css: plantgen, 
    hoverImages: [plantgen],
    height: 1800,
    description: "Maya Plugin for Rapid Plant Generation", 
    skills: "Maya Tools | Python | Qt | MEL ", 
    link:"https://github.com/nMDaas/MyPlugins",
    details: [
      "A Maya Tool to enable rapid generation of stylized and customizable plants",
      "Used Python and MEL scripting to quickly generate various models of a leaf from a prototype using distorting, tilting and scaling",
      "Allows quick distribution of leaves around an object (like a stem) or in a concentrated location"
    ],
    video: ''  },
  { css: blank, 
    hoverImages: [blank], 
    height: 1800, 
    description: "Trackball, Lighting, Texturing and Animation in OpenGL",
    skills: "C++ | OpenGL | GLSL | Graphics Programming",
    details: [
      "Developed in collaboration with Natalie Potapov",
      "Implemented a trackball effect as similarly seen in applications like Maya and Blender",
      "Programmed cameras to work as a global camera, helicopter camera and first person camera",
      "Allows for ambient, diffuse and specular lighting effects, spotlights and texturing"
    ],
  video: opengl,
  vidHeight: "400px",
  vidWidth: "400px",
},
  { css: portfolio, hoverImages: [portfolio], height: 1800, description: "Personal Website", skills: "Typescript | React | GSAP", link: "https://github.com/nMDaas/Portfolio",
    details: [
      "Website to showcase my interests in and projects related to programming, computer graphics, 3D animation and modeling!"
    ],
    video: '' 
  },
  { css: photoeditor, hoverImages: [photoeditor2, photoeditor3, photoeditor4, photoeditor], height: 1800, description: "Photo Editor", skills: "Java | Object-Oriented Programming | MVC Pattern", link: "https://github.com/nMDaas/Photo-Editor",
    details: [
      "Used model-view-controller pattern to build GUI and backend using Java programming",
      "Implemented blurring, sharpening, brightening and flipping of images",
      "Includes ability to edit image using various greyscale, sepia and RGB filters",
      "Supports upload, saving, and conversion between jpeg, ppm and png file formats",
    ],
    video: '' 
  },
  { css: productionplan, hoverImages: [productionplan2, productionplan3, productionplan], height: 1800, description: "Animation Production Plan Generator", skills: "Javascript | Typescript | Generative AI", link: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
    details: [
      "Web application developed in collaboration with Abigail Dennin, Meredith Scott and Sophia Allen",
      "Uses OpenAI to generate a production plan for animators based on user provided project details",
      "Implemented capability for user customization, styling and csv export",
      "Used Typescript and Javascript to manage user's various production plans, task completion and keep track of production progress"
    ],
    video: '' 
  },
  { css: blank,
    hoverImages: [blank], 
    height: 1800, 
    description: "Spirograph Animation", 
    skills: "C++ | OpenGL Animation | Graphics Programming",
    link:"https://github.com/nMDaas/Spirograph/tree/main", 
    details: [
      "A fun animation developed using openGL and C++ to visualize a spirograph and how its pattern changes with changes in circle size"
    ],
    video: spirograph,
    vidHeight: "400px",
    vidWidth: "400px", },
  { css: bakeapp, hoverImages: [bakeryapp], height: 1800, description: "Bakery App", skills: "mySQL | Java", link: "https://github.com/nMDaas/BakeryApp",
    details: [
      "Developed in collaboration Caroline Smith",
      "Console based application allowing users to find recipes, post recipes, and manage their ingredient inventory",
      "Wrote queries in SQL to allow filtering based on recipe types and user interests and informs user of missing ingredients",
      "Used the JDBC connector to connect Java code to the database, queries and triggers written in SQL"
    ],
    video: '' 
  },
]
