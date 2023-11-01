import { useEffect, useState } from "react";
import data from "../Controls/Options/data";
import { AiFillCloseSquare } from "react-icons/ai";
import Locked from "./Locked";
import SpinnerSm from "@/components/UI/SpinnerSm";
import axios from "axios";
import Main_Data from "../Controls/Options/data";
import { hex2a } from "@/components/Common/utils";

const SaveModal = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mechName, setMechName] = useState(props.selectedParts?.name);
  const [pavName, setPavName] = useState("")
  const pavs = [
    "Akira",
    "Alfonso",
    "Alpha",
    "App",
    "Arin",
    "Auto",
    "Axis",
    "Cyber",
    "Jones",
    "London",
    "Lucia",
    "Max",
    "Mittens",
    "Mucca",
    "PavBot",
    "Rex",
    "Sparkles",
  ];
  const [ownedPavs, setUserOwnedPavs] = useState([])

  const handleInputChange = (e) => {
    console.log(e)
    setMechName(e.target.value);
  };

  useEffect(() => {
    if (props.bearer)
      getUserOwnedPavs();
  }, [])

  const getUserOwnedPavs = async () => {
    try {
      let res = await axios.post(process.env.NEXT_PUBLIC_PAVIA_GAME_API + '/v1/wallet/old/cardano', {
        policies: ['852526a77c45662e981181ed9b0afca13cfd8e45c169a20b37832ea7']
      }, {
        headers: {
          Authorization: `Bearer ${props.bearer}`
        }
      })
      let data = res.data;
      let results = data.map(item => {
        return hex2a(item.split('.')[1])?.replace(/[0-9]/g, '');
      })
      setUserOwnedPavs(results)
    }
    catch (err) {
      console.log(err)
    }
  }

  const saveLoadout = async () => {
    try {
      if (!mechName) {
        setError("ERROR : MECH NAME IS REQUIRED ");
        return;
      }
      if (!pavName) {
        setError("ERROR : SELECT A PAV");
        return;
      }
      if (!pavs.includes(pavName)) {
        setError("ERROR : INVALID PAV NAME");
        return;
      }
      setLoading(true);
      let payload = {
        "Arm-L_Class":
          Main_Data.leftarm[props.selectedParts.leftarm].type.BE_Code,
        "Arm-L_Variant":
          Main_Data.leftarm[props.selectedParts.leftarm].skin.BE_Code,
        "Arm-R_Class":
          Main_Data.rightarm[props.selectedParts.rightarm].type.BE_Code,
        "Arm-R_Variant":
          Main_Data.rightarm[props.selectedParts.rightarm].skin.BE_Code,
        "Torso_Class": Main_Data.torso[props.selectedParts.torso].type.BE_Code,
        "Torso_Variant":
          Main_Data.rightarm[props.selectedParts.rightarm].skin.BE_Code,
        "Legs_Class": Main_Data.legs[props.selectedParts.legs].type.BE_Code,
        "Legs_Variant": Main_Data.legs[props.selectedParts.legs].skin.BE_Code,
        "Backpack_Class":
          Main_Data.backpack[props.selectedParts.backpack].type.BE_Code,
        "Backpack_Variant":
          Main_Data.backpack[props.selectedParts.backpack].skin.BE_Code,
        "DateCreated": new Date(Date.now()).toUTCString(),
        "Pav": pavName
      };
      const res = await axios.post("/api/pavia/saveLoadout", {
        name: mechName,
        properties: payload,
        Pav: pavName,
      });
      props.setSaveInit(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  let isValid =
    props.userNfts?.torso?.includes(props.selectedParts?.torso) &&
    props.userNfts?.leftarm?.includes(props.selectedParts?.leftarm) &&
    props.userNfts?.rightarm?.includes(props.selectedParts?.rightarm) &&
    props.userNfts?.backpack?.includes(props.selectedParts?.backpack) &&
    props.userNfts?.legs?.includes(props.selectedParts?.legs) &&
    pavName;

  const onPavChoose = (pavs) => {
    document.activeElement.blur();
    setPavName(pavs)
  }

  const pavsLists = [];

  pavs.map((pavs, index) => {
    if (ownedPavs.includes(pavs)) {
      pavsLists.push(
        <li key={index} className="w-full">
          <a onClick={() => onPavChoose(pavs)}>
            <img
              src={`assets/images/PavsNoBackground/${pavs}.png`}
              alt={`${pavs}`}
              className="w-14"
            />
            <span>{pavs}</span>
          </a>
        </li>
      )
    }
  });

  return (
    <>
      <div className="absolute w-full top-0 left-0 h-full flex items-center z-40 justify-center">
        <div className="w-[400px] rounded-sm p-5 bg-black/60">
          {!loading ? (
            <>
              <div className="relative">
                <button
                  className="absolute text-xl right-0 "
                  onClick={() => props.setSaveInit(false)}
                >
                  <AiFillCloseSquare />
                </button>
                <div className="uppercase tracking-wider">Save loadout</div>
                <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
              </div>
              <div className="py-5">
                <div className="text-sm font-medium uppercase">
                  Name your Mech
                </div>
                <div className="mt-2 border-l-2">
                  <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                  <input
                    value={mechName}
                    type="text"
                    className="bg-transparent h-full text-white text-sm outline-none px-2 mt-1"
                    placeholder="Mech Name"
                    maxLength={30}
                    onChange={handleInputChange}
                  />
                  <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-2"></div>
                </div>
                <div className="text-sm font-medium uppercase mt-4">
                  Choose a mech pav
                </div>
                <div className="dropdown w-full">
                  <label tabIndex={0} className="btn bg-transparent border hover:bg-white hover:text-black border-white mt-4 rounded-none text-white w-full">
                    {pavName ? pavName : 'Mech pavs'}
                  </label>
                  <ul tabIndex={0} className="flex flex-col menu dropdown-content bg-white w-full overflow-y-auto h-60 px-2 rounded-none py-3 flex-nowrap
                        text-black custom-scroll">
                    {pavsLists.length ? pavsLists : <div className="w-full h-full flex items-center justify-center text-xs font-medium">You do not own any mech pavs</div>}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-medium uppercase">
                    Mech Parts
                  </div>
                  <div className="text-sm font-medium py-2">
                    <div className=" ml-1 py-1 flex items-center justify-between">
                      <span>Torso</span>
                      <Locked
                        type={data.torso[props.selectedParts.torso].type.name}
                        skin={
                          data.torso[props.selectedParts.torso].skin.FE_Name
                        }
                        lock={
                          !props.userNfts?.torso?.includes(
                            props.selectedParts?.torso
                          )
                        }
                      />
                    </div>
                    <div className=" ml-1 py-1 flex items-center justify-between">
                      <span>Left Arm</span>
                      <Locked
                        type={
                          data.leftarm[props.selectedParts.leftarm].type.name
                        }
                        skin={
                          data.leftarm[props.selectedParts.leftarm].skin.FE_Name
                        }
                        lock={
                          !props.userNfts?.leftarm?.includes(
                            props.selectedParts?.leftarm
                          )
                        }
                      />
                    </div>
                    <div className=" ml-1 py-1 flex items-center justify-between">
                      <span>Right Arm</span>
                      <Locked
                        type={
                          data.rightarm[props.selectedParts.rightarm].type.name
                        }
                        skin={
                          data.rightarm[props.selectedParts.rightarm].skin
                            .FE_Name
                        }
                        lock={
                          !props.userNfts?.rightarm?.includes(
                            props.selectedParts?.rightarm
                          )
                        }
                      />
                    </div>
                    <div className=" ml-1 py-1 flex items-center justify-between">
                      <span>Backpack</span>
                      <Locked
                        type={
                          data.backpack[props.selectedParts.backpack].type.name
                        }
                        skin={
                          data.backpack[props.selectedParts.backpack].skin
                            .FE_Name
                        }
                        lock={
                          !props.userNfts?.backpack?.includes(
                            props.selectedParts?.backpack
                          )
                        }
                      />
                    </div>
                    <div className=" ml-1 py-1 flex items-center justify-between">
                      <span>Legs</span>
                      <Locked
                        type={data.legs[props.selectedParts.legs].type.name}
                        skin={data.legs[props.selectedParts.legs].skin.FE_Name}
                        lock={
                          !props.userNfts?.legs?.includes(
                            props.selectedParts?.legs
                          )
                        }
                      />
                    </div>
                    <div className=" ml-1 py-1 flex items-center justify-between">
                      <span>Mech Pav </span>
                      <div className="text-pavia-green">{pavName ?? 'NA'}</div>
                    </div>
                    {error && (
                      <div className="text-red-600 text-xs bg-black/70 py-1 flex justify-center">
                        {error}
                      </div>
                    )}
                  </div>
                  <div className={`flex items-center justify-center mt-5 `}>
                    <button
                      disabled={!isValid}
                      className={`px-10 disabled:bg-white/70 bg-white text-black tracking-wider py-3 w-fit ${!isValid ? "cursor-not-allowed bg-gray-400" : ""
                        }`}
                      onClick={saveLoadout}
                    >
                      CONFIRM
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="flex justify-center h-full items-center text-sm flex-col gap-5">
              <span className="scale-150">
                <SpinnerSm />
              </span>
              <p>SAVING YOUR MECH</p>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SaveModal;
