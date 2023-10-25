import { useState } from "react";
import Options from "../Options";
import Item from "./Item";
import { IoClose } from 'react-icons/io5';

const MainPartControls = props => {
    const [bool,setBool] = useState(false)
    const onClick = (type) => {
        if(bool){
            props.setActiveMainPart(type);
        }else{
            props.setActiveMainPart(" ")
        } 
        setBool(!bool)
    }
    return (
        <div className="flex justify-center items-center">
            <div className="my-[30%]">
            <Item name="Torso" onClick={onClick} active={props.active == 'torso'} type={'torso'} />
            {props.active === 'torso' && <Options active={props.active} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
            <Item name="Left Arm" onClick={onClick} active={props.active == 'leftarm'} type={'leftarm'} />
            {props.active === 'leftarm' && <Options active={props.active} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
            <Item name="Right Arm" onClick={onClick} active={props.active == 'rightarm'} type={'rightarm'} />
            {props.active === 'rightarm' && <Options active={props.active} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
            <Item name="Backpack" onClick={onClick} active={props.active == 'backpack'} type={'backpack'} />
            {props.active === 'backpack' && <Options active={props.active} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
            <Item name="Legs" onClick={onClick} active={props.active == 'legs'} type={'legs'} />
            {props.active === 'legs' && <Options active={props.active} onSelect={props.onSelect} close={() => setActiveMainPart(null)} />}
            </div>
            
        </div>
    )
}

export default MainPartControls;