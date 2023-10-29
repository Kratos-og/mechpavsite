import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import data from "@/components/Builder/Controls/Options/data";
export function Arms(props) {
    let armL, armR;
    if (props.selected?.leftarm) {
        let armLX =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['leftarm'][props.selected?.leftarm]?.model}.gltf`
            ).scene;
        armL = armLX.clone();
    }

    if (props.selected?.rightarm) {
        let armRX =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['rightarm'][props.selected?.rightarm]?.model}.gltf`
            ).scene;
        armR = armRX.clone();
    }

    return (
        armL || armR ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={props.position}
            scale={props.scale}
        >
            {armL ? <primitive object={armL} /> : null}
            {armR ? <primitive object={armR} /> : null}
        </Float> : null
    );
}
