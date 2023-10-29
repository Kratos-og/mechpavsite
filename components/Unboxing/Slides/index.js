import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { hex2a } from "@/components/Common/utils";

const Slides = props => {
    const slideItems = props.assets.map(item =>
        <SwiperSlide key={item.split('.')[1]}>
            <div className="text-sm flex flex-col gap-3">
                <div className="font-semibold uppercase tracking-wider">{hex2a(item.split('.')[1])}</div>
                {!props.selected?.includes(item) ?
                    <div onClick={() => props.onAdd(item)} className="bg-pavia-green hover:bg-pavia-green/80 cursor-pointer transition-all w-fit font-bold text-black uppercase m-auto px-3 py-1 rounded-full whitespace-nowrap">
                        Add to unbox +
                    </div>
                    :
                    <div onClick={() => props.onRemove(item)} className="bg-pavs-red hover:bg-pavs-red/75 cursor-pointer transition-all w-fit font-bold text-black uppercase m-auto px-3 py-1 rounded-full whitespace-nowrap">
                        Remove
                    </div>
                }

            </div>
        </SwiperSlide>
    )
    return (
        <Swiper modules={[Navigation]} slidesPerView={1} navigation={true} className="w-80 text-center unboxSlider">
            {slideItems}
        </Swiper>
    )
}

export default Slides;