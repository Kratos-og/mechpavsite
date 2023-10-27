import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Frame(props) {
    let model =
        useLoader(
            GLTFLoader,
            `/assets/models/frame/frame.gltf`
        );


    return (
        model ? <Float
            speed={0}
            rotationIntensity={0}
            floatIntensity={0}
            position={[2, -4, 0]}
            scale={7}
        >
            <primitive object={model.scene} />
        </Float> : null
    );
}
