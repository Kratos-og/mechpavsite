import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Crate = props => {
    let gltf = useLoader(GLTFLoader, '/assets/models/Mech_Crate.glb');

    useLayoutEffect(() => gltf.scene.traverse(node => {
        if (!node.isMesh) return;
        node.material.wireframe = true;
    }), []);
    

    return (
        <Canvas>
            <Suspense fallback={null}>
                <directionalLight
                    position={[70, 15, 70]}
                    intensity={1.25}
                    castShadow
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                />
                <pointLight  position={[-70, 25, 70]} intensity={1} castShadow />
                <pointLight position={[70, 15, 70]} intensity={1.5} castShadow={true} />
                {/* <Environment background={"only"} files={"/assets/models/textures/bg.hdr"} /> */}
                <PerspectiveCamera makeDefault fov={25} position={[-20, 30, 20]} />
                <OrbitControls target={[0, 0, 0]} autoRotate maxPolarAngle={Math.PI * 0.5} enableZoom={false}/>
                <Float
                    speed={0}
                    rotationIntensity={0}
                    floatIntensity={0}
                    position={[1, 1.5, 1]}
                    scale={2.5}
                >
                    <primitive object={gltf.scene} />
                </Float>
            </Suspense>
        </Canvas>
        // <div className="w-full h-full flex items-center justify-center z-50 relative">
        //     <img src="/assets/images/crate.png" className="w-[20rem] animate-"/>
        // </div>
    )
}

export default Crate;