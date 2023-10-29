import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import data from "@/components/Builder/Controls/Options/data";
export function Backpack(props) {
    let model;

    if (props.selected?.backpack) {
        let modelX =
            useLoader(
                GLTFLoader,
                `${process.env.NEXT_PUBLIC_MECH_FILES}/${data['backpack'][props.selected?.backpack]?.model}.gltf`
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
