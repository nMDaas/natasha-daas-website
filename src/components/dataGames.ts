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
            "Collaborated with a team to implement game mechanics, character controllers, and animator controllers using C# scripts in Unity",
            "Responsible for game concept, inspired by Subway Surfers, Crossy Road and Pocket Frogs",
            "Oversaw the design and creation of game environment, including scripting for moving water",
            "Implemented lilypad spawning and particle system algorithms for game interactions using C#",
            "Character animations and interactions implemented using vector math and linear algebra, including dot product, cross product and ray casting"
        ],
        }
]
