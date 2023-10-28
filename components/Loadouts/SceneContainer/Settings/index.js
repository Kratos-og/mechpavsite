import Modal from "@/components/UI/Modal";
import { useEffect, useState } from "react";
import Backgrounds from "./Backgrounds";
import {RiDeleteBin5Line} from "react-icons/ri"
import {MdOutlineEdit} from "react-icons/md"

const Settings = props => {
    const [active, setActive] = useState('bg');
    const [deleteLoadouts,setDeleteLoadouts] = useState(false)
    return (
        <Modal show={props.show} close={props.close}>
            <div className="p-10">
                <div className="flex gap-4">
                    <div className={`px-5 py-2 ${active == 'bg' ? ' bg-white text-black' : ''} w-fit rounded-lg font-semibold cursor-pointer`} onClick={() => setActive('bg')}>Backgrounds</div>
                    <div className={`px-5 py-2 ${active == 'platform' ? ' bg-white text-black' : ''} w-fit rounded-lg font-semibold cursor-pointer`} onClick={() => setActive('platform')}>Platforms</div>
                    <div className={`px-5 py-2 ${active == 'loadouts' ? ' bg-white text-black' : ''} w-fit rounded-lg font-semibold cursor-pointer`} onClick={() => setActive('loadouts')}>LOADOUTS</div>
                </div>
                <div className="mt-5">
                    {active == 'bg' ? <Backgrounds setEnv={props.setEnv} env={props.env} /> : null}
                </div>
                <div className="mt-5 ">
                    <div className="grid grid-cols-3 gap-10 ">
                    {active == 'loadouts' ? props.loadouts.map((data)=>(
                        <div key={props.loadouts.indexOf(data)} className="bg-white/40 p-5 rounded-2xl" 
                        >
                        <div className="text-xs">
                        <p className="flex justify-between">torso : <p className="text-pavia-green">{data.torso}</p></p>
                        <p className="flex justify-between">leftarm : <p className="text-pavia-green">{data.leftarm}</p></p>
                        <p className="flex justify-between">rightarm : <p className="text-pavia-green">{data.rightarm}</p></p>
                        <p className="flex justify-between">backpack : <p className="text-pavia-green">{data.backpack}</p></p>
                        <p className="flex justify-between">legs : <p className="text-pavia-green">{data.legs}</p></p>
                        <div className="flex justify-between">
                            
                        <button className="text-base pt-3 text-white" onClick={()=>{props.setClose(false); props.setSelectedParts(data); props.setEditeMode(true);props.setEditIndex(props.loadouts.indexOf(data))}} ><p className="flex bg-gray-700 p-2 rounded-full"><MdOutlineEdit/></p></button>
                        <button className="text-base pt-3" onClick={()=>{props.loadouts.splice(props.loadouts.indexOf(data),1),setDeleteLoadouts(!deleteLoadouts)}}><p className="flex bg-gray-700 p-2 rounded-full "><RiDeleteBin5Line/></p></button>
                        </div>
                        </div>
                    </div>
                    )) : null}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Settings;