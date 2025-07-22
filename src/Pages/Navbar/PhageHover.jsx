import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

const AnimatedPhage = ({ modelPath }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime();
      group.current.position.y = 0.1 * Math.sin(t);
      group.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={group} object={scene} scale={30.5} />;
};

const PhageHover = () => {
  return (
    <div className="phage-left-wrapper">
      <Canvas camera={{ position: [1, 1, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <directionalLight position={[-2, -2, -2]} intensity={0.5} />
        <Suspense fallback={null}>
          <AnimatedPhage modelPath="/models/phage.glb" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PhageHover;
