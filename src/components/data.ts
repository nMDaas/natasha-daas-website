import raytracer from '/code/raytracer.jpg';
import productionplan from '/code/productionplanner.jpg';
import bakeryapp from '/code/bakeapp.jpg';
import plugin1 from '/code/plantGen.jpg';
import plugin2 from '/code/plugin2.jpg';
import plugin3 from '/code/plugin3.jpg';
import plantgendemo1 from '/code/plantgendemo1.mp4';
import plant1 from '/code/plant1.jpg';
import plantgendemo2 from '/code/plantgendemo2.mp4';
import plant2 from '/code/plant2.jpg';
import plant3 from '/code/plant3.jpg';
import portfolio from '/code/portfolio.jpg';
import portfolio2 from '/code/portfolio2.jpg';
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
import substancePluginImage from "/code/UVsFileStructureAndScene.jpg"
import substancePluginDemo1 from '/code/SubstancePluginDemo1.mp4'
import substancePluginDemo2 from '/code/SubstancePluginDemo2.mp4'
import nickHome from '/code/NickPlusHome.mp4'
import nickChar from '/code/nickPlusNickSona.mp4'
import nickSettings from '/code/nickPlusSettings.mp4'
import nickLayout from '/code/nickPlusLayout.mp4'
import nickContent from '/code/nickPlusContentPlayer.mp4'
import nickSearch from '/code/nickPlusSearch.mp4'
import houdini1 from '/code/TG/TG_ToolResults.png'
import houdini2 from '/code/TG/TG_ToolWorkflow.png'
import houdini3 from '/code/TG/TG_Breakdown1.png'
import houdini4 from '/code/TG/TG_Breakdown2.png'
import houdini5 from '/code/TG/TG_TerrainElevation.png'
import houdini6 from '/code/TG/TG_ElevationResults1.png'
import houdini7 from '/code/TG/TG_ElevationResults2.png'
import houdini8 from '/code/TG/TG_UnitySetup.png'
//import houdini4 from '/code/TG/houdini4.png'
//import houdini5 from '/code/TG/houdini5.png'
import houdini11 from '/code/TG/houdini11.png'
import particlesim1 from '/code/particlesim/2D.mp4'
import particlesim2 from '/code/particlesim/Fluid_Fall.mp4'
import particlesim3 from '/code/particlesim/Containers.mp4'
import particlesim4 from '/code/particlesim/Performance.mp4'
import particlesim5 from '/code/particlesim/Raymarch_Breakdown.mp4'
import particlesim6 from '/code/particlesim/Comparison1.mp4'
import particlesim7 from '/code/particlesim/Comparison2.mp4'
import particlesim8 from '/code/particlesim/closeup_shot.png'

