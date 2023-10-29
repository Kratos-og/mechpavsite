import { useState } from "react";
import Options from "../Options";
import Item from "./Item";
import { IoClose } from 'react-icons/io5';
import Main_data from "../Options/data";


const MainPartControls = props => {
    const [NftHoldings,setNftHoldings]= useState(["DefenderTorsoPL04846","DefenderLeftArmPL04846","DefenderRightArmPL04846","DefenderBackPackPL04846","DefenderLegsPL04846","SubTerrainTorsoPL04846","SubTerrainLeftArmPL04846","SubTerrainRightArmPL04846","SubTerrainBackPackPL04846","SubTerrainLegsPL04846"]);
    //this is to remove numbers
    const NFTs = NftHoldings.map(str => str.replace(/\d/g, ''));
    // const wordsToFind = ["SubTerrain", "DeepSea", "DeepSpace", "Defender", "Energy"];
    
      const torsoItems = NFTs.filter(item => item.includes("Torso"));
      const leftarmItems = NFTs.filter(item => item.includes("LeftArm"));
      const rightarmItems = NFTs.filter(item => item.includes("RightArm"));
      const backpackItems = NFTs.filter(item => item.includes("BackPack"));
      const legsItems = NFTs.filter(item => item.includes("Legs"));

    torsoItems.map((data_0)=>{
        Main_data.torso.map((data_1)=>{console.log(data_1.type.name  )})
    })
       
    
    const [bool, setBool] = useState(false)
    const onClick = (type) => {
        if (bool) {
            props.setActiveMainPart(type);
        } else {
            props.setActiveMainPart(" ")
        }
        setBool(!bool)
    }
    return (
        <div className="flex justify-center items-center">
            {props.isLogin ?
                <div className="lg:my-[35%] w-full h-full max-lg:absolute max-lg:bottom-0 max-lg:overflow-y-auto max-lg:bg-white/30">
                    <Item name="Torso" onClick={onClick} type={'torso'} />
                    <Options active={'torso'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />
                    <Item name="Left Arm" onClick={onClick} type={'leftarm'} />
                    <Options active={'leftarm'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />
                    <Item name="Right Arm" onClick={onClick} type={'rightarm'} />
                    <Options active={'rightarm'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />
                    <Item name="Backpack" onClick={onClick} type={'backpack'} />
                    <Options active={'backpack'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />
                    <Item name="Legs" onClick={onClick} type={'legs'} />
                    <Options active={'legs'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />
                </div> :
                <div className=" w-screen lg:h-screen flex flex-col justify-center items-center max-lg:absolute top-[20%]">
                    <p className="text-[#F7F8F3]">LOGIN TO CONTINUE</p>
                    <a href="/api/auth/login" className='w-[70%] h-[10%] mt-5 py-7 text-sm newButton relative text-[#002C3E] group font-light ' >
                        <div className='frame  w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
                            <div className="lines"></div>
                            <div className="angles"></div>
                            <div className='bg-[#F7F8F3] w-full h-full flex justify-center items-center'>
                                <p className='text-xl'>LOGIN</p>
                            </div>
                        </div>
                    </a>
                </div>
            }

        </div>
    )
}

export default MainPartControls;