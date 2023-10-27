import { Box, Float } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Legs(props) {
    let model;

    if (props.selected?.legs) {
        model =
            useLoader(
                GLTFLoader,
                `/assets/models/legs/${props.selected?.legs}.gltf`
            );
    }
    else {
        model =
            useLoader(
                GLTFLoader,
                `/assets/models/legs/legs.gltf`
            );
    }
    useLayoutEffect(() => model.scene.traverse(o => o.isMesh && (o.castShadow = true)), [model])
    return (
        <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[1.5, -6, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
        </Float>
        // <Box castShadow receiveShadow ref={boxRef} position={[0, 0.5, 0]}>
        //     <meshStandardMaterial attach="material" color="white" />
        // </Box>
    );
}
