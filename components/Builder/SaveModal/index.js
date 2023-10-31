import { useEffect, useState } from "react";
import data from "../Controls/Options/data";
import Main_data from "../Controls/Options/data";
import {AiFillCloseSquare} from "react-icons/ai";
import { mechPartParser, mechTypeParser, mechVariantParser } from "../Controls/Utils";
import Locked from "./Locked";
import SpinnerSm from "@/components/UI/SpinnerSm";

const SaveModal = props => {
    // let [userOwned, setUserOwned] = useState();
    const [lockTorso,setLockTorso] = useState(true);
    const [lockLeft,setLockedLeft] = useState(true);
    const [lockRight,setLockedRight] = useState(true);
    const [lockBack,setLockedBack] = useState(true);
    const [lockLegs,setLockedLegs] = useState(true);
    const [error,setError]= useState(false)

  const handleInputChange = (e) => {
    props.setMechName(e.target.value);
  }
    useEffect(()=>{
        props.userNfts?.torso?.map((data)=> {
            if(props.selectedParts.torso === data){
                setLockTorso(false);
              }
              if(props.selectedParts.leftarm === data){
                setLockedLeft(false);
              }
              if(props.selectedParts.rightarm === data){
                setLockedRight(false);
              }
              if(props.selectedParts.backpack === data){
                setLockedBack(false);
              }
              if(props.selectedParts.legs === data){
                setLockedLegs(false);
              }       
        })
    },[props.userNfts])

    const handleclick = ()=>{
        if(props.mechName){
            props.onClick()
        }else setError("ERROR : MECH NAME IS REQUIRED !!")
    }
    return (
        <>
        {props.sentToBackEnd === "pending" && <div className="absolute w-full top-0 left-0 h-full flex items-center z-50 justify-center">
        <div className="w-[400px] h-[450px] rounded-sm p-5 bg-black/90">
            <p className="flex justify-center h-full items-center flex-col gap-5">
            <span className="scale-150"><SpinnerSm/></span>
            <p>SAVING YOUR MECH...!</p>
            </p>
            </div>
            </div>}
<div className="absolute w-full top-0 left-0 h-full flex items-center z-40 justify-center">
            <div className="w-[400px] h-[450px] rounded-sm p-5 bg-black/60">
                <div className="relative">
                    <button className="absolute text-xl right-0 " onClick={() => props.setSaveInit(false)}><AiFillCloseSquare/></button>
                    <div className="uppercase tracking-wider">Save loadout</div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                </div>
                <div className="py-5">
                    <div className="text-sm font-medium uppercase">Name your Mech</div>
                    <div className="mt-2 border-l-2">
                        <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                        <input type="text" className="bg-transparent h-full text-white text-sm outline-none px-2 mt-1" placeholder="Mech Name" onChange={handleInputChange} value={props.mechName}/>
                        <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-2"></div>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm font-medium uppercase">Mech Parts</div>
                        <div className="text-sm font-bold py-2">
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Torso</span>
                                <Locked type={data.torso[props.selectedParts.torso].type.name} skin={data.torso[props.selectedParts.torso].skin.FE_Name} lock={lockTorso}/>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Left Arm</span>
                                <Locked type={data.leftarm[props.selectedParts.leftarm].type.name} skin={data.leftarm[props.selectedParts.leftarm].skin.FE_Name} lock={lockLeft}/>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Right Arm</span>
                                <Locked type={data.rightarm[props.selectedParts.rightarm].type.name} skin={data.rightarm[props.selectedParts.rightarm].skin.FE_Name} lock={lockRight}/>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Backpack</span>
                                <Locked type={data.backpack[props.selectedParts.backpack].type.name} skin={data.backpack[props.selectedParts.backpack].skin.FE_Name} lock={lockBack}/>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Legs</span>
                                <Locked type={data.legs[props.selectedParts.legs].type.name} skin={data.legs[props.selectedParts.legs].skin.FE_Name} lock={lockLegs}/>
                            </div>
                            {error && <div className="text-red-600 text-xs bg-black/70 py-1 flex justify-center">{error}</div>}
                        </div>
                        {!lockTorso&&!lockRight&&!lockLeft&&!lockLegs&&!lockBack ?
                        <div className={`flex items-center justify-center mt-5 `}>
                        <button className={`px-10 bg-white text-black tracking-wider py-3 w-fit ${!lockTorso&&!lockRight&&!lockLeft&&!lockLegs&&!lockBack ? " ":"cursor-not-allowed bg-gray-400"}`}  onClick={handleclick} >CONFIRM</button>
                    </div>:
                        <div className={`flex items-center justify-center mt-2`}>
                        <button className={`px-10 text-black tracking-wider py-3 w-fit cursor-not-allowed bg-white/70`}>CONFIRM</button>
                    </div>}
                        
                        
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SaveModal;