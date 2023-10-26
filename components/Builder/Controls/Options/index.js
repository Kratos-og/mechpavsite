import SpinnerSm from "@/components/UI/SpinnerSm";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";

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
        items = data[props.active]?.map((item, index) =>
            <SwiperSlide>
                <div className="relative flex items-center justify-center" onClick={() => onItemSelect(props.active, item)} key={index}>
                    {loading && loading.active == props.active && loading.item == item ? <div className="absolute top-2 right-4"><SpinnerSm /></div> : null}
                    <img src={`/assets/images/previews/${props.active}/${item}.png`} className="w-24" />
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className=" relative  rounded-md ">
            {/* <div className="absolute top-3 right-4 cursor-pointer" onClick={props.close}>
                <IoMdClose className="text-xl text-white" />
            </div> */}
            {/* <div className="pb-2 text-sm font-bold uppercase tracking-widest flex"><p className="text-pavia-green">|</p>&nbsp;&nbsp;{props.active}<p className="text-pavia-green">&nbsp;&nbsp;|</p></div> */}
            <Swiper modules={[Navigation]} slidesPerView={1} grabCursor className="w-full h-full" navigation={true} >
                {items}
            </Swiper>
        </div>
    )
}

export default Options;