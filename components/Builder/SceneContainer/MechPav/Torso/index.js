import data from "@/components/Builder/Controls/Options/data";
import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Torso(props) {
    let model;
    let capsule;

    if (props.selected?.torso !== undefined) {
        model =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['torso'][props.selected?.torso]?.model}.gltf`
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
    useLayoutEffect(() => model.scene.traverse(o => o.isMesh && (o.castShadow = true)), [model])
    return (
        model ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[0, -4, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
            {capsule ? <primitive object={capsule.scene}/> : null}
        </Float> : null
    );
}
