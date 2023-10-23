import MainPartControls from "@/components/Builder/Controls/MainParts";
import Options from "@/components/Builder/Controls/Options";
import { SceneContainer } from "@/components/Builder/SceneContainer";
import Spinner from "@/components/UI/Spinner";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BsFillGearFill } from "react-icons/bs";
import Settings from "@/components/Builder/SceneContainer/Settings";
import { motion } from "framer-motion";
import Bottom from "./Bottom";

export default function Builder() {
  const [activeMainPart, setActiveMainPart] = useState(null);
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
  useEffect(() => {
    if (
      selectedParts.torso &&
      selectedParts.leftarm &&
      selectedParts.rightarm &&
      selectedParts.backpack &&
      selectedParts.legs
    ) {
      setSave(true);
    }
  }, [
    selectedParts.torso,
    selectedParts.leftarm,
    selectedParts.rightarm,
    selectedParts.backpack,
    selectedParts.legs,
  ]);

  const onSelect = (type, name) => {
    const modSelection = { ...selectedParts };
    modSelection[type] = name;
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
  console.log(changeLoadouts);

  useEffect(() => {
    //platform
    try {
      if (localStorage.env) setEnv(localStorage.env);
      let model = useLoader(GLTFLoader, `/assets/models/platform.gltf`);
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

  document.addEventListener('keydown', handleKeyPress);
  function handleKeyPress(event) {
    if (event.key === 'F8') {
      setShowSettings(true)
    }
  }
  return (
    <div className="w-full h-screen relative overflow-hidden" id="cont">
      <div
        className="py-1 px-3  border-2 border-black/30 cursor-pointer rounded-[0.3rem] absolute top-2 left-5 z-50 flex gap-3 justify-center items-center bg-white/40"
        onClick={() => setShowSettings(true)}
      >
        <p className="bg-pavia-green text-black font-black text-xs p-1 rounded-[0.3rem]">[ F8 ]</p>  <BsFillGearFill className="text-xl text-black" />
      </div>
      {!loadingModels ? (
        <>
          {showMenu && 
          <div className="absolute  right-0 h-screen flex items-center z-40 px-5 py-2 blurred-bg">
                <MainPartControls active={activeMainPart} setActiveMainPart={setActiveMainPart} setShowMenu={setShowMenu}/>
                {activeMainPart && <Options active={activeMainPart} onSelect={onSelect} close={() => setActiveMainPart(null)} />}
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
      {save && !editMode ? (
        <button
          className=" border-2 border-gray-400 absolute bottom-16 left-5 text-black p-3 bg-white/40 rounded-xl font-black tracking-widest"
          onClick={() => {
            saveLoadouts.current.push(selectedParts);
          }}
        >
          SAVE LOADOUTS
        </button>
      ) : null}

      {editMode && changeLoadouts && !update ? (
        <>
          <button
            className="bg-white/10 border-2 border-gray-400 absolute bottom-16 left-28 text-black p-3 rounded-xl font-black tracking-widest"
            onClick={() => {
              saveLoadouts.current.splice(editIndex, 1, selectedParts);
              setUpdate(true);
            }}
          >
            UPDATE
          </button>
          <button
            className="bg-white/10 border-2 border-gray-400 absolute bottom-16 left-5 text-black p-3 rounded-xl font-black tracking-widest"
            onClick={() => {
              setEditeMode(false);
            }}
          >
            EXIT
          </button>
        </>
      ) : editMode ? (
        <button
          className="bg-white/10 border-2 border-gray-400 absolute bottom-16 left-5 text-black p-3 rounded-xl font-black tracking-widest"
          onClick={() => {
            setEditeMode(false);
          }}
        >
          EXIT
        </button>
      ) : null}

      <Bottom setShowMenu={setShowMenu} setShowSettings={setShowSettings}/>
    </div>
  );
}