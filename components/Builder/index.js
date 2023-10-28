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
  const [env, setEnv] = useState("kloppenheim");
  const [showSettings, setShowSettings] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [save, setSave] = useState(false);
  const saveLoadouts = useRef(new Array());
  const [editMode, setEditeMode] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [changeLoadouts, setChangeLoadouts] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const onSelect = (type, index) => {
    const modSelection = { ...selectedParts };
    modSelection[type] = index;
    setSelectedParts(modSelection);
  };

  useEffect(() => {
    if (selectedParts === saveLoadouts.current[editIndex]) {
      setChangeLoadouts(false);
    } else {
      setChangeLoadouts(true);
      setUpdate(false);
    }
  }, [selectedParts, editIndex]);

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
      <div
        className="py-1 px-3  border-2 border-black/30 cursor-pointer rounded-[0.3rem] absolute top-2 left-5 z-50 flex gap-3 justify-center items-center bg-white/40"
        onClick={() => setShowSettings(true)}
      >  <BsFillGearFill className="text-xl text-black" />
      </div>
      {!loadingModels ? (
        <>
          {showMenu &&
            <div className="absolute right-0 h-screen z-40 w-[25%] top-bottom-overflow-fade overflow-y-scroll custom-scroll scroll-smooth bg-black/30  overflow-x-hidden">
              <div className="border-l-2 border-white">
                <MainPartControls setShowMenu={setShowMenu} onSelect={onSelect} setIsLogin={setIsLogin} isLogin={props.bearer} />
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
      <Settings
        setEnv={onEnvChange}
        show={showSettings}
        env={env}
        close={setShowSettings}
        loadouts={saveLoadouts.current}
        setClose={setShowSettings}
        setSelectedParts={setSelectedParts}
        setEditeMode={setEditeMode}
        setEditIndex={setEditIndex}
      />

      <Bottom setShowMenu={setShowMenu} setShowSettings={setShowSettings} />
    </div>
  );
}
