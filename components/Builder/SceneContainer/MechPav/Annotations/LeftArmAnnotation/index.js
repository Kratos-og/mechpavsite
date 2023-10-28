import { Html } from "@react-three/drei";

const LeftArmAnnotation = props => {
    return (
        <Html position={[-7, 5.5, 0]}
            
            style={{
                transition: 'all 0.5s',
                opacity: 1,
                transform: `scale(4)`,
            }}
            distanceFactor={5} scale={10}>
            <div className="w-5 h-5 rounded-full bg-white hover:bg-transparent overflow-hidden hover:border relative ripple cursor-pointer text-xs hover:w-auto hover:h-auto hover:px-4 hover:py-2 hover:rounded-none transition-all group flex items-center justify-center">
                <div className="absolute w-full h-full bg-white/30 top-0 left-0"></div>
                <div className="opacity-0 whitespace-nowrap group-hover:opacity-100">
                    <span className="text-[10px]">Type</span>: <span className="font-bold">Left Arm</span>
                </div>
                <div className="opacity-0 whitespace-nowrap group-hover:opacity-100">
                    <span className="text-[10px]">Class</span>: <span className="font-bold">Defender</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    <span className="text-[10px]">Skin</span>: <span className="font-bold">Commando</span>
                </div>
            </div>
        </Html>
    )
}

export default LeftArmAnnotation;