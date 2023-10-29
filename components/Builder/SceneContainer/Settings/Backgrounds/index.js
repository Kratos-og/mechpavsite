import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";
import "swiper/css";
import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";

const Backgrounds = props => {
    const data = [{ name: 'Industrial Sunset', id: 'industrial_sunset' }, { name: 'kloofendal', id: 'kloofendal' }, { name: 'kloppenheim', id: 'kloppenheim' }, { name: 'Modern Buildings', id: 'modern_buildings' },
    { name: 'Old Depot', id: 'old_depot' }, { name: 'Peppermint Powerplant', id: 'peppermint_powerplant' }, { name: 'Syferfontein', id: 'syferfontein' }, { name: 'Workshop', id: 'workshop' }];

    const items = data.map(item =>
        <SwiperSlide>
            <Item {...item} key={item.id} onClick={() => props.setEnv(item.id)} selected={props.env == item.id} />
        </SwiperSlide>)

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center text-center">
            <Swiper modules={[Navigation]} slidesPerView={5} spaceBetween={20} grabCursor className="w-full h-full" navigation={true}>
                {items}
            </Swiper>
        </div>
    )
}

export default Backgrounds;