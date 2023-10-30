import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";
import Link from "next/link";

const Success = props => {
    const slideItems = props.nftData?.map(item =>
        <SwiperSlide>
            <div className="text-sm flex flex-col gap-3 w-80 select-none text-black">
                <img src={item.image} className="w-full h-[95%] object-cover" />
                <div className="font-bold">{item.name}</div>
            </div>
        </SwiperSlide>
    )
    return (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center text-black">
            <div className="text-[60px] font-bold uppercase tracking-wider">2x Crates Unlocked</div>
            <Swiper modules={[Navigation]} slidesPerView={1} grabCursor navigation={true} className="w-80 text-center unboxSlider">
                {slideItems}
            </Swiper>
            <div className="absolute w-full bottom-0 h-20 flex items-center gap-7 justify-end px-10">
                <Link href="/minting">
                    <div className="px-7 py-4 bg-black cursor-pointer font-medium text-white text-sm tracking-wider">Mint More Crates</div>
                </Link>
                <Link href="/builder">
                    <div className="px-7 py-4 bg-black cursor-pointer font-medium text-white text-sm tracking-wider">Go to Mech Builder</div>
                </Link>
            </div>
        </div>
    )
}

export default Success;