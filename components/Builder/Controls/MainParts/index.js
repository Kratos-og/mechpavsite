import Item from "./Item";
import { IoClose } from 'react-icons/io5';

const MainPartControls = props => {
    const onClick = (type) => {
        props.setActiveMainPart(type);
    }
    return (
        <div className="flex flex-col gap-3 ">
            <div className="absolute top-0 right-5 py-1 px-3 z-50 flex border-2 border-[#CDDEFF] cursor-pointer rounded-[0.3rem]
             gap-2 items-center scale-75 " onClick={()=>props.setShowMenu(false)}>
                <p className="bg-pavia-green/90 text-black text-xs p-1 rounded-[0.3rem] font-bold">[&nbsp;X&nbsp;]</p>
                    <p className='p-1 bg-white rounded-full'>
                    <IoClose className="text-xl text-black" />
                    </p>
                </div>
            <Item name="Torso" onClick={onClick} active={props.active == 'torso'} type={'torso'} />
            <Item name="Left Arm" onClick={onClick} active={props.active == 'leftarm'} type={'leftarm'} />
            <Item name="Right Arm" onClick={onClick} active={props.active == 'rightarm'} type={'rightarm'} />
            <Item name="Backpack" onClick={onClick} active={props.active == 'backpack'} type={'backpack'} />
            <Item name="Legs" onClick={onClick} active={props.active == 'legs'} type={'legs'} />
        </div>
    )
}

export default MainPartControls;