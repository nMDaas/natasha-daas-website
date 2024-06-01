import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const ThreeJSComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const white = new THREE.Color("rgb(255, 255, 255)");
    const lightColor = new THREE.Color("rgb(77, 60, 62)");

    camera.position.z = 5;

    const directionalLight = new THREE.DirectionalLight(white, 20);
    directionalLight.position.x = -30;
    directionalLight.position.z = 50;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(white, 5);
    directionalLight2.position.x = 30;
    directionalLight2.position.z = 50;
    //scene.add(directionalLight2);

    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      '/natasha-daas-website/other/succulentUVs.fbx', // Adjust path to the FBX file
      (object) => {
        object.position.set(0,-70,-1000);
        object.scale.set(30, 30, 30); // Adjust scale as necessary
        object.rotation.x = Math.PI / 2;

        // Apply a material with a color
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100, reflectivity: 1 });
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log(error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
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
  }, []); // No dependencies

  return (
    <div ref={mountRef} />
  );
};

export default ThreeJSComponent;
