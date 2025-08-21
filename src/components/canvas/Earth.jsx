import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import StaticEarth from "D:\\My Portfolio\\Portfolio_doc\\src\\assets\\staticEarth.png"; 

const Earth = () => {
  const earth = useGLTF("./planet/scene.glb");

  return (
    <primitive
      object={earth.scene}
      scale={2.7}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      {isMobile ? (
        <img
          src={StaticEarth}            // static Earth for mobile
          alt="Static Earth"
          className="absolute -top-10 left-0 w-full h-full object-contain"
        />
      ) : (
        <Canvas                               // 3d model for other devicess
          className="absolute top-0 left-0"
          shadows={false}
          dpr={[1, 1.5]}
          camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
