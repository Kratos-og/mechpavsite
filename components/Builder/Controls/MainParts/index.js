import { useState } from "react";
import Options from "../Options";
import Item from "./Item";
import { IoClose } from 'react-icons/io5';

const MainPartControls = props => {
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
            <div className="my-[30%] w-full">
                <Item name="Torso" onClick={onClick} active={'torso'} type={'torso'} />
                {true && <Options active={'torso'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
                <Item name="Left Arm" onClick={onClick} active={'leftarm'} type={'leftarm'} />
                {true && <Options active={'leftarm'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
                <Item name="Right Arm" onClick={onClick} active={'rightarm'} type={'rightarm'} />
                {true && <Options active={'rightarm'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
                <Item name="Backpack" onClick={onClick} active={'backpack'} type={'backpack'} />
                {true && <Options active={'backpack'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
                <Item name="Legs" onClick={onClick} active={'legs'} type={'legs'} />
                {true && <Options active={'legs'} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
            </div>

        </div>
    )
}

export default MainPartControls;