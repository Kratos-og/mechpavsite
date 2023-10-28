import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import data from "@/components/Builder/Controls/Options/data";


export function Backpack(props) {
    let model;

    if (props.selected?.backpack !== undefined) {
        model =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['backpack'][props.selected?.backpack]?.model}.gltf`
            );
    }
    useLayoutEffect(() => model?.scene.traverse(o => o.isMesh && (o.castShadow = true)), [model])
    return (
        model ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[0, -4, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
        </Float> : null
    );
}
