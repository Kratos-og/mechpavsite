import data from "@/components/Builder/Controls/Options/data";
import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Torso(props) {
    let model;
    console.log(props.selected)
    if (props.selected?.torso) {
        let modelX =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['torso'][props.selected?.torso]?.model}.gltf`
            ).scene;
        model = modelX.clone();
    }

    return (
        model ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={props.position}
            scale={props.scale}
        >
            <primitive object={model} />
        </Float> : null
    );
}
