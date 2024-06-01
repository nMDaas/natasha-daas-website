import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import "./Three.css"

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
    const lightPeach = new THREE.Color("rgb(242, 201, 191)");
    const darkPeach = new THREE.Color("rgb(189, 128, 115)");

    camera.position.z = 5;

    const directionalLight = new THREE.DirectionalLight(white, 10);
    directionalLight.position.x = -30;
    directionalLight.position.z = 50;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(lightColor, 0);
    directionalLight2.position.x = 30;
    directionalLight2.position.z = 50;
    scene.add(directionalLight2);

    const fontLoader = new FontLoader();
    fontLoader.load('/natasha-daas-website/other/Natashafont_Regular.json', (font) => {
      const textGeometry = new TextGeometry('Natasha M Daas', {
        font: font,
        size: 0.7,
        height: 0,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Create outline geometry
      const edgesGeometry = new THREE.EdgesGeometry(textGeometry);
      const outlineMaterial = new THREE.LineBasicMaterial({ color: lightColor });
      const outlineMesh = new THREE.LineSegments(edgesGeometry, outlineMaterial);

      // Create filled text geometry
      const filledMaterial = new THREE.MeshBasicMaterial({ color: darkPeach }); // Fill color
      const filledMesh = new THREE.Mesh(textGeometry, filledMaterial);

      // Center the text
      textGeometry.computeBoundingBox();
      const centerOffset = -0.5 * (textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x);
      outlineMesh.position.x = centerOffset;
      filledMesh.position.x = centerOffset;

      filledMesh.position.z = outlineMesh.position.z - 0.1;

      scene.add(outlineMesh);
      scene.add(filledMesh);
    });

    const loader = new THREE.TextureLoader();
    const texture = loader.load("/natasha-daas-website/art/test2.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    scene.background = texture;
    scene.backgroundIntensity = 0.9;

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
    <div className="threeComponent" ref={mountRef} />
  );
};

export default ThreeJSComponent;