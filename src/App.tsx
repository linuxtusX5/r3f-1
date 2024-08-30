import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

function Scene() {
  const { scene } = useLoader(GLTFLoader, "/models/scene.gltf");

  // Optionally adjust scale and position
  scene.scale.set(0.5, 0.5, 0.5);
  scene.position.set(0, 0, 0);

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const material = (child as THREE.Mesh).material;
      console.log(material);
    }
  });

  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas camera={{ position: [5, 5, 0] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={5} />
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
