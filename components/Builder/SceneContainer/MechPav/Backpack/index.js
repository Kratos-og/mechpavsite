import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



export function Backpack(props) {
    let model;

    if (props.selected?.backpack) {
        model =
            useLoader(
                GLTFLoader,
                `/assets/models/backpack/${props.selected?.backpack}.gltf`
            );
    }
    useLayoutEffect(() => model?.scene.traverse(o => o.isMesh && (o.castShadow = true)), [model])
    return (
        model ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[-3, -4, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
        </Float> : null
    );
}
