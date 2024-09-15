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
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1500);
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

    function getWindowType() {
      const width = window.innerWidth;
    
      if (width <= 768) {
        // Small window (e.g., mobile)
        return 'small';
      } else if (width > 768 && width <= 1024) {
        // Medium window (e.g., tablet)
        return 'medium';
      } else {
        // Large window (e.g., desktop)
        return 'large';
      }
    }

    const imgUrl = '/natasha-daas-website/art/test20clean.png';

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

      const textGeometry2 = new TextGeometry('(P.S. I Made This Website!)', {
        font: font,
        size: 0.3,
        height: 0,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 5.0,
        bevelSize: 100.0,
        bevelOffset: 100,
        bevelSegments: 100,
      });

      const lightColor = new THREE.Color("rgb(77, 60, 62)");
      const darkPeach = new THREE.Color("rgb(189, 128, 115)");

      const edgesGeometry = new THREE.EdgesGeometry(textGeometry);
      const outlineMaterial = new THREE.LineBasicMaterial({ color: lightColor });
      const outlineMesh = new THREE.LineSegments(edgesGeometry, outlineMaterial);

      const filledMaterial = new THREE.MeshBasicMaterial({ color: darkPeach }); // Fill color
      const filledMesh = new THREE.Mesh(textGeometry, filledMaterial);
      const filledMesh2 = new THREE.Mesh(textGeometry2, filledMaterial);

      textGeometry.computeBoundingBox();
      const centerOffset = -0.5 * (textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x);
      outlineMesh.position.x = centerOffset;
      filledMesh.position.x = centerOffset;
      filledMesh2.position.x = centerOffset + 0.9;

      const windowType = getWindowType();

      switch (windowType) {
        case 'small':
          outlineMesh.position.z = -2.0;
          filledMesh.position.z = -2.1;
          filledMesh2.position.z = -2.1;
          filledMesh.position.y = -3.0;
          outlineMesh.position.y = -3.0;
          filledMesh2.position.y = -3.5;
          break;
        case 'medium':
          
          break;
        case 'large':
          outlineMesh.position.z = 0.0;
          filledMesh.position.z = -0.1;
          filledMesh2.position.z = -0.1;
          filledMesh.position.y = -3.35;
          outlineMesh.position.y = -3.35;
          filledMesh2.position.y = -3.8;
          break;
      }

      //outlineMesh.position.z = isMobileDevice() ? -2.0 : 0.0;
      //filledMesh.position.z = outlineMesh.position.z - 0.1;
      //filledMesh2.position.z = outlineMesh.position.z - 0.1;

      //filledMesh.position.y = isMobileDevice() ? -3.0 : -3.35;
      //outlineMesh.position.y = isMobileDevice() ? -3.0 : -3.35;
      //filledMesh2.position.y = isMobileDevice() ? -3.5 : -3.8;

      scene.add(outlineMesh);
      scene.add(filledMesh);
      scene.add(filledMesh2)
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

      // Custom scaling factors
      const imageScaleX = 1.1; 
      const imageScaleY = 1.1; 

      const aspect = window.innerWidth / window.innerHeight;
      const width = aspect > 1 ? 1 : aspect;
      const height = aspect > 1 ? 1 / aspect : 1;

      texture.repeat.set(width/0.6 * imageScaleX, height/0.6 * imageScaleY);
      texture.offset.set(0, 0);
      texture.center.set(0.5, 0.5);
      texture.needsUpdate = true;

      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight + 5);
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
