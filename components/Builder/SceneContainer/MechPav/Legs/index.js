import { Box, Float } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import data from "@/components/Builder/Controls/Options/data";

export function Legs(props) {
    let model;

    if (props.selected?.legs !== undefined) {
        model =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['legs'][props.selected?.legs]?.model}.gltf`
            );
    }
    else {
        model =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Frame_Legs.gltf`
            );
    }
    useLayoutEffect(() => model.scene.traverse(o => o.isMesh && (o.castShadow = true)), [model])
    return (
        <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[-3, -4.1, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
        </Float>
        // <Box castShadow receiveShadow ref={boxRef} position={[0, 0.5, 0]}>
        //     <meshStandardMaterial attach="material" color="white" />
        // </Box>
    );
}
