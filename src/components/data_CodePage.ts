import raytracer from '/code/raytracer/RT_finalRender.jpg';
import productionplan from '/code/productionplanner.jpg';
import bakeryapp from '/code/bakeapp.jpg';
import plugin2 from '/code/plugin2.jpg';
import plugin3 from '/code/plantPlugin/PP_plugin3.jpg';
import portfolio from '/code/portfolio.jpg';
import portfolio2 from '/code/portfolio2.jpg';
import bakeapp from '/code/bakeapp.jpg';
import productionplan2 from '/code/rh.jpg';
import productionplan3 from '/code/ri.jpg';
import blank from '/code/blank.jpg';
import spirograph from '/code/spirograph.mp4'
import substancePluginImage from "/code/substancePlugin/SB_Image.jpg"
import substancePluginDemo1 from '/code/substancePlugin/SB_Demo1.mp4'
import substancePluginDemo2 from '/code/substancePlugin/SB_Demo2.mp4'
import nickHome from '/code/Nickelodeon+/N_homePage.mp4'
import terrainGenerator8 from '/code/terrainGenerator/TG_UnitySetup.png'
import particlesim6 from '/code/particleSimulation/PS_Comparison1.mp4'
/* Psyduck */
import psyduck from '/code/psyduckHunt/PH_preview.mp4';
/* Renderstack */
import Renderstack from '/code/renderstack/RS_orbitControlsAndHyperLinks.mp4';
/* Maya USD Variant Author Toolkit */
import VariantAuthorToolkit from '/code/variantAuthorToolkit/toolkitVisual.mp4'


export default [
  { css: VariantAuthorToolkit, 
    vimVideo: "https://player.vimeo.com/video/1195622007?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
    height: 1100,
    description: "Maya USD Variant Author Toolkit", 
    skills: "Maya | USD | Python | PySide | Qt", 
    linkInfo: "View GitHub Repo",
    link:"https://github.com/nMDaas/Maya-USD-Variant-Manager",
    summary: "An open-source custom shelf to support variant set authoring and editing within Maya",
    details: [
      "Developed a custom shelf toolkit in Maya for authoring and editing USD variant sets in Maya",
      "Addressed pipeline usability issues including paywalled tools, limited documentation, and complexity of the Bifrost Graph Editor",
      "Implemented 3 tools supporting modeling, transform, and material variants, handling deeply nested variant workflows",
      "Designed modular, object-oriented architecture using the command design pattern to separate UI and Maya/USD logic layers",
      "Conducted 7 rounds of user testing and iteration with Maya and technical users, leading to bug fixes, improved input validation, clearer UI feedback, and UX improvements",
      "Implemented robust error handling for missing inputs, invalid selections, prim type validation, and variant naming rules",
      "Authored beginner-friendly documentation teaching USD concepts and toolkit usage, including a written walkthrough and 10-minute video guide",
    ],
    video: '',
    collaborators: '',
    projectType: 'tools'  },
  { css: terrainGenerator8, 
      vimVideo: "https://player.vimeo.com/video/1195642365?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
      height: 1100,
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
    { css: substancePluginDemo1, 
      vimVideo: "https://player.vimeo.com/video/1195703326?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
      height: 1100,
      description: "AI Standard Surface Pipeline Tool (Substance Painter → Maya)", 
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
    { css: particlesim6,
    vimVideo: "https://player.vimeo.com/video/1195715560?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
    height: 1100, description: "Fluid Particle Simulation Engine",
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
      { css: plugin3, 
        vimVideo: "https://player.vimeo.com/video/1195963857?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
        height: 1100,
        description: "Plant Generator Plugin", 
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
    { blank: blank,
    css: raytracer, 
    vimVideo: "https://player.vimeo.com/video/1196189469?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
    height: 1100, description: "Raytracer",
     skills: "C++ | OpenGL | Graphics Programming ", 
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
  { css: psyduck, 
    vimVideo: "https://player.vimeo.com/video/1196190758?title=0&byline=0&portrait=0&controls=1&background=0&loop=1",
    height: 1100, description: "Psyduck Hunt",
     skills: "Unity | C# | Blender", 
     link:"https://youtu.be/ieZEHAfgGZY",
     summary: "3D Game Made In Unity",
     linkInfo: "View YouTube Demo",
     details: [
        "Implemented game mechanics, character animations, and character interactions in Unity",
        "Scripted a custom toon shader in Unity for cartoon cell shading",
        "Animated characters and character interactions using 3D Math and Linear Algebra",
        "Rigged characters and assets using Blender and Mixamo",
        "Managed NPC navigations using NavMesh and camera movements using CineMachine",
        //"Sculpted and textured terrain in Unity while importing assets from Polytope Studio and Free3D",
     ],
    },
  { css: Renderstack, 
    vimVideo: "https://player.vimeo.com/video/1196202846?title=0&byline=0&portrait=0&controls=1&background=0&loop=1&muted=1",
      height: 1100,
      description: "Renderstack", 
      skills: "TypeScript | Three.js | React | MongoDB | CI/CD", 
      linkInfo: "View GitHub Repo",
      link:"https://github.com/neu-cs4530/fall25-project-group-201",
      summary: "A collaborative, interactive forum for 3D artists and graphics programmers, inspired by Stack Overflow",
      details: [
        "Developed a full-stack web application using Scrum/Agile practices",
        "Created RESTful API endpoints supporting CRUD operations for questions, answers, gallery posts, comments, and media content",
        "Developed media asset management features, including upload, download, and permission controls for 3D files and other user-generated content",
        "Spearheaded 3D viewport interactivity, implementing orbit controls and orthographic/perspective view toggling", 
        "Implemented camera hyperlinking functionality for question and answer posts, enabling direct navigation to specific camera viewpoints within the 3D scene",
        "Built CI/CD pipelines for automated end-to-end testing, utilizing Jest for backend testing and Cypress for frontend testing",
      ],
      video: '',
      collaborators: 'Catherine Azelby, Erika Ding, Meredith Scott',
      projectType: 'SWE'},
  { css: nickHome, 
      height: 1100,
      description: "Nickelodeon+", 
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
      collaborators: '2024 NICKterns',
      projectType: 'SWE'}
]

// Archiving Projects: 

/*{ css: portfolio, 
    hoverImages: [portfolio2, portfolio], 
    height: 1100, 
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
  },*/
  /*
  { css: productionplan, hoverImages: [productionplan2, productionplan3, productionplan], height: 1100, description: "Animation Production Plan Generator", 
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
  */
  /*
  { css: spirograph,
    hoverImages: [spirograph], 
    height: 1100, 
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
  */
 /*
  { css: bakeapp, hoverImages: [bakeryapp], height: 1100, description: "Bakery App", skills: "mySQL | Java | JDBC", link: "https://github.com/nMDaas/BakeryApp",
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
  },*/
