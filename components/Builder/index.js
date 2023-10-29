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

export default function Builder(props) {
  const [selectedParts, setSelectedParts] = useState({});
  const [loadingModels, setLoadingModels] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [env, setEnv] = useState("kloppenheim");
  const [showSettings, setShowSettings] = useState(false);

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
              {/* {activeMainPart && <Options active={activeMainPart} onSelect={onSelect} close={() => setActiveMainPart(null)} />} */}
            </div>
          </div>
          }
          <Canvas shadows="percentage">
            <SceneContainer selectedParts={selectedParts} env={env} />
          </Canvas>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
      {
        activeTab == 1 && <Settings
          setEnv={onEnvChange}
          show={true}
          env={env}
          close={setShowSettings}
          setClose={setShowSettings}
          setSelectedParts={setSelectedParts}
        />
      }

      {props.bearer &&
        <div className="max-lg:absolute bottom-[35%] left-0 w-screen">
          <Bottom setShowSettings={setShowSettings} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      }
    </div>
  );
}
