import { useEffect, useState } from "react";
import Options from "../Options";
import Item from "./Item";
import data from "@/components/Builder/Controls/Options/data";
import Main_data, { torso } from "../Options/data";

const MainPartControls = (props) => {
  // const backend = [
  //   {
  //     "Arm-L_Class": "DSP",
  //     "Arm-L_Variant": "CT",
  //     "Arm-R_Class": "DSP",
  //     "Arm-R_Variant": "CS",
  //     Torso_Class: "DSP",
  //     Torso_Variant: "ELM",
  //     Legs_Class: "DSE",
  //     Legs_Variant: "JD",
  //     Backpack_Class: "DEF",
  //     Backpack_Variant: "LAB",
  //   },
  //   {
  //     "Arm-L_Class": "SBT",
  //     "Arm-L_Variant": "CT",
  //     "Arm-R_Class": "SBT",
  //     "Arm-R_Variant": "CT",
  //     Torso_Class: "SBT",
  //     Torso_Variant: "CT",
  //     Legs_Class: "SBT",
  //     Legs_Variant: "CT",
  //     Backpack_Class: "SBT",
  //     Backpack_Variant: "CT",
  //   },
  // ];
  const [userNfts, setuserNft] = useState(["DefenderTorsoPL04846", "DefenderLeftArmPL04846", "DefenderRightArmPL04846", "DefenderBackPackPL04846", "DefenderLegsPL04846", "SubTerrainTorsoPL04846", "SubTerrainLeftArmPL04846", "SubTerrainRightArmPL04846", "SubTerrainBackPackPL04846", "SubTerrainLegsPL04846"]);
    let [ownNFTs , setOwnNFTs]=useState()
useEffect(() => {
        if (userNfts.length)
            parseUserMechTokens();
    }, []);

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
                variant: variants[i]
            }
            data.push(item);
        });
        let objParts = {};
        let result = data.map(item => {
            let mechItem = Main_data[item.part];
            let partIndex = mechItem.findIndex(partItem => partItem.type.BE_Code == item.type && partItem.skin.FE_Code == item.variant);
            if (objParts[item.part]) {
                objParts[item.part].push(partIndex)
            }
            else {
                objParts[item.part] = [partIndex]
            }
        })
        setOwnNFTs(objParts)
    }

    const mechTypeParser = (tokens) => {
        let res = [];
        tokens.map(token => {
            //DefenderTorsoPL04846
            if (token.includes('Defender')) {
                res.push('DEF')
            }
            else if (token.includes('SubTerrain')) {
                res.push('SBT')
            }
            else if (token.includes('Hydra')) {
                res.push('DSE')
            }
            else if (token.includes('Recon')) {
                res.push('DSP')
            }
            else if (token.includes('Reactor')) {
                res.push('NRG')
            }
        });
        return res;
    }
    console.log(userNfts)
    const mechPartParser = (tokens) => {
        let res = [];
        tokens.map(token => {
            //DefenderTorsoPL04846
            if (token.includes('Torso')) {
                res.push('torso')
            }
            else if (token.includes('LeftArm')) {
                res.push('leftarm')
            }
            else if (token.includes('RightArm')) {
                res.push('rightarm')
            }
            else if (token.includes('BackPack')) {
                res.push('backpack')
            }
            else if (token.includes('Legs')) {
                res.push('legs')
            }
        });
        return res;
    }

    const mechVariantParser = (tokens) => {
        let res = [];
        tokens.map(token => {
            //DefenderTorsoPL04846
            if (token.includes('CM')) {
                res.push('CM')
            }
            else if (token.includes('DB')) {
                res.push('DB')
            }
            else if (token.includes('DG')) {
                res.push('DG')
            }
            else if (token.includes('PU')) {
                res.push('PU')
            }
            else if (token.includes('HZ')) {
                res.push('HZ')
            }
            else if (token.includes('CR')) {
                res.push('CR')
            }
            else if (token.includes('OB')) {
                res.push('OB')
            }
            else if (token.includes('EM')) {
                res.push('EM')
            }
            else if (token.includes('MR')) {
                res.push('MR')
            }
            else if (token.includes('PR')) {
                res.push('PR')
            }
            else if (token.includes('GR')) {
                res.push('GR')
            }
            else if (token.includes('JG')) {
                res.push('JG')
            }
            else if (token.includes('NV')) {
                res.push('NV')
            }
            else if (token.includes('PL')) {
                res.push('PL')
            }
        });
        return res;
    }
  const [loadItems, setLoadItems] = useState([]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // useEffect(() => {
  //   const items = getLoadOutItems();
  //   const combinedArray = [
  //     {
  //       torso: items.map((obj) => obj.torso),
  //       rightarm: items.map((obj) => obj.rightarm),
  //       leftarm: items.map((obj) => obj.leftarm),
  //       backpack: items.map((obj) => obj.backpack),
  //       legs: items.map((obj) => obj.legs),
  //     },
  //   ];
  //   setLoadItems(combinedArray);
  // }, []);

  // const torsoItems = [];
  // const armLItems = [];
  // const armRItems = [];
  // const backpackItems = [];
  // const legsItems = [];

  // for (const key in backend) {
  //   if (key.includes("Torso")) {
  //     torsoItems.push(backend[key]);
  //   }
  //   if (key.includes("Arm-L")) {
  //     armLItems.push(backend[key]);
  //   }
  //   if (key.includes("Arm-R")) {
  //     armRItems.push(backend[key]);
  //   }
  //   if (key.includes("Backpack")) {
  //     backpackItems.push(backend[key]);
  //   }
  //   if (key.includes("Legs")) {
  //     legsItems.push(backend[key]);
  //   }
  // }

  // const getLoadOutItems = () => {
  //   let res = backend.map((loadout) => {
  //     let torso = data["torso"].findIndex(
  //       (item) =>
  //         item.type?.BE_Code == loadout["Torso_Class"] &&
  //         item.skin?.BE_Code == loadout["Torso_Variant"]
  //     );
  //     let rightarm = data["rightarm"].findIndex(
  //       (item) =>
  //         item.type?.BE_Code == loadout["Arm-R_Class"] &&
  //         item.skin?.BE_Code == loadout["Arm-R_Variant"]
  //     );
  //     let leftarm = data["leftarm"].findIndex(
  //       (item) =>
  //         item.type?.BE_Code == loadout["Arm-L_Class"] &&
  //         item.skin?.BE_Code == loadout["Arm-L_Variant"]
  //     );
  //     let backpack = data["backpack"].findIndex(
  //       (item) =>
  //         item.type?.BE_Code == loadout["Backpack_Class"] &&
  //         item.skin?.BE_Code == loadout["Backpack_Variant"]
  //     );
  //     let legs = data["legs"].findIndex(
  //       (item) =>
  //         item.type?.BE_Code == loadout["Legs_Class"] &&
  //         item.skin?.BE_Code == loadout["Legs_Variant"]
  //     );
  //     return { torso, rightarm, leftarm, backpack, legs };
  //   });
  //   return res;
  // };
  const [bool, setBool] = useState(false);
  const onClick = (type) => {
    if (bool) {
      props.setActiveMainPart(type);
    } else {
      props.setActiveMainPart(" ");
    }
    setBool(!bool);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle the state when the checkbox is clicked
  };
  return (
    <div className="flex justify-center items-center">
      {props.isLogin ? (
        <div className="lg:my-[35%] w-full h-full max-lg:absolute max-lg:bottom-0 max-lg:overflow-y-auto max-lg:bg-white/30">
          <div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              OWN MECH PARTS
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                checked={isChecked}
                onChange={handleToggle}
              />
            </label>
          </div>
          <Item name="Torso" onClick={onClick} type={"torso"} />
          <Options
            ions
            active={"torso"}
            onSelect={props.onSelect}
            close={() => setActiveMainPart(null)}
            ownNFTs={ownNFTs?.torso}
            showOnlyOwnNFTs={isChecked}
          />
          <Item name="Left Arm" onClick={onClick} type={"leftarm"} />
          <Options
            active={"leftarm"}
            onSelect={props.onSelect}
            close={() => setActiveMainPart(null)}
            ownNFTs={ownNFTs?.leftarm}
            showOnlyOwnNFTs={isChecked}
          />
          <Item name="Right Arm" onClick={onClick} type={"rightarm"} />
          <Options
            active={"rightarm"}
            onSelect={props.onSelect}
            close={() => setActiveMainPart(null)}
            ownNFTs={ownNFTs?.rightarm}
            showOnlyOwnNFTs={isChecked}
          />
          <Item name="Backpack" onClick={onClick} type={"backpack"} />
          <Options
            active={"backpack"}
            onSelect={props.onSelect}
            close={() => setActiveMainPart(null)}
            ownNFTs={ownNFTs?.backpack}
            showOnlyOwnNFTs={isChecked}
          />
          <Item name="Legs" onClick={onClick} type={"legs"} />
          <Options
            active={"legs"}
            onSelect={props.onSelect}
            close={() => setActiveMainPart(null)}
            ownNFTs={ownNFTs?.legs}
            showOnlyOwnNFTs={isChecked}
          />
        </div>
      ) : (
        <div className=" w-screen lg:h-screen flex flex-col justify-center items-center max-lg:absolute top-[20%]">
          <p className="text-[#F7F8F3]">LOGIN TO CONTINUE</p>
          <a
            href="/api/auth/login"
            className="w-[70%] h-[10%] mt-5 py-7 text-sm newButton relative text-[#002C3E] group font-light "
          >
            <div className="frame  w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
              <div className="lines"></div>
              <div className="angles"></div>
              <div className="bg-[#F7F8F3] w-full h-full flex justify-center items-center">
                <p className="text-xl">LOGIN</p>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default MainPartControls;
