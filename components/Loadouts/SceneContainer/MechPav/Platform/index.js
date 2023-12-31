import { Float, Plane, useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Platform(props) {
    let gltf = useLoader(GLTFLoader, '/assets/models/platform.gltf')
    useLayoutEffect(() => gltf.scene.traverse(o => o.isMesh && (o.castShadow = o.receiveShadow = true)),
        [])
    return (
        <Float receiveShadow castShadow
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[-3, -4.5, 0]}
            scale={0.4}
        >
            <primitive object={gltf.scene} />
        </Float>
    );
}
