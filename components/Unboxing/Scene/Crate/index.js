import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Crate = props => {
    let gltf = useLoader(GLTFLoader, '/assets/models/MP_Crate.glb')
    useLayoutEffect(() => gltf.scene.traverse(o => o.isMesh && (o.castShadow = o.receiveShadow = true)),
        [])
    return (
        <Float receiveShadow castShadow
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[0, -1, 0]}
            scale={3}
        >
            <primitive object={gltf.scene} />
        </Float>
    );
}

export default Crate;