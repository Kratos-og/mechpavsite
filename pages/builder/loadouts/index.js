import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { SceneContainer } from "../../../components/Loadouts/SceneContainer";
import data from "@/components/Builder/Controls/Options/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import CustomName from "@/components/Loadouts/CustomName";

export default function Loadouts() {
  const backend = [{
    "Arm-L_Class": "DSP",
    "Arm-L_Variant": "CT",
    "Arm-R_Class": "DSP",
    "Arm-R_Variant": "CS",
    "Torso_Class": "DSP",
    "Torso_Variant": "ELM",
    "Legs_Class": "DSE",
    "Legs_Variant": "JD",
    "Backpack_Class": "DEF",
    "Backpack_Variant": "LAB"
  }, {
    "Arm-L_Class": "DSP",
    "Arm-L_Variant": "CT",
    "Arm-R_Class": "DSP",
    "Arm-R_Variant": "CS",
    "Torso_Class": "DSP",
    "Torso_Variant": "ELM",
    "Legs_Class": "DSE",
    "Legs_Variant": "JD",
    "Backpack_Class": "DEF",
    "Backpack_Variant": "LAB"
  }, {
    "Arm-L_Class": "DSP",
    "Arm-L_Variant": "CT",
    "Arm-R_Class": "DSP",
    "Arm-R_Variant": "CS",
    "Torso_Class": "DSP",
    "Torso_Variant": "ELM",
    "Legs_Class": "DSE",
    "Legs_Variant": "JD",
    "Backpack_Class": "DEF",
    "Backpack_Variant": "LAB"
  }]
  const [loadItems, setLoadItems] = useState([]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  useEffect(() => {
    const items = getLoadOutItems();
    setLoadItems(items)
  }, [])

  const torsoItems = [];
  const armLItems = [];
  const armRItems = [];
  const backpackItems = [];
  const legsItems = [];

  for (const key in backend) {
    if (key.includes("Torso")) {
      torsoItems.push(backend[key]);
    }
    if (key.includes("Arm-L")) {
      armLItems.push(backend[key]);
    }
    if (key.includes("Arm-R")) {
      armRItems.push(backend[key]);
    }
    if (key.includes("Backpack")) {
      backpackItems.push(backend[key]);
    }
    if (key.includes("Legs")) {
      legsItems.push(backend[key]);
    }
  }


  const getLoadOutItems = () => {
    let res = backend.map(loadout => {
      let torso = data['torso'].findIndex(item => item.type?.BE_Code == loadout['Torso_Class'] && item.skin?.BE_Code == loadout["Torso_Variant"]);
      let rightarm = data['rightarm'].findIndex(item => item.type?.BE_Code == loadout['Arm-R_Class'] && item.skin?.BE_Code == loadout["Arm-R_Variant"]);
      let leftarm = data['leftarm'].findIndex(item => item.type?.BE_Code == loadout['Arm-L_Class'] && item.skin?.BE_Code == loadout["Arm-L_Variant"]);
      let backpack = data['backpack'].findIndex(item => item.type?.BE_Code == loadout['Backpack_Class'] && item.skin?.BE_Code == loadout["Backpack_Variant"]);
      let legs = data['legs'].findIndex(item => item.type?.BE_Code == loadout['Legs_Class'] && item.skin?.BE_Code == loadout["Legs_Variant"]);
      return { torso, rightarm, leftarm, backpack, legs };
    });
    return res;
  }

  const [index, setIndex] = useState(1);

  const loadoutItems = loadItems.map((item, i) => <SwiperSlide>
    <div className={`relative flex flex-col w-full h-full duration-300 items-center justify-center py-10`} key={index}>
      <CustomName activeSlideIndex={activeSlideIndex} index={i}>TITANIUM</CustomName>
      <Canvas className="cursor-pointer ">
        <SceneContainer position={activeSlideIndex == i ? [2, -6, 0] : [1.5, 0, 0]} scale={activeSlideIndex == i ? 7.5 : 3} index={1} selectedParts={{ torso: item.torso, rightarm: item.rightarm, leftarm: item.leftarm, backpack: item.backpack, legs: item.legs }} />
      </Canvas>
    </div>
  </SwiperSlide>)

  return (
    <div className="h-screen w-screen ">
      <div className="w-full h-full flex">
        <Swiper cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          slidesPerView={3} onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)} className="w-full h-full mySwiper">
          <SwiperSlide></SwiperSlide>
          {loadoutItems}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>


    </div>
  );
}
Loadouts.DisplayName = "Loadouts";