export default [
  { blank: blank,
    css: raytracer, 
    hoverImages: [raytracer2, raytracer3, raytracer4, raytracer], 
    height: 1730, description: "Raytracer",
     skills: "C++ | OpenGL | Object-Oriented Programming (OOP)| Graphics Programming | MVC Pattern", 
     link:"https://github.com/nMDaas/raytracer",
     summary: "Ray Tracing Engine in C++",
     linkInfo: "View GitHub Repo",
     details: [
      "Used vector calculations to determine ray-object intersections for boxes, spheres, cylinders and cones",
      "Applied OOP and MVC framework and visitor pattern in C++ to develop a hierarchical node system to build custom scenes",
      "Allows materials with reflection, refraction and refractive index, accounting for total internal reflection and infinite refraction",
      "Includes ability to create spotlights, point lights, and area lights",
      "Allows creation of hard and soft shadows by adjusting number of light sample counts",
      "Implemented sphere and box texturing using texture mapping",
     ],
    video: '',
    collaborators: '',
    projectType: 'graphics'},
    { css: particlesim1,
    hoverImages: [particlesim1, particlesim2, particlesim3, particlesim4, particlesim5, particlesim6, particlesim7, particlesim8], 
    height: 1730, description: "Fluid Particle Simulation",
     skills: "C++ | OpenGL | GLSL | Graphics Programming", 
     link:"https://github.com/nMDaas/ParticleSimulation",
     summary: "Particle Dynamics and Ray Marching Rendering Engine",
     linkInfo: "View GitHub Repo",
     details: [
      "Developed a modular engine with both simulation and rendered previews, similar to industry-standard DCC software",
      "Applied Verlet integration, particle-based interactions and neighborhood spatial searches (SPH-inspired), and velocity-dependent splashing effects modeled with the Weber number",
      "Implemented a ray marching renderer with volumetric absorption (Beer–Lambert law), visualizing particle density and attenuation",
      "Optimization with multithreading and spatial hashing, achieving 13× FPS",
      "Exposed customizable simulation parameters for particles, obstacles, fluid physics, and rendering",
      "Handled collisions, managed multithreading safely, and debugged anomalous particle interactions in large-scale simulations",
     ],
    video: '',
    collaborators: '',
    projectType: 'graphics'},
    { css: nickContent, 
      hoverImages: [nickHome, nickChar, nickSearch, nickSettings, nickLayout],
      height: 1730,
      description: "Nickelodeon+ Demo", 
      skills: "TypeScript | React | Node.js | JSON ", 
      linkInfo: "View YouTube Demo",
      link:"https://youtu.be/knGxsfaEQk4",
      summary: "Nickelodeon+ demo developed as a part of my intern project at Nickelodeon",
      details: [
        "Served as a frontend developer and software engineer on the NICKtern project to build a working demo using  TypeScript, React, Node.js, and JSON",
        "Collaborated with 17 interns from art, development, and marketing teams as well as HR and Studio Learning to incorporate ideas and feedback iteratively to deliver a final product with our vision and objectives",
        "Implemented unique streaming platform features, including search functionality, email-based 2FA, a drag-and-drop sticker canvas, and an avatar customization interface, contributing to a successful pitch and positive feedback from 40+ people"

      ],
      video: '',
      collaborators: 'Summer 2024 NICKterns',
      projectType: 'SWE'}, 
      { css: plugin1, 
        hoverImages: [plantgendemo1,plant1, plantgendemo2, plant2, plant3, plugin3, plugin1],
        height: 1730,
        description: "Maya Plugin for Rapid Plant Generation", 
        skills: "Maya Tools | Python | Qt | MEL ", 
        link:"https://github.com/nMDaas/PlantGeneratorPluginMaya",
        linkInfo: "View GitHub Repo",
        summary: "Maya Tool to streamline generation of stylized and customizable plants",
        details: [
          "Developed this tool to reduce the time taken to model plants in Maya using Python and MEL scripting",
          "Eliminated inefficient processes in plant part modeling by enabling one-click and bulk duplication, modification, and connection",
          "Provided distortion, tilting and scaling options via a user-friendly GUI to allow customization over plant geometry",
          "Enabled ability generate various plant varieties and arrangements through quick distribution plant parts around other plant parts or a concentrated location"
        ],
        video: '',
        collaborators: '' ,
        projectType: 'tools'},
    { css: houdini8, 
      hoverImages: [houdini1, houdini2, houdini3, houdini4, houdini5, houdini6, houdini7, houdini8],
      height: 1730,
      description: "Image-Guided Terrain Generator for Unity Export", 
      skills: "Houdini Tools | Python | Qt | Vex", 
      linkInfo: "View GitHub Repo",
      link:"https://github.com/nMDaas/houdiniCapstone",
      summary: "Houdini Tool to accelerate geographical landscape and urban landscape creation",
      details: [
        "Developed a Houdini shelf tool to supplement Unity\’s Terrain Tools Package, enhancing customization while making the workflow accessible to non-Houdini users in game development pipelines.",
        "Streamlined terrain prototyping and iteration by designing a step-by-step procedural workflow with image reload support and backtracking.",
        "Integrated map inputs, enabling artists to define terrain elevation, surface characteristics, and water visualization for more deliberate, gameplay-driven terrain generation.",
        "Prepared terrains for OBJ export with adjustable LOD, enabling seamless integration into Unity\’s Terrain Tools Package workflow."
      ],
      video: '',
      collaborators: '',
      projectType: 'tools'  },
    { css: substancePluginImage, 
      hoverImages: [substancePluginImage, substancePluginDemo1, substancePluginDemo2],
      height: 1730,
      description: "Maya Adobe Substance Painter Plugin", 
      skills: "Maya Tools | Python | Qt | MEL ", 
      linkInfo: "View GitHub Repo",
      link:"https://github.com/nMDaas/AIStandardSurfaceSubstancePainterPluginMaya",
      summary: "Maya Tool to streamline import and assignment of AI standard surface textures from Adobe Substance Painter",
      details: [
        "Built this tool to eliminate the tedious task that comes with creating and assigning multiple AI Standard Surface textures to multiple objects or UV shells",
        "Automated creation of multiple AI Standard Surface materials through node creation and connection through batch import of texture files",
        "Scripts handled multiple case scenarios - unecessary object selection, group node selection, and nested objects within node selection",
        "Streamlined operation of UV shell-texture assignment through functions that identify an object's UV bounding box coordinates",
      ],
      video: '',
      collaborators: '',
      projectType: 'tools'  },
  { css: opengl, 
    hoverImages: [opengl], 
    height: 1730, 
    description: "Trackball, Lighting, Texturing and Animation in OpenGL",
    skills: "C++ | OpenGL | GLSL | Graphics Programming",
    link: "https://github.com/nMDaas/OpenGLProject",
    linkInfo: "View GitHub Repo",
    summary: "Interactive OpenGL-based system for implementing trackball movement, camera control, lighting, and texturing in computer graphics",
    details: [
      "Implemented trackball effect as seen in applications like Maya and Blender",
      "Programmed movements of a global camera, helicopter camera and first person camera",
      "Applied the visitor pattern in C++ to implement hierarchical rendering of nodes in scene",
      "Allows specification of ambient, diffuse and specular properties for lights and materials",
      "Developed ability to create spotlights and texture objects"
    ],
  video: '',
  vidHeight: "400px",
  vidWidth: "400px",
  collaborators: 'Natalie Potapov',
  projectType: 'graphics'
},
  { css: portfolio, 
    hoverImages: [portfolio2, portfolio], 
    height: 1730, 
    description: "Personal Website", 
    linkInfo: "View GitHub Repo",
    skills: "Typescript | React | GSAP | Three.js | MUI | Software Development Life Cycle (SDLC)", link: "https://github.com/nMDaas/natasha-daas-website",
    summary: "Website deployed using GitHub Pages to showcase my interests in and projects related to programming, computer graphics, 3D animation and modeling.",
    details: [
      "Developed an engaging and visually striking GUI using React, GSAP, Three.js, and the MUI library by creating interactive custom UI/UX components",
      "Improved responsiveness, performance and appearance on  7-8 devices and device sizes using Vite and Typescript",
      "Enhanced website performance, speed and loading time by debugging using DevTools and Web Inspector"
    ],
    video: '' ,
    collaborators: '',
    projectType: 'SWE'
  },
  { css: photoeditor, hoverImages: [photoeditor2, photoeditor3, photoeditor4, photoeditor], height: 1730, description: "Photo Editor", skills: "Java | Object-Oriented Programming (OOP)| MVC Pattern", link: "https://github.com/nMDaas/Photo-Editor",
    details: [
      "Designed and programmed a user-friendly GUI for a Photo Editor Application",
      "Featured image manipulation tools such as blurring, sharpening, brightening, flipping, and filtering, including grayscale, sepia, and RGB filters",
      "Applied object-oriented programming principles (OOP) and the model-view-controller (MVC) pattern to create a flexible, scalable and maintainable codebase",
      "Enabled support for loading and saving images in multiple file formats, including PNG, JPG, JPEG, and PPM"    ],
    video: '' ,
    summary: "Photo Editor Application with image manipulation, format support, and MVC architecture",
    linkInfo: "View GitHub Repo",
    collaborators: '',
    projectType: 'SWE'
  },
  { css: productionplan, hoverImages: [productionplan2, productionplan3, productionplan], height: 1730, description: "Animation Production Plan Generator", 
    skills: "Javascript | Typescript | Generative AI | React | HCI | Software Development Life Cycle (SDLC)", link: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
    summary: "AI-powered web application to streamline animation production generation and management",
    details: [
      "Streamlined production management and task tracking by taking user-provided project details as input",
      "Leveraged OpenAI to auto-generate tabular plans with milestones, descriptions, and dates",
      "Enhanced user engagement and experience using Typescript and Javascript through customizable production plans, styling options and CSV export functionality",
      "Incorporated feedback from and conducted testing with 30+ animation students at NEU to refine the tool",
      "Testing showed faster plan generation, production tracking efficiency, and greater flexibility in modifying and updating plans"
    ],
    video: '' ,
    linkInfo: "View GitHub Repo",
    collaborators: 'Abby Dennin, Meredith Scott, Sophia Allen',
    projectType: 'SWE'
  },
  { css: spirograph,
    hoverImages: [spirograph], 
    height: 1730, 
    description: "Spirograph Animation", 
    skills: "C++ | OpenGL | 2D Animation | Graphics Programming",
    link:"https://github.com/nMDaas/Spirograph/tree/main",
    linkInfo: "View GitHub Repo",
    summary: "A fun animation developed using OpenGL and C++ to visualize a spirograph and how its pattern changes with changes in circle size",
    details: [],
    video: '',
    vidHeight: "400px",
    vidWidth: "400px",
    collaborators: '', 
    projectType: 'graphics'},
  { css: bakeapp, hoverImages: [bakeryapp], height: 1730, description: "Bakery App", skills: "mySQL | Java | JDBC", link: "https://github.com/nMDaas/BakeryApp",
    summary: "Console based app to help users manage kitchen inventory and discover, save and post baking recipes",
    details: [
      "Designed the Conceptual and Logical Design of the database, including tables, relationships, and the User Activity Diagram, to establish the schema design and application flow from user perspective",
      "Implemented SQL queries, aggregate functions, foreign keys, join operations, and dynamic queries to retrieve, filter, and summarize data, providing user-friendly feedback based on recipe types, user interests, and missing ingredients",
      "Developed the backend controller logic in Java and utilized the JDBC connector to interface with the database, integrating SQL queries and triggers to manage data interactions",
    ],
    video: '' ,
    collaborators: 'Caroline Southard-Smith',
    projectType: 'SWE',
    linkInfo: "View GitHub Repo",
  },
]
