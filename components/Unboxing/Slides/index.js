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
                    <div onClick={() => props.onRemove(item)} className="bg-red-600 hover:bg-red-700 cursor-pointer transition-all w-fit font-bold text-black uppercase m-auto px-3 py-1 rounded-full whitespace-nowrap">
                        Remove Selection
                    </div>
                }

            </div>
        </SwiperSlide>
    )
    return (
        <div className="max-lg:mb-16">
        {!props.confirmation && <Swiper modules={[Navigation]} slidesPerView={1} navigation={true} className="w-80 text-center unboxSlider">
            {slideItems}
        </Swiper>}
        {props.confirmation && 
        <div className="flex flex-col gap-6 border-2 border-white p-6">
            <div>YOU HAVE SELECTED : <span className="text-pavia-green">{props.numberOfCrates} {props.numberOfCrates==1 ? 'CRATE':'CRATES'}</span> </div>
            <div className="flex justify-around">
            <button onClick={props.setConfirmation} className="bg-white text-black px-3 py-1">CANCEL</button>
            <button onClick={props.onMintInitiate} className="bg-white text-black px-3 py-1">CONFIRM</button>
            </div>
            </div>}
        </div>
    )
}

export default Slides;