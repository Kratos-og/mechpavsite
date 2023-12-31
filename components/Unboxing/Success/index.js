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
                <div className="font-bold">{item.metadata?.name ?? item.name}</div>
            </div>
        </SwiperSlide>
    )
    return (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center text-black">
            <div className="text-[60px] font-bold uppercase tracking-wider max-md:text-2xl">{props.selected?.length}x Crates Unlocked</div>
            <Swiper modules={[Navigation]} slidesPerView={1} grabCursor navigation={true} className="w-80 text-center unboxSlider">
                {slideItems}
            </Swiper>
            <div className="absolute w-full bottom-0 h-20 flex items-center gap-7 justify-end px-10">
                <Link href="/minting">
                    <div className="md:px-7 px-4 py-4 bg-black cursor-pointer font-medium text-white text-sm tracking-wider max-md:text-xs">Mint More Crates</div>
                </Link>
                {/* <Link href="/builder">
                    <div className="md:px-7 px-4 py-4 bg-black cursor-pointer font-medium text-white text-sm tracking-wider max-md:text-xs">Go to Mech Builder</div>
                </Link> */}
            </div>
        </div>
    )
}

export default Success;