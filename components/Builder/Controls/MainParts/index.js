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
            {props.isLogin ?
            <div className="my-[35%] w-full">
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
            <div className=" w-full h-[100vh] flex flex-col justify-center items-center">
                <p className="text-[#F7F8F3]">LOGIN TO CONTINUE</p>
                <button className='w-[70%] h-[10%] mt-5 py-7 text-sm newButton relative text-[#002C3E] group font-light ' onClick={() => props.setIsLogin(true)}>
              <div className='frame  w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
                <div className="lines"></div>
                <div className="angles"></div>
                <div className='bg-[#F7F8F3] w-full h-full flex justify-center items-center'>
                  <p className='text-xl'>LOGIN</p>
                </div>
              </div>
            </button>
            </div>
            }

        </div>
    )
}

export default MainPartControls;