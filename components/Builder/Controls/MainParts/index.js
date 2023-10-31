import { useEffect, useState } from "react";
import Options from "../Options";
import Item from "./Item";
import Main_data from "../Options/data";
import { mechPartParser, mechTypeParser, mechVariantParser } from "../Utils";

const MainPartControls = (props) => {
 
  let [userOwned, setUserOwned] = useState()

  useEffect(() => {
    if (props.userNfts.length)
      parseUserMechTokens();
  }, []);

  const parseUserMechTokens = () => {
    const data = [];
    //mech type
    const types = mechTypeParser(props.userNfts);

    //mechPart
    const parts = mechPartParser(props.userNfts);

    //mecVariants
    const variants = mechVariantParser(props.userNfts);

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
    setUserOwned(objParts)
  }

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
          <div className="flex flex-col gap-2 px-3 items-end w-full">
            <span class="text-sm font-medium text-white">
              USER OWNED ONLY
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="toggle toggle-sm" checked={isChecked} onChange={handleToggle} />
            </label>
          </div>
          <Item name="Torso" onClick={onClick} type={"torso"} />
          <Options
            active={"torso"}
            onSelect={props.onSelect}
            userOwned={userOwned?.torso}
            showOnlyUserOwned={isChecked}
          />
          <Item name="Left Arm" onClick={onClick} type={"leftarm"} />
          <Options
            active={"leftarm"}
            onSelect={props.onSelect}
            userOwned={userOwned?.leftarm}
            showOnlyUserOwned={isChecked}
          />
          <Item name="Right Arm" onClick={onClick} type={"rightarm"} />
          <Options
            active={"rightarm"}
            onSelect={props.onSelect}
            userOwned={userOwned?.rightarm}
            showOnlyUserOwned={isChecked}
          />
          <Item name="Backpack" onClick={onClick} type={"backpack"} />
          <Options
            active={"backpack"}
            onSelect={props.onSelect}x
            userOwned={userOwned?.backpack}
            showOnlyUserOwned={isChecked}
          />
          <Item name="Legs" onClick={onClick} type={"legs"} />
          <Options
            active={"legs"}
            onSelect={props.onSelect}
            userOwned={userOwned?.legs}
            showOnlyUserOwned={isChecked}
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
