import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

const ThreeJSComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
  });

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const white = new THREE.Color("rgb(255, 255, 255)");
    const peachColor = new THREE.Color("rgb(60, 57, 58)");
    const lightColor = new THREE.Color("rgb(227, 118, 64)");
    const lightColor2 = new THREE.Color("rgb(189, 157, 237)");

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: peachColor, shininess: 1, reflectivity: 1 });
    const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    camera.position.z = 5;

    // a light is required for MeshPhongMaterial to be seen
    const directionalLight = new THREE.DirectionalLight(white, 5);
    directionalLight.position.x = -30;
    directionalLight.position.z = 50;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(lightColor, 2);
    directionalLight2.position.x = 30;
    directionalLight2.position.z = 50;
    scene.add(directionalLight2);

    const fontLoader = new FontLoader();
    fontLoader.load('/natasha-daas-website/other/Natashafont_Regular.json', (font) => {
      const textGeometry = new TextGeometry('Hi, I\'m Natasha!', {
        font: font,
        size: 0.7,
        height: 0,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Create a material and mesh
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const textMesh = new THREE.Mesh(textGeometry, material);
      textMesh.castShadow = true;
      scene.add(textMesh);

      
      // Center the text
      textGeometry.computeBoundingBox();
      const centerOffset = -0.5 * (textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x);
      textMesh.position.x = centerOffset;
    });

    const loader = new THREE.TextureLoader();
    // for reference: https://threejs.org/examples/textures/uv_grid_opengl.jpg
    const texture = loader.load("/natasha-daas-website/art/test.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    scene.background = texture;
    scene.backgroundIntensity = 0.9;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeJSComponent;
