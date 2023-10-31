import MainPartControls from "@/components/Builder/Controls/MainParts";
import Options from "@/components/Builder/Controls/Options";
import { SceneContainer } from "@/components/Builder/SceneContainer";
import Spinner from "@/components/UI/Spinner";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Main_Data from "./Controls/Options/data";
import Settings from "@/components/Builder/SceneContainer/Settings";
import Bottom from "./Bottom";
import MyAccount from "./MyAccount";
import axios from "axios";
import SaveModal from "./SaveModal";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import {BsFillCheckCircleFill} from "react-icons/bs"

import {
  mechPartParser,
  mechTypeParser,
  mechVariantParser,
} from "../Builder/Controls/Utils";

export default function Builder(props) {
  const [selectedParts, setSelectedParts] = useState({});
  const [loadingModels, setLoadingModels] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [env, setEnv] = useState("kloppenheim");
  const [saveInit, setSaveInit] = useState(false);
  const [userOwned, setUserOwned] = useState();
  const [mechName, setMechName] = useState();
  const [sentToBackEnd, setSentToBackEnd] = useState(false);

  const [userNfts, setuserNft] = useState([
    "DefenderTorsoPL04846",
    "DefenderLeftArmPL04846",
    "DefenderRightArmPL04846",
    "DefenderBackPackPL04846",
    "DefenderLegsPL04846",
    "SubTerrainTorsoPL04846",
    "SubTerrainLeftArmPL04846",
    "SubTerrainRightArmPL04846",
    "SubTerrainBackPackPL04846",
    "SubTerrainLegsPL04846",
  ]);

  const onSelect = (type, index) => {
    const modSelection = { ...selectedParts };
    modSelection[type] = index;
    setSelectedParts(modSelection);
  };

  useEffect(() => {
    //platform
    try {
      if (localStorage.env) setEnv(localStorage.env);
      let model = useLoader(
        GLTFLoader,
        `${process.env.NEXT_PUBLIC_MECH_FILES}/MP_Plinth.gltf`
      );
      if (model?.scene) {
        setLoadingModels(false);
      }
      if (userNfts.length) {
        parseUserMechTokens();
      }
    } catch (err) {
      setLoadingModels(false);
    }
  }, [selectedParts]);

  const parseUserMechTokens = () => {
    const data = [];
    //mech type
    const types = mechTypeParser(userNfts);

    //mechPart
    const parts = mechPartParser(userNfts);

    //mecVariants
    const variants = mechVariantParser(userNfts);

    types.map((_, i) => {
      let item = {
        type: types[i],
        part: parts[i],
        variant: variants[i],
      };
      data.push(item);
    });
    let objParts = {};
    let result = data.map((item) => {
      let mechItem = Main_Data[item.part];
      let partIndex = mechItem.findIndex(
        (partItem) =>
          partItem.type.BE_Code == item.type &&
          partItem.skin.FE_Code == item.variant
      );
      if (objParts[item.part]) {
        objParts[item.part].push(partIndex);
      } else {
        objParts[item.part] = [partIndex];
      }
    });
    setUserOwned(objParts);
  };
  const saveLoadout = async (bearer) => {
    try {
      setSentToBackEnd("pending");
      let payload = {
        "Arm-L_Class": Main_Data.leftarm[selectedParts.leftarm].type.BE_Code,
        "Arm-L_Variant": Main_Data.leftarm[selectedParts.leftarm].skin.BE_Code,
        "Arm-R_Class": Main_Data.rightarm[selectedParts.rightarm].type.BE_Code,
        "Arm-R_Variant": Main_Data.rightarm[selectedParts.rightarm].skin.BE_Code,
        "Torso_Class": Main_Data.torso[selectedParts.torso].type.BE_Code,
        "Torso_Variant": Main_Data.rightarm[selectedParts.rightarm].skin.BE_Code,
        "Legs_Class": Main_Data.legs[selectedParts.legs].type.BE_Code,
        "Legs_Variant": Main_Data.legs[selectedParts.legs].skin.BE_Code,
        "Backpack_Class": Main_Data.backpack[selectedParts.backpack].type.BE_Code,
        "Backpack_Variant": Main_Data.backpack[selectedParts.backpack].skin.BE_Code,
      };
      const res = await axios.post("/api/pavia/saveLoadout", {
        name: mechName,
        properties: payload,
      });
      setSaveInit(false);
      setSentToBackEnd(true);
      setTimeout(()=>{
        setSentToBackEnd(false);
      },2000)
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(Main_Data.leftarm[selectedParts.leftarm].type.name)
  const onEnvChange = (env) => {
    localStorage.setItem("env", env);
    setEnv(env);
  };

  return (
    <>
    <div className="w-full h-screen relative overflow-hidden" id="cont">
    <AnimatePresence>
      {sentToBackEnd && 
      <motion.div 
        initial={{y:-50}}
        animate={{y:[0,3,-3,0], transition:{duration:2,repeat:Infinity}}}
       exit={{y:-50}}
        className="absolute top-2 z-50 bg-white p-2 text-black flex items-center justify-center gap-2">
        <span className="text-xl text-green-600"><BsFillCheckCircleFill/></span>
        <span>Saved Successfully</span>
        </motion.div>
        }
        </AnimatePresence>
      {!loadingModels ? (
        <>
          {activeTab == 0 && (
            <div className="absolute lg:right-0 lg:h-screen z-40 lg:w-[25%] lg:top-bottom-overflow-fade custom-scroll bg-black/30 scroll-smooth overflow-x-hidden max-lg:w-[105%] max-lg:bottom-0 max-lg:h-[35%]">
              <div className="lg:border-l-2 max-lg:border-t-2 border-white">
                <MainPartControls
                  onSelect={onSelect}
                  isLogin={props.bearer}
                  userNfts={userNfts}
                />
              </div>
            </div>
          )}
          <Canvas shadows="percentage">
            <SceneContainer selectedParts={selectedParts} env={env} />
          </Canvas>
          <AnimatePresence>
          {selectedParts.torso >= 0 &&
            selectedParts.leftarm >= 0 &&
            selectedParts.rightarm >= 0 &&
            selectedParts.legs >= 0 &&
            selectedParts.backpack >= 0 && !saveInit &&(
              <motion.div
              initial={{y:300}}
              animate={{y:0, transition:{duration:0.3,ease:"easeInOut"}}}
              exit={{y:300,transition:{duration:0.3,ease:"easeInOut"}}}
              onClick={() => setSaveInit(true)}
              className="absolute lg:bottom-20  cursor-pointer uppercase tracking-wider lg:left-[45%] group hover:border-2 border-white/70 duration-100 ease-in-out max-lg:bottom-[40%] max-lg:right-5"
              >
                <div className="bg-white px-7 py-3 group-hover:px-6 group-hover:py-2 group-hover:m-1 duration-200 
                ease-in-out text-black max-lg:scale-75">
                  Save loadout
                </div>
              </motion.div>
            )}
            </AnimatePresence>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
      {saveInit && (
        <SaveModal
          close={() => saveInit(false)}
          onClick={saveLoadout}
          selectedParts={selectedParts}
          saveInit={saveInit}
          setSaveInit={setSaveInit}
          userNfts={userOwned}
          setMechName={setMechName}
          mechName={mechName}
          sentToBackEnd={sentToBackEnd}
        />
      )}
      {activeTab == 1 && <Settings setEnv={onEnvChange} env={env} />}
      {activeTab == 2 && (
        <MyAccount
          activeTab={activeTab}
          setActiveTab={() => {
            setActiveTab(0);
          }}
        />
      )}
      {props.bearer && activeTab != 2 && (
        <div className="max-lg:absolute bottom-[35%] left-0 w-screen ">
          <Bottom activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}
    </div>
    </>
  );
}
