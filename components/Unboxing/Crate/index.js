import { hex2a } from "@/components/Common/utils";

const Crate = props => {
    console.log(props.item)
    return (
        <div className="flex flex-col text-center px-5 py-7 bg-gray-700/25" onClick={props.onClick}>
            <img src="/assets/images/crate_img.png" className="w-[150px] cursor-pointer object-cover crate" />
            <div className="text-[10px] uppercase font-bold text-pavia-green">Mech Crate</div>
            <div className="mt-2 font-semibold">{hex2a(props.item.split('.')[1])}</div>
        </div>
    )
}

export default Crate;