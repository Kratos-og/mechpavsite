import MainPartControls from "@/components/Builder/Controls/MainParts";
import Options from "@/components/Builder/Controls/Options";
import { SceneContainer } from "@/components/Builder/SceneContainer";
import Spinner from "@/components/UI/Spinner";
import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BsFillGearFill } from 'react-icons/bs';
import Settings from "@/components/Builder/SceneContainer/Settings";
import { motion } from "framer-motion";
import {TbLockExclamation} from "react-icons/tb"

export default function Builder() {
    const [activeMainPart, setActiveMainPart] = useState(null);
    const [selectedParts, setSelectedParts] = useState({});
    const [loadingModels, setLoadingModels] = useState(true);
    const [env, setEnv] = useState('kloppenheim');
    const [showSettings, setShowSettings] = useState(false);
    const onSelect = (type, name) => {
        const modSelection = { ...selectedParts };
        modSelection[type] = name;
        setSelectedParts(modSelection);
    }

    useEffect(() => {
        //platform
        try {
            if (localStorage.env)
                setEnv(localStorage.env)
            let model = useLoader(
                GLTFLoader,
                `/assets/models/platform.gltf`
            );
            if (model?.scene) {
                setLoadingModels(false)
            }
        }
        catch (err) {
            setLoadingModels(false)
        }
    }, []);

    const onEnvChange = (env) => {
        localStorage.setItem('env', env)
        setEnv(env)
    }

    return (
        <div
      className="h-screen w-screen flex justify-center items-center relative overflow-hidden bg-fixed px-10"
      id="cont"
    >
      <div>
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            left: "100%",
            transition: { delay: 0.5, duration: 1 },
          }}
          className="w-full bg-black h-full absolute"
        ></motion.div>
         <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: [30, 0, 15, 0, 10, 0, 5, 0], transition: { delay: 0.5, duration: 0.5 } }}
            className="text-black lg:text-[7rem] max-md:text-[2rem] pb-5 w-full items-center flex justify-center">
              <div className="bg-white rounded-full p-4">
            <TbLockExclamation />
              </div>
          </motion.div>
        <motion.span
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.5 },
          }}
          exit={{ visibility: "hidden" }}
          className="lg:text-[8rem] 2xl:text-[200px] whitespace-nowrap font-bold tracking-wider text-[2.5rem]"
        >
          COMING SOON
        </motion.span>
      </div>
    </div>
        // <div className="w-full h-screen relative overflow-hidden" id="cont">
        //     <div className='p-4 blurred-bg cursor-pointer rounded-lg absolute top-3 right-5 z-50' onClick={() => setShowSettings(true)}>
        //         <BsFillGearFill className='text-3xl' />
        //     </div>
        //     {!loadingModels ? <>
        //         <div className="absolute top-10 left-0 h-full flex gap-5 items-center z-40 p-10">
        //             <MainPartControls active={activeMainPart} setActiveMainPart={setActiveMainPart} />
        //             {activeMainPart && <Options active={activeMainPart} onSelect={onSelect} close={() => setActiveMainPart(null)} />}
        //         </div>
        //         <Canvas shadows="percentage">
        //             <SceneContainer selectedParts={selectedParts} env={env} />
        //         </Canvas>
        //     </>
        //         : <div className="w-full h-full flex flex-col items-center justify-center">
        //             <Spinner />
        //         </div>
        //     }
        //     <Settings setEnv={onEnvChange} show={showSettings} env={env} close={() => setShowSettings(false)} />
        // </div>
    );
}
