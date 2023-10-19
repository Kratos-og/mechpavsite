import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import Script from "next/script";
import { Suspense, useLayoutEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Crate = props => {
    let gltf = useLoader(GLTFLoader, '/assets/models/Mech_Crate.glb');

    useLayoutEffect(() => gltf.scene.traverse(node => {
        if (!node.isMesh) return;
        node.material.wireframe = true;
    }), []);
    

    return (
        // <Canvas>
        //     <Suspense fallback={null}>
        //         <directionalLight
        //             position={[70, 15, 70]}
        //             intensity={1.25}
        //             castShadow
        //             shadow-mapSize-height={512}
        //             shadow-mapSize-width={512}
        //         />
        //         <pointLight  position={[-70, 25, 70]} intensity={1} castShadow />
        //         <pointLight position={[70, 15, 70]} intensity={1.5} castShadow={true} />
        //         {/* <Environment background={"only"} files={"/assets/models/textures/bg.hdr"} /> */}
        //         <PerspectiveCamera makeDefault fov={50} position={[0, 0, 30]} />
        //         <OrbitControls target={[1, 1, 0]} autoRotate maxPolarAngle={Math.PI * 0.5} maxDistance={35} minDistance={6} />
        //         <Float
        //             speed={0}
        //             rotationIntensity={0}
        //             floatIntensity={0}
        //             position={[1, 1.5, 1]}
        //             scale={2.5}
        //         >
        //             <primitive object={gltf.scene} />
        //         </Float>
        //     </Suspense>
        // </Canvas>
        <div className="w-full h-full flex items-center justify-center">
            <img src="/assets/images/crate.png" className="w-[20rem] animate-"/>
        </div>
    )
}

export default Crate;