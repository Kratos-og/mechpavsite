import SpinnerSm from "@/components/UI/SpinnerSm";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IoMdClose } from 'react-icons/io';
const Options = props => {
    const data = { torso: ['torsoDEF', 'torsoDSE', 'torsoDSP'], leftarm: ['armLDEF', 'armLDSE', 'armLDSP'], rightarm: ['armRDEF', 'armRDSE', 'armRDSP'], backpack: ['backpackDEF', 'backpackDSE', 'backpackDSP'], legs: ['legsDEF', 'legsDSE', 'legsDSP'] };
    let items = [];
    const [loading, setLoading] = useState(null);

    const onItemSelect = (active, item) => {
        try {
            setLoading({ active, item });
            let model = useLoader(
                GLTFLoader,
                `/assets/models/${active}/${item}.gltf`
            );
            if (model?.scene) {
                props.onSelect(active, item)
                setLoading(null)
            }
        }
        catch (err) {
            Promise.resolve(err).then(e => {
                props.onSelect(active, item)
                setLoading(null)
            })

        }
    }

    if (props.active) {
        items = data[props.active]?.map(item => <div className="w-full p-5 relative flex items-center justify-center hover:bg-white cursor-pointer rounded-lg hover:bg-opacity-40" onClick={() => onItemSelect(props.active, item)}>
            {loading && loading.active == props.active && loading.item == item ? <div className="absolute top-2 right-4"><SpinnerSm /></div> : null}
            <img src={`/assets/images/previews/${props.active}/${item}.png`} className="w-24" />
        </div>
        )
    }

    return (
        <div className="w-[300px] p-5 relative h-[90%]  rounded-md border-2 border-[#CDDEFF]">
            <div className="absolute top-3 right-4 cursor-pointer" onClick={props.close}>
                <IoMdClose className="text-xl text-white" />
            </div>
            <div className="pb-2 text-sm font-bold uppercase tracking-widest flex"><p className="text-pavia-green">|</p>&nbsp;&nbsp;{props.active}<p className="text-pavia-green">&nbsp;&nbsp;|</p></div>
            <div className="overflow-y-auto h-[90%] py-5 px-3 custom-scroll my-4 ">
                {items}
            </div>
        </div>
    )
}

export default Options;