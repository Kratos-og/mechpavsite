import { OrbitControls, PerspectiveCamera, Environment, Float, Shadow, Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Backpack } from "./MechPav/Backpack";
import { Arms } from "./MechPav/Hands";
import { Legs } from "./MechPav/Legs";
import { Platform } from "./MechPav/Platform";
import { Torso } from "./MechPav/Torso";
import Annotations from "./MechPav/Annotations";

export function SceneContainer(props) {
    const lightRef = useRef(null);
    console.log(props.selectedParts.torso)
    return (
        <Suspense fallback={null}>
            <directionalLight
                position={[70, 15, 70]}
                intensity={1.25}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            {/*<pointLight ref={lightRef} position={[-70, 25, 70]} intensity={1} castShadow />
               <pointLight position={[70, 15, 70]} intensity={1.5} castShadow={true} />
            <pointLight position={[-70, 45, -70]} intensity={1.5} /> */}
            {/* <Environment background={"only"} files={"/assets/models/textures/bg.hdr"} /> */}

            <Environment background files={`/assets/models/environments/${props.env}.hdr`} blur={0.06} />

            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 30]} />
            <OrbitControls target={[0, 2, 0]} maxPolarAngle={Math.PI * 0.5} maxDistance={35} minDistance={6} />

            <Platform />
            <Torso selected={props.selectedParts} />
            <Arms selected={props.selectedParts} />
            <Backpack selected={props.selectedParts} />
            <Legs selected={props.selectedParts} />
            <Annotations selected={props.selectedParts} saveInit={props.saveInit} />
        </Suspense>
    );
}
