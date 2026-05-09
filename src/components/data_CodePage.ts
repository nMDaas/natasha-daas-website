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
import productionplan2 from '/code/rh.jpg';
import productionplan3 from '/code/ri.jpg';
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
import terrainGenerator1 from '/code/TG/TG_ToolResults.png'
import terrainGenerator2 from '/code/TG/TG_ToolWorkflow.png'
import terrainGenerator3 from '/code/TG/TG_Breakdown1.png'
import terrainGenerator4 from '/code/TG/TG_Breakdown2.png'
import terrainGenerator5 from '/code/TG/TG_TerrainElevation.png'
import terrainGenerator6 from '/code/TG/TG_ElevationResults1.png'
import terrainGenerator7 from '/code/TG/TG_ElevationResults2.png'
import terrainGenerator8 from '/code/TG/TG_UnitySetup.png'
import particlesim1 from '/code/particlesim/2D.mp4'
import particlesim2 from '/code/particlesim/Fluid_Fall.mp4'
import particlesim3 from '/code/particlesim/Containers.mp4'
import particlesim4 from '/code/particlesim/Performance.mp4'
import particlesim5 from '/code/particlesim/Raymarch_Breakdown.mp4'
import particlesim6 from '/code/particlesim/Comparison1.mp4'
import particlesim7 from '/code/particlesim/Comparison2.mp4'
import particlesim8 from '/code/particlesim/closeup_shot.png'
import psyduck from '/games/PsyduckHuntPreview.mp4';

export default [
  { css: terrainGenerator8, 
      hoverImages: [terrainGenerator1, terrainGenerator2, terrainGenerator3, terrainGenerator4, terrainGenerator5, terrainGenerator6, terrainGenerator7, terrainGenerator8],
      height: 1200,
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
      hoverImages: [substancePluginDemo1, substancePluginDemo2, substancePluginImage],
      height: 1200,
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
    hoverImages: [particlesim6, particlesim3, particlesim4, particlesim5, particlesim2, particlesim7, particlesim8, particlesim1], 
    height: 1200, description: "Fluid Particle Simulation Engine",
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
      { css: plugin1, 
        hoverImages: [plantgendemo1,plant1, plantgendemo2, plant2, plant3, plugin3, plugin1],
        height: 1200,
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
    hoverImages: [raytracer, raytracer3, raytracer4, raytracer2], 
    height: 1200, description: "Raytracer",
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
    hoverImages: [psyduck], 
    height: 1200, description: "Psyduck Hunt",
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
  { css: nickContent, 
      hoverImages: [nickHome, nickChar, nickSearch, nickSettings, nickLayout],
      height: 1200,
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
      collaborators: 'Summer 2024 NICKterns',
      projectType: 'SWE'}
]

// Archiving Projects: 

/*{ css: portfolio, 
    hoverImages: [portfolio2, portfolio], 
    height: 1200, 
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
  { css: productionplan, hoverImages: [productionplan2, productionplan3, productionplan], height: 1200, description: "Animation Production Plan Generator", 
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
    height: 1200, 
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
  { css: bakeapp, hoverImages: [bakeryapp], height: 1200, description: "Bakery App", skills: "mySQL | Java | JDBC", link: "https://github.com/nMDaas/BakeryApp",
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
