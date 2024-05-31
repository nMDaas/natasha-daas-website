import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import background from '/art/test.jpeg'

const ThreeJSComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const loader = new THREE.TextureLoader();
		 // for reference : https://threejs.org/examples/textures/uv_grid_opengl.jpg
     const texture = loader.load( "/natasha-daas-website/art/test.jpg" )
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
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeJSComponent;
