import data from "@/components/Builder/Controls/Options/data";
import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export function Arms(props) {
    let armL, armR;
    if (props.selected?.leftarm !== undefined) {
        armL =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['leftarm'][props.selected?.leftarm]?.model}.gltf`
            );
    }
    else {
        armL =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Frame_Arm-L.gltf`
            );
    }

    if (props.selected?.rightarm !== undefined) {
        armR =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['rightarm'][props.selected?.rightarm]?.model}.gltf`
            );
    }
    else {
        armR =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Frame_Arm-R.gltf`
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
            position={[0, -4, 0]}
            scale={7}
        >
            {armL ? <primitive object={armL.scene} /> : null}
            {armR ? <primitive object={armR.scene} /> : null}
        </Float> : null
    );
}
