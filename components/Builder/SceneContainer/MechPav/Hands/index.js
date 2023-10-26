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
                `/assets/models/leftarm/armL.gltf`
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
                `/assets/models/rightarm/armR.gltf`
            );
    }
    useLayoutEffect(() => {
        armL.scene.traverse(o => o.isMesh && (o.castShadow = true));
        armR.scene.traverse(o => o.isMesh && (o.castShadow = true))
    }, [armL, armR])
    return (
        armL || armR ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[-3, -4, 0]}
            scale={7}
        >
            {armL ? <primitive object={armL.scene} /> : null}
            {armR ? <primitive object={armR.scene} /> : null}
        </Float> : null
    );
}
