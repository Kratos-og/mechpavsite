import Modal from "@/components/UI/Modal";
import { useState } from "react";
import Backgrounds from "./Backgrounds";

const Settings = props => {
    const [active, setActive] = useState('bg');
    return (
        <Modal show={props.show} close={props.close}>
            <div className="p-10">
                <div className="flex gap-4">
                    <div className={`px-5 py-2 ${active == 'bg' ? ' bg-white text-black' : ''} w-fit rounded-lg font-semibold cursor-pointer`} onClick={() => setActive('bg')}>Backgrounds</div>
                    <div className={`px-5 py-2 ${active == 'platform' ? ' bg-white text-black' : ''} w-fit rounded-lg font-semibold cursor-pointer`} onClick={() => setActive('platform')}>Platforms</div>
                </div>
                <div className="mt-5">
                    {active == 'bg' ? <Backgrounds setEnv={props.setEnv} env={props.env} /> : null}
                </div>
            </div>
        </Modal>
    )
}

export default Settings;