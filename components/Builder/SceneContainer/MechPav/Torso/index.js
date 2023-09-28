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
                `/assets/models/torso/torso.gltf`
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
            position={[2, -4, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
            {capsule ? <primitive object={capsule.scene} /> : null}
        </Float> : null
    );
}
