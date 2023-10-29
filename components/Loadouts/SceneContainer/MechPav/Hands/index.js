import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Arms(props) {
    let armL, armR;
    if (props.selected?.leftarm) {
        armL =
            useLoader(
                GLTFLoader,
                `/assets/models/leftarm/${props.selected?.leftarm}.gltf`
            );
    }
    else {
        armL =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Frame_Arm-L.gltf`
            );
    }

    if (props.selected?.rightarm) {
        armR =
            useLoader(
                GLTFLoader,
                `/assets/models/rightarm/${props.selected?.rightarm}.gltf`
            );
    }
    else {
        armR =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Frame_Arm-R.gltf`
            );
    }
    return (
        armL || armR ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={props.position}
            scale={props.scale}
        >
            {armL ? <primitive object={armL.scene} /> : null}
            {armR ? <primitive object={armR.scene} /> : null}
        </Float> : null
    );
}
