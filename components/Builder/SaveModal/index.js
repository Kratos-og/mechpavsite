import { useEffect, useState } from "react";
import data from "../Controls/Options/data";
import { AiFillCloseSquare } from "react-icons/ai";
import Locked from "./Locked";
import SpinnerSm from "@/components/UI/SpinnerSm";
import axios from "axios";
import Main_Data from "../Controls/Options/data";

const SaveModal = props => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    const [mechName, setMechName] = useState(props.selectedParts?.name);

    const handleInputChange = (e) => {
        setMechName(e.target.value);
    }

    const saveLoadout = async () => {
        try {
            if (!mechName) {
                setError("ERROR : MECH NAME IS REQUIRED ");
                return;
            }
            setLoading(true);
            let payload = {
                "Arm-L_Class": Main_Data.leftarm[props.selectedParts.leftarm].type.BE_Code,
                "Arm-L_Variant": Main_Data.leftarm[props.selectedParts.leftarm].skin.BE_Code,
                "Arm-R_Class": Main_Data.rightarm[props.selectedParts.rightarm].type.BE_Code,
                "Arm-R_Variant": Main_Data.rightarm[props.selectedParts.rightarm].skin.BE_Code,
                "Torso_Class": Main_Data.torso[props.selectedParts.torso].type.BE_Code,
                "Torso_Variant": Main_Data.rightarm[props.selectedParts.rightarm].skin.BE_Code,
                "Legs_Class": Main_Data.legs[props.selectedParts.legs].type.BE_Code,
                "Legs_Variant": Main_Data.legs[props.selectedParts.legs].skin.BE_Code,
                "Backpack_Class": Main_Data.backpack[props.selectedParts.backpack].type.BE_Code,
                "Backpack_Variant": Main_Data.backpack[props.selectedParts.backpack].skin.BE_Code,
            };
            const res = await axios.post("/api/pavia/saveLoadout", {
                name: mechName,
                properties: payload,
                Pav: "Rex"
            });
            props.setSaveInit(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    let isValid = props.userNfts?.torso?.includes(props.selectedParts?.torso) &&
        props.userNfts?.leftarm?.includes(props.selectedParts?.leftarm) &&
        props.userNfts?.rightarm?.includes(props.selectedParts?.rightarm) &&
        props.userNfts?.backpack?.includes(props.selectedParts?.backpack) &&
        props.userNfts?.legs?.includes(props.selectedParts?.legs);

    return (
        <>
            <div className="absolute w-full top-0 left-0 h-full flex items-center z-40 justify-center">
                <div className="w-[400px] h-[450px] rounded-sm p-5 bg-black/60">
                    {!loading ? <>
                        <div className="relative">
                            <button className="absolute text-xl right-0 " onClick={() => props.setSaveInit(false)}><AiFillCloseSquare /></button>
                            <div className="uppercase tracking-wider">Save loadout</div>
                            <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                        </div>
                        <div className="py-5">
                            <div className="text-sm font-medium uppercase">Name your Mech</div>
                            <div className="mt-2 border-l-2">
                                <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                                <input value={mechName} type="text" className="bg-transparent h-full text-white text-sm outline-none px-2 mt-1" placeholder="Mech Name" onChange={handleInputChange} />
                                <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-2"></div>
                            </div>
                            <div className="mt-4">
                                <div className="text-sm font-medium uppercase">Mech Parts</div>
                                <div className="text-sm font-medium py-2">
                                    <div className=" ml-1 py-1 flex items-center justify-between">
                                        <span>Torso</span>
                                        <Locked type={data.torso[props.selectedParts.torso].type.name} skin={data.torso[props.selectedParts.torso].skin.FE_Name} lock={!props.userNfts?.torso?.includes(props.selectedParts?.torso)} />
                                    </div>
                                    <div className=" ml-1 py-1 flex items-center justify-between">
                                        <span>Left Arm</span>
                                        <Locked type={data.leftarm[props.selectedParts.leftarm].type.name} skin={data.leftarm[props.selectedParts.leftarm].skin.FE_Name} lock={!props.userNfts?.leftarm?.includes(props.selectedParts?.leftarm)} />
                                    </div>
                                    <div className=" ml-1 py-1 flex items-center justify-between">
                                        <span>Right Arm</span>
                                        <Locked type={data.rightarm[props.selectedParts.rightarm].type.name} skin={data.rightarm[props.selectedParts.rightarm].skin.FE_Name} lock={!props.userNfts?.rightarm?.includes(props.selectedParts?.rightarm)} />
                                    </div>
                                    <div className=" ml-1 py-1 flex items-center justify-between">
                                        <span>Backpack</span>
                                        <Locked type={data.backpack[props.selectedParts.backpack].type.name} skin={data.backpack[props.selectedParts.backpack].skin.FE_Name} lock={!props.userNfts?.backpack?.includes(props.selectedParts?.backpack)} />
                                    </div>
                                    <div className=" ml-1 py-1 flex items-center justify-between">
                                        <span>Legs</span>
                                        <Locked type={data.legs[props.selectedParts.legs].type.name} skin={data.legs[props.selectedParts.legs].skin.FE_Name} lock={!props.userNfts?.legs?.includes(props.selectedParts?.legs)} />
                                    </div>
                                    {error && <div className="text-red-600 text-xs bg-black/70 py-1 flex justify-center">{error}</div>}
                                </div>
                                <div className={`flex items-center justify-center mt-5 `}>
                                    <button disabled={!isValid}
                                        className={`px-10 disabled:bg-white/70 bg-white text-black tracking-wider py-3 w-fit ${!isValid ? "cursor-not-allowed bg-gray-400" : ''}`} onClick={saveLoadout} >CONFIRM</button>
                                </div>
                            </div>
                        </div>
                    </>
                        :
                        <p className="flex justify-center h-full items-center text-sm flex-col gap-5">
                            <span className="scale-150"><SpinnerSm /></span>
                            <p>SAVING YOUR MECH</p>
                        </p>
                    }
                </div>
            </div>
        </>
    )
}

export default SaveModal;