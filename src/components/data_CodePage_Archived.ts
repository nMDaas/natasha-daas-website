/* Photo Editor */
import PhotoEditor from '/code/photoeditor/gui.jpg';
import PE_blur_sharp from '/code/photoeditor/blur_sharp_example.jpg';
import PE_brightness from '/code/photoeditor/brightness_example.jpg';
import PE_filters from '/code/photoeditor/filters_example.jpg';
/* Lilypad Parkout */
import LilypadParkour from '/code/lilypadParkour/LilypadParkour.mp4';
/* OpenGL Projects */
import OpenGLProjects from '/code/openGL/opengl.mp4';

export default [
    { 
        css: OpenGLProjects, 
        hoverImages: [OpenGLProjects], 
        height: 1200, 
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
    {   
        css: LilypadParkour, 
        hoverImages: [LilypadParkour], 
        height: 1200, 
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
        collaborators: 'Aiyan Jiang, Avery Corbin, Joshua Sun',
    },
    { 
        css: PhotoEditor, 
        hoverImages: [PhotoEditor, PE_blur_sharp, PE_brightness, PE_filters], 
        height: 1200, 
        description: "Photo Editor", 
        skills: "Java | Object-Oriented Programming (OOP)", 
        link: "https://github.com/nMDaas/Photo-Editor",
        details: [
            "Designed and programmed a user-friendly GUI for a Photo Editor Application",
            "Featured image manipulation tools such as blurring, sharpening, brightening, flipping, and filtering, including grayscale, sepia, and RGB filters",
            "Applied object-oriented programming principles (OOP) and the model-view-controller (MVC) pattern to create a flexible, scalable and maintainable codebase",
            "Enabled support for loading and saving images in multiple file formats, including PNG, JPG, JPEG, and PPM"   
         ],
        video: '' ,
        summary: "Photo Editor Application with image manipulation, format support, and MVC architecture",
        linkInfo: "View GitHub Repo",
        collaborators: '',
        projectType: 'SWE'
    }
]