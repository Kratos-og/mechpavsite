import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Torso(props) {
    let model;
    let capsule;
    if (props.selected?.torso) {
        model =
            useLoader(
                GLTFLoader,
                `/assets/models/torso/${props.selected?.torso}.gltf`
            );
    }
    else {
        model =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Frame_Body.gltf`
            );
        capsule = useLoader(
            GLTFLoader,
            `/assets/models/torso/capsule.gltf`
        );
    }
    return (
        model ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={props.position}
            scale={props.scale}
        >
            <primitive object={model.scene} />
            {capsule ? <primitive object={capsule.scene} /> : null}
        </Float> : null
    );
}
