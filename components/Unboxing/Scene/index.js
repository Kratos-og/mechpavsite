import { Platform } from "@/components/Builder/SceneContainer/MechPav/Platform";
import { OrbitControls, PerspectiveCamera, Environment, Float, Shadow, Html } from "@react-three/drei";
import { Suspense } from "react";
import Crate from "./Crate";
const Scene = props => {
    return (
        <Suspense fallback={null}>
            <directionalLight
                position={[70, 15, 70]}
                intensity={1.25}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            <pointLight position={[-70, 25, 70]} intensity={1} />
            <pointLight position={[70, 15, 70]} intensity={1.5} />

            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 30]} />
            <OrbitControls target={[0, 2, 0]} maxPolarAngle={Math.PI * 0.5} autoRotate maxDistance={35} minDistance={6} />
            <Platform />
            {props.walletDetails && props.assets.length && <Crate />}
        </Suspense>
    )
}

export default Scene;