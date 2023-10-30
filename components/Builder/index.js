import MainPartControls from "@/components/Builder/Controls/MainParts";
import Options from "@/components/Builder/Controls/Options";
import { SceneContainer } from "@/components/Builder/SceneContainer";
import Spinner from "@/components/UI/Spinner";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BsFillGearFill } from "react-icons/bs";
import Settings from "@/components/Builder/SceneContainer/Settings";
import Bottom from "./Bottom";
import MyAccount from "./MyAccount";
import axios from "axios";
import SaveModal from "./SaveModal";

export default function Builder(props) {
  const [selectedParts, setSelectedParts] = useState({});
  const [loadingModels, setLoadingModels] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [env, setEnv] = useState("kloppenheim");
  const [saveInit, setSaveInit] = useState(false);

  const onSelect = (type, index) => {
    const modSelection = { ...selectedParts };
    modSelection[type] = index;
    setSelectedParts(modSelection);
  };

  useEffect(() => {
    //platform
    try {
      if (localStorage.env) setEnv(localStorage.env);
      let model = useLoader(GLTFLoader, `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Plinth.gltf`);
      if (model?.scene) {
        setLoadingModels(false);
      }
    } catch (err) {
      setLoadingModels(false);
    }
  }, []);

  const saveLoadout = async (bearer) => {
    try {
      let payload = {
        "Arm-L_Class": "DSP",
        "Arm-L_Variant": "CT",
        "Arm-R_Class": "DSP",
        "Arm-R_Variant": "CS",
        "Torso_Class": "DSP",
        "Torso_Variant": "ELM",
        "Legs_Class": "DSE",
        "Legs_Variant": "JD",
        "Backpack_Class": "DEF",
        "Backpack_Variant": "LAB"
      };
      const res = await axios.post('/api/pavia/saveLoadout', {
        name: "Adawgs Mech",
        properties: payload
      });
      console.log(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const onEnvChange = (env) => {
    localStorage.setItem("env", env);
    setEnv(env);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden" id="cont">
      {!loadingModels ? (
        <>
          {activeTab == 0 && <div className="absolute lg:right-0 lg:h-screen z-40 lg:w-[25%] lg:top-bottom-overflow-fade custom-scroll bg-black/30 scroll-smooth overflow-x-hidden max-lg:w-[105%] max-lg:bottom-0 max-lg:h-[35%]">
            <div className="lg:border-l-2 max-lg:border-t-2 border-white">
              <MainPartControls onSelect={onSelect} isLogin={props.bearer} />
            </div>
          </div>
          }
          <Canvas shadows="percentage">
            <SceneContainer selectedParts={selectedParts} env={env} />
          </Canvas>
          <div onClick={() => setSaveInit(true)} className="absolute bottom-20 bg-black px-7 py-3 cursor-pointer uppercase tracking-wider left-5">
            <div>Save loadout</div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
      {saveInit && <SaveModal close={() => saveInit(false)} onClick={saveLoadout} />}
      {
        activeTab == 1 && <Settings setEnv={onEnvChange} env={env} />
      }
      {
        activeTab == 2 && <MyAccount activeTab={activeTab} setActiveTab={() => { setActiveTab(0) }} />
      }
      {props.bearer && activeTab != 2 &&
        <div className="max-lg:absolute bottom-[35%] left-0 w-screen ">
          <Bottom activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      }
    </div>
  );
}
