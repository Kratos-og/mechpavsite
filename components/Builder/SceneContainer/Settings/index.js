import Modal from "@/components/UI/Modal";
import { useEffect, useState } from "react";
import Backgrounds from "./Backgrounds";
import { RiDeleteBin5Line } from "react-icons/ri"
import { MdOutlineEdit } from "react-icons/md"

const Settings = props => {
    return (
        // <Modal show={props.show} close={props.close}>
        //     <div className="p-10">
        //         <div className="flex gap-4">
        //             <div className={`px-5 py-2 text-black font-bold uppercase`}>Backgrounds</div>
        //         </div>
        //         <div className="mt-5">
        //             <Backgrounds setEnv={props.setEnv} env={props.env} />
        //         </div>
        //     </div>
        // </Modal>
        <div className="h-52 absolute select-none py-4 bottom-8 w-full z-50 lg:bg-gradient-to-r from-[#000] via-white/25">
            <div className="absolute top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent max-lg:hidden"></div>
            <div className={`px-5 py-2 text-sm uppercase tracking-wider`}>Background HDRs</div>
            <div className="px-10">
                <Backgrounds setEnv={props.setEnv} env={props.env} />
            </div>
        </div>
    )
}

export default Settings;