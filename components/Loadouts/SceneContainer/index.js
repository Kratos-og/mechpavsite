import { OrbitControls, PerspectiveCamera, Environment, Float, Shadow } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Backpack } from "./MechPav/Backpack";
import { Arms } from "./MechPav/Hands";
import { Legs } from "./MechPav/Legs";
import { Platform } from "./MechPav/Platform";
import { Torso } from "./MechPav/Torso";

export function SceneContainer(props) {
    const lightRef = useRef(null);
    return (
        <Suspense fallback={null}>
            <directionalLight
                position={[70, 15, 70]}
                intensity={1.25}
            />

            <spotLight ref={lightRef} position={[100, 50, 80]} intensity={1} />
        
            <PerspectiveCamera makeDefault fov={50} position={[0, 5, 25]} />

            <OrbitControls target={[2, 3, 0]} enableZoom={false} maxPolarAngle={Math.PI * 0.5} />


            {/* <Platform /> */}
            <Torso selected={props.selectedParts} position={props.position} scale={props.scale} />
            <Arms selected={props.selectedParts} position={props.position} scale={props.scale} />
            <Backpack selected={props.selectedParts} position={props.position} scale={props.scale} />
            <Legs selected={props.selectedParts} position={props.position} scale={props.scale} />

        </Suspense>
    );
}
