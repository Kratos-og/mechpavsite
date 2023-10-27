import SpinnerSm from "@/components/UI/SpinnerSm";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";
import data from "./data"

const Options = props => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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
            <SwiperSlide key={index} className={``}>
                <div className={`relative flex items-center justify-center py-10 ${index === activeSlideIndex ? 'scale-[1.5] duration-200 ease-in-out' : 'scale-75 duration-200 ease-in-out '}`} onClick={() => onItemSelect(props.active, item)} key={index}>
                    {loading && loading.active == props.active && loading.item == item ? <div className="absolute top-2 right-4"><SpinnerSm /></div> : null}
                    <p className="w-full h-full">
                    <img src={`/assets/images/previews/${props.active}/${item}.png`} className="" />
                    </p>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className="relative  rounded-md ">
            <Swiper modules={[Navigation]} slidesPerView={3} grabCursor className="w-full h-full" navigation={true} onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}>
            <SwiperSlide> </SwiperSlide>
                {items}
            <SwiperSlide> </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Options;