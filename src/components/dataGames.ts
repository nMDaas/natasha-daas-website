import psyduck from '/games/PsyduckHuntPreview.mp4';
import lilypad from '/games/LilypadParkour.mp4';

export default [
  { blank: psyduck,
    css: psyduck, 
    hoverImages: [psyduck], 
    height: 1730, description: "Psyduck Hunt",
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
    {   blank: lilypad,
        css: lilypad, 
        hoverImages: [lilypad], 
        height: 1730, 
        description: "Lilypad Parkour",
        skills: "Unity | C# | Blender", 
        link:"https://youtu.be/8phOvF6Lcuk",
        summary: "3D Parkour Game Built in Unity",
        linkInfo: "View YouTube Demo",
        details: [ 
            "Collaborated with a team over GitHub and Trello to develop game mechanics, character controllers, and animator controllers using C# in Unity",
            "Conceptualized and designed the game, drawing inspiration from Subway Surfers, Crossy Road, and Pocket Frogs",
            "Designed and scripted an interactive game environment, including dynamic moving water texture mechanics",
            "Developed lilypad spawning algorithms and particle systems to enhance game interaction and functionality",
            "Implemented character animations and interactions using vector math techniques such as dot products, cross products, and ray casting for precision-based gameplay"
        ],
        }
]
