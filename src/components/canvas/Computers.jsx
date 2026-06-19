import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import StaticComputer from "../../assets/staticComputer.png";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.6}
        castShadow={false}
      />
      <pointLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.28 : 0.7}
        position={isMobile ? [0, -0.5, -1] : [0, -3.9, -1.0]}
        rotation={[-0.07, -0.6, -0.05]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      {isMobile ? (
        <img
          src={StaticComputer}
          alt="Static Computer"
          className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[100%] max-w-[470px]  object-contain"
          style={{ pointerEvents: "none" }}
        />
      ) : (
        // Canvas re-enables pointer events so OrbitControls / drag works
        <Canvas
          style={{ pointerEvents: "auto" }}
          shadows={false}
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={false} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;