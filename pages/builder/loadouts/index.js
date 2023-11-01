import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { SceneContainer } from "../../../components/Loadouts/SceneContainer";
import data from "@/components/Builder/Controls/Options/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import CustomName from "@/components/Loadouts/CustomName";
import axios from "axios";
import SpinnerSm from "@/components/UI/SpinnerSm";
import { useRouter } from "next/router";

export default function Loadouts() {
  const [userLoadouts, setUserLoaduts] = useState([]);
  const [loadItems, setLoadItems] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getSavedMechs();
  }, [])

  const getSavedMechs = async (bearer) => {
    try {
      const res = await axios.get('/api/pavia/getSavedMechs');
      if (!res.data?.length) {
        setErr('No Loadouts Found!')
      }
      setUserLoaduts(res.data)
      const items = getLoadOutItems(res.data);
      setLoadItems(items);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
      if (err.message == 'Request failed with status code 401') {
        router.push('/builder');
      }
      else {
        setErr(err.message?.toString());
      }
    }
  }

  const getLoadOutItems = (items) => {
    let res = items.map(item => {
      let loadout = item.properties;
      let torso = data['torso'].findIndex(item => item.type?.BE_Code == loadout['Torso_Class'] && item.skin?.BE_Code == loadout["Torso_Variant"]);
      let rightarm = data['rightarm'].findIndex(item => item.type?.BE_Code == loadout['Arm-R_Class'] && item.skin?.BE_Code == loadout["Arm-R_Variant"]);
      let leftarm = data['leftarm'].findIndex(item => item.type?.BE_Code == loadout['Arm-L_Class'] && item.skin?.BE_Code == loadout["Arm-L_Variant"]);
      let backpack = data['backpack'].findIndex(item => item.type?.BE_Code == loadout['Backpack_Class'] && item.skin?.BE_Code == loadout["Backpack_Variant"]);
      let legs = data['legs'].findIndex(item => item.type?.BE_Code == loadout['Legs_Class'] && item.skin?.BE_Code == loadout["Legs_Variant"]);
      return { torso, rightarm, leftarm, backpack, legs };
    });
    return res;
  }

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  };
  const loadoutItems = loadItems.map((item, i) => <SwiperSlide>
    <div className={`relative flex flex-col w-full h-full duration-300 items-center justify-center py-10`} key={i}>
      <CustomName activeSlideIndex={activeSlideIndex} index={i} item={item}>{userLoadouts[i]?.name}</CustomName>
      <Canvas className="cursor-pointer ">
        <SceneContainer position={activeSlideIndex == i ? [2, -5, 0] : [1.5, 0, 0]} scale={activeSlideIndex == i ? 6.5 : 3} index={1} selectedParts={{ ...item }} />
      </Canvas>
    </div>
  </SwiperSlide>)

  return (
    <div className="h-screen w-screen ">
      {!loading ? <div className="w-full h-full flex">
        {/* pc */}
        <button className=" text-white">Go Back</button>
        <Swiper cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          breakpoints={breakpoints} onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)} className="w-full h-full mySwiper">
          <SwiperSlide className=" hidden md:block"></SwiperSlide>
          {loadoutItems}
          <SwiperSlide className=" hidden md:block"></SwiperSlide>
        </Swiper>
      </div> :
        <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
          <SpinnerSm />
          <span className="text-sm text-pavs-red">{err}</span>
        </div>
      }
    </div>
  );
}
Loadouts.DisplayName = "Loadouts";
