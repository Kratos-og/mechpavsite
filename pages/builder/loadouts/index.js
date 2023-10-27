import Settings from "@/components/Builder/SceneContainer/Settings";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { SceneContainer } from "./SceneContainer";
import { SceneContainerB } from "./SceneContainerB";
import {AiOutlineDoubleRight} from "react-icons/ai"

export default function Loadouts() {
  const data={torso:["torsoDEF","torsoDSE","torsoDSP"],rightarm:["armRDEF","armRDSE","armRDSP"],leftarm:["armLDEF","armLDSE","armLDSP"],backpack:["backpackDEF","backpackDSE","backpackDSP"],legs:["legsDEF","legsDSE","legsDSP"]}
  const [index,setIndex]=useState(1)
  const [selectedParts, setSelectedParts] = useState({torso:data.torso[index],rightarm:data.rightarm[index],leftarm:data.leftarm[index],backpack:data.backpack[index],legs:data.legs[index]});


  const onEnvChange = (env) => {
    localStorage.setItem("env", env);
    setEnv(env);
  };
  return (
    <div className="h-screen w-screen">
      {index >= 1 && <button className={`absolute top-1/2 left-0 text-8xl rotate-180 text-pavia-green z-10 flex`} onClick={()=>{setIndex(index-1)}}>
         <AiOutlineDoubleRight/></button>}

      <div className="absolute top-0">
      <Canvas shadows="percentage">
        <SceneContainer selectedParts={{torso:data.torso[index],rightarm:data.rightarm[index],leftarm:data.leftarm[index],backpack:data.backpack[index],legs:data.legs[index]}}/>
        <SceneContainerB selectedParts={{torso:data.torso[index],rightarm:data.rightarm[index],leftarm:data.leftarm[index],backpack:data.backpack[index],legs:data.legs[index]}}/>
      </Canvas>
      </div>
      {/* <div className="absolute top-0 right-0">
      <Canvas shadows="percentage">
        <SceneContainerB selectedParts={{torso:data.torso[index],rightarm:data.rightarm[index],leftarm:data.leftarm[index],backpack:data.backpack[index],legs:data.legs[index]}}/>
      </Canvas>
      </div> */}
      <p className="absolute top-20 text-2xl left-20 font-bold text-pavia-green ">VORTEX_123</p>
      {index <= 3 && <button className={`absolute top-1/2 right-0 text-8xl text-pavia-green ${index == 3 && "text-gray-500 disabled"}`} onClick={()=>{setIndex(index+1)}}><AiOutlineDoubleRight/></button> }
    </div>
  );
}
Loadouts.DisplayName = "Loadouts";
