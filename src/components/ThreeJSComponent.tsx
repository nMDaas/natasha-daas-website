import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import './Three.css';

const ThreeJSComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const textureRef = useRef<THREE.Texture | null>(null);

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

    camera.position.z = 5;

    function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }

    const imgUrl = '/natasha-daas-website/art/test0compress.jpg';

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

      const white = new THREE.Color("rgb(255, 255, 255)");
    const lightColor = new THREE.Color("rgb(77, 60, 62)");
    const lightPeach = new THREE.Color("rgb(242, 201, 191)");
    const darkPeach = new THREE.Color("rgb(189, 128, 115)");

      const edgesGeometry = new THREE.EdgesGeometry(textGeometry);
      const outlineMaterial = new THREE.LineBasicMaterial({ color: lightColor });
      const outlineMesh = new THREE.LineSegments(edgesGeometry, outlineMaterial);

      const filledMaterial = new THREE.MeshBasicMaterial({ color: darkPeach }); // Fill color
      const filledMesh = new THREE.Mesh(textGeometry, filledMaterial);

      textGeometry.computeBoundingBox();
      const centerOffset = -0.5 * (textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x);
      outlineMesh.position.x = centerOffset;
      filledMesh.position.x = centerOffset;

      outlineMesh.position.z = isMobileDevice() ? -2.0 : 0.0;
      filledMesh.position.z = outlineMesh.position.z - 0.1;

      filledMesh.position.y = isMobileDevice() ? -4.0 : 0.7;
      outlineMesh.position.y = isMobileDevice() ? -4.0 : 0.7;

      scene.add(outlineMesh);
      scene.add(filledMesh);
    });

    const loader = new THREE.TextureLoader();
    const texture = loader.load(imgUrl, (loadedTexture) => {
      textureRef.current = loadedTexture;
      texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

      // Set background
      scene.background = texture;
      scene.backgroundIntensity = 1.0;

      handleWindowResize(); // Initially adjust texture scale
    });

    const handleWindowResize = () => {
      if (!textureRef.current) return;

      const texture = textureRef.current;

      const aspect = window.innerWidth / window.innerHeight;
      const width = aspect > 1 ? 1 : aspect;
      const height = aspect > 1 ? 1 / aspect : 1;

      texture.repeat.set(width/0.6, height/0.6);
      texture.offset.set(0, 0);
      texture.center.set(0.5, 0.5);
      texture.needsUpdate = true;

      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div className="threeComponent" ref={mountRef} />;
};

export default ThreeJSComponent;
